using Lesson3App1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lesson3App1.Repository
{
    public class PersonelRepository : IPersonelRepository
    {
        static List<Personel> personeller = new List<Personel>();
        public PersonelRepository()
        {
            personeller.Add(new Personel { PersonelId = 1, Adi = "Ahmet", Soyadi = "Ak" });
            personeller.Add(new Personel { PersonelId = 2, Adi = "Mehmet", Soyadi = "Mavi" });
            personeller.Add(new Personel { PersonelId = 3, Adi = "Kemal", Soyadi = "Yeşil" });

        }

        public  Personel GetPersonel(int Id)
        {
            var per = personeller.FirstOrDefault(p => p.PersonelId == Id);
            return per;
        }

        public List<Personel> GetPersonels()
        {
            return personeller;
        }
    }
}
