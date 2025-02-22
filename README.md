Descriação da nova funcionalidade:
 - Criar um novo endpoint utilizando Express.js e adicionar Ifs para validação, onde nos ajuda a gerenciar a lista de livros

Endpoints:
 - GET /: Retorna todos os livros cadastrados.
 - GET /status: Retorna o status da API. //Nova funcionalidade
 - POST /novolivro: Adiciona um novo livro a lista de livros.
 - PUT /novolivro/:index: Atualiza os dados de um livro existente pelo índice.
 - DELETE /:index: Remove um livro pelo índice.

 Dificuldades encontradas:
  - Quando criamos um novo livro, vimos a necessidade de garantir que todos os campos estivessem preenchidos,
  - e caso não existisse na livraria, retornasse a mensagem de erro. Isso foi feito utilizando um If, nos códiso da rota POST/novolivro, PUT/novolivro/:index e DELETE/:index
