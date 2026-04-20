FROM node:20-bookworm-slim AS base
WORKDIR /app

FROM base AS deps
WORKDIR /app/interlex
COPY interlex/package.json interlex/package-lock.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app/interlex
ENV NODE_ENV=production
COPY --from=deps /app/interlex/node_modules ./node_modules
COPY interlex ./
RUN npm run build

FROM node:20-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN groupadd --system --gid 1001 nodejs && useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder /app/interlex/public ./public
COPY --from=builder /app/interlex/.next/standalone ./
COPY --from=builder /app/interlex/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
