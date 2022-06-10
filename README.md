
### Invocation

Para utilizar o projeto, peço que utilizem o endpoint https://4yg85wp1v7.execute-api.us-east-1.amazonaws.com/ para fazer as chamadas API.

Criar usuario:

POST em /user com o body:
{
  name: "any"
  email: "any"
}
Retorna sucesso caso criado.

Ler usuario:

GET em /user/any@email.com
Retorna os dados do usuario.

Incrementar views:

GET em /count/increment
Adiciona uma view e retorna o valor.

Ver views:

Get em /count.
Retorna o valor de views sem alterar o valor.
