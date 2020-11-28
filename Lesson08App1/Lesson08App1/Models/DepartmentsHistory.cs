using System;
using System.Collections.Generic;

namespace Lesson08App1.Models
{
    public partial class DepartmentsHistory
    {
        public int Id { get; set; }
        public int? DeptId { get; set; }
        public string DeptName { get; set; }
    }
}
