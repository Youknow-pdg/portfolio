import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Heart, Mail, Phone, MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../constants';

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
      </div>
    </section>
  );
}
