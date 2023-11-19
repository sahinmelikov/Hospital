using System.ComponentModel.DataAnnotations;

namespace Hospital_Template.Models
{
	public class Doctor
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public string ImagePath { get; set; }
		public string Age {  get; set; }
		public string HomeAddress { get; set; }
		public string EmailAddress { get; set; }
        public double PhoneNumber { get;set; }
		public bool IsDeleted { get;set; }
		public Hospital Hospital { get; set; }
		public int HospitalId { get;set; }
		public DoctorPosition doctorPosition { get;set; }
		public int DoctorPositionId { get;set; }
		public List<Appointment>Appointments { get; set; }
		public DateTime? TimeDoctor{ get; set; }
		public List<Comement> Comements { get; set; }
		
			
    }
}
