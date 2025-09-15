import React from 'react';
import { MessageCircle, UserPlus, TrendingUp, Calendar } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { mockUsers } from '@/data/users';

export function RightSidebar() {
  const onlineUsers = mockUsers.filter(user => user.isOnline && user.id !== 'user-1');
  const suggestedUsers = mockUsers.filter(user => !user.isOnline && user.id !== 'user-1').slice(0, 3);

  const trendingTopics = [
    { tag: '#ReactJS', posts: '2.5K posts' },
    { tag: '#WebDev', posts: '1.8K posts' },
    { tag: '#TypeScript', posts: '1.2K posts' },
    { tag: '#DevLife', posts: '956 posts' },
  ];

  const upcomingEvents = [
    {
      id: '1',
      title: 'DevConf 2024',
      date: 'Jan 15',
      attendees: 234,
    },
    {
      id: '2',
      title: 'React Meetup',
      date: 'Jan 18',
      attendees: 89,
    },
  ];

  return (
    <div className="sticky top-20 space-y-6 w-full">
      {/* Online Friends */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            Online Now
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {onlineUsers.slice(0, 5).map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.firstName} />
                    <AvatarFallback className="text-xs">
                      {user.firstName[0]}{user.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="online-indicator" />
                </div>
                <span className="text-sm font-medium truncate">
                  {user.firstName} {user.lastName}
                </span>
              </div>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <MessageCircle className="h-3 w-3" />
              </Button>
            </div>
          ))}
          {onlineUsers.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-2">
              No friends online
            </p>
          )}
        </CardContent>
      </Card>

      {/* Suggested Friends */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            People You May Know
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {suggestedUsers.map((user) => (
            <div key={user.id} className="space-y-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.avatar} alt={user.firstName} />
                  <AvatarFallback>
                    {user.firstName[0]}{user.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {user.followersCount} followers
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="flex-1">
                  Add Friend
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Remove
                </Button>
              </div>
              {user !== suggestedUsers[suggestedUsers.length - 1] && (
                <Separator />
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Trending
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div key={topic.tag} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-primary hover:underline cursor-pointer">
                  {topic.tag}
                </p>
                <p className="text-xs text-muted-foreground">
                  {topic.posts}
                </p>
              </div>
              <Badge variant="secondary" className="text-xs">
                #{index + 1}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium">{event.title}</p>
                  <p className="text-xs text-muted-foreground">{event.date}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {event.attendees} going
                </Badge>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Interested
              </Button>
              {event !== upcomingEvents[upcomingEvents.length - 1] && (
                <Separator />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}