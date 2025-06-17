
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Play, 
  Star, 
  Users, 
  Trophy, 
  Clock, 
  TrendingUp,
  Code2,
  Database,
  Smartphone,
  Globe,
  ChevronRight,
  CheckCircle
} from "lucide-react";
import { Hero3D } from "@/components/3d/Hero3D";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { FloatingElements } from "@/components/animations/FloatingElements";
import { VideoPlayer } from "@/components/videos/VideoPlayer";

const Index = () => {
  
  const featuredCourses = [
    {
      id: 1,
      title: "Complete JavaScript Mastery",
      description: "From beginner to advanced JavaScript developer",
      instructor: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
      rating: 4.9,
      students: 12453,
      price: 89.99,
      originalPrice: 199.99,
      duration: "24h 30m",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      level: "Beginner",
      category: "Web Development",
      isFree: false
    },
    {
      id: 2,
      title: "Python for Data Science",
      description: "Master Python programming for data analysis & ML",
      instructor: "Dr. Michael Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      rating: 4.8,
      students: 8921,
      price: 0,
      duration: "18h 45m",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      level: "Intermediate",
      category: "Data Science",
      isFree: true
    },
    {
      id: 3,
      title: "React & Next.js Complete Guide",
      description: "Build web applications with React and Next.js",
      instructor: "Alex Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      rating: 4.9,
      students: 15678,
      price: 79.99,
      originalPrice: 149.99,
      duration: "32h 15m",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      level: "Advanced",
      category: "Frontend",
      isFree: false
    }
  ];

  const categories = [
    { name: "Web Development", icon: Globe, courses: 127, color: "bg-blue-500" },
    { name: "Mobile Development", icon: Smartphone, courses: 89, color: "bg-green-500" },
    { name: "Data Science", icon: Database, courses: 64, color: "bg-purple-500" },
    { name: "Programming", icon: Code2, courses: 156, color: "bg-orange-500" },
  ];

  const stats = [
    { label: "Students", value: "50K+", icon: Users },
    { label: "Courses", value: "500+", icon: Play },
    { label: "Instructors", value: "200+", icon: Trophy },
    { label: "Hours of Content", value: "2000+", icon: Clock },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with 3D and Animations */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-300">
        <FloatingElements />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <Badge className="mb-4 bg-white/10 text-white border-white/20 hover:bg-white/20">
                  🚀 New courses added weekly
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Master
                <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  Programming
                </span>
                Skills Today
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-100 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Join thousands of developers learning cutting-edge technologies with our expert-led courses. 
                From beginner to advanced, we have everything you need.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8">
                    Start Learning Free
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-green/10">
                    Browse Courses
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Hero3D />
            </motion.div>
          </div>
        </div>
        </section>
     

      {/* Stats Section with Animated Counters */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-200"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    <AnimatedCounter 
                      from={0} 
                      to={parseInt(stat.value.replace(/\D/g, '') || '0')} 
                      suffix={stat.value.replace(/\d/g, '')}
                    />
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
       

      {/* Video Demo Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              <Play className="mr-1 h-3 w-3" />
              See It In Action
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Experience Interactive Learning
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch how our platform makes coding education engaging and effective
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <VideoPlayer 
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              poster="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=450&fit=crop"
              title="Interactive Coding Environment Demo"
              className="max-w-4xl mx-auto h-96"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Courses with Enhanced Animations */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              <TrendingUp className="mr-1 h-3 w-3" />
              Featured Courses
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Start Your Learning Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked courses by industry experts to help you master the most in-demand skills
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-40 shadow-lg overflow-hidden">
                  <div className="relative">
                    <motion.img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                    {course.isFree && (
                      <Badge className="absolute top-3 left-3 bg-green-500 text-white">
                        FREE
                      </Badge>
                    )}
                    <Badge className="absolute top-3 right-3 bg-black/70 text-white">
                      {course.level}
                    </Badge>
                    <motion.div 
                      className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button className="bg-white text-black hover:bg-gray-100">
                          <Play className="mr-2 h-4 w-4" />
                          Preview
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {course.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {course.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center space-x-2 mb-4">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={course.avatar} />
                        <AvatarFallback>{course.instructor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">{course.instructor}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      {course.isFree ? (
                        <span className="text-2xl font-bold text-green-600">FREE</span>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-foreground">${course.price}</span>
                          {course.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${course.originalPrice}
                            </span>
                          )}
                        </div>
                      )}
                      <Link to={`/course/${course.id}`}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            {course.isFree ? 'Start Free' : 'Enroll Now'}
                          </Button>
                        </motion.div>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/courses">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="group">
                  View All Courses
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories with Animations */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Explore Categories
            </h2>
            <p className="text-xl text-muted-foreground">
              Find the perfect course for your career goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link to="/courses" className="group">
                    <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
                      <CardContent className="p-8">
                        <motion.div 
                          className={`inline-flex items-center justify-center w-16 h-16 ${category.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-200`}
                          whileHover={{ rotate: 10 }}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-muted-foreground">
                          <AnimatedCounter from={0} to={category.courses} /> courses available
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section with Animation */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 relative overflow-hidden">
        <FloatingElements />
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Join thousands of successful developers who started their career with us
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/courses">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8">
                  Browse Free Courses
                </Button>
              </motion.div>
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Get Premium Access
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
