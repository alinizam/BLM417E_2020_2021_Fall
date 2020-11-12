using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lesson6App1.Models
{
    public class PersonelDBContext:DbContext
    {
       
        public virtual DbSet<Employees> Employees { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder options) {
            options.UseSqlServer("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=C:\\Users\\alinizam\\Documents\\PersonelDB.mdf;Integrated Security=True;Connect Timeout=30");
        }
    }
}
