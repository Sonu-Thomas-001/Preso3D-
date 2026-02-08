import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const DevOpsLifecycleSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">The DevOps Lifecycle</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="22"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col items-center justify-center h-full relative w-full perspective-2500 overflow-visible pb-12">
        
        {/* Ambient Background Glows */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
           <div className="absolute left-[10%] w-[40%] h-[500px] bg-blue-400 blur-[150px] rounded-full" />
           <div className="absolute right-[10%] w-[40%] h-[500px] bg-green-400 blur-[150px] rounded-full" />
        </div>

        {/* --- CENTER SECTION: THE INFINITY LOOP --- */}
        <motion.div 
          className="relative w-full max-w-5xl h-[520px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9, rotateX: 5 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.2 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* FLOATING BADGE: Outside the image box at the top */}
          <motion.div 
              animate={{ y: [0, -10, 0], opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-10 py-3 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-blue-100 flex items-center gap-4 z-50 whitespace-nowrap"
          >
              <div className="flex gap-1.5 items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_12px_rgba(59,130,246,0.6)]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse delay-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]"></div>
              </div>
              <span className="text-slate-900 font-black text-[14px] uppercase tracking-[0.4em] drop-shadow-sm">Continuous Loop</span>
          </motion.div>

          {/* 3D Floating Glass Plate */}
          <motion.div 
            whileHover={{ rotateY: -3, rotateX: 3, scale: 1.01, translateZ: 40 }}
            className="relative w-full h-full bg-white/30 backdrop-blur-xl border border-white/80 rounded-[4rem] shadow-[0_50px_120px_rgba(0,0,0,0.15)] overflow-hidden flex items-center justify-center group cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Diagram Image Area with synchronized border radius */}
            <div className="p-10 w-full h-full flex items-center justify-center relative overflow-hidden rounded-[3.8rem]">
                {/* Internal gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/20 via-transparent to-green-50/20 opacity-40"></div>
                
                <img 
                  src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Preso%203D/devops%20loops%202.png" 
                  alt="DevOps Infinity Lifecycle"
                  className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-transform duration-1000 group-hover:scale-105 rounded-[2.8rem]"
                />
            </div>

            {/* Light Sweep Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
          </motion.div>

          {/* Ambient Perspective Shadow */}
          <div className="absolute -bottom-12 w-[90%] h-16 bg-slate-900/10 blur-[80px] rounded-[100%] pointer-events-none"></div>
        </motion.div>

        {/* Footer Interaction Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 flex flex-col items-center gap-1.5 pointer-events-none"
        >
          <div className="w-px h-6 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.4em]">Interactive Visualization</span>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default DevOpsLifecycleSlide;