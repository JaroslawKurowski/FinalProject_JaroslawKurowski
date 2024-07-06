using System.ComponentModel.DataAnnotations;

namespace WebApi.DTOs
{
    public class ReportDto
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
    }
}
