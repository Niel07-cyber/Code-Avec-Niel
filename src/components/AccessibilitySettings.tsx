
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Eye, 
  Type, 
  Palette, 
  Volume2,
  MousePointer,
  Keyboard,
  Globe,
  Contrast,
  Accessibility,
  Languages,
  Settings
} from "lucide-react";

export const AccessibilitySettings = () => {
  const [fontSize, setFontSize] = useState([16]);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [screenReader, setScreenReader] = useState(false);
  const [keyboardNav, setKeyboardNav] = useState(true);
  const [language, setLanguage] = useState("en");

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "ar", name: "العربية", flag: "🇸🇦", rtl: true },
    { code: "he", name: "עברית", flag: "🇮🇱", rtl: true }
  ];

  const themes = [
    { id: "light", name: "Light", preview: "bg-white border-gray-200" },
    { id: "dark", name: "Dark", preview: "bg-gray-900 border-gray-700" },
    { id: "high-contrast", name: "High Contrast", preview: "bg-black border-white" },
    { id: "blue", name: "Blue Theme", preview: "bg-blue-50 border-blue-200" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
          <Accessibility className="mr-3 h-8 w-8" />
          Accessibility & Localization Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Customize your learning experience to match your preferences and needs
        </p>
      </div>

      <Tabs defaultValue="visual" className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full dark:bg-gray-800">
          <TabsTrigger value="visual" className="flex items-center dark:text-gray-200">
            <Eye className="h-4 w-4 mr-2" />
            Visual
          </TabsTrigger>
          <TabsTrigger value="interaction" className="flex items-center dark:text-gray-200">
            <MousePointer className="h-4 w-4 mr-2" />
            Interaction
          </TabsTrigger>
          <TabsTrigger value="language" className="flex items-center dark:text-gray-200">
            <Globe className="h-4 w-4 mr-2" />
            Language
          </TabsTrigger>
          <TabsTrigger value="advanced" className="flex items-center dark:text-gray-200">
            <Settings className="h-4 w-4 mr-2" />
            Advanced
          </TabsTrigger>
        </TabsList>

        {/* Visual Settings */}
        <TabsContent value="visual" className="space-y-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900 dark:text-white">
                <Type className="mr-2 h-5 w-5" />
                Typography & Display
              </CardTitle>
              <CardDescription className="dark:text-gray-300">
                Adjust text size and visual elements for better readability
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">
                  Font Size: {fontSize[0]}px
                </label>
                <Slider
                  value={fontSize}
                  onValueChange={setFontSize}
                  max={24}
                  min={12}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>Small (12px)</span>
                  <span>Large (24px)</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-900 dark:text-white">
                    High Contrast Mode
                  </label>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Increase contrast for better visibility
                  </p>
                </div>
                <Switch
                  checked={highContrast}
                  onCheckedChange={setHighContrast}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-900 dark:text-white">
                    Reduce Motion
                  </label>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Minimize animations and transitions
                  </p>
                </div>
                <Switch
                  checked={reducedMotion}
                  onCheckedChange={setReducedMotion}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900 dark:text-white">
                <Palette className="mr-2 h-5 w-5" />
                Theme Selection
              </CardTitle>
              <CardDescription className="dark:text-gray-300">
                Choose a visual theme that works best for you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {themes.map((theme) => (
                  <div
                    key={theme.id}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${theme.preview} ${
                      theme.id === 'light' ? 'border-blue-500' : 'border-transparent'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-sm font-medium">{theme.name}</div>
                      {theme.id === 'light' && (
                        <Badge className="mt-1 bg-blue-100 text-blue-800">Current</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Interaction Settings */}
        <TabsContent value="interaction" className="space-y-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900 dark:text-white">
                <Keyboard className="mr-2 h-5 w-5" />
                Navigation & Input
              </CardTitle>
              <CardDescription className="dark:text-gray-300">
                Configure how you interact with the platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-900 dark:text-white">
                    Keyboard Navigation
                  </label>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Enable full keyboard navigation support
                  </p>
                </div>
                <Switch
                  checked={keyboardNav}
                  onCheckedChange={setKeyboardNav}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-900 dark:text-white">
                    Screen Reader Support
                  </label>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Optimize for screen reading software
                  </p>
                </div>
                <Switch
                  checked={screenReader}
                  onCheckedChange={setScreenReader}
                />
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-2">
                  Keyboard Shortcuts
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-blue-800 dark:text-blue-300">
                  <div>Tab: Navigate forward</div>
                  <div>Shift+Tab: Navigate backward</div>
                  <div>Enter/Space: Activate</div>
                  <div>Esc: Close dialogs</div>
                  <div>Arrow Keys: Navigate lists</div>
                  <div>Ctrl+/: Show shortcuts</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Language Settings */}
        <TabsContent value="language" className="space-y-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900 dark:text-white">
                <Languages className="mr-2 h-5 w-5" />
                Language & Region
              </CardTitle>
              <CardDescription className="dark:text-gray-300">
                Select your preferred language and regional settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className={`p-3 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                      language === lang.code 
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30' 
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    } ${lang.rtl ? 'text-right' : 'text-left'}`}
                    onClick={() => setLanguage(lang.code)}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-1">{lang.flag}</div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{lang.name}</div>
                      {lang.rtl && (
                        <Badge className="mt-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs">
                          RTL
                        </Badge>
                      )}
                      {language === lang.code && (
                        <Badge className="mt-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs">
                          Active
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                <h4 className="text-sm font-semibold text-yellow-900 dark:text-yellow-200 mb-2">
                  Translation Status
                </h4>
                <div className="space-y-1 text-xs text-yellow-800 dark:text-yellow-300">
                  <div>🟢 English: 100% complete</div>
                  <div>🟢 Spanish: 98% complete</div>
                  <div>🟡 French: 85% complete</div>
                  <div>🟡 German: 82% complete</div>
                  <div>🔴 Chinese: 65% complete</div>
                  <div>🔴 Japanese: 60% complete</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Advanced Settings */}
        <TabsContent value="advanced" className="space-y-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900 dark:text-white">
                <Contrast className="mr-2 h-5 w-5" />
                Advanced Accessibility
              </CardTitle>
              <CardDescription className="dark:text-gray-300">
                Additional accessibility features and compliance settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">WCAG Compliance</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Level AA</span>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        ✓ Compliant
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Color Contrast</span>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        4.8:1
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Screen Reader</span>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        ✓ Compatible
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Assistive Technology</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Voice Control</span>
                      <Switch defaultChecked={false} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Eye Tracking</span>
                      <Switch defaultChecked={false} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Switch Navigation</span>
                      <Switch defaultChecked={false} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                <Button className="w-full">
                  Save Accessibility Settings
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                  Settings are saved automatically and synced across devices
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
