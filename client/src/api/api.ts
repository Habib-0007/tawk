import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createThread = async (): Promise<any> => {
  const response = await api.post("/threads");
  return response.data;
};

export const getThread = async (slug: string): Promise<any> => {
  const response = await api.get(`/threads/${slug}`);
  return response.data;
};

export const getMessages = async (threadId: string): Promise<any[]> => {
  const response = await api.get(`/messages/${threadId}`);
  return response.data;
};

export const sendMessage = async (
  threadId: string,
  content: string
): Promise<any> => {
  const response = await api.post(`/messages/${threadId}`, { content });
  return response.data;
};
