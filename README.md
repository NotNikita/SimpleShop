# Server with Express + Typescript stack

Installation:
After failures with Nodemon for local setup - decided to go with

To start a server run

Client:

```
cd ./client
yarn
yarn build
```

Server:

```
cd ./server
yarn
yarn build
yarn start
```

Prisma MySQL database:
`Set the DATABASE_URL in the .env file to point to your existing database`
`npx prisma db pull` - to turn your database schema into a Prisma schema
`npx prisma generate` - to generate the Prisma Client. You can then start querying your database.
`npx prisma migrate <environment> --name <migration_name>` - to craete a migration, after local changes to DB. Where 'environment' is dev/prod, 'migration_name' - describes what was changed in a migation
