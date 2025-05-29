
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

export const Header = () => {
  const { t } = useLanguage();
  
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 relative">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Language selector - fixed position on the right */}
        <div className="absolute top-4 right-4 z-10">
          <div className="flex-shrink-0">
            <LanguageSelector />
          </div>
        </div>
        
        <div className="pt-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            {t('header.title')}
          </h1>
          <p className="text-lg text-gray-600 text-center mt-2">
            {t('header.subtitle')}
          </p>
        </div>
      </div>
    </header>
  );
};
