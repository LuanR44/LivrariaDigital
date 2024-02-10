using API.Interfaces;
using API.Models;

namespace API.Repositories
{
    public class LivroRepository : ILivroRepository // Definindo operações CRUD para Livros
    {
        private readonly List<Livro> _livros = new();  // Lista para armazenar livros em memória, sem DB 
        private static int nextId = 1; // Variável estática que gera IDs únicos para cada livro. Os IDs não se repetem, mesmo que sejam apagados

        public IEnumerable<Livro> GetAll() // Retorna todos os livros
        {
            return _livros;
        }

        public Livro GetById(int id) // Busca um livro pelo ID
        {
            return _livros.FirstOrDefault(l => l.Id == id);
        }

        public void Add(Livro livro) // Adiciona um novo livro
        {
            livro.Id = nextId++;
            _livros.Add(livro);
        }

        public void Update(Livro livro) // Atualiza um livro existente
        {
            var index = _livros.FindIndex(l => l.Id == livro.Id);
            if (index != -1)
            {
                _livros[index] = livro;
            }
        }

        public void Delete(int id) // Remove um livro da lista pelo ID
        {
            var livro = _livros.FirstOrDefault(l => l.Id == id);
            if (livro != null)
            {
                _livros.Remove(livro);
            }
        }
    }
}
