//Author: Lars Kroll
//Datum: 21.01.2021

import { apiController } from "./controller/apiController";

const verwalter = new apiController();
verwalter.useMiddleware();
verwalter.createRoutes();
verwalter.startWebserver();
