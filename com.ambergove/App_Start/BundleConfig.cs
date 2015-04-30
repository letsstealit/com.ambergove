using System.Web;
using System.Web.Optimization;

namespace com.ambergove
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/js/jquery-{version}.js",
                        "~/js/jquery.dropotron.min.js",
                        "~/js/jquery.scrollgress.min.js",
                        "~/js/skel.min.js",
                        "~/js/skel-layers.min.js",
                        "~/js/init.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/js/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/js/modernizr-*"));

            bundles.Add(new StyleBundle("~/css/all").Include(
                      "~/css/skel.css",
                      "~/css/font-awesome.min.cs",
                     
                      "~/css/site.css",
                      "~/css/overrides.css"));
        }
    }
}
