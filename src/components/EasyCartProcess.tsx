
import { MessageCircle, ShoppingCart, CreditCard } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const EasyCartProcess = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: "1",
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      color: "bg-blue-500"
    },
    {
      number: "2", 
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      icon: <ShoppingCart className="w-8 h-8 text-white" />,
      color: "bg-green-500"
    },
    {
      number: "3",
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      icon: <CreditCard className="w-8 h-8 text-white" />,
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white" aria-labelledby="process-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('process.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Families Choose EasyCart */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('process.whyTitle')}</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-center space-x-3">
              <span className="text-green-600 text-lg">✓</span>
              <span>{t('process.benefit1')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-600 text-lg">✓</span>
              <span>{t('process.benefit2')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-600 text-lg">✓</span>
              <span>{t('process.benefit3')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-600 text-lg">✓</span>
              <span>{t('process.benefit4')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
