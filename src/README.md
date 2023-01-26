# src

Dentro da pasta "src" vocÊ vai encontra todos os arquivos criado no projeto.

O arquvio [server.js](/src/server.js) é o arquivo principal da aplicação, ele será o primeiro arquivo a ser executado.

Na variável 'express' estou importando o express para o projeto, ou seja, to pegando tudo que está na pasta "express" dentro de "nodes_modules" e estou atribuindo para a variável "express".

na variável 'app' estou inicializando o express, por isso atribui a variável "express" a nova variável "app".

depois que importei o banco de dados sqlite
eu so executo o migrationsRun()

migrationsRun() porque agora eu estou rodando as migrations, ela que esta criando minha tabela via JavaScript