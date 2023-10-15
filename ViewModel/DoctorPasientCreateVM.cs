using Hospital_Template.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Hospital_Template.ViewModel
{
    public class DoctorPasientCreateVM
    {
        [Required(ErrorMessage = "Doktor seçimi zorunludur.")]
        [Display(Name = "Doktor")]
        public int SelectedDoctorId { get; set; }

        [Required(ErrorMessage = "Randevu saati seçimi zorunludur.")]
        [Display(Name = "Randevu Saati")]
        public DateTime SelectedAppointmentTime { get; set; }

        public List<Doctor> Doctors { get; set; }
     
        public string PatientName { get; set; }
        public string AppointmentResult { get; set; }


    }

    
}
