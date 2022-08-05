# Inspired from https://www.tomray.dev/nestjs-docker-compose-postgres
###################
# BUILD FOR LOCAL DEVELOPMENT
###################

# FROM node:18-alpine As development
# For macM1 there are issues so using lts
FROM node:18 As development

# Create app directory
WORKDIR /usr/src/api

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY --chown=node:node package*.json ./

COPY --chown=node:node prisma ./prisma/

COPY --chown=node:node .env ./

COPY --chown=node:node tsconfig.json ./

# Install app dependencies using the `npm ci` command instead of `npm install`
RUN npm run
RUN npm ci && npm cache clean --force

# Run prisma commands
# All prisma commands here have run into a wall for the M1 chip and could very well be for other chips.
# thus rendering the migration and generating the schema useless as we cannot proceed.
# https://github.com/prisma/prisma/issues?q=Unknown+binaryTarget+linux-arm64-openssl-undefined+
RUN npx prisma generate

# RUN npx prisma db push
# RUN npx prisma migrate dev

# Bundle app source
COPY --chown=node:node . .

# Use the node user from the image (instead of the root user)
USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:18-alpine As build

WORKDIR /usr/src/api

COPY --chown=node:node package*.json ./

# In order to run `npm run build` we need access to the Nest CLI.
# The Nest CLI is a dev dependency,
# In the previous development stage we ran `npm ci` which installed all dependencies.
# So we can copy over the node_modules directory from the development image into this build image.
COPY --chown=node:node --from=development /usr/src/api/node_modules ./node_modules

COPY --chown=node:node . .

# Run the build command which creates the production bundle
RUN npm run build

# Set NODE_ENV environment variable
ENV NODE_ENV production

# Running `npm ci` removes the existing node_modules directory.
# Passing in --only=production ensures that only the production dependencies are installed.
# This ensures that the node_modules directory is as optimized as possible.
RUN npm ci --only=production && npm cache clean --force

USER node

###################
# PRODUCTION
###################

FROM node:18-alpine As production

# Copy the bundled code from the build stage to the production image
COPY --chown=node:node --from=build /usr/src/api/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/api/dist ./dist

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
