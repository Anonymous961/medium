# Medium

This project is a clone of the Medium platform, created to explore the concept of a serverless backend using Cloudflare and Hono. It serves as a learning tool to compare Hono with Express and to understand the structure and functionality of npm packages within a monorepo setup.

## Features

- Simple authenticaion
- Adding article

## NPM package : @anonymous961/medium-common

To install the package run

```
npm i @anonymous961/medium-common
```

## Backend

first create a database pool using DB connection string.
Any SQL DB can be used like neonDB, aiven and etc.

Accelerate the link using prisma accelerate.

Put the url in `wrangler.toml`

```
[vars]
DATABASE_URL=" url accelerated url/ connection pool url"
```

Also add JWT secret

```
JWT_SECRET="yourjwtsecret"
```

To install dependencies

```
npm i    // to install dependencies
```

to run on development server

```
npm run dev
```

to deploy the backend on

```
npm run deploy
```

## Frontend

To install dependencies

```
npm i    // to install dependencies
npm run dev   // to run on development server
```

This project is still incomplete.
