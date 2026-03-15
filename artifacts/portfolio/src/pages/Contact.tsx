import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const { t } = useLanguage();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);
  
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const msg = msgRef.current?.value;

    if (!name || !email || !msg || !email.includes('@')) {
      setStatus('error');
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      if (nameRef.current) nameRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      if (msgRef.current) msgRef.current.value = '';
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{t('contact')}</h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Have a project in mind? Let's work together to build something great.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Email</p>
                  <p className="text-foreground font-medium">hello@devportfolio.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Phone</p>
                  <p className="text-foreground font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Location</p>
                  <p className="text-foreground font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-7"
        >
          <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              {status === 'success' && (
                <div className="bg-green-500/20 text-green-600 dark:text-green-400 p-4 rounded-xl font-medium flex items-center justify-center">
                  {t('successMsg')}
                </div>
              )}
              {status === 'error' && (
                <div className="bg-destructive/20 text-destructive p-4 rounded-xl font-medium flex items-center justify-center">
                  {t('errorMsg')}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t('name')}</label>
                  <Input 
                    ref={nameRef}
                    placeholder="John Doe" 
                    className="bg-background/50 border-border h-12 rounded-xl focus-visible:ring-primary" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t('email')}</label>
                  <Input 
                    ref={emailRef}
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-background/50 border-border h-12 rounded-xl focus-visible:ring-primary" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">{t('message')}</label>
                <Textarea 
                  ref={msgRef}
                  placeholder="How can I help you?" 
                  className="bg-background/50 border-border min-h-[150px] rounded-xl focus-visible:ring-primary resize-none" 
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full h-14 rounded-xl text-lg shadow-lg shadow-primary/20">
                <Send className="w-5 h-5 mr-2" /> {t('sendMessage')}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
