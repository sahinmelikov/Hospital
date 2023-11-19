using Hospital_Template.DAL;
using Hospital_Template.Migrations;
using Hospital_Template.Models;
using Hospital_Template.Utilities.Extensions;
using Hospital_Template.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace Hospital_Template.Areas.Admin.Controllers
{
     [Area("Admin")]
    [Authorize(Roles = "Admin,Maderator")]
    public class DoctorController : Controller
    {
        private readonly AppDbContext _appDbContext;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public DoctorController(AppDbContext appDbContext, IWebHostEnvironment webHostEnvironment)
        {
            _appDbContext = appDbContext;
            _webHostEnvironment = webHostEnvironment;
        }

      
        public IActionResult Index(int hospitalid)
        {
            var selectedHospital = _appDbContext.Hospitals 
               
                 .Include(h => h.Doctors)
               
                 .ThenInclude(h=>h.Appointments)
                 .Include(h => h.Doctors)  
                 .ThenInclude(d => d.doctorPosition)
                 .Where(h=>!h.IsDeleted)
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
                        Appointments=_appDbContext.Appointments.ToList(),
                };

                return View(model);
            }

            return RedirectToAction("Index");
        }
        public IActionResult DoctorUpper()
        {
            List<Doctor> doctor = _appDbContext.Doctor.Include(d=>d.Hospital).Include(d=>d.doctorPosition).Where(d=>!d.IsDeleted).OrderByDescending(d => d.Id).ToList();
            return View(doctor);
        }
        [HttpGet]
        public IActionResult Create()
        {
            List<Hospital> hospitals = _appDbContext.Hospitals.Where(d => !d.IsDeleted).ToList();
            List<SelectListItem> modelItems = hospitals.Select(m => new SelectListItem
            {
                Value = m.Id.ToString(),
                Text = m.Name
            }).ToList();
            List<DoctorPosition> doctorPositions = _appDbContext.DoctorPosition.Where(d => !d.IsDeleted).ToList();
            List<SelectListItem> modelItems1 = doctorPositions.Select(m => new SelectListItem
            {
                Value = m.Id.ToString(),
                Text = m.Position
            }).ToList();

            ViewBag.Hospitals = modelItems;
            ViewBag.DoctorPositions = modelItems1;

            return View();
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(DoctorCreateVM member)
        {
            if (ModelState.IsValid)
            {
                List<Hospital> hospitals = _appDbContext.Hospitals.Where(d => !d.IsDeleted).ToList();
                List<SelectListItem> modelItems = hospitals.Select(m => new SelectListItem
                {
                    Value = m.Id.ToString(),
                    Text = m.Name
                }).ToList();
                List<DoctorPosition> doctorPositions = _appDbContext.DoctorPosition.Where(d => !d.IsDeleted).ToList();
                List<SelectListItem> modelItems1 = doctorPositions.Select(m => new SelectListItem
                {
                    Value = m.Id.ToString(),
                    Text = m.Position
                }).ToList();

                ViewBag.Hospitals = modelItems;
                ViewBag.DoctorPositions = modelItems1;



                return View(member);
            }


            if (!member.Photo.CheckContentType("image/"))
            {
                ModelState.AddModelError("Photo", $"{member.Photo.FileName} Şekil Tipinde Olmalıdır");
                ViewBag.Hospitals = await _appDbContext.Hospitals
                     .Select(p => new SelectListItem
                     {
                         Value = p.Id.ToString(),
                         Text = p.Name
                     })
                     .ToListAsync();
                ViewBag.DoctorPositions = await _appDbContext.DoctorPosition
                    .Select(p => new SelectListItem
                    {
                        Value = p.Id.ToString(),
                        Text = p.Position
                    })
                    .ToListAsync();

                return View(member);
            }

            if (!member.Photo.CheckFileSize(1500))
            {
                ModelState.AddModelError("Photo", $"{member.Photo.FileName} - 200kb'dan Fazla Olamaz");
                ViewBag.Hospitals = await _appDbContext.Hospitals
                     .Select(p => new SelectListItem
                     {
                         Value = p.Id.ToString(),
                         Text = p.Name
                     })
                     .ToListAsync();
                ViewBag.DoctorPositions = await _appDbContext.DoctorPosition
                    .Select(p => new SelectListItem
                    {
                        Value = p.Id.ToString(),
                        Text = p.Position
                    })
                    .ToListAsync();

                return View(member);
            }

            string root = Path.Combine(_webHostEnvironment.WebRootPath, "RootAllPictures", "img");
            string fileName = await member.Photo.SaveAsync(root);
         

            Doctor doctor = new Doctor()
            {
                Name = member.Name,
                ImagePath = fileName,
                Description = member.Description,
                Age=member.Age,
                HomeAddress=member.HomeAddress,
                PhoneNumber=member.PhoneNumber,
                EmailAddress=member.EmailAddress,
                HospitalId=member.HospitalID,
                DoctorPositionId=member.DoctorPositionId,

            };

            await _appDbContext.Doctor.AddAsync(doctor);
            await _appDbContext.SaveChangesAsync();

            return RedirectToAction(nameof(DoctorUpper));
        }

        public async Task<IActionResult> Update(int id)
        {
            Doctor doctor = await _appDbContext.Doctor.FindAsync(id);
            if (doctor == null)
            {
                return NotFound();
            }

            List<Hospital> hospital = _appDbContext.Hospitals.Where(d => !d.IsDeleted).ToList();
            List<SelectListItem> modelItems = hospital.Select(m => new SelectListItem
            {
                Value = m.Id.ToString(),
                Text = $"{m.Name}"
            }).ToList();
            List<DoctorPosition> doctorposition = _appDbContext.DoctorPosition.Where(d => !d.IsDeleted).ToList();
            List<SelectListItem> modelItems1 = doctorposition.Select(m => new SelectListItem
            {
                Value = m.Id.ToString(),
                Text = $"{m.Position}"
            }).ToList();
            ViewBag.Hospital = modelItems;
            ViewBag.DoctorPosition = modelItems1;

           DoctorUpdateVM updateVM = new DoctorUpdateVM()
            {
                Id = doctor.Id,
                Name = doctor.Name,
                Description = doctor.Description,
                Age=doctor.Age,
                HomeAddress=doctor.HomeAddress,
                PhoneNumber=doctor.PhoneNumber,
                EmailAddress=doctor.EmailAddress,
                HospitalID=doctor.HospitalId,
                DoctorPositionId=doctor.DoctorPositionId,


            };

            return View("Update", updateVM);
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Update(DoctorUpdateVM updateVM)
        {
            if (ModelState.IsValid)
            {
                List<Hospital> hospital = _appDbContext.Hospitals.Where(d => !d.IsDeleted).ToList();
                List<SelectListItem> modelItems = hospital.Select(m => new SelectListItem
                {
                    Value = m.Id.ToString(),
                    Text = $"{m.Name}"
                }).ToList();
                List<DoctorPosition> doctorposition = _appDbContext.DoctorPosition.Where(d => !d.IsDeleted).ToList();
                List<SelectListItem> modelItems1 = doctorposition.Select(m => new SelectListItem
                {
                    Value = m.Id.ToString(),
                    Text = $"{m.Position}"
                }).ToList();
                ViewBag.Hospital = modelItems;
                ViewBag.DoctorPosition = modelItems1;

                return View(updateVM);
            }

            if (!updateVM.Photo.ContentType.Contains("image/"))
            {
                ModelState.AddModelError("Photo", $"{updateVM.Photo.FileName} Şekil Tipinde Olmalıdır");
                ViewBag.Hospital = await _appDbContext.Hospitals
                    .Select(p => new SelectListItem
                    {
                        Value = p.Id.ToString(),
                        Text = p.Name
                    })
                    .ToListAsync();
                ViewBag.DoctorPosition = await _appDbContext.DoctorPosition
                   .Select(p => new SelectListItem
                   {
                       Value = p.Id.ToString(),
                       Text = p.Position
                   })
                   .ToListAsync();
                return View(updateVM);
            }

            if (!updateVM.Photo.CheckFileSize(1800))
            {
                ModelState.AddModelError("Photo", $"{updateVM.Photo.FileName} - 200kb'dan Fazla Olamaz");
                ViewBag.Hospital = await _appDbContext.Hospitals
                    .Select(p => new SelectListItem
                    {
                        Value = p.Id.ToString(),
                        Text = p.Name
                    })
                    .ToListAsync();
                ViewBag.DoctorPosition = await _appDbContext.DoctorPosition
                   .Select(p => new SelectListItem
                   {
                       Value = p.Id.ToString(),
                       Text = p.Position
                   })
                   .ToListAsync();

                return View(updateVM);
            }

            Doctor doctor = await _appDbContext.Doctor.FindAsync(updateVM.Id);

            if (doctor == null)
            {
                return NotFound();
            }

            string rootPath = Path.Combine(_webHostEnvironment.WebRootPath, "RootAllPictures", "img");
            string oldFilePath = Path.Combine(rootPath, doctor.ImagePath);

            if (System.IO.File.Exists(oldFilePath))
            {
                System.IO.File.Delete(oldFilePath);
            }

            string newFileName = Guid.NewGuid().ToString() + updateVM.Photo.FileName;
            string newFilePath = Path.Combine(rootPath, newFileName);

            using (FileStream fileStream = new FileStream(newFilePath, FileMode.Create))
            {
                await updateVM.Photo.CopyToAsync(fileStream);
            }



            doctor.Name = updateVM.Name;
            doctor.Description = updateVM.Description;
            doctor.Age=updateVM.Age;
            doctor.HospitalId = updateVM.HospitalID;
            doctor.DoctorPositionId=updateVM.DoctorPositionId;
            doctor.HomeAddress = updateVM.HomeAddress;
            doctor.PhoneNumber = updateVM.PhoneNumber;
            doctor.EmailAddress=updateVM.EmailAddress;
            doctor.ImagePath = newFileName;
           
            await _appDbContext.SaveChangesAsync();

            return RedirectToAction(nameof(DoctorUpper));
        }
        [HttpGet]
        public IActionResult Delete(int Id)
        {
            Doctor? doctor = _appDbContext.Doctor?.Find(Id);

            if (doctor == null)
            {
                return NotFound();
            }

            // Yedekleme klasörünü kontrol et veya oluştur
            string backupFolderPath = Path.Combine(_webHostEnvironment.WebRootPath, "RootAllPictures", "backup");

            if (!Directory.Exists(backupFolderPath))
            {
                Directory.CreateDirectory(backupFolderPath);
            }

            // Resmi yedekleme yolunu oluştur
            string originalImagePath = Path.Combine(_webHostEnvironment.WebRootPath, "RootAllPictures", "img", doctor.ImagePath);
            string backupImagePath = Path.Combine(backupFolderPath, doctor.ImagePath);

            // Eğer yedekleme dosyası yoksa, orijinal resmi yedekle
            if (!System.IO.File.Exists(backupImagePath))
            {
                System.IO.File.Copy(originalImagePath, backupImagePath);
            }

            // Doktoru silinmiş olarak işaretle (IsDeleted = true)
            doctor.IsDeleted = true;

            _appDbContext.SaveChanges();

            return RedirectToAction(nameof(DoctorUpper));
        }
        [HttpPost]
        public IActionResult Restore(int Id)
        {
            Doctor? doctor = _appDbContext.Doctor?.Find(Id);

            if (doctor == null)
            {
                return NotFound();
            }

            // Yedekleme klasörünün yolunu oluştur
            string backupFolderPath = Path.Combine(_webHostEnvironment.WebRootPath, "RootAllPictures", "backup");

            // Yedeklenmiş resmin yolunu oluştur
            string backupImagePath = Path.Combine(backupFolderPath, doctor.ImagePath);

            // Eğer yedekleme dosyası varsa, geri yükle
            if (System.IO.File.Exists(backupImagePath))
            {
                // Orijinal resmi sil
                string originalImagePath = Path.Combine(_webHostEnvironment.WebRootPath, "RootAllPictures", "img", doctor.ImagePath);
                System.IO.File.Delete(originalImagePath);

                // Yedeklenmiş resmi orijinal yoluna kopyala
                System.IO.File.Copy(backupImagePath, originalImagePath);
            }

            // Doktoru tekrar aktif yap (IsDeleted = false)
            doctor.IsDeleted = false;

            _appDbContext.SaveChanges();

            return RedirectToAction(nameof(DoctorUpper));
        }



    }
}
