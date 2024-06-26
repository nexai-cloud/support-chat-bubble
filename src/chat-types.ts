export type ChatThread = {
  uid: string;
  hide: boolean;
  name: string;
  userUid: string;
  date: Date;
  messages: ChatMessage[];
  avatar: JSX.Element;
  isTyping?: boolean;
}

export type ChatUser = {
  name: string;
  userUid: string;
  avatarUrl?: string;
}

export type ChatMessage = {
  uid: string;
  id?: string;
  message: React.ReactNode;
  sources?: string[];
  isReceived?: boolean;
  isTyping?: boolean;
  aiMuted?: boolean;
}

export type NexaiChatMessage = {
  id?: string;
  uid: string;
  userUid: string;
  sessionId: string;
  fromName: string;
  toName: string;
  message: string;
  projectId: string;
  appId: string;
  createdAt: string;
  updatedAt: string;
  avatarUrl: string;
  fromType: string;
  sources?: string[];
  aiMuted?: boolean;
}