import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/ping", () => ({ message: "pong" }))
  .get("/morecomplicatedping", () => {
    const hello = "hello";
    return {
      message: `${hello} pong`,
    };
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
