using Hospital_Template.Models;
using Microsoft.EntityFrameworkCore;

namespace Hospital_Template.DAL
{
	public class AppDbContext : DbContext
	{
		public AppDbContext(DbContextOptions options) : base(options)
		{
		}

		public DbSet<Hospital>Hospitals { get; set; }
		public DbSet<Doctor>? Doctor { get; set; }
		public DbSet<DoctorPosition>? DoctorPosition { get; set;}
	}
}
