using Hospital_Template.Models;

namespace Hospital_Template.ViewModel
{
	public class HomeVM
	{
		public List<Hospital> Hospital { get; set; }
		public List<Doctor>? Doctors { get; set; }
		public Hospital SelectedHospital { get; set; }
		public List<DoctorPosition>DoctorPositions { get; set; }
		public List<DoctorPosition> SelectedDoctorPosition { get; set; }
		public List<Doctor> DoctorsWithPosition { get; set; }
		

	}

}
