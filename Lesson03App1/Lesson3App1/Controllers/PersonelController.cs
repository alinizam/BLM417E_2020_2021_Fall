using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lesson3App1.Models;
using Lesson3App1.Repository;
using Microsoft.AspNetCore.Mvc;

namespace Lesson3App1.Controllers
{
    public class PersonelController : Controller
    {
        private IPersonelRepository _repository;
        public PersonelController(IPersonelRepository repository) {
            _repository = repository;
        }
        [HttpGet]
        public IActionResult Index()
        {
            var personels = _repository.GetPersonels();
            return View(personels);
        }


        public IActionResult IndexDogrudanEklemeli()
        {
            List<Personel> personeller=new List<Personel>();
            personeller.Add(new Personel {PersonelId=1,Adi="Ahmet",Soyadi="Ak"});
            personeller.Add(new Personel { PersonelId = 2, Adi = "Mehmet", Soyadi = "Mavi" });
            personeller.Add(new Personel { PersonelId = 3, Adi = "Kemal", Soyadi = "Yeşil" });
            return View(personeller);
        }

        public IActionResult Edit()
        {
            //Personel p = new Personel(new {PersonelId=1,Adi="Ahmet",Soyadi="Ak" });
            var p = new Personel();
            p.PersonelId = 1;
            p.Adi = "Ahmet";
            p.Soyadi = "Ak";
            return View(p);
        }

        [HttpGet]
        public IActionResult Add()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Add(Personel p)
        {
            _repository.GetPersonels().Add(p);
            
            return RedirectToAction("Index");
        }
        public IActionResult Delete(int pId)
        {
            var per=_repository.GetPersonels().Where(p=>p.PersonelId==pId).FirstOrDefault();
            _repository.GetPersonels().Remove(per);
            return RedirectToAction("Index");
        }

    }
}