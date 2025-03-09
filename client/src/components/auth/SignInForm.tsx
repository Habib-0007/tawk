import type React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { signIn } from "../../api/authApi";
import { useAuthStore } from "../../store/authSore";
import type { SignInValues } from "../../types/auth.types";
import Button from "../common/Button";

const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValues>();

  const signInMutation = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      setUser(data.data);
      toast.success("Signed in successfully!");
      navigate("/dashboard");
    },
    onError: (error: any) => {
      toast.error(
        error.response?.data?.message ||
          "Failed to sign in. Please check your credentials."
      );
    },
  });

  const onSubmit = (values: SignInValues) => {
    signInMutation.mutate(values);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Sign In
      </h2>

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

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="••••••••"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>

          <Link
            to="/forgot-password"
            className="text-sm text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          isLoading={signInMutation.isPending}
          className="w-full"
        >
          Sign In
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
