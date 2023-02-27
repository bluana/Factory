using Microsoft.EntityFrameworkCore;

namespace FactoryApi.Models;

public class FactoryContext : DbContext
{
    public FactoryContext(DbContextOptions<FactoryContext> options)
        : base(options)
    {
    }

    public DbSet<Station> Stations { get; set; } = null!;
    public DbSet<Order> Orders { get; set; } = null!;
    public DbSet<HistoryEntry> History { get; set; } = null!;
}