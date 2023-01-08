using Microsoft.EntityFrameworkCore;
namespace LibraryReactSqlC.Data.Entities
{
    public class ClientContext : DbContext

    {

        public ClientContext(DbContextOptions<ClientContext> options) : base(options) { }

        public DbSet<Client> Client { get; set; }
    }
}
