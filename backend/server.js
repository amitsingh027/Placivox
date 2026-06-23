import express from "express";
import cors from "cors";
import multer from "multer";
import pdfParse from "pdf-parse/lib/pdf-parse.js";

const app = express();

app.use(cors());

const upload = multer({
  storage: multer.memoryStorage(),
});

app.post(
  "/api/ats/scan",
  upload.single("resume"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res
          .status(400)
          .json({
            message: "No file uploaded",
          });
      }

     const data = await pdfParse(req.file.buffer);

      const text = data.text.toLowerCase();

      const keywords = [
        "react",
        "javascript",
        "node",
        "express",
        "mongodb",
        "sql",
        "git",
        "github",
        "docker",
        "aws",
        "api",
      ];

      const found =
        keywords.filter((k) =>
          text.includes(k)
        );

      const missing =
        keywords.filter(
          (k) => !text.includes(k)
        );

      const score = Math.round(
        (found.length /
          keywords.length) *
          100
      );
      res.json({
        score,
        found,
        missing,
      });
    } catch (err) {
      console.log(err);

      res.status(500).json({
        message: "Error reading PDF",
      });
    }
  }
);
app.listen(5000, () => {
  console.log(
    "Server running on port 5000"
  );
});