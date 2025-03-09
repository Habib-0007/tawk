import { Request, Response, NextFunction } from "express";
import { AppError } from "../middlewares/errorHandler";
import AuthService from "../services/authService";

class AuthController {
  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, name } = req.body;

      if (!email || !password) {
        throw new AppError("Email and password are required", 400);
      }

      const user = await AuthService.signUp(email, password, name);

      res.status(201).json({
        status: "success",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new AppError("Email and password are required", 400);
      }

      const user = await AuthService.signIn(email, password);

      res.status(200).json({
        status: "success",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  async forgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;

      if (!email) {
        throw new AppError("Email is required", 400);
      }

      const result = await AuthService.forgotPassword(email);

      res.status(200).json({
        status: "success",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { token } = req.params;
      const { password } = req.body;

      if (!token || !password) {
        throw new AppError("Token and password are required", 400);
      }

      const user = await AuthService.resetPassword(token, password);

      res.status(200).json({
        status: "success",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
