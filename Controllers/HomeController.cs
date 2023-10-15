using Hospital_Template.DAL;
using Hospital_Template.Migrations;
using Hospital_Template.Models;
using Hospital_Template.ViewModel;
using Hospital_Template.ViewModel.Auth;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Net.Mail;
using System.Net;
using System.Numerics;
using System.Security.Claims;

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
            HomeVM homeVM = new HomeVM()
            {
                Hospital = _appDbContext.Hospitals
                    .Include(h => h.Doctors)
                    .ThenInclude(d => d.Appointments)
                    .Where(d => !d.IsDeleted)
                    .ToList(),

                Doctors = _appDbContext.Doctor
                    .Include(d => d.doctorPosition)
                    .Where(d => !d.IsDeleted)
                    .ToList(),

                Appointments = _appDbContext.Appointments.ToList()
            };

            bool isAuthenticated = User.Identity.IsAuthenticated;
            string username = User.Identity.Name;

            // Kullanıcı giriş yapmışsa ve randevusu varsa H1 etiketini görünür yap
            if (isAuthenticated)
            {
                var userAppointments = _appDbContext.Appointments
                    .Where(a => a.PasientName == username && a.AppointmentDateTime != null)
                    .ToList();

                if (userAppointments.Count > 0)
                {
                    ViewData["ShowH1"] = true;
                    ViewData["ShowModal"] = true;
                }
            }

            return View(homeVM);
        }


        public IActionResult Randevu()
        {
            if (!User.Identity.IsAuthenticated)
            {
                return RedirectToAction("Register", "Account");
            }

            HomeVM homeVM = new HomeVM()
            {
                
                Hospital = _appDbContext.Hospitals.Include(h => h.Doctors).Where(d=>!d.IsDeleted).ToList(),
                Doctors = _appDbContext.Doctor.Include(d => d.doctorPosition).Where(d=>!d.IsDeleted).ToList()
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
                    .Where(h => !h.IsDeleted)
                    .FirstOrDefault(h => h.Id == hospitalId);
            }

            List<DoctorPosition> uniquePositions = selectedHospital?.Doctors .Where(d => !d.IsDeleted)
                .Select(d => d.doctorPosition)
                .Where(dp => dp != null) // Null pozisyonları filtrele
               
                .Distinct()
                .ToList();

            HomeVM homeVM = new HomeVM()
            {
                SelectedHospital = selectedHospital,
                DoctorPositions = uniquePositions,

                Hospital = _appDbContext.Hospitals.Include(d => d.Doctors).Where(d=>!d.IsDeleted).ToList(),

                Doctors = _appDbContext.Doctor.Include(d => d.doctorPosition).Where(d =>!d.IsDeleted).ToList()
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
                Hospital = _appDbContext.Hospitals.Include(h => h.Doctors).Where(d=>!d.IsDeleted).ToList()
            };

            return View(homeVM);
        }



        public IActionResult Hospital(int hospitalid)
        {
            var selectedHospital= _appDbContext.Hospitals
                .Include(h => h.Doctors)
                .ThenInclude(d => d.doctorPosition)
                .Where(d=>!d.IsDeleted)
                .FirstOrDefault(h => h.Id == hospitalid);

            if (selectedHospital != null)
            {
                var model = new HomeVM
                {
                    SelectedHospital = selectedHospital,
                    Doctors = selectedHospital.Doctors.Where(d=>!d.IsDeleted).ToList(), // Doktorları doğrudan ekledik
                    
                    DoctorPositions = selectedHospital.Doctors
                        .Select(d => d.doctorPosition)
                        .Where(d=>!d.IsDeleted)
                        .Distinct()
                        .ToList(),
                        

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
                .Where(d=>!d.IsDeleted)
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
        [HttpGet]
        public IActionResult AppointmentYeniRandevu(int doctorId)
        {
            // Veritabanından ilgili doktoru almak için LINQ sorgusu kullanabilirsiniz
            var doctor = _appDbContext
                .Doctor
                .Include(d => d.Hospital)
                .Include(d => d.Hospital)
                .Include(d => d.doctorPosition)
                .FirstOrDefault(d => d.Id == doctorId);

            if (doctor == null)
            {
                return Json("Qaqa Getde!"); // Doktor bulunamazsa 404 hatası döndürün
            }
            // Kullanıcının kimliğinden "Email" özelliğini almak
            var emailClaim = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email);
            string email = emailClaim?.Value;

            var appointmentVM = new AppointmentVM
            {
                DoctorId = doctor.Id,
                Doctor = doctor,
                HospitalName = doctor.Hospital.Name,
                PasitionName = doctor.doctorPosition.Position,
                EmailAddress =email,
                // Diğer gerekli verileri burada doldurabilirsiniz
            };

            return View(appointmentVM);
        }

        // POST: Home/AppointmentYeniRandevu
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> AppointmentYeniRandevu(AppointmentVM appointmentVM)
        {
            if (!ModelState.IsValid)
            {
                var doctor = _appDbContext.Doctor
                    .Include(d => d.Hospital)
                    .Include(d => d.doctorPosition)
                    .FirstOrDefault(d => d.Id == appointmentVM.DoctorId);

                if (doctor == null)
                {
                    return NotFound(); // Doktor bulunamazsa hata işleyin veya yönlendirin
                }

                var emailClaim = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email);
                string patientEmail = emailClaim?.Value;

                var appointment = new Appointment
                {
                    Doctor = doctor,
                    DoctorId = appointmentVM.DoctorId,
                    PasientName = User.Identity.Name,
                    HospitalName = doctor.Hospital.Name,
                    PasitionName = doctor.doctorPosition.Position,
                    AppointmentDateTime = appointmentVM.AppointmentDateTime,
                    EmailAddress = patientEmail
                };

                _appDbContext.Appointments.Add(appointment);
                await _appDbContext.SaveChangesAsync();

                // Şimdi doktora bildirim gönderme işlemini gerçekleştirin
                SendNotificationToDoctor(appointment);

                return RedirectToAction("Index"); // Başarılı bir şekilde kaydedildikten sonra bir başka sayfaya yönlendirin
            }

            return View("Index"); // ModelState geçerli değilse, tekrar formu gösterin
        }

        private void SendNotificationToDoctor(Appointment appointment)
        {
            var doctorEmail = appointment.Doctor.EmailAddress;

            // Gmail SMTP sunucusunu kullanmak için gerekli ayarları yapın
            var smtpServer = "smtp.gmail.com";
            var smtpPort = 587;
            var smtpUsername = "7p43xz0@code.edu.az";
            var smtpPassword = "sahin238";

            using (var client = new SmtpClient(smtpServer, smtpPort))
            {
                client.Credentials = new NetworkCredential(smtpUsername, smtpPassword);
                client.EnableSsl = true;

                var fromAddress = new MailAddress(smtpUsername, appointment.HospitalName+" Randevu Bildirimi");
                var toAddress = new MailAddress(doctorEmail);

                using (var message = new MailMessage(fromAddress, toAddress))
                {
                    message.Subject = "Randevu Bildirimi: " + appointment.PasientName;
                    message.Body = "Hörmətli " + appointment.Doctor.Name + ",\n\nYeni bir randevunuz var.\nLütfən ayrıntıları kontrol edin.";

                    client.Send(message);
                }
            }
        }

        [HttpGet]
        public IActionResult AppointmentHastaSonuclari()
        {
            if (User.Identity.IsAuthenticated)
            {
                // Kullanıcı giriş yapmışsa, randevu bilgilerini kullanıcı adına göre alın
                var pasientName = User.Identity.Name;

                var appointments = _appDbContext.Appointments.Where(d => d.PasientName == pasientName).ToList();

                return View(appointments);
            }
            else
            {
                // Kullanıcı giriş yapmamışsa, giriş sayfasına yönlendirin
                return RedirectToAction("Login", "Account");
            }
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult AppointmentHastaSonuclari(Appointment appointment)
        {
            var appointment1 = _appDbContext.Appointments.FirstOrDefault(d => d.PasientName == appointment.PasientName
                                                              );

            if (appointment1 != null)
            {
                // Veriler uygunsa, başka bir sayfaya yönlendirin ve seçili randevuyu taşıyın
                return RedirectToAction("DoctorRandevuSaati", new { selectedAppointmentId = appointment1.Id });
            }

            // Koşullar sağlanmıyorsa, kullanıcıya bir hata mesajı gösterin
            TempData["ErrorMessage"] = "Yanlış veri. Lütfen tekrar deneyin.";
            return View(appointment); // Aynı sayfada kalın
        }




        








    }
}






