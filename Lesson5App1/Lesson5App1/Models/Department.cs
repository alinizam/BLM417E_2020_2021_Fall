using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lesson5App1.Models
{
    public class Department
    {
        public int DeptId{ get; set; }
        public string Name{ get; set; }
        
        public List<Employee> employees { get; set; } 
    }
}
