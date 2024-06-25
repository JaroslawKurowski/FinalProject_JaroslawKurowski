using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class Promotion
    {
        public int PromotionId { get; }
        public string PromotionName { get; private set; }
        public string Description { get; private set; }
        public int PointsRequired { get; private set; }

        public Promotion(int promotionId, string promotionName, string description, int pointsRequired)
        {
            PromotionId = promotionId;
            PromotionName = promotionName;
            Description = description;
            PointsRequired = pointsRequired;
        }
    }
}
