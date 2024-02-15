describe('Acervo de Livros', () => {
  const primeiroLivro = {
    nome: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    dataPublicacao: '1954-07-29'
  };
  const livroEditado = {
    nome: 'O Hobbit',
    autor: 'J.R.R. Tolkien',
    dataPublicacao: '1937-09-21'
  };

  const livros = [
    { nome: '1984', autor: 'George Orwell', dataPublicacao: '1949-06-08' },
    { nome: 'Hábitos atômicos', autor: 'James Clear', dataPublicacao: '2018-10-16' },
    { nome: 'O homem mais rico da Babilônia', autor: ' George S Clason', dataPublicacao: '1926-03-27' }
  ];

  const livroDelete = {
    nome: 'Duna', 
    autor: 'Frank Herbert', 
    dataPublicacao: '1965-08-01' 
  };


  Cypress.on('uncaught:exception', (err, runnable) => {
    // Para não causar erro por causa do DOM
    return false;
  });

  before(() => {
    cy.visit('http://127.0.0.1:5500/manutencao.html'); // Verifique se o link está correto
  });

  it('Adiciona um novo livro', () => {
    cy.get('#adicionarNomeLivro').type(primeiroLivro.nome);
    cy.get('#adicionarNomeAutor').type(primeiroLivro.autor);
    cy.get('#adicionarDataPublicacao').type(primeiroLivro.dataPublicacao);
    cy.get('#form-adicionar').submit();
    cy.wait(1000);
  });

  it('Verifica se o livro adicionado aparece na página de visualização', () => {
    cy.visit('http://127.0.0.1:5500/index.html'); // Verifique se o link está correto
    cy.contains(primeiroLivro.nome).should('exist');
  });

  it('Obtém o ID do livro adicionado e edita o livro', () => {
    cy.visit('http://127.0.0.1:5500/index.html'); // Verifique se o link está correto

    cy.contains(primeiroLivro.nome).parents('.livro').find('p').first().invoke('text').then((textoId) => {
      const id = textoId.split('ID: ')[1]; // Extrai o ID do texto

      cy.visit('http://127.0.0.1:5500/manutencao.html'); // Verifique se o link está correto
      cy.get('#editarId').type(id);
      cy.get('#editarNomeLivro').clear().type(livroEditado.nome);
      cy.get('#editarNomeAutor').clear().type(livroEditado.autor);
      cy.get('#editarDataPublicacao').clear().type(livroEditado.dataPublicacao);
      cy.get('#form-editar').submit();

    });
  });

  it('Verifica se o livro foi atualizado', () => {
    cy.visit('http://127.0.0.1:5500/index.html'); // Verifique se o link está correto
    cy.wait(1000); 

    cy.contains('O Hobbit').should('exist');
    cy.contains('O Hobbit').parent().contains('J.R.R. Tolkien').should('exist');
    cy.contains('O Hobbit').parent().contains('1937').should('exist');
  });

  livros.forEach((livro, index) => {
    it(`Adiciona livro ${index + 1}: ${livro.nome}`, () => {
      cy.visit('http://127.0.0.1:5500/manutencao.html'); // Verifique se o link está correto
      cy.get('#adicionarNomeLivro').clear().type(livro.nome);
      cy.get('#adicionarNomeAutor').clear().type(livro.autor);
      cy.get('#adicionarDataPublicacao').clear().type(livro.dataPublicacao);
      cy.get('#form-adicionar').submit();
      cy.wait(1000);
    });
  });


  it('Adiciona o livro para ser deletado', () => {
    cy.visit('http://127.0.0.1:5500/manutencao.html'); // Verifique se o link está correto
    cy.get('#adicionarNomeLivro').type(livroDelete.nome);
    cy.get('#adicionarNomeAutor').type(livroDelete.autor);
    cy.get('#adicionarDataPublicacao').type(livroDelete.dataPublicacao);
    cy.get('#form-adicionar').submit();
    cy.wait(1000);
  });

  it('Verifica se o livro que vai ser deletado foi adicionado', () => {
    cy.visit('http://127.0.0.1:5500/index.html'); // Verifique se o link está correto
    cy.contains('Duna').should('exist');
    cy.contains('Duna').parent().contains('Frank Herbert').should('exist');
    cy.contains('Duna').parent().contains('1965').should('exist');
    cy.wait(1000);
  });

  it('Obtém o ID do livro e depois Delete', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    cy.contains(livroDelete.nome).parents('.livro').find('p').first().invoke('text').then((textoId) => {
      const id = textoId.split('ID: ')[1]; // Extrai o ID do texto

      cy.visit('http://127.0.0.1:5500/manutencao.html'); // Verifique se o link está correto

      cy.get('#deletarId').type(id);
      cy.get('#form-deletar').submit();
      cy.wait(1000);
    });
  });

  it('Verifica se o Livro foi mesmo excluído', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.contains('Duna').should('not.exist');
  });

});
