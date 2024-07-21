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
    //public class InnovationPointRepository : IInnovationPointRepository
    //{
    //    private readonly IDapperContext _context;

    //    public InnovationPointRepository(IDapperContext context)
    //    {
    //        _context = context;
    //    }

    //    public async Task<InnovationPoint?> GetByUserIdAsync(int userId)
    //    {
    //        using (var connection = _context.CreateConnection())
    //        {
    //            var sql = "SELECT * FROM InnovationPoints WHERE UserId = @UserId";
    //            var point = await connection.QuerySingleOrDefaultAsync<InnovationPoint>(sql, new { UserId = userId });
    //            return point;
    //        }
    //    }

    //    public async Task<bool> AddPointsAsync(InnovationPoint innovationPoint)
    //    {
    //        using (var connection = _context.CreateConnection())
    //        {
    //            var sql = @"
    //                IF EXISTS (SELECT 1 FROM InnovationPoints WHERE UserId = @UserId)
    //                BEGIN
    //                    UPDATE InnovationPoints SET Points = Points + @Points WHERE UserId = @UserId
    //                END
    //                ELSE
    //                BEGIN
    //                    INSERT INTO InnovationPoints (UserId, Points) VALUES (@UserId, @Points)
    //                END";
    //            var result = await connection.ExecuteAsync(sql, new { innovationPoint.UserId, innovationPoint.Points });
    //            return result > 0;
    //        }
    //    }
    //}
}
