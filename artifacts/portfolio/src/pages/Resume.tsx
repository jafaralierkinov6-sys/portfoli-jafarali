import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Download, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Resume() {
  const { t } = useLanguage();

  const experience = [
    {
      role: "Senior Frontend Engineer",
      company: "TechNova Solutions",
      date: "2022 - Present",
      desc: "Leading frontend architecture, mentoring junior devs, and building a highly scalable SaaS platform using React and TypeScript."
    },
    {
      role: "Web Developer",
      company: "Digital Studio Agency",
      date: "2020 - 2022",
      desc: "Developed custom websites for various clients. Improved site performance by 40% and implemented modern design systems."
    }
  ];

  const education = [
    {
      degree: "BSc in Computer Science",
      school: "State University of Technology",
      date: "2016 - 2020",
      desc: "Graduated with honors. Specialized in Software Engineering and Human-Computer Interaction."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{t('resume')}</h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>
        <Button size="lg" className="rounded-full shrink-0">
          <Download className="w-5 h-5 mr-2" /> {t('downloadFullCv')}
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Experience Timeline */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-primary/20 text-primary"><Briefcase className="w-6 h-6" /></div>
            <h2 className="text-3xl font-display font-bold">{t('experience')}</h2>
          </div>
          
          <div className="relative pl-8 space-y-12 before:absolute before:inset-0 before:ml-[11px] before:w-[2px] before:bg-border">
            {experience.map((exp, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-10 w-6 h-6 rounded-full bg-background border-4 border-primary z-10 shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
                <div className="glass-card p-6 rounded-2xl">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-bold mb-3">{exp.date}</span>
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <p className="text-primary font-medium mb-4">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-secondary/20 text-secondary"><GraduationCap className="w-6 h-6" /></div>
            <h2 className="text-3xl font-display font-bold">{t('education')}</h2>
          </div>
          
          <div className="relative pl-8 space-y-12 before:absolute before:inset-0 before:ml-[11px] before:w-[2px] before:bg-border">
            {education.map((edu, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-10 w-6 h-6 rounded-full bg-background border-4 border-secondary z-10 shadow-[0_0_10px_rgba(var(--secondary),0.5)]"></div>
                <div className="glass-card p-6 rounded-2xl">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-bold mb-3">{edu.date}</span>
                  <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-secondary font-medium mb-4">{edu.school}</p>
                  <p className="text-muted-foreground">{edu.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
