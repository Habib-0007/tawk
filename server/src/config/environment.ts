import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.string().default("3000"),
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  JWT_SECRET: z.string().min(1, "JWT_SECRET is required"),
  CLOUDINARY_CLOUD_NAME: z.string().min(1, "CLOUDINARY_CLOUD_NAME is required"),
  CLOUDINARY_API_KEY: z.string().min(1, "CLOUDINARY_API_KEY is required"),
  CLOUDINARY_API_SECRET: z.string().min(1, "CLOUDINARY_API_SECRET is required"),
  EMAIL_USER: z.string().email("EMAIL_USER must be a valid email"),
  EMAIL_PASSWORD: z.string().min(1, "EMAIL_PASSWORD is required"),
  EMAIL_FROM: z
    .string()
    .min(1, "EMAIL_FROM must be a valid email with app name"),
  FRONTEND_URL: z.string().url("FRONTEND_URL must be a valid URL"),
});

export const env = envSchema.parse(process.env);
