using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Models;
using Persistence.Repositories;

namespace Application.Services
{
    //public class InnovationPointService : IInnovationPointService
    //{
    //    private readonly IInnovationPointRepository _innovationPointRepository;
    //    private readonly IAdminActionRepository _adminActionRepository;

    //    public InnovationPointService(IInnovationPointRepository innovationPointRepository, IAdminActionRepository adminActionRepository)
    //    {
    //        _innovationPointRepository = innovationPointRepository;
    //        _adminActionRepository = adminActionRepository;
    //    }

    //    public async Task<bool> AssignPointsAsync(int userId, int points)
    //    {
    //        var innovationPoint = new InnovationPoint(userId, points);
    //        var result = await _innovationPointRepository.AddPointsAsync(innovationPoint);

    //        if (result)
    //        {
    //            var adminAction = new AdminAction(0, 0, 0, AdminActionType.AssignPoints, DateTime.UtcNow);
    //            await _adminActionRepository.CreateAsync(adminAction);
    //        }

    //        return result;
    //    }
    //}
}
