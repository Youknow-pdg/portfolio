import { motion } from 'motion/react';
import { ExternalLink, Github, Code, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../constants';

const projects = [
  {
    title: "E-Commerce Ultra-Rapide",
    category: "Développement Web",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Stripe", "Tailwind"],
    desc: "Une plateforme sécurisée optimisée pour les conversions avec un temps de chargement éclair."
  },
  {
    title: "Identité Visuelle - Nova",
    category: "Design Graphique",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800",
    tags: ["Figma", "Branding"],
    desc: "Refonte complète de l'image de marque pour une startup de biotechnologie."
  },
  {
    title: "Motion Design Pub",
    category: "Vidéo Content",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    tags: ["After Effects", "Premiere"],
    desc: "Vidéo promotionnelle de 30 secondes pour une application de productivité."
  },
  {
    title: "Portfolio 3D Immersif",
    category: "Développement Web",
    image: "https://images.unsplash.com/photo-1614850523060-8da1d56ae167?auto=format&fit=crop&q=80&w=800",
    tags: ["Three.js", "React"],
    desc: "Expérience interactive utilisant WebGL pour une présentation artistique unique."
  },
  {
    title: "App Fitness Smart",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    tags: ["React Native", "Figma"],
    desc: "Design et développement d'une application de suivi d'entraînement."
  },
  {
    title: "Documentaire Tech",
    category: "Montage Vidéo",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    tags: ["Editing", "Storytelling"],
    desc: "Montage d'une série d'entretiens sur l'impact de l'IA dans la création."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-dark-bg/50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-4xl font-bold mb-4">Mes <span className="text-brand-purple">Projets</span></h2>
            <p className="text-zinc-500 max-w-xl">Une sélection de mes travaux les plus emblématiques à la croisée des chemins.</p>
          </div>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 glass rounded-full text-sm font-bold hover:bg-brand-purple hover:text-white transition-all duration-300 flex items-center gap-2 active:scale-95 group"
          >
            Explorer tout sur GitHub <ExternalLink size={16} className="group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group relative rounded-3xl overflow-hidden bg-dark-card border border-white/5 hover:border-brand-purple/30 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>
              
              <div className="p-8">
                <div className="text-xs font-mono text-brand-purple uppercase tracking-widest mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-purple transition-colors">{project.title}</h3>
                <p className="text-zinc-500 text-sm mb-6 leading-relaxed">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-zinc-400 uppercase">{tag}</span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-lg text-zinc-400 hover:text-brand-purple hover:bg-brand-purple/10 transition-all"
                  >
                    <Github size={20}/>
                  </a>
                  <a 
                    href="#contact"
                    className="text-zinc-400 hover:text-brand-purple transition-colors ml-auto flex items-center gap-2 text-sm font-medium group/link"
                  >
                    Consulter <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none blur-3xl -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
