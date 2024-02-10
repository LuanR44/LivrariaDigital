document.addEventListener('DOMContentLoaded', () => {
    const formAdicionar = document.getElementById('form-adicionar');
    const formEditar = document.getElementById('form-editar');
    const formDeletar = document.getElementById('form-deletar');
    carregarLivros();
    
    function carregarLivros() {
        getLivros().then(livros => {
            const listaLivros = document.getElementById('lista-livros');
            listaLivros.innerHTML = '';
    
            // Verifica se a lista de livros está vazia
            if (!livros || livros.length === 0) {
                listaLivros.innerHTML = '<p>Nenhum livro encontrado.</p>';
                return;
            }
    
            // Se houver livros, Mostrar a página
            livros.forEach(livro => {
                const livroElement = document.createElement('div');
                livroElement.classList.add('livro');
    
                const id = document.createElement('p');
                id.textContent = `ID: ${livro.id}`;
    
                const titulo = document.createElement('h3');
                titulo.textContent = livro.titulo;
    
                const autor = document.createElement('p');
                autor.textContent = `Autor: ${livro.autor}`;
    
                const anoPublicacao = document.createElement('p');
                anoPublicacao.textContent = `Ano de Publicação: ${livro.anoPublicacao}`;
    
                livroElement.appendChild(id);
                livroElement.appendChild(titulo);
                livroElement.appendChild(autor);
                livroElement.appendChild(anoPublicacao);
    
                listaLivros.appendChild(livroElement);
            });
        }).catch(err => {
            console.error('Erro ao carregar livros:', err);
            document.getElementById('lista-livros').innerHTML = '<p>Erro ao carregar os livros.</p>';
        });
    }
    
    


    formAdicionar.addEventListener('submit', async function(e) {
        e.preventDefault();
        const anoPublicacao = document.getElementById('adicionarDataPublicacao').value.split('-')[0]; // Para nao poder enviar uma data com mais de 4 digitos
        const data = {
            titulo: document.getElementById('adicionarNomeLivro').value,
            autor: document.getElementById('adicionarNomeAutor').value,
            anoPublicacao: document.getElementById('adicionarDataPublicacao').value.split('-')[0]
        };

        if(anoPublicacao.length !== 4){ 
            alert('Por favor, insira um ano de publicação válido.');
            return;
        }
        
        try {
            await criarLivro(data);
            alert('Livro adicionado com sucesso!');
            formAdicionar.reset();
        } catch (err) {
            console.error('Erro ao adicionar livro:', err);
            alert(err.message);
        }
    });
    

    formEditar.addEventListener('submit', async function(e) {
        e.preventDefault();
        const id = document.getElementById('editarId').value;
        const anoPublicacao = document.getElementById('editarDataPublicacao').value.split('-')[0];
        const data = {
            titulo: document.getElementById('editarNomeLivro').value,
            autor: document.getElementById('editarNomeAutor').value,
            anoPublicacao: parseInt(document.getElementById('editarDataPublicacao').value, 10)
        };

        if(anoPublicacao.length !== 4){
            alert('Por favor, insira um ano de publicação válido.');
            return;
        }
    
        try {
            await atualizarLivro(id, data);
            alert('Livro atualizado com sucesso!');
            formEditar.reset();
        } catch (err) {
            console.error('Erro ao atualizar livro:', err);
            alert(err.message);
        }
    });
    

    formDeletar.addEventListener('submit', async function(e) {
        e.preventDefault();
        const id = document.getElementById('deletarId').value;
    
        try {
            await deletarLivro(id);
            alert('Livro deletado com sucesso!');
            formDeletar.reset();
        } catch (err) {
            console.error('Erro ao deletar livro:', err);
            alert(err.message);
        }
    });
    
    
});

function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
    } else {
        navbar.classList.add("active");
    }
}