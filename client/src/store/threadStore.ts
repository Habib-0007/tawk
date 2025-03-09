import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Thread } from "../types/thread.types";

interface ThreadState {
  threads: Thread[];
  addThread: (thread: Thread) => void;
  getThread: (slug: string) => Thread | undefined;
  clearExpiredThreads: () => void;
}

const EXPIRY_DAYS = 5;

export const useThreadStore = create<ThreadState>()(
  persist(
    (set, get) => ({
      threads: [],

      addThread: (thread: Thread) => {
        set((state) => ({
          threads: [...state.threads, thread],
        }));
      },

      getThread: (slug: string) => {
        return get().threads.find((thread: any) => thread.slug === slug);
      },

      clearExpiredThreads: () => {
        const now = new Date();
        const fiveDaysAgo = new Date(
          now.getTime() - EXPIRY_DAYS * 24 * 60 * 60 * 1000
        );

        set((state) => ({
          threads: state.threads.filter((thread) => {
            const threadDate = new Date(thread.createdAt);
            return threadDate > fiveDaysAgo;
          }),
        }));
      },
    }),
    {
      name: "thread-storage",
    }
  )
);
