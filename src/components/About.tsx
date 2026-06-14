import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Briefcase, Heart, Mail, Phone, MapPin, X } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../constants';
import cvImage from '../assets/images/MON-CV-YK.png';

const CountUp = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
        setHasAnimated(true);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, hasAnimated]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={() => {
        // This is a hack to trigger the effect when in view
        return { opacity: 1 };
      }}
      onViewportEnter={() => {
        // Trigger the effect
        setCount(0);
        setHasAnimated(false);
      }}
      viewport={{ once: true }}
    >
      {count}
    </motion.span>
  );
};

export default function About() {
  const [isOpenCVModal, setIsOpenCVModal] = useState(false);
  const experiences = [
    {
      company: "Feselma Digital",
      role: "Développeur Fullstack",
      period: "2022 - Présent",
      desc: "Conception d'applications web modernes et gestion de projets digitaux."
    },
    {
      company: "Indépendant",
      role: "Graphiste & Monteur Vidéo",
      period: "2020 - 2022",
      desc: "Création d'identités visuelles et montage de contenus publicitaires."
    },
    {
      company: "Centre de Formation",
      role: "Formateur Multimédia",
      period: "2019 - 2020",
      desc: "Transmission de savoir-faire sur les outils Adobe et le développement web."
    }
  ];

  const stats = [
    { label: "Années d'Expérience", value: 5 },
    { label: "Projets Réalisés", value: 42 },
    { label: "Clients Satisfaits", value: 30 },
    { label: "Cafés par Jour", value: 12 }
  ];

  return (
    <section id="about" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-start"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {/* Bio & Stats */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-8">À Propos de <span className="text-brand-purple">Moi</span></h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Basé entre le code et la création visuelle, je transforme les concepts abstraits en réalités tactiles et numériques. 
              Mon parcours chez <span className="text-white font-medium">Feselma Digital</span> m'a permis de perfectionner ma rigueur technique, 
              tandis que mes années en freelance ont nourri mon oeil artistique.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl glass glow-purple flex flex-col items-center text-center">
                  <span className="text-4xl font-bold text-brand-purple mb-2">
                    +<CountUp end={stat.value} />
                  </span>
                  <span className="text-sm text-zinc-500 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <a href="mailto:youknowvd@gmail.com" className="flex items-center gap-4 text-zinc-300 hover:text-brand-purple transition-all group w-fit">
                <div className="p-3 rounded-full bg-brand-purple/10 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300"><Mail size={20}/></div>
                <span className="font-medium">youknowvd@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="p-3 rounded-full bg-brand-purple/10 text-brand-purple"><MapPin size={20}/></div>
                <span className="font-medium">Mbour, Sénégal</span>
              </div>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={fadeInUp} className="relative pl-8 border-l-2 border-brand-purple/30">
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <Briefcase className="text-brand-purple" /> Expériences
            </h3>
            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[41px] top-0 w-4 h-4 bg-dark-bg border-4 border-brand-purple rounded-full group-hover:scale-150 transition-transform" />
                  <div className="mb-1 text-brand-purple font-mono text-sm">{exp.period}</div>
                  <h4 className="text-xl font-bold">{exp.role}</h4>
                  <div className="text-zinc-400 font-medium mb-2">{exp.company}</div>
                  <p className="text-zinc-500">{exp.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mt-16 mb-10 flex items-center gap-3">
              <Heart className="text-brand-purple" /> Passions
            </h3>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Cinéma", "Design Minimaliste", "Echecs", "Nouvelles Tech", "Voyages"].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full glass border-white/5">{tag}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* CV Display Section */}
        <motion.div 
          className="mt-20 pt-16 border-t border-white/5"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto rounded-3xl glass p-8 md:p-12 border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.1)] relative overflow-hidden group">
            {/* Background glowing gradients */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-brand-purple/20 transition-colors duration-500" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid md:grid-cols-12 gap-12 items-center relative z-10">
              <div className="md:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-semibold uppercase tracking-wider">
                  <Briefcase size={14} />
                  <span>Curriculum Vitae</span>
                </div>
                <h3 className="text-3xl font-extrabold tracking-tight">
                  Découvrez mon parcours en un <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Coup d’Œil</span>
                </h3>
                <p className="text-zinc-300 dark:text-zinc-400 leading-relaxed text-base">
                  Consultez mon CV complet pour découvrir en détail mes compétences techniques, mes réalisations en développement web, en design graphique et montage vidéo ainsi que mon parcours professionnel.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href={cvImage} 
                    download="MON-CV-YK.png" 
                    className="px-8 py-4 bg-brand-purple text-white font-bold rounded-2xl flex items-center gap-3 hover:bg-brand-neon hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all hover:scale-105 active:scale-95 cursor-pointer text-center justify-center min-w-[200px]"
                  >
                    Télécharger le CV (PNG)
                  </a>
                  <button 
                    onClick={() => setIsOpenCVModal(true)}
                    className="px-8 py-4 glass border-white/20 hover:bg-white/10 text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer min-w-[200px]"
                  >
                    Visualiser en ligne
                  </button>
                </div>
              </div>

              <div className="md:col-span-5 flex justify-center">
                {/* Visual Preview Frame */}
                <div 
                  onClick={() => setIsOpenCVModal(true)}
                  className="relative w-full max-w-[260px] aspect-[1/1.41] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-brand-purple/40 transition-all duration-300 transform group-hover:rotate-1 group-hover:scale-105 cursor-pointer"
                >
                  <img 
                    src={cvImage} 
                    alt="MON-CV-YK Preview" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-neutral-900/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-brand-purple flex items-center justify-center text-white shadow-lg animate-pulse">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-white">Agrandir</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CV Lightbox Modal */}
      <AnimatePresence>
        {isOpenCVModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setIsOpenCVModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-2xl w-full max-h-[90vh] bg-zinc-900/90 rounded-3xl border border-white/10 p-2 overflow-hidden shadow-2xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpenCVModal(false)}
                className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 transition-all text-white z-50 cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Modal Content */}
              <div className="w-full overflow-y-auto max-h-[75vh] rounded-2xl flex justify-center items-center p-4">
                <img 
                  src={cvImage} 
                  alt="Curriculum Vitae" 
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-lg border border-white/5"
                  style={{ aspectRatio: 'auto' }}
                />
              </div>

              {/* Footer Actions inside Lightbox */}
              <div className="w-full flex justify-center p-4 border-t border-white/5 bg-zinc-950/80 gap-4">
                <a 
                  href={cvImage} 
                  download="MON-CV-YK.png"
                  className="px-6 py-3 bg-brand-purple hover:bg-brand-neon hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] text-white font-bold rounded-xl flex items-center gap-2 transition-all cursor-pointer text-sm"
                >
                  Télécharger (PNG)
                </a>
                <button 
                  onClick={() => setIsOpenCVModal(false)}
                  className="px-6 py-3 glass border-white/10 hover:bg-white/10 text-white font-bold rounded-xl transition-all cursor-pointer text-sm"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
