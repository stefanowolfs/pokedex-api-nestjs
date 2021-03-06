<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="200" style="margin: 0px 10px;" alt="Nest Logo" />
  </a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# ProductAPI

## Description

API made with NestJS using an **hexagonal** approach on the architecture to fetch pokemon data for a React-Native project serving as a BFF for it. Mobile project link [pokedex-reactnative](https://github.com/stefanowolfs/pokedex-reactnative).

## Entity Relation mapping

Since I'm creating a new BFF based on a pre-existing API, I thought it was also interesting to have an ER mapping for our SQLite database. Here you can access [my ER diagram](https://drive.google.com/file/d/1Ad9VgQTTkNlVqbgm1KfZBbTfkYIaBtBQ/view?usp=sharing) stored in google drive.

## Setup for development

- You need to configure your `.env` or **host environment** variables in order to connect to the database.

- Install the project dependencies.

```bash
# dependencies installation
$ yarn
```

- Then run the docker container which will serve the app.

```bash
# run docker container on port default 3000 in development mode
$ docker-compose up
```

## Test

You can run the following commands to test the application.

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

> :bulb: Important thing to notice is that a new **html** file in `/coverage/lcov-report/index.html` containing more about the results.

## Project status

- [x] Add containerization with docker.
- [x] Add enviroment variables.
- [x] Organize project structure using a more hexagonal approach.
- [x] Add downloadable pokemons endpoint.
- [x] Add unity tests.
- [ ] Add pokemon details endpoint.
- [ ] Add swagger for API Documentation.
- [ ] Configure custom paths for file imports.

## About

- Author - [Stefano Soro](https://www.linkedin.com/in/stefanosorodeveloper/)
