import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Cloud, ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate email sending
    setTimeout(() => {
      setIsLoading(false);
      setEmailSent(true);
      toast({
        title: "Reset email sent!",
        description: "Check your inbox for password reset instructions.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-tnb-surface to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Cloud className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-3xl font-bold text-primary">TNB Drive</span>
          </Link>
        </div>

        <Card className="tnb-shadow-lg border-0">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">
              {emailSent ? "Check your email" : "Forgot your password?"}
            </CardTitle>
            <CardDescription>
              {emailSent 
                ? "We've sent a password reset link to your email address"
                : "Enter your email address and we'll send you a link to reset your password"
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!emailSent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-11 tnb-gradient-primary text-white border-0 hover:opacity-90"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    We've sent a password reset link to:
                  </p>
                  <p className="font-medium text-foreground">{email}</p>
                </div>
                <div className="text-xs text-muted-foreground">
                  Didn't receive the email? Check your spam folder or{" "}
                  <button 
                    onClick={() => setEmailSent(false)}
                    className="text-primary hover:underline"
                  >
                    try again
                  </button>
                </div>
              </div>
            )}

            <div className="flex items-center justify-center">
              <Link 
                to="/login" 
                className="inline-flex items-center text-sm text-primary hover:underline"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to sign in
              </Link>
            </div>

            {emailSent && (
              <Button 
                asChild
                className="w-full h-11 tnb-gradient-primary text-white border-0 hover:opacity-90"
              >
                <Link to="/login">
                  Return to Sign In
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>

        <div className="text-center mt-8 text-xs text-muted-foreground">
          Remember your password?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;