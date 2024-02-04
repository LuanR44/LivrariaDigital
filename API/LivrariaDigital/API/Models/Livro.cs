using System.Runtime.InteropServices;
using System.Text.Json.Serialization;

namespace API.Models
{
    public class Livro
    {
        [JsonIgnore]
        public int Id { get; set; }
        public required string Titulo { get; set; }
        public required string Autor { get; set; }
        public int AnoPublicacao { get; set; }
    }
}
