using Microsoft.AspNetCore.Identity;

namespace Hospital_Template.Models.Auth
{
    public class AppUser : IdentityUser
    {
        public string Fullname { get; set; }
        public bool IsActivated { get; set; }
    }
}
