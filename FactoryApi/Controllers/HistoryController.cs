using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FactoryApi.Models;

namespace FactoryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HistoryController : ControllerBase
    {
        private readonly FactoryContext _context;

        public HistoryController(FactoryContext context)
        {
            _context = context;
        }

        // GET: api/History
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HistoryEntry>>> GetHistory()
        {
          if (_context.History == null)
          {
              return NotFound();
          }
            return await _context.History.ToListAsync();
        }

        // GET: api/History/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HistoryEntry>> GetHistoryEntry(long id)
        {
          if (_context.History == null)
          {
              return NotFound();
          }
            var historyEntry = await _context.History.FindAsync(id);

            if (historyEntry == null)
            {
                return NotFound();
            }

            return historyEntry;
        }

        // PUT: api/History/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHistoryEntry(long id, HistoryEntry historyEntry)
        {
            if (id != historyEntry.Id)
            {
                return BadRequest();
            }

            _context.Entry(historyEntry).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HistoryEntryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/History
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<HistoryEntry>> PostHistoryEntry(HistoryEntry historyEntry)
        {
          if (_context.History == null)
          {
              return Problem("Entity set 'FactoryContext.History'  is null.");
          }
            _context.History.Add(historyEntry);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHistoryEntry", new { id = historyEntry.Id }, historyEntry);
        }

        // DELETE: api/History/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHistoryEntry(long id)
        {
            if (_context.History == null)
            {
                return NotFound();
            }
            var historyEntry = await _context.History.FindAsync(id);
            if (historyEntry == null)
            {
                return NotFound();
            }

            _context.History.Remove(historyEntry);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HistoryEntryExists(long id)
        {
            return (_context.History?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
