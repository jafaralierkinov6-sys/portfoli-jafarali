import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code } from "lucide-react";
import { CalculatorDemo, TodoDemo, ClockDemo, StopwatchDemo, GitHubDemo, MovieDemo } from "@/components/demos/ProjectDemos";

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: "calculator",
      title: "iOS Calculator Clone",
      category: "Utility",
      desc: "A fully functional calculator with a sleek glassmorphism interface.",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&h=400&fit=crop", // abstract math/numbers
      component: <CalculatorDemo />
    },
    {
      id: "github",
      title: "GitHub Profile Finder",
      category: "API Integration",
      desc: "Search GitHub users and display their profiles in real-time.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop", // code/github
      component: <GitHubDemo />
    },
    {
      id: "todo",
      title: "Smart Todo App",
      category: "Productivity",
      desc: "Manage tasks beautifully with complete state control.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop", // notebook
      component: <TodoDemo />
    },
    {
      id: "clock",
      title: "Digital Clock",
      category: "Utility",
      desc: "Live updating digital clock with smooth typography.",
      image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600&h=400&fit=crop", // watch/time
      component: <ClockDemo />
    },
    {
      id: "stopwatch",
      title: "Pro Stopwatch",
      category: "Productivity",
      desc: "Precision stopwatch with millisecond tracking.",
      image: "https://images.unsplash.com/photo-1508050919630-b14558bb4197?w=600&h=400&fit=crop", // stopwatch
      component: <StopwatchDemo />
    },
    {
      id: "movie",
      title: "Movie Database UI",
      category: "Interface",
      desc: "A stunning dark-mode UI for browsing movies.",
      image: "https://images.unsplash.com/photo-1489599874127-814148f07a75?w=600&h=400&fit=crop", // movie/film
      component: <MovieDemo />
    }
  ];

  const activeDemo = projects.find(p => p.id === selectedProject);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{t('projects')}</h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Click on any project card to open a live interactive demo directly in the browser. No reloading required.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group glass-card rounded-3xl overflow-hidden cursor-pointer flex flex-col h-full"
            onClick={() => setSelectedProject(project.id)}
          >
            <div className="relative aspect-video overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                <span className="px-6 py-3 rounded-full bg-primary/90 text-white font-medium shadow-lg flex items-center gap-2">
                  <Play className="w-4 h-4" /> Live Demo
                </span>
              </div>
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-white/10 text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">{project.desc}</p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <Code className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground font-mono">React 19, Tailwind v4</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl glass-panel p-0 overflow-hidden border-none shadow-2xl bg-background/95">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl font-display font-bold">{activeDemo?.title}</DialogTitle>
            <p className="text-muted-foreground">{activeDemo?.desc}</p>
          </DialogHeader>
          
          <div className="p-6 bg-muted/30 min-h-[400px] flex items-center justify-center border-y border-border/50 my-6">
            {activeDemo?.component}
          </div>
          
          <div className="p-6 pt-0 flex justify-end gap-3">
            <Button variant="outline" className="rounded-full">
              <Github className="w-4 h-4 mr-2" /> Source Code
            </Button>
            <Button className="rounded-full">
              <ExternalLink className="w-4 h-4 mr-2" /> Open Fullscreen
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
