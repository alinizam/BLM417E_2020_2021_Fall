using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Lesson6App1.Models
{
    public class Employees
    {
        [Key]
        public int PId { get; set; }
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public int Salary { get; set; }
        
        public int DepartmentId { get; set; }
        public Department dept { get; set; }
    }
}
