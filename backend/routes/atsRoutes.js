const express = require("express");
const router = express.Router();
const multer = require("multer");

const { scanResume } = require("../controllers/atsController");

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post(
  "/scan",
  upload.single("resume"),
  scanResume
);

module.exports = router;