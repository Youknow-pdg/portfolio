import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { fadeInUp } from '../constants';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden glass border-white/5 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-brand-blue/10 pointer-events-none" />
          
          <div className="grid md:grid-cols-2">
            {/* Left: Info */}
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <motion.div {...fadeInUp} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à <span className="text-brand-purple">Lancer</span> l'Aventure ?</h2>
                <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
                  Que vous ayez un projet concret ou une simple idée à explorer, n'hésitez pas à me contacter. Mon bureau est toujours ouvert (numériquement parlant).
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-100">Stratégie Digitale</h4>
                      <p className="text-zinc-500 text-sm">On planifie l'ensemble avant de coder.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                      <Send size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-100">Feedback Continu</h4>
                      <p className="text-zinc-500 text-sm">Vous êtes impliqué à chaque étape.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Form */}
            <div className="bg-white/5 p-12 md:p-20 border-l border-white/10">
              <motion.form 
                onSubmit={handleSubmit}
                className="space-y-6"
                {...fadeInUp}
                viewport={{ once: true }}
              >
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2 uppercase tracking-widest">Nom Complet</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-purple focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2 uppercase tracking-widest">E-mail</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-purple focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2 uppercase tracking-widest">Sujet</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-purple focus:outline-none transition-colors appearance-none">
                    <option className="bg-dark-bg">Développement Web</option>
                    <option className="bg-dark-bg">Design Graphique</option>
                    <option className="bg-dark-bg">Montage Vidéo</option>
                    <option className="bg-dark-bg">Autre chose</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2 uppercase tracking-widest">Message</label>
                  <textarea 
                    rows={4} 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-purple focus:outline-none transition-colors resize-none"
                    placeholder="Décrivez votre projet en quelques mots..."
                  />
                </div>

                <button 
                  disabled={status === 'loading'}
                  className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all ${status === 'success' ? 'bg-green-500' : 'bg-brand-purple hover:bg-brand-neon'}`}
                >
                  {status === 'loading' ? (
                    <motion.div 
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : status === 'success' ? (
                    <>Envoyé ! <CheckCircle2 size={24}/></>
                  ) : (
                    <>Envoyer le message <Send size={20}/></>
                  )}
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
