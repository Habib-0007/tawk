import { nanoid } from "nanoid";
import prisma from "../config/database";
import { AppError } from "../middlewares/errorHandler";

class ThreadService {
  async createThread(userId: string) {
    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new AppError("User not found", 404);
    }

    // Delete previous threads and messages for this user
    const previousThreads = await prisma.thread.findMany({
      where: { userId },
      include: { messages: true },
    });

    // Delete all previous threads and their messages
    for (const thread of previousThreads) {
      await prisma.message.deleteMany({
        where: { threadId: thread.id },
      });

      await prisma.thread.delete({
        where: { id: thread.id },
      });
    }

    // Create new thread
    const slug = nanoid(10);
    return await prisma.thread.create({
      data: {
        slug,
        userId,
      },
    });
  }

  async findThreadBySlug(slug: string) {
    const thread = await prisma.thread.findUnique({
      where: { slug },
      include: { user: true },
    });

    if (!thread) {
      throw new AppError("Thread not found", 404);
    }

    return thread;
  }

  async getUserThread(userId: string) {
    const thread = await prisma.thread.findFirst({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    return thread;
  }
}

export default new ThreadService();
