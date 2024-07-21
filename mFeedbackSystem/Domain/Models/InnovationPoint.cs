using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class InnovationPoint
    {
        public int UserId { get; private set; }
        public int Points { get; private set; }

        public InnovationPoint(int userId, int points)
        {
            UserId = userId;
            Points = points;
        }
    }
}
