using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace Lesson6App1.Models
{
    public partial class Department
    {
        public int DeptId { get; set; }
        [MaxLength(10)]
        public string DeptName { get; set; }
        
        [NotMapped] 
        public int ManagerId { get; set; }

        DbSet<Employees> employees{ get; set; }

    }
}
