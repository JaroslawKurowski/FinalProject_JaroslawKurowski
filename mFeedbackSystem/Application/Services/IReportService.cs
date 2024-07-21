using Domain.Models;

namespace Application.Services
{
    public interface IReportService
    {
        Task<Report?> GetByIdAsync(int id);
        Task<IEnumerable<Report>> GetAllAsync();
        Task<Report?> CreateAsync(string title, string description, int createdBy);
        Task<bool> UpdateStatusAsync(int id, ReportStatus status, int? modifiedBy);
        Task<bool> DeleteAsync(int id);
    }
}
