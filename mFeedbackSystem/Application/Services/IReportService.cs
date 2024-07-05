using Domain.Models;

namespace Application.Services
{
    public interface IReportService
    {
        Task<Report?> Create(string title, string description, int createdBy);
    }
}
