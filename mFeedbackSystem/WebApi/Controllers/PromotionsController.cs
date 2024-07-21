using Application.Services;
using Domain.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Persistence.Repositories;
using System.Reflection;
using WebApi.Auth;
using WebApi.DTOs;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PromotionsController : ControllerBase
    {
        private readonly IPromotionService _promotionService;
        private readonly LoggedUser _loggedUser;

        public PromotionsController(IPromotionService promotionService, LoggedUser loggedUser)
        {
            _promotionService = promotionService;
            _loggedUser = loggedUser;
        }

        [HttpGet("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> Get(int id)
        {
            var promotion = await _promotionService.GetByIdAsync(id);
            return promotion != null ? Ok(promotion) : NotFound();
        }

        [HttpGet]
        [Authorize] //(Roles = "Administrator")]
        public async Task<IActionResult> GetAll()
        {
            var promotions = await _promotionService.GetAllAsync();
            return Ok(promotions);
        }

        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> Create([FromBody] PromotionDto model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var promotion = await _promotionService.CreateAsync(model.PromotionName, model.Description, model.PointsRequired, _loggedUser.UserId);
            if (promotion == null)
                return BadRequest("Nie udało się utworzyć promocji.");

            return Ok(promotion);
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> Update(int id, [FromBody] PromotionDto promotion)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await _promotionService.UpdateAsync(id, promotion.PromotionName,  promotion.Description, promotion.PointsRequired, _loggedUser.UserId);
            return result ? Ok() : NotFound();
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> Delete(int id)
        {
            await _promotionService.DeleteAsync(id);
            return NoContent();
        }
    }
}
