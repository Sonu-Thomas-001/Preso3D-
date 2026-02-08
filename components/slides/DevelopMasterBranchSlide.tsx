import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const DevelopMasterBranchSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
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
      <div className="w-full h-full flex flex-col items-center justify-center perspective-1000 relative overflow-visible">
        
        {/* 3D Container */}
        <motion.div 
            className="relative w-full max-w-4xl h-[400px]"
            initial={{ rotateX: 20, rotateY: -10 }}
            animate={{ rotateX: 10, rotateY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            
            {/* --- MASTER TRACK (Back) --- */}
            <div className="absolute top-[80px] left-0 w-full h-16" style={{ transform: 'translateZ(-50px)' }}>
                 {/* Track Base */}
                 <div className="absolute inset-0 bg-blue-100 rounded-full border border-blue-200 shadow-inner"></div>
                 {/* Animated Core */}
                 <motion.div 
                    className="absolute top-1/2 left-0 right-0 h-2 bg-blue-500 -translate-y-1/2 blur-md"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                 />
                 
                 {/* Label */}
                 <div className="absolute -left-20 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-r-lg font-bold text-sm shadow-lg">
                    MASTER
                 </div>
                 <div className="absolute -left-20 top-[120%] text-[10px] text-blue-400 font-bold w-32 text-right">Production Ready</div>

                 {/* Nodes */}
                 <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}
                    className="absolute left-[20%] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500 border-4 border-white shadow-xl z-10 flex items-center justify-center text-[8px] text-white font-bold"
                 >v1.0</motion.div>

                 <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }}
                    className="absolute left-[80%] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500 border-4 border-white shadow-xl z-10 flex items-center justify-center text-[8px] text-white font-bold"
                 >v1.1</motion.div>
            </div>


            {/* --- DEVELOP TRACK (Front) --- */}
            <div className="absolute top-[220px] left-0 w-full h-16" style={{ transform: 'translateZ(50px)' }}>
                 {/* Track Base */}
                 <div className="absolute inset-0 bg-purple-100 rounded-full border border-purple-200 shadow-inner"></div>
                 {/* Animated Core */}
                 <motion.div 
                    className="absolute top-1/2 left-0 right-0 h-2 bg-purple-500 -translate-y-1/2 blur-md"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                 />

                 {/* Label */}
                 <div className="absolute -left-20 top-1/2 -translate-y-1/2 bg-purple-600 text-white px-4 py-1 rounded-r-lg font-bold text-sm shadow-lg">
                    DEVELOP
                 </div>
                 <div className="absolute -left-20 top-[120%] text-[10px] text-purple-400 font-bold w-32 text-right">Active Development</div>

                 {/* Nodes */}
                 {[30, 45, 60, 75].map((pos, i) => (
                     <motion.div 
                        key={i}
                        initial={{ scale: 0, y: -50, opacity: 0 }} 
                        animate={{ scale: 1, y: -20, opacity: 1 }} // Centered vertically
                        transition={{ delay: 0.8 + (i * 0.3), type: "spring" }}
                        className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-purple-400 border-4 border-white shadow-lg z-10"
                        style={{ left: `${pos}%` }}
                     />
                 ))}
            </div>


            {/* --- CONNECTORS --- */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full overflow-visible">
                {/* Connection v1.0 -> Develop Start */}
                <motion.path 
                    d="M 180 80 C 180 200, 220 200, 260 250"
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="3"
                    strokeDasharray="8 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                />
                 {/* Connection Develop End -> v1.1 */}
                 <motion.path 
                    d="M 680 250 C 720 200, 720 120, 720 80"
                    fill="none"
                    stroke="#cbd5e1"
                    strokeWidth="3"
                    strokeDasharray="8 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                />
            </svg>

        </motion.div>

        {/* Legend */}
        <div className="flex gap-8 mt-8 bg-white/50 p-4 rounded-xl border border-slate-100">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs font-bold text-slate-600">Infinite Lifetime</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-xs font-bold text-slate-600">Integration Hub</span>
            </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default DevelopMasterBranchSlide;