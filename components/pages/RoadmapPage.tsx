import React from 'react';
import { motion } from 'framer-motion';

const RoadmapPage: React.FC = () => {
  const milestones = [
    { quarter: "Q1 2024", title: "Core Engine Beta", desc: "Launch of CSS3D parallax engine, basic slide components, and keyboard navigation.", status: "completed" },
    { quarter: "Q2 2024", title: "Theme System", desc: "Introduction of global theme providers for one-click switching between Dark, Light, and Corporate modes.", status: "active" },
    { quarter: "Q3 2024", title: "Visual Editor", desc: "A drag-and-drop interface for non-developers to compose slides using pre-built React blocks.", status: "planned" },
    { quarter: "Q4 2024", title: "Cloud Sync", desc: "Real-time collaboration via WebSockets, allowing multiple users to edit and present simultaneously.", status: "planned" },
    { quarter: "2025+", title: "Export Pipeline", desc: "Server-side rendering to export interactive decks to high-quality PDF and MP4 video formats.", status: "planned" }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
            <h1 className="text-5xl font-black text-white tracking-tighter mb-4">Future Horizons</h1>
            <p className="text-slate-400">Our vision for the future of spatial storytelling.</p>
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-0">
            {milestones.map((item, i) => {
                const isActive = item.status === 'active';
                const isCompleted = item.status === 'completed';
                
                return (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="mb-12 relative pl-8 md:pl-12"
                    >
                        {/* Dot Indicator */}
                        <div className={`
                            absolute -left-[5px] top-2 w-3 h-3 rounded-full border-2 border-[#0B0C10]
                            ${isCompleted ? 'bg-indigo-500' : isActive ? 'bg-white animate-pulse' : 'bg-slate-700'}
                        `}></div>

                        <div className={`
                            p-6 rounded-2xl border transition-all duration-300
                            ${isActive 
                                ? 'bg-white/5 border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.1)]' 
                                : 'bg-transparent border-white/5 hover:bg-white/[0.02]'}
                        `}>
                            <div className="flex items-center justify-between mb-2">
                                <span className={`text-xs font-bold uppercase tracking-widest ${isActive ? 'text-indigo-400' : 'text-slate-500'}`}>
                                    {item.quarter}
                                </span>
                                {isActive && <span className="bg-indigo-500/20 text-indigo-300 text-[10px] font-bold px-2 py-0.5 rounded-full">IN PROGRESS</span>}
                                {isCompleted && <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full">DONE</span>}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    </div>
  );
};

export default RoadmapPage;