using Hospital_Template.DAL;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace Hospital_Template.Controllers
{
    [Area("Admin")]
    [Authorize(Roles = "Admin,Maderator")]
    public class SearchController : Controller
    {
        private readonly AppDbContext _dbContext;

        public SearchController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IActionResult Search(string q, string name, string position, string hospital)
        {
            if (string.IsNullOrEmpty(q) && string.IsNullOrEmpty(name) && name == null && hospital == null)
            {
                return View();
            }


            var query = _dbContext.Doctor
               .Include(p => p.Hospital)
               .Include(p => p.doctorPosition)
               .AsQueryable();

            if (!string.IsNullOrEmpty(q))
            {
                string searchQuery = q.ToLower();
                query = query.Where(p => p.Name.ToLower().Contains(searchQuery) ||
                                         p.Hospital.Name.ToLower().Contains(searchQuery));
            }

            if (!string.IsNullOrEmpty(name))
            {
                string searchDescription = name.ToLower();
                query = query.Where(p => p.Name.ToLower().Contains(searchDescription));
            }

            var searchResults = query.ToList();
            return View(searchResults);
        }
    }

}
