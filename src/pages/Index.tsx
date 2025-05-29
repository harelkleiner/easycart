
import { useState, useRef, useEffect } from 'react';
import { Header } from '@/components/Header';
import { ChatMessage } from '@/components/ChatMessage';
import { ChatInput } from '@/components/ChatInput';
import { LoadingIndicator } from '@/components/LoadingIndicator';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'system';
  timestamp: Date;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m here to help you with your grocery shopping. You can tell me things like "I need milk, bread, and eggs" or "Help me find ingredients for pasta dinner." What groceries would you like to order today?',
      sender: 'system',
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate API call - in real implementation, this would call your backend
    setTimeout(() => {
      const systemResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'I understand you want to add those items to your grocery order. Let me help you find the best options and prices for those products. This is a demo response - in the full version, I would search for your items and help you complete your grocery order.',
        sender: 'system',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, systemResponse]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-4 py-6">
        {/* Chat Container */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col overflow-hidden">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isLoading && <LoadingIndicator />}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input Area */}
          <div className="border-t border-gray-200 p-6">
            <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
