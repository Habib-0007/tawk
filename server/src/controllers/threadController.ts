import { Request, Response, NextFunction } from "express";
import ThreadService from "../services/threadService";
import { AppError } from "../middlewares/errorHandler";

class ThreadController {
  async createThread(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        throw new AppError("Authentication required", 401);
      }

      const thread = await ThreadService.createThread(req.user.id);

      res.status(201).json({
        status: "success",
        data: thread,
      });
    } catch (error) {
      next(error);
    }
  }

  async findThreadBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const { slug } = req.params;

      if (!slug) {
        throw new AppError("Thread slug is required", 400);
      }

      const thread = await ThreadService.findThreadBySlug(slug);

      res.status(200).json({
        status: "success",
        data: thread,
      });
    } catch (error) {
      next(error);
    }
  }

  async getUserThread(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        throw new AppError("Authentication required", 401);
      }

      const thread = await ThreadService.getUserThread(req.user.id);

      res.status(200).json({
        status: "success",
        data: thread,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ThreadController();
