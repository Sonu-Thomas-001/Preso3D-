import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const GitHubFlowDiagramSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">GitHub Flow</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="39"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex items-center justify-center relative perspective-1000">
        
        {/* 3D Container */}
        <motion.div 
            className="relative w-full max-w-4xl h-[400px] bg-slate-50/50 rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
            initial={{ rotateX: 10 }}
            animate={{ rotateX: 0 }}
            transition={{ duration: 1 }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#e2e8f0_1px,transparent_1px)] bg-[size:20px_20px] opacity-50"></div>

            <svg className="absolute inset-0 w-full h-full overflow-visible">
                <defs>
                    <linearGradient id="mainLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                    <filter id="shadow">
                        <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.2"/>
                    </filter>
                </defs>

                {/* Main Branch Line (Bottom) */}
                <path 
                    d="M 50 300 L 850 300" 
                    stroke="url(#mainLineGrad)" 
                    strokeWidth="12" 
                    strokeLinecap="round"
                    filter="url(#shadow)"
                />
                <text x="80" y="340" fill="#3b82f6" fontSize="12" fontWeight="bold">MASTER</text>

                {/* Feature Branch Arc */}
                {/* Points: Start(150, 300) -> Peak(450, 100) -> End(750, 300) */}
                <path 
                    d="M 150 300 C 150 300, 200 100, 450 100 C 700 100, 750 300, 750 300"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="12 6"
                    filter="url(#shadow)"
                />
                
                {/* Animation Particle on Arc */}
                <circle r="6" fill="white">
                    <animateMotion 
                        dur="4s" 
                        repeatCount="indefinite" 
                        path="M 150 300 C 150 300, 200 100, 450 100 C 700 100, 750 300, 750 300"
                    />
                </circle>

                {/* Vertical Step Markers */}
                {/* 1. Branch */}
                <line x1="150" y1="300" x2="150" y2="280" stroke="#94a3b8" strokeWidth="2" />
                
                {/* 2. Commit */}
                <circle cx="300" cy="120" r="8" fill="#f59e0b" stroke="white" strokeWidth="2" />
                
                {/* 3. Pull Request */}
                <circle cx="450" cy="100" r="10" fill="#ec4899" stroke="white" strokeWidth="2" />
                
                {/* 4. Discuss */}
                <circle cx="600" cy="120" r="8" fill="#10b981" stroke="white" strokeWidth="2" />

                {/* 5. Merge */}
                <circle cx="750" cy="300" r="12" fill="#3b82f6" stroke="white" strokeWidth="4" />

            </svg>

            {/* 3D Floating Labels/Cards */}
            
            {/* Developer */}
            <motion.div 
                className="absolute left-[130px] top-[220px] bg-white p-2 rounded-lg shadow-lg flex items-center gap-2 border border-purple-100"
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
            >
                <span className="text-xl">👩‍💻</span>
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-700">Dev</span>
                    <span className="text-[8px] text-slate-500">Create Branch</span>
                </div>
            </motion.div>

            {/* PR */}
            <motion.div 
                className="absolute left-[410px] top-[40px] bg-white p-2 rounded-lg shadow-lg flex items-center gap-2 border border-pink-100"
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
            >
                <span className="text-xl">📝</span>
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-700">Pull Request</span>
                    <span className="text-[8px] text-slate-500">Open for Review</span>
                </div>
            </motion.div>

            {/* Review */}
            <motion.div 
                className="absolute left-[560px] top-[150px] bg-white p-2 rounded-lg shadow-lg flex items-center gap-2 border border-green-100"
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}
            >
                <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-slate-300 border border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-slate-400 border border-white"></div>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-700">Team Review</span>
                    <span className="text-[8px] text-slate-500">Discuss & Approve</span>
                </div>
            </motion.div>

            {/* PM Approval */}
            <motion.div 
                className="absolute left-[700px] top-[340px] bg-white px-2 py-1 rounded shadow text-[10px] text-slate-600 font-bold border border-slate-200"
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }}
            >
                ✅ PM Approved
            </motion.div>

        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default GitHubFlowDiagramSlide;