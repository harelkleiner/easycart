
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'he';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation keys and values
const translations = {
  en: {
    // Header
    'header.title': 'Digital Assistant',
    'header.subtitle': 'Your helpful companion for digital tasks',
    
    // Hero section
    'hero.title': 'Shopping Made Simple & Safe',
    'hero.subtitle': 'Let our friendly assistant help you order groceries online. No complicated websites, just tell us what you need. Trusted by families nationwide.',
    'hero.startShopping': 'Start shopping now',
    'hero.noCredit': '✓ No credit card required ✓ Cancel anytime ✓ Family can help setup',
    'hero.trusted': 'Trusted by families nationwide',
    'hero.rating': '★★★★★ 4.9/5 Rating',
    'hero.bbb': 'BBB Accredited',
    'hero.hipaa': 'HIPAA Compliant',
    'hero.chatPreview': 'Hi! I\'m here to help you with your grocery shopping. What would you like to buy today?',
    'hero.assistantLabel': 'Your personal shopping assistant',
    
    // Trust indicators
    'trust.secure': 'Secure & Safe',
    'trust.customers': '10,000+ Happy Customers',
    'trust.support': '24/7 Support',
    
    // Process section
    'process.title': 'How EasyCart Works',
    'process.subtitle': 'Getting your groceries delivered is as easy as having a conversation',
    'process.step1.title': 'Tell Us What You Need',
    'process.step1.description': 'Chat with our friendly assistant about your groceries',
    'process.step2.title': 'We Fill Your Cart',
    'process.step2.description': 'We find the best products at great prices for you',
    'process.step3.title': 'You Approve & Pay',
    'process.step3.description': 'Review your order and complete your purchase securely',
    'process.whyTitle': 'Why Families Choose EasyCart',
    'process.benefit1': 'Works with your existing grocery store accounts',
    'process.benefit2': 'No hidden fees or subscription required',
    'process.benefit3': 'Real human support when you need help',
    'process.benefit4': 'Trusted by thousands of satisfied customers',
    
    // Features section
    'features.title': 'Designed With You In Mind',
    'features.subtitle': 'Every feature is built with accessibility and ease-of-use as our top priority',
    'features.largeDesign.title': 'Large, Clear Design',
    'features.largeDesign.description': 'Everything designed with large fonts and high contrast for easy reading',
    'features.simpleConversations.title': 'Simple Conversations',
    'features.simpleConversations.description': 'Just talk naturally - no complicated forms or confusing menus',
    'features.noDownloads.title': 'No Downloads Required',
    'features.noDownloads.description': 'Works in your web browser on any device - computer, tablet, or phone',
    'features.familyFriendly.title': 'Family-Friendly Setup',
    'features.familyFriendly.description': 'Your family can help you get started and place orders together',
    
    // Chat
    'chat.welcomeMessage': 'Hello! I\'m here to help you with your grocery shopping. You can tell me things like "I need milk, bread, and eggs" or "Help me find ingredients for pasta dinner." What groceries would you like to order today?',
    'chat.placeholder': 'Tell me what groceries you need... For example: \'I need milk, bread, and bananas\' or \'Help me plan dinner for tonight\'',
    'chat.errorMessage': 'Sorry, I encountered an error ({status}). Please try again.',
    'chat.networkError': 'Sorry, I\'m having trouble connecting to the service right now. This might be due to network restrictions. Please try again later.',
    
    // Language selector
    'language.english': 'English',
    'language.hebrew': 'עברית',
  },
  he: {
    // Header
    'header.title': 'עוזר דיגיטלי',
    'header.subtitle': 'המלווה הידידותי שלך למשימות דיגיטליות',
    
    // Hero section
    'hero.title': 'קניות פשוטות ובטוחות',
    'hero.subtitle': 'תן לעוזר הידידותי שלנו לסייע לך להזמין מצרכים באינטרנט. ללא אתרים מסובכים, פשוט ספר לנו מה אתה צריך. אמין ובטוח למשפחות בכל הארץ.',
    'hero.startShopping': 'התחל לקנות עכשיו',
    'hero.noCredit': '✓ ללא צורך בכרטיס אשראי ✓ ביטול בכל עת ✓ המשפחה יכולה לעזור בהגדרה',
    'hero.trusted': 'מהימן על ידי משפחות בכל הארץ',
    'hero.rating': '★★★★★ דירוג 4.9/5',
    'hero.bbb': 'מוסמך BBB',
    'hero.hipaa': 'תואם HIPAA',
    'hero.chatPreview': 'שלום! אני כאן כדי לעזור לך עם קניות המצרכים. מה תרצה לקנות היום?',
    'hero.assistantLabel': 'העוזר האישי שלך לקניות',
    
    // Trust indicators
    'trust.secure': 'בטוח ומאובטח',
    'trust.customers': 'יותר מ-10,000 לקוחות מרוצים',
    'trust.support': 'תמיכה 24/7',
    
    // Process section
    'process.title': 'איך EasyCart עובד',
    'process.subtitle': 'לקבל מצרכים עד הבית פשוט כמו שיחה',
    'process.step1.title': 'ספר לנו מה אתה צריך',
    'process.step1.description': 'שוחח עם העוזר הידידותי שלנו על המצרכים שלך',
    'process.step2.title': 'אנחנו ממלאים את העגלה',
    'process.step2.description': 'אנחנו מוצאים עבורך את המוצרים הטובים ביותר במחירים הטובים ביותר',
    'process.step3.title': 'אתה מאשר ומשלם',
    'process.step3.description': 'בדוק את ההזמנה שלך והשלם את הרכישה בבטחה',
    'process.whyTitle': 'למה משפחות בוחרות ב-EasyCart',
    'process.benefit1': 'עובד עם חשבונות חנויות המצרכים הקיימים שלך',
    'process.benefit2': 'ללא עמלות נסתרות או מנוי נדרש',
    'process.benefit3': 'תמיכה אנושית אמיתית כשאתה צריך עזרה',
    'process.benefit4': 'מהימן על ידי אלפי לקוחות מרוצים',
    
    // Features section
    'features.title': 'מעוצב במיוחד עבורך',
    'features.subtitle': 'כל תכונה נבנתה עם נגישות וקלות שימוש כעדיפות עליונה',
    'features.largeDesign.title': 'עיצוב גדול וברור',
    'features.largeDesign.description': 'הכל מעוצב עם גופנים גדולים וניגודיות גבוהה לקריאה נוחה',
    'features.simpleConversations.title': 'שיחות פשוטות',
    'features.simpleConversations.description': 'פשוט דבר באופן טבעי - ללא טפסים מסובכים או תפריטים מבלבלים',
    'features.noDownloads.title': 'ללא צורך בהורדות',
    'features.noDownloads.description': 'עובד בדפדפן האינטרנט שלך בכל מכשיר - מחשב, טאבלט או סמארטפון',
    'features.familyFriendly.title': 'התקנה ידידותית למשפחה',
    'features.familyFriendly.description': 'המשפחה שלך יכולה לעזור לך להתחיל ולבצע הזמנות יחד',
    
    // Chat
    'chat.welcomeMessage': 'שלום! אני כאן כדי לעזור לך עם קניות המצרכים. אתה יכול להגיד לי דברים כמו "אני צריך חלב, לחם וביצים" או "עזור לי למצוא רכיבים לארוחת פסטה". איזה מצרכים תרצה להזמין היום?',
    'chat.placeholder': 'ספר לי איזה מצרכים אתה צריך... לדוגמה: \'אני צריך חלב, לחם ובננות\' או \'עזור לי לתכנן ארוחת ערב\'',
    'chat.errorMessage': 'מצטער, נתקלתי בשגיאה ({status}). אנא נסה שוב.',
    'chat.networkError': 'מצטער, יש לי בעיה להתחבר לשירות כרגע. ייתכן שזה בגלל הגבלות רשת. אנא נסה שוב מאוחר יותר.',
    
    // Language selector
    'language.english': 'English',
    'language.hebrew': 'עברית',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const isRTL = language === 'he';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [isRTL, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
