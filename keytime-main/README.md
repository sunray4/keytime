# keytime-main

This is the command line interface of the keytime app

## commands

To run the cli tool, download the keytime-main folder, and in the terminal run the following commands:

```bash
npm install
npx prisma init --datasource-provider sqlite --output ../generated/prisma
npx prisma migrate dev --name init
npx prisma db push
npm run build
chmod +x dist/index.js
npm i -g .
```

Then, run `keytime start` to setup your keytime account and start the server.

Available commands:

`keytime start` - starts the server and sets up user account
`keytime stop` - stops the server
`keytime user` - view user information
`keytime projects` - view projects built

To clear the database, just run:

```bash
node clear-db.js
```

<!-- to check if the server is still running:
lsof -ti:8081

to kill the server:
kill -TERM <PID>

to setup the prisma db:
npx prisma generate
npx prisma migrate dev -->
