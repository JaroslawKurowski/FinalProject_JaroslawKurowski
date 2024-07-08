using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Models;

namespace Persistence.Repositories
{
    public interface IReportRepository : IGenericRepository<Report>
    {
        Task<Report?> CreateAsync(Report report);
        Task<bool> DeleteAsync(int id);
        Task<Report?> GetByIdAsync(int id);
        Task<IEnumerable<Report>> GetAllAsync();
        Task<bool> UpdateStatusAsync(Report report);
    }
}
