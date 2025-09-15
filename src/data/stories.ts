import { Story } from '../types';
import { mockUsers } from './users';

export const mockStories: Story[] = [
  {
    id: 'story-1',
    author: mockUsers[0],
    media: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=700&fit=crop',
    type: 'image',
    text: 'Coding late night 💻',
    backgroundColor: '#1a202c',
    views: 234,
    isViewed: false,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    expiresAt: new Date(Date.now() + 22 * 60 * 60 * 1000).toISOString(), // 22 hours from now
  },
  {
    id: 'story-2',
    author: mockUsers[1],
    media: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=700&fit=crop',
    type: 'image',
    text: 'Mountain views 🏔️',
    views: 156,
    isViewed: true,
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 hours ago
    expiresAt: new Date(Date.now() + 20 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'story-3',
    author: mockUsers[2],
    media: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=700&fit=crop',
    type: 'image',
    text: 'Coffee time ☕',
    views: 89,
    isViewed: false,
    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
    expiresAt: new Date(Date.now() + 23 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'story-4',
    author: mockUsers[3],
    media: '',
    type: 'image',
    text: 'New product launch! 🚀 So excited to share what we\'ve been working on.',
    backgroundColor: '#667eea',
    views: 342,
    isViewed: true,
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
    expiresAt: new Date(Date.now() + 18 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'story-5',
    author: mockUsers[4],
    media: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=700&fit=crop',
    type: 'image',
    text: 'Speaking at DevConf! 🎤',
    views: 198,
    isViewed: false,
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3 hours ago
    expiresAt: new Date(Date.now() + 21 * 60 * 60 * 1000).toISOString(),
  },
];

// Group stories by user, with current user's story first
export const getStoriesGrouped = () => {
  const currentUser = mockUsers[0];
  const currentUserStories = mockStories.filter(story => story.author.id === currentUser.id);
  const otherUserStories = mockStories.filter(story => story.author.id !== currentUser.id);
  
  // Group other users' stories by author
  const groupedOtherStories = otherUserStories.reduce((acc, story) => {
    const authorId = story.author.id;
    if (!acc[authorId]) {
      acc[authorId] = [];
    }
    acc[authorId].push(story);
    return acc;
  }, {} as Record<string, Story[]>);

  // Convert to array format with user's stories first
  const result = [];
  if (currentUserStories.length > 0) {
    result.push({
      user: currentUser,
      stories: currentUserStories,
      hasUnviewed: currentUserStories.some(story => !story.isViewed),
    });
  }

  Object.values(groupedOtherStories).forEach(stories => {
    if (stories.length > 0) {
      result.push({
        user: stories[0].author,
        stories,
        hasUnviewed: stories.some(story => !story.isViewed),
      });
    }
  });

  return result;
};