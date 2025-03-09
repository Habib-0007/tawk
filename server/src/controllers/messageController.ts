import { Request, Response, NextFunction } from "express";
import MessageService from "../services/messageService";
import { AppError } from "../middlewares/errorHandler";

class MessageController {
  async createMessage(req: Request, res: Response, next: NextFunction) {
    try {
      const { threadId } = req.params;
      const { content } = req.body;
      const file = req.file;

      if (!threadId) {
        throw new AppError("Thread ID is required", 400);
      }

      const userId = req.user ? req.user.id : undefined;

      const message = await MessageService.createMessage(
        threadId,
        content,
        file,
        userId
      );

      res.status(201).json({
        status: "success",
        data: message,
      });
    } catch (error) {
      next(error);
    }
  }

  async getThreadMessages(req: Request, res: Response, next: NextFunction) {
    try {
      const { threadId } = req.params;

      if (!threadId) {
        throw new AppError("Thread ID is required", 400);
      }

      // Check if user is thread owner
      const isOwner = req.threadOwner === true;

      const messages = await MessageService.getThreadMessages(
        threadId,
        isOwner
      );

      res.status(200).json({
        status: "success",
        data: messages,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new MessageController();
