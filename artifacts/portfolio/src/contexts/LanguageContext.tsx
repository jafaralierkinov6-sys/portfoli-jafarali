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
    blogSubtitle: "Thoughts, learnings, and tutorials about modern web development.",
    blog1Title: "Mastering React 19 Actions and Hooks",
    blog1Excerpt: "Deep dive into the new concurrent features in React 19, including useTransition, useActionState, and the new use hook.",
    blog2Title: "Building Glassmorphism UIs with Tailwind v4",
    blog2Excerpt: "Learn how to use the latest Tailwind CSS v4 features to create stunning, performant glassmorphism layouts.",
    blog3Title: "Why TypeScript is non-negotiable in 2025",
    blog3Excerpt: "Exploring the long-term benefits of strong typing in massive monorepo environments and how it prevents runtime errors.",
    readArticle: "Read Article",
    minRead: "min read",
    // About page
    yearsExperience: "3+ Years",
    professionalExperience: "Professional Experience",
    aboutGreeting: "Hello! I'm an innovative developer based in the internet.",
    aboutJourney: "My journey in software development started back in 2020. Since then, I've had the privilege of building software for a start-up, a large corporation, and several freelance clients.",
    aboutSpecialize: "I specialize in React ecosystem (React 19, JavaScript, Vite, CSS, SCSS, TypeScript), crafting responsive layouts with Tailwind CSS, and bringing interfaces to life with smooth animations. When I'm not coding, you can find me exploring open-source projects or writing technical blogs.",
    featureCleanCode: "Clean Code",
    featureCleanCodeDesc: "Writing maintainable, scalable, and modular architecture.",
    featureModernUi: "Modern UI/UX",
    featureModernUiDesc: "Crafting beautiful interfaces with pixel-perfect attention.",
    featureFullStack: "Full Stack",
    featureFullStackDesc: "Bridging the gap between robust backends and slick frontends.",
    featureFastLearner: "Fast Learner",
    featureFastLearnerDesc: "Always exploring new technologies and modern frameworks.",
    // Home page
    openToOpportunities: "Open to new opportunities",
    uiuxEnthusiast: "& UI/UX Enthusiast",
    homeDescription: "I build exceptional and accessible digital experiences for the web. Turning complex problems into beautiful, intuitive designs.",
    framework: "Framework",
    styling: "Styling",
    // Skills page
    skillsSubtitle: "My technical expertise and proficiency levels in modern web development technologies.",
    alwaysLearning: "Always Learning",
    alwaysLearningDesc: "The tech landscape moves fast. Currently exploring WebGL, Rust, and AI Integration patterns to expand my horizon and build next-generation applications.",
    // Services page
    servicesSubtitle: "Comprehensive digital solutions tailored to your business needs.",
    serviceFrontend: "Frontend Development",
    serviceFrontendDesc: "Building responsive, performant, and accessible user interfaces using modern web standards and frameworks like React.",
    serviceFullstack: "Full Stack Solutions",
    serviceFullstackDesc: "End-to-end application development with robust APIs, databases, and seamless frontend integrations.",
    serviceUiux: "UI/UX Implementation",
    serviceUiuxDesc: "Translating Figma designs into pixel-perfect code with smooth animations and interactive elements.",
    servicePerformance: "Performance Optimization",
    servicePerformanceDesc: "Auditing and improving web applications for maximum speed, SEO, and Core Web Vitals scores.",
    // Resume page
    downloadFullCv: "Download Full CV",
    experience: "Experience",
    education: "Education",
    // Contact page
    contactSubtitle: "Have a project in mind? Let's work together to build something great.",
    getInTouch: "Get in Touch",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
    placeholderName: "John Doe",
    placeholderEmail: "john@example.com",
    placeholderMessage: "How can I help you?",
    // Projects page
    projectsSubtitle: "Click on any project card to open a live interactive demo directly in the browser. No reloading required.",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",
    openFullscreen: "Open Fullscreen",
    // Footer
    footerDesc: "Crafting beautiful, functional, and user-centric digital experiences with modern web technologies.",
    allRightsReserved: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
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
    blogSubtitle: "Zamonaviy veb dasturlash haqida fikrlar, o'rganishlar va qo'llanmalar.",
    blog1Title: "React 19 Actions va Hooks'larni o'zlashtirish",
    blog1Excerpt: "React 19'dagi yangi konkurrent xususiyatlar, shu jumladan useTransition, useActionState va yangi use hook haqida chuqur ma'lumot.",
    blog2Title: "Tailwind v4 bilan Glassmorphism UI yaratish",
    blog2Excerpt: "So'nggi Tailwind CSS v4 xususiyatlaridan foydalanib, ajoyib va samarali glassmorphism layoutlar yaratishni o'rganing.",
    blog3Title: "2025'da TypeScript nega muhim",
    blog3Excerpt: "Katta monorepo muhitlarida kuchli tipning uzoq muddatli afzalliklari va runtime xatolarni qanday oldini olishini o'rganing.",
    readArticle: "Maqolani o'qish",
    minRead: "daqiqa o'qish",
    // About page
    yearsExperience: "3+ Yil",
    professionalExperience: "Professional Tajriba",
    aboutGreeting: "Salom! Men internetda joylashgan innovatsion dasturchiman.",
    aboutJourney: "Mening dasturiy ta'minot ishlab chiqishdagi sayohatim 2020 yilda boshlangan. O'shandan beri men start-up, yirik korporatsiya va bir nechta mustaqil mijozlar uchun dasturiy ta'minot yaratish imkoniyatiga ega bo'ldim.",
    aboutSpecialize: "Men React ekotizimida (React 19, JavaScript, Vite, CSS, SCSS, TypeScript) ixtisoslashganman, Tailwind CSS yordamida javob beruvchi tartiblarni yarataman va interfeyslarni silliq animatsiyalar bilan jonlantiraman. Kod yozmaganimda, ochiq manbali loyihalarni o'rganish yoki texnik bloglar yozish bilan shug'ullanaman.",
    featureCleanCode: "Toza Kod",
    featureCleanCodeDesc: "Qo'llab-quvvatlanadigan, kengaytiriladigan va modulli arxitektura yozish.",
    featureModernUi: "Zamonaviy UI/UX",
    featureModernUiDesc: "Piksel-mukammal e'tibor bilan go'zal interfeyslar yaratish.",
    featureFullStack: "Full Stack",
    featureFullStackDesc: "Kuchli backend va zamonaviy frontend o'rtasidagi bog'liqlik.",
    featureFastLearner: "Tez O'rganuvchi",
    featureFastLearnerDesc: "Doimo yangi texnologiyalar va zamonaviy freymvorklarni o'rganish.",
    // Home page
    openToOpportunities: "Yangi imkoniyatlarga ochiq",
    uiuxEnthusiast: "& UI/UX Muhlis",
    homeDescription: "Men veb uchun ajoyib va qulay raqamli tajribalar yarataman. Murakkab muammolarni go'zal va intuitiv dizaynlarga aylantiraman.",
    framework: "Freymvork",
    styling: "Stillashtirish",
    // Skills page
    skillsSubtitle: "Zamonaviy veb dasturlash texnologiyalaridagi texnik tajriba va mahorat darajam.",
    alwaysLearning: "Doimo O'rganishda",
    alwaysLearningDesc: "Texnologiya tez rivojlanmoqda. Hozirda WebGL, Rust va AI integratsiya patternlarini o'rganmoqdaman.",
    // Services page
    servicesSubtitle: "Biznes ehtiyojlaringizga moslashtirilgan keng qamrovli raqamli yechimlar.",
    serviceFrontend: "Frontend Dasturlash",
    serviceFrontendDesc: "React kabi zamonaviy veb standartlari va freymvorklardan foydalangan holda javob beruvchi, samarali va qulay foydalanuvchi interfeyslarini yaratish.",
    serviceFullstack: "Full Stack Yechimlar",
    serviceFullstackDesc: "Kuchli APIlar, ma'lumotlar bazalari va uzluksiz frontend integratsiyalari bilan to'liq ilova ishlab chiqish.",
    serviceUiux: "UI/UX Amalga oshirish",
    serviceUiuxDesc: "Figma dizaynlarini piksel-mukammal kodga aylantirish, silliq animatsiyalar va interaktiv elementlar bilan.",
    servicePerformance: "Samadorlikni Optimallashtirish",
    servicePerformanceDesc: "Veb ilovalarni maksimal tezlik, SEO va Core Web Vitals ko'rsatkichlari uchun tekshirish va yaxshilash.",
    // Resume page
    downloadFullCv: "To'liq CV yuklab olish",
    experience: "Tajriba",
    education: "Ta'lim",
    // Contact page
    contactSubtitle: "Loyihangiz bormi? Keling, birgalikda ajoyib narsa yaratamiz.",
    getInTouch: "Bog'laning",
    emailLabel: "Email",
    phoneLabel: "Telefon",
    locationLabel: "Manzil",
    placeholderName: "Ismingiz",
    placeholderEmail: "email@misol.com",
    placeholderMessage: "Sizga qanday yordam bera olaman?",
    // Projects page
    projectsSubtitle: "Har qanday loyiha kartasini bosib, brauzerda jonli interaktiv demoni oching. Qayta yuklash talab qilinmaydi.",
    liveDemo: "Jonli Demo",
    sourceCode: "Manba Kodi",
    openFullscreen: "To'liq ekranda ochish",
    // Footer
    footerDesc: "Zamonaviy veb texnologiyalar yordamida go'zal, funksional va foydalanuvchiga yo'naltirilgan raqamli tajribalar yaratish.",
    allRightsReserved: "Barcha huquqlar himoyalangan.",
    privacyPolicy: "Maxfiylik Siyosati",
    termsOfService: "Foydalanish Shartlari",
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
    blogSubtitle: "Мысли, уроки и руководства по современной веб-разработке.",
    blog1Title: "Освоение Actions и Hooks в React 19",
    blog1Excerpt: "Глубокое погружение в новые конкурентные функции React 19, включая useTransition, useActionState и новый хук use.",
    blog2Title: "Создание Glassmorphism UI с Tailwind v4",
    blog2Excerpt: "Узнайте, как использовать новейшие функции Tailwind CSS v4 для создания потрясающих и производительных glassmorphism макетов.",
    blog3Title: "Почему TypeScript незаменим в 2025",
    blog3Excerpt: "Изучение долгосрочных преимуществ строгой типизации в крупных монорепозиториях и как это предотвращает ошибки времени выполнения.",
    readArticle: "Читать статью",
    minRead: "мин чтения",
    // About page
    yearsExperience: "3+ Года",
    professionalExperience: "Профессиональный Опыт",
    aboutGreeting: "Привет! Я инновационный разработчик, живущий в интернете.",
    aboutJourney: "Мой путь в разработке программного обеспечения начался в 2020 году. С тех пор мне посчастливилось создавать программное обеспечение для стартапа, крупной корпорации и нескольких фриланс-клиентов.",
    aboutSpecialize: "Я специализируюсь на экосистеме React (React 19, JavaScript, Vite, CSS, SCSS, TypeScript), создавая адаптивные макеты с помощью Tailwind CSS и оживляя интерфейсы плавными анимациями. Когда я не пишу код, вы можете найти меня за изучением проектов с открытым исходным кодом или написанием технических блогов.",
    featureCleanCode: "Чистый Код",
    featureCleanCodeDesc: "Написание поддерживаемой, масштабируемой и модульной архитектуры.",
    featureModernUi: "Современный UI/UX",
    featureModernUiDesc: "Создание красивых интерфейсов с попиксельным вниманием.",
    featureFullStack: "Full Stack",
    featureFullStackDesc: "Связующее звено между надежными бэкендами и стильными фронтендами.",
    featureFastLearner: "Быстрый Ученик",
    featureFastLearnerDesc: "Всегда изучаю новые технологии и современные фреймворки.",
    // Home page
    openToOpportunities: "Открыт для новых возможностей",
    uiuxEnthusiast: "& UI/UX Энтузиаст",
    homeDescription: "Я создаю исключительные и доступные цифровые решения для веба. Превращаю сложные проблемы в красивые, интуитивные дизайны.",
    framework: "Фреймворк",
    styling: "Стилизация",
    // Skills page
    skillsSubtitle: "Моя техническая экспертиза и уровень владения современными технологиями веб-разработки.",
    alwaysLearning: "Всегда Учусь",
    alwaysLearningDesc: "Технологический ландшафт меняется быстро. В настоящее время изучаю WebGL, Rust и паттерны интеграции ИИ.",
    // Services page
    servicesSubtitle: "Комплексные цифровые решения, адаптированные под потребности вашего бизнеса.",
    serviceFrontend: "Frontend Разработка",
    serviceFrontendDesc: "Создание отзывчивых, производительных и доступных пользовательских интерфейсов с использованием современных веб-стандартов и фреймворков, таких как React.",
    serviceFullstack: "Full Stack Решения",
    serviceFullstackDesc: "Сквозная разработка приложений с надёжными API, базами данных и бесшовной интеграцией фронтенда.",
    serviceUiux: "UI/UX Реализация",
    serviceUiuxDesc: "Преобразование дизайнов Figma в пиксельно-идеальный код с плавными анимациями и интерактивными элементами.",
    servicePerformance: "Оптимизация Производительности",
    servicePerformanceDesc: "Аудит и улучшение веб-приложений для максимальной скорости, SEO и показателей Core Web Vitals.",
    // Resume page
    downloadFullCv: "Скачать полное CV",
    experience: "Опыт",
    education: "Образование",
    // Contact page
    contactSubtitle: "Есть проект на примете? Давайте работать вместе, чтобы создать что-то великое.",
    getInTouch: "Связаться",
    emailLabel: "Email",
    phoneLabel: "Телефон",
    locationLabel: "Местоположение",
    placeholderName: "Ваше имя",
    placeholderEmail: "email@example.com",
    placeholderMessage: "Чем я могу вам помочь?",
    // Projects page
    projectsSubtitle: "Нажмите на любую карточку проекта, чтобы открыть живую интерактивную демонстрацию прямо в браузере.",
    liveDemo: "Живое Демо",
    sourceCode: "Исходный Код",
    openFullscreen: "Открыть на весь экран",
    // Footer
    footerDesc: "Создание красивых, функциональных и ориентированных на пользователя цифровых решений с использованием современных веб-технологий.",
    allRightsReserved: "Все права защищены.",
    privacyPolicy: "Политика конфиденциальности",
    termsOfService: "Условия использования",
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
