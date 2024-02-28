Here, the gateway uses error handling, if the review service does not work, the application itself will continue to work, but we will not be able to see the reviews. This is an example of a microservice architecture, the user application does not know anything about the review application.

```bash
nx run users:serve:development
```

```bash
nx run gateway:serve:development
```

And if you don't want to or, for example, the server is down, don't start it

```bash
nx run reviews:serve:development
```

```bash
xdg-open http://localhost:3000/graphql
```

Since we have microservices, we need to use different databases and therefore different clients for different services

Generate a prisma client for users service

```bash
npx prisma generate --schema=apps/users/src/prisma/schema.prisma
```

Save the schema to the database

```bash
npx prisma db push --schema=apps/users/src/prisma/schema.prisma
```

Generate a prisma client for reviews service

```bash
npx prisma generate --schema=apps/reviews/src/prisma/schema.prisma
```

Save the schema to the database

```bash
npx prisma db push --schema=apps/reviews/src/prisma/schema.prisma
```
