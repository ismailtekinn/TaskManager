using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Entities.Concreate;

namespace TaskManager.Data.Access.DataAccess
{
    public class TaskManagerContext:DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Host=localhost;Port=5432;Database=TaskManagerDB;Username=postgres;Password=12345;";

            optionsBuilder.UseNpgsql(connectionString);
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Tasks> Tasks { get; set; }
        public DbSet<TaskUser> TaskUsers { get; set; }


    }
}
