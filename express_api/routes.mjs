import { InfoController } from "./controllers/InfoController.mjs";

export function routes(app) {
  app.get("/", InfoController);
}

export function Login(app) {
  app.post("/login", Login);
}
