<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# NinWiki API

API for the NinWiki application.

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Description

For the backend database set please use NinWiki Docker file. Instructions are below.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Database

You will require Docker to be installed first [here.](https://docs.docker.com/get-docker/)

In the `/api` folder run `docker compose up api -d`

Please make sure you can connect to the docker engine or you can see the error below.

``` bash
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
```

This will setup the database and run the api server.

## Seeding Mock data 

