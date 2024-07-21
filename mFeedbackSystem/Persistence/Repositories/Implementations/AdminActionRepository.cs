using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using Domain.Models;
using Persistence.Context;

namespace Persistence.Repositories.Implementations
{
    //public class AdminActionRepository : IAdminActionRepository
    //{
    //    private readonly IDapperContext _context;

    //    public AdminActionRepository(IDapperContext context)
    //    {
    //        _context = context;
    //    }

    //    public AdminAction Get(int id)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public IEnumerable<AdminAction> GetAll()
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public int Create(AdminAction model)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public bool Update(AdminAction model)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public bool Delete(int id)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public async Task<IEnumerable<AdminAction>> GetAdminActionsByAdminIdAsync(int adminId)
    //    {
    //        var sql = "SELECT * FROM AdminActions WHERE AdminId = @AdminId";

    //        using (var connection = _context.CreateConnection())
    //        {
    //            return await connection.QueryAsync<AdminAction>(sql, new { AdminId = adminId });
    //        }
    //    }

    //    public async Task<IEnumerable<AdminAction>> GetAdminActionsByReportIdAsync(int reportId)
    //    {
    //        var sql = "SELECT * FROM AdminActions WHERE ReportId = @ReportId";

    //        using (var connection = _context.CreateConnection())
    //        {
    //            return await connection.QueryAsync<AdminAction>(sql, new { ReportId = reportId });
    //        }
    //    }
    //}
}
