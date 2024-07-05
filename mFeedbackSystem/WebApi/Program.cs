using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Application.Services;
using Microsoft.OpenApi.Models;
using Persistence.Context;
using Persistence.Repositories;
using WebApi.Auth;
using Domain.Models;
using System.Security.Claims;

namespace WebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "FeedbackSystem WebApi", Version = "v1" });

                // Konfiguracja Swaggera do u¿ywania tokenów Bearer
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    In = ParameterLocation.Header,
                    Description = "Proszê wprowadziæ token JWT z prefiksem 'Bearer' w polu",
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey
                });
                c.AddSecurityRequirement(new OpenApiSecurityRequirement {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            }
                        },
                        new string[] { }
                    }
                });
            });


            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!)),
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidIssuer = builder.Configuration["Jwt:Issuer"],
                        ValidAudience = builder.Configuration["Jwt:Audience"]
                    };

                });
            builder.Services.AddAuthorization();

            builder.Services.AddSingleton<IDapperContext, DapperContext>();
            builder.Services.AddSingleton<IUserRepository, UserRepository>();
            builder.Services.AddSingleton<IUserService, UserService>();
            builder.Services.AddScoped<IReportRepository, ReportRepository>();
            builder.Services.AddScoped<IReportService, ReportService>();
            builder.Services.AddSingleton<JwtTokenService>();

            builder.Services.AddHttpContextAccessor(); //ta linia jest niezbêdna do pobierania HttpContext
            builder.Services.AddScoped<LoggedUser>(serviceProvider =>
            {
                var httpContextAccessor = serviceProvider.GetRequiredService<IHttpContextAccessor>();
                var identity = httpContextAccessor.HttpContext?.User.Identity as ClaimsIdentity;
                if (identity == null || !identity.Claims.Any())
                    return new LoggedUser(0, "", "", UserRole.Anonymous); //nie mo¿emy wstrzykn¹æ null-a, dlatego tworzymy zalogowanego usera, który nie jest zalogowany.

                var claims = identity.Claims.ToDictionary(k => k.Type);
                return new LoggedUser(
                    int.Parse(claims[ClaimTypes.NameIdentifier].Value),
                    claims[ClaimTypes.Name].Value,
                    claims[ClaimTypes.Email].Value,
                    Enum.Parse<UserRole>(claims[ClaimTypes.Role].Value)
                );
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthentication();
            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
