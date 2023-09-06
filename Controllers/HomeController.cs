using Hospital_Template.DAL;
using Hospital_Template.Models;
using Hospital_Template.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace Hospital_Template.Controllers
{
	public class HomeController : Controller
	{

		private readonly AppDbContext _appDbContext;

		public HomeController(AppDbContext appDbContext)
		{
			_appDbContext = appDbContext;
		}

		public IActionResult Index()
		{
			return View();
		}
        public IActionResult Randevu()
        {
            HomeVM homeVM = new HomeVM()
            {
                Hospital = _appDbContext.Hospitals.Include(h => h.Doctors).ToList(),
				Doctors=_appDbContext.Doctor.Include(d=>d.doctorPosition).ToList()
            };

            return View(homeVM);
        }
        public IActionResult YeniRandevu(int hospitalId = 0)
        {
            // Retrieve the selected hospital and its doctors with positions
            Hospital selectedHospital = null;

            if (hospitalId > 0)
            {
                selectedHospital = _appDbContext.Hospitals?
                    .Include(h => h.Doctors)
                    .ThenInclude(d => d.doctorPosition)
                    .FirstOrDefault(h => h.Id == hospitalId);
            }

			List<DoctorPosition> uniquePositions = selectedHospital?.Doctors
				.Select(d => d.doctorPosition)
				.Distinct()
				.ToList();

			HomeVM homeVM = new HomeVM()
            {
                SelectedHospital = selectedHospital,
                DoctorPositions  = uniquePositions,

                Hospital =_appDbContext.Hospitals.Include(d=>d.Doctors).ToList(),
               
                Doctors = _appDbContext.Doctor.Include(d => d.doctorPosition).ToList()
            };

            return View(homeVM);
        }



  //      public IActionResult GetDoctorPositions(int hospitalId)
		//{
		//	var positions = _appDbContext.DoctorPosition
		//		.Where(dp => dp.Doctors.Any(d => d.HospitalId == hospitalId))
		//		.ToList();

		//	return PartialView("_DoctorPositionsPartial", positions);
		//}


		//public IActionResult GetHospitalPositions(int hospitalId)
		//{
		//	// Veritabanından hastane pozisyonlarını alın
		//	var positions = _appDbContext.DoctorPosition
		//		.Where(dp => dp.Doctors.Any(d => d.HospitalId == hospitalId))
		//		.Select(dp => dp.Position)
		//		.ToList();

		//	return Json(positions); // JSON formatında pozisyonları döndürün
		//}




		public IActionResult HospitalDoctors()
		{
			HomeVM homeVM = new HomeVM()
			{
				Hospital = _appDbContext.Hospitals.Include(h => h.Doctors).ToList()
			};

			return View(homeVM);
		}



		public IActionResult Hospital(int hospitalid)
		{
			var selectedHospital = _appDbContext.Hospitals
				.Include(h => h.Doctors)
				.ThenInclude(d => d.doctorPosition)
				.FirstOrDefault(h => h.Id == hospitalid);

			if (selectedHospital != null)
			{
				var model = new HomeVM
				{
					SelectedHospital = selectedHospital,
					Doctors = selectedHospital.Doctors, // Doktorları doğrudan ekledik
					DoctorPositions = selectedHospital.Doctors
						.Select(d => d.doctorPosition)
						.Distinct()
						.ToList()
				};

				return View(model);
			}

			return RedirectToAction("Index");
		}


		public IActionResult Doctor(int hospitalid, int doctorpositionid)
		{
			var selectedHospital = _appDbContext.Hospitals
				.Include(h => h.Doctors)
				.ThenInclude(d => d.doctorPosition)
				.FirstOrDefault(h => h.Id == hospitalid);

			if (selectedHospital != null)
			{
				var doctorsInHospital = selectedHospital.Doctors
					.Where(d => d.doctorPosition.Id == doctorpositionid)
					.ToList();

				var model = new HomeVM
				{
					DoctorsWithPosition = doctorsInHospital,
					SelectedHospital = selectedHospital
				};

				return View(model);
			}

			return RedirectToAction("Index");
		}






	}
}