import 'reflect-metadata';
import * as express from "express";
import { Request, Response } from "express";
import { createConnection } from 'typeorm';
import { User } from './entity/User';
import { Bootstrap } from './bootstrap';

createConnection()
  .then(async (connection) => {
    await Bootstrap().catch((err) => {
      console.log(err);
    });
    const userRepository = connection.getRepository(User);
    const app = express();
    app.use(express.json());

    // register routes

    app.get("/users", async function (req: Request, res: Response) {
      const users = await userRepository.find();
      res.json(users);
    });

    app.post("/user", async function (req: Request, res: Response) {
      const user = await userRepository.create(new User("test", "super", 5));
      await userRepository.save(user);
      res.json(user);
    });

    //start express server
    app.listen(3000, () => {
      console.log(`Server Started at Port, http://localhost:3000`);
    });
  })
  .catch((error) => console.log(error));
