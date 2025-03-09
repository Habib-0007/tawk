import type React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { resetPassword } from "../../api/authApi";
import { useAuthStore } from "../../store/authSore";
import type { ResetPasswordValues } from "../../types/auth.types";
import Button from "../common/Button";

const ResetPasswordForm: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordValues>();
  const password = watch("password");

  const resetPasswordMutation = useMutation({
    mutationFn: (values: ResetPasswordValues) =>
      resetPassword(token || "", values.password),
    onSuccess: (data) => {
      setUser(data.data);
      toast.success("Password reset successfully!");
      navigate("/dashboard");
    },
    onError: (error: any) => {
      toast.error(
        error.response?.data?.message ||
          "Failed to reset password. The link may be invalid or expired."
      );
    },
  });

  const onSubmit = (values: ResetPasswordValues) => {
    resetPasswordMutation.mutate(values);
  };

  if (!token) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-red-500 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Invalid Reset Link
          </h2>
          <p className="text-gray-600 mb-6">
            The password reset link is invalid or has expired.
          </p>
          <Link
            to="/forgot-password"
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Request a new reset link
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Reset Your Password
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            New Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="••••••••"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="••••••••"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          isLoading={resetPasswordMutation.isPending}
          className="w-full"
        >
          Reset Password
        </Button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
