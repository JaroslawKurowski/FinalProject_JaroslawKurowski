using Application.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Auth;

namespace WebApi.Controllers
{
    //[Route("api/[controller]")]
    //[ApiController]
    //public class AdminActionsController : ControllerBase
    //{
    //    private readonly IAdminActionService _adminActionService;
    //    private readonly LoggedUser _loggedUser;

    //    public AdminActionsController(IAdminActionService adminActionService, LoggedUser loggedUser)
    //    {
    //        _adminActionService = adminActionService;
    //        _loggedUser = loggedUser;
    //    }

    //    [HttpGet("admin/{adminId}")]
    //    [Authorize(Roles = "Administrator")]
    //    public async Task<IActionResult> GetAdminActionsByAdminId(int adminId)
    //    {
    //        var actions = await _adminActionService.GetAdminActionsByAdminIdAsync(adminId);
    //        return Ok(actions);
    //    }

    //    [HttpGet("report/{reportId}")]
    //    [Authorize]
    //    public async Task<IActionResult> GetAdminActionsByReportId(int reportId)
    //    {
    //        var actions = await _adminActionService.GetAdminActionsByReportIdAsync(reportId);
    //        return Ok(actions);
    //    }
    //}
}
