
import { Shield, Phone, Mail, Clock, MapPin, Heart } from 'lucide-react';

export const EasyCartFooter = () => {
  return (
    <footer className="bg-gray-50 py-16 px-4 border-t border-gray-200" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/b16cfba5-84fc-4e8c-a277-9c1ade4faa14.png" 
                alt="EasyCart Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Making grocery shopping simple, safe, and accessible for everyone, 
              especially those who need a little extra help with technology. 
              Proudly serving families across the United States.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Heart className="w-5 h-5 text-red-600" />
                <span className="text-sm">Family Approved</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-6">Get Help Today</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-gray-800 font-medium">1-800-EASYCART</p>
                  <p className="text-gray-600 text-sm">(1-800-327-9227)</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-gray-800 font-medium">help@easycart.com</p>
                  <p className="text-gray-600 text-sm">Usually respond within 2 hours</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-gray-800 font-medium">24/7 Support</p>
                  <p className="text-gray-600 text-sm">Real humans, always available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Trust */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-6">Our Promise</h4>
            <div className="space-y-3">
              <p className="text-gray-700 font-medium">✓ Simple & Easy to Use</p>
              <p className="text-gray-700 font-medium">✓ Completely Secure</p>
              <p className="text-gray-700 font-medium">✓ No Hidden Fees</p>
              <p className="text-gray-700 font-medium">✓ Family Friendly</p>
              <p className="text-gray-700 font-medium">✓ Cancel Anytime</p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Trusted Certifications:</p>
              <div className="space-y-1 text-xs text-gray-500">
                <p>BBB Accredited Business</p>
                <p>HIPAA Compliant</p>
                <p>SOC 2 Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-200">
          <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">What Our Customers Say</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <blockquote className="text-gray-700 italic">
              "EasyCart has been a lifesaver. I can now shop for groceries without struggling with complicated websites."
              <footer className="text-gray-600 font-medium mt-2">- Margaret K., Age 78</footer>
            </blockquote>
            <blockquote className="text-gray-700 italic">
              "My dad loves using EasyCart. It's given him back his independence and our family peace of mind."
              <footer className="text-gray-600 font-medium mt-2">- David R., Son of Customer</footer>
            </blockquote>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600 text-lg mb-2">
            © 2024 EasyCart. Making technology accessible for everyone.
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Accessibility</span>
            <span>•</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
