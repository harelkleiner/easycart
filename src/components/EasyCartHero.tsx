
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export const EasyCartHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-sky-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Shopping Made <span className="text-blue-600">Simple</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Let our friendly assistant help you order groceries online. 
              No complicated websites, just tell us what you need.
            </p>
            
            {/* Chat Assistant Preview */}
            <div className="bg-white rounded-3xl p-6 shadow-lg mb-8 max-w-md mx-auto md:mx-0">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-blue-50 rounded-2xl p-4">
                    <p className="text-gray-700 text-lg">
                      "Hi! I'm here to help you with your grocery shopping. 
                      What would you like to buy today?"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
            >
              Start Shopping Now
            </Button>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Placeholder for elderly woman with cart illustration */}
              <div className="w-80 h-80 md:w-96 md:h-96 bg-blue-100 rounded-3xl flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">🛒</div>
                  <div className="text-4xl mb-2">👵</div>
                  <p className="text-gray-600 text-lg font-medium">
                    Happy Shopping
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">✓</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl">❤️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
