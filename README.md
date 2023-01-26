<h1 align="center">API - RocketNotes</h1>

<p>Essa é uma API que desenvolvi com node.js, estudando back-end, no curso Explore da Rocketseat</p>

<p>Abaixo vou detalha como organizei meu projeto, e dentro de cada pasta, você encontrará um README que vai explicar os arquivos que contem dentro da pasta</p>

- [src](/src/README.md)

- [controllers](./src/controllers/README.md)

    ---> [NotesController.js](./src/controllers/NotesController.js)

    ---> [TagsController.js](./src/controllers/TagsController.js)

    ---> [UsersController.js](./src/controllers/UsersController.js)

- [database](./src/database/README.md)

    - [knex](./src/database/README.md)
      - [migrations](./src/database/README.md)

        --> [20230125172404_createNotes.js](./src/database/knex/migrations/20230125172404_createNotes.js)
        
        --> [20230125191734_createTags.js](./src/database/knex/migrations/20230125191734_createTags.js)

        --> [20230125192126_createLinks.js](./src/database/knex/migrations/20230125192126_createLinks.js)

      --> [index.js](./src/database/knex/index.js)

    - [sqlite](./src/database/README.md)
      - [migrations](./src/database/README.md)

        --> [createUsers.js](./src/database/sqlite/migrations/createUsers.js)

        --> [index.js](./src/database/sqlite/migrations/index.js)
    
    --> [database.db](./src/database/database.db)

- [routes]()

  --> [index.js](./src/routes/index.js)

  --> [notes.routes.js](./src/routes/notes.routes.js)

  --> [tags.routes.js](./src/routes/tags.routes.js)

  --> [users.routes.js](./src/routes/users.routes.js)

- [utils]()

  --> [AppError.js](./src/utils/AppError.js)

--> [server.js](./src/server.js)