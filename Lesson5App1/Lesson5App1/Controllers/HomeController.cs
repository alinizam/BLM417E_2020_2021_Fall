using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lesson5App1.Models;
using Microsoft.AspNetCore.Mvc;

namespace Lesson5App1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            Employee e = new Employee();
            e.Id = 1;
            e.FirstName = "Ahmet";
            e.LastName = "Ak";

            Employee e1 = new Employee();
            e1.Id = 2;
            e1.FirstName = "Mehmet";
            e1.LastName = "Ak";

            Department d = new Department();
            d.employees = new List<Employee>();
            d.DeptId = 1;
            d.Name = "IT";
            d.employees.Add(e);
            d.employees.Add(e1);
            TempData["SendedMessage"]="Temp message";
            return View(d);
        }
        public IActionResult IndexViewData()
        {
            ViewData["Message"] = "Saved";
            Employee e = new Employee();
            e.Id = 1;
            e.FirstName = "Ahmet";
            e.LastName = "Ak";

            Employee e1 = new Employee();
            e1.Id = 2;
            e1.FirstName = "Mehmet";
            e1.LastName = "Ak";

            Department d = new Department();
            d.employees = new List<Employee>();
            d.DeptId = 1;
            d.Name = "IT";
            d.employees.Add(e);
            d.employees.Add(e1);
            ViewData["dept"] = d;
            return View();

        }
        public IActionResult IndexViewBag() {
            ViewBag.mesaj = "Saved";
            ViewBag.title = "Message is given ";

            return View();
        }
    }
}