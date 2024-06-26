using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class UserPromotion
    {
        public int UserPromotionId { get; }
        public int UserId { get; private set; }
        public int PromotionId { get; private set; }
        public DateTime RedeemedAt { get; }

        public UserPromotion(int userPromotionId, int userId, int promotionId, DateTime redeemedAt)
        {
            UserPromotionId = userPromotionId;
            UserId = userId;
            PromotionId = promotionId;
            RedeemedAt = redeemedAt;
        }
    }
}
