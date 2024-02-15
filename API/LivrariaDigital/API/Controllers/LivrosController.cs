using API.Interfaces;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")] // Rota da API 
    [ApiController]
    public class LivrosController : ControllerBase
    {
        private readonly ILivroRepository _livroRepository;
        private readonly ILogger<LivrosController> _logger;

        public LivrosController(ILivroRepository livroRepository, ILogger<LivrosController> logger)
        {
            _livroRepository = livroRepository;
            _logger = logger;
        }

        [HttpGet] // GET: api/Livros => Retorna todos os livros
        public ActionResult<IEnumerable<Livro>> Get()
        {
            var livros = _livroRepository.GetAll();
            if (livros == null || !livros.Any())
            {
                _logger.LogInformation("Nenhum livro encontrado.");
                return NotFound("Nenhum livro encontrado.");
            }
            return Ok(livros);
        }

        [HttpGet("{id}")] // GET: api/Livros/{id} => Retorna dados de um livro pelo ID
        public ActionResult<Livro> Get(int id)
        {
            var livro = _livroRepository.GetById(id);
            if (livro == null)
            {
                _logger.LogInformation($"Livro com ID {id} não encontrado.");
                return NotFound($"Livro com ID {id} não encontrado.");
            }
            return Ok(livro);
        }


        [HttpPost] // POST: api/Livros => Adiciona um novo livro
        public ActionResult<Livro> Post([FromBody] Livro livro)
        {
            if (string.IsNullOrEmpty(livro.Titulo) || string.IsNullOrEmpty(livro.Autor) || livro.DataPublicacao < 1)
            {
                _logger.LogWarning("Tentativa de adicionar livro com dados inválidos.");
                return BadRequest("Dados do livro são inválidos.");
            }

            _livroRepository.Add(livro);
            _logger.LogInformation($"Livro adicionado com sucesso: {livro.Titulo}, {livro.Id}");
            return CreatedAtAction(nameof(Get), new { id = livro.Id }, livro);
        }


        [HttpPut("{id}")] // PUT: api/Livros/{id} => Atualiza um livro existente pelo ID
        public IActionResult Put(int id, [FromBody] Livro updatedLivro)
        {
            if (updatedLivro == null)
            {
                return BadRequest(new { message = "Dados do livro inválidos." });
            }

            var livro = _livroRepository.GetById(id);
            if (livro == null)
            {
                _logger.LogInformation($"Livro com ID {id} não encontrado.");
                return NotFound(new { message = $"Livro com ID {id} não encontrado." });
            }

            livro.Titulo = updatedLivro.Titulo;
            livro.Autor = updatedLivro.Autor;
            livro.DataPublicacao = updatedLivro.DataPublicacao;

            _livroRepository.Update(livro);

            return Ok(new { message = $"Livro com o ID '{id}' foi atualizado." });
        }


        [HttpDelete("{id}")] // DELETE: api/Livros/{id} => Exclui um livro pelo ID
        public IActionResult Delete(int id)
        {
            var existingLivro = _livroRepository.GetById(id);
            if (existingLivro == null)
            {
                _logger.LogInformation($"Livro com ID {id} não encontrado.");
                return NotFound(new { message = $"Livro com ID {id} não encontrado." });
            }

            _livroRepository.Delete(id);

            return Ok(new { message = $"Livro com o título '{existingLivro.Titulo}' e ID '{id}' foi excluído com sucesso." });
        }

    }
}
