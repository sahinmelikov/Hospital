using Hospital_Template.Models;
using Hospital_Template.Models.Auth;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Hospital_Template.DAL
{
	public class AppDbContext : IdentityDbContext<AppUser>
    {
		public AppDbContext(DbContextOptions options) : base(options)
		{
		}

		public DbSet<Hospital>Hospitals { get; set; }
		public DbSet<Doctor> Doctor { get; set; }
		public DbSet<DoctorPosition>? DoctorPosition { get; set;}
		public DbSet<Appointment>? Appointments { get; set;}
		public DbSet<Comement> Comments { get; set; }
	}
}
