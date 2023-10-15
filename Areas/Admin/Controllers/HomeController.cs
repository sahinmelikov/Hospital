using Microsoft.AspNetCore.Mvc;

namespace Hospital_Template.Areas.Admin.Controllers
{
	[Area("Admin")]
	public class HomeController : Controller
	{
		
		public IActionResult Index()
		{
			return View();
		}
	}
}
