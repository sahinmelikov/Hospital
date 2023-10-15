namespace Hospital_Template.Models
{
    public class Appointment
    {
        public int Id { get; set; }
        public int DoctorId { get; set; }
        public Doctor Doctor { get; set; }
        public string PasientName { get;set; }
        public string HospitalName { get; set; }
        public string PasitionName { get; set; }
        public bool IsDeleted { get;set; }
        public DateTime? AppointmentDateTime { get; set; }
        
        public string EmailAddress { get; set; }
     

        // İlişkili doktor verisini burada saklayabilirsiniz (örneğin, Doctor sınıfı gibi).
    }
}
