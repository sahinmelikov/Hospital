namespace Hospital_Template.Models
{
	public class Doctor
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public string ImagePath { get; set; }
		public string Age {  get; set; }
	
		public Hospital Hospital { get; set; }
		public int HospitalId { get;set; }
		public DoctorPosition doctorPosition { get;set; }
		public int DoctorPositionId { get;set; }
		
	}
}
