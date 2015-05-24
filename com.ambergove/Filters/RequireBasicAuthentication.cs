using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace com.ambergove.Filters
{
    public class RequireBasicAuthentication : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var req = filterContext.HttpContext.Request;
            if (String.IsNullOrEmpty(req.Headers["Authorization"]))
            {
                var res = filterContext.HttpContext.Response;
                res.StatusCode = 401;
                res.AddHeader("WWW-Authenticate", "Basic realm=\"ambergove\"");
                res.End();
            }
        }
    }
}
