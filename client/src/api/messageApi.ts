import { api } from "./index";
import { Message } from "../types/message.type";

export const getThreadMessages = async (threadId: string): Promise<Message> => {
  const { data } = await api.get<Message>(`/messages/${threadId}`);
  return data;
};

export const createMessage = async (
  threadId: string,
  content?: string,
  file?: File
): Promise<Message> => {
  const formData = new FormData();

  if (content) {
    formData.append("content", content);
  }

  if (file) {
    formData.append("file", file);
  }

  const { data } = await api.post<Message>(`/messages/${threadId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
