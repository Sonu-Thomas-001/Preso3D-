import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const PRWorkflowDiagramSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">PR Workflow</span>
    </div>
  );

  const IsometricNode = ({ label, icon, x, y, delay, color = "bg-white" }: any) => (
      <motion.div
        initial={{ opacity: 0, y: y - 20 }}
        animate={{ opacity: 1, y }}
        transition={{ delay, duration: 0.5 }}
        className={`absolute w-24 h-24 ${color} rounded-xl shadow-xl border-b-4 border-r-4 border-black/10 flex flex-col items-center justify-center z-10`}
        style={{ left: x, top: y }}
      >
          <div className="text-2xl mb-1">{icon}</div>
          <div className="text-[10px] font-bold text-slate-700 text-center leading-tight px-1">{label}</div>
      </motion.div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="37"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex items-center justify-center relative overflow-visible">
        
        {/* Isometric Container */}
        <div className="relative w-[800px] h-[400px]">
            
            {/* Connecting Path SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                <defs>
                    <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#cbd5e1" />
                        <stop offset="100%" stopColor="#46c256" />
                    </linearGradient>
                </defs>
                
                {/* Path Definition */}
                <path 
                    d="M 100 150 L 200 150 L 250 220 L 350 220 L 400 150 L 500 150 L 550 80 L 650 80" 
                    fill="none" 
                    stroke="#e2e8f0" 
                    strokeWidth="8" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                
                {/* Animated Flow Line */}
                <motion.path 
                     d="M 100 150 L 200 150 L 250 220 L 350 220 L 400 150 L 500 150 L 550 80 L 650 80" 
                     fill="none" 
                     stroke="url(#pathGrad)" 
                     strokeWidth="4" 
                     strokeLinecap="round" 
                     strokeLinejoin="round"
                     initial={{ pathLength: 0 }}
                     animate={{ pathLength: 1 }}
                     transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
                />

                {/* Feedback Loop Back */}
                <path 
                    d="M 550 80 Q 500 0 350 220" 
                    fill="none" 
                    stroke="#f87171" 
                    strokeWidth="2" 
                    strokeDasharray="4 4"
                    opacity="0.5"
                />
            </svg>

            {/* Nodes */}
            {/* 1. Developer */}
            <IsometricNode x={40} y={110} label="Developer" icon="👨‍💻" delay={0.1} color="bg-blue-50" />
            
            {/* 2. Clone */}
            <IsometricNode x={180} y={110} label="Clone Repo" icon="📥" delay={0.3} />
            
            {/* 3. Branch & Commit (Lower Level) */}
            <IsometricNode x={290} y={180} label="Branch & Commit" icon="🌿" delay={0.5} color="bg-purple-50" />

            {/* 4. Create PR */}
            <IsometricNode x={430} y={110} label="Create PR" icon="📝" delay={0.7} color="bg-orange-50" />

            {/* 5. Review & Discuss (Higher Level) */}
            <IsometricNode x={580} y={40} label="Review & Merge" icon="🤝" delay={0.9} color="bg-green-50" />

            {/* Annotations */}
            <motion.div 
                className="absolute left-[380px] top-[180px] bg-white border border-red-200 text-red-500 text-[9px] px-2 py-1 rounded shadow-sm"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
                Request Changes
            </motion.div>

        </div>

      </div>
    </SlideLayout>
  );
};

export default PRWorkflowDiagramSlide;