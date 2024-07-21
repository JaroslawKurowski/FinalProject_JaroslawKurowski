using Application.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApi.Auth;
using WebApi.DTOs;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReportsController : ControllerBase
    {
        private readonly IReportService _reportService;
        private readonly LoggedUser _loggedUser;

        public ReportsController(IReportService reportService, LoggedUser loggedUser)
        {
            _reportService = reportService;
            _loggedUser = loggedUser;
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<IActionResult> Get(int id)
        {
            var report = await _reportService.GetByIdAsync(id);
            return report != null ? Ok(report) : NotFound();
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAll()
        {
            var reports = await _reportService.GetAllAsync();
            return Ok(reports);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Create([FromBody] ReportDto model)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var report = await _reportService.CreateAsync(model.Title, model.Description, _loggedUser.UserId);
            if (report == null)
                return BadRequest("Nie udało się utworzyć zgłoszenia.");

            return Ok(report);
            //return report != null ? Ok(report) : BadRequest("Could not create report.");
        }

        [HttpPut("{id}/status")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> UpdateStatus(int id, [FromBody] UpdateStatusDto updateStatusDto)
        {
            var result = await _reportService.UpdateStatusAsync(id, updateStatusDto.Status, _loggedUser.UserId);
            return result ? Ok() : NotFound();
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> Delete(int id)
        {
            await _reportService.DeleteAsync(id);

            return NoContent();
        }
    }
}
