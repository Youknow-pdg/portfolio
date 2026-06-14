import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { fadeInUp } from '../constants';
import profileImage from '../assets/images/profile.jpeg';

const roles = ["Développeur d'Applications", "Créateur Graphique", "Monteur Vidéo"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex];
    
    const tick = () => {
      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1));
      } else {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === currentRole) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        timer = setTimeout(tick, isDeleting ? 50 : 100);
      }
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-32 pb-16">
      {/* Background Particles Simulation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-purple rounded-full blur-[1px]"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{ 
              y: [null, "-20%"],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}
        {/* Animated Blobs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[100px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px]"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-6 z-10 text-center flex flex-col items-center"
        style={{ y: y1, opacity }}
      >
        {/* Modern 3D Tech Avatar Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            bounce: 0.35
          }}
          className="relative w-36 h-36 md:w-44 md:h-44 mt-8 md:mt-12 mb-8 rounded-full p-1 bg-gradient-to-r from-brand-purple to-brand-blue shadow-[0_0_50px_rgba(139,92,246,0.3)] group cursor-pointer"
        >
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-dark-bg bg-dark-card hover:border-brand-neon transition-colors duration-300 relative">
            <img 
              src={profileImage} 
              alt="You Know Profile Avatar" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-neon">Y.K. Creator</span>
            </div>
          </div>
          {/* Glowing orbital orbits/rings */}
          <div className="absolute -inset-2 rounded-full border border-brand-purple/20 animate-[spin_10s_linear_infinite] pointer-events-none" />
          <div className="absolute -inset-4 rounded-full border border-dashed border-brand-blue/10 animate-[spin_20s_linear_infinite] pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium text-brand-purple"
        >
          <Sparkles size={16} />
          <span>Disponible pour de nouveaux projets</span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          I'm <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Mamadou DIOP</span>
        </motion.h1>

        <motion.div 
          className="text-2xl md:text-4xl font-medium text-zinc-400 h-12 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {displayText}
          <span className="inline-block w-1 h-8 ml-1 bg-brand-purple animate-pulse" />
        </motion.div>

        <motion.p 
          className="max-w-2xl mx-auto text-zinc-400 text-lg mb-12 sm:px-4"
          {...fadeInUp}
          transition={{ delay: 0.6 }}
        >
          Créateur d'expériences numériques immersives. Alliant code, design et vidéo pour donner vie à vos idées les plus folles.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-10 py-5 bg-brand-purple rounded-full font-bold flex items-center justify-center gap-3 hover:bg-brand-neon hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all hover:scale-105 active:scale-95 group"
          >
            Découvrir mon univers <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-10 py-5 glass border-white/20 rounded-full font-bold hover:bg-white/10 transition-all hover:scale-105 active:scale-95 text-center"
          >
            Lancer un projet
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-brand-purple rounded-full"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
