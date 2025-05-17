import dotenv from 'dotenv'

import { DataSource } from "typeorm";
import User from "../models/usersModel";
import Notes from "../models/notesModel";

dotenv.config()

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: process.env.PASSWORD_DB,
    database: "onlystrings",
    synchronize: false,
    logging: true,
    entities: [User, Notes],
    subscribers: [],
    migrations: [],
})