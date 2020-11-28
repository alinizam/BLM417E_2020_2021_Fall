using System;
using System.Collections.Generic;

namespace Lesson08App1.Models
{
    public partial class Departments
    {
        public Departments()
        {
            Employees = new HashSet<Employees>();
        }

        public int DeptId { get; set; }
        public string DeptName { get; set; }

        public virtual ICollection<Employees> Employees { get; set; }
    }
}
