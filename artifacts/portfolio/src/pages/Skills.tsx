import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  const skills = [
    { name: "React / Next.js", level: 95, color: "bg-blue-500" },
    { name: "TypeScript / JavaScript", level: 90, color: "bg-yellow-400" },
    { name: "Tailwind CSS", level: 98, color: "bg-cyan-400" },
    { name: "Node.js / Express", level: 80, color: "bg-green-500" },
    { name: "UI/UX Design", level: 85, color: "bg-purple-500" },
    { name: "Git / GitHub", level: 92, color: "bg-slate-700 dark:bg-white" },
    { name: "PostgreSQL / Prisma", level: 75, color: "bg-indigo-500" },
    { name: "Framer Motion", level: 88, color: "bg-pink-500" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{t('skills')}</h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          My technical expertise and proficiency levels in modern web development technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 rounded-2xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">{skill.name}</h3>
              <span className="text-muted-foreground font-mono font-medium">{skill.level}%</span>
            </div>
            <div className="h-3 w-full bg-muted rounded-full overflow-hidden relative border border-white/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className={`h-full ${skill.color} rounded-full shadow-[0_0_10px_currentColor]`}
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-20 max-w-4xl mx-auto glass-panel p-8 rounded-3xl text-center border border-primary/20 bg-primary/5"
      >
        <h3 className="text-2xl font-display font-bold mb-4">Always Learning</h3>
        <p className="text-muted-foreground text-lg">
          The tech landscape moves fast. Currently exploring WebGL, Rust, and AI Integration patterns to expand my horizon and build next-generation applications.
        </p>
      </motion.div>
    </div>
  );
}
