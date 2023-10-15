using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hospital_Template.Migrations
{
    public partial class IsDeletedDoctor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Doctor",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Doctor");
        }
    }
}
