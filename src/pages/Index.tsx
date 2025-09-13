import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Shield, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-tnb-surface to-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Cloud className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-primary">TNB Drive</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="tnb-gradient-primary text-white border-0 hover:opacity-90">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your Files, Anywhere,{" "}
              <span className="text-transparent bg-clip-text tnb-gradient-primary">
                Anytime
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Secure cloud storage that keeps your files safe, synchronized, and accessible 
              from any device. Experience the future of file management with TNB Drive.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button 
                  size="lg" 
                  className="tnb-gradient-primary text-white border-0 hover:opacity-90 px-8 py-6 text-lg"
                >
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/login">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary/5"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-tnb-surface/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose TNB Drive?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for teams and individuals who demand security, reliability, and seamless collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="tnb-shadow-md border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Bank-Level Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  End-to-end encryption and advanced security protocols keep your data safe.
                </p>
              </CardContent>
            </Card>

            <Card className="tnb-shadow-md border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Upload, download, and sync files at incredible speeds with our global network.
                </p>
              </CardContent>
            </Card>

            <Card className="tnb-shadow-md border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Share, collaborate, and work together seamlessly with powerful sharing tools.
                </p>
              </CardContent>
            </Card>

            <Card className="tnb-shadow-md border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Cross-Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Access your files from any device - desktop, mobile, or web browser.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <Cloud className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold text-primary">TNB Drive</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 TNB Drive. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;