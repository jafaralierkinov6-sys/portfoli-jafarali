import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const { t } = useLanguage();

  const articles = [
    {
      id: 1,
      title: "Mastering React 19 Actions and Hooks",
      excerpt: "Deep dive into the new concurrent features in React 19, including useTransition, useActionState, and the new use hook.",
      date: "Oct 24, 2024",
      readTime: "5 min read",
      category: "React",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop" // react/code
    },
    {
      id: 2,
      title: "Building Glassmorphism UIs with Tailwind v4",
      excerpt: "Learn how to use the latest Tailwind CSS v4 features to create stunning, performant glassmorphism layouts.",
      date: "Nov 12, 2024",
      readTime: "8 min read",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop" // retro/colors
    },
    {
      id: 3,
      title: "Why TypeScript is non-negotiable in 2025",
      excerpt: "Exploring the long-term benefits of strong typing in massive monorepo environments and how it prevents runtime errors.",
      date: "Jan 05, 2025",
      readTime: "6 min read",
      category: "TypeScript",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop" // code/laptop
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{t('blog')}</h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Thoughts, learnings, and tutorials about modern web development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <motion.article 
            key={article.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-3xl overflow-hidden flex flex-col group"
          >
            <div className="relative aspect-[2/1] overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {article.category}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center text-xs text-muted-foreground mb-4 gap-4">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                {article.title}
              </h2>
              
              <p className="text-muted-foreground mb-6 flex-grow">
                {article.excerpt}
              </p>
              
              <Button variant="ghost" className="self-start text-primary p-0 hover:bg-transparent hover:text-primary/80 group/btn">
                Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
