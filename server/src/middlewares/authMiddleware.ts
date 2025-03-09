import { Request, Response, NextFunction } from "express";
import { AppError } from "./errorHandler";
import AuthService from "../services/authService";
import prisma from "../config/database";

// Extend Express Request to include user
declare global {
  namespace Express {
    interface Request {
      user?: any;
      threadOwner?: boolean;
    }
  }
}

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // 1) Check if token exists
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return next(new AppError("You are not logged in", 401));
    }

    // 2) Verify token
    const decoded = AuthService.verifyToken(token);

    // 3) Check if user still exists
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user) {
      return next(new AppError("User no longer exists", 401));
    }

    // 4) Add user to request
    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

// Middleware to check if user is the thread owner
export const isThreadOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { threadId } = req.params;

    if (!threadId) {
      return next(new AppError("Thread ID is required", 400));
    }

    const thread = await prisma.thread.findUnique({
      where: { id: threadId },
    });

    if (!thread) {
      return next(new AppError("Thread not found", 404));
    }

    if (thread.userId !== req.user.id) {
      req.threadOwner = false;
    } else {
      req.threadOwner = true;
    }

    next();
  } catch (error) {
    next(error);
  }
};

// Middleware to restrict access to thread owner only
export const restrictToOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { threadId } = req.params;

    if (!threadId) {
      return next(new AppError("Thread ID is required", 400));
    }

    const thread = await prisma.thread.findUnique({
      where: { id: threadId },
    });

    if (!thread) {
      return next(new AppError("Thread not found", 404));
    }

    if (thread.userId !== req.user.id) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }

    next();
  } catch (error) {
    next(error);
  }
};
