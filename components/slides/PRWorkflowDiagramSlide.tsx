import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const PRWorkflowDiagramSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">The Pull Request Workflow</span>
    </div>
  );

  const WorkflowStep = ({ label, icon, step, colorClass, x, y, delay, z = 0 }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay, duration: 0.8, type: "spring" }}
        className="absolute group cursor-pointer -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${x}%`, top: `${y}%`, transformStyle: 'preserve-3d', translateZ: z }}
    >
        {/* Floating Badge */}
        <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
            className={`absolute -top-10 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-white shadow-lg z-50 whitespace-nowrap border border-white/20 ${colorClass}`}
        >
            Step 0{step}
        </motion.div>

        {/* Glass Card */}
        <motion.div 
            whileHover={{ scale: 1.05, rotateY: 5, translateZ: 20 }}
            className="w-36 h-40 bg-white/30 backdrop-blur-xl border border-white/80 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center p-4 relative overflow-hidden"
        >
            <div className="text-4xl mb-3 drop-shadow-md group-hover:scale-110 transition-transform duration-500">{icon}</div>
            <div className="text-[11px] font-black text-slate-800 text-center uppercase tracking-tight leading-tight px-2">{label}</div>
            
            {/* Gloss effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
        </motion.div>

        {/* Ambient shadow */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900/5 blur-xl rounded-full"></div>
    </motion.div>
  );

  // Defining centers for the path to pass through
  const nodes = [
    { x: 10, y: 50 }, // Step 1
    { x: 30, y: 50 }, // Step 2
    { x: 50, y: 65 }, // Step 3
    { x: 70, y: 50 }, // Step 4
    { x: 90, y: 25 }, // Step 5
  ];

  const mainPath = `M ${nodes[0].x} ${nodes[0].y} L ${nodes[1].x} ${nodes[1].y} L ${nodes[2].x} ${nodes[2].y} L ${nodes[3].x} ${nodes[3].y} L ${nodes[4].x} ${nodes[4].y}`;

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="37"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative perspective-2500 overflow-visible pb-12">
        
        {/* Ambient Spatial Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
           <div className="absolute left-[10%] w-[40%] h-[400px] bg-blue-400 blur-[150px] rounded-full" />
           <div className="absolute right-[10%] w-[40%] h-[400px] bg-purple-400 blur-[150px] rounded-full" />
           <div className="absolute bottom-0 w-full h-[300px] bg-emerald-400 blur-[150px] rounded-full opacity-50" />
        </div>

        {/* THE WORKFLOW SCENE */}
        <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
            
            {/* SVG Connecting Paths */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#94a3b8" />
                        <stop offset="100%" stopColor="#46c256" />
                    </linearGradient>
                </defs>
                
                {/* Primary Path Background */}
                <motion.path 
                    d={mainPath} 
                    fill="none" 
                    stroke="#e2e8f0" 
                    strokeWidth="0.5" 
                    strokeDasharray="1 0.8"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Animated Pulse on Path */}
                <motion.path 
                     d={mainPath} 
                     fill="none" 
                     stroke="url(#flowGrad)" 
                     strokeWidth="0.5" 
                     strokeLinecap="round"
                     initial={{ pathLength: 0 }}
                     animate={{ pathLength: 1 }}
                     transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                />

                {/* Feedback Loop Path (Request Changes) */}
                <motion.path 
                    d="M 85 20 Q 65 0 52 62" 
                    fill="none" 
                    stroke="#f87171" 
                    strokeWidth="0.3" 
                    strokeDasharray="0.5 0.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5, delay: 2 }}
                />
            </svg>

            {/* Stages / Nodes */}
            <WorkflowStep 
                step="1" label="Local Dev" icon="👨‍💻" 
                x={nodes[0].x} y={nodes[0].y} delay={0.2} colorClass="bg-slate-600" z={10} 
            />
            
            <WorkflowStep 
                step="2" label="Sync Repo" icon="📥" 
                x={nodes[1].x} y={nodes[1].y} delay={0.4} colorClass="bg-blue-500" z={20}
            />

            <WorkflowStep 
                step="3" label="New Branch" icon="🌿" 
                x={nodes[2].x} y={nodes[2].y} delay={0.6} colorClass="bg-purple-500" z={40}
            />

            <WorkflowStep 
                step="4" label="Create PR" icon="📝" 
                x={nodes[3].x} y={nodes[3].y} delay={0.8} colorClass="bg-orange-500" z={20}
            />

            <WorkflowStep 
                step="5" label="Review & Merge" icon="🚀" 
                x={nodes[4].x} y={nodes[4].y} delay={1.0} colorClass="bg-emerald-500" z={60}
            />

            {/* Request Changes Annotation */}
            <motion.div 
                className="absolute left-[62%] top-[8%] bg-white/95 px-4 py-2 rounded-xl shadow-xl border border-red-100 flex items-center gap-3 z-[100]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 }}
            >
                <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-wider">Reviewer Input</span>
                    <span className="text-[9px] text-slate-500 font-bold italic">"Needs optimization..."</span>
                </div>
            </motion.div>

        </div>

        {/* Spatial Instruction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-4 flex flex-col items-center gap-1.5 pointer-events-none"
        >
          <div className="w-px h-6 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.4em]">Interactive Workflow Topology</span>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default PRWorkflowDiagramSlide;