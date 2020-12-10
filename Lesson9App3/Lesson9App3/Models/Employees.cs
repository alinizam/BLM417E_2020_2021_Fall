using System;
using System.Collections.Generic;

namespace Lesson9App3.Models
{
    public partial class Employees
    {
        public int PersonelId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? Salary { get; set; }
        public int? DepartmentId { get; set; }
        public int? JobId { get; set; }
    }
}
