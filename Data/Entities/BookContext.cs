using Microsoft.EntityFrameworkCore;


namespace LibraryReactSqlC.Data.Entities

{
    public class BookContext : DbContext
    {
        public BookContext(DbContextOptions<BookContext> options) : base(options){  }

        public DbSet<Book> Book { get; set; }


    }
}
