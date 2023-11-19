namespace Hospital_Template.ViewModel
{
    public class DoctorViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int HospitalId { get; set; }
        public string Comment { get; set; }
        public int DoctorId { get; set; } // Yeni eklenen özellik
    }
}
