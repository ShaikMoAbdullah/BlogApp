import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "blog-smabdullahblr-a807.h.aivencloud.com",
  user: "avnadmin",
  password: "AVNS_PTVC-si0k5sepAmbZU3",
  database: "defaultdb",
  port: 11821,
});

// Check if the connection is successful
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});
