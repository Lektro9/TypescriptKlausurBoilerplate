import { apiController } from "./controller/apiController";

const verwalter = new apiController();
verwalter.useMiddleware();
verwalter.createRoutes();
verwalter.startWebserver();
