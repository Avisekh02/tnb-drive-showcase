import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Home,
  Users,
  MessageCircle,
  Calendar,
  ShoppingBag,
  Play,
  Bookmark,
  TrendingUp,
  Settings,
  HelpCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { getCurrentUser } from '@/data/users';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface SidebarProps {
  className?: string;
  collapsed?: boolean;
}

const mainNavItems = [
  {
    title: 'Home',
    href: '/',
    icon: Home,
  },
  {
    title: 'Friends',
    href: '/friends',
    icon: Users,
  },
  {
    title: 'Messages',
    href: '/messages',
    icon: MessageCircle,
  },
  {
    title: 'Events',
    href: '/events',
    icon: Calendar,
  },
  {
    title: 'Marketplace',
    href: '/marketplace',
    icon: ShoppingBag,
  },
  {
    title: 'Reels',
    href: '/reels',
    icon: Play,
  },
];

const secondaryNavItems = [
  {
    title: 'Saved',
    href: '/saved',
    icon: Bookmark,
  },
  {
    title: 'Trending',
    href: '/trending',
    icon: TrendingUp,
  },
];

const bottomNavItems = [
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
  {
    title: 'Help',
    href: '/help',
    icon: HelpCircle,
  },
];

export function Sidebar({ className, collapsed = false }: SidebarProps) {
  const location = useLocation();
  const currentUser = getCurrentUser();

  const NavItem = ({ item, isActive }: { item: typeof mainNavItems[0]; isActive: boolean }) => (
    <NavLink to={item.href} className="block">
      <Button
        variant={isActive ? 'secondary' : 'ghost'}
        className={cn(
          'w-full justify-start gap-3 h-11',
          isActive && 'bg-primary/10 text-primary hover:bg-primary/15',
          collapsed && 'justify-center px-2'
        )}
      >
        <item.icon className={cn('h-5 w-5', collapsed && 'h-6 w-6')} />
        {!collapsed && <span className="font-medium">{item.title}</span>}
      </Button>
    </NavLink>
  );

  return (
    <div className={cn('flex h-full w-64 flex-col border-r bg-sidebar', collapsed && 'w-16', className)}>
      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-2">
          {/* User Profile Section */}
          {!collapsed && (
            <div className="mb-4 rounded-lg border bg-card p-4">
              <NavLink to="/profile" className="flex items-center gap-3 hover:opacity-80">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={currentUser.avatar} alt={currentUser.firstName} />
                  <AvatarFallback>
                    {currentUser.firstName[0]}{currentUser.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">
                    {currentUser.firstName} {currentUser.lastName}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    @{currentUser.username}
                  </p>
                </div>
              </NavLink>
            </div>
          )}

          {/* Main Navigation */}
          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <NavItem
                key={item.href}
                item={item}
                isActive={location.pathname === item.href}
              />
            ))}
          </div>

          <Separator className="my-4" />

          {/* Secondary Navigation */}
          <div className="space-y-1">
            {secondaryNavItems.map((item) => (
              <NavItem
                key={item.href}
                item={item}
                isActive={location.pathname === item.href}
              />
            ))}
          </div>

          <Separator className="my-4" />

          {/* Bottom Navigation */}
          <div className="space-y-1">
            {bottomNavItems.map((item) => (
              <NavItem
                key={item.href}
                item={item}
                isActive={location.pathname === item.href}
              />
            ))}
          </div>

          {/* Quick Stats */}
          {!collapsed && (
            <div className="mt-6 space-y-2">
              <div className="rounded-lg border bg-card p-3">
                <h4 className="text-sm font-medium mb-2">Your Activity</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Posts</span>
                    <span>{currentUser.postsCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Followers</span>
                    <span>{currentUser.followersCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Following</span>
                    <span>{currentUser.followingCount}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}