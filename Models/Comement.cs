namespace Hospital_Template.Models
{
    public class Comement
    {
        public int Id { get; set; }
        public int DoctorId { get; set; } // Doktor kimliği
        public string CommentText { get; set; } // Yorum metni
        public DateTime CommentDate { get; set; }
        public string UserName { get;set; }
        // İlişkili doktor
        public Doctor Doctor { get; set; } 
   
    }
}
