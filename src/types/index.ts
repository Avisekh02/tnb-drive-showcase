// DevConnect - Type Definitions

export interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  coverImage?: string;
  bio?: string;
  location?: string;
  website?: string;
  isVerified: boolean;
  isOnline: boolean;
  lastSeen: string;
  followersCount: number;
  followingCount: number;
  postsCount: number;
  createdAt: string;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  images?: string[];
  video?: string;
  type: 'text' | 'image' | 'video' | 'poll' | 'link' | 'shared';
  privacy: 'public' | 'friends' | 'private';
  reactions: Reaction[];
  comments: Comment[];
  shares: number;
  createdAt: string;
  updatedAt: string;
  isEdited: boolean;
  poll?: Poll;
  link?: LinkPreview;
  sharedPost?: Post;
}

export interface Reaction {
  id: string;
  type: 'like' | 'love' | 'laugh' | 'wow' | 'sad' | 'angry';
  user: User;
  createdAt: string;
}

export interface Comment {
  id: string;
  post: string;
  author: User;
  content: string;
  reactions: Reaction[];
  replies: Comment[];
  parentId?: string;
  createdAt: string;
  updatedAt: string;
  isEdited: boolean;
}

export interface Story {
  id: string;
  author: User;
  media: string;
  type: 'image' | 'video';
  text?: string;
  backgroundColor?: string;
  views: number;
  isViewed: boolean;
  createdAt: string;
  expiresAt: string;
}

export interface Message {
  id: string;
  chatId: string;
  sender: User;
  content: string;
  type: 'text' | 'image' | 'video' | 'audio' | 'file';
  media?: string;
  isRead: boolean;
  createdAt: string;
  reactions: Reaction[];
}

export interface Chat {
  id: string;
  participants: User[];
  isGroup: boolean;
  name?: string;
  image?: string;
  lastMessage?: Message;
  unreadCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  image: string;
  coverImage: string;
  privacy: 'public' | 'private' | 'secret';
  category: string;
  members: User[];
  admins: User[];
  posts: Post[];
  createdAt: string;
  membersCount: number;
}

export interface Page {
  id: string;
  name: string;
  username: string;
  description: string;
  category: string;
  image: string;
  coverImage: string;
  isVerified: boolean;
  followers: User[];
  posts: Post[];
  website?: string;
  location?: string;
  createdAt: string;
  followersCount: number;
}

export interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  category: string;
  condition: 'new' | 'like-new' | 'good' | 'fair' | 'poor';
  seller: User;
  location: string;
  isAvailable: boolean;
  createdAt: string;
  views: number;
  isSaved: boolean;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  image: string;
  date: string;
  endDate?: string;
  location: string;
  isOnline: boolean;
  organizer: User | Page;
  attendees: User[];
  interested: User[];
  category: string;
  isPublic: boolean;
  price?: number;
  currency?: string;
  createdAt: string;
  attendeesCount: number;
  interestedCount: number;
}

export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'share' | 'follow' | 'mention' | 'friend-request' | 'event' | 'group' | 'page';
  message: string;
  user: User;
  targetId?: string;
  isRead: boolean;
  createdAt: string;
}

export interface Poll {
  id: string;
  question: string;
  options: PollOption[];
  allowMultiple: boolean;
  expiresAt?: string;
  totalVotes: number;
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
  voters: User[];
}

export interface LinkPreview {
  url: string;
  title: string;
  description: string;
  image?: string;
  domain: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// UI State Types
export interface Theme {
  mode: 'light' | 'dark';
}

export interface UIState {
  theme: Theme;
  sidebarCollapsed: boolean;
  activePage: string;
  notifications: Notification[];
  unreadMessagesCount: number;
}