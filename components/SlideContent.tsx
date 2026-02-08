import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SlideData } from '../types';

interface SlideContentProps {
  data: SlideData;
  isPresenting?: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3 
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

const HeaderLogos = () => (
    <div className="flex items-center gap-4 select-none">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl pb-1 shadow-sm">
          P
        </div>
        <span className="text-2xl font-bold text-gray-900 tracking-tight">Preso<span className="text-indigo-600">3D</span></span>
      </div>
    </div>
);

const SlideContent: React.FC<SlideContentProps> = ({ data, isPresenting }) => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`w-full h-full relative overflow-hidden bg-white/95 backdrop-blur-sm select-none flex flex-col preserve-3d ${
        isPresenting ? 'rounded-none border-none' : 'rounded-xl border border-white/50'
      }`}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-indigo-50/50 pointer-events-none" />
      
      <div className="flex-grow p-12 flex flex-col relative z-10 preserve-3d">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
            <motion.div variants={itemVariants} style={{ translateZ: 40 }} className="flex flex-col gap-2">
                <h2 className="text-sm font-bold text-indigo-500 tracking-widest uppercase">
                    {data.subtitle || 'SUBTITLE'}
                </h2>
                <h1 className="text-5xl font-extrabold text-slate-800 tracking-tight leading-tight max-w-2xl">
                    {data.title || 'Slide Title'}
                </h1>
            </motion.div>
            
            <motion.div variants={itemVariants} style={{ translateZ: 30 }}>
                <HeaderLogos />
            </motion.div>
        </div>
        
        {/* Body Content */}
        <div className="flex-grow flex items-center justify-between gap-12 preserve-3d">
             <motion.div variants={itemVariants} style={{ translateZ: 20 }} className="w-full max-w-3xl">
                 <p className="text-xl text-slate-600 leading-relaxed whitespace-pre-wrap">
                    {data.body || 'No content added.'}
                 </p>
             </motion.div>

             {/* Decorative element to emphasize 3D */}
             <motion.div 
                style={{ translateZ: 60 }} 
                className="absolute right-0 bottom-12 w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-20 blur-2xl pointer-events-none"
             />
        </div>

        {/* Footer */}
        <motion.div 
            variants={itemVariants} 
            style={{ translateZ: 20 }}
            className="border-t border-slate-100 pt-6 flex justify-between items-center text-slate-400 text-xs font-medium"
        >
            <span>Confidential - Internal Use Only</span>
            <span>ID: {data.id}</span>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default SlideContent;