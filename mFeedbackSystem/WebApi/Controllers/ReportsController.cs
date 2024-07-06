using Application.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApi.Auth;
using WebApi.DTOs;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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

        // GET: api/<ReportsController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<ReportsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ReportsController>
        [HttpPost]
        [Authorize]
        //public void Post([FromBody] string value)
        //{
        //}
        public async Task<IActionResult> Create([FromBody] ReportDto model)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var report = await _reportService.CreateAsync(model.Title, model.Description, _loggedUser.UserId);
            if (report == null)
                return BadRequest("Nie udało się utworzyć zgłoszenia.");

            return Ok(report);
        }

        // PUT api/<ReportsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ReportsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
