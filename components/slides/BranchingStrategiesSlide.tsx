import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const BranchingStrategiesSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Branching Strategies</span>
    </div>
  );

  const strategies = [
    {
        title: "Feature Branching",
        icon: "🌿",
        desc: "Isolates work on new features. Reduces risk of unstable code in shared branches.",
        color: "bg-emerald-50 border-emerald-200"
    },
    {
        title: "Release Branching",
        icon: "📦",
        desc: "Prepares code for production. Allows for final bug fixes and documentation.",
        color: "bg-amber-50 border-amber-200"
    },
    {
        title: "Trunk-Based",
        icon: "🪵",
        desc: "Frequent small commits to main. Emphasizes speed and CI/CD integration.",
        color: "bg-blue-50 border-blue-200"
    }
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="34"
      isPresenting={isPresenting}
    >
      <div className="flex h-full items-center justify-center gap-12 relative px-4">
        
        {/* Central Concept Node */}
        <div className="w-1/3 flex flex-col justify-center items-center relative z-10">
            <div className="w-32 h-32 bg-slate-800 rounded-full flex items-center justify-center shadow-2xl z-20 border-8 border-slate-100">
                <span className="text-5xl">🌳</span>
            </div>
            <div className="mt-6 text-center">
                <h3 className="text-xl font-black text-slate-800">Strategies</h3>
                <p className="text-sm text-slate-500 mt-2">
                    Defining how and when branches are created, merged, and deleted.
                </p>
            </div>
            
            {/* Connecting Lines to Right */}
            <svg className="absolute top-1/2 left-1/2 w-[400px] h-[300px] -translate-y-1/2 pointer-events-none -z-10 overflow-visible">
                 <path d="M 0 0 C 100 0, 100 -100, 200 -120" stroke="#cbd5e1" strokeWidth="2" fill="none" strokeDasharray="4" />
                 <path d="M 0 0 C 150 0, 150 0, 200 0" stroke="#cbd5e1" strokeWidth="2" fill="none" strokeDasharray="4" />
                 <path d="M 0 0 C 100 0, 100 100, 200 120" stroke="#cbd5e1" strokeWidth="2" fill="none" strokeDasharray="4" />
            </svg>
        </div>

        {/* Right: Strategy Cards */}
        <div className="w-2/3 flex flex-col gap-6 justify-center h-full">
            {strategies.map((strat, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 50, rotateX: 10 }}
                    animate={{ opacity: 1, x: 0, rotateX: 0 }}
                    transition={{ delay: idx * 0.2, type: "spring" }}
                    whileHover={{ scale: 1.05, x: -10 }}
                    className={`flex items-center gap-4 p-4 rounded-xl border-l-8 shadow-md bg-white ${strat.color} cursor-pointer group`}
                >
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm shrink-0 group-hover:rotate-12 transition-transform">
                        {strat.icon}
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800 text-lg">{strat.title}</h4>
                        <p className="text-xs text-slate-600">
                            {strat.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </SlideLayout>
  );
};

export default BranchingStrategiesSlide;