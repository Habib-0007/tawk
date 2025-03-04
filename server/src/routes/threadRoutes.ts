import express from "express";
import ThreadController from "../controllers/threadController";
import asyncHandler from "../utils/asyncHandler";

const router = express.Router();

// Create a new anonymous thread
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const thread = await ThreadController.createThread();

    res.status(201).json({
      status: "success",
      data: {
        id: thread.id,
        slug: thread.slug,
      },
    });
  })
);

// Get thread details by slug
router.get(
  "/:slug",
  asyncHandler(async (req, res) => {
    const { slug } = req.params;
    const thread = await ThreadController.findThreadBySlug(slug);

    res.status(200).json({
      status: "success",
      data: thread,
    });
  })
);

export default router;
