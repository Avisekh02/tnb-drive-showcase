import { Chat, Message } from '../types';
import { mockUsers, getCurrentUser } from './users';

const currentUser = getCurrentUser();

export const mockMessages: Message[] = [
  // Chat with Sarah Chen
  {
    id: 'msg-1',
    chatId: 'chat-1',
    sender: mockUsers[1], // Sarah
    content: 'Hey John! How\'s the component library coming along?',
    type: 'text',
    isRead: true,
    createdAt: '2024-01-10T14:00:00Z',
    reactions: [],
  },
  {
    id: 'msg-2',
    chatId: 'chat-1',
    sender: currentUser, // John
    content: 'Going great! Just finished the button component with all the variants. Want to see?',
    type: 'text',
    isRead: true,
    createdAt: '2024-01-10T14:05:00Z',
    reactions: [],
  },
  {
    id: 'msg-3',
    chatId: 'chat-1',
    sender: currentUser,
    content: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    type: 'image',
    media: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    isRead: true,
    createdAt: '2024-01-10T14:06:00Z',
    reactions: [
      {
        id: 'reaction-msg-1',
        type: 'love',
        user: mockUsers[1],
        createdAt: '2024-01-10T14:07:00Z',
      },
    ],
  },
  {
    id: 'msg-4',
    chatId: 'chat-1',
    sender: mockUsers[1],
    content: 'Wow! That looks amazing! The design system is really coming together nicely. 😍',
    type: 'text',
    isRead: false,
    createdAt: '2024-01-10T14:10:00Z',
    reactions: [],
  },

  // Chat with Mike Johnson
  {
    id: 'msg-5',
    chatId: 'chat-2',
    sender: mockUsers[2], // Mike
    content: 'Are you free for coffee tomorrow? Want to discuss the new marketing campaign ideas.',
    type: 'text',
    isRead: true,
    createdAt: '2024-01-09T16:30:00Z',
    reactions: [],
  },
  {
    id: 'msg-6',
    chatId: 'chat-2',
    sender: currentUser,
    content: 'Sure! How about 2 PM at the usual spot?',
    type: 'text',
    isRead: true,
    createdAt: '2024-01-09T16:35:00Z',
    reactions: [],
  },
  {
    id: 'msg-7',
    chatId: 'chat-2',
    sender: mockUsers[2],
    content: 'Perfect! See you there ☕',
    type: 'text',
    isRead: false,
    createdAt: '2024-01-09T16:40:00Z',
    reactions: [],
  },

  // Group Chat
  {
    id: 'msg-8',
    chatId: 'chat-3',
    sender: mockUsers[3], // Emily
    content: 'Hey team! Just wanted to share the latest product updates with everyone.',
    type: 'text',
    isRead: true,
    createdAt: '2024-01-08T10:00:00Z',
    reactions: [],
  },
  {
    id: 'msg-9',
    chatId: 'chat-3',
    sender: mockUsers[4], // Alex
    content: 'Great work on the new features! The performance improvements are really noticeable.',
    type: 'text',
    isRead: true,
    createdAt: '2024-01-08T10:15:00Z',
    reactions: [],
  },
  {
    id: 'msg-10',
    chatId: 'chat-3',
    sender: currentUser,
    content: 'Thanks everyone! Really proud of what we\'ve accomplished as a team. 🚀',
    type: 'text',
    isRead: true,
    createdAt: '2024-01-08T10:20:00Z',
    reactions: [
      {
        id: 'reaction-msg-2',
        type: 'like',
        user: mockUsers[3],
        createdAt: '2024-01-08T10:21:00Z',
      },
      {
        id: 'reaction-msg-3',
        type: 'like',
        user: mockUsers[4],
        createdAt: '2024-01-08T10:22:00Z',
      },
    ],
  },
];

export const mockChats: Chat[] = [
  {
    id: 'chat-1',
    participants: [currentUser, mockUsers[1]],
    isGroup: false,
    lastMessage: mockMessages.find(m => m.id === 'msg-4'),
    unreadCount: 1,
    createdAt: '2024-01-05T12:00:00Z',
    updatedAt: '2024-01-10T14:10:00Z',
  },
  {
    id: 'chat-2',
    participants: [currentUser, mockUsers[2]],
    isGroup: false,
    lastMessage: mockMessages.find(m => m.id === 'msg-7'),
    unreadCount: 1,
    createdAt: '2024-01-03T09:00:00Z',
    updatedAt: '2024-01-09T16:40:00Z',
  },
  {
    id: 'chat-3',
    participants: [currentUser, mockUsers[3], mockUsers[4]],
    isGroup: true,
    name: 'Dev Team',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&h=150&fit=crop',
    lastMessage: mockMessages.find(m => m.id === 'msg-10'),
    unreadCount: 0,
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-08T10:22:00Z',
  },
  {
    id: 'chat-4',
    participants: [currentUser, mockUsers[4]],
    isGroup: false,
    lastMessage: {
      id: 'msg-11',
      chatId: 'chat-4',
      sender: mockUsers[4],
      content: 'Looking forward to your talk at DevConf!',
      type: 'text',
      isRead: true,
      createdAt: '2024-01-07T18:00:00Z',
      reactions: [],
    },
    unreadCount: 0,
    createdAt: '2024-01-02T15:00:00Z',
    updatedAt: '2024-01-07T18:00:00Z',
  },
];

// Helper functions
export const getMessagesForChat = (chatId: string): Message[] => {
  return mockMessages.filter(msg => msg.chatId === chatId);
};

export const getUnreadMessagesCount = (): number => {
  return mockChats.reduce((total, chat) => total + chat.unreadCount, 0);
};