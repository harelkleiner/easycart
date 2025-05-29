
import { Button } from '@/components/ui/button';
import { MessageCircle, Shield, Phone, Heart } from 'lucide-react';

export const EasyCartCTA = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800" aria-labelledby="cta-heading">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-12">
          <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <MessageCircle className="w-14 h-14 text-blue-600" />
          </div>
          <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Make Shopping <span className="text-yellow-300">Simple Again?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join over 10,000 happy customers who've made grocery shopping simple, safe, and stress-free. 
            Your personal shopping assistant is waiting to help you right now.
          </p>
        </div>

        {/* Trust indicators */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
            <Shield className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">100% Secure</h3>
            <p className="text-blue-100 text-sm">Bank-level encryption protects your information</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
            <Phone className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
            <p className="text-blue-100 text-sm">Real humans ready to help anytime</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
            <Heart className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Family Trusted</h3>
            <p className="text-blue-100 text-sm">Recommended by families nationwide</p>
          </div>
        </div>

        <div className="space-y-6">
          <Button 
            size="lg" 
            className="bg-white text-blue-700 hover:bg-blue-50 text-2xl px-16 py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold transform hover:scale-105"
            aria-describedby="cta-description"
          >
            Start Your Free Trial Today
          </Button>
          
          <div id="cta-description" className="space-y-3">
            <p className="text-blue-200 text-lg font-medium">
              ✓ Free to try • ✓ No credit card required • ✓ Cancel anytime
            </p>
            <p className="text-blue-300 text-base">
              Your family can help you get started • Available on any device
            </p>
          </div>

          {/* Testimonial snippet */}
          <div className="mt-12 bg-white/10 backdrop-blur rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
            <p className="text-white text-lg italic mb-4">
              "EasyCart has been a blessing for our family. My mother can now order groceries independently, and we have peace of mind knowing she's getting the help she needs."
            </p>
            <p className="text-blue-200 font-medium">- Sarah M., Happy Customer</p>
          </div>
        </div>
      </div>
    </section>
  );
};
