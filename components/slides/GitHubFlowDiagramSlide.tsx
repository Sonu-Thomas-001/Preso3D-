import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const Icons = {
  PM: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>
    </svg>
  ),
  GitHub: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  ),
  Developers: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Push: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
    </svg>
  ),
  Review: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  Merge: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 9v12"/><path d="M18 15V9a9 9 0 0 0-9-9"/>
    </svg>
  )
};

const GitHubFlowDiagramSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-4xl font-black tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-2xl font-semibold mt-1">Lifecycle of a Contribution</span>
    </div>
  );

  // Horizontal position factors (percentage)
  const Y_MID = 45; 
  const coords = {
    pm: 10,
    github: 25,
    devs: 40,
    step1: 58,
    step2: 76,
    step3: 94
  };

  const mainPath = `M ${coords.pm} ${Y_MID} L ${coords.step3} ${Y_MID}`;
  const approvalLoop = `M ${coords.step3} ${Y_MID} L ${coords.step3} 85 L ${coords.github} 85 L ${coords.github} ${Y_MID}`;

  const ActorNode = ({ icon: Icon, label, x, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
        className="absolute z-30 flex flex-col items-center"
        style={{ 
            left: `${x}%`, 
            top: `${Y_MID}%`,
            transform: 'translate(-50%, -50%)'
        }}
    >
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.2rem] bg-slate-900 shadow-2xl border border-white/10 flex items-center justify-center text-white shrink-0">
            <Icon />
        </div>
        <span className="mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">{label}</span>
    </motion.div>
  );

  const StepCard = ({ num, label, icon: Icon, x, delay }: any) => (
    <div className="absolute z-40" style={{ left: `${x}%`, top: `${Y_MID}%`, transform: 'translate(-50%, -50%)', transformStyle: 'preserve-3d' }}>
        {/* Red Number Bubble */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.3 }}
            className="absolute -top-[160px] left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-500 shadow-[0_10px_20px_rgba(239,68,68,0.4)] flex items-center justify-center text-white text-xs md:text-sm font-black border-2 border-white"
        >
            {num}
        </motion.div>

        {/* Card */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, translateZ: 30 }}
            className="w-32 h-44 md:w-36 md:h-48 bg-white/80 backdrop-blur-xl border border-white rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center p-4 relative overflow-hidden"
        >
            <div className="mb-3 transform transition-transform group-hover:scale-110">
                <Icon />
            </div>
            <div className="text-[10px] md:text-[11px] font-black text-slate-800 text-center uppercase tracking-tight leading-tight px-1">
                {label}
            </div>
            {/* Interior Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4),transparent)] pointer-events-none" />
        </motion.div>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      id="39"
      isPresenting={isPresenting}
      backgroundClass="bg-[#f8fafc]"
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative perspective-2000 overflow-visible pb-12">
        
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
           <div className="absolute left-[10%] w-[50%] h-[500px] bg-blue-300 blur-[200px] rounded-full" />
           <div className="absolute right-[10%] w-[50%] h-[500px] bg-emerald-300 blur-[200px] rounded-full" />
        </div>

        <div className="relative w-full max-w-7xl h-full">
            
            {/* --- SVG LAYERS --- */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="energyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#cbd5e1" />
                        <stop offset="50%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#22c55e" />
                    </linearGradient>
                    <filter id="neonGlow">
                        <feGaussianBlur stdDeviation="0.4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Main Path Base Line */}
                <motion.path 
                    d={mainPath} fill="none" stroke="#e2e8f0" strokeWidth="0.8" 
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }}
                />

                {/* Active Energy Pulse */}
                <motion.path 
                    d={mainPath} fill="none" stroke="url(#energyGrad)" strokeWidth="0.5" strokeLinecap="round" filter="url(#neonGlow)"
                    initial={{ pathDasharray: "1, 25", pathDashoffset: 0 }}
                    animate={{ pathDashoffset: -100 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                {/* Return Loop Base Line */}
                <motion.path 
                    d={approvalLoop} fill="none" stroke="#22c55e" strokeWidth="0.8" opacity="0.4"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 1.5 }}
                />

                {/* Return Loop Energy */}
                <motion.path 
                    d={approvalLoop} fill="none" stroke="#22c55e" strokeWidth="0.5" filter="url(#neonGlow)"
                    initial={{ pathDasharray: "2, 10", pathDashoffset: 0 }}
                    animate={{ pathDashoffset: 100 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />

                {/* Corner Joint Details */}
                <circle cx={coords.step3} cy="85" r="0.6" fill="#22c55e" />
                <circle cx={coords.github} cy="85" r="0.6" fill="#22c55e" />
            </svg>

            {/* --- ACTORS --- */}
            <ActorNode icon={Icons.PM} label="PM" x={coords.pm} delay={0.1} />
            <ActorNode icon={Icons.GitHub} label="Github" x={coords.github} delay={0.2} />
            <ActorNode icon={Icons.Developers} label="Developers" x={coords.devs} delay={0.3} />

            {/* --- STEPS --- */}
            <StepCard num="1" label="Push to GitHub" icon={Icons.Push} x={coords.step1} delay={0.4} />
            <StepCard num="2" label="Code Review" icon={Icons.Review} x={coords.step2} delay={0.5} />
            <StepCard num="3" label="Merge Code" icon={Icons.Merge} x={coords.step3} delay={0.6} />

            {/* --- STATUS BADGES (RE-POSITIONED TO GAPS) --- */}
            
            {/* 1. Developing - Positioned below path exactly between Developers (40) and Push (58) */}
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                className="absolute z-50 pointer-events-none"
                style={{ left: '49%', top: `${Y_MID + 15}%`, transform: 'translateX(-50%)' }}
            >
                <div className="bg-white border border-slate-200 px-4 py-1.5 rounded-xl shadow-lg text-[9px] font-black uppercase text-slate-500 tracking-[0.1em] backdrop-blur-md">
                    Developing
                </div>
            </motion.div>

            {/* 2. Pass Tests - Positioned above path exactly between Push (58) and Review (76) */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }}
                className="absolute z-50 pointer-events-none"
                style={{ left: '67%', top: `${Y_MID - 15}%`, transform: 'translateX(-50%)' }}
            >
                <div className="bg-[#2563eb] text-white px-5 py-2 rounded-2xl shadow-[0_15px_30px_rgba(37,99,235,0.4)] text-[9px] font-black uppercase tracking-[0.1em] flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                    Pass Tests
                </div>
            </motion.div>

            {/* 3. Merge to Master - Positioned above path exactly between Review (76) and Merge (94) */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4 }}
                className="absolute z-50 pointer-events-none"
                style={{ left: '85%', top: `${Y_MID - 15}%`, transform: 'translateX(-50%)' }}
            >
                <div className="bg-[#10b981] text-white px-5 py-2 rounded-2xl shadow-[0_15px_30px_rgba(16,185,129,0.4)] text-[9px] font-black uppercase tracking-[0.1em] backdrop-blur-md">
                    Merge to Master
                </div>
            </motion.div>

            {/* Approved by PM Return Pill - Centered on the loop bottom line */}
            <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, type: "spring" }}
                className="absolute z-50 bottom-[11%] left-[59.5%] -translate-x-1/2 flex items-center gap-3 bg-slate-900 px-8 py-3.5 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] border border-white/10"
            >
                <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] shadow-[0_0_15px_#10b981] animate-pulse"></div>
                <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Approved by PM</span>
            </motion.div>

        </div>

        {/* Spatial Instruction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-4 flex flex-col items-center gap-1.5 pointer-events-none"
        >
          <div className="w-px h-6 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.6em]">Orthogonal Energy Topology</span>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default GitHubFlowDiagramSlide;