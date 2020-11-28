using System;
using System.Collections.Generic;

namespace Lesson08App1.Models
{
    public partial class Employees
    {
        public int Pid { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Salary { get; set; }
        public int? DeptId { get; set; }

        public virtual Departments Dept { get; set; }
    }
}
