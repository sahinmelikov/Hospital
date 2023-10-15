using Hospital_Template.DAL;
using Hospital_Template.Models;
using Hospital_Template.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Hospital_Template.Controllers
{
    public class AboutDoctorController : Controller
    {
        private readonly AppDbContext _appDbContext;

        public AboutDoctorController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        public IActionResult DoctorAbout(int hospitalid, int doctorpositionid,int doctorid)
		{
            

            var selectedHospital = _appDbContext.Hospitals
                .Include(h => h.Doctors)
                .ThenInclude(d => d.doctorPosition)
                .Where(d => !d.IsDeleted)
                .FirstOrDefault(h => h.Id == hospitalid);
            var SelectDoctor=_appDbContext.Doctor
                .Include(h=>h.doctorPosition)
                .Include(h=>h.Hospital)
                .Where(d=>!d.IsDeleted)
                .FirstOrDefault(h=>h.Id==doctorid);

            if (selectedHospital != null)
            {
                var doctorsInHospital = selectedHospital.Doctors
                    .Where(d => d.doctorPosition.Id == doctorpositionid)
                    .Where(d=>d.Id==doctorid)
                    .ToList();

                var model = new HomeVM
                {
                    DoctorsWithPosition = doctorsInHospital,
                 
                    SelectedHospital = selectedHospital,
                    SelectedDoctor=SelectDoctor
                };

                return View(model);
            }

            return RedirectToAction("Index");
        }
	}
}
