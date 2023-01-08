using Microsoft.EntityFrameworkCore;

namespace LibraryReactSqlC.Data.Entities
{
    public class LibraryContext : DbContext
    {
        public LibraryContext(DbContextOptions<LibraryContext> options) : base(options){   }

        public DbSet<LibrayB> LibrayB { get; set; }


    }
}
