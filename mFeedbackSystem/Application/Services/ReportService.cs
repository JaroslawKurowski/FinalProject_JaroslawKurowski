using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Models;
using Persistence.Repositories;

namespace Application.Services
{
    public class ReportService : IReportService
    {
        private readonly IReportRepository _reportRepository;

        public ReportService(IReportRepository reportRepository)
        {
            _reportRepository = reportRepository;
        }

        public async Task<Report?> CreateAsync(string title, string description, int createdBy)
        {
            var report = Report.Create(title, description, createdBy);
            return await _reportRepository.CreateAsync(report);
        }
    }
}
