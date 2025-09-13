import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Upload, X, File, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FileUploadAreaProps {
  onClose: () => void;
}

interface UploadFile {
  id: string;
  file: File;
  progress: number;
  status: "uploading" | "completed" | "error";
}

export function FileUploadArea({ onClose }: FileUploadAreaProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadFiles, setUploadFiles] = useState<UploadFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFiles(files);
    }
  };

  const handleFiles = (files: File[]) => {
    const newUploadFiles: UploadFile[] = files.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      progress: 0,
      status: "uploading" as const,
    }));

    setUploadFiles((prev) => [...prev, ...newUploadFiles]);

    // Simulate file upload
    newUploadFiles.forEach((uploadFile) => {
      simulateUpload(uploadFile.id);
    });
  };

  const simulateUpload = (fileId: string) => {
    const interval = setInterval(() => {
      setUploadFiles((prev) =>
        prev.map((file) => {
          if (file.id === fileId) {
            const newProgress = Math.min(file.progress + Math.random() * 30, 100);
            const isCompleted = newProgress >= 100;
            
            return {
              ...file,
              progress: newProgress,
              status: isCompleted ? "completed" : "uploading",
            };
          }
          return file;
        })
      );
    }, 500);

    // Stop simulation when complete
    setTimeout(() => {
      clearInterval(interval);
      setUploadFiles((prev) =>
        prev.map((file) =>
          file.id === fileId
            ? { ...file, progress: 100, status: "completed" }
            : file
        )
      );
      
      toast({
        title: "Upload completed",
        description: "Your files have been uploaded successfully.",
      });
    }, 3000 + Math.random() * 2000);
  };

  const removeFile = (fileId: string) => {
    setUploadFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <Card className="border-2 border-dashed border-muted-foreground/25 relative">
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-2 right-2 z-10"
        onClick={onClose}
      >
        <X className="w-4 h-4" />
      </Button>
      
      <CardContent className="p-8">
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragOver
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25 hover:border-primary/50"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Upload className="w-6 h-6 text-primary" />
          </div>
          
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Drop files here to upload
          </h3>
          <p className="text-muted-foreground mb-4">
            or click to browse from your computer
          </p>
          
          <Button 
            onClick={() => fileInputRef.current?.click()}
            className="tnb-gradient-primary text-white border-0 hover:opacity-90"
          >
            Choose Files
          </Button>
          
          <input
            ref={fileInputRef}
            type="file"
            multiple
            className="hidden"
            onChange={handleFileSelect}
          />
          
          <p className="text-xs text-muted-foreground mt-4">
            Maximum file size: 100MB per file
          </p>
        </div>

        {/* Upload Progress */}
        {uploadFiles.length > 0 && (
          <div className="mt-6 space-y-3">
            <h4 className="font-medium text-foreground">Uploading Files</h4>
            <div className="space-y-2">
              {uploadFiles.map((uploadFile) => (
                <div
                  key={uploadFile.id}
                  className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg"
                >
                  <File className="w-8 h-8 text-muted-foreground flex-shrink-0" />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-foreground truncate">
                        {uploadFile.file.name}
                      </p>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="text-xs">
                          {formatFileSize(uploadFile.file.size)}
                        </Badge>
                        {uploadFile.status === "completed" && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                        {uploadFile.status === "error" && (
                          <AlertCircle className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Progress value={uploadFile.progress} className="flex-1 h-2" />
                      <span className="text-xs text-muted-foreground min-w-0">
                        {Math.round(uploadFile.progress)}%
                      </span>
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(uploadFile.id)}
                    className="flex-shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}