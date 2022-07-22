import { InfoController } from "./controllers/InfoController.mjs";

export default function routes(app) {
  app.get("/", InfoController);
}
