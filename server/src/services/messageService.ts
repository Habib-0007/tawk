import prisma from "../config/database";
import { AppError } from "../middlewares/errorHandler";
import FileUploadService from "./fileUploadService";

class MessageService {
  async createMessage(
    threadId: string,
    content?: string,
    file?: Express.Multer.File
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

      let fileDetails;
      if (file) {
        fileDetails = await FileUploadService.uploadToGoFile(file);
      }

      return await prisma.message.create({
        data: {
          content: content || null,
          threadId,
          fileUrl: fileDetails?.fileUrl,
          fileName: fileDetails?.fileName,
          fileType: fileDetails
            ? FileUploadService.getFileType(file!.mimetype)
            : null,
          fileSize: file?.size,
        },
      });
    } catch (error) {
      throw new AppError("Failed to create message", 500);
    }
  }

  async getThreadMessages(threadId: string) {
    return await prisma.message.findMany({
      where: { threadId },
      orderBy: { createdAt: "desc" },
    });
  }
}

export default new MessageService();
