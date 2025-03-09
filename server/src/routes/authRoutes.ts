import express from "express";
import AuthController from "../controllers/authController";

const router = express.Router();

router.post("/signup", AuthController.signUp);
router.post("/signin", AuthController.signIn);
router.post("/forgot-password", AuthController.forgotPassword);
router.post("/reset-password/:token", AuthController.resetPassword);

export default router;
