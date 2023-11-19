using System.ComponentModel.DataAnnotations;

namespace Hospital_Template.ViewModel.Auth
{
    public class ForgetPasswordVM
    {
        [Required(ErrorMessage = "E-posta adresi zorunludur.")]
        [EmailAddress(ErrorMessage = "Geçerli bir e-posta adresi giriniz.")]
        public string Email { get; set; }
    }
}
