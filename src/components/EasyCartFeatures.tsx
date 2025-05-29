
import { Phone, Heart, Users, Globe, CheckCircle } from 'lucide-react';

export const EasyCartFeatures = () => {
  const features = [
    {
      title: "Large, Clear Design",
      description: "Everything designed with large fonts and high contrast for easy reading",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Simple Conversations",
      description: "Just talk naturally - no complicated forms or confusing menus",
      icon: <Heart className="w-6 h-6 text-green-600" />
    },
    {
      title: "No Downloads Required",
      description: "Works in your web browser on any device - computer, tablet, or phone",
      icon: <Globe className="w-6 h-6 text-teal-600" />
    },
    {
      title: "Family-Friendly Setup",
      description: "Your family can help you get started and place orders together",
      icon: <Users className="w-6 h-6 text-pink-600" />
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Designed With You In Mind
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every feature is built with accessibility and ease-of-use as our top priority
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-3">
                {feature.icon}
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Customer Testimonials Image */}
        <div className="mt-16 text-center">
          <img 
            src="/lovable-uploads/354f4c79-557f-4a76-a678-3721dd42a081.png" 
            alt="Customer testimonials showing positive feedback from EasyCart users"
            className="max-w-4xl w-full mx-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
