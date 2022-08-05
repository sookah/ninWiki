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

In the root folder run `docker compose up api -d`

Please make sure you can connect to the docker engine or you can see the error below.

``` bash
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
```

This will setup the database and run the api server.

## Seeding Mock data

There are issues in the compose in different chip archtechures (macos M1 for example). So we have to do following to seed the data instead:

### In the docker container cli 

typically this command has to be run in the docker container.

``` bash
# check your container image id with
docker ps

# CONTAINER ID   IMAGE      COMMAND                  CREATED      STATUS          PORTS                    NAMES
# 07a1244036d3   blog_api   "docker-entrypoint.s…"   4 days ago   Up 43 seconds   0.0.0.0:3000->3000/tcp   api
# 6d5d316a6d17   postgres   "docker-entrypoint.s…"   4 days ago   Up 18 minutes   0.0.0.0:5432->5432/tcp   api_db
```

Grab the api Image container id (07a1244036d3) and execute command below to get into the shell

```
docker exec -it <mycontainer> bash
```

```bash
# in the /api folder run the following prisma commands to seed the data
npx prisma db push

npx prisma db seed
```

visit localhost:3000/villages to see the seeded villages data.



### Work around from project cli

If the docker method is too difficult, we can simply do it from the local copy itself

```
# go to api folder
cd api

# install packages if you have not yet
npm i
```

in the `.env` file here, set the database url to use the localhost (since our postgres is running in the localhost docker container)

`DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${LOCAL_DB_HOST}:5432/${POSTGRES_DB}?schema=public?connect_timeout=300"`

from your cli run

```bash
npx prisma db push

npx prisma db seed
```

Once done change the URL back to 
`DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${CONTAINER_NAME}:5432/${POSTGRES_DB}?schema=public?connect_timeout=300"`