<h1 align="center">
  Ghibli.50 API
</h1>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-serviços-utilizados">Serviços Utilizados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-começando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-utilizar">Como utilizar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=ISC&color=49AA26&labelColor=000000">
</p>

<br>

## 💻 Projeto

**Ghibli.50 API** é uma API desenvolvida com o objetivo de cadastrar os filmes do estúdio Ghibli no banco de dados e retornar essa informação de forma paginada para o cliente solicitante.

_PS: A API responsável por retornar as informações dos filmes do studio Ghibli não está mais disponível, por este motivo os dados foram movidos para um arquivo estático dentro do projeto, que é utilizado para popular o banco de dados. Repositório da API do studio Ghibli inativo: [https://github.com/janaipakos/ghibliapi](https://github.com/janaipakos/ghibliapi)_.

<br>

## 🚀 Tecnologias

O projeto foi desenvolvido utilizando estas tecnologias:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/about/)
- [Swagger](https://swagger.io/)

<br>

## 👨‍🔧 Serviços utilizados

- GitHub
- [Swagger](https://swagger.io/)
- [Ghibli API](https://ghibliapi.herokuapp.com/#tag/Films)

<br>

## 🎮 Começando

Se possui interesse em executar o código, comece clonando o repositório utilizando o método HTTP ou SSH Key

- Abra seu git bash
- Digite `git clone`
- Insira o HTTP or SSH key (no windows, shift + insert para colar no terminal do gitBash)
- Você pode encontrar o HTTP ou SSH Key deste porjeto clicando em `Code` no canto direito superior deste repositório
![image](https://user-images.githubusercontent.com/79553681/201434236-939ec527-f22b-4ddb-b7b0-1a61d5d4ff2d.png)

</br>

### Abordagem 1: Docker
- Abordagem mais prática que dispensa instalação das ferramentas, basta possuir o [Docker / Docker Compose](https://www.docker.com/) instalado na máquina. Após clonar o projeto execute os comandos abaixo:
- `docker compose up -d` -> Para gerar a imagem da API e baixar a imagem do PostgreSQL no Docker. A flag `-d` fará com que os containers continuem executando em segundo plano;
-  `docker exec -it ghibli-50-api /bin/bash` -> Para acessar a linha de comando do container `ghibli-50-api`;
-  `npx prisma migrate dev` -> Para criar as tabelas no banco de dados;
-  Acesse [http://localhost:3333/](http://localhost:3333/) para visualizar a documentação;

### Abordagem 2: Executar localmente
- O projeto utiliza como banco de dados em desenvolvimento o <a href="https://www.postgresql.org/">PostgreSQL</a>. É necessário possuir o banco de dados instalado na máquina para que o projeto funcione conforme esperado
- Ao instalar o PostgreSQL, abra o `pgAdmin4` </br>
![image](https://user-images.githubusercontent.com/79553681/201434817-daeba8c9-1e2b-4be3-ba66-3979ff76273c.png)
- Assim que abrir o app `pgAdmin4` será solicitado uma senha. Essa é a senha que foi criada no momento da instalação do postgres. </br>
_PS: A versão que estou utilizando é a 15x, windows, portanto pode haver alguma diferença a depender do SO e da versão do postgresql instalada_ </br>
- Em seguida, clique em `Server`. Será solicitado novamente a senha </br>
- Depois de inserir a senha será exibido o conteúdo do PostgreSQL. Clique com o botão direito sobre `Databases`, em seguida passe o mouse por `Create` e selecione a opção `Database` </br>

![image](https://user-images.githubusercontent.com/79553681/201435366-4b2acf93-db61-436e-993c-8f9016f82919.png) 
</br>
- Digite o nome do banco de dados de sua preferência. Guarde essa informação, ela deverá ser utilizada no arquivo `.env` como variável de ambiente em `DATABASE_URL`
- Depois de clonado e com o PostgreSQL configurado, abra o projeto na sua IDE e crie um arquivo `.env` na raiz do projeto. </br>
- Insira uma chave com o nome de `DATABASE_URL` e adicione o endereço do banco de dados criado no postgres no seguinte formato: </br>

![image](https://user-images.githubusercontent.com/79553681/201436285-92135824-ecd1-423e-af04-99ab6e617c8d.png) </br>

- `postgresql://USER:PASSWORD@HOST:PORT/DATABASE` -> Referência: [Prisma Database Connectors](https://www.prisma.io/docs/concepts/database-connectors/postgresql) </br>

<br>

**Dependências**
- [Express](https://expressjs.com/pt-br/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Prisma](https://www.prisma.io/)
- Swagger-ui-express


**Dependências de desenvolvimento**
- [Typescript](https://www.typescriptlang.org/)
- [tsx](https://www.npmjs.com/package/tsx) 
<br>

## 📌 Como utilizar

### `npm install` Para instalar as dependências do projeto
### `npx prisma migrate dev` Para criar a tabela de Filmes no banco de dados
### `npm run dev` Para executar o app em desenvolvimento

<h6> É possível utilizar o <a href="https://insomnia.rest/download">Insomnia</a> (ou outra ferramenta similar) para testar as rotas da aplicação.</h6>
<br>

## 🕵 Features

As principais features dessa aplicação são:

- Adicionar os filmes do estúdio Ghibli na API (limitado a 50)
- Listar os filmes de forma paginada, de 10 em 10
- A documentação da API está disponível em <a target="_blank" rel="noreferrer noopener" href="https://ghibli-50-api.vercel.app/">https://ghibli-50-api.vercel.app/</a>

<br>

## :memo: Licença

Este projeto está sobre a licença ISC.

<br>

 > No caso de bugs sensíveis como vunerabilidades de segurança, por gentileza entre em contato com
 > <a href = "mailto:deywerson.pereira@gmail.com">deywerson.pereira@gmail.com</a> direto ao invés de utilizar as issues. Valorizamos seu esforço
 > em melhorar a segurança e a privacidade deste projeto!
 <br>
 
---
  

Por favor, siga no github! Obrigado pela visita e mão na massa!

Feito com ♥ por <a href="https://github.com/deywersonp">Deywerson Pereira</a>
