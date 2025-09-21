import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  MessageCircle,
  RefreshCw
} from "lucide-react";
import LoadingSpinner from "@/components/ui/loading-spinner";

interface Message {
  id: string;
  content: string;
  type: 'user' | 'ai';
  timestamp: Date;
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm K-gen Assistant, your AI helper for SIT Trichy. I can help you with admissions, courses, campus life, and more. What would you like to know?",
      type: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      type: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response with realistic delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        type: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('admission') || lowerInput.includes('apply')) {
      return "Great choice! SIT Trichy offers admissions for various engineering programs. The admission process includes:\n\n• Online application submission\n• Merit-based selection through JEE/TNEA\n• Document verification\n• Fee payment\n\nWould you like specific information about any particular department?";
    }
    
    if (lowerInput.includes('department') || lowerInput.includes('course')) {
      return "SIT offers 6 main engineering departments:\n\n🖥️ Computer Science & Engineering\n🏗️ Civil Engineering\n⚙️ Mechanical Engineering\n⚡ Electrical & Electronics\n📡 Electronics & Communication\n🚗 Automobile Engineering\n\nEach department has state-of-the-art labs and experienced faculty. Which department interests you?";
    }
    
    if (lowerInput.includes('fee') || lowerInput.includes('cost')) {
      return "The fee structure varies by program:\n\n• B.E Programs: ₹80,000 - ₹1,20,000 per year\n• Scholarships available for merit students\n• Payment can be made in installments\n• Additional costs for hostel and mess\n\nWould you like detailed fee information for a specific program?";
    }
    
    if (lowerInput.includes('placement') || lowerInput.includes('job')) {
      return "SIT has an excellent placement record! 📈\n\n• 85%+ placement rate\n• Top recruiters: TCS, Infosys, Wipro, L&T, Ashok Leyland\n• Highest package: ₹12 LPA\n• Average package: ₹4.5 LPA\n• Dedicated Training & Placement cell\n\nWe also provide pre-placement training and skill development programs.";
    }
    
    if (lowerInput.includes('campus') || lowerInput.includes('facility')) {
      return "SIT campus features world-class facilities:\n\n🏫 Modern academic blocks\n💻 Advanced computer labs\n🔬 Well-equipped engineering labs\n📚 Central library with digital resources\n🏃‍♂️ Sports complex and gymnasium\n🏠 Separate hostels for boys and girls\n🍽️ Multi-cuisine cafeteria\n\nThe campus is Wi-Fi enabled and eco-friendly!";
    }

    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return "Hello! 👋 Welcome to SIT Trichy. I'm here to help you with any questions about our college, admissions, departments, or campus life. What would you like to know?";
    }
    
    // Default response
    return "Thanks for your question! I can help you with information about:\n\n• Admissions process and eligibility\n• Department details and courses\n• Fee structure and scholarships\n• Placement statistics and companies\n• Campus facilities and hostel life\n• Contact information\n\nPlease feel free to ask about any of these topics!";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        content: "Hello! I'm K-gen Assistant, your AI helper for SIT Trichy. I can help you with admissions, courses, campus life, and more. What would you like to know?",
        type: 'ai',
        timestamp: new Date()
      }
    ]);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-glow border-0 bg-gradient-card overflow-hidden">
      <CardHeader className="bg-gradient-primary text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-xl">K-gen AI Assistant</CardTitle>
              <p className="text-sm opacity-90">Your smart college companion</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <MessageCircle className="w-3 h-3 mr-1" />
              Online
            </Badge>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={clearChat}
              className="text-white hover:bg-white/20"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {/* Messages Area */}
        <div className="h-96 overflow-y-auto p-6 space-y-4 bg-background/50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.type === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.type === 'user' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground'
              }`}>
                {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              
              <div className={`max-w-[80%] ${message.type === 'user' ? 'text-right' : ''}`}>
                <div className={`rounded-2xl px-4 py-3 ${
                  message.type === 'user'
                    ? 'bg-primary text-primary-foreground ml-auto'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {message.content}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-1 px-2">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-muted rounded-2xl px-4 py-3">
                <LoadingSpinner size="sm" />
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t bg-background">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about SIT Trichy..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button 
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              className="px-4"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            AI responses are generated for demonstration. For official information, please contact the college directly.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIChat;