import multer from "multer";
import path from "path";
import fs from "fs";
import os from "os";

// Use the OS temp directory instead of a fixed path
const uploadDir = path.join(os.tmpdir(), "uploads");
try {
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
    console.log(`Created uploads directory at: ${uploadDir}`);
  }
} catch (error: any) {
  console.warn(`Warning: Could not create uploads directory: ${error.message}`);
  // Continue execution even if directory creation fails
}

// Set up storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  },
});

// If we can't use disk storage, use memory storage
const memoryStorage = multer.memoryStorage();

// Determine which storage to use
let activeStorage;
try {
  // Test if we can write to the upload directory
  const testFile = path.join(uploadDir, ".test");
  fs.writeFileSync(testFile, "test");
  fs.unlinkSync(testFile);
  activeStorage = storage;
  console.log("Using disk storage for file uploads");
} catch (error) {
  activeStorage = memoryStorage;
  console.log("Using memory storage for file uploads");
}

const upload = multer({
  storage: activeStorage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "video/mp4",
      "video/webm",
      "audio/mpeg",
      "audio/wav",
      "audio/webm",
      "application/pdf",
    ];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

export default upload;
