﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using Domain.Models;
using Persistence.Context;
using Persistence.Repositories.Interfaces;

namespace Persistence.Repositories.Implementations
{
    public class UserRepository : IUserRepository
    {
        private readonly IDapperContext _context;

        public UserRepository(IDapperContext context)
        {
            _context = context;
        }

        public async Task<User?> Authenticate(string userName, string password)
        {
            using (var connection = _context.CreateConnection())
            {
                var sql = "SELECT UserId, UserName, Email, Role FROM Users WHERE UserName = @UserName AND PasswordHash = @Password";
                var user = await connection.QuerySingleOrDefaultAsync<User>(sql, new { userName, password });
                return user;
            }
        }

        public Task<IUser?> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<IUser>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<int> Create(IUser model)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateAsync(IUser model)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }
    }
}