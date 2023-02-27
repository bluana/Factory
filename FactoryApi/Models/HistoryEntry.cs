namespace FactoryApi.Models;

public class HistoryEntry
{
    public long Id { get; set; }
    public long StationId { get; set; }
    public State State { get; set; }
    public DateTime TimeStamp { get; set; }
}