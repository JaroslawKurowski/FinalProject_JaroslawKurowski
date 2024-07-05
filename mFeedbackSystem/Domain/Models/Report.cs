using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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

        public static Report Create(string title, string description, int createdBy)
        {
            if (string.IsNullOrWhiteSpace(title))
                throw new ValidationException("Tytuł nie może być pusty.");
            if (string.IsNullOrWhiteSpace(description))
                throw new ValidationException("Opis nie może być pusty.");

            return new Report(
                0, // ReportId będzie generowany przez bazę danych
                title,
                description,
                ReportStatus.Pending,
                null,
                null,
                createdBy,
                DateTime.UtcNow,
                null,
                null
            );
        }
    }
}
