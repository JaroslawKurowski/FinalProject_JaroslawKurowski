using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistence.Repositories
{
    public interface IGenericRepository<TModel>
    {
        TModel Get(int id);
        IEnumerable<TModel> GetAll();
        int Create(TModel model);
        bool Update(TModel model);
        bool Delete(int id);

        //Task<TModel?> FindByIdAsync(int id);
        //Task<IEnumerable<TModel>> GetAllAsync();
        //Task<int> CreateAsync(TModel model);
        //Task<bool> UpdateAsync(TModel model);
        //Task<bool> DeleteAsync(int id);
    }
}
