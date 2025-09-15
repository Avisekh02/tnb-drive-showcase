import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { RightSidebar } from './RightSidebar';
import { cn } from '@/lib/utils';

export function MainLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        onMenuClick={toggleMobileMenu}
        onSearchFocus={() => {
          // Handle search focus - could open search modal
          console.log('Search focused');
        }}
      />
      
      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className={cn(
          'hidden md:block sticky top-16 h-[calc(100vh-4rem)]',
          sidebarCollapsed && 'w-16'
        )}>
          <Sidebar collapsed={sidebarCollapsed} />
        </aside>

        {/* Mobile Sidebar Overlay */}
        {mobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <aside className="fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] w-64 md:hidden">
              <Sidebar />
            </aside>
          </>
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="mx-auto max-w-6xl p-4 md:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Content Area */}
              <div className="lg:col-span-2 xl:col-span-3">
                <Outlet />
              </div>
              
              {/* Right Sidebar - Hidden on mobile and small screens */}
              <div className="hidden lg:block">
                <RightSidebar />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Sidebar Toggle Button - Desktop */}
      <button
        onClick={toggleSidebar}
        className={cn(
          'fixed left-2 top-20 z-30 hidden md:flex h-8 w-8 items-center justify-center',
          'rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90',
          'transition-all duration-200',
          sidebarCollapsed ? 'translate-x-14' : 'translate-x-60'
        )}
      >
        <svg 
          className={cn('h-4 w-4 transition-transform', sidebarCollapsed && 'rotate-180')}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </div>
  );
}