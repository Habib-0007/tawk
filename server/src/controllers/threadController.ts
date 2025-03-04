import ThreadService from "../services/threadService";
import { AppError } from "../middlewares/errorHandler";

class ThreadController {
  async createThread() {
    return await ThreadService.createThread();
  }

  async findThreadBySlug(slug: string) {
    if (!slug) {
      throw new AppError("Thread slug is required", 400);
    }

    return await ThreadService.findThreadBySlug(slug);
  }
}

export default new ThreadController();
