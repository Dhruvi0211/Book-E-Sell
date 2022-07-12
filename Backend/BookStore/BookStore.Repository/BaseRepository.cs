using BookStore.Models.ViewModels;

namespace BookStore.Repository
{
    public class BaseRepository
    {
        protected readonly BookStoreContext _context = new BookStoreContext();
    }
}
