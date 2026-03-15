import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { MonitorSmartphone, Code, Palette, Zap } from "lucide-react";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <MonitorSmartphone className="w-10 h-10" />,
      title: "Frontend Development",
      desc: "Building responsive, performant, and accessible user interfaces using modern web standards and frameworks like React.",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Full Stack Solutions",
      desc: "End-to-end application development with robust APIs, databases, and seamless frontend integrations.",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "UI/UX Implementation",
      desc: "Translating Figma designs into pixel-perfect code with smooth animations and interactive elements.",
      color: "text-pink-500",
      bg: "bg-pink-500/10"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Performance Optimization",
      desc: "Auditing and improving web applications for maximum speed, SEO, and Core Web Vitals scores.",
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{t('services')}</h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Comprehensive digital solutions tailored to your business needs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((srv, idx) => (
          <motion.div
            key={srv.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-10 rounded-3xl group"
          >
            <div className={`w-20 h-20 rounded-2xl ${srv.bg} ${srv.color} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110 shadow-lg`}>
              {srv.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{srv.title}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">{srv.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
