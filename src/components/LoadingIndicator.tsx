
export const LoadingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="max-w-2xl mr-12">
        <div className="bg-gray-100 rounded-2xl px-6 py-4">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <span className="text-lg text-gray-600">Assistant is thinking...</span>
          </div>
        </div>
      </div>
    </div>
  );
};
