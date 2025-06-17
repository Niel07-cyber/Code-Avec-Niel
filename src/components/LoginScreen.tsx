
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Github, 
  Chrome,
  Star,
  Users,
  Trophy,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Moon,
  Sun,
  Zap,
  BookOpen,
  Award,
  TrendingUp
} from "lucide-react";

interface LoginScreenProps {
  onLogin: () => void;
}

export const LoginScreen = ({ onLogin }: LoginScreenProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: ""
  });

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    const isDark = stored === 'true';
    setIsDarkMode(isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      onLogin();
    }, 1000);
  };

  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "500+ Premium Courses",
      description: "Learn from industry experts with hands-on projects"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certification Programs",
      description: "Get recognized credentials for your achievements"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Career Growth",
      description: "95% of students advance their careers within 6 months"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-300">
      {/* Header */}
      <header className="px-6 py-4 relative z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Code2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 dark:from-blue-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              CodewithNiel
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleDarkMode}
              className="rounded-full w-10 h-10 p-0"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </Button>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-120px)]">
            
            {/* Left Side - Hero Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-blue-900/50 text-blue-700 dark:text-white-300 border-none">
                  <Zap className="h-3 w-3 mr-1" />
                  Join 50,000+ developers worldwide
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gray-900 dark:text-white">Code Your</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 dark:from-blue-400 dark:via-green-400 dark:to-indigo-400 bg-clip-text text-transparent">
                    Future Today
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                  Master cutting-edge programming skills with our interactive courses, 
                  real-world projects, and expert mentorship. Start your journey to becoming 
                  a professional developer.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {features.map((feature, index) => (
                  <div key={index} className="group">
                    <div className="p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                      <div className="text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">50K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent mb-2">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Expert Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">95%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-0 shadow-2xl shadow-blue-500/10 dark:shadow-blue-400/5">
                  <CardHeader className="text-center pb-8">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 flex items-center justify-center mb-4">
                      <Code2 className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      {isLogin ? "Welcome Back!" : "Join CodewithNiel"}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {isLogin 
                        ? "Continue your coding journey" 
                        : "Start your programming career today"
                      }
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {!isLogin && (
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Full Name</Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                            className="h-12 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                            required
                          />
                        </div>
                      )}
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="h-12 pl-11 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="h-12 pl-11 pr-11 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                            value={formData.password}
                            onChange={(e) => setFormData(prev => ({...prev, password: e.target.value}))}
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-12 px-3 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                          </Button>
                        </div>
                      </div>

                      {!isLogin && (
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword" className="text-gray-700 dark:text-gray-300">Confirm Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <Input
                              id="confirmPassword"
                              type="password"
                              placeholder="••••••••"
                              className="h-12 pl-11 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                              value={formData.confirmPassword}
                              onChange={(e) => setFormData(prev => ({...prev, confirmPassword: e.target.value}))}
                              required
                            />
                          </div>
                        </div>
                      )}

                      <Button 
                        type="submit" 
                        className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-green-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        {isLogin ? "Sign In" : "Create Account"}
                      </Button>
                    </form>

                    <div className="relative">
                      <Separator className="bg-gray-200 dark:bg-gray-700" />
                      <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 px-3 text-sm text-gray-500 dark:text-gray-400">
                        or continue with
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="h-12 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                        <Github className="h-5 w-5 mr-2" />
                        GitHub
                      </Button>
                      <Button variant="outline" className="h-12 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                        <Chrome className="h-5 w-5 mr-2" />
                        Google
                      </Button>
                    </div>

                    <div className="text-center">
                      <Button
                        variant="link"
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                      >
                        {isLogin 
                          ? "Don't have an account? Sign up" 
                          : "Already have an account? Sign in"
                        }
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-400 bg-clip-text text-transparent">
                  CodewithNiel
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Empowering developers worldwide with cutting-edge programming education and hands-on learning experiences.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Courses</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Mobile Development</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Data Science</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">DevOps & Cloud</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
              <div className="flex space-x-3">
                <a
                href="https://mail.google.com/mail/u/1/#inbox?compose=new"
                target="_blank"
                rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-blue-50 dark:hover:bg-blue-900/30">
                  <Mail className="h-4 w-4" /> 
                </Button>
                </a>
                <a
                href="https://github.com/Niel07-cyber"
                target="_blank"
                rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-blue-50 dark:hover:bg-blue-900/30">
                  <Github className="h-4 w-4" />
                </Button></a>
                 <a
                href="https://www.linkedin.com/in/othniel-aryee-9501a0239/"
                target="_blank"
                rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-blue-50 dark:hover:bg-blue-900/30">
                  <Linkedin className="h-4 w-4" />
                </Button></a>
                 <a
                href="https://www.youtube.com/channel/UCq-DRcKaE6xCkf39CPABPbA"
                target="_blank"
                rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-blue-50 dark:hover:bg-blue-900/30">
                  <Youtube className="h-4 w-4" />
                </Button></a>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-200 dark:bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <p>&copy; 2025 CodewithNiel. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
