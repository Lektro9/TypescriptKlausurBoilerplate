
import { User } from '../models/User';
import * as express from "express";
import { Request, Response } from "express";
import { Repository, Connection } from 'typeorm';

export class Controller {
    app: express.Application
    connection: Connection
    userRepository: Repository<User>
    constructor(connection: Connection) {
        this.connection = connection
        this.app = express();
        this.userRepository = connection.getRepository(User);
    }

    /**
     * createRoutes
     */
    public createRoutes(): void {

        this.app.use(express.json());

        this.app.get("/users", this.showAllUsers.bind(this));
        this.app.post("/user", this.createUser.bind(this));

        //start express server
        this.app.listen(3000, () => {
            console.log(`Server Started at Port, http://localhost:3000`);
        });
    }

    /**
     * showAllUsers
     * zeige alle Nutzer aus der Datenbank an
     */
    public async showAllUsers(req: Request, res: Response): Promise<void> {
        const users = await this.userRepository.find();
        res.json(users);
    }

    /**
     * createUser
     */
    public async createUser(req: Request, res: Response): Promise<void> {
        const newUser = new User("test", "super", 5);
        const user = await this.userRepository.create(newUser);
        await this.userRepository.save(user);
        res.json(user);
    }
}
