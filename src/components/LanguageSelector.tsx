
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center relative">
      <Select value={language} onValueChange={(value) => setLanguage(value as 'en' | 'he')}>
        <SelectTrigger className="w-[140px] pr-10">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">{t('language.english')}</SelectItem>
          <SelectItem value="he">{t('language.hebrew')}</SelectItem>
        </SelectContent>
      </Select>
      <Globe className="h-4 w-4 text-gray-600 absolute right-2 pointer-events-none" />
    </div>
  );
};
