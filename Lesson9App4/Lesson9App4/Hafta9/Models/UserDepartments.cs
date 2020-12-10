using System;
using System.Collections.Generic;

namespace Hafta9.Models
{
    public partial class UserDepartments
    {
        public int UserDeptId { get; set; }
        public int UserId { get; set; }
        public string DeptName { get; set; }

        public virtual User User { get; set; }
    }
}
