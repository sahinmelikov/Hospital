using Hospital_Template.Models;
using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace Hospital_Template.ViewModel
{
    public class DoctorUpdateVM
    {
        public int Id { get; set; }
        [Display(Name = "Doctor Time")]
        public DateTime? DoctorTime { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public IFormFile Photo { get; set; }
        public string Age { get; set; }
      
        public Doctor Doctors { get; set; }
        public int DoctorID { get; set; }
        public Hospital Hospital { get; set; }
        public int HospitalID { get; set; }
		public string HomeAddress { get; set; }
		public double PhoneNumber { get; set; }
        public string EmailAddress { get; set; }
        public DoctorPosition doctorPosition { get; set; }
        public int DoctorPositionId { get; set; }
        public string PasientName { get; set; }
        public string HospitalName { get; set; }
        public string PasitionName { get; set; }

    }
}
