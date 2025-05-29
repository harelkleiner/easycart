
import { Shield, Phone, Heart, Users, Globe, CheckCircle } from 'lucide-react';

export const EasyCartFeatures = () => {
  const features = [
    {
      title: "Large, Clear Design",
      description: "Everything is designed with large fonts and high contrast for easy reading",
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Simple Conversations",
      description: "Just talk naturally - no complicated forms, buttons, or confusing menus",
      icon: <Heart className="w-8 h-8 text-green-600" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "Bank-Level Security",
      description: "Your payment and personal information is protected with military-grade encryption",
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Personal Human Support",
      description: "Real people available 24/7 to help - just like talking to a helpful neighbor",
      icon: <Phone className="w-8 h-8 text-orange-600" />,
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      title: "No Downloads Required",
      description: "Works right in your web browser on any device - computer, tablet, or phone",
      icon: <Globe className="w-8 h-8 text-teal-600" />,
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    },
    {
      title: "Family-Friendly Setup",
      description: "Your children or grandchildren can help you get started and place orders",
      icon: <Users className="w-8 h-8 text-pink-600" />,
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 id="features-heading" className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Designed With <span className="text-blue-600">You</span> In Mind
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We understand that technology can feel overwhelming. 
            That's why EasyCart is designed to be as simple, safe, and friendly as possible.
            Every feature is built with accessibility and ease-of-use as our top priority.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <article 
              key={index} 
              className={`${feature.bgColor} ${feature.borderColor} border-2 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              tabIndex={0}
              role="article"
              aria-labelledby={`feature-${index}-title`}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  {feature.icon}
                </div>
              </div>
              <h3 id={`feature-${index}-title`} className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        {/* Trust section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Safety Is Our Priority</h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span>SSL Encrypted</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>Privacy Protected</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5 text-red-600" />
                <span>Family Approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
