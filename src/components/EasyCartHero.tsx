
import { Button } from '@/components/ui/button';
import { MessageCircle, Shield, Users, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

export const EasyCartHero = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();

  const handleStartShopping = () => {
    navigate('/original');
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-sky-100 py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Language selector - fixed position on the right */}
        <div className="absolute top-8 right-4 z-10">
          <div className="flex-shrink-0">
            <LanguageSelector />
          </div>
        </div>

        {/* Trust indicators bar */}
        <div className={`flex justify-center items-center mb-12 text-sm text-gray-600 mt-16 ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
          <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
            <Shield className="w-4 h-4 text-green-600" />
            <span>{t('trust.secure')}</span>
          </div>
          <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
            <Users className="w-4 h-4 text-blue-600" />
            <span>{t('trust.customers')}</span>
          </div>
          <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
            <Clock className="w-4 h-4 text-purple-600" />
            <span>{t('trust.support')}</span>
          </div>
        </div>

        {/* Single column layout - Text Content */}
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/b16cfba5-84fc-4e8c-a277-9c1ade4faa14.png" 
              alt="EasyCart - Your friendly grocery shopping assistant with a grandmother character in a shopping cart"
              className="h-48 w-auto"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          {/* Chat Assistant Preview */}
          <div className="bg-white rounded-3xl p-6 shadow-xl mb-8 max-w-md mx-auto border border-gray-100">
            <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                  <p className="text-gray-700 text-lg">
                    "{t('hero.chatPreview')}"
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-2">{t('hero.assistantLabel')}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              size="lg" 
              onClick={handleStartShopping}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-semibold w-full md:w-auto"
            >
              {t('hero.startShopping')}
            </Button>
            <p className="text-sm text-gray-600">
              {t('hero.noCredit')}
            </p>
          </div>
        </div>

        {/* Additional trust signals */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-4">{t('hero.trusted')}</p>
          <div className={`flex justify-center text-gray-400 ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            <div className="text-sm">{t('hero.rating')}</div>
            <div className="text-sm">{t('hero.bbb')}</div>
            <div className="text-sm">{t('hero.hipaa')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
