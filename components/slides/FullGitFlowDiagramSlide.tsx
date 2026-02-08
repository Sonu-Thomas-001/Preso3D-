import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const FullGitFlowDiagramSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Full GitFlow Diagram</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="35"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full items-center justify-center">
        
        {/* Diagram Container */}
        <div className="relative w-full h-[450px] bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-800 flex items-center justify-center">
            
            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            <svg viewBox="0 0 900 450" className="w-full h-full absolute inset-0">
                <defs>
                    <filter id="neonGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    <marker id="arrowHead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L6,3 z" fill="#64748b" />
                    </marker>
                </defs>

                {/* --- LABELS --- */}
                <text x="20" y="50" fill="#3b82f6" fontSize="12" fontWeight="bold">MASTER</text>
                <text x="20" y="100" fill="#ef4444" fontSize="12" fontWeight="bold">HOTFIX</text>
                <text x="20" y="180" fill="#10b981" fontSize="12" fontWeight="bold">RELEASE</text>
                <text x="20" y="260" fill="#a855f7" fontSize="12" fontWeight="bold">DEVELOP</text>
                <text x="20" y="340" fill="#f59e0b" fontSize="12" fontWeight="bold">FEATURE</text>

                {/* --- TRACKS (Faint Lines) --- */}
                <line x1="100" y1="50" x2="880" y2="50" stroke="#1e293b" strokeWidth="2" />
                <line x1="100" y1="260" x2="880" y2="260" stroke="#1e293b" strokeWidth="2" />

                {/* --- MASTER BRANCH (Blue) --- */}
                <motion.path 
                    d="M 100 50 L 880 50" 
                    stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" filter="url(#neonGlow)"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }}
                />
                {/* Nodes */}
                <circle cx="150" cy="50" r="6" fill="#1d4ed8" stroke="white" strokeWidth="2" />
                <circle cx="350" cy="50" r="6" fill="#1d4ed8" stroke="white" strokeWidth="2" />
                <circle cx="700" cy="50" r="8" fill="#1d4ed8" stroke="white" strokeWidth="2" />
                <text x="690" y="30" fill="#3b82f6" fontSize="10">v1.0</text>
                <circle cx="850" cy="50" r="8" fill="#1d4ed8" stroke="white" strokeWidth="2" />
                <text x="840" y="30" fill="#3b82f6" fontSize="10">v1.1</text>

                {/* --- HOTFIX BRANCH (Red) --- */}
                {/* Flow: Master -> Hotfix -> Master & Develop */}
                <motion.path 
                    d="M 350 50 L 400 100 L 500 100 L 550 50" 
                    fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1 }}
                />
                <motion.path 
                    d="M 500 100 L 550 260" 
                    fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 2 }}
                />
                <circle cx="450" cy="100" r="6" fill="#b91c1c" stroke="#ef4444" strokeWidth="2" />
                <text x="430" y="125" fill="#ef4444" fontSize="10">Fix Bug</text>

                {/* --- DEVELOP BRANCH (Purple) --- */}
                <motion.path 
                    d="M 150 50 L 200 260 L 880 260" 
                    fill="none" stroke="#a855f7" strokeWidth="4" strokeLinecap="round" filter="url(#neonGlow)"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, delay: 0.5 }}
                />
                {/* Nodes */}
                {[250, 350, 450, 550, 650].map((cx, i) => (
                    <circle key={i} cx={cx} cy="260" r="5" fill="#7e22ce" stroke="white" strokeWidth="1" />
                ))}

                {/* --- FEATURE BRANCHES (Orange) --- */}
                {/* Feature 1 */}
                <motion.path 
                    d="M 250 260 L 300 340 L 400 340 L 450 260" 
                    fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.5 }}
                />
                <circle cx="350" cy="340" r="5" fill="#b45309" stroke="#f59e0b" strokeWidth="2" />

                {/* Feature 2 */}
                <motion.path 
                    d="M 650 260 L 700 340 L 800 340" 
                    fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 2.5 }}
                />

                {/* --- RELEASE BRANCH (Green) --- */}
                {/* Flow: Develop -> Release -> Master & Develop */}
                <motion.path 
                    d="M 550 260 L 600 180 L 750 180" 
                    fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 3 }}
                />
                <circle cx="675" cy="180" r="5" fill="#047857" stroke="#10b981" strokeWidth="2" />

                {/* Merge to Master */}
                <motion.path 
                    d="M 750 180 L 850 50" 
                    fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="4 2"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 4 }}
                />
                {/* Merge Back to Develop */}
                <motion.path 
                    d="M 750 180 L 800 260" 
                    fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="4 2"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 4 }}
                />

            </svg>
        </div>
      </div>
    </SlideLayout>
  );
};

export default FullGitFlowDiagramSlide;