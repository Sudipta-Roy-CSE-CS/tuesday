// db.js
const mysql = require("mysql2");

// Database connection details
const db = mysql.createConnection({
  host: "database-2.c30eqmayk91z.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "abc12345",
  port: "3306",
  database: "sudipta",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});

module.exports = db;
