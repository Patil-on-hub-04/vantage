using Microsoft.AspNetCore.Mvc;
using Vantage.Api.Models;

namespace Vantage.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    [HttpGet]
    public ActionResult<HealthResponse> Get()
    {
        return Ok(new HealthResponse
        {
            Status = "Healthy",
            UtcTime = DateTime.UtcNow
        });
    }
}
