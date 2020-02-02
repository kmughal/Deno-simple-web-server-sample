
import { Application } from "https://deno.land/x/oak/mod.ts";
import {routers}   from "./routes/index.ts";

const app = new Application();
app.use(routers.routes());
app.use(routers.allowedMethods());
await app.listen("127.0.0.1:8000");