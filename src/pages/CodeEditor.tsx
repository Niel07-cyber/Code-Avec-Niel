
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Play, 
  Save, 
  Download, 
  Upload, 
  RefreshCw,
  Settings,
  Maximize2,
  Eye,
  Code2
} from "lucide-react";

const CodeEditor = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState("");

  const languageTemplates = {
    javascript: `// JavaScript Example
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci sequence:");
for (let i = 0; i < 10; i++) {
    console.log(\`F(\${i}) = \${fibonacci(i)}\`);
}

// DOM Manipulation Example
const button = document.createElement('button');
button.textContent = 'Click me!';
button.addEventListener('click', () => {
    alert('Hello from JavaScript!');
});`,

    python: `# Python Example
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print("Fibonacci sequence:")
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")

# List comprehension example
squares = [x**2 for x in range(1, 11)]
print(f"Squares: {squares}")

# Class example
class Calculator:
    def __init__(self):
        self.history = []
    
    def add(self, a, b):
        result = a + b
        self.history.append(f"{a} + {b} = {result}")
        return result

calc = Calculator()
print(calc.add(5, 3))`,

    java: `// Java Example
public class Main {
    public static void main(String[] args) {
        System.out.println("Fibonacci sequence:");
        for (int i = 0; i < 10; i++) {
            System.out.println("F(" + i + ") = " + fibonacci(i));
        }
        
        // Array example
        int[] numbers = {1, 2, 3, 4, 5};
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        System.out.println("Sum: " + sum);
    }
    
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Class example
class Calculator {
    private int result;
    
    public Calculator() {
        this.result = 0;
    }
    
    public int add(int a, int b) {
        result = a + b;
        return result;
    }
    
    public int getResult() {
        return result;
    }
}`,

    cpp: `// C++ Example
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    cout << "Fibonacci sequence:" << endl;
    for (int i = 0; i < 10; i++) {
        cout << "F(" << i << ") = " << fibonacci(i) << endl;
    }
    
    // Vector example
    vector<int> numbers = {5, 2, 8, 1, 9};
    sort(numbers.begin(), numbers.end());
    
    cout << "Sorted numbers: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}

// Class example
class Calculator {
private:
    int result;
    
public:
    Calculator() : result(0) {}
    
    int add(int a, int b) {
        result = a + b;
        return result;
    }
    
    int getResult() const {
        return result;
    }
};`,

    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        .container {
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
        button {
            background: #ff6b6b;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to HTML/CSS/JS</h1>
        <p>This is a sample HTML page with embedded CSS and JavaScript.</p>
        
        <div id="content">
            <h2>Interactive Elements</h2>
            <button onclick="changeColor()">Change Background</button>
            <button onclick="addElement()">Add Element</button>
        </div>
        
        <div id="dynamic-content"></div>
    </div>

    <script>
        function changeColor() {
            document.body.style.background = \`linear-gradient(135deg, #\${Math.floor(Math.random()*16777215).toString(16)} 0%, #\${Math.floor(Math.random()*16777215).toString(16)} 100%)\`;
        }
        
        function addElement() {
            const div = document.createElement('div');
            div.innerHTML = '<p>New element added! ' + new Date().toLocaleTimeString() + '</p>';
            document.getElementById('dynamic-content').appendChild(div);
        }
        
        // Auto-run animation
        setInterval(changeColor, 3000);
    </script>
</body>
</html>`
  };

  const [code, setCode] = useState(languageTemplates[selectedLanguage as keyof typeof languageTemplates]);

  const languageLogos = {
    javascript: "🟨",
    python: "🐍", 
    java: "☕",
    cpp: "⚡",
    html: "🌐"
  };

  const languages = [
    { value: "javascript", label: "JavaScript", logo: "🟨" },
    { value: "python", label: "Python", logo: "🐍" },
    { value: "java", label: "Java", logo: "☕" },
    { value: "cpp", label: "C++", logo: "⚡" },
    { value: "html", label: "HTML/CSS", logo: "🌐" }
  ];

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setCode(languageTemplates[language as keyof typeof languageTemplates]);
    setOutput("");
  };

  const runCode = () => {
    setIsRunning(true);
    setOutput("Running code...");
    
    // Simulate code execution
    setTimeout(() => {
      const outputs = {
        javascript: `Fibonacci sequence:
F(0) = 0
F(1) = 1
F(2) = 1
F(3) = 2
F(4) = 3
F(5) = 5
F(6) = 8
F(7) = 13
F(8) = 21
F(9) = 34`,
        python: `Fibonacci sequence:
F(0) = 0
F(1) = 1
F(2) = 1
F(3) = 2
F(4) = 3
F(5) = 5
F(6) = 8
F(7) = 13
F(8) = 21
F(9) = 34
Squares: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
8`,
        java: `Fibonacci sequence:
F(0) = 0
F(1) = 1
F(2) = 1
F(3) = 2
F(4) = 3
F(5) = 5
F(6) = 8
F(7) = 13
F(8) = 21
F(9) = 34
Sum: 15`,
        cpp: `Fibonacci sequence:
F(0) = 0
F(1) = 1
F(2) = 1
F(3) = 2
F(4) = 3
F(5) = 5
F(6) = 8
F(7) = 13
F(8) = 21
F(9) = 34
Sorted numbers: 1 2 5 8 9`,
        html: `HTML page rendered successfully!
Interactive elements loaded.
Background animation started.`
      };
      
      setOutput(outputs[selectedLanguage as keyof typeof outputs] || "Code executed successfully!");
      setIsRunning(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Code Laboratory</h1>
          <p className="text-xl text-muted-foreground">
            Practice coding with our interactive code editor
          </p>
        </div>

        {/* Toolbar */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{languageLogos[selectedLanguage as keyof typeof languageLogos]}</span>
                  <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.value} value={lang.value}>
                          <div className="flex items-center space-x-2">
                            <span>{lang.logo}</span>
                            <span>{lang.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="px-3 py-1">
                    <Code2 className="h-3 w-3 mr-1" />
                    {selectedLanguage.toUpperCase()}
                  </Badge>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Import
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Button variant="outline" size="sm">
                  <Maximize2 className="h-4 w-4 mr-2" />
                  Fullscreen
                </Button>
                <Button 
                  onClick={runCode} 
                  disabled={isRunning}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  {isRunning ? (
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <Play className="h-4 w-4 mr-2" />
                  )}
                  {isRunning ? 'Running...' : 'Run Code'}
                </Button>
                <Button variant="outline" size="sm">
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Editor Layout */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Code Editor */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code2 className="mr-2 h-5 w-5" />
                Code Editor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-96 p-4 font-mono text-sm bg-gray-900 text-green-400 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your code here..."
                  style={{ fontSize: '14px' }}
                />
                <div className="absolute top-2 right-2 flex space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Lines: {code.split('\n').length}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Chars: {code.length}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Output Panel */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="mr-2 h-5 w-5" />
                Output
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 p-4 bg-gray-900 text-white font-mono text-sm rounded-lg overflow-auto">
                {output ? (
                  <pre className="whitespace-pre-wrap">{output}</pre>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <div className="text-center">
                      <Play className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Click "Run Code" to see the output</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Resources */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Learning Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold mb-2">📚 Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  Access comprehensive documentation for {selectedLanguage.toUpperCase()}
                </p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold mb-2">🎯 Challenges</h3>
                <p className="text-sm text-muted-foreground">
                  Practice with coding challenges and exercises
                </p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold mb-2">💡 Examples</h3>
                <p className="text-sm text-muted-foreground">
                  Explore code examples and best practices
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CodeEditor;
