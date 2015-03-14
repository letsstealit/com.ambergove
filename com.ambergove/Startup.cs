using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(com.ambergove.Startup))]
namespace com.ambergove
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
