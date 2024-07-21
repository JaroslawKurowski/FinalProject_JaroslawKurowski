using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using Domain.Models;
using Persistence.Context;
using Persistence.Repositories.Interfaces;

namespace Persistence.Repositories.Implementations
{
    public class ReportRepository : IReportRepository
    {
        private readonly IDapperContext _context;

        public ReportRepository(IDapperContext context)
        {
            _context = context;
        }

        public async Task<Report?> GetByIdAsync(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                var sql = "SELECT * FROM Reports WHERE ReportId = @Id AND IsDeleted = 0";
                return await connection.QuerySingleOrDefaultAsync<Report>(sql, new { Id = id });
            }
        }

        public async Task<IEnumerable<Report>> GetAllAsync()
        {
            using (var connection = _context.CreateConnection())
            {
                var sql = "SELECT * FROM Reports WHERE IsDeleted = 0";
                return await connection.QueryAsync<Report>(sql);
            }
        }

        public Task<int> Create(Report model)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateAsync(Report model)
        {
            throw new NotImplementedException();
        }

        public async Task<Report?> CreateAsync(Report report)
        {
            using (var connection = _context.CreateConnection())
            {
                var sql = @"
                    INSERT INTO Reports (Title, Description, Status, StartDate, EndDate, CreatedBy, CreatedAt, ModifiedBy, ModifiedAt, IsDeleted)
                    VALUES (@Title, @Description, @Status, @StartDate, @EndDate, @CreatedBy, @CreatedAt, @ModifiedBy, @ModifiedAt, @IsDeleted);
                    SELECT CAST(SCOPE_IDENTITY() as int);";
                var id = await connection.ExecuteScalarAsync<int>(sql, report);
                return new Report(
                    id,
                    report.Title,
                    report.Description,
                    report.Status,
                    report.StartDate,
                    report.EndDate,
                    report.CreatedBy,
                    report.CreatedAt,
                    report.ModifiedBy,
                    report.ModifiedAt,
                    report.IsDeleted
                );
            }
        }

        public async Task<bool> UpdateStatusAsync(Report report)
        {
            using (var connection = _context.CreateConnection())
            {
                var sql = @"
                    UPDATE Reports
                    SET Status = @Status, ModifiedBy = @ModifiedBy, ModifiedAt = @ModifiedAt
                    WHERE ReportId = @ReportId AND IsDeleted = 0";
                var result = await connection.ExecuteAsync(sql, new
                {
                    report.Status,
                    report.ModifiedBy,
                    report.ModifiedAt,
                    report.ReportId
                });
                return result > 0;
            }
        }

        public async Task<bool> DeleteAsync(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                var sql = "UPDATE Reports SET IsDeleted = 1, ModifiedAt = GETDATE() WHERE ReportId = @Id";
                var result = await connection.ExecuteAsync(sql, new { Id = id });
                return result > 0;
            }
        }
    }
}
