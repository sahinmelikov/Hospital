using Hospital_Template.Models;
using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography.X509Certificates;

namespace Hospital_Template.ViewModel
{
    public class DoctorCreateVM
    {  
        public string Name { get; set; }
        public string Description { get; set; }
        public IFormFile Photo { get; set; }
        public string Age { get; set; }
        public DateTime  DoctorTime { get; set; }
		public string HomeAddress { get; set; }
        //[Required, MinLength(9), DataType(DataType.PhoneNumber),]
        public double PhoneNumber { get; set; }
        public string EmailAddress { get; set; }

        public Doctor Doctors { get; set; }
        public int DoctorID { get; set; }
        public Hospital Hospital { get;set;}
        public int HospitalID { get; set; }
        public DoctorPosition doctorPosition { get; set; }
        public int DoctorPositionId { get; set; }


    }
}
