using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistence.Repositories
{
    public interface IGenericRepository<TModel>
    {
        Task<TModel?> GetByIdAsync(int id);
        Task<IEnumerable<TModel>> GetAllAsync();
        Task<int> Create(TModel model);
        Task<bool> UpdateAsync(TModel model);
        Task<bool> DeleteAsync(int id);
    }
}
