import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Download, Code2, Layout, Database, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const { t } = useLanguage();

  const features = [
    { icon: <Code2 className="w-6 h-6 text-primary" />, title: t('featureCleanCode'), desc: t('featureCleanCodeDesc') },
    { icon: <Layout className="w-6 h-6 text-accent" />, title: t('featureModernUi'), desc: t('featureModernUiDesc') },
    { icon: <Database className="w-6 h-6 text-secondary" />, title: t('featureFullStack'), desc: t('featureFullStackDesc') },
    { icon: <BookOpen className="w-6 h-6 text-amber-500" />, title: t('featureFastLearner'), desc: t('featureFastLearnerDesc') },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{t('aboutMe')}</h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
            {/* landing page hero scenic mountain landscape */}
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&fit=crop" 
              alt="Developer working" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6 right-6 glass-panel p-6 rounded-2xl">
              <p className="text-2xl font-bold text-foreground">{t('yearsExperience')}</p>
              <p className="text-sm text-muted-foreground">{t('professionalExperience')}</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-7"
        >
          <h2 className="text-3xl font-display font-bold mb-6">{t('aboutGreeting')}</h2>
          <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
            {t('aboutJourney')}
          </p>
          <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
            {t('aboutSpecialize')}
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {features.map((f, i) => (
              <div key={i} className="glass-card p-5 rounded-2xl flex items-start gap-4">
                <div className="p-3 bg-muted rounded-xl">{f.icon}</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Button size="lg" className="rounded-full">
            <Download className="w-5 h-5 mr-2" />
            {t('downloadCv')}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
