namespace Application.Services
{
    public interface IInnovationPointService
    {
        Task<bool> AssignPointsAsync(int userId, int points);
    }
}
