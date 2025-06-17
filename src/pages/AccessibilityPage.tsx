
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { 
  Accessibility, 
  Type, 
  Palette, 
  Volume2, 
  Eye, 
  MousePointer,
  Keyboard,
  Sun,
  Moon,
  Monitor
} from "lucide-react";

const AccessibilityPage = () => {
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    fontSize: [16],
    theme: 'system',
    screenReader: false,
    keyboardNav: true,
    audioDescriptions: false,
    colorBlindMode: 'none'
  });

  const [currentTheme, setCurrentTheme] = useState('system');

  useEffect(() => {
    // Load current theme
    const stored = localStorage.getItem('darkMode');
    if (stored === 'true') {
      setCurrentTheme('dark');
    } else if (stored === 'false') {
      setCurrentTheme('light');
    } else {
      setCurrentTheme('system');
    }
  }, []);

  const applyTheme = (theme: string) => {
    setCurrentTheme(theme);
    setSettings(prev => ({ ...prev, theme }));
    
    if (theme === 'dark') {
      localStorage.setItem('darkMode', 'true');
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      localStorage.setItem('darkMode', 'false');
      document.documentElement.classList.remove('dark');
    } else {
      // System theme
      localStorage.removeItem('darkMode');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (systemPrefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  const toggleSetting = (key: string) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  const updateFontSize = (value: number[]) => {
    setSettings(prev => ({ ...prev, fontSize: value }));
    document.documentElement.style.fontSize = `${value[0]}px`;
  };

  const resetSettings = () => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      fontSize: [16],
      theme: 'system',
      screenReader: false,
      keyboardNav: true,
      audioDescriptions: false,
      colorBlindMode: 'none'
    });
    document.documentElement.style.fontSize = '16px';
    applyTheme('system');
  };

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun, description: 'Light theme for better visibility in bright environments' },
    { value: 'dark', label: 'Dark', icon: Moon, description: 'Dark theme to reduce eye strain in low light' },
    { value: 'system', label: 'System', icon: Monitor, description: 'Follow your device\'s theme setting' }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Accessibility className="h-12 w-12 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Accessibility Settings
          </h1>
          <p className="text-xl text-muted-foreground">
            Customize your learning experience for better accessibility
          </p>
        </div>

        <div className="space-y-6">
          {/* Theme Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="mr-2 h-5 w-5" />
                Theme Preferences
              </CardTitle>
              <CardDescription>
                Choose your preferred color theme for better visual comfort
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {themeOptions.map((option) => {
                  const Icon = option.icon;
                  const isActive = currentTheme === option.value;
                  return (
                    <div
                      key={option.value}
                      onClick={() => applyTheme(option.value)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                        isActive 
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                          : 'border-border hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <Icon className={`h-6 w-6 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-muted-foreground'}`} />
                        <span className={`font-semibold ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-foreground'}`}>
                          {option.label}
                        </span>
                        {isActive && (
                          <Badge className="bg-blue-500 text-white">Active</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Visual Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="mr-2 h-5 w-5" />
                Visual Settings
              </CardTitle>
              <CardDescription>
                Adjust visual elements for better readability
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="high-contrast" className="text-base font-medium">
                    High Contrast Mode
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Increase contrast for better visibility
                  </p>
                </div>
                <Switch
                  id="high-contrast"
                  checked={settings.highContrast}
                  onCheckedChange={() => toggleSetting('highContrast')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="large-text" className="text-base font-medium">
                    Large Text
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Increase text size throughout the application
                  </p>
                </div>
                <Switch
                  id="large-text"
                  checked={settings.largeText}
                  onCheckedChange={() => toggleSetting('largeText')}
                />
              </div>

              <div className="space-y-3">
                <Label className="text-base font-medium">
                  Font Size: {settings.fontSize[0]}px
                </Label>
                <Slider
                  value={settings.fontSize}
                  onValueChange={updateFontSize}
                  max={24}
                  min={12}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Small (12px)</span>
                  <span>Large (24px)</span>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-base font-medium">Color Blind Support</Label>
                <Select value={settings.colorBlindMode} onValueChange={(value) => setSettings(prev => ({ ...prev, colorBlindMode: value }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="protanopia">Protanopia (Red-blind)</SelectItem>
                    <SelectItem value="deuteranopia">Deuteranopia (Green-blind)</SelectItem>
                    <SelectItem value="tritanopia">Tritanopia (Blue-blind)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Motion Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MousePointer className="mr-2 h-5 w-5" />
                Motion & Animation
              </CardTitle>
              <CardDescription>
                Control animations and motion effects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="reduced-motion" className="text-base font-medium">
                    Reduce Motion
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Minimize animations and motion effects
                  </p>
                </div>
                <Switch
                  id="reduced-motion"
                  checked={settings.reducedMotion}
                  onCheckedChange={() => toggleSetting('reducedMotion')}
                />
              </div>
            </CardContent>
          </Card>

          {/* Input Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Keyboard className="mr-2 h-5 w-5" />
                Input & Navigation
              </CardTitle>
              <CardDescription>
                Customize keyboard and navigation preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="keyboard-nav" className="text-base font-medium">
                    Enhanced Keyboard Navigation
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Enable advanced keyboard navigation features
                  </p>
                </div>
                <Switch
                  id="keyboard-nav"
                  checked={settings.keyboardNav}
                  onCheckedChange={() => toggleSetting('keyboardNav')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="screen-reader" className="text-base font-medium">
                    Screen Reader Support
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Optimize for screen reader compatibility
                  </p>
                </div>
                <Switch
                  id="screen-reader"
                  checked={settings.screenReader}
                  onCheckedChange={() => toggleSetting('screenReader')}
                />
              </div>
            </CardContent>
          </Card>

          {/* Audio Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Volume2 className="mr-2 h-5 w-5" />
                Audio Settings
              </CardTitle>
              <CardDescription>
                Configure audio and sound preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="audio-descriptions" className="text-base font-medium">
                    Audio Descriptions
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Enable audio descriptions for video content
                  </p>
                </div>
                <Switch
                  id="audio-descriptions"
                  checked={settings.audioDescriptions}
                  onCheckedChange={() => toggleSetting('audioDescriptions')}
                />
              </div>
            </CardContent>
          </Card>

          {/* Reset Button */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div>
                  <h3 className="font-semibold text-foreground">Reset Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Reset all accessibility settings to their default values
                  </p>
                </div>
                <Button variant="outline" onClick={resetSettings}>
                  Reset All Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityPage;
