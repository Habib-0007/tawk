import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import { AppError } from "../middlewares/errorHandler";
import { FileType } from "@prisma/client";

class FileUploadService {
  private readonly MAX_FILE_SIZE = 1024 * 1024 * 100;
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
    if (file.size > this.MAX_FILE_SIZE) {
      throw new AppError("File size exceeds 100MB limit", 400);
    }

    if (!this.ALLOWED_MIME_TYPES.includes(file.mimetype)) {
      throw new AppError("File type not allowed", 400);
    }
  }

  getFileType(mimetype: string): FileType {
    if (mimetype.startsWith("image/")) return "IMAGE";
    if (mimetype.startsWith("video/")) return "VIDEO";
    if (mimetype.startsWith("audio/")) return "AUDIO";
    return "DOCUMENT";
  }

  async uploadToGoFile(file: Express.Multer.File): Promise<{
    fileUrl: string;
    fileName: string;
  }> {
    try {
      this.validateFile(file);

      const serverResponse = await axios.get("https://api.gofile.io/getServer");
      const server = serverResponse.data.data.server;

      const formData = new FormData();
      formData.append("file", fs.createReadStream(file.path), {
        filename: file.originalname,
        contentType: file.mimetype,
      });

      const uploadResponse = await axios.post(
        `https://${server}.gofile.io/uploadFile`,
        formData,
        {
          headers: {
            ...formData.getHeaders(),
          },
        }
      );

      fs.unlinkSync(file.path);

      return {
        fileUrl: uploadResponse.data.data.downloadPage,
        fileName: file.originalname,
      };
    } catch (error) {
      if (fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }

      if (axios.isAxiosError(error)) {
        throw new AppError(
          `GoFile upload failed: ${
            error.response?.data?.msg || "Unknown error"
          }`,
          500
        );
      }
      throw error;
    }
  }
}

export default new FileUploadService();
