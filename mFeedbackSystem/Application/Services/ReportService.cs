using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Models;
using Persistence.Repositories.Interfaces;

namespace Application.Services
{
    public class ReportService : IReportService
    {
        private readonly IReportRepository _reportRepository;

        public ReportService(IReportRepository reportRepository)
        {
            _reportRepository = reportRepository;
        }

        public async Task<Report?> GetByIdAsync(int id)
        {
            return await _reportRepository.GetByIdAsync(id);
        }

        public async Task<IEnumerable<Report>> GetAllAsync()
        {
            return await _reportRepository.GetAllAsync();
        }

        public async Task<Report?> CreateAsync(string title, string description, int createdBy)
        {
            var report = Report.Create(title, description, createdBy);
            return await _reportRepository.CreateAsync(report);
        }

        public async Task<bool> UpdateStatusAsync(int id, ReportStatus status, int? modifiedBy)
        {
            var report = await _reportRepository.GetByIdAsync(id);
            if (report == null)
            {
                return false;
            }

            report.UpdateStatus(status, modifiedBy);
            return await _reportRepository.UpdateStatusAsync(report);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var report = await _reportRepository.GetByIdAsync(id);
            if (report == null)
            {
                return false;
            }

            report.Delete();
            return await _reportRepository.DeleteAsync(id);
        }
    }
}
