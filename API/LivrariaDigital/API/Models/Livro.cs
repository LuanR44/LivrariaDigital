namespace API.Models
{
    public class Livro
    {
        public int Id { get; set; } // ID único para cada livro
        public required string Titulo { get; set; } // Título do livro
        public required string Autor { get; set; } // Autor do livro
        public int DataPublicacao { get; set; }  // Ano em que o livro foi publicado
    }
}
