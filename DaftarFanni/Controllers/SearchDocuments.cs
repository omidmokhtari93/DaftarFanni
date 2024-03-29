using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DaftarFanni.Controllers
{
    [Route("api/[controller]")]
    public class Login : Controller
    {
        // GET: api/<controller>
        [HttpGet("/api/SearchDocuments")]
        public JsonResult Get(string searchTerm)
        {
            return new JsonResult(searchTerm);
        }
    }
}
