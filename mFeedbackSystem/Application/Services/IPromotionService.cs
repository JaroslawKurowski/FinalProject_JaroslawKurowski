using Domain.Models;

namespace Application.Services
{
    public interface IPromotionService
    {
        Task<Promotion?> GetByIdAsync(int id);
        Task<IEnumerable<Promotion>> GetAllAsync();
        Task<Promotion?> CreateAsync(string promotionName, string description, int pointsRequired, int createdBy);
        Task<bool> UpdateAsync(int id, string promotionName, string description, int pointsRequired, int modifiedBy);
        Task<bool> DeleteAsync(int id);
    }
}
