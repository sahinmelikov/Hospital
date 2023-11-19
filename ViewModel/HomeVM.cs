using Hospital_Template.Models;
using System.ComponentModel.DataAnnotations;

namespace Hospital_Template.ViewModel
{
	public class HomeVM
	{
		public List<Hospital> Hospital { get; set; }
		public List<Doctor>? Doctors { get; set; }
		public Hospital? SelectedHospital { get; set; }
		public Doctor SelectedDoctor { get; set; }
		public bool ShowNotificationModal { get; set; }
		public List<DoctorPosition>DoctorPositions { get; set; }
		public List<DoctorPosition> SelectedDoctorPosition { get; set; }
		public List<Doctor> DoctorsWithPosition { get; set; }
		public List<Appointment> Appointments { get; set; }
        public int SelectedDoctorId { get; set; }

        [Required(ErrorMessage = "Please enter your comment.")]
        public string Comment { get; set; }
		public List<Comement>Comements { get; set; }
		public List<DoctorViewModel> DoctorViewModel { get; set; }

    }



}

