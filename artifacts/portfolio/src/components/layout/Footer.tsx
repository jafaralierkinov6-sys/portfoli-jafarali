import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-display font-bold text-xl tracking-tight text-foreground">DevPortfolio</h3>
          <p className="text-muted-foreground mt-2 text-sm text-center md:text-left max-w-sm">
            Crafting beautiful, functional, and user-centric digital experiences with modern web technologies.
          </p>
        </div>
        
        <div className="flex gap-4">
          {[
            { icon: <Github className="w-5 h-5" />, href: "#" },
            { icon: <Twitter className="w-5 h-5" />, href: "#" },
            { icon: <Linkedin className="w-5 h-5" />, href: "#" },
            { icon: <Mail className="w-5 h-5" />, href: "#" },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <p>&copy; {currentYear} Developer Portfolio. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
