
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

    // Send GET request to the webhook URL with the message as JSON
    try {
      const url = new URL('https://hujihackathon2025.app.n8n.cloud/webhook-test/shopping');
      url.searchParams.append('message', JSON.stringify({ text }));
      
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Webhook response status:', response.status);
      
      if (response.ok) {
        // Parse the JSON response
        const responseData = await response.json();
        console.log('Webhook response data:', responseData);
        
        // Extract the message content from the JSON response
        let responseText = '';
        if (typeof responseData === 'string') {
          responseText = responseData;
        } else if (responseData.message) {
          responseText = responseData.message;
        } else if (responseData.text) {
          responseText = responseData.text;
        } else if (responseData.response) {
          responseText = responseData.response;
        } else {
          // If no specific message field, stringify the entire response
          responseText = JSON.stringify(responseData, null, 2);
        }
        
        const systemResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: responseText,
          sender: 'system',
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, systemResponse]);
      } else {
        console.error('Failed to send message to webhook:', response.status);
        // Add error message to chat
        const errorResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: `Sorry, I encountered an error (${response.status}). Please try again.`,
          sender: 'system',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, errorResponse]);
      }
    } catch (error) {
      console.error('Error sending message to webhook:', error);
      
      // Add CORS/network error message to chat
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I\'m having trouble connecting to the service right now. This might be due to network restrictions. Please try again later.',
        sender: 'system',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorResponse]);
    }

    setIsLoading(false);
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
