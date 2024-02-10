using API.Models;

namespace API.Interfaces
{
    public interface ILivroRepository
    {
        IEnumerable<Livro> GetAll(); // Método que mostra todos os livros
        Livro GetById(int id); // Método que busca um livro pelo ID
        void Add(Livro livro); // Método que adiciona um novo livro
        void Update(Livro livro); // Método que atualiza os detalhes de um livro existente
        void Delete(int id); // Método que remove qualquer livro pelo ID
    }
}
