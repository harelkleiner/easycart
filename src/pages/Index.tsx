import { useState, useRef, useEffect } from 'react';
import { Header } from '@/components/Header';
import { ChatMessage } from '@/components/ChatMessage';
import { ChatInput } from '@/components/ChatInput';
import { LoadingIndicator } from '@/components/LoadingIndicator';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'system';
  timestamp: Date;
}

// Configuration for different environments
const config = {
  // The URL of your local trigger server - this should always be localhost
  // because the automation needs to run on your computer
  TRIGGER_SERVER_URL: 'http://localhost:4000',
  
  // The webhook URL can be different for dev/prod
  WEBHOOK_URL: 'https://hujihackathon2025.app.n8n.cloud/webhook-test/shopping'
};

const Index = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: t('chat.welcomeMessage'),
      sender: 'system',
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [waitingForConfirmation, setWaitingForConfirmation] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Update welcome message when language changes
  useEffect(() => {
    setMessages(prev => {
      const newMessages = [...prev];
      if (newMessages[0] && newMessages[0].id === '1') {
        newMessages[0] = {
          ...newMessages[0],
          text: t('chat.welcomeMessage')
        };
      }
      return newMessages;
    });
  }, [t]);

  const runShoppingAgent = async () => {
    try {
      const successResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Starting shopping agent...',
        sender: 'system',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, successResponse]);

      // Use Cursor's built-in terminal command functionality
      const event = new CustomEvent('cursor:command', {
        detail: {
          command: 'node --experimental-modules shopAgent.js',
          is_background: false,
          explanation: 'Running the shopping agent script with ES modules support'
        }
      });
      window.dispatchEvent(event);

      const completionResponse: Message = {
        id: (Date.now() + 2).toString(),
        text: 'Shopping agent started! Check the terminal for progress.',
        sender: 'system',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, completionResponse]);

    } catch (error) {
      console.error('Error running shopping agent:', error);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `Error running shopping agent: ${error.message}`,
        sender: 'system',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorResponse]);
    }
  };

  const handleSendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // First, get response from webhook
      const url = new URL(config.WEBHOOK_URL);
      url.searchParams.append('message', JSON.stringify({ text }));
      
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Webhook response status:', response.status);
      
      // Handle and display webhook response
      if (response.ok) {
        const responseData = await response.json();
        console.log('Webhook response data:', responseData);
        
        // Always show this message regardless of webhook response
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          text: "okay i will start the shopping",
          sender: 'system',
          timestamp: new Date(),
        }]);

        // After webhook response is displayed, trigger the automation
        try {
          const triggerResponse = await fetch(`${config.TRIGGER_SERVER_URL}/trigger`);
          
          if (!triggerResponse.ok) {
            throw new Error('Failed to start automation. Make sure the trigger server is running on your computer.');
          }

          setMessages(prev => [...prev, {
            id: (Date.now() + 2).toString(),
            text: 'Shopping automation started! Check your computer for the browser window. (Make sure trigger.js is running locally)',
            sender: 'system',
            timestamp: new Date(),
          }]);
        } catch (automationError) {
          console.error('Automation error:', automationError);
          setMessages(prev => [...prev, {
            id: (Date.now() + 2).toString(),
            text: `Failed to start shopping automation: Make sure trigger.js is running on your computer (node trigger.js)`,
            sender: 'system',
            timestamp: new Date(),
          }]);
        }
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: `Error: ${error.message}`,
        sender: 'system',
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-4 py-6">
        <div className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isLoading && <LoadingIndicator />}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="border-t border-gray-200 p-6">
            <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
