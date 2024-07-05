using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using Domain.Models;
using Persistence.Context;

namespace Persistence.Repositories
{
    public class ReportRepository : IReportRepository
    {
        private readonly IDapperContext _context;

        public ReportRepository(IDapperContext context)
        {
            _context = context;
        }

        public Report Get(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Report> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<Report?> Create(Report report)
        {
            using (var connection = _context.CreateConnection())
            {
                var sql = @"
                    INSERT INTO Reports (Title, Description, Status, StartDate, EndDate, CreatedBy, CreatedAt, ModifiedBy, ModifiedAt)
                    VALUES (@Title, @Description, @Status, @StartDate, @EndDate, @CreatedBy, @CreatedAt, @ModifiedBy, @ModifiedAt);
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
                    report.ModifiedAt
                );
            }
        }

        int IGenericRepository<Report>.Create(Report model)
        {
            throw new NotImplementedException();
        }

        public bool Update(Report model)
        {
            throw new NotImplementedException();
        }

        public bool Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}
