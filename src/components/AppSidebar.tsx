import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { 
  Cloud, 
  HardDrive, 
  Users, 
  Clock, 
  Trash2, 
  Settings,
  Star,
  Download
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const menuItems = [
  { title: "My Drive", url: "/dashboard", icon: HardDrive },
  { title: "Shared with me", url: "/dashboard/shared", icon: Users },
  { title: "Recent", url: "/dashboard/recent", icon: Clock },
  { title: "Starred", url: "/dashboard/starred", icon: Star },
  { title: "Trash", url: "/dashboard/trash", icon: Trash2 },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={state === "collapsed" ? "w-14" : "w-64"} collapsible="icon">
      <SidebarHeader className="p-4">
        {state !== "collapsed" && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Cloud className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">TNB Drive</span>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={isActive(item.url) ? "bg-accent text-accent-foreground" : ""}
                  >
                    <Link to={item.url} className="flex items-center">
                      <item.icon className="w-5 h-5" />
                      {state !== "collapsed" && <span className="ml-3">{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {state !== "collapsed" && (
          <SidebarGroup>
            <SidebarGroupLabel>Storage</SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="px-3 py-2">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span>15 GB of 100 GB used</span>
                </div>
                <Progress value={15} className="h-2 mb-3" />
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-accent border-accent hover:bg-accent/10"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Get more storage
                </Button>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter className="p-4">
        {state !== "collapsed" && (
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/dashboard/settings" className="flex items-center">
                  <Settings className="w-5 h-5" />
                  <span className="ml-3">Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}