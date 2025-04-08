const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",  // Put your password here if you have one
  database: "disaster_management"
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to the MySQL database.");
  }
});

// Routes
app.get("/emergencies", (req, res) => {
  db.query("SELECT * FROM Emergencies", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.get("/resources", (req, res) => {
  db.query("SELECT * FROM Resources", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.get("/shelters", (req, res) => {
  db.query("SELECT * FROM Shelters", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.get("/volunteers", (req, res) => {
  db.query("SELECT * FROM Volunteers", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.get("/affected-areas", (req, res) => {
  db.query("SELECT * FROM AffectedAreas", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Start server
app.listen(3001, () => {
  console.log("🚀 Server is running at http://localhost:3001");
});

