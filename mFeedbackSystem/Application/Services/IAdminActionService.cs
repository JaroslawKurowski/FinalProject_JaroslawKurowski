using Domain.Models;

namespace Application.Services
{
    public interface IAdminActionService
    {
        Task<IEnumerable<AdminAction>> GetAllAsync();
        Task<AdminAction> GetByIdAsync(int actionId);
        Task<int> CreateAsync(AdminAction adminAction);
        Task<bool> UpdateAsync(AdminAction adminAction);
        Task<bool> DeleteAsync(int actionId);
        Task<IEnumerable<AdminAction>> GetAdminActionsByAdminIdAsync(int adminId);
        Task<IEnumerable<AdminAction>> GetAdminActionsByReportIdAsync(int reportId);
    }
}
