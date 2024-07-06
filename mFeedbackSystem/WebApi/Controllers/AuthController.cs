﻿using Application.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Auth;
using WebApi.DTOs;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly JwtTokenService _jwtTokenService;
        private readonly LoggedUser _loggedUser;

        public AuthController(IUserService userService, JwtTokenService jwtTokenService, LoggedUser loggedUser)
        {
            _userService = userService;
            _jwtTokenService = jwtTokenService;
            _loggedUser = loggedUser;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            var user = await _userService.Authenticate(model.UserName, model.Password);
            if (user == null)
                return BadRequest("Podano błędny login lub hasło");

            var token = _jwtTokenService.GenerateJwtToken(user);
            return Ok(new
            {
                User = user, //user zwracamy dla testów
                Token = token // w Login powinniśmy zwrócić sam TOKEN bez usera
            });
        }

        [HttpGet("test/public")]
        [AllowAnonymous]
        public IActionResult TestPublic() => Ok(_loggedUser);

        [HttpGet("test/private")]
        [Authorize]
        public IActionResult TestPrivate() => Ok(_loggedUser);

        [HttpGet("test/admin")]
        [Authorize(Roles = "Administrator")]
        public IActionResult TestAdmin() => Ok(_loggedUser);

        [HttpGet("test/user")]
        [Authorize(Roles = "User")]
        public IActionResult TestUser() => Ok(_loggedUser);
    }
}
