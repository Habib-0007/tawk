import express from "express";
import ThreadController from "../controllers/threadController";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

// Protected routes (require authentication)
router.post("/", protect, ThreadController.createThread);
router.get("/my-thread", protect, ThreadController.getUserThread);

// Public routes
router.get("/:slug", ThreadController.findThreadBySlug);

export default router;
