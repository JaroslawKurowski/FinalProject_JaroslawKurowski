using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Models;
using Microsoft.IdentityModel.Tokens;
using Persistence.Repositories.Interfaces;

namespace Application.Services
{
    public class PromotionService : IPromotionService
    {
        private readonly IPromotionRepository _promotionRepository;

        public PromotionService(IPromotionRepository promotionRepository)
        {
            _promotionRepository = promotionRepository;
        }

        public async Task<Promotion?> GetByIdAsync(int id)
        {
            return await _promotionRepository.GetByIdAsync(id);
        }

        public async Task<IEnumerable<Promotion>> GetAllAsync()
        {
            return await _promotionRepository.GetAllAsync();
        }

        public async Task<Promotion?> CreateAsync(string promotionName, string description, int pointsRequired, int createdBy)
        {
            var promotion = Promotion.Create(promotionName, description, pointsRequired, createdBy);
            return await _promotionRepository.CreateAsync(promotion);
        }

        public async Task<bool> UpdateAsync(int id, string promotionName, string description, int pointsRequired, int modifiedBy)
        {
            var promotion = await _promotionRepository.GetByIdAsync(id);
            if (promotion == null)
                return false;

            promotion.Update(promotionName, description, pointsRequired, modifiedBy);
            return await _promotionRepository.UpdateAsync(promotion);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var promotion = await _promotionRepository.GetByIdAsync(id);
            if (promotion == null)
                return false;

            promotion.Delete();
            return await _promotionRepository.DeleteAsync(id);
        }
    }
}
