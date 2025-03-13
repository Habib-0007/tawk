import express from "express";
import MessageController from "../controllers/messageController";
import upload from "../middlewares/fileUploadMiddleware";
import { protect, isThreadOwner } from "../middlewares/authMiddleware";

const router = express.Router();

router.post(
  "/:threadId",
  upload.single("file"),
  MessageController.createMessage
);

router.get(
  "/:threadId",
  protect,
  isThreadOwner,
  MessageController.getThreadMessages
);

export default router;
