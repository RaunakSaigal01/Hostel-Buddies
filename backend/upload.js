const fs = require("fs");
const path = require("path");
const mysql = require("mysql2/promise");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// ✅ Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function main() {
  try {
    // ✅ Connect to MySQL
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
    });

    console.log("✅ Connected to MySQL!");

    // ✅ Path to images folder
    const imagesDir = path.join(__dirname, "images");

    // ✅ Read files
    const files = fs.readdirSync(imagesDir);

    for (const file of files) {
      const filePath = path.join(imagesDir, file);

      // ✅ Extract block_name from first letter of file
      const block_name = file[0] + " Block"; // e.g. A → A Block

      console.log(`📤 Uploading: ${file} (${block_name})...`);

      // ✅ Upload to Cloudinary
      const result = await cloudinary.uploader.upload(filePath, {
        folder: "hostel_images", // optional folder in Cloudinary
      });

      console.log(`✅ Uploaded: ${result.secure_url}`);

      // ✅ Save to DB
      await db.execute(
        "INSERT INTO images (block_name, file_name, image_url) VALUES (?, ?, ?)",
        [block_name, file, result.secure_url]
      );
    }

    console.log("🎉 All images uploaded and saved to DB!");

    await db.end();
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

main();
