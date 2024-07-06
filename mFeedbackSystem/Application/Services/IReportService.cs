using Domain.Models;

namespace Application.Services
{
    public interface IReportService
    {
        Task<Report?> CreateAsync(string title, string description, int createdBy);
    }
}
