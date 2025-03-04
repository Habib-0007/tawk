import express, { Request, Response } from "express";
import MessageController from "../controllers/messageController";
import upload from "../middlewares/fileUploadMiddleware";
import asyncHandler from "../utils/asyncHandler";

const router = express.Router();

router.post(
  "/:threadId",
  upload.single("file"),
  asyncHandler(async (req: Request, res: Response) => {
    const { threadId } = req.params;
    const { content } = req.body;
    const file = req.file;

    const message = await MessageController.createMessage(
      threadId,
      content,
      file
    );

    res.status(201).json({
      status: "success",
      data: message,
    });
  })
);

router.get(
  "/:threadId",
  asyncHandler(async (req: Request, res: Response) => {
    const { threadId } = req.params;
    const messages = await MessageController.getThreadMessages(threadId);

    res.status(200).json({
      status: "success",
      data: messages,
    });
  })
);

export default router;
