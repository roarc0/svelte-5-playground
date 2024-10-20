FROM denoland/deno:alpine-2.0.0 as builder

WORKDIR /app
COPY . .

RUN deno run build

FROM denoland/deno:alpine-2.0.0

COPY --from=builder /app/build /app
WORKDIR /app

ENTRYPOINT [ "deno", "run", "--allow-net", "--allow-read", "--allow-env", "--allow-write", "--unstable", "/app" ]
