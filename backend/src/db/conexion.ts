import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: process.env.CLAVE_DB,
    database: "test",
    synchronize: false,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})