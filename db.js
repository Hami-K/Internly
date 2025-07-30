// This script connects to a MySQL database
const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected to Interly database!");

    // Use the database
    db.query("USE INTERNLY", function (err, result) {
        if (err) throw err;
        console.log("Using database INTERNLY");
    });
});

module.exports = db;

