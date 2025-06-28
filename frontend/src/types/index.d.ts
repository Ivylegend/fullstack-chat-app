export interface User {
  _id: string;
  name: string;
  email: string;
  fullName: string;
  profilePic: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  _id: string;
  senderId: string;
  text: string;
  image: string;
  createdAt: Date;
}

export interface ChatStore {
  messages: Message[];
  users: User[];
  selectedUser: any | null;
  isUsersLoading: boolean;
  isMessagesLoading: boolean;
  getUsers: () => Promise<void>;
  getMessages: (userId: string) => Promise<void>;
  setSelectedUser: (user: any) => void;
  sendMessage: (data: any) => Promise<void>;
  subscribeToMessages: () => void;
  unsubscribeFromMessages: () => void;
}

export interface AuthStore {
  authUser: any | null;
  isSigningUp: boolean;
  isLoggingIn: boolean;
  isUpdatingProfile: boolean;
  isCheckingAuth: boolean;
  onlineUsers: string[];
  socket: any | null;
  checkAuth: () => Promise<void>;
  signup: (data: any) => Promise<void>;
  login: (data: any) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: any) => Promise<void>;
  connectSocket: () => void;
  disconnectSocket: () => void;
}
