import { Post, Reaction, Comment } from '../types';
import { mockUsers } from './users';

// Mock reactions
const mockReactions: Reaction[] = [
  {
    id: 'reaction-1',
    type: 'like',
    user: mockUsers[1],
    createdAt: '2024-01-10T10:00:00Z',
  },
  {
    id: 'reaction-2',
    type: 'love',
    user: mockUsers[2],
    createdAt: '2024-01-10T10:05:00Z',
  },
  {
    id: 'reaction-3',
    type: 'laugh',
    user: mockUsers[3],
    createdAt: '2024-01-10T10:10:00Z',
  },
];

// Mock comments
const mockComments: Comment[] = [
  {
    id: 'comment-1',
    post: 'post-1',
    author: mockUsers[1],
    content: 'Great post! Really insightful thoughts on the future of web development.',
    reactions: [mockReactions[0]],
    replies: [
      {
        id: 'comment-1-reply-1',
        post: 'post-1',
        author: mockUsers[0],
        content: 'Thanks Sarah! Glad you found it helpful.',
        reactions: [],
        replies: [],
        parentId: 'comment-1',
        createdAt: '2024-01-10T11:00:00Z',
        updatedAt: '2024-01-10T11:00:00Z',
        isEdited: false,
      }
    ],
    createdAt: '2024-01-10T10:30:00Z',
    updatedAt: '2024-01-10T10:30:00Z',
    isEdited: false,
  },
  {
    id: 'comment-2',
    post: 'post-1',
    author: mockUsers[2],
    content: 'Looking forward to seeing more content like this! 🚀',
    reactions: [],
    replies: [],
    createdAt: '2024-01-10T10:45:00Z',
    updatedAt: '2024-01-10T10:45:00Z',
    isEdited: false,
  },
];

export const mockPosts: Post[] = [
  {
    id: 'post-1',
    author: mockUsers[0],
    content: 'Just finished building a new React component library with TypeScript! The developer experience is amazing with proper type definitions. What are your favorite tools for building component libraries? 🛠️\n\n#React #TypeScript #WebDev',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    ],
    type: 'image',
    privacy: 'public',
    reactions: mockReactions,
    comments: mockComments,
    shares: 12,
    createdAt: '2024-01-10T09:00:00Z',
    updatedAt: '2024-01-10T09:00:00Z',
    isEdited: false,
  },
  {
    id: 'post-2',
    author: mockUsers[1],
    content: 'Beautiful sunset from my weekend hike! Nature never fails to inspire creativity. Sometimes stepping away from the screen is exactly what we need to find new perspectives. 🌄\n\nWhere do you find your inspiration?',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop',
    ],
    type: 'image',
    privacy: 'public',
    reactions: [
      {
        id: 'reaction-4',
        type: 'love',
        user: mockUsers[0],
        createdAt: '2024-01-09T15:00:00Z',
      },
      {
        id: 'reaction-5',
        type: 'wow',
        user: mockUsers[2],
        createdAt: '2024-01-09T15:05:00Z',
      },
    ],
    comments: [
      {
        id: 'comment-3',
        post: 'post-2',
        author: mockUsers[0],
        content: 'Absolutely stunning! Which trail did you take?',
        reactions: [],
        replies: [],
        createdAt: '2024-01-09T15:30:00Z',
        updatedAt: '2024-01-09T15:30:00Z',
        isEdited: false,
      },
    ],
    shares: 8,
    createdAt: '2024-01-09T14:30:00Z',
    updatedAt: '2024-01-09T14:30:00Z',
    isEdited: false,
  },
  {
    id: 'post-3',
    author: mockUsers[2],
    content: 'Coffee shop productivity session ☕ Working on some exciting new marketing campaigns. There\'s something magical about the ambient noise and energy of a good coffee shop.\n\nWhat\'s your favorite place to work outside the office?',
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    ],
    type: 'image',
    privacy: 'public',
    reactions: [
      {
        id: 'reaction-6',
        type: 'like',
        user: mockUsers[0],
        createdAt: '2024-01-08T12:00:00Z',
      },
      {
        id: 'reaction-7',
        type: 'like',
        user: mockUsers[1],
        createdAt: '2024-01-08T12:05:00Z',
      },
    ],
    comments: [],
    shares: 3,
    createdAt: '2024-01-08T11:15:00Z',
    updatedAt: '2024-01-08T11:15:00Z',
    isEdited: false,
  },
  {
    id: 'post-4',
    author: mockUsers[3],
    content: 'Exciting news! Our team just launched a new feature that will help users collaborate more effectively. Product management is all about understanding user needs and translating them into amazing experiences.\n\nWhat features do you wish your favorite apps had?',
    type: 'text',
    privacy: 'public',
    reactions: [
      {
        id: 'reaction-8',
        type: 'like',
        user: mockUsers[0],
        createdAt: '2024-01-07T16:00:00Z',
      },
    ],
    comments: [
      {
        id: 'comment-4',
        post: 'post-4',
        author: mockUsers[1],
        content: 'Congratulations on the launch! 🎉',
        reactions: [],
        replies: [],
        createdAt: '2024-01-07T16:30:00Z',
        updatedAt: '2024-01-07T16:30:00Z',
        isEdited: false,
      },
    ],
    shares: 15,
    createdAt: '2024-01-07T15:45:00Z',
    updatedAt: '2024-01-07T15:45:00Z',
    isEdited: false,
  },
  {
    id: 'post-5',
    author: mockUsers[4],
    content: 'Speaking at DevConf next week about "Building Scalable React Applications"! Really excited to share some of the lessons learned from working on large-scale projects.\n\nWho else is attending? Would love to connect! 🚀',
    type: 'text',
    privacy: 'public',
    reactions: [
      {
        id: 'reaction-9',
        type: 'like',
        user: mockUsers[0],
        createdAt: '2024-01-06T10:00:00Z',
      },
      {
        id: 'reaction-10',
        type: 'wow',
        user: mockUsers[1],
        createdAt: '2024-01-06T10:05:00Z',
      },
    ],
    comments: [],
    shares: 22,
    createdAt: '2024-01-06T09:30:00Z',
    updatedAt: '2024-01-06T09:30:00Z',
    isEdited: false,
  },
];