using Domain.Models;
using Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;

namespace Persistence.Repositories
{
    public class PromotionRepository : IPromotionRepository
    {
        private readonly IDapperContext _context;

        public PromotionRepository(IDapperContext context)
        {
            _context = context;
        }
        public async Task<Promotion?> GetByIdAsync(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                var sql = "SELECT * FROM Promotions WHERE PromotionId = @Id AND IsDeleted = 0";
                return await connection.QuerySingleOrDefaultAsync<Promotion>(sql, new { Id = id });
            }
        }

        public async Task<IEnumerable<Promotion>> GetAllAsync()
        {
            using (var connection = _context.CreateConnection())
            {
                var sql = "SELECT * FROM Promotions WHERE IsDeleted = 0";
                return await connection.QueryAsync<Promotion>(sql);
            }
        }

        public Task<int> Create(Promotion model)
        {
            throw new NotImplementedException();
        }

        public async Task<Promotion?> CreateAsync(Promotion promotion)
        {
            using (var connection = _context.CreateConnection())
            {
                var sql = @"
                    INSERT INTO Promotions (PromotionName, Description, PointsRequired, CreatedBy, CreatedAt, ModifiedBy, ModifiedAt, IsDeleted) 
                    VALUES (@PromotionName, @Description, @PointsRequired, @CreatedBy, @CreatedAt, @ModifiedBy, @ModifiedAt, @IsDeleted);
                    SELECT CAST(SCOPE_IDENTITY() as int)";
                var id = await connection.ExecuteScalarAsync<int>(sql, promotion);
                return new Promotion(
                    id,
                    promotion.PromotionName,
                    promotion.Description,
                    promotion.PointsRequired,
                    promotion.CreatedBy,
                    promotion.CreatedAt,
                    promotion.ModifiedBy,
                    promotion.ModifiedAt,
                    promotion.IsDeleted
                );
            }
        }

        public async Task<bool> UpdateAsync(Promotion promotion)
        {
            using (var connection = _context.CreateConnection())
            {
                var sql = @"
                    UPDATE Promotions
                    SET PromotionName = @PromotionName, 
                        Description = @Description, 
                        PointsRequired = @PointsRequired,
                        ModifiedBy = @ModifiedBy,
                        ModifiedAt = @ModifiedAt
                    WHERE PromotionId = @PromotionId AND IsDeleted = 0";
                var result = await connection.ExecuteAsync(sql, new
                {
                    promotion.PromotionName,
                    promotion.Description,
                    promotion.PointsRequired,
                    promotion.ModifiedBy,
                    promotion.ModifiedAt,
                    promotion.PromotionId
                });
                return result > 0;
            }
        }

        public async Task<bool> DeleteAsync(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                var sql = "UPDATE Promotions SET IsDeleted = 1, ModifiedAt = GETDATE() WHERE PromotionId = @Id";
                var result = await connection.ExecuteAsync(sql, new { Id = id });
                return result > 0;
            }
        }
    }
}
