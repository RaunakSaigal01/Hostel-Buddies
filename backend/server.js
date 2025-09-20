const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
require("dotenv").config();
const imageRoutes = require("./routes/images");

const app = express();
app.use(cors()); 
app.use(express.json()); // ✅ to parse JSON body
app.use("/routes/images", imageRoutes);

// ✅ Create MySQL pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

// ✅ Save user API
app.post("/users", async (req, res) => {
  const { uid, name, email } = req.body;
  if (!uid || !name || !email) {
    return res.status(400).json({ error: "Missing uid, name, or email" });
  }

  try {
    const sql = "INSERT IGNORE INTO users (uid, name, email) VALUES (?, ?, ?)";
    const [result] = await pool.query(sql, [uid, name, email]);

    res.json({
      success: true,
      message: result.affectedRows > 0 ? "✅ New user added" : "ℹ️ User already exists",
    });
  } catch (err) {
    console.error("❌ DB Error:", err);
    res.status(500).json({ error: "Failed to save user" });
  }
});
// ✅ GET all users (optional)
app.get("/users", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    console.error("❌ DB Error:", err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// ✅ Existing images endpoint
app.get("/images", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, block_name, file_name, image_url FROM images"
    );
    res.json(rows);
  } catch (err) {
    console.error("❌ DB Error:", err);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("🚀 Backend is working! Go to /images to see images.");
});

app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
