using Microsoft.AspNetCore.Mvc;

namespace Hospital_Template.Controllers
{
	public class CommentController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
	}
}
