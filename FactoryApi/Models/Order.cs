namespace FactoryApi.Models;

public class Order
{
    public long Id { get; set; }
    public long StationId { get; set; }
    public State State { get; set; }
    public string Name { get; set; }
    public int Duration { get; set; }
}