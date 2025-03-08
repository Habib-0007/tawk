export type FileType = "IMAGE" | "VIDEO" | "AUDIO" | "DOCUMENT";

export interface MessageValues {
  id: string;
  content: string | null;
  threadId: string;
  fileUrl: string | null;
  fileName: string | null;
  fileType: FileType | null;
  fileSize: number | null;
  createdAt: string;
}

export interface Message {
  data: MessageValues[];
}
