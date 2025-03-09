export interface User {
  id: string;
  email: string;
  name?: string;
  token: string;
}

export interface SignUpValues {
  email: string;
  password: string;
  name?: string;
}

export interface SignInValues {
  email: string;
  password: string;
}

export interface ForgotPasswordValues {
  email: string;
}

export interface ResetPasswordValues {
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  status: string;
  data: User;
}

export interface MessageResponse {
  status: string;
  data: {
    message: string;
  };
}
