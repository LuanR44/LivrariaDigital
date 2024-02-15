<div align="center">
   <a href="https://github.com/LuanR44">
      <img alt="Made by LuanR44" src="https://img.shields.io/badge/made%20by-LuanR44-yellow">
   </a>
   <a href="https://github.com/LuanR44/LivrariaDigital/commits/main">
      <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/LuanR44/LivrariaDigital">
   </a>
</div>
</br>
<div align="center">

[**Sobre**](#-sobre) **|**
[**Ferramentas Utilizadas**](#-ferramentas-utilizadas) **|**
[**Documentação API**](#-documentação-api) **|**
[**Instalação**](#%EF%B8%8F-instala%C3%A7%C3%A3o) **|**
[**Observações**](#-observações) **|**
[**Testes**](#-testes) **|**
[**Desenvolvedor**](#-desenvolvedor)

</div>

## 📝 Sobre:
Este projeto foi desenvolvido como parte do processo seletivo para uma vaga de estágio, com o objetivo de demonstrar habilidades em programação C# e desenvolvimento de interfaces gráficas. A aplicação consiste em uma API ASP.NET para gerenciamento de uma livraria, permitindo operações de CRUD (Create, Read, Update, Delete). Cada livro é cadastrado com informações sobre o ID do livro, nome do livro, nome do autor e data de lançamento.

A interface gráfica, construída com tecnologias web como HTML, CSS e JavaScript, oferece uma experiência amigável, responsiva e intuitiva para a manipulação dos dados. Com duas telas principais, uma dedicada à manutenção dos registros e outra para a exibição, a aplicação busca atender aos critérios de avaliação focando no correto funcionamento das operações de CRUD, além de uma experiência de usuário fluída e sem complicações.

## 💾 Ferramentas Utilizadas:
<table>
  <tbody>
    <tr>
      <td style="font-weight: bold">Visual Studio 2022</td>
      <td>
        <a href="https://visualstudio.microsoft.com/pt-br/downloads/" target="_blank">Download</a>
      </td>
    </tr>
    <tr>
      <td style="font-weight: bold">Visual Studio Code</td>
      <td>
        <a href="https://code.visualstudio.com/" target="_blank">Download</a>
      </td>
    </tr>
    <tr>
      <td style="font-weight: bold">Extensão Live Server</td>
      <td>
        <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank">Download</a>
      </td>
    </tr>
    <tr>
      <td style="font-weight: bold">Postman</td>
      <td>
        <a href="https://www.postman.com/" target="_blank">Download</a>
      </td>
    </tr>
     <tr>
      <td style="font-weight: bold">Cypress</td>
      <td>
        <a href="https://www.cypress.io/" target="_blank">Download</a>
      </td>
    </tr>
  </tbody>
</table>


## 📖 Documentação API

1. Acesse o arquivo <a href="https://github.com/LuanR44/LivrariaDigital/blob/main/API/Doc-API.md" target="_blank">Doc-API</a>


## ⚙️ Instalação:

### 🚧 Configuração da API

1. **Clone o repositório**
Primeiro, clone o repositório do projeto para sua máquina local usando o Git. Abra o terminal e digite o seguinte comando:

```bash
git clone https://github.com/LuanR44/LivrariaDigital.git
```

2. **Abra o projeto no Visual Studio 2022**

Navegue até a pasta do projeto que você acabou de clonar e abra o arquivo de solução (`.sln`) usando o Visual Studio 2022.

3. **Restaurar pacotes NuGet**

Antes de compilar o projeto, é importante baixar e instalar qualquer dependência do projeto que esteja faltando. No terminal, execute:

```bash
dotnet restore
```

4. **Compilar o projeto**

Com todas as dependências restauradas, o próximo passo é compilar o projeto para verificar se não há erros. No terminal, execute:

```bash
dotnet build
```

5. **Executar a API**

Após a compilação bem-sucedida, você está pronto para executar a API. No Visual Studio, basta pressionar F5 ou clicar no botão "Iniciar" para rodar a aplicação. Isso iniciará o servidor e hospedará sua API localmente. O Visual Studio deverá abrir automaticamente um navegador com o endereço da API ou você pode acessar a URL indicada no terminal para interagir com sua API.


### 🖼️ Configuração e Execução do Front-end


1. **Abra a pasta front no VSCode**

   No VSCode, selecione `"File"` > `"Open Folder..."` e navegue até a pasta `front` desse projeto.

2. **Abra o arquivo HTML principal**

   No explorador de arquivos do VSCode, navegue até o arquivo HTML `index.html`.

3. **Inicie o Live Server com a extensão no Vscode**

   Clique no botão `"Go Live"` na barra de status na parte inferior do VSCode para iniciar o servidor. Caso você não tenha a extensão, visite a sessão `💾 Ferramentas Utilizadas` acima.

4. **Visualize no navegador**

   O Live Server irá automaticamente abrir o arquivo HTML no seu navegador padrão.


## 🆘 Observações:

1. Caso a API comece a dar erros no front-end, verifique se no arquivo `api.js` que está na pasta `front/js`, contém o caminho (url) correto para a API


## 🤖 Testes:

1. No terminal digite, `npm install` para instalar as dependências;

2. Verifique se o cypress está instalado. Se não estiver, digite no terminal `npm install cypress --save-dev`;

3. Após ter instalado o Cypress, digite `npx cypress open`;

4. Selecione a opção `E2E Testing`, e abra no navegador de sua preferência;

5. Selecione o arquivo `test.cy.js` na sessão `Specs` no navegador escolhido, e pronto, o Cypress irá executar o teste automatizado!

## 💻 Desenvolvedor:

- [@LuanR44](https://github.com/LuanR44)
