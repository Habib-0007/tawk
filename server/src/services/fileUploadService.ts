import axios from "axios";
import fs from "fs";
import path from "path";
import { AppError } from "../middlewares/errorHandler";
import { FileType } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";

const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log(`Created uploads directory at: ${uploadDir}`);
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

class FileUploadService {
  private readonly MAX_FILE_SIZE = 1024 * 1024 * 100; // 100MB
  private readonly ALLOWED_MIME_TYPES = [
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

  validateFile(file: Express.Multer.File) {
    if (!file) {
      throw new AppError("No file provided", 400);
    }

    if (file.size > this.MAX_FILE_SIZE) {
      throw new AppError("File size exceeds 100MB limit", 400);
    }

    if (!this.ALLOWED_MIME_TYPES.includes(file.mimetype)) {
      throw new AppError(`File type ${file.mimetype} not allowed`, 400);
    }
  }

  getFileType(mimetype: string): FileType {
    if (mimetype.startsWith("image/")) return "IMAGE";
    if (mimetype.startsWith("video/")) return "VIDEO";
    if (mimetype.startsWith("audio/")) return "AUDIO";
    return "DOCUMENT";
  }

  async uploadToCloudinary(file: Express.Multer.File): Promise<{
    fileUrl: string;
    fileName: string;
  }> {
    try {
      this.validateFile(file);

      if (
        !process.env.CLOUDINARY_CLOUD_NAME ||
        !process.env.CLOUDINARY_API_KEY ||
        !process.env.CLOUDINARY_API_SECRET
      ) {
        throw new AppError("Cloudinary credentials not configured", 500);
      }

      if (!fs.existsSync(file.path)) {
        throw new AppError(`File not found at path: ${file.path}`, 400);
      }

      console.log(
        `Processing file: ${file.originalname}, size: ${file.size}, path: ${file.path}`
      );

      let resourceType = "auto";
      if (file.mimetype.startsWith("image/")) resourceType = "image";
      if (file.mimetype.startsWith("video/")) resourceType = "video";
      if (file.mimetype.startsWith("audio/")) resourceType = "video";

      const publicId = `uploads/${Date.now()}-${path.basename(
        file.originalname,
        path.extname(file.originalname)
      )}`;

      return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
          file.path,
          {
            resource_type: resourceType as any,
            public_id: publicId,
            overwrite: true,
            folder: "app_uploads",
          },
          (error, result: any) => {
            if (fs.existsSync(file.path)) {
              fs.unlinkSync(file.path);
            }

            if (error) {
              console.error("Cloudinary upload error:", error);
              return reject(
                new AppError(`Cloudinary upload failed: ${error.message}`, 500)
              );
            }

            console.log("Upload successful to Cloudinary");
            resolve({
              fileUrl: result.secure_url,
              fileName: file.originalname,
            });
          }
        );
      });
    } catch (error) {
      console.error("Upload error:", error);

      if (file && file.path && fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }

      if (axios.isAxiosError(error)) {
        console.error("Axios error details:", {
          status: error.response?.status,
          data: error.response?.data,
          message: error.message,
        });

        throw new AppError(
          `File upload failed: ${
            error.response?.data?.message || error.message || "Unknown error"
          }`,
          500
        );
      }
      throw error;
    }
  }
}

export default new FileUploadService();
