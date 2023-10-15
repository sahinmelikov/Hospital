namespace Hospital_Template.Models
{
	public class Hospital
	{
        public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public bool IsDeleted { get; set; }
		public string ImagePath { get;set; }
		public List<Doctor> Doctors { get; set; }
	

	}
}
