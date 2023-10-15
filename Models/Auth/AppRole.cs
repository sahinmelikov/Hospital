using Microsoft.AspNetCore.Identity;

namespace Hospital_Template.Models.Auth
{
    public class AppRole : IdentityRole
    {
        public bool IsActivated { get; set; }
    }
}
