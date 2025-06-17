
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { Navigation } from '@/components/Navigation';
import { LoginScreen } from '@/components/LoginScreen';
import { ScrollToTop } from '@/components/ScrollToTop';
import Index from '@/pages/Index';
import Dashboard from '@/pages/Dashboard';
import Courses from '@/pages/Courses';
import CourseDetail from '@/pages/CourseDetail';
import Profile from '@/pages/Profile';
import About from '@/pages/About';
import Cart from '@/pages/Cart';
import CodeEditor from '@/pages/CodeEditor';
import Leaderboard from '@/pages/Leaderboard';
import Achievements from '@/pages/Achievements';
import Subscription from '@/pages/Subscription';
import AccessibilityPage from '@/pages/AccessibilityPage';
import NotFound from '@/pages/NotFound';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <ScrollToTop />
        <Navigation onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/code-editor" element={<CodeEditor />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
