import React, { useState } from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Post } from '@/types';
import { formatDistanceToNow } from 'date-fns';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleLike = () => setLiked(!liked);
  const handleSave = () => setSaved(!saved);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="dc-shadow-md hover:dc-shadow-lg dc-transition-smooth">
        <CardContent className="p-0">
          {/* Header */}
          <div className="flex items-center justify-between p-4 pb-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={post.author.avatar} alt={post.author.firstName} />
                <AvatarFallback>
                  {post.author.firstName[0]}{post.author.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-sm">
                    {post.author.firstName} {post.author.lastName}
                  </h3>
                  {post.author.isVerified && (
                    <Badge variant="secondary" className="h-4 w-4 rounded-full p-0">
                      ✓
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="px-4 pb-3">
            <p className="text-sm whitespace-pre-wrap">{post.content}</p>
          </div>

          {/* Images */}
          {post.images && post.images.length > 0 && (
            <div className="relative">
              <img
                src={post.images[0]}
                alt="Post content"
                className="w-full aspect-video object-cover"
              />
              {post.images.length > 1 && (
                <Badge className="absolute bottom-2 right-2">
                  +{post.images.length - 1} more
                </Badge>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between p-4 pt-3">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className={`reaction-animation ${liked ? 'text-reaction-love' : ''}`}
              >
                <Heart className={`h-4 w-4 mr-1 ${liked ? 'fill-current' : ''}`} />
                <span className="text-xs">{post.reactions.length + (liked ? 1 : 0)}</span>
              </Button>
              
              <Button variant="ghost" size="sm">
                <MessageCircle className="h-4 w-4 mr-1" />
                <span className="text-xs">{post.comments.length}</span>
              </Button>
              
              <Button variant="ghost" size="sm">
                <Share className="h-4 w-4 mr-1" />
                <span className="text-xs">{post.shares}</span>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleSave}
              className={`reaction-animation ${saved ? 'text-primary' : ''}`}
            >
              <Bookmark className={`h-4 w-4 ${saved ? 'fill-current' : ''}`} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}