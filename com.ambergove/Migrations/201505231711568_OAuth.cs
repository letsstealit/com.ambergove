namespace com.ambergove.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class OAuth : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.OAuthClients",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Name = c.String(),
                        Token = c.String(),
                        User_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.User_Id)
                .Index(t => t.User_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.OAuthClients", "User_Id", "dbo.AspNetUsers");
            DropIndex("dbo.OAuthClients", new[] { "User_Id" });
            DropTable("dbo.OAuthClients");
        }
    }
}
