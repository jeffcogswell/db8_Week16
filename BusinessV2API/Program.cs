using BusinessV2API;
using MySql.Data.MySqlClient;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
	options.AddPolicy(name: "LocalOriginsPolicy",
		builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
	);
}
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}


// COPY INTO HERE
app.UseCors("LocalOriginsPolicy");

app.UseHttpsRedirection(); // <-- ABOVE THIS LINE

app.UseAuthorization();

app.MapControllers();

// Add the using statement up above for MySQL!
string connstring = app.Configuration.GetConnectionString("db");
Employee.DB = new MySqlConnection(connstring);
Department.DB = Employee.DB;

app.Run();
