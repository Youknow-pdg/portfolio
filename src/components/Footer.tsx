import { Github, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import brandLogo from '../assets/images/youlogoknow.jpg';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-20 border-t border-white/5 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <a href="#" className="flex items-center justify-center md:justify-start gap-3 text-2xl font-bold tracking-tighter mb-4">
              <img 
                src={brandLogo} 
                alt="YOU KNOW Logo" 
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-lg object-cover border border-white/10"
              />
              <span className="text-white">
                YOU <span className="text-brand-purple">KNOW</span>
              </span>
            </a>
            <p className="text-zinc-500 max-w-xs">
              Concevoir pour le futur, un pixel à la fois.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-6">
              {[
                { icon: <Github size={20} />, href: "https://github.com" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
                { icon: <Twitter size={20} />, href: "https://twitter.com" },
                { icon: <Instagram size={20} />, href: "https://instagram.com" },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass border-white/5 flex items-center justify-center text-zinc-400 hover:text-brand-purple hover:border-brand-purple transition-all hover:-translate-y-1 active:scale-90"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="text-zinc-600 text-sm font-mono tracking-widest text-center">
              © 2026 YOU KNOW PORTFOLIO — CRÉÉ AVEC PASSION
            </div>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full glass border-white/5 flex items-center justify-center text-brand-purple hover:bg-brand-purple hover:text-white transition-all animate-bounce"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px]" />
    </footer>
  );
}
