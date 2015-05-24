namespace com.ambergove.Migrations
{
    using com.ambergove.Models;
    using Microsoft.AspNet.Identity;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Data.Entity.Validation;
    using System.Linq;
    using System.Text;

    internal sealed class Configuration : DbMigrationsConfiguration<ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ApplicationDbContext context)
        {
            var passwordHash = new PasswordHasher();
            string hashedPassword = passwordHash.HashPassword("hairbyAmberGove1!");

            var adminUser = context.Users
                                   .Where(user => user.UserName == "amberlgove@gmail.com")
                                   .SingleOrDefault();

            if (adminUser != null)
                return;

            context.Users.AddOrUpdate(
                    new ApplicationUser()
                    {
                        FirstName = "Amber",
                        LastName = "Gove",
                        UserName = "amberlgove@gmail.com",
                        PasswordHash = hashedPassword
                    }
                );

            SaveChanges(context);
        }

        private void SaveChanges(DbContext context)
        {
            try
            {
                context.SaveChanges();
            }
            catch (DbEntityValidationException ex)
            {
                StringBuilder sb = new StringBuilder();

                foreach (var failure in ex.EntityValidationErrors)
                {
                    sb.AppendFormat("{0} failed validation\n", failure.Entry.Entity.GetType());
                    foreach (var error in failure.ValidationErrors)
                    {
                        sb.AppendFormat("- {0} : {1}", error.PropertyName, error.ErrorMessage);
                        sb.AppendLine();
                    }
                }

                throw new DbEntityValidationException(
                    "Entity Validation Failed - errors follow:\n" +
                    sb.ToString(), ex
                ); // Add the original exception as the innerException
            }
        }
    }
}
