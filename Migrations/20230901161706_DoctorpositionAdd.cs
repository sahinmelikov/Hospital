using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hospital_Template.Migrations
{
    public partial class DoctorpositionAdd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DoctorPosition",
                table: "Doctor");

            migrationBuilder.AddColumn<int>(
                name: "DoctorPositionId",
                table: "Doctor",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "DoctorPosition",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Position = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DoctorPosition", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Doctor_DoctorPositionId",
                table: "Doctor",
                column: "DoctorPositionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Doctor_DoctorPosition_DoctorPositionId",
                table: "Doctor",
                column: "DoctorPositionId",
                principalTable: "DoctorPosition",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Doctor_DoctorPosition_DoctorPositionId",
                table: "Doctor");

            migrationBuilder.DropTable(
                name: "DoctorPosition");

            migrationBuilder.DropIndex(
                name: "IX_Doctor_DoctorPositionId",
                table: "Doctor");

            migrationBuilder.DropColumn(
                name: "DoctorPositionId",
                table: "Doctor");

            migrationBuilder.AddColumn<string>(
                name: "DoctorPosition",
                table: "Doctor",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
