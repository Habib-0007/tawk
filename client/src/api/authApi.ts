import { api } from "./index";
import type {
  AuthResponse,
  SignUpValues,
  SignInValues,
  ForgotPasswordValues,
  MessageResponse,
} from "../types/auth.types";

// Set token for authenticated requests
export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export const signUp = async (values: SignUpValues): Promise<AuthResponse> => {
  const { data } = await api.post<AuthResponse>("/auth/signup", values);
  if (data.data.token) {
    setAuthToken(data.data.token);
  }
  return data;
};

export const signIn = async (values: SignInValues): Promise<AuthResponse> => {
  const { data } = await api.post<AuthResponse>("/auth/signin", values);
  if (data.data.token) {
    setAuthToken(data.data.token);
  }
  return data;
};

export const forgotPassword = async (
  values: ForgotPasswordValues
): Promise<MessageResponse> => {
  const { data } = await api.post<MessageResponse>(
    "/auth/forgot-password",
    values
  );
  return data;
};

export const resetPassword = async (
  token: string,
  password: string
): Promise<AuthResponse> => {
  const { data } = await api.post<AuthResponse>(
    `/auth/reset-password/${token}`,
    { password }
  );
  if (data.data.token) {
    setAuthToken(data.data.token);
  }
  return data;
};

export const getUserThread = async () => {
  const { data } = await api.get("/threads/my-thread");
  return data;
};
