import mysql from "mysql";

export const db_clientes = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "1234",
    database: "db_clientes"
});