import MessageService from "../services/messageService";
import { AppError } from "../middlewares/errorHandler";

class MessageController {
  async createMessage(
    threadId: string,
    content?: string,
    file?: Express.Multer.File
  ) {
    // Validate input
    if (!threadId) {
      throw new AppError("Thread ID is required", 400);
    }

    return await MessageService.createMessage(threadId, content, file);
  }

  async getThreadMessages(threadId: string) {
    if (!threadId) {
      throw new AppError("Thread ID is required", 400);
    }

    return await MessageService.getThreadMessages(threadId);
  }
}

export default new MessageController();
