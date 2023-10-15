using Hospital_Template.Models;

namespace Hospital_Template.ViewModel
{
    public class AppointmentVM
    {
        public int Id { get; set; }
        public int DoctorId { get; set; }
        public Doctor Doctor { get; set; }
        public string PasientName { get; set; }
        public string EmailAddress { get;set; }
        public string HospitalName { get; set; }
        public string PasitionName { get; set; }
        public DateTime HappyYear { get; set; }
        public string FatherName { get; set; }
        public DateTime? AppointmentDateTime { get; set; }
        public string PasientCode { get; set; }
    }
}
