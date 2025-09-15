import React from 'react';
import { PostCard } from '@/components/feed/PostCard';
import { mockPosts } from '@/data/posts';

export default function Feed() {
  return (
    <div className="space-y-6">
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold dc-gradient-primary bg-clip-text text-transparent">
          Welcome to DevConnect
        </h1>
        <p className="text-muted-foreground mt-2">
          Connect, share, and grow with fellow developers
        </p>
      </div>
      
      <div className="space-y-6">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}