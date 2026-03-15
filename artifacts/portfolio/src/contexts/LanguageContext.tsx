import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'uz' | 'ru';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    services: "Services",
    resume: "Resume",
    blog: "Blog",
    contact: "Contact",
    greeting: "Hi, I'm",
    role: "Full Stack Developer",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    aboutMe: "About Me",
    downloadCv: "Download CV",
    sendMessage: "Send Message",
    name: "Your Name",
    email: "Email Address",
    message: "Your Message",
    successMsg: "Message sent successfully!",
    errorMsg: "Please fill in all fields correctly.",
  },
  uz: {
    home: "Bosh sahifa",
    about: "Haqida",
    projects: "Loyihalar",
    skills: "Ko'nikmalar",
    services: "Xizmatlar",
    resume: "Rezyume",
    blog: "Blog",
    contact: "Aloqa",
    greeting: "Salom, men",
    role: "Full Stack Dasturchi",
    viewProjects: "Loyihalarni ko'rish",
    contactMe: "Bog'lanish",
    aboutMe: "Men haqimda",
    downloadCv: "CV yuklab olish",
    sendMessage: "Xabar yuborish",
    name: "Ismingiz",
    email: "Elektron pochta",
    message: "Xabaringiz",
    successMsg: "Xabar muvaffaqiyatli yuborildi!",
    errorMsg: "Iltimos, barcha maydonlarni to'g'ri to'ldiring.",
  },
  ru: {
    home: "Главная",
    about: "Обо мне",
    projects: "Проекты",
    skills: "Навыки",
    services: "Услуги",
    resume: "Резюме",
    blog: "Блог",
    contact: "Контакты",
    greeting: "Привет, я",
    role: "Full Stack Разработчик",
    viewProjects: "Смотреть проекты",
    contactMe: "Связаться со мной",
    aboutMe: "Обо мне",
    downloadCv: "Скачать CV",
    sendMessage: "Отправить сообщение",
    name: "Ваше имя",
    email: "Электронная почта",
    message: "Ваше сообщение",
    successMsg: "Сообщение успешно отправлено!",
    errorMsg: "Пожалуйста, заполните все поля правильно.",
  }
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio-lang') as Language;
    if (savedLang && ['en', 'uz', 'ru'].includes(savedLang)) {
      setLang(savedLang);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('portfolio-lang', newLang);
  };

  const t = (key: string): string => {
    return translations[lang][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
