using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Models;

namespace Persistence.Repositories.Interfaces
{
    public interface IUserRepository : IGenericRepository<IUser>
    {
        Task<User?> Authenticate(string userName, string password);
        //Task<User?> GetByUserNameAsync(string userName);
    }
}
