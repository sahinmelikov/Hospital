using Hospital_Template.DAL;
using Hospital_Template.Models;
using Hospital_Template.Utilities.Extensions;
using Hospital_Template.ViewModel;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace Hospital_Template.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class PositionController : Controller
    {
        private readonly AppDbContext _appDbContext;

        public PositionController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public IActionResult Index()
        {
            List<DoctorPosition> doctorPositions = _appDbContext.DoctorPosition.Where(p => !p.IsDeleted).OrderByDescending(d => d.Id).ToList();

            return View(doctorPositions);
        }
        public IActionResult Create()
        {

            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(PositionCreateVM positionVM)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }
          


            DoctorPosition doctorPosition = new DoctorPosition()
            {
                Position = positionVM.Position,
               


            };
            await _appDbContext.DoctorPosition.AddAsync(doctorPosition);
            await _appDbContext.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
        [HttpGet]
        public IActionResult Delete(int Id)
        {
            DoctorPosition? doctorPosition = _appDbContext.DoctorPosition?.Find(Id);

            if (doctorPosition == null)
            {
                return NotFound();
            }

            // İlgili pozisyonun IsDeleted özelliğini false olarak işaretle
            doctorPosition.IsDeleted = true;

            _appDbContext.SaveChanges();

            return RedirectToAction(nameof(Index));
        }



        [HttpGet]
        public async Task<IActionResult> Update(int id)
        {
            DoctorPosition doctorPosition = await _appDbContext.DoctorPosition.FindAsync(id);
            if (doctorPosition == null)
            {
                return NotFound();
            }



            PositionUpdateVM updateVM = new PositionUpdateVM()
            {
                Id = doctorPosition.Id,
                Position = doctorPosition.Position,
        

            };

            return View("Update", updateVM);
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Update(PositionUpdateVM updateVM)
        {


          
            DoctorPosition doctorPosition = await _appDbContext.DoctorPosition.FindAsync(updateVM.Id);

            if (doctorPosition == null)
            {
                return NotFound();
            }





            doctorPosition.Position = updateVM.Position;
          


            await _appDbContext.SaveChangesAsync();

            return RedirectToAction(nameof(Index));
        }
    }
}
