import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Upload, 
  Plus, 
  Grid3X3, 
  List, 
  MoreVertical,
  Download,
  Share,
  Star,
  Trash2,
  Eye,
  FileText,
  Image,
  Video,
  Music,
  Archive,
  File
} from "lucide-react";
import { FileUploadArea } from "@/components/FileUploadArea";
import { useToast } from "@/hooks/use-toast";

// Mock file data
const mockFiles = [
  {
    id: "1",
    name: "Project Proposal.pdf",
    type: "pdf",
    size: "2.4 MB",
    uploadDate: "2024-01-15",
    shared: false,
    starred: true,
  },
  {
    id: "2",
    name: "Design Assets.zip",
    type: "archive",
    size: "45.2 MB",
    uploadDate: "2024-01-14",
    shared: true,
    starred: false,
  },
  {
    id: "3",
    name: "Meeting Recording.mp4",
    type: "video",
    size: "156.8 MB",
    uploadDate: "2024-01-13",
    shared: false,
    starred: false,
  },
  {
    id: "4",
    name: "Logo Design.png",
    type: "image",
    size: "892 KB",
    uploadDate: "2024-01-12",
    shared: true,
    starred: true,
  },
  {
    id: "5",
    name: "Brand Guidelines.docx",
    type: "document",
    size: "1.2 MB",
    uploadDate: "2024-01-11",
    shared: false,
    starred: false,
  },
  {
    id: "6",
    name: "Background Music.mp3",
    type: "audio",
    size: "4.7 MB",
    uploadDate: "2024-01-10",
    shared: false,
    starred: false,
  },
];

const getFileIcon = (type: string) => {
  switch (type) {
    case "pdf":
    case "document":
      return <FileText className="w-8 h-8 text-red-500" />;
    case "image":
      return <Image className="w-8 h-8 text-green-500" />;
    case "video":
      return <Video className="w-8 h-8 text-blue-500" />;
    case "audio":
      return <Music className="w-8 h-8 text-purple-500" />;
    case "archive":
      return <Archive className="w-8 h-8 text-orange-500" />;
    default:
      return <File className="w-8 h-8 text-gray-500" />;
  }
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export function FileArea() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showUploadArea, setShowUploadArea] = useState(false);
  const { toast } = useToast();

  const handleFileAction = (action: string, fileName: string) => {
    toast({
      title: `${action} action`,
      description: `${action} performed on ${fileName}`,
    });
  };

  const handleCreateNew = (type: string) => {
    toast({
      title: "Create new",
      description: `Creating new ${type}...`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Drive</h1>
          <p className="text-muted-foreground">Manage your files and folders</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
          >
            <Grid3X3 className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Upload and Create Actions */}
      <div className="flex flex-wrap items-center gap-3">
        <Button 
          onClick={() => setShowUploadArea(!showUploadArea)}
          className="tnb-gradient-primary text-white border-0 hover:opacity-90"
        >
          <Upload className="w-4 h-4 mr-2" />
          Upload Files
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              New
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background border">
            <DropdownMenuItem onClick={() => handleCreateNew("folder")}>
              Create Folder
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleCreateNew("document")}>
              New Document
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleCreateNew("spreadsheet")}>
              New Spreadsheet
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleCreateNew("presentation")}>
              New Presentation
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* File Upload Area */}
      {showUploadArea && (
        <FileUploadArea onClose={() => setShowUploadArea(false)} />
      )}

      {/* Files Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">Recent Files</h2>
          <Badge variant="secondary">{mockFiles.length} files</Badge>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {mockFiles.map((file) => (
              <Card key={file.id} className="group hover:shadow-md transition-all duration-200 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="flex-shrink-0">
                      {getFileIcon(file.type)}
                    </div>
                    <div className="text-center w-full">
                      <h3 className="font-medium text-sm text-foreground truncate w-full" title={file.name}>
                        {file.name}
                      </h3>
                      <div className="flex items-center justify-center space-x-2 mt-1">
                        <p className="text-xs text-muted-foreground">{file.size}</p>
                        {file.starred && <Star className="w-3 h-3 text-yellow-500 fill-current" />}
                        {file.shared && <Badge variant="secondary" className="text-xs">Shared</Badge>}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {formatDate(file.uploadDate)}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="ghost" onClick={() => handleFileAction("Preview", file.name)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => handleFileAction("Download", file.name)}>
                        <Download className="w-4 h-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="sm" variant="ghost">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-background border">
                          <DropdownMenuItem onClick={() => handleFileAction("Share", file.name)}>
                            <Share className="mr-2 h-4 w-4" />
                            Share
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleFileAction("Star", file.name)}>
                            <Star className="mr-2 h-4 w-4" />
                            {file.starred ? "Unstar" : "Star"}
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            onClick={() => handleFileAction("Delete", file.name)}
                            className="text-destructive"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {mockFiles.map((file) => (
              <Card key={file.id} className="hover:bg-muted/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1 min-w-0">
                      <div className="flex-shrink-0">
                        {getFileIcon(file.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-foreground truncate">{file.name}</h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <p className="text-sm text-muted-foreground">{file.size}</p>
                          <p className="text-sm text-muted-foreground">{formatDate(file.uploadDate)}</p>
                          {file.starred && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                          {file.shared && <Badge variant="secondary" className="text-xs">Shared</Badge>}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Button size="sm" variant="ghost" onClick={() => handleFileAction("Preview", file.name)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => handleFileAction("Download", file.name)}>
                        <Download className="w-4 h-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="sm" variant="ghost">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-background border">
                          <DropdownMenuItem onClick={() => handleFileAction("Share", file.name)}>
                            <Share className="mr-2 h-4 w-4" />
                            Share
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleFileAction("Star", file.name)}>
                            <Star className="mr-2 h-4 w-4" />
                            {file.starred ? "Unstar" : "Star"}
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            onClick={() => handleFileAction("Delete", file.name)}
                            className="text-destructive"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}