// src/services/messageService.ts
import prisma from "../config/database";
import { AppError } from "../middlewares/errorHandler";
import FileUploadService from "./fileUploadService";

class MessageService {
  async createMessage(
    threadId: string,
    content?: string,
    file?: Express.Multer.File,
    userId?: string
  ) {
    try {
      const thread = await prisma.thread.findUnique({
        where: { id: threadId },
      });

      if (!thread) {
        throw new AppError("Thread not found", 404);
      }

      if (!content && !file) {
        throw new AppError("Message must have content or a file", 400);
      }

      let fileDetails = null;
      if (file) {
        console.log(
          `Processing file for thread ${threadId}: ${file.originalname}`
        );
        fileDetails = await FileUploadService.uploadToCloudinary(file);
        console.log("File upload successful:", fileDetails);
      }

      const message = await prisma.message.create({
        data: {
          content: content || null,
          threadId,
          fileUrl: fileDetails?.fileUrl || null,
          fileName: fileDetails?.fileName || null,
          fileType: file ? FileUploadService.getFileType(file.mimetype) : null,
          fileSize: file?.size || null,
          createdBy: userId || null, // Track the user who created the message
        },
      });

      console.log(`Message created successfully: ${message.id}`);
      return message;
    } catch (error) {
      console.error("Message creation error:", error);
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError(
        `Failed to create message: ${
          (error as Error).message || "Unknown error"
        }`,
        500
      );
    }
  }

  async getThreadMessages(threadId: string, isOwner: boolean) {
    try {
      // Only thread owners can see messages
      if (!isOwner) {
        throw new AppError("You do not have permission to view these messages", 403);
      }

      return await prisma.message.findMany({
        where: { threadId },
        orderBy: { createdAt: "desc" },
      });
    } catch (error) {
      console.error("Error fetching thread messages:", error);
      throw new AppError(
        `Failed to fetch thread messages: ${(error as Error).message}`,
        500
      );
    }
  }
}

export default new MessageService();