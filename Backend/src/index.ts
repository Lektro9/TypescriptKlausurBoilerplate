import 'reflect-metadata';
import { Controller } from "./controller/controller"
import { createConnection } from 'typeorm';


createConnection()
  .then(async (connection) => {
    const verwalter = new Controller(connection);
    verwalter.createRoutes();
  })
  .catch((error) => console.log(error));
