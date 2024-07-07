import mysql from "mysql";

export const db = mysql.createConnection({
  host: "192.168.1.9",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "blog",
});

console.log(process.env);
