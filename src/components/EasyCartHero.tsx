
import { Button } from '@/components/ui/button';
import { MessageCircle, Shield, Users, Clock } from 'lucide-react';

export const EasyCartHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-sky-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Trust indicators bar */}
        <div className="flex justify-center items-center space-x-8 mb-12 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-green-600" />
            <span>Secure & Safe</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-blue-600" />
            <span>10,000+ Happy Customers</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-purple-600" />
            <span>24/7 Support</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left">
            {/* Logo */}
            <div className="flex justify-center md:justify-start mb-8">
              <img 
                src="/lovable-uploads/b16cfba5-84fc-4e8c-a277-9c1ade4faa14.png" 
                alt="EasyCart - Your friendly grocery shopping assistant with a grandmother character in a shopping cart"
                className="h-24 w-auto"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Shopping Made <span className="text-blue-600">Simple</span> & <span className="text-green-600">Safe</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Let our friendly assistant help you order groceries online. 
              No complicated websites, just tell us what you need. Trusted by families nationwide.
            </p>
            
            {/* Chat Assistant Preview */}
            <div className="bg-white rounded-3xl p-6 shadow-xl mb-8 max-w-md mx-auto md:mx-0 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                    <p className="text-gray-700 text-lg">
                      "Hi! I'm here to help you with your grocery shopping. 
                      What would you like to buy today?"
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Your personal shopping assistant</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-semibold w-full md:w-auto"
              >
                Start Shopping Now - Free Trial
              </Button>
              <p className="text-sm text-gray-600">
                ✓ No credit card required ✓ Cancel anytime ✓ Family can help setup
              </p>
            </div>
          </div>

          {/* Right Column - Enhanced Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Main illustration container */}
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl flex items-center justify-center shadow-xl border border-blue-200">
                <div className="text-center">
                  <div className="text-8xl mb-4">🛒</div>
                  <div className="text-5xl mb-4">👵</div>
                  <p className="text-gray-700 text-xl font-semibold mb-2">
                    Happy Shopping
                  </p>
                  <p className="text-gray-600 text-sm">
                    Simple • Safe • Secure
                  </p>
                </div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-3xl">✓</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">❤️</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl">🔒</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional trust signals */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-4">Trusted by families nationwide</p>
          <div className="flex justify-center space-x-8 text-gray-400">
            <div className="text-sm">★★★★★ 4.9/5 Rating</div>
            <div className="text-sm">BBB Accredited</div>
            <div className="text-sm">HIPAA Compliant</div>
          </div>
        </div>
      </div>
    </section>
  );
};
