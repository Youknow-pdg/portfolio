import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import portfolioLogo from '../assets/images/portfolio_logo_1780674131127.png';

export default function Navbar({ isDark, toggleTheme }: { isDark: boolean, toggleTheme: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'À Propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'py-4 bg-dark-bg/95 backdrop-blur-lg border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="flex items-center gap-3 font-bold tracking-tighter cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img 
            src={portfolioLogo} 
            alt="YOU KNOW Logo" 
            referrerPolicy="no-referrer"
            className="w-9 h-9 rounded-xl object-cover border border-white/10 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:scale-105 transition-transform"
          />
          <span className="text-2xl text-shadow text-white hover:text-brand-purple transition-colors">
            YOU <span className="text-brand-purple">KNOW</span>
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-brand-purple transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 cursor-pointer">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 cursor-pointer">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-bg/95 backdrop-blur-lg border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-zinc-300 hover:text-brand-purple transition-colors py-2 border-b border-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
