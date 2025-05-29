
import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !disabled) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 items-end">
      <div className="flex-1">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Tell me what groceries you need... For example: 'I need milk, bread, and bananas' or 'Help me plan dinner for tonight'"
          disabled={disabled}
          className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none min-h-[60px] max-h-32"
          rows={1}
        />
      </div>
      <Button
        type="submit"
        disabled={!inputValue.trim() || disabled}
        size="lg"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-[60px] min-w-[60px]"
      >
        <Send className="h-5 w-5" />
        <span className="sr-only">Send message</span>
      </Button>
    </form>
  );
};
