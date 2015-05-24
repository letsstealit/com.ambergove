using com.ambergove.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace com.ambergove.Controllers
{
    public class OAuthController : Controller
    {
        [Authorize]
        public ActionResult Index()
        {

            return View();

        }

        [HttpPost]
        public ActionResult Instagram(dynamic posted)
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

    }
}