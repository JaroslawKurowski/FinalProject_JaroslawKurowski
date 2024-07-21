using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Models;
using Persistence.Repositories;

namespace Application.Services
{
    //public class AdminActionService : IAdminActionService
    //{
    //    private readonly IAdminActionRepository _adminActionRepository;

    //    public AdminActionService(IAdminActionRepository adminActionRepository)
    //    {
    //        _adminActionRepository = adminActionRepository;
    //    }

    //    public async Task<IEnumerable<AdminAction>> GetAllAsync()
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public async Task<AdminAction> GetByIdAsync(int actionId)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public async Task<int> CreateAsync(AdminAction adminAction)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public async Task<bool> UpdateAsync(AdminAction adminAction)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public async Task<bool> DeleteAsync(int actionId)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public async Task<IEnumerable<AdminAction>> GetAdminActionsByAdminIdAsync(int adminId)
    //    {
    //        return await _adminActionRepository.GetAdminActionsByAdminIdAsync(adminId);
    //    }

    //    public async Task<IEnumerable<AdminAction>> GetAdminActionsByReportIdAsync(int reportId)
    //    {
    //        return await _adminActionRepository.GetAdminActionsByReportIdAsync(reportId);
    //    }
    //}
}
