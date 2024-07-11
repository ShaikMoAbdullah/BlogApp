import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "blog-smabdullahblr-a807.h.aivencloud.com",
  user: "avnadmin",
  password: "AVNS_PTVC-si0k5sepAmbZU3",
  database: "defaultdb",
  port: 11821,
});
