import type React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { forgotPassword } from "../../api/authApi";
import type { ForgotPasswordValues } from "../../types/auth.types";
import Button from "../common/Button";

const ForgotPasswordForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordValues>();

  const forgotPasswordMutation = useMutation({
    mutationFn: forgotPassword,
    onSuccess: () => {
      setIsSubmitted(true);
    },
    onError: (error: any) => {
      toast.error(
        error.response?.data?.message ||
          "Failed to send reset email. Please try again."
      );
    },
  });

  const onSubmit = (values: ForgotPasswordValues) => {
    forgotPasswordMutation.mutate(values);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-500 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Check Your Email
          </h2>
          <p className="text-gray-600 mb-6">
            We've sent a password reset link to your email address. Please check
            your inbox and follow the instructions.
          </p>
          <Link
            to="/signin"
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Return to Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
        Forgot Password
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Enter your email address and we'll send you a link to reset your
        password.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="your@email.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <Button
          type="submit"
          isLoading={forgotPasswordMutation.isPending}
          className="w-full"
        >
          Send Reset Link
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Remember your password?{" "}
          <Link
            to="/signin"
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
