import { motion } from "framer-motion";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative w-full min-h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden">
      {/* Dynamic Hero Image */}
      <div className="absolute inset-0 z-[-1] opacity-30 dark:opacity-20">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Abstract Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20 backdrop-blur-md">
            <Terminal className="w-4 h-4" />
            <span>Open to new opportunities</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-4">
            {t('greeting')} <span className="text-gradient">Alex Dev</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl text-muted-foreground font-medium mb-6">
            {t('role')} & UI/UX Enthusiast
          </h2>
          
          <p className="text-lg text-foreground/70 max-w-xl mb-10 leading-relaxed">
            I build exceptional and accessible digital experiences for the web. Turning complex problems into beautiful, intuitive designs.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/projects">
              <Button size="lg" className="rounded-full px-8 h-14 text-base shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all group">
                {t('viewProjects')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base glass-panel hover:bg-muted transition-all">
                {t('contactMe')}
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative w-[450px] h-[450px] mx-auto">
            {/* Glowing orb behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-[80px] opacity-40 animate-pulse"></div>
            
            <div className="relative w-full h-full rounded-full border-2 border-white/10 dark:border-white/5 overflow-hidden glass-card p-2 shadow-2xl">
              <img 
                src={`${import.meta.env.BASE_URL}images/profile-avatar.png`} 
                alt="Developer Avatar" 
                className="w-full h-full rounded-full object-cover bg-muted/50"
              />
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 -left-6 glass-panel px-4 py-3 rounded-2xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-xl font-bold">R</div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Framework</p>
                <p className="text-sm font-bold">React 19</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -right-6 glass-panel px-4 py-3 rounded-2xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-500 text-xl font-bold">T</div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Styling</p>
                <p className="text-sm font-bold">Tailwind v4</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
