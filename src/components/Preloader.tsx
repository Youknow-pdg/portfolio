import { motion } from 'motion/react';

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-dark-bg flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="relative">
        <motion.div 
          className="text-4xl font-bold tracking-tighter mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          YOU <span className="text-brand-purple">KNOW</span>
        </motion.div>
        
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute h-full bg-brand-purple"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </div>
        
        <motion.div 
          className="mt-4 text-xs font-mono text-zinc-600 uppercase tracking-[0.3em] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Initialisation du système...
        </motion.div>
      </div>
      
      {/* Background Glow */}
      <motion.div 
        className="absolute w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  );
}
