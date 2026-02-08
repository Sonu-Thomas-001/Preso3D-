import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const AgileVsDevOpsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Agile vs DevOps Comparison</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="25"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex items-center justify-center relative perspective-2500 overflow-visible pb-12">
        
        {/* Ambient Background Glows */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
           <div className="absolute left-[5%] w-[45%] h-[600px] bg-blue-400 blur-[180px] rounded-full" />
           <div className="absolute right-[5%] w-[45%] h-[600px] bg-emerald-400 blur-[180px] rounded-full" />
        </div>

        <div className="relative w-full max-w-[90rem] h-full flex items-center justify-center gap-10 px-4">
          
          {/* --- LEFT SIDE: AGILE BOX --- */}
          <motion.div 
            className="relative w-1/2 h-[520px] flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: -60, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.2 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Top Badge: Positioned outside the container */}
            <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-8 py-3 rounded-full shadow-2xl border border-blue-100 z-50 whitespace-nowrap"
            >
                <span className="text-blue-600 font-black text-[12px] uppercase tracking-[0.3em]">Agile Methodology</span>
            </motion.div>

            {/* 3D Glass Container */}
            <motion.div 
              whileHover={{ rotateY: 5, scale: 1.02, translateZ: 40 }}
              className="relative w-full h-full bg-white/30 backdrop-blur-xl border border-white/80 rounded-[4rem] shadow-[0_50px_120px_rgba(0,0,0,0.15)] overflow-hidden flex items-center justify-center group cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="p-10 w-full h-full flex items-center justify-center relative overflow-hidden rounded-[3.5rem]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/20 via-transparent to-transparent opacity-40"></div>
                  
                  {/* Pulse Wrapper for Agile Image */}
                  <motion.div 
                    className="w-full h-full flex items-center justify-center"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <img 
                      src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Preso%203D/Agile.png" 
                      alt="Agile Lifecycle"
                      className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-transform duration-1000 group-hover:scale-105 rounded-[2.5rem]"
                    />
                  </motion.div>
              </div>
              {/* Polish Light Sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </motion.div>
          </motion.div>

          {/* --- VS SEPARATOR --- */}
          <div className="relative z-50 flex flex-col items-center">
             <motion.div 
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
                className="w-20 h-20 bg-white rounded-3xl shadow-2xl flex items-center justify-center border-4 border-slate-50 rotate-12"
             >
                <span className="text-2xl font-black text-slate-400 italic">VS</span>
             </motion.div>
             <div className="h-40 w-0.5 bg-gradient-to-b from-transparent via-slate-200 to-transparent mt-6"></div>
          </div>

          {/* --- RIGHT SIDE: DEVOPS BOX --- */}
          <motion.div 
            className="relative w-1/2 h-[520px] flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: 60, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.2, delay: 0.2 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Top Badge: Positioned outside the container */}
            <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-8 py-3 rounded-full shadow-2xl border border-emerald-100 z-50 whitespace-nowrap"
            >
                <span className="text-emerald-600 font-black text-[12px] uppercase tracking-[0.3em]">DevOps Lifecycle</span>
            </motion.div>

            {/* 3D Glass Container */}
            <motion.div 
              whileHover={{ rotateY: -5, scale: 1.02, translateZ: 40 }}
              className="relative w-full h-full bg-white/30 backdrop-blur-xl border border-white/80 rounded-[4rem] shadow-[0_50px_120px_rgba(0,0,0,0.15)] overflow-hidden flex items-center justify-center group cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="p-10 w-full h-full flex items-center justify-center relative overflow-hidden rounded-[3.5rem]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/20 via-transparent to-transparent opacity-40"></div>
                  
                  {/* Pulse Wrapper for DevOps Image */}
                  <motion.div 
                    className="w-full h-full flex items-center justify-center"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <img 
                      src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Preso%203D/devops%20loops%203.png" 
                      alt="DevOps Loop"
                      className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-transform duration-1000 group-hover:scale-105 rounded-[2.5rem]"
                    />
                  </motion.div>
              </div>
              {/* Polish Light Sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </motion.div>
          </motion.div>

        </div>

        {/* Footer Spatial Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-4 flex flex-col items-center gap-1.5 pointer-events-none"
        >
          <div className="w-px h-6 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.5em]">Spatial Comparison Active</span>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default AgileVsDevOpsSlide;