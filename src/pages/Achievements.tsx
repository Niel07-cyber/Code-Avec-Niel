
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, 
  Medal, 
  Award, 
  Target, 
  Star,
  Zap,
  BookOpen,
  Code2,
  Users,
  Clock,
  TrendingUp,
  CheckCircle,
  Lock
} from "lucide-react";

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("all");

  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first course",
      category: "Learning",
      difficulty: "Bronze",
      xp: 50,
      earned: true,
      earnedDate: "2024-01-10",
      icon: BookOpen,
      progress: 100
    },
    {
      id: 2,
      title: "Code Warrior",
      description: "Complete 5 coding challenges",
      category: "Coding",
      difficulty: "Bronze",
      xp: 100,
      earned: true,
      earnedDate: "2024-01-15",
      icon: Code2,
      progress: 100
    },
    {
      id: 3,
      title: "Speed Demon",
      description: "Complete a course in under 3 days",
      category: "Speed",
      difficulty: "Silver",
      xp: 200,
      earned: true,
      earnedDate: "2024-01-20",
      icon: Zap,
      progress: 100
    },
    {
      id: 4,
      title: "Week Warrior",
      description: "Maintain a 7-day learning streak",
      category: "Consistency",
      difficulty: "Silver",
      xp: 150,
      earned: true,
      earnedDate: "2024-01-25",
      icon: Target,
      progress: 100
    },
    {
      id: 5,
      title: "Perfect Score",
      description: "Get 100% on 5 quizzes",
      category: "Excellence",
      difficulty: "Gold",
      xp: 300,
      earned: false,
      earnedDate: null,
      icon: Star,
      progress: 60
    },
    {
      id: 6,
      title: "Course Master",
      description: "Complete 10 courses",
      category: "Learning",
      difficulty: "Gold",
      xp: 500,
      earned: false,
      earnedDate: null,
      icon: Trophy,
      progress: 80
    },
    {
      id: 7,
      title: "Community Helper",
      description: "Help 25 fellow learners",
      category: "Community",
      difficulty: "Silver",
      xp: 250,
      earned: false,
      earnedDate: null,
      icon: Users,
      progress: 32
    },
    {
      id: 8,
      title: "Marathon Runner",
      description: "Maintain a 30-day learning streak",
      category: "Consistency",
      difficulty: "Gold",
      xp: 400,
      earned: false,
      earnedDate: null,
      icon: Clock,
      progress: 40
    },
    {
      id: 9,
      title: "Expert Coder",
      description: "Complete 50 coding challenges",
      category: "Coding",
      difficulty: "Platinum",
      xp: 1000,
      earned: false,
      earnedDate: null,
      icon: Code2,
      progress: 24
    },
    {
      id: 10,
      title: "Learning Legend",
      description: "Complete 25 courses",
      category: "Learning",
      difficulty: "Platinum",
      xp: 1500,
      earned: false,
      earnedDate: null,
      icon: Award,
      progress: 32
    }
  ];

  const stats = {
    totalEarned: achievements.filter(a => a.earned).length,
    totalXp: achievements.filter(a => a.earned).reduce((sum, a) => sum + a.xp, 0),
    nextMilestone: "Perfect Score",
    completionRate: Math.round((achievements.filter(a => a.earned).length / achievements.length) * 100)
  };

  const categories = [
    { name: "all", label: "All Achievements", count: achievements.length },
    { name: "learning", label: "Learning", count: achievements.filter(a => a.category === "Learning").length },
    { name: "coding", label: "Coding", count: achievements.filter(a => a.category === "Coding").length },
    { name: "consistency", label: "Consistency", count: achievements.filter(a => a.category === "Consistency").length },
    { name: "community", label: "Community", count: achievements.filter(a => a.category === "Community").length }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Bronze": return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300";
      case "Silver": return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
      case "Gold": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "Platinum": return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300";
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  const getFilteredAchievements = () => {
    if (activeTab === "all") return achievements;
    return achievements.filter(a => a.category.toLowerCase() === activeTab);
  };

  const recentEarned = achievements
    .filter(a => a.earned)
    .sort((a, b) => new Date(b.earnedDate!).getTime() - new Date(a.earnedDate!).getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-8 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center">
              <Award className="mr-3 h-6 w-6 lg:h-8 lg:w-8 text-yellow-500" />
              Achievements
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
              Track your learning milestones and unlock rewards
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            <Card>
              <CardContent className="p-4 lg:p-6 text-center">
                <Trophy className="h-6 w-6 lg:h-8 lg:w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">{stats.totalEarned}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Earned</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 lg:p-6 text-center">
                <Star className="h-6 w-6 lg:h-8 lg:w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">{stats.totalXp}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total XP</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 lg:p-6 text-center">
                <Target className="h-6 w-6 lg:h-8 lg:w-8 text-green-500 mx-auto mb-2" />
                <div className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">{stats.completionRate}%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Completion</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 lg:p-6 text-center">
                <TrendingUp className="h-6 w-6 lg:h-8 lg:w-8 text-purple-500 mx-auto mb-2" />
                <div className="text-base lg:text-lg font-bold text-gray-900 dark:text-white">{stats.nextMilestone}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Next Goal</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Recently Earned */}
            <div className="lg:col-span-1">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Medal className="mr-2 h-5 w-5 text-yellow-500" />
                    Recently Earned
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentEarned.map((achievement) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={achievement.id} className="flex items-center space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                        <div className="bg-yellow-100 dark:bg-yellow-900/40 p-2 rounded-lg">
                          <Icon className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm text-gray-900 dark:text-white">{achievement.title}</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{achievement.earnedDate}</p>
                        </div>
                        <Badge className={getDifficultyColor(achievement.difficulty)}>
                          {achievement.xp} XP
                        </Badge>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Achievement Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Progress Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span>Overall Progress</span>
                      <span>{stats.completionRate}%</span>
                    </div>
                    <Progress value={stats.completionRate} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => {
                      const categoryAchievements = achievements.filter(a => a.category.toLowerCase() === category.name);
                      const earned = categoryAchievements.filter(a => a.earned).length;
                      const percentage = Math.round((earned / categoryAchievements.length) * 100);
                      
                      return (
                        <div key={category.name}>
                          <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                            <span>{category.label}</span>
                            <span>{earned}/{categoryAchievements.length}</span>
                          </div>
                          <Progress value={percentage} className="h-1" />
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Achievements */}
            <div className="lg:col-span-3">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mb-6 bg-white dark:bg-gray-800">
                  {categories.map((category) => (
                    <TabsTrigger key={category.name} value={category.name} className="text-xs lg:text-sm data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/30">
                      <span className="hidden sm:inline">{category.label}</span>
                      <span className="sm:hidden">{category.label.split(' ')[0]}</span>
                      <Badge variant="secondary" className="ml-1 text-xs">
                        {category.count}
                      </Badge>
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                  {getFilteredAchievements().map((achievement) => {
                    const Icon = achievement.icon;
                    return (
                      <Card key={achievement.id} className={`relative ${
                        achievement.earned 
                          ? 'ring-2 ring-yellow-200 dark:ring-yellow-800 bg-yellow-50 dark:bg-yellow-900/10' 
                          : achievement.progress > 0 
                          ? 'ring-1 ring-blue-200 dark:ring-blue-800' 
                          : 'opacity-60'
                      }`}>
                        <CardContent className="p-4 lg:p-6 text-center">
                          {achievement.earned && (
                            <CheckCircle className="absolute top-2 right-2 h-5 w-5 text-green-500" />
                          )}
                          {!achievement.earned && achievement.progress === 0 && (
                            <Lock className="absolute top-2 right-2 h-4 w-4 text-gray-400 dark:text-gray-600" />
                          )}
                          
                          <div className={`inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-2xl mb-4 ${
                            achievement.earned 
                              ? 'bg-yellow-100 dark:bg-yellow-900/30' 
                              : achievement.progress > 0 
                              ? 'bg-blue-100 dark:bg-blue-900/30' 
                              : 'bg-gray-100 dark:bg-gray-800'
                          }`}>
                            <Icon className={`h-6 w-6 lg:h-8 lg:w-8 ${
                              achievement.earned 
                                ? 'text-yellow-600 dark:text-yellow-400' 
                                : achievement.progress > 0 
                                ? 'text-blue-600 dark:text-blue-400' 
                                : 'text-gray-400 dark:text-gray-600'
                            }`} />
                          </div>
                          
                          <h3 className="font-semibold text-base lg:text-lg mb-2 text-gray-900 dark:text-white">{achievement.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{achievement.description}</p>
                          
                          <div className="flex items-center justify-between mb-4">
                            <Badge className={getDifficultyColor(achievement.difficulty)}>
                              {achievement.difficulty}
                            </Badge>
                            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                              {achievement.xp} XP
                            </span>
                          </div>

                          {achievement.earned ? (
                            <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 w-full">
                              Earned {achievement.earnedDate}
                            </Badge>
                          ) : achievement.progress > 0 ? (
                            <div>
                              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                                <span>Progress</span>
                                <span>{achievement.progress}%</span>
                              </div>
                              <Progress value={achievement.progress} className="h-2" />
                            </div>
                          ) : (
                            <Badge variant="outline" className="w-full border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400">
                              Locked
                            </Badge>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
