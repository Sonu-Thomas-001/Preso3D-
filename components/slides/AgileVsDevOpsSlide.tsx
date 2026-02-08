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
        <span className="text-slate-500 text-xl font-medium mt-1">Agile vs DevOps</span>
    </div>
  );

  // --- Agile Data ---
  const agilePhases = [
    { label: "Plan", color: "from-red-500 to-red-600", text: "text-red-50" },
    { label: "Design", color: "from-orange-500 to-orange-600", text: "text-orange-50" },
    { label: "Develop", color: "from-amber-400 to-amber-500", text: "text-amber-50" },
    { label: "Test", color: "from-cyan-400 to-cyan-500", text: "text-cyan-50" },
    { label: "Release", color: "from-blue-500 to-blue-600", text: "text-blue-50" },
    { label: "Feedback", color: "from-teal-500 to-teal-600", text: "text-teal-50" },
  ];

  // --- DevOps Data ---
  // Coordinates based on an 800x450 SVG canvas, center (400, 225)
  // Left Loop Center (~250, 225), Right Loop Center (~550, 225)
  const devOpsPhases = [
    // DEV LOOP (Left)
    { label: "PLAN", x: 280, y: 150, color: "text-teal-600", bg: "bg-teal-100", border: "border-teal-200" },
    { label: "CREATE", x: 140, y: 180, color: "text-lime-600", bg: "bg-lime-100", border: "border-lime-200" },
    { label: "VERIFY", x: 140, y: 270, color: "text-indigo-600", bg: "bg-indigo-100", border: "border-indigo-200" },
    { label: "PACKAGE", x: 280, y: 300, color: "text-sky-600", bg: "bg-sky-100", border: "border-sky-200" },
    
    // OPS LOOP (Right)
    { label: "RELEASE", x: 520, y: 150, color: "text-orange-600", bg: "bg-orange-100", border: "border-orange-200" },
    { label: "CONFIGURE", x: 660, y: 180, color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-200" },
    { label: "MONITOR", x: 660, y: 270, color: "text-red-600", bg: "bg-red-100", border: "border-red-200" },
  ];

  // Infinity Loop Path (Same as Slide 22 for consistency)
  const infinityPath = `
    M 400 225
    C 340 125, 100 125, 100 225
    C 100 325, 340 325, 400 225
    C 460 125, 700 125, 700 225
    C 700 325, 460 325, 400 225
    Z
  `;

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="25"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex items-center justify-center gap-4 relative px-4">
        
        {/* --- LEFT: AGILE --- */}
        <div className="w-1/2 h-full flex flex-col items-center justify-center relative border-r border-slate-100">
             <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-[340px] h-[340px] flex items-center justify-center"
             >
                <h3 className="absolute text-4xl font-black text-slate-800 tracking-tighter z-20">AGILE</h3>
                
                {/* Rotating Ring Container */}
                <motion.div 
                    className="absolute inset-0 w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    {agilePhases.map((phase, i) => {
                        const angle = (i * 360) / agilePhases.length;
                        return (
                            <div 
                                key={i}
                                className="absolute top-1/2 left-1/2 w-[140px] h-[60px] origin-left"
                                style={{ 
                                    transform: `translateY(-50%) rotate(${angle}deg) translateX(40px)`,
                                }}
                            >
                                {/* Chevron Shape */}
                                <div 
                                    className={`w-full h-full bg-gradient-to-r ${phase.color} shadow-lg flex items-center justify-center relative`}
                                    style={{ 
                                        clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%)",
                                    }}
                                >
                                    {/* Counter-rotate text so it stays readable-ish? No, for a wheel, radial text is fine. */}
                                    <span className={`text-[10px] font-black uppercase tracking-widest ${phase.text} ml-2`}>
                                        {phase.label}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Inner Connecting Ring */}
                <div className="absolute inset-0 m-auto w-[180px] h-[180px] rounded-full border-4 border-slate-100 border-dashed animate-spin-slow opacity-50 z-10"></div>
             </motion.div>
             
             <div className="absolute bottom-8 text-center">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Focus: Development Speed</span>
             </div>
        </div>

        {/* --- CENTER VS BADGE --- */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-slate-50"
            >
                <span className="text-xl font-black text-slate-300 italic">VS</span>
            </motion.div>
        </div>

        {/* --- RIGHT: DEVOPS --- */}
        <div className="w-1/2 h-full flex flex-col items-center justify-center relative">
             <div className="relative w-full h-[340px] flex items-center justify-center scale-90">
                 
                 {/* Infinity Loop SVG */}
                 <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-0">
                    <defs>
                        <linearGradient id="devOpsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0ea5e9" /> {/* Blue */}
                            <stop offset="40%" stopColor="#10b981" /> {/* Green */}
                            <stop offset="60%" stopColor="#f59e0b" /> {/* Orange */}
                            <stop offset="100%" stopColor="#ef4444" /> {/* Red */}
                        </linearGradient>
                        <filter id="loopGlow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Path Track */}
                    <path 
                        d={infinityPath}
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="16"
                        strokeLinecap="round"
                    />

                    {/* Colored Gradient Path */}
                    <motion.path 
                        d={infinityPath}
                        fill="none"
                        stroke="url(#devOpsGrad)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        filter="url(#loopGlow)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    
                    {/* Flow Particle */}
                    <circle r="4" fill="white">
                        <animateMotion 
                            dur="6s" 
                            repeatCount="indefinite"
                            path={infinityPath}
                            keyPoints="0;1"
                            keyTimes="0;1"
                        />
                    </circle>
                 </svg>

                 {/* Center Label */}
                 <h3 className="absolute text-4xl font-black text-slate-800 tracking-tighter z-10 bg-white/50 backdrop-blur-sm px-4 rounded-full">DEVOPS</h3>

                 {/* Phase Cards */}
                 {devOpsPhases.map((phase, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1), type: "spring" }}
                        className={`
                            absolute px-3 py-1.5 rounded-lg shadow-md border 
                            ${phase.bg} ${phase.border} flex items-center justify-center
                            hover:scale-110 transition-transform cursor-default z-20
                        `}
                        style={{ 
                            left: phase.x, 
                            top: phase.y,
                            transform: 'translate(-50%, -50%)'
                        }}
                     >
                        <span className={`text-[9px] font-black ${phase.color}`}>{phase.label}</span>
                     </motion.div>
                 ))}

             </div>

             <div className="absolute bottom-8 text-center">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Focus: End-to-End Delivery</span>
             </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default AgileVsDevOpsSlide;