
import { Phone, Heart, Users, Globe, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const EasyCartFeatures = () => {
  const { t, isRTL } = useLanguage();
  
  const features = [
    {
      title: t('features.largeDesign.title'),
      description: t('features.largeDesign.description'),
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />
    },
    {
      title: t('features.simpleConversations.title'),
      description: t('features.simpleConversations.description'),
      icon: <Heart className="w-6 h-6 text-green-600" />
    },
    {
      title: t('features.noDownloads.title'),
      description: t('features.noDownloads.description'),
      icon: <Globe className="w-6 h-6 text-teal-600" />
    },
    {
      title: t('features.familyFriendly.title'),
      description: t('features.familyFriendly.description'),
      icon: <Users className="w-6 h-6 text-pink-600" />
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`flex items-center mb-3 ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
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
