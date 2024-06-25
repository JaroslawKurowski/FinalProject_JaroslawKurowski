using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class AdminAction
    {
        public int ActionId { get; }
        public int ReportId { get; private set; }
        public int AdminId { get; private set; }
        public AdminActionType Action { get; private set; }
        public DateTime ActionDate { get; }

        public AdminAction(int actionId, int reportId, int adminId, AdminActionType action, DateTime actionDate)
        {
            ActionId = actionId;
            ReportId = reportId;
            AdminId = adminId;
            Action = action;
            ActionDate = actionDate;
        }
    }
}
