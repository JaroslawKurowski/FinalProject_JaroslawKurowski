using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class User : IUser
    {
        public int UserId { get; }
        public string UserName { get; private set; }
        public string Email { get; private set; }
        public UserRole Role { get; }

        public User(int userId, string userName, string email, UserRole role = UserRole.User)
        {
            UserId = userId;
            UserName = userName;
            Email = email;
            Role = role;
        }
    }
}
