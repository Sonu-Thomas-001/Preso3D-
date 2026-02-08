import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const DockerContainersDiagramSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Docker Architecture</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="43"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex flex-col items-center justify-center perspective-1000 relative">
        
        {/* 3D Stack Container */}
        <motion.div 
            className="relative w-[500px] h-[400px] flex flex-col justify-end items-center"
            initial={{ rotateX: 20, rotateY: 0 }}
            animate={{ rotateX: 10, rotateY: -10 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            
            {/* 1. Infrastructure (Base) */}
            <motion.div 
                className="w-full h-16 bg-[#0f172a] rounded-lg shadow-2xl border-b-8 border-black flex items-center justify-center relative z-10"
                style={{ transform: 'translateZ(0px)' }}
                initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            >
                <div className="text-slate-500 font-bold tracking-widest uppercase">Infrastructure</div>
                 {/* 3D Sides */}
                <div className="absolute -right-2 top-2 h-full w-2 bg-[#1e293b] transform skew-y-12 origin-top-left"></div>
                <div className="absolute -top-2 left-2 w-full h-2 bg-[#334155] transform skew-x-12 origin-bottom-left"></div>
            </motion.div>

            {/* 2. Host OS */}
            <motion.div 
                className="w-[95%] h-12 bg-orange-500 rounded-lg shadow-lg border-b-4 border-orange-700 flex items-center justify-center relative z-20 -mt-2"
                style={{ transform: 'translateZ(20px)' }}
                initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            >
                 <div className="text-white font-bold tracking-wide uppercase text-sm">Host Operating System</div>
                 <div className="absolute -right-2 top-2 h-full w-2 bg-orange-600 transform skew-y-12 origin-top-left"></div>
            </motion.div>

            {/* 3. Docker Engine (The Differentiator) */}
            <motion.div 
                className="w-[90%] h-16 bg-blue-600 rounded-lg shadow-lg border-b-4 border-blue-800 flex items-center justify-center relative z-30 -mt-2"
                style={{ transform: 'translateZ(40px)' }}
                initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            >
                 <div className="flex items-center gap-3">
                     <span className="text-3xl">🐳</span>
                     <div className="text-white font-black tracking-wide uppercase text-lg">Docker Engine</div>
                 </div>
                 <div className="absolute -right-2 top-2 h-full w-2 bg-blue-700 transform skew-y-12 origin-top-left"></div>
            </motion.div>

            {/* 4. Containers Layer (Floating Light Blocks) */}
            <div className="w-[90%] flex justify-between gap-4 -mt-4 relative z-40 px-2">
                {['A', 'B', 'C'].map((label, i) => (
                    <motion.div 
                        key={i}
                        className="flex-1 flex flex-col items-center"
                        style={{ transform: 'translateZ(80px)' }} // Higher Z to show "floating/lightweight" nature
                        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + (i * 0.1) }}
                    >
                         {/* Container Box */}
                         <div className="w-full h-24 bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-lg shadow-xl flex flex-col items-center justify-center relative group">
                            <span className="text-xs font-bold text-slate-400 absolute top-2">Container {i+1}</span>
                            <div className="w-16 h-8 bg-blue-50 border border-blue-100 rounded flex items-center justify-center mb-1">
                                <span className="text-[10px] font-bold text-blue-600">App {label}</span>
                            </div>
                            <div className="w-16 h-6 bg-slate-50 border border-slate-100 rounded flex items-center justify-center">
                                <span className="text-[8px] font-mono text-slate-500">Bins/Libs</span>
                            </div>

                            {/* 3D Sides */}
                            <div className="absolute -right-1 top-1 h-full w-1 bg-slate-200 transform skew-y-12 origin-top-left"></div>
                            <div className="absolute -top-1 left-1 w-full h-1 bg-white transform skew-x-12 origin-bottom-left"></div>
                         </div>
                    </motion.div>
                ))}
            </div>
            
            {/* Visual connector lines to emphasize shared kernel */}
            <div className="absolute top-[180px] w-[80%] h-10 border-t-2 border-dashed border-blue-300/50 rounded-t-full pointer-events-none" style={{transform: 'translateZ(50px)'}}></div>

        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default DockerContainersDiagramSlide;