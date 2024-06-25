using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class Report
    {
        public int ReportId { get; }
        public string Title { get; private set; }
        public string Description { get; private set; }
        public ReportStatus Status { get; private set; } = ReportStatus.Pending;
        public DateTime? StartDate { get; private set; }
        public DateTime? EndDate { get; private set; }
        public int CreatedBy { get; private set; }
        public DateTime CreatedAt { get; }
        public int? ModifiedBy { get; private set; }
        public DateTime? ModifiedAt { get; private set; }

        public Report(int reportId, string title, string description, ReportStatus status, DateTime? startDate, DateTime? endDate, int createdBy, DateTime createdAt, int? modifiedBy, DateTime? modifiedAt)
        {
            ReportId = reportId;
            Title = title;
            Description = description;
            Status = status;
            StartDate = startDate;
            EndDate = endDate;
            CreatedBy = createdBy;
            CreatedAt = createdAt;
            ModifiedBy = modifiedBy;
            ModifiedAt = modifiedAt;
        }
    }
}
