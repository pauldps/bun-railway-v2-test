ARG BUN_VERSION=1.1.34

FROM oven/bun:${BUN_VERSION}-debian
WORKDIR /app

COPY . .
RUN bun install --frozen-lockfile

ENV NODE_ENV=production

WORKDIR /app/

# Compile the server executable
RUN bun run build

ENTRYPOINT [ "./server" ]
