
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

export const Header = () => {
  const { t } = useLanguage();
  
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex-1"></div>
          <div className="flex-shrink-0">
            <LanguageSelector />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          {t('header.title')}
        </h1>
        <p className="text-lg text-gray-600 text-center mt-2">
          {t('header.subtitle')}
        </p>
      </div>
    </header>
  );
};
