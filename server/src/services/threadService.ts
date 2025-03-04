import { nanoid } from "nanoid";
import prisma from "../config/database";
import { AppError } from "../middlewares/errorHandler";

class ThreadService {
  async createThread() {
    const slug = nanoid(10); 

    return await prisma.thread.create({
      data: { slug },
    });
  }

  async findThreadBySlug(slug: string) {
    const thread = await prisma.thread.findUnique({
      where: { slug },
    });

    if (!thread) {
      throw new AppError("Thread not found", 404);
    }

    return thread;
  }
}

export default new ThreadService();
