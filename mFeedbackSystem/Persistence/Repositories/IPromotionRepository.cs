using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Models;

namespace Persistence.Repositories
{
    public interface IPromotionRepository : IGenericRepository<Promotion>
    {
        Task<Promotion?> GetByIdAsync(int id);
        Task<IEnumerable<Promotion>> GetAllAsync();
        Task<Promotion?> CreateAsync(Promotion promotion);
        Task<bool> UpdateAsync(Promotion promotion);
        Task<bool> DeleteAsync(int id);
    }
}
