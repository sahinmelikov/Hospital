namespace Hospital_Template.Models
{
	public class DoctorPosition
	{
        public int Id { get; set; }
		public string Position { get; set; }	
		public bool IsDeleted { get; set; }
		public List<Doctor>Doctors { get; set; }
	
    }
}
