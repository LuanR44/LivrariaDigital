using System.Collections.Generic;
using System.Linq;
using API.Interfaces;
using API.Models;

namespace API.Repositories
{
    public class LivroRepository : ILivroRepository
    {
        private readonly List<Livro> _livros = new();
        private static int nextId = 1;

        public IEnumerable<Livro> GetAll()
        {
            return _livros;
        }

        public Livro GetById(int id)
        {
            return _livros.FirstOrDefault(l => l.Id == id);
        }

        public void Add(Livro livro)
        {
            livro.Id = nextId++;
            _livros.Add(livro);
        }

        public void Update(Livro livro)
        {
            var index = _livros.FindIndex(l => l.Id == livro.Id);
            if (index != -1)
            {
                _livros[index] = livro;
            }
        }

        public void Delete(int id)
        {
            var livro = _livros.FirstOrDefault(l => l.Id == id);
            if (livro != null)
            {
                _livros.Remove(livro);
            }
        }
    }
}
