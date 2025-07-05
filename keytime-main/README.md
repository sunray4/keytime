# keytime-main

This is the command line interface of the keytime app

## commands

To run the cli tool:

```bash
npx prisma db push
npm run build
chmod +x dist/index.js
npm i -g .
```

Then you can run `keytime --help` to check out what commands are available!!

To clear the database, just run:

```bash
node clear-db.js
```

to check if the server is still running:
lsof -ti:8081

to kill the server:
kill -TERM <PID>

to setup the prisma db:
npx prisma generate
npx prisma migrate dev

\*\* add handling of client or server crashing after initial setup - maybe migrate into using socket io?
