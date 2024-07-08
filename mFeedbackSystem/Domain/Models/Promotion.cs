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
        public int? ModifiedBy { get; private set; }
        public DateTime? ModifiedAt { get; private set; }
        public bool IsDeleted { get; private set; }

        public Promotion(int promotionId, string promotionName, string description, int pointsRequired, int? modifiedBy, DateTime? modifiedAt, bool isDeleted)
        {
            PromotionId = promotionId;
            PromotionName = promotionName;
            Description = description;
            PointsRequired = pointsRequired;
            ModifiedBy = modifiedBy;
            ModifiedAt = modifiedAt;
            IsDeleted = isDeleted;
        }

        public static Promotion Create(string promotionName, string description, int pointsRequired)
        {
            if (string.IsNullOrEmpty(promotionName))
                throw new ArgumentException("Promotion name cannot be empty");
            if (string.IsNullOrEmpty(description))
                throw new ArgumentException("Description cannot be empty");
            if (pointsRequired <= 0)
                throw new ArgumentException("Points required must be greater than zero");

            return new Promotion(0, promotionName, description, pointsRequired, null, null, false);
        }

        public void Update(string promotionName, string description, int pointsRequired, int modifiedBy)
        {
            if (string.IsNullOrEmpty(promotionName))
                throw new ArgumentException("Promotion name cannot be empty");
            if (string.IsNullOrEmpty(description))
                throw new ArgumentException("Description cannot be empty");
            if (pointsRequired <= 0)
                throw new ArgumentException("Points required must be greater than zero");

            PromotionName = promotionName;
            Description = description;
            PointsRequired = pointsRequired;
            ModifiedBy = modifiedBy;
            ModifiedAt = DateTime.UtcNow;
        }

        public void Delete()
        {
            IsDeleted = true;
            ModifiedAt = DateTime.UtcNow;
        }
    }
}
