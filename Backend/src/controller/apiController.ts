import 'reflect-metadata';
import { User } from '../models/User';
import { createConnection, Repository, Connection } from 'typeorm';
import * as express from "express";
import { Request, Response } from "express";
import * as cors from 'cors';

export class apiController {
    app: express.Application
    userRepository: Repository<User>
    connection: Connection

    constructor() {
        this.createDBConnection().then((connection) => {
            this.connection = connection;
            this.userRepository = this.connection.getRepository(User);
        });
        this.app = express();

    }

    /**
     * Erstelle eine Verbindung mit der Datenbank
     */
    public async createDBConnection(): Promise<Connection> {
        const connection = await createConnection();
        return connection;
    }

    /**
     * useMiddleware
     * Funktionen die vor jeder Route ausgeführt werden soll
     */
    public useMiddleware() {
        //erlaubt Webserver jsons zu empfangen
        this.app.use(express.json());
        //setzt CORS Header 'Access-Control-Allow-Origin' und welche REST-Methoden von wem genutzt werden dürfen
        //hier: alle dürfen alles
        this.app.use(cors());
    }

    /**
     * createRoutes
     * Definiert Routen, Methoden und deren zugehörige Funktionen
     */
    public createRoutes(): void {
        this.app.get("/users", this.showAllUsers.bind(this));
        this.app.post("/user", this.createUser.bind(this));
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
     * Erstellt eine neue Person
     */
    public async createUser(req: Request, res: Response): Promise<void> {
        if (req.is("json") && req.body) {
            const newUser = new User(req.body.firstName, req.body.lastName, req.body.age);
            const user = await this.userRepository.create(newUser);
            await this.userRepository.save(user);
            res.json(user);
        } else {
            res.status(400);
            res.send(
                "wrong format, only json allowed: {'firstName': 'string', 'lastName': 'string', 'age': number}"
            );
        }
    }

    /**
     * startWebserver
     * startet den Webserver
     */
    public startWebserver() {
        this.app.listen(3000, () => {
            console.log(`Server startet unter: http://localhost:3000`);
        });
    }
}