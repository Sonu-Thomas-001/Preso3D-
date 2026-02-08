import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const AdvancedGitWorkflowsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Advanced Git Workflows</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="31"
      isPresenting={isPresenting}
    >
      <div className="flex h-full items-center gap-8 relative z-10 px-4">
        
        {/* Left Panel: Content */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-1/3 bg-white/80 backdrop-blur-md p-6 rounded-2xl border-l-4 border-[#46c256] shadow-xl flex flex-col justify-center h-4/5"
        >
             <div className="mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-3xl mb-4 shadow-sm">
                    🌿
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Workflow Strategy</h3>
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    Git workflows define the rules for how teams collaborate. Moving beyond simple commits, advanced workflows structure how branches are created, tested, and merged to ensure stability in Agile/DevOps environments.
                </p>
             </div>
             
             <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                 <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Key Goals</h4>
                 <ul className="space-y-2">
                     <li className="flex gap-2 text-xs text-slate-600 items-center">
                         <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Isolate new development
                     </li>
                     <li className="flex gap-2 text-xs text-slate-600 items-center">
                         <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Protect production code
                     </li>
                     <li className="flex gap-2 text-xs text-slate-600 items-center">
                         <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Enable parallel releases
                     </li>
                 </ul>
             </div>
        </motion.div>

        {/* Right Panel: 3D Git Metro Map */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            className="w-2/3 h-full relative flex items-center justify-center perspective-1000"
        >
             <div className="relative w-full h-[350px] bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <svg viewBox="0 0 600 350" className="w-full h-full absolute inset-0">
                    <defs>
                        <filter id="glowLine">
                            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Master Branch (Blue) */}
                    <motion.path 
                        d="M 50 80 L 550 80" 
                        stroke="#3b82f6" 
                        strokeWidth="6" 
                        strokeLinecap="round" 
                        filter="url(#glowLine)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2 }}
                    />
                    <text x="60" y="65" fill="#3b82f6" fontSize="12" fontWeight="bold">Master (Production)</text>

                    {/* Develop Branch (Purple) */}
                    <motion.path 
                        d="M 50 270 L 550 270" 
                        stroke="#a855f7" 
                        strokeWidth="6" 
                        strokeLinecap="round"
                        filter="url(#glowLine)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                    />
                    <text x="60" y="300" fill="#a855f7" fontSize="12" fontWeight="bold">Develop (Integration)</text>

                    {/* Feature Branch (Green) */}
                    <motion.path 
                        d="M 150 270 C 150 200, 180 200, 200 200 L 300 200 C 320 200, 350 200, 350 270" 
                        stroke="#22c55e" 
                        strokeWidth="4" 
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="8 4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                    />
                    <text x="220" y="190" fill="#22c55e" fontSize="10">Feature</text>

                    {/* Release Branch (Orange) */}
                    <motion.path 
                        d="M 400 270 C 400 150, 420 150, 440 150 L 500 150 C 520 150, 520 80, 540 80" 
                        stroke="#f97316" 
                        strokeWidth="4" 
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 2 }}
                    />
                    <text x="440" y="140" fill="#f97316" fontSize="10">Release v1.2</text>

                    {/* Nodes */}
                    <circle cx="150" cy="270" r="6" fill="#a855f7" stroke="white" strokeWidth="2" />
                    <circle cx="350" cy="270" r="6" fill="#a855f7" stroke="white" strokeWidth="2" />
                    <circle cx="540" cy="80" r="8" fill="#3b82f6" stroke="white" strokeWidth="2" />
                    
                    {/* Animated Particles */}
                    <circle r="3" fill="white">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M 150 270 C 150 200, 180 200, 200 200 L 300 200 C 320 200, 350 200, 350 270" />
                    </circle>
                </svg>
             </div>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default AdvancedGitWorkflowsSlide;