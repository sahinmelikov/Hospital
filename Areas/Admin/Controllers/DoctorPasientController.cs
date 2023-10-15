using Hospital_Template.DAL;
using Hospital_Template.Models;
using Hospital_Template.ViewModel;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

namespace Hospital_Template.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class DoctorPasientController : Controller
    {
        private readonly AppDbContext _appDbContext;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public DoctorPasientController(AppDbContext appDbContext, IWebHostEnvironment webHostEnvironment)
        {
            _appDbContext = appDbContext;
            _webHostEnvironment = webHostEnvironment;
        }

        public IActionResult Index(int id)
        {
            var doctor = _appDbContext.Doctor
        .Include(d => d.doctorPosition)
        .Include(d => d.Hospital)
        .Include(d => d.Appointments)
        .Where(d=>!d.IsDeleted)
        .FirstOrDefault(d => d.Id == id);

            if (doctor != null)
            {
             Appointment appointment = new Appointment()
                {
                    Id = doctor.Id,
                    HospitalName = doctor.Hospital.Name,
                    PasitionName = doctor.doctorPosition.Position,
                    AppointmentDateTime=doctor.TimeDoctor

                };
                return View(doctor);
            }

            return RedirectToAction("Index");
        }
    

        [HttpGet]
        public IActionResult Create()
        {
            var viewModel = new DoctorCreateVM();


            return View(viewModel);
        }

        [HttpPost]
        public IActionResult Create(DoctorCreateVM viewModel)
        {
            if (ModelState.IsValid)
            {
                // Create a new Appointment and set its properties
                var appointment = new Appointment
                {
                    DoctorId = viewModel.DoctorID,
                    AppointmentDateTime = viewModel.DoctorTime
                };

                _appDbContext.Appointments.Add(appointment);
                _appDbContext.SaveChanges();

                return RedirectToAction("Index");
            }

            // If the model is not valid, re-render the form with validation errors

            return View(viewModel);
        }
        [HttpGet]
        public IActionResult Update(int id)
        {
            var appointment = _appDbContext.Appointments
                .Include(a => a.Doctor)
                    .ThenInclude(d => d.Hospital)
                .Include(a => a.Doctor)
                    .ThenInclude(d => d.doctorPosition)
                .FirstOrDefault(a => a.Id == id);

            if (appointment == null)
            {
                return NotFound();
            }

            var doctorUpdateVM = new DoctorUpdateVM
            {
                Id = appointment.Id,
                DoctorID = appointment.DoctorId,
                HospitalName = appointment.Doctor.Hospital.Name,
                PasitionName = appointment.Doctor.doctorPosition.Position,
                PasientName = appointment.PasientName,
                DoctorTime = appointment.AppointmentDateTime,
                
            };

            return View("Update", doctorUpdateVM);
        }
        [HttpPost]
        public IActionResult Update(int Id, DateTime doctorTime = default)
        {
            // Randevu öğesini veritabanından çekin
            if (Id > 0)
            {
                var appointment = _appDbContext.Appointments.Find(Id);

                if (appointment == null)
                {
                    return NotFound();
                }

                if (doctorTime == default)
                {
                    // Eğer doctorTime boşsa ModelState hatası ekle
                    ModelState.AddModelError("DoctorTime", "Randevu tarihi seçilmedi.");
                    return View(); // Hatanın eklendiği View'i tekrar göster
                }

                // Randevu tarihini güncelleyin
                appointment.AppointmentDateTime = doctorTime;
            }

            // Değişiklikleri kaydedin
            _appDbContext.SaveChanges();

            // Doğru controller ve action'a yönlendirme yapın
            var doctorId = _appDbContext.Appointments.FirstOrDefault(a => a.Id == Id)?.DoctorId;
            if (doctorId != null)
            {
                return RedirectToAction("Index", new { id = doctorId });
            }

            return RedirectToAction("Index");
        }
        [HttpGet]
        public IActionResult Delete(int Id)
        {
            Appointment? appointment = _appDbContext.Appointments?.Find(Id);

            if (appointment == null)
            {
                return NotFound();
            }

            // Doktoru silinmiş olarak işaretle (IsDeleted = true)
            appointment.IsDeleted = true;

            _appDbContext.SaveChanges();

            // Silme işlemi tamamlandığında, doktorun ayrıntılarını gösteren sayfaya geri dönün.
            return RedirectToAction("Index", new { id = appointment.DoctorId });
        }







    }

}
