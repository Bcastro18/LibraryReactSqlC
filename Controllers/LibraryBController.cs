using LibraryReactSqlC.Data.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryReactSqlC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibraryBController : ControllerBase
    {

        private readonly LibraryContext _reactContext;


        public LibraryBController(LibraryContext reactContext)
        {
            _reactContext = reactContext;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var lib = await _reactContext.LibrayB.FromSqlRaw("SELECT * FROM LibrayB").ToListAsync();
            return Ok(lib);
        }
        [HttpPost]
        public async Task<IActionResult> Post(LibrayB newLibrary)
        {
             _reactContext.LibrayB.Add(newLibrary);
            await _reactContext.SaveChangesAsync();
            return Ok(newLibrary);
        }

    }
}
