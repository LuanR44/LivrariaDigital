# 📚 Documentação da API da Livraria

## 👀 Visão Geral

Esta API foi desenvolvida para gerenciar uma livraria, permitindo operações de CRUD (Create, Read, Update, Delete) para livros. Cada livro é registrado com seu nome, nome do autor e data de publicação.

## 🆕 Começando

Para começar a usar esta API, você precisará fazer o seguinte:

- Clonar o repositório do projeto.
- Iniciar a API conforme descrito na seção de instalação do README.


## 🛣️ Endpoints

### ➡️ Listar Livros

- **GET** `/api/livros`
  - Retorna uma lista de todos os livros disponíveis na livraria.
    
#### Resposta:

```json
  {
    "id": 1,
    "titulo": "Título do Livro",
    "autor": "Nome do Autor",
    "anoPublicacao": "DD-MM-YYYY"
  },
  {
    "id": 2,
    "titulo": "Outro Livro",
    "autor": "Outro Autor",
    "anoPublicacao": "DD-MM-YYYY"
  }
```

### ➡️ Adicionar Livro

- **POST** `/api/livros`
  - Adiciona um novo livro à livraria.


#### Corpo da Requisição:

```json
  {
    "titulo": "Título do Livro",
    "autor": "Nome do Autor",
    "anoPublicacao": "DD-MM-YYYY"
  }
```

#### Resposta:

```json
{
  "id": 3,
  "titulo": "Título do Livro",
  "autor": "Nome do Autor",
  "anoPublicacao": "DD-MM-YYYY"
}
```

### ➡️ Atualizar Livro

- **PUT** `/api/livros`
  - Atualiza os detalhes de um livro existente.

#### Parâmetros:

`id`: ID do Livro;

`titulo`: Título do Livro;

`autor`: Autor do Livro;

`anoPublicacao`: Data de Publicação do Livro;

#### Corpo da Requisição:
```json
{
  "id": 3,
  "titulo": "Novo Título",
  "autor": "Novo Nome do Autor",
  "anoPublicacao": "DD-MM-YYYY"
}
```

#### Resposta:

```json
{
  "id": 3,
  "nome": "Título do Livro Atualizado",
  "autor": "Autor do Livro Atualizado",
  "anoPublicacao": "DD-MM-YYYY"
}
```

### ➡️ Deletar Livro

- **DELETE** `/api/livros`
  - Remove um livro da livraria.

#### Parâmetros:

`ID`: ID do livro a ser deletado.

#### Resposta:

```json
{
Livro com o título 'Título do Livro' e ID '3' foi excluído com sucesso.
}
```
