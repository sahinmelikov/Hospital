using Hospital_Template.DAL;
using Hospital_Template.Models;
using Hospital_Template.Utilities.Extensions;
using Hospital_Template.ViewModel;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

namespace Hospital_Template.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class HospitalController : Controller
    {
        private readonly AppDbContext _appDbContext;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public HospitalController(AppDbContext appDbContext, IWebHostEnvironment webHostEnvironment)
        {
            _appDbContext = appDbContext;
            _webHostEnvironment = webHostEnvironment;
        }


        public IActionResult Index()
        {

            HomeVM homeVM = new HomeVM()
            {
                Hospital = _appDbContext.Hospitals.Include(h => h.Doctors).Where(d=>!d.IsDeleted).ToList(),
                Doctors = _appDbContext.Doctor.Include(d => d.doctorPosition).Where(d => d.IsDeleted).ToList()
            };

            return View(homeVM);
        }
		public IActionResult HospitalUpper()
		{

            List<Hospital> hospital =_appDbContext.Hospitals.Where(d=>!d.IsDeleted).OrderByDescending(d => d.Id).ToList();

            return View(hospital);
        }
        public IActionResult Create()
        {

            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(HospitalCreateVM hospitalVM)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }
            if (!hospitalVM.Photo.CheckContentType("image/"))
            {
                ModelState.AddModelError("Photo", $"{hospitalVM.Photo.FileName} Sekil Tipinde olmalidir ");
                return View();
            }
            if (!hospitalVM.Photo.CheckFileSize(1500))
            {
                ModelState.AddModelError("Photo", $"{hospitalVM.Photo.FileName} - 200kb dan Cox Olmaz");
                return View();
            }

            string root = Path.Combine(_webHostEnvironment.WebRootPath, "RootAllPictures", "img");
            string fileName = await hospitalVM.Photo.SaveAsync(root);


            Hospital hospital = new Hospital()
            {
                Name = hospitalVM.Name,
                Description= hospitalVM.Description,

                ImagePath = fileName,


            };
            await _appDbContext.Hospitals.AddAsync(hospital);
            await _appDbContext.SaveChangesAsync();
            return RedirectToAction(nameof(HospitalUpper));
        }
        [HttpGet]
        public IActionResult Delete(int Id)
        {
            Hospital? hospital = _appDbContext.Hospitals?.Find(Id);

            if (hospital == null)
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
            string originalImagePath = Path.Combine(_webHostEnvironment.WebRootPath, "RootAllPictures", "img", hospital.ImagePath);
            string backupImagePath = Path.Combine(backupFolderPath, hospital.ImagePath);

            // Eğer yedekleme dosyası yoksa, orijinal resmi yedekle
            if (!System.IO.File.Exists(backupImagePath))
            {
                System.IO.File.Copy(originalImagePath, backupImagePath);
            }

            // Doktoru silinmiş olarak işaretle (IsDeleted = true)
            hospital.IsDeleted = true;

            _appDbContext.SaveChanges();

            return RedirectToAction(nameof(HospitalUpper));
        }
        [HttpPost]
        public IActionResult Restore(int Id)
        {
            Hospital? hospital = _appDbContext.Hospitals?.Find(Id);

            if (hospital == null)
            {
                return NotFound();
            }

            // Yedekleme klasörünün yolunu oluştur
            string backupFolderPath = Path.Combine(_webHostEnvironment.WebRootPath, "RootAllPictures", "backup");

            // Yedeklenmiş resmin yolunu oluştur
            string backupImagePath = Path.Combine(backupFolderPath, hospital.ImagePath);

            // Eğer yedekleme dosyası varsa, geri yükle
            if (System.IO.File.Exists(backupImagePath))
            {
                // Orijinal resmi sil
                string originalImagePath = Path.Combine(_webHostEnvironment.WebRootPath, "RootAllPictures", "img", hospital.ImagePath);
                System.IO.File.Delete(originalImagePath);

                // Yedeklenmiş resmi orijinal yoluna kopyala
                System.IO.File.Copy(backupImagePath, originalImagePath);
            }

            // Doktoru tekrar aktif yap (IsDeleted = false)
            hospital.IsDeleted = false;

            _appDbContext.SaveChanges();

            return RedirectToAction(nameof(HospitalUpper));
        }
        [HttpGet]
        public async Task<IActionResult> Update(int id)
        {
            Hospital hospital = await _appDbContext.Hospitals.FindAsync(id);
            if (hospital == null)
            {
                return NotFound();
            }

            

           HospitalUpdateVM updateVM = new HospitalUpdateVM()
            {
                Id = hospital.Id,
                Name = hospital.Name,
                Description = hospital.Description,
               
            };

            return View("Update", updateVM);
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Update(HospitalUpdateVM updateVM)
        {
            

            if (!updateVM.Photo.ContentType.Contains("image/"))
            {
                ModelState.AddModelError("Photo", $"{updateVM.Photo.FileName} Şekil Tipinde Olmalıdır");
               

                return View(updateVM);
            }

            if (!updateVM.Photo.CheckFileSize(1800))
            {
                ModelState.AddModelError("Photo", $"{updateVM.Photo.FileName} - 200kb'dan Fazla Olamaz");
               

                return View(updateVM);
            }

            Hospital hospital = await _appDbContext.Hospitals.FindAsync(updateVM.Id);

            if (hospital == null)
            {
                return NotFound();
            }

            string rootPath = Path.Combine(_webHostEnvironment.WebRootPath, "RootAllPictures", "img");
            string oldFilePath = Path.Combine(rootPath, hospital.ImagePath);

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



            hospital.Name = updateVM.Name;
            hospital.Description = updateVM.Description;

            hospital.ImagePath = newFileName;
            

            await _appDbContext.SaveChangesAsync();

            return RedirectToAction(nameof(HospitalUpper));
        }

    }
}
