import mysql from "mysql";

export const db = mysql.createConnection({
  host: "blog-smabdullahblr-a807.h.aivencloud.com",
  user: "avnadmin",
  password: process.env.DB_PASSWORD,
  database: "defaultdb",
  port: "11821",
});
