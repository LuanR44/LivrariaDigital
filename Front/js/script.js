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
    
                const dataPublicacao = document.createElement('p');
                dataPublicacao.textContent = `Ano de Publicação: ${livro.dataPublicacao}`;
    
                livroElement.appendChild(id);
                livroElement.appendChild(titulo);
                livroElement.appendChild(autor);
                livroElement.appendChild(dataPublicacao);
    
                listaLivros.appendChild(livroElement);
            });
        }).catch(err => {
            console.error('Erro ao carregar livros:', err);
            document.getElementById('lista-livros').innerHTML = '<p>Erro ao carregar os livros.</p>';
        });
    }
    

    // Problema com o input type Data deixando colocar mais de 4 digitos no ano
    const inputAdicionarDataPublicacao = document.getElementById('adicionarDataPublicacao');
    inputAdicionarDataPublicacao.addEventListener('input', limitYearInput);

    const inputEditarDataPublicacao = document.getElementById('editarDataPublicacao');
    inputEditarDataPublicacao.addEventListener('input', limitYearInput);

    function limitYearInput(e) {
        let value = e.target.value;
        let parts = value.split('-');
        if (parts[0].length > 4) {
            parts[0] = parts[0].substring(0, 4);
            value = parts.join("-");
            e.target.value = value;
        }
    }


    formAdicionar.addEventListener('submit', async function(e) {
        e.preventDefault();
        const data = {
            titulo: document.getElementById('adicionarNomeLivro').value,
            autor: document.getElementById('adicionarNomeAutor').value,
            dataPublicacao: document.getElementById('adicionarDataPublicacao').value.split('-')[0]
        };
        
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
        const data = {
            titulo: document.getElementById('editarNomeLivro').value,
            autor: document.getElementById('editarNomeAutor').value,
            dataPublicacao: parseInt(document.getElementById('editarDataPublicacao').value, 10)
        };
        
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
