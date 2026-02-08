import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const DevelopMasterBranchSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">The Two Main Branches</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="33"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative perspective-2500 overflow-visible pb-10">
        
        {/* Ambient Background Glows */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
           <div className="absolute top-[15%] left-[20%] w-[30%] h-[300px] bg-blue-500 blur-[120px] rounded-full" />
           <div className="absolute bottom-[15%] right-[20%] w-[30%] h-[300px] bg-purple-500 blur-[120px] rounded-full" />
        </div>

        <div className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center gap-12">
          
          {/* --- MASTER BRANCH (PRODUCTION) --- */}
          <motion.div 
            className="relative w-full h-[180px] flex items-center"
            initial={{ opacity: 0, x: -100, rotateX: 10 }}
            animate={{ opacity: 1, x: 0, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Branch Badge */}
            <motion.div 
              className="absolute -top-6 left-12 bg-blue-600 px-6 py-2 rounded-full shadow-lg border border-blue-400/30 z-50 flex items-center gap-3"
              whileHover={{ y: -2 }}
            >
                <div className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_white]"></div>
                <span className="text-white font-black text-[12px] uppercase tracking-[0.2em]">Master Branch</span>
            </motion.div>

            {/* Glass Rail */}
            <div className="relative w-full h-full bg-white/30 backdrop-blur-xl border border-white/80 rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.1)] overflow-hidden flex items-center px-12 group cursor-default">
                {/* Track Line */}
                <div className="absolute h-1 left-12 right-12 bg-blue-100 rounded-full">
                    <motion.div 
                      className="h-full bg-blue-500 w-1/3 blur-sm opacity-50"
                      animate={{ x: ["-100%", "400%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                <div className="relative z-10 flex justify-between w-full items-center">
                    <div className="flex flex-col">
                        <span className="text-blue-900 font-bold text-lg">Production Ready</span>
                        <span className="text-slate-500 text-xs font-medium">Infinite Lifetime • Stable Releases Only</span>
                    </div>
                    
                    <div className="flex gap-16 mr-10">
                        {['v1.0', 'v1.1'].map((ver, i) => (
                            <motion.div 
                                key={ver}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 + (i * 0.4), type: "spring" }}
                                className="w-14 h-14 bg-white rounded-2xl shadow-xl border-2 border-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform"
                            >
                                <span className="text-blue-600 font-black text-xs">{ver}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* --- CONNECTION PATH (ANIMATED SVG) --- */}
          <div className="absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 600">
                  <motion.path 
                    d="M 300 220 Q 350 300 400 380"
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="3"
                    strokeDasharray="8 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                  />
                  <motion.path 
                    d="M 700 380 Q 750 300 800 220"
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="3"
                    strokeDasharray="8 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1.5 }}
                  />
              </svg>
          </div>

          {/* --- DEVELOP BRANCH (INTEGRATION) --- */}
          <motion.div 
            className="relative w-full h-[180px] flex items-center"
            initial={{ opacity: 0, x: 100, rotateX: -10 }}
            animate={{ opacity: 1, x: 0, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Branch Badge */}
            <motion.div 
              className="absolute -top-6 right-12 bg-purple-600 px-6 py-2 rounded-full shadow-lg border border-purple-400/30 z-50 flex items-center gap-3"
              whileHover={{ y: -2 }}
            >
                <div className="w-2 h-2 rounded-full bg-white animate-pulse delay-500 shadow-[0_0_8px_white]"></div>
                <span className="text-white font-black text-[12px] uppercase tracking-[0.2em]">Develop Branch</span>
            </motion.div>

            {/* Glass Rail */}
            <div className="relative w-full h-full bg-white/30 backdrop-blur-xl border border-white/80 rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.1)] overflow-hidden flex items-center px-12 group cursor-default">
                {/* Track Line */}
                <div className="absolute h-1 left-12 right-12 bg-purple-100 rounded-full">
                    <motion.div 
                      className="h-full bg-purple-500 w-1/3 blur-sm opacity-50"
                      animate={{ x: ["400%", "-100%"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                <div className="relative z-10 flex flex-row-reverse justify-between w-full items-center">
                    <div className="flex flex-col text-right">
                        <span className="text-purple-900 font-bold text-lg">Active Development</span>
                        <span className="text-slate-500 text-xs font-medium">Integration Hub • Daily Commits</span>
                    </div>
                    
                    <div className="flex gap-8 ml-10">
                        {[1, 2, 3, 4].map((i) => (
                            <motion.div 
                                key={i}
                                initial={{ scale: 0, y: 10 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ delay: 1 + (i * 0.2), type: "spring" }}
                                className="w-10 h-10 bg-purple-50 rounded-xl shadow-md border border-purple-200 flex items-center justify-center group-hover:bg-white transition-colors"
                            >
                                <div className="w-2.5 h-2.5 rounded-full bg-purple-400"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                 {/* Shine effect */}
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </div>
          </motion.div>

        </div>

        {/* Interaction Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-4 flex flex-col items-center gap-1.5 pointer-events-none"
        >
          <div className="w-px h-6 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.4em]">Interactive Topology</span>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default DevelopMasterBranchSlide;