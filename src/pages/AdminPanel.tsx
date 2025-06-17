
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp,
  Settings,
  UserPlus,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  BarChart3,
  Shield,
  Bell,
  Database
} from "lucide-react";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    {
      title: "Total Users",
      value: "12,456",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Active Courses",
      value: "89",
      change: "+5%",
      trend: "up",
      icon: BookOpen,
      color: "text-green-600 dark:text-green-400"
    },
    {
      title: "Revenue",
      value: "$45,678",
      change: "+18%",
      trend: "up",
      icon: DollarSign,
      color: "text-yellow-600 dark:text-yellow-400"
    },
    {
      title: "Enrollments",
      value: "3,421",
      change: "+25%",
      trend: "up",
      icon: TrendingUp,
      color: "text-purple-600 dark:text-purple-400"
    }
  ];

  const recentUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      joinDate: "2024-02-15",
      status: "active",
      courses: 3
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      joinDate: "2024-02-14",
      status: "active",
      courses: 7
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      joinDate: "2024-02-13",
      status: "inactive",
      courses: 1
    }
  ];

  const courses = [
    {
      id: 1,
      title: "Complete JavaScript Mastery",
      instructor: "Sarah Johnson",
      students: 1245,
      revenue: "$12,450",
      status: "published",
      lastUpdated: "2024-02-10"
    },
    {
      id: 2,
      title: "Python for Data Science",
      instructor: "Dr. Michael Chen",
      students: 892,
      revenue: "$8,920",
      status: "published",
      lastUpdated: "2024-02-08"
    },
    {
      id: 3,
      title: "React & Next.js Guide",
      instructor: "Alex Rodriguez",
      students: 567,
      revenue: "$5,670",
      status: "draft",
      lastUpdated: "2024-02-05"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
              <p className="text-xl text-muted-foreground">
                Manage your CodewithNiel platform
              </p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </p>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          {stat.value}
                        </h3>
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                          {stat.change}
                        </Badge>
                      </div>
                    </div>
                    <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 ${stat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest platform activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New user registration</p>
                        <p className="text-xs text-muted-foreground">john.doe@example.com joined</p>
                      </div>
                      <span className="text-xs text-muted-foreground">2m ago</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Course completed</p>
                        <p className="text-xs text-muted-foreground">JavaScript Mastery completed by Jane Smith</p>
                      </div>
                      <span className="text-xs text-muted-foreground">5m ago</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New course published</p>
                        <p className="text-xs text-muted-foreground">React Advanced Concepts is now live</p>
                      </div>
                      <span className="text-xs text-muted-foreground">1h ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common administrative tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-20 flex-col">
                      <UserPlus className="w-6 h-6 mb-2" />
                      Add User
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <BookOpen className="w-6 h-6 mb-2" />
                      New Course
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <BarChart3 className="w-6 h-6 mb-2" />
                      View Reports
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <Bell className="w-6 h-6 mb-2" />
                      Send Notice
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">User Management</h2>
              <Button>
                <UserPlus className="w-4 h-4 mr-2" />
                Add New User
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>All Users</CardTitle>
                <CardDescription>Manage CodewithNiel platform users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium">{user.courses} courses</p>
                          <p className="text-xs text-muted-foreground">Joined {user.joinDate}</p>
                        </div>
                        <Badge className={user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                          {user.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Course Management</h2>
              <Button>
                <BookOpen className="w-4 h-4 mr-2" />
                Create Course
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>All Courses</CardTitle>
                <CardDescription>Manage CodewithNiel courses and content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold">{course.title}</h3>
                          <Badge className={course.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}>
                            {course.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                      </div>
                      <div className="flex items-center space-x-8">
                        <div className="text-center">
                          <p className="text-sm font-medium">{course.students}</p>
                          <p className="text-xs text-muted-foreground">students</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium">{course.revenue}</p>
                          <p className="text-xs text-muted-foreground">revenue</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Analytics</CardTitle>
                  <CardDescription>CodewithNiel platform performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Daily Active Users</span>
                      <span className="text-lg font-bold">2,341</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Course Completion Rate</span>
                      <span className="text-lg font-bold">87%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Average Session Time</span>
                      <span className="text-lg font-bold">45m</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Monthly Revenue Growth</span>
                      <span className="text-lg font-bold text-green-600">+23%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Courses</CardTitle>
                  <CardDescription>Most popular courses this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">JavaScript Mastery</span>
                      <Badge>1,245 students</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Python Data Science</span>
                      <Badge>892 students</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">React Development</span>
                      <Badge>567 students</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Content Management</CardTitle>
                  <CardDescription>Manage CodewithNiel platform content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="course-title">Course Title</Label>
                    <Input id="course-title" placeholder="Enter course title" />
                  </div>
                  <div>
                    <Label htmlFor="course-description">Description</Label>
                    <Textarea id="course-description" placeholder="Enter course description" />
                  </div>
                  <div>
                    <Label htmlFor="course-category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-dev">Web Development</SelectItem>
                        <SelectItem value="data-science">Data Science</SelectItem>
                        <SelectItem value="mobile">Mobile Development</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">
                    <Upload className="w-4 h-4 mr-2" />
                    Create Course
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Media Management</CardTitle>
                  <CardDescription>Upload and manage course assets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">Upload Files</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Drag and drop files or click to browse
                    </p>
                    <Button variant="outline">Choose Files</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Settings</CardTitle>
                  <CardDescription>Configure CodewithNiel platform settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="platform-name">Platform Name</Label>
                    <Input id="platform-name" defaultValue="CodewithNiel" />
                  </div>
                  <div>
                    <Label htmlFor="admin-email">Admin Email</Label>
                    <Input id="admin-email" defaultValue="admin@codewithNiel.com" />
                  </div>
                  <div>
                    <Label htmlFor="max-users">Max Users</Label>
                    <Input id="max-users" type="number" defaultValue="10000" />
                  </div>
                  <Button>Save Settings</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage platform security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Two-Factor Authentication</span>
                    <Badge className="bg-green-100 text-green-700">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Password Requirements</span>
                    <Badge className="bg-green-100 text-green-700">Strong</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Session Timeout</span>
                    <Badge className="bg-blue-100 text-blue-700">30 minutes</Badge>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Shield className="w-4 h-4 mr-2" />
                    Security Audit
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
