
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import avatarImg from "../../assets/ot.png.jpg"
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Award,
  BookOpen,
  Trophy,
  Star,
  Edit,
  Camera,
  Save,
  X,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Lock,
  Bell,
  Shield
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  
  const [profileData, setProfileData] = useState({
    name: "Nii Dodou",
    email: "othnielaryee07@gmail.com",
    phone: "+33 (780) 75-9499",
    location: "Frankfurt, Germany",
    bio: "Full-stack developer passionate about creating innovative web applications. Currently learning advanced React patterns and exploring machine learning.",
    website: "https://devniel.com",
    github: "Niel-Cyber",
    linkedin: "othniel-aryee",
    twitter: "@aryee07",
    joinDate: "January 2012"
  });

  const achievements = [
    {
      id: 1,
      title: "JavaScript Master",
      description: "Completed all JavaScript courses",
      icon: "🏆",
      date: "2024-01-15",
      color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
    },
    {
      id: 2,
      title: "Quick Learner",
      description: "Completed 5 courses in one month",
      icon: "⚡",
      date: "2024-01-10",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    },
    {
      id: 3,
      title: "Code Warrior",
      description: "Solved 100+ coding challenges",
      icon: "⚔️",
      date: "2023-12-20",
      color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    }
  ];

  const enrolledCourses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      progress: 75,
      instructor: "Godfred Mireku",
      totalLessons: 24,
      completedLessons: 18,
      thumbnail: "https://media.geeksforgeeks.org/wp-content/uploads/20231110153649/React-Design-Patterns-That-Every-Developer-Should-Know.webp"
    },
    {
      id: 2,
      title: "Node.js Masterclass",
      progress: 45,
      instructor: "Brian Baiden Spencer",
      totalLessons: 32,
      completedLessons: 14,
      thumbnail: "https://cdn4.iconfinder.com/data/icons/logos-3/454/nodejs-new-pantone-white-1024.png"
    },
    {
      id: 3,
      title: "Python for Data Science",
      progress: 90,
      instructor: "Dr. Joshua Stacks",
      totalLessons: 28,
      completedLessons: 25,
      thumbnail: "https://railsware.com/blog/wp-content/uploads/2018/10/Python-for-Data-Science-illustration.jpg"
    }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to a backend
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data if needed
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Profile</h1>
          <p className="text-xl text-muted-foreground">
            Manage your account and track your learning progress
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="bg-card">
              <CardHeader className="text-center">
                <div className="relative inline-block">
                  <Avatar className="w-28 h-30 mx-auto mb-4">
                    <AvatarImage src={avatarImg} />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute bottom-4 right-0 rounded-full w-8 h-8 p-0"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="text-card-foreground">{profileData.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{profileData.email}</CardDescription>
                <div className="flex justify-center mt-4">
                  {!isEditing ? (
                    <Button onClick={() => setIsEditing(true)} variant="outline">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                  ) : (
                    <div className="flex space-x-2">
                      <Button onClick={handleSave} size="sm">
                        <Save className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                      <Button onClick={handleCancel} variant="outline" size="sm">
                        <X className="mr-2 h-4 w-4" />
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Joined {profileData.joinDate}</span>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-card-foreground">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">12</div>
                      <div className="text-xs text-muted-foreground">Courses</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">8</div>
                      <div className="text-xs text-muted-foreground">Completed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">156</div>
                      <div className="text-xs text-muted-foreground">Hours</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">3</div>
                      <div className="text-xs text-muted-foreground">Certificates</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 bg-muted">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Personal Information</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Update your personal details and contact information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={profileData.name}
                          onChange={(e) => setProfileData(prev => ({...prev, name: e.target.value}))}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData(prev => ({...prev, email: e.target.value}))}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={profileData.phone}
                          onChange={(e) => setProfileData(prev => ({...prev, phone: e.target.value}))}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={profileData.location}
                          onChange={(e) => setProfileData(prev => ({...prev, location: e.target.value}))}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => setProfileData(prev => ({...prev, bio: e.target.value}))}
                        disabled={!isEditing}
                        rows={4}
                      />
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-semibold mb-4 text-card-foreground">Social Links</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="website">Website</Label>
                          <Input
                            id="website"
                            value={profileData.website}
                            onChange={(e) => setProfileData(prev => ({...prev, website: e.target.value}))}
                            disabled={!isEditing}
                          />
                        </div>
                        <div>
                          <Label htmlFor="github">GitHub</Label>
                          <Input
                            id="github"
                            value={profileData.github}
                            onChange={(e) => setProfileData(prev => ({...prev, github: e.target.value}))}
                            disabled={!isEditing}
                          />
                        </div>
                        <div>
                          <Label htmlFor="linkedin">LinkedIn</Label>
                          <Input
                            id="linkedin"
                            value={profileData.linkedin}
                            onChange={(e) => setProfileData(prev => ({...prev, linkedin: e.target.value}))}
                            disabled={!isEditing}
                          />
                        </div>
                        <div>
                          <Label htmlFor="twitter">Twitter</Label>
                          <Input
                            id="twitter"
                            value={profileData.twitter}
                            onChange={(e) => setProfileData(prev => ({...prev, twitter: e.target.value}))}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="courses">
                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Enrolled Courses</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Track your learning progress across all courses
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {enrolledCourses.map((course) => (
                        <div key={course.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                          <img 
                            src={course.thumbnail} 
                            alt={course.title}
                            className="w-16 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-card-foreground">{course.title}</h3>
                            <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                            <div className="mt-2">
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-muted-foreground">Progress</span>
                                <span className="text-muted-foreground">{course.completedLessons}/{course.totalLessons} lessons</span>
                              </div>
                              <Progress value={course.progress} className="h-2" />
                            </div>
                          </div>
                          <Badge variant="outline" className="ml-4">
                            {course.progress}%
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements">
                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Achievements</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Your learning milestones and accomplishments
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {achievements.map((achievement) => (
                        <div key={achievement.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                          <div className="text-2xl">{achievement.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-card-foreground">{achievement.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                            <Badge className={achievement.color}>
                              Earned {achievement.date}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <div className="space-y-6">
                  <Card className="bg-card">
                    <CardHeader>
                      <CardTitle className="text-card-foreground">Account Settings</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        Manage your account preferences and privacy settings
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Bell className="h-4 w-4" />
                          <span className="text-card-foreground">Email Notifications</span>
                        </div>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Lock className="h-4 w-4" />
                          <span className="text-card-foreground">Change Password</span>
                        </div>
                        <Button variant="outline" size="sm">Update</Button>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Shield className="h-4 w-4" />
                          <span className="text-card-foreground">Two-Factor Authentication</span>
                        </div>
                        <Button variant="outline" size="sm">Enable</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card">
                    <CardHeader>
                      <CardTitle className="text-red-600">Danger Zone</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        These actions cannot be undone
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="destructive">Delete Account</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
