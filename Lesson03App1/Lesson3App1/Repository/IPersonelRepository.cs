using Lesson3App1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lesson3App1.Repository
{
    public interface IPersonelRepository
    {
        Personel GetPersonel(int Id);
        List<Personel> GetPersonels();
    }
}
