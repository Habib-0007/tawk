import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import prisma from "../config/database";
import { AppError } from "../middlewares/errorHandler";
import nodemailer from "nodemailer";
import { env } from "../config/environment";
import { getPasswordResetTemplate } from "../utils/getPasswordResetTemplate";

class AuthService {
  private readonly JWT_SECRET = env.JWT_SECRET || "your-secret-key";
  private readonly JWT_EXPIRES_IN = "24h";
  private readonly SALT_ROUNDS = 10;

  async signUp(email: string, password: string, name?: string) {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new AppError("User with this email already exists", 400);
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, this.SALT_ROUNDS);

    // Create new user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: name || null,
      },
    });

    // Generate JWT token
    const token = this.generateToken(user.id);

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      token,
    };
  }

  async signIn(email: string, password: string) {
    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new AppError("Invalid credentials", 401);
    }

    // Check if password matches
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new AppError("Invalid credentials", 401);
    }

    // Generate JWT token
    const token = this.generateToken(user.id);

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      token,
    };
  }

  async forgotPassword(email: string) {
    // Check if user exists
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new AppError("User with this email does not exist", 404);
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    // Set token expiration (1 hour from now)
    const resetPasswordExpires = new Date(Date.now() + 60 * 60 * 1000);

    // Save token to user
    await prisma.user.update({
      where: { id: user.id },
      data: { resetPasswordToken, resetPasswordExpires },
    });

    // Configure Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: env.EMAIL_USER, // Your Gmail email
        pass: env.EMAIL_PASSWORD, // Your App Password
      },
    });

    // Email content
    const resetURL = `${env.FRONTEND_URL}/reset-password/${resetToken}`;

    try {
      await transporter.sendMail({
        from: env.EMAIL_FROM || `"Support" <${env.EMAIL_USER}>`,
        to: user.email,
        subject: "Your password reset token (valid for 1 hour)",
        // text: message,
        html: getPasswordResetTemplate(resetURL, user.email),
      });
    } catch (error) {
      await prisma.user.update({
        where: { id: user.id },
        data: { resetPasswordToken: null, resetPasswordExpires: null },
      });
      console.error("Email error:", error);
      throw new AppError("Error sending email", 500);
    }

    return { message: "Password reset email sent" };
  }

  async resetPassword(token: string, newPassword: string) {
    // Hash the token from the URL
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    // Find user with valid token
    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken,
        resetPasswordExpires: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      throw new AppError("Invalid or expired token", 400);
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, this.SALT_ROUNDS);

    // Update user
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetPasswordToken: null,
        resetPasswordExpires: null,
      },
    });

    // Generate JWT token
    const jwtToken = this.generateToken(user.id);

    return {
      id: user.id,
      email: user.email,
      token: jwtToken,
    };
  }

  generateToken(userId: string) {
    return jwt.sign({ id: userId }, this.JWT_SECRET, {
      expiresIn: this.JWT_EXPIRES_IN,
    });
  }

  verifyToken(token: string) {
    try {
      const decoded = jwt.verify(token, this.JWT_SECRET) as { id: string };
      return decoded;
    } catch (error) {
      throw new AppError("Invalid or expired token", 401);
    }
  }
}

export default new AuthService();
