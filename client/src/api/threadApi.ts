import { api } from "./index";
import { Thread } from "../types/thread.types";

export const createThread = async (): Promise<Thread> => {
  const { data } = await api.post<Thread>("/threads");
  return data;
};

export const getThreadBySlug = async (slug: string): Promise<Thread> => {
  const { data } = await api.get<Thread>(`/threads/${slug}`);
  return data;
};
