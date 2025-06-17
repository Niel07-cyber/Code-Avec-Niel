import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, 
  Medal, 
  Award, 
  TrendingUp, 
  Calendar,
  Star,
  Zap,
  Target,
  Clock,
  Users
} from "lucide-react";

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState("overall");

  const topLearners = [
    {
      rank: 1,
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      xp: 12450,
      coursesCompleted: 24,
      streak: 45,
      badge: "🥇",
      level: "Expert"
    },
    {
      rank: 2,
      name: "Sarah Kim",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      xp: 11280,
      coursesCompleted: 22,
      streak: 38,
      badge: "🥈",
      level: "Advanced"
    },
    {
      rank: 3,
      name: "Mike Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      xp: 10890,
      coursesCompleted: 21,
      streak: 42,
      badge: "🥉",
      level: "Advanced"
    }
  ];

  const allRankings = [
    ...topLearners,
    {
      rank: 4,
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      xp: 9650,
      coursesCompleted: 18,
      streak: 29,
      badge: "🏅",
      level: "Intermediate"
    },
    {
      rank: 5,
      name: "David Lee",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      xp: 8920,
      coursesCompleted: 16,
      streak: 31,
      badge: "🏅",
      level: "Intermediate"
    },
    {
      rank: 6,
      name: "Lisa Garcia",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
      xp: 8340,
      coursesCompleted: 15,
      streak: 25,
      badge: "🏅",
      level: "Intermediate"
    },
    {
      rank: 7,
      name: "John Smith",
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=40&h=40&fit=crop&crop=face",
      xp: 7850,
      coursesCompleted: 14,
      streak: 22,
      badge: "🏅",
      level: "Beginner"
    },
    {
      rank: 8,
      name: "Rachel Brown",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=40&h=40&fit=crop&crop=face",
      xp: 7420,
      coursesCompleted: 13,
      streak: 28,
      badge: "🏅",
      level: "Beginner"
    }
  ];

  const weeklyLeaders = [
    {
      rank: 1,
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      weeklyXp: 890,
      coursesThisWeek: 3,
      badge: "🔥"
    },
    {
      rank: 2,
      name: "Mike Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      weeklyXp: 750,
      coursesThisWeek: 2,
      badge: "⚡"
    },
    {
      rank: 3,
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      weeklyXp: 620,
      coursesThisWeek: 1,
      badge: "🚀"
    }
  ];

  const streakLeaders = [
    {
      rank: 1,
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      streak: 45,
      badge: "🔥"
    },
    {
      rank: 2,
      name: "Mike Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      streak: 42,
      badge: "🔥"
    },
    {
      rank: 3,
      name: "Sarah Kim",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      streak: 38,
      badge: "🔥"
    }
  ];

  const myStats = {
    rank: 15,
    xp: 4250,
    coursesCompleted: 8,
    streak: 12,
    level: "Beginner",
    xpToNext: 750
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center justify-center">
            <Trophy className="mr-3 h-8 w-8 text-yellow-500" />
            Leaderboard
          </h1>
          <p className="text-xl text-muted-foreground">
            Compete with learners worldwide and track your progress
          </p>
        </div>

        {/* My Stats */}
        <Card className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-5 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold">#{myStats.rank}</div>
                <div className="text-sm opacity-90">Your Rank</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{myStats.xp.toLocaleString()}</div>
                <div className="text-sm opacity-90">Total XP</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{myStats.coursesCompleted}</div>
                <div className="text-sm opacity-90">Courses</div>
              </div>
              <div>
                <div className="text-2xl font-bold">🔥 {myStats.streak}</div>
                <div className="text-sm opacity-90">Day Streak</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{myStats.level}</div>
                <div className="text-sm opacity-90">{myStats.xpToNext} XP to next level</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overall">Overall</TabsTrigger>
            <TabsTrigger value="weekly">This Week</TabsTrigger>
            <TabsTrigger value="streaks">Streaks</TabsTrigger>
            <TabsTrigger value="achievements">Top Achievers</TabsTrigger>
          </TabsList>

          <TabsContent value="overall">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Top 3 Podium */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
                      Top Performers
                    </CardTitle>
                    <CardDescription>All-time leaderboard rankings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Podium for top 3 */}
                    <div className="flex items-end justify-center space-x-4 mb-8">
                      {/* 2nd Place */}
                      <div className="text-center">
                        <div className="bg-muted h-20 w-16 rounded-t-lg flex items-end justify-center pb-2">
                          <span className="text-2xl">🥈</span>
                        </div>
                        <Avatar className="mx-auto mt-2 mb-2">
                          <AvatarImage src={topLearners[1].avatar} />
                          <AvatarFallback>{topLearners[1].name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="font-semibold text-sm text-foreground">{topLearners[1].name}</p>
                        <p className="text-xs text-muted-foreground">{topLearners[1].xp.toLocaleString()} XP</p>
                      </div>

                      {/* 1st Place */}
                      <div className="text-center">
                        <div className="bg-yellow-200 dark:bg-yellow-800 h-24 w-16 rounded-t-lg flex items-end justify-center pb-2">
                          <span className="text-2xl">🥇</span>
                        </div>
                        <Avatar className="mx-auto mt-2 mb-2">
                          <AvatarImage src={topLearners[0].avatar} />
                          <AvatarFallback>{topLearners[0].name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="font-semibold text-sm text-foreground">{topLearners[0].name}</p>
                        <p className="text-xs text-muted-foreground">{topLearners[0].xp.toLocaleString()} XP</p>
                      </div>

                      {/* 3rd Place */}
                      <div className="text-center">
                        <div className="bg-orange-200 dark:bg-orange-800 h-16 w-16 rounded-t-lg flex items-end justify-center pb-2">
                          <span className="text-2xl">🥉</span>
                        </div>
                        <Avatar className="mx-auto mt-2 mb-2">
                          <AvatarImage src={topLearners[2].avatar} />
                          <AvatarFallback>{topLearners[2].name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="font-semibold text-sm text-foreground">{topLearners[2].name}</p>
                        <p className="text-xs text-muted-foreground">{topLearners[2].xp.toLocaleString()} XP</p>
                      </div>
                    </div>

                    {/* Full Rankings */}
                    <div className="space-y-3">
                      {allRankings.map((user, index) => (
                        <div 
                          key={user.rank} 
                          className={`flex items-center space-x-4 p-3 rounded-lg transition-colors ${
                            user.rank <= 3 ? 'bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800' : 'hover:bg-muted'
                          }`}
                        >
                          <div className="w-8 text-center font-bold text-muted-foreground">
                            #{user.rank}
                          </div>
                          <span className="text-xl">{user.badge}</span>
                          <Avatar>
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground">{user.name}</p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>{user.xp.toLocaleString()} XP</span>
                              <span>•</span>
                              <span>{user.coursesCompleted} courses</span>
                              <span>•</span>
                              <span>🔥 {user.streak} days</span>
                            </div>
                          </div>
                          <Badge variant="secondary">{user.level}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Side Stats */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="mr-2 h-5 w-5 text-yellow-500" />
                      Quick Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Total Learners</span>
                      <span className="font-semibold text-foreground">52,431</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Active This Week</span>
                      <span className="font-semibold text-foreground">8,247</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Avg. Streak</span>
                      <span className="font-semibold text-foreground">12 days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Top XP Today</span>
                      <span className="font-semibold text-foreground">2,450</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="mr-2 h-5 w-5 text-blue-500" />
                      Your Goals
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-foreground">Reach Top 10</span>
                        <span className="text-xs text-muted-foreground">5 ranks to go</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full w-2/3"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-foreground">30-Day Streak</span>
                        <span className="text-xs text-muted-foreground">18 days to go</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-orange-600 h-2 rounded-full w-2/5"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="weekly">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-green-500" />
                  This Week's Champions
                </CardTitle>
                <CardDescription>Most active learners this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyLeaders.map((user, index) => (
                    <div key={user.rank} className="flex items-center space-x-4 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
                      <div className="w-8 text-center font-bold text-green-600 dark:text-green-400">
                        #{user.rank}
                      </div>
                      <span className="text-xl">{user.badge}</span>
                      <Avatar>
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{user.name}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{user.weeklyXp} XP this week</span>
                          <span>•</span>
                          <span>{user.coursesThisWeek} courses completed</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="streaks">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-orange-500" />
                  Streak Masters
                </CardTitle>
                <CardDescription>Longest learning streaks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {streakLeaders.map((user, index) => (
                    <div key={user.rank} className="flex items-center space-x-4 p-4 rounded-lg bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800">
                      <div className="w-8 text-center font-bold text-orange-600 dark:text-orange-400">
                        #{user.rank}
                      </div>
                      <span className="text-xl">{user.badge}</span>
                      <Avatar>
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.streak} day streak</p>
                      </div>
                      <div className="text-2xl">🔥</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 h-5 w-5 text-purple-500" />
                  Achievement Leaders
                </CardTitle>
                <CardDescription>Most accomplished learners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { category: "Course Completionist", leader: "Alex Chen", count: 24, icon: "📚" },
                    { category: "Speed Learner", leader: "Emma Wilson", count: 18, icon: "⚡" },
                    { category: "Perfect Scorer", leader: "Mike Johnson", count: 15, icon: "🎯" },
                    { category: "Code Master", leader: "Sarah Kim", count: 12, icon: "💻" },
                    { category: "Community Helper", leader: "David Lee", count: 89, icon: "🤝" },
                    { category: "Streak Legend", leader: "Alex Chen", count: 45, icon: "🔥" }
                  ].map((achievement, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-muted">
                      <div className="text-center">
                        <div className="text-3xl mb-2">{achievement.icon}</div>
                        <h3 className="font-semibold text-sm text-foreground">{achievement.category}</h3>
                        <p className="text-xs text-muted-foreground mb-2">{achievement.leader}</p>
                        <Badge variant="secondary">{achievement.count}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Leaderboard;
