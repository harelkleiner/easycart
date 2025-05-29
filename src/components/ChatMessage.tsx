
import { format } from 'date-fns';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'system';
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-2xl ${isUser ? 'ml-12' : 'mr-12'}`}>
        <div
          className={`rounded-2xl px-6 py-4 ${
            isUser
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-900'
          }`}
        >
          <p className="text-lg leading-relaxed">{message.text}</p>
        </div>
        <p className={`text-sm text-gray-500 mt-2 ${isUser ? 'text-right' : 'text-left'}`}>
          {format(message.timestamp, 'HH:mm')}
        </p>
      </div>
    </div>
  );
};
