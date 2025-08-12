# ===== DEVELOPMENT BUILD =====
FROM node:20-alpine AS development

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && \
    pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

# ===== PRODUCTION =====
FROM node:20-alpine AS production

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && \
    pnpm install --frozen-lockfile --prod

COPY --from=development /usr/src/app/dist ./dist

# Run your NestJS microservice
CMD ["node", "dist/apps/reservations/main.js"]
