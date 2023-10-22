## About

Lear to build this app at [codewithbeto.dev](https://codewithbeto.dev)

Design provided by [Eco Studios](https://www.ecostudios.dev)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Steps to use Dockerfile for the application

```shell
docker build -t image-name:tag .
```

```shell
docker run -itd -p host_port:container_port --env-file .env image-name:tag
```

## Steps to use docker compose

```shell
docker-compose up -d
```
