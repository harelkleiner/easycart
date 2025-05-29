
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export const EasyCartCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <MessageCircle className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            Join thousands of happy customers who've made grocery shopping simple again. 
            Your personal shopping assistant is waiting to help you.
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
          >
            Start Shopping Now
          </Button>
          <p className="text-blue-200 text-lg">
            Free to try • No credit card required • Get help anytime
          </p>
        </div>
      </div>
    </section>
  );
};
