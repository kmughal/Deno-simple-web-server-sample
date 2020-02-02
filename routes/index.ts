import { Router } from "https://deno.land/x/oak/mod.ts";
import { readJson } from "https://deno.land/std/fs/mod.ts";

const routers = new Router();
const helloWorldHandler = ctx => {
  ctx.response.body = "hello world!";
};
routers.get("/", helloWorldHandler);

const currentTimeHandler = ctx => {
  ctx.response.body = new Date().toString();
};
routers.get("/current-time", currentTimeHandler);

routers.get("/line-status", lineStatusHandler);
async function lineStatusHandler(ctx) {
  const data = await readJson("./line-status.json");
  ctx.response.body = JSON.stringify(data, null, 2);
}

export { routers };
