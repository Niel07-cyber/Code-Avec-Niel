import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Star, 
  Users, 
  Clock, 
  Globe,
  Award,
  Download,
  Heart,
  Share2,
  ChevronRight,
  PlayCircle,
  Lock,
  CheckCircle,
  BookOpen,
  MessageSquare,
  ThumbsUp
} from "lucide-react";
import { Code2 } from "lucide-react";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Enhanced course data with unique descriptions
  const coursesData = {
    "1": {
      id: 1,
      title: "Complete JavaScript Mastery",
      description: "Master JavaScript from basics to advanced concepts with hands-on projects and real-world applications. This comprehensive course covers everything you need to become a proficient JavaScript developer.",
      instructor: {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
        bio: "Senior Full Stack Developer with 8+ years of experience at Google and Microsoft",
        students: 45000,
        courses: 12,
        rating: 4.9
      },
      rating: 4.9,
      reviews: 2847,
      students: 12453,
      price: 89.99,
      originalPrice: 199.99,
      duration: "24h 30m",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop",
      level: "Beginner",
      category: "Web Development",
      language: "English",
      subtitles: ["English", "Spanish", "French"],
      lastUpdated: "January 2024",
      lessons: 156,
      assignments: 12,
      projects: 4,
      certificate: true,
      isFree: false
    },
    "2": {
      id: 2,
      title: "Python for Data Science & Machine Learning",
      description: "Master Python programming for data analysis and machine learning with comprehensive hands-on projects. Learn pandas, numpy, scikit-learn, and build real-world data science applications.",
      instructor: {
        name: "Dr. Michael Chen",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
        bio: "Data Science PhD with 10+ years at Meta and Netflix",
        students: 32000,
        courses: 8,
        rating: 4.8
      },
      rating: 4.8,
      reviews: 1824,
      students: 8921,
      price: 0,
      originalPrice: 0,
      duration: "18h 45m",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
      level: "Intermediate",
      category: "Data Science",
      language: "English",
      subtitles: ["English", "Spanish"],
      lastUpdated: "February 2024",
      lessons: 98,
      assignments: 8,
      projects: 3,
      certificate: true,
      isFree: true
    },
    "3": {
      id: 3,
      title: "React & Next.js Complete Guide",
      description: "Build modern web applications with React and Next.js using the latest features and best practices. Master hooks, context, server-side rendering, and deployment strategies.",
      instructor: {
        name: "Alex Rodriguez",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
        bio: "Frontend Architect with React expertise at Airbnb",
        students: 28000,
        courses: 6,
        rating: 4.9
      },
      rating: 4.9,
      reviews: 3247,
      students: 15678,
      price: 79.99,
      originalPrice: 149.99,
      duration: "32h 15m",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=450&fit=crop",
      level: "Advanced",
      category: "Frontend",
      language: "English",
      subtitles: ["English", "French"],
      lastUpdated: "January 2024",
      lessons: 201,
      assignments: 15,
      projects: 6,
      certificate: true,
      isFree: false
    },
    "4": {
      id: 4,
      title: "Java Programming Fundamentals",
      description: "Learn Java from scratch with object-oriented programming, collections, multithreading, and spring framework. Perfect for beginners and career changers looking to master enterprise development.",
      instructor: {
        name: "Jennifer Kim",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
        bio: "Senior Java Developer with expertise in Spring Boot and enterprise applications",
        students: 25000,
        courses: 5,
        rating: 4.7
      },
      rating: 4.7,
      reviews: 1456,
      students: 9234,
      price: 69.99,
      originalPrice: 139.99,
      duration: "28h 20m",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=450&fit=crop",
      level: "Beginner",
      category: "Backend",
      language: "English",
      subtitles: ["English", "Spanish"],
      lastUpdated: "December 2023",
      lessons: 134,
      assignments: 10,
      projects: 5,
      certificate: true,
      isFree: false
    },
    "5": {
      id: 5,
      title: "Cloud Computing with AWS",
      description: "Master Amazon Web Services with hands-on labs. Learn EC2, S3, Lambda, RDS, and deployment strategies. Prepare for AWS certification exams and cloud architecture.",
      instructor: {
        name: "David Park",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
        bio: "AWS Solutions Architect with 12+ years in cloud infrastructure",
        students: 18000,
        courses: 7,
        rating: 4.8
      },
      rating: 4.8,
      reviews: 2156,
      students: 7891,
      price: 99.99,
      originalPrice: 199.99,
      duration: "26h 40m",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop",
      level: "Intermediate",
      category: "Cloud",
      language: "English",
      subtitles: ["English", "French", "German"],
      lastUpdated: "January 2024",
      lessons: 167,
      assignments: 12,
      projects: 8,
      certificate: true,
      isFree: false
    },
    "6": {
      id: 6,
      title: "Mobile App Development with Flutter",
      description: "Build cross-platform mobile apps with Flutter and Dart. Learn widgets, state management, animations, and publish to app stores. Create beautiful native apps.",
      instructor: {
        name: "Maria Garcia",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=64&h=64&fit=crop&crop=face",
        bio: "Mobile App Developer with Flutter expertise and 200+ published apps",
        students: 15000,
        courses: 4,
        rating: 4.6
      },
      rating: 4.6,
      reviews: 987,
      students: 5432,
      price: 0,
      originalPrice: 0,
      duration: "22h 15m",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop",
      level: "Intermediate",
      category: "Mobile",
      language: "English",
      subtitles: ["English", "Spanish"],
      lastUpdated: "November 2023",
      lessons: 145,
      assignments: 8,
      projects: 6,
      certificate: true,
      isFree: true
    },
    "7": {
      id: 7,
      title: "C++ Game Development Masterclass",
      description: "Create stunning 2D and 3D games using C++ and modern game engines. Learn game physics, graphics programming, AI algorithms, memory management, and optimization techniques.",
      instructor: {
        name: "Robert Thompson",
        avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=64&h=64&fit=crop&crop=face",
        bio: "Game Developer with 15+ years at Epic Games and Ubisoft",
        students: 12000,
        courses: 3,
        rating: 4.7
      },
      rating: 4.7,
      reviews: 1234,
      students: 6789,
      price: 94.99,
      originalPrice: 179.99,
      duration: "35h 20m",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop",
      level: "Advanced",
      category: "Game Development",
      language: "English",
      subtitles: ["English", "German"],
      lastUpdated: "October 2023",
      lessons: 189,
      assignments: 18,
      projects: 8,
      certificate: true,
      isFree: false
    },
    "8": {
      id: 8,
      title: "Cybersecurity Fundamentals",
      description: "Master cybersecurity principles, ethical hacking, and network security. Learn penetration testing, vulnerability assessment, cryptography, and security frameworks.",
      instructor: {
        name: "Dr. Lisa Chang",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=face",
        bio: "Cybersecurity Expert with PhD in Information Security and 12+ years in the field",
        students: 8500,
        courses: 6,
        rating: 4.8
      },
      rating: 4.8,
      reviews: 892,
      students: 4321,
      price: 84.99,
      originalPrice: 159.99,
      duration: "20h 30m",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=450&fit=crop",
      level: "Intermediate",
      category: "Security",
      language: "English",
      subtitles: ["English", "Spanish", "French"],
      lastUpdated: "December 2023",
      lessons: 98,
      assignments: 14,
      projects: 5,
      certificate: true,
      isFree: false
    },
    "9": {
      id: 9,
      title: "UI/UX Design Complete Course",
      description: "Master user interface and user experience design principles. Learn Figma, Adobe XD, prototyping, user research, wireframing, and design systems.",
      instructor: {
        name: "Emily Rodriguez",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
        bio: "Senior UX Designer with 10+ years at Apple and Adobe",
        students: 22000,
        courses: 7,
        rating: 4.6
      },
      rating: 4.6,
      reviews: 1567,
      students: 8765,
      price: 74.99,
      originalPrice: 149.99,
      duration: "25h 45m",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
      level: "Beginner",
      category: "Design",
      language: "English",
      subtitles: ["English", "Spanish", "French"],
      lastUpdated: "November 2023",
      lessons: 123,
      assignments: 11,
      projects: 7,
      certificate: true,
      isFree: false
    },
    "10": {
      id: 10,
      title: "SQL Database Mastery",
      description: "Master SQL and database management from fundamentals to advanced concepts. Learn MySQL, PostgreSQL, query optimization, stored procedures, and database design.",
      instructor: {
        name: "Mark Stevens",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
        bio: "Database Administrator with 15+ years at Oracle and Microsoft",
        students: 19000,
        courses: 5,
        rating: 4.7
      },
      rating: 4.7,
      reviews: 2103,
      students: 9876,
      price: 64.99,
      originalPrice: 124.99,
      duration: "19h 15m",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=450&fit=crop",
      level: "Beginner",
      category: "Database",
      language: "English",
      subtitles: ["English", "Spanish"],
      lastUpdated: "January 2024",
      lessons: 87,
      assignments: 9,
      projects: 4,
      certificate: true,
      isFree: false
    },
    "11": {
      id: 11,
      title: "Machine Learning with TensorFlow",
      description: "Dive deep into machine learning and neural networks using TensorFlow. Learn deep learning, computer vision, natural language processing, and deploy ML models.",
      instructor: {
        name: "Dr. Amanda Wilson",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=face",
        bio: "ML Research Scientist with PhD from Stanford and 8+ years at Google AI",
        students: 14000,
        courses: 4,
        rating: 4.9
      },
      rating: 4.9,
      reviews: 756,
      students: 3456,
      price: 109.99,
      originalPrice: 219.99,
      duration: "40h 30m",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop",
      level: "Advanced",
      category: "AI/ML",
      language: "English",
      subtitles: ["English", "French", "German"],
      lastUpdated: "December 2023",
      lessons: 234,
      assignments: 20,
      projects: 10,
      certificate: true,
      isFree: false
    },
    "12": {
      id: 12,
      title: "DevOps & Docker Containerization",
      description: "Master DevOps practices, Docker containerization, and Kubernetes orchestration. Learn CI/CD pipelines, infrastructure as code, and cloud deployment automation.",
      instructor: {
        name: "James Miller",
        avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=64&h=64&fit=crop&crop=face",
        bio: "DevOps Engineer with 12+ years at Amazon and Netflix",
        students: 16000,
        courses: 6,
        rating: 4.8
      },
      rating: 4.8,
      reviews: 1389,
      students: 7654,
      price: 89.99,
      originalPrice: 169.99,
      duration: "30h 10m",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=450&fit=crop",
      level: "Intermediate",
      category: "DevOps",
      language: "English",
      subtitles: ["English", "Spanish", "French"],
      lastUpdated: "January 2024",
      lessons: 156,
      assignments: 13,
      projects: 7,
      certificate: true,
      isFree: false
    }
  };

  const course = coursesData[id as keyof typeof coursesData] || coursesData["1"];

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItem = cartItems.find((item: any) => item.id === course.id);
    
    if (!existingItem) {
      cartItems.push({
        id: course.id,
        title: course.title,
        price: course.price,
        image: course.image,
        instructor: course.instructor.name
      });
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      window.dispatchEvent(new CustomEvent('cartUpdated'));
    }
  };

  const handleEnrollNow = () => {
    if (!course.isFree) {
      addToCart();
      navigate('/cart');
    } else {
      console.log('Enrolling in free course');
    }
  };

  const handlePlayVideo = (topicTitle: string) => {
    setPlayingVideo(topicTitle);
    // Simulate playing a coding video
    setTimeout(() => {
      setPlayingVideo(null);
    }, 3000);
  };

  const whatYouLearn = [
    "Master JavaScript fundamentals and advanced concepts",
    "Build real-world projects and applications",
    "Understand ES6+ features and modern JavaScript",
    "Work with APIs and asynchronous programming",
    "Learn popular JavaScript frameworks integration",
    "Best practices and clean code principles"
  ];

  const requirements = [
    "Basic computer skills and internet access",
    "No prior programming experience required",
    "A modern web browser (Chrome, Firefox, Safari)",
    "Text editor or IDE (recommendations provided)"
  ];

  const curriculum = [
    {
      title: "JavaScript Fundamentals",
      duration: "4h 30m",
      lessons: 24,
      isLocked: false,
      topics: [
        { title: "Introduction to JavaScript", duration: "12:30", isPreview: true },
        { title: "Variables and Data Types", duration: "18:45", isPreview: false },
        { title: "Functions and Scope", duration: "22:15", isPreview: false },
        { title: "Arrays and Objects", duration: "25:30", isPreview: false }
      ]
    },
    {
      title: "DOM Manipulation",
      duration: "3h 45m",
      lessons: 18,
      isLocked: false,
      topics: [
        { title: "Understanding the DOM", duration: "15:20", isPreview: true },
        { title: "Selecting Elements", duration: "20:10", isPreview: false },
        { title: "Event Handling", duration: "28:30", isPreview: false }
      ]
    },
    {
      title: "Asynchronous JavaScript",
      duration: "5h 20m",
      lessons: 22,
      isLocked: true,
      topics: [
        { title: "Promises and Async/Await", duration: "35:40", isPreview: false },
        { title: "Fetch API", duration: "25:15", isPreview: false },
        { title: "Error Handling", duration: "18:20", isPreview: false }
      ]
    }
  ];

  const reviews = [
    {
      id: 1,
      user: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      rating: 5,
      date: "2 weeks ago",
      comment: "Excellent course! Sarah explains complex concepts in a very clear and understandable way. The projects are practical and help reinforce the learning.",
      helpful: 24
    },
    {
      id: 2,
      user: "Emma Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      rating: 5,
      date: "1 month ago",
      comment: "This course transformed my understanding of JavaScript. Went from complete beginner to building my own projects. Highly recommended!",
      helpful: 18
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gray-900 dark:bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2">
              <nav className="flex items-center space-x-2 text-sm text-gray-300 mb-4">
                <Link to="/courses" className="hover:text-white">Courses</Link>
                <ChevronRight className="h-4 w-4" />
                <span>{course.category}</span>
                <ChevronRight className="h-4 w-4" />
                <span className="text-white truncate">{course.title}</span>
              </nav>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-6">{course.description}</p>

              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-gray-300">({course.reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-300">
                  <Users className="h-4 w-4" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                  <AvatarImage src={course.instructor.avatar} />
                  <AvatarFallback>{course.instructor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Created by {course.instructor.name}</p>
                  <p className="text-sm text-gray-300">{course.instructor.bio}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-6">
                <div className="flex items-center space-x-1">
                  <Globe className="h-4 w-4" />
                  <span>{course.language}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <span>Updated {course.lastUpdated}</span>
              </div>

              {/* Preview Video Section */}
              <div className="bg-gray-800 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold mb-3">Course Preview</h3>
                <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {playingVideo ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
                          <Code2 className="w-8 h-8 text-green-400" />
                        </div>
                        <p className="text-white text-lg font-semibold">Playing: {playingVideo}</p>
                        <div className="flex justify-center space-x-1 mt-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto cursor-pointer hover:bg-white/30 transition-all"
                             onClick={() => handlePlayVideo("Course Introduction")}>
                          <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                        </div>
                        <p className="text-white text-lg font-semibold">Interactive Coding Preview</p>
                        <p className="text-gray-300 text-sm">Experience live coding demonstrations</p>
                      </div>
                      <div className="absolute top-4 left-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="absolute top-8 right-8 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                      <div className="absolute bottom-6 left-12 w-4 h-4 bg-purple-400 rounded-full animate-bounce"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Course Preview Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8 shadow-xl bg-card dark:bg-card border-border">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-t-lg">
                    <Button className="bg-white/90 text-black hover:bg-white" onClick={() => handlePlayVideo("Course Preview")}>
                      <PlayCircle className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                      Preview Course
                    </Button>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-green-500">
                    Best Seller
                  </Badge>
                </div>

                <CardContent className="p-4 sm:p-6">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      {course.isFree ? (
                        <span className="text-2xl sm:text-3xl font-bold text-green-600">FREE</span>
                      ) : (
                        <>
                          <span className="text-2xl sm:text-3xl font-bold text-foreground">${course.price}</span>
                          {course.originalPrice > 0 && (
                            <span className="text-base sm:text-lg text-muted-foreground line-through">${course.originalPrice}</span>
                          )}
                        </>
                      )}
                    </div>
                    {!course.isFree && course.originalPrice > 0 && (
                      <Badge className="bg-red-100 text-red-700">
                        55% OFF - Limited Time
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700 text-base sm:text-lg py-2 sm:py-3"
                      onClick={handleEnrollNow}
                    >
                      {course.isFree ? 'Start Free' : 'Enroll Now'}
                    </Button>
                    <Button variant="outline" className="w-full" onClick={addToCart}>
                      Add to Cart
                    </Button>
                  </div>

                  <div className="text-center text-sm text-muted-foreground mb-4">
                    30-Day Money-Back Guarantee
                  </div>

                  <div className="space-y-2 sm:space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Full lifetime access</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Access on mobile and TV</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Certificate of completion</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                  </div>

                  <div className="flex space-x-2 mt-4 sm:mt-6">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Heart className="h-4 w-4 mr-1" />
                      Wishlist
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-6 sm:mb-8">
                <TabsTrigger value="overview" className="text-xs sm:text-sm">Overview</TabsTrigger>
                <TabsTrigger value="curriculum" className="text-xs sm:text-sm">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor" className="text-xs sm:text-sm">Instructor</TabsTrigger>
                <TabsTrigger value="reviews" className="text-xs sm:text-sm">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>What you'll learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {whatYouLearn.map((item, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>This course includes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Play className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{course.duration} on-demand video</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{course.assignments} assignments</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Download className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Downloadable resources</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Curriculum</CardTitle>
                    <CardDescription>
                      {course.lessons} lessons • {course.duration} total length
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {curriculum.map((section, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden border-border">
                        <div className="bg-muted p-4 flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">{section.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {section.lessons} lessons • {section.duration}
                            </p>
                          </div>
                          {section.isLocked && (
                            <Lock className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                        <div className="divide-y divide-border">
                          {section.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="p-3 sm:p-4 flex items-center justify-between hover:bg-muted/50">
                              <div className="flex items-center space-x-3 flex-1 min-w-0">
                                {topic.isPreview ? (
                                  <button 
                                    onClick={() => handlePlayVideo(topic.title)}
                                    className="flex-shrink-0"
                                  >
                                    <PlayCircle className="h-4 w-4 text-blue-500 hover:text-blue-600" />
                                  </button>
                                ) : section.isLocked ? (
                                  <Lock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                ) : (
                                  <button 
                                    onClick={() => handlePlayVideo(topic.title)}
                                    className="flex-shrink-0"
                                  >
                                    <Play className="h-4 w-4 text-muted-foreground hover:text-blue-500" />
                                  </button>
                                )}
                                <span className={`text-sm truncate ${topic.isPreview ? 'text-blue-600 dark:text-blue-400 font-medium' : ''}`}>
                                  {topic.title}
                                </span>
                                {topic.isPreview && (
                                  <Badge variant="outline" className="text-xs hidden sm:inline-flex">Preview</Badge>
                                )}
                              </div>
                              <span className="text-sm text-muted-foreground flex-shrink-0 ml-2">{topic.duration}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="instructor">
                <Card>
                  <CardHeader>
                    <CardTitle>About the Instructor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start space-x-4 mb-6">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src={course.instructor.avatar} />
                        <AvatarFallback>{course.instructor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{course.instructor.name}</h3>
                        <p className="text-muted-foreground mb-4">{course.instructor.bio}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div className="text-center">
                            <div className="font-semibold text-lg">{course.instructor.rating}</div>
                            <div className="text-muted-foreground">Instructor Rating</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-lg">{course.instructor.students.toLocaleString()}</div>
                            <div className="text-muted-foreground">Students</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-lg">{course.instructor.courses}</div>
                            <div className="text-muted-foreground">Courses</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-lg">5+</div>
                            <div className="text-muted-foreground">Years Experience</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Reviews</CardTitle>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-2xl font-bold">{course.rating}</span>
                      </div>
                      <span className="text-muted-foreground">({course.reviews.toLocaleString()} reviews)</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-border pb-6 last:border-b-0">
                        <div className="flex items-start space-x-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={review.avatar} />
                            <AvatarFallback>{review.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-semibold">{review.user}</span>
                              <div className="flex">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                            <p className="text-foreground mb-3">{review.comment}</p>
                            <div className="flex items-center space-x-4">
                              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                                <ThumbsUp className="h-4 w-4 mr-1" />
                                Helpful ({review.helpful})
                              </Button>
                              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                                <MessageSquare className="h-4 w-4 mr-1" />
                                Reply
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar with related courses */}
          <div className="mt-8 lg:mt-0">
            <Card>
              <CardHeader>
                <CardTitle>More Courses by {course.instructor.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex space-x-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                    <img 
                      src={`https://images.unsplash.com/photo-148859${8000 + item}-random?w=80&h=60&fit=crop`}
                      alt="Course thumbnail"
                      className="w-16 h-12 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-foreground truncate">
                        Advanced JavaScript Concepts
                      </h4>
                      <p className="text-xs text-muted-foreground">4.8 ⭐ • 2.3k students</p>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">$79.99</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
