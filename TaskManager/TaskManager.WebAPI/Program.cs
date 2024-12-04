using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using TaskManager.Business.Abstract;
using TaskManager.Business.Concreate;
using TaskManager.Business.Utils.Token;
using TaskManager.Data.Access.Abstract;
using TaskManager.Data.Access.Concreate.EntityFramework;
using TaskManager.Data.Access.DataAccess;

var builder = WebApplication.CreateBuilder(args);
ConfigurationManager configuration = builder.Configuration;

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors(opt => opt.AddPolicy("MyCorsPolicy", policy => policy.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader()));



builder.Services.AddDbContext<TaskManagerContext>();
builder.Services.AddScoped<IUserService, UserManager>();
builder.Services.AddScoped<ITaskUserService, TaskUserManager>();
builder.Services.AddScoped<ITasksService, TasksManager>();
builder.Services.AddScoped<IUserDal, EfUserDal>();
builder.Services.AddScoped<ITaskDal,EfTaskDal>();
builder.Services.AddScoped<ITaskUserDal,EfTaskUserDal>();
builder.Services.AddScoped<IJwtTokenGenerator, JwtTokenGenerator>();
builder.Services.AddHttpContextAccessor();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddAuthentication(opt =>
{
    opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

}).AddJwtBearer(opt =>
{
    opt.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = configuration["JwtIssuer"],
        ValidAudience = configuration["JwtAudience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtSecurityKey"]))
    };
});

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
