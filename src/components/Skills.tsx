import React from 'react';
import { motion } from 'motion/react';
import { Code2, Palette, Video, Globe } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../constants';

interface SkillBarProps {
  name: string;
  percent: number;
  key?: React.Key;
}

const SkillBar = ({ name, percent }: SkillBarProps) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="font-medium text-zinc-300">{name}</span>
      <span className="text-brand-purple font-mono">{percent}%</span>
    </div>
    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-brand-purple to-brand-blue"
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
  </div>
);

export default function Skills() {
  const categories = [
    {
      title: "Développement",
      icon: <Code2 size={24} />,
      skills: [
        { name: "React / Next.js", percent: 95 },
        { name: "TypeScript", percent: 90 },
        { name: "Node.js", percent: 85 },
        { name: "Tailwind CSS", percent: 98 }
      ]
    },
    {
      title: "Design Graphique",
      icon: <Palette size={24} />,
      skills: [
        { name: "Adobe Photoshop", percent: 92 },
        { name: "Figma", percent: 88 },
        { name: "Illustrator", percent: 80 },
        { name: "UI/UX Design", percent: 85 }
      ]
    },
    {
      title: "Production Vidéo",
      icon: <Video size={24} />,
      skills: [
        { name: "Premiere Pro", percent: 90 },
        { name: "After Effects", percent: 75 },
        { name: "Motion Design", percent: 80 },
        { name: "Color Grading", percent: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-[100px] -translate-x-1/2" />
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Mes <span className="text-brand-purple">Compétences</span></h2>
          <p className="text-zinc-500 max-w-xl mx-auto">Un équilibre entre logique technique et sensibilité artistique pour des résultats optimaux.</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <motion.div 
              key={cat.title} 
              className="p-8 rounded-3xl glass border-white/5 hover:border-brand-purple/30 transition-colors group"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-8">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map(skill => (
                  <SkillBar key={skill.name} name={skill.name} percent={skill.percent} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
