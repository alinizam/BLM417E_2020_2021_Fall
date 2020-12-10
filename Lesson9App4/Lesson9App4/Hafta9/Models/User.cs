using System;
using System.Collections.Generic;

namespace Hafta9.Models
{
    public partial class User
    {
        public User()
        {
            UserDepartments = new HashSet<UserDepartments>();
        }

        public int UserId { get; set; }
        public string Password { get; set; }

        public virtual ICollection<UserDepartments> UserDepartments { get; set; }
    }
}
