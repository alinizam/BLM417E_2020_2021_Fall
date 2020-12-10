using Lesson9App1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Lesson9App1.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        public string userName;
        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            
            userName = "Ahmet AK";
            ViewBag.UserName = userName;
           

            HttpContext.Session.SetString("UserNameFromSession", userName);
            ViewBag.UserNameFromSession = userName;

            TempData["UserNameFromTempData"] = userName;

            return View();
        }

        public IActionResult Privacy()
        {
            ViewBag.UserName = userName;
            ViewBag.UserNameFromSession = HttpContext.Session.GetString("UserNameFromSession");
            
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
