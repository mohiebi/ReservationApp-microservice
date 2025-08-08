FROM node:alpine As development

WORKDIR /d/Programming/Projects/sleeper
COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install -g pnpm

RUN pnpm install

COPY . .

RUN pnpm run build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /d/Programming/Projects/sleeper

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install -g pnpm

RUN pnpm install --prod

COPY --from=development /D://nestjs/microservice-project/dist ./dist

CMD [ "node", "dist/apps/reservations/main" ]