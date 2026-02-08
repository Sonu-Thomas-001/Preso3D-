import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const AgilePrinciplesSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Agile Principles</span>
    </div>
  );

  const principles = [
    { 
        title: "The Manifesto", 
        text: "Emphasizes customer collaboration, responding to change, and frequent delivery of working software over comprehensive documentation.",
        icon: "📜",
        color: "bg-amber-100 text-amber-700 border-amber-200"
    },
    { 
        title: "Key Values", 
        text: "Promotes iterative development, small incremental releases, continuous feedback loops, and self-organizing cross-functional teams.",
        icon: "🔑",
        color: "bg-blue-100 text-blue-700 border-blue-200"
    },
    { 
        title: "In Practice", 
        text: "Instead of delivering a full app after 6 months, an Agile team releases a usable feature every 2 weeks, gathers feedback, and adjusts.",
        icon: "🚀",
        color: "bg-green-100 text-green-700 border-green-200"
    }
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="27"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full gap-8 relative z-10 px-2">
        
        {/* Principles Cards */}
        <div className="grid grid-cols-3 gap-6 h-1/2">
            {principles.map((p, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 50, rotateX: 10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: i * 0.15, type: "spring" }}
                    className={`rounded-2xl border ${p.color} p-5 shadow-lg relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 bg-white`}
                >
                    <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full bg-slate-50 opacity-50 z-0"></div>
                    <div className="text-4xl mb-3 relative z-10">{p.icon}</div>
                    <h3 className="font-bold text-lg text-slate-800 mb-2 relative z-10">{p.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify relative z-10">
                        {p.text}
                    </p>
                </motion.div>
            ))}
        </div>

        {/* Bottom Graphic: Agile vs DevOps */}
        <div className="flex-grow bg-slate-50 rounded-2xl border border-slate-200 p-4 flex flex-col justify-center items-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
             
             <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 z-10">Workflow Comparison</h4>
             
             <div className="flex items-center gap-16 z-10">
                
                {/* Agile Cycle */}
                <div className="flex flex-col items-center gap-3 group">
                    <div className="relative w-24 h-24">
                        <motion.div 
                            className="absolute inset-0 rounded-full border-4 border-l-transparent border-t-blue-500 border-r-blue-500 border-b-blue-500"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                        ></motion.div>
                        <div className="absolute inset-0 flex items-center justify-center font-black text-blue-600">AGILE</div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-1 rounded shadow-sm border border-slate-100">Iterative Circles</span>
                </div>

                {/* VS Badge */}
                <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-black text-xs shadow-lg z-20">VS</div>

                {/* DevOps Infinity */}
                <div className="flex flex-col items-center gap-3 group">
                    <div className="relative w-32 h-16">
                         <svg viewBox="0 0 100 50" className="w-full h-full drop-shadow-sm overflow-visible">
                             <defs>
                                 <linearGradient id="infGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                     <stop offset="0%" stopColor="#22c55e" />
                                     <stop offset="100%" stopColor="#3b82f6" />
                                 </linearGradient>
                             </defs>
                            <path d="M 25 25 C 25 10 50 10 50 25 C 50 40 75 40 75 25 C 75 10 50 10 50 25 C 50 40 25 40 25 25" 
                                  stroke="#e2e8f0" strokeWidth="8" fill="none" />
                            <motion.path d="M 25 25 C 25 10 50 10 50 25 C 50 40 75 40 75 25 C 75 10 50 10 50 25 C 50 40 25 40 25 25" 
                                  stroke="url(#infGrad)" strokeWidth="8" fill="none" 
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                            />
                         </svg>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-1 rounded shadow-sm border border-slate-100">Continuous Flow</span>
                </div>

             </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default AgilePrinciplesSlide;