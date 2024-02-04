using System.Collections.Generic;
using API.Models;

namespace API.Interfaces
{
    public interface ILivroRepository
    {
        IEnumerable<Livro> GetAll();
        Livro GetById(int id);
        void Add(Livro livro);
        void Update(Livro livro);
        void Delete(int id);
    }
}
