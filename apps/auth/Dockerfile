# ===== DEVELOPMENT BUILD =====
FROM node:20-alpine AS development

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && \
    pnpm install --frozen-lockfile

COPY . .

CMD ["pnpm", "run", "start:dev:auth"]

# ===== PRODUCTION =====
FROM node:20-alpine AS production

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && \
    pnpm install --frozen-lockfile --prod

COPY . . 

RUN pnpm run build

# Run your NestJS microservice
CMD ["pnpm", "run", "start:prod"]
