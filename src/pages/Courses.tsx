
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Users, 
  Clock, 
  Filter,
  Search,
  Code2,
  Database,
  Smartphone,
  Cloud,
  Gamepad2,
  Shield,
  Palette,
  BarChart3,
  Cpu,
  Globe,
  Zap,
  Brain
} from "lucide-react";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  // Enhanced courses data with unique descriptions
  const courses = [
    {
      id: 1,
      title: "Complete JavaScript Mastery",
      description: "Master JavaScript from basics to advanced concepts with hands-on projects and real-world applications. Learn ES6+, async programming, DOM manipulation, and modern frameworks integration.",
      instructor: "Sarah Johnson",
      rating: 4.9,
      reviews: 2847,
      students: 12453,
      price: 89.99,
      originalPrice: 199.99,
      duration: "24h 30m",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=225&fit=crop",
      level: "Beginner",
      category: "Web Development",
      isFree: false,
      icon: Code2
    },
    {
      id: 2,
      title: "Python for Data Science & Machine Learning",
      description: "Comprehensive Python course focusing on data analysis, visualization, and machine learning. Master pandas, numpy, scikit-learn, matplotlib, and build real-world data science projects.",
      instructor: "Dr. Michael Chen",
      rating: 4.8,
      reviews: 1824,
      students: 8921,
      price: 0,
      originalPrice: 0,
      duration: "18h 45m",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop",
      level: "Intermediate",
      category: "Data Science",
      isFree: true,
      icon: BarChart3
    },
    {
      id: 3,
      title: "React & Next.js Complete Guide",
      description: "Build modern web applications with React and Next.js using the latest features. Master hooks, context, server-side rendering, API routes, and deployment strategies for production apps.",
      instructor: "Alex Rodriguez",
      rating: 4.9,
      reviews: 3247,
      students: 15678,
      price: 79.99,
      originalPrice: 149.99,
      duration: "32h 15m",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=225&fit=crop",
      level: "Advanced",
      category: "Frontend",
      isFree: false,
      icon: Code2
    },
    {
      id: 4,
      title: "Java Programming Fundamentals",
      description: "Learn Java from scratch with object-oriented programming principles. Master classes, inheritance, polymorphism, collections, multithreading, and enterprise development with Spring Boot.",
      instructor: "Jennifer Kim",
      rating: 4.7,
      reviews: 1456,
      students: 9234,
      price: 69.99,
      originalPrice: 139.99,
      duration: "28h 20m",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=225&fit=crop",
      level: "Beginner",
      category: "Backend",
      isFree: false,
      icon: Cpu
    },
    {
      id: 5,
      title: "Cloud Computing with AWS",
      description: "Master Amazon Web Services with hands-on labs and real-world projects. Learn EC2, S3, Lambda, RDS, CloudFormation, and deployment strategies. Prepare for AWS certification exams.",
      instructor: "David Park",
      rating: 4.8,
      reviews: 2156,
      students: 7891,
      price: 99.99,
      originalPrice: 199.99,
      duration: "26h 40m",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=225&fit=crop",
      level: "Intermediate",
      category: "Cloud",
      isFree: false,
      icon: Cloud
    },
    {
      id: 6,
      title: "Mobile App Development with Flutter",
      description: "Build cross-platform mobile apps with Flutter and Dart. Master widgets, state management, animations, native integrations, and publish to both iOS and Android app stores.",
      instructor: "Maria Garcia",
      rating: 4.6,
      reviews: 987,
      students: 5432,
      price: 0,
      originalPrice: 0,
      duration: "22h 15m",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=225&fit=crop",
      level: "Intermediate",
      category: "Mobile",
      isFree: true,
      icon: Smartphone
    },
    {
      id: 7,
      title: "C++ Game Development Masterclass",
      description: "Create stunning 2D and 3D games using C++ and modern game engines. Learn game physics, graphics programming, AI algorithms, memory management, and optimization techniques for high-performance gaming.",
      instructor: "Robert Thompson",
      rating: 4.7,
      reviews: 1234,
      students: 6789,
      price: 94.99,
      originalPrice: 179.99,
      duration: "35h 20m",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=225&fit=crop",
      level: "Advanced",
      category: "Game Development",
      isFree: false,
      icon: Gamepad2
    },
    {
      id: 8,
      title: "Cybersecurity Fundamentals",
      description: "Master cybersecurity principles, ethical hacking, and network security. Learn penetration testing, vulnerability assessment, cryptography, and security frameworks to protect digital assets.",
      instructor: "Dr. Lisa Chang",
      rating: 4.8,
      reviews: 892,
      students: 4321,
      price: 84.99,
      originalPrice: 159.99,
      duration: "20h 30m",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=225&fit=crop",
      level: "Intermediate",
      category: "Security",
      isFree: false,
      icon: Shield
    },
    {
      id: 9,
      title: "UI/UX Design Complete Course",
      description: "Master user interface and user experience design principles. Learn Figma, Adobe XD, prototyping, user research, wireframing, and design systems for creating exceptional digital experiences.",
      instructor: "Emily Rodriguez",
      rating: 4.6,
      reviews: 1567,
      students: 8765,
      price: 74.99,
      originalPrice: 149.99,
      duration: "25h 45m",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=225&fit=crop",
      level: "Beginner",
      category: "Design",
      isFree: false,
      icon: Palette
    },
    {
      id: 10,
      title: "SQL Database Mastery",
      description: "Master SQL and database management from fundamentals to advanced concepts. Learn MySQL, PostgreSQL, query optimization, stored procedures, triggers, and database design principles.",
      instructor: "Mark Stevens",
      rating: 4.7,
      reviews: 2103,
      students: 9876,
      price: 64.99,
      originalPrice: 124.99,
      duration: "19h 15m",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=225&fit=crop",
      level: "Beginner",
      category: "Database",
      isFree: false,
      icon: Database
    },
    {
      id: 11,
      title: "Machine Learning with TensorFlow",
      description: "Dive deep into machine learning and neural networks using TensorFlow. Learn deep learning, computer vision, natural language processing, and deploy ML models to production environments.",
      instructor: "Dr. Amanda Wilson",
      rating: 4.9,
      reviews: 756,
      students: 3456,
      price: 109.99,
      originalPrice: 219.99,
      duration: "40h 30m",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=225&fit=crop",
      level: "Advanced",
      category: "AI/ML",
      isFree: false,
      icon: Brain
    },
    {
      id: 12,
      title: "DevOps & Docker Containerization",
      description: "Master DevOps practices, Docker containerization, and Kubernetes orchestration. Learn CI/CD pipelines, infrastructure as code, monitoring, and cloud deployment automation.",
      instructor: "James Miller",
      rating: 4.8,
      reviews: 1389,
      students: 7654,
      price: 89.99,
      originalPrice: 169.99,
      duration: "30h 10m",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=225&fit=crop",
      level: "Intermediate",
      category: "DevOps",
      isFree: false,
      icon: Cpu
    }
  ];

  const categories = ["All", "Web Development", "Data Science", "Frontend", "Backend", "Cloud", "Mobile", "Game Development", "Security", "Design", "Database", "AI/ML", "DevOps"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  // Filter courses based on search and filters
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const addToCart = (course: any) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItem = cartItems.find((item: any) => item.id === course.id);
    
    if (!existingItem) {
      cartItems.push({
        id: course.id,
        title: course.title,
        price: course.price,
        image: course.image,
        instructor: course.instructor
      });
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      window.dispatchEvent(new CustomEvent('cartUpdated'));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Explore Our Courses
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master new skills with our comprehensive courses taught by industry experts
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center">
          <p className="text-muted-foreground">
            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => {
            const Icon = course.icon;
            return (
              <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Icon className="h-8 w-8 text-white bg-black/50 p-1.5 rounded-full" />
                  </div>
                  <div className="absolute top-3 right-3">
                    {course.isFree ? (
                      <Badge className="bg-green-500 text-white">FREE</Badge>
                    ) : (
                      <Badge className="bg-red-500 text-white">PAID</Badge>
                    )}
                  </div>
                  <Badge className="absolute bottom-3 left-3 bg-blue-500 text-white">
                    {course.level}
                  </Badge>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <Badge variant="outline" className="mb-2">
                      {course.category}
                    </Badge>
                  </div>
                  <CardTitle className="line-clamp-2 text-lg group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-sm">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center space-x-1 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-sm text-muted-foreground">({course.reviews})</span>
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

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      {course.isFree ? (
                        <span className="text-2xl font-bold text-green-600">FREE</span>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-foreground">${course.price}</span>
                          {course.originalPrice > 0 && (
                            <span className="text-sm text-muted-foreground line-through">${course.originalPrice}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Link to={`/course/${course.id}`} className="block">
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        View Details
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => addToCart(course)}
                    >
                      Add to Cart
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground mt-2">
                    By {course.instructor}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-4">No courses found</p>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
