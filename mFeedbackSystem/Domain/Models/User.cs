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
        public DateTime CreatedAt { get; }
        public string PasswordHash { get; private set; }
        public DateTime? PasswordLastChangedAt { get; private set; }

        public User(int userId, string userName, string email, UserRole role, DateTime createdAt, string passwordHash, DateTime? passwordLastChangedAt = null)
        {
            UserId = userId;
            UserName = userName;
            Email = email;
            Role = role;
            CreatedAt = createdAt;
            PasswordHash = passwordHash;
            PasswordLastChangedAt = passwordLastChangedAt;
        }
    }
}
