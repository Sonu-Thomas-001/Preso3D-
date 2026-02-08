import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const KanbanVsScrumSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Kanban vs Scrum</span>
    </div>
  );

  const comparisonData = [
    { label: "Structure", kanban: "Cards & Boards", scrum: "Sprints & Backlogs", icon: "🏗️" },
    { label: "Tracking", kanban: "Visual Flow", scrum: "Sprint Checkpoints", icon: "📉" },
    { label: "Priority", kanban: "High to Low (Continuous)", scrum: "Sprint Goal (Fixed)", icon: "🎯" },
    { label: "Team Fit", kanban: "Operational / Support", scrum: "Product / Development", icon: "👥" },
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="28"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex items-center justify-center relative perspective-1000">
        
        {/* Background Split */}
        <div className="absolute inset-0 flex">
            <div className="w-1/2 bg-gradient-to-br from-orange-50/50 to-transparent"></div>
            <div className="w-1/2 bg-gradient-to-bl from-blue-50/50 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl flex gap-8 items-center justify-center px-4">
            
            {/* KANBAN CARD */}
            <motion.div 
                initial={{ x: -50, opacity: 0, rotateY: 10 }}
                animate={{ x: 0, opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.6 }}
                className="w-1/3 bg-white rounded-2xl shadow-xl border-t-8 border-orange-500 overflow-hidden flex flex-col"
            >
                <div className="p-6 bg-orange-50 border-b border-orange-100 flex flex-col items-center">
                    <div className="text-4xl mb-2">📋</div>
                    <h2 className="text-2xl font-black text-orange-600 tracking-tight">KANBAN</h2>
                    <span className="text-[10px] uppercase font-bold text-orange-400">Continuous Flow</span>
                </div>
                <div className="p-4 flex flex-col gap-4">
                    {comparisonData.map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <span className="text-[10px] text-slate-400 font-bold uppercase mb-1">{item.label}</span>
                            <span className="text-xs font-bold text-slate-700">{item.kanban}</span>
                            {i < 3 && <div className="w-8 h-0.5 bg-slate-100 mt-3"></div>}
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* VS CENTER */}
            <div className="flex flex-col items-center gap-2">
                 <div className="w-16 h-16 rounded-full bg-slate-800 text-white flex items-center justify-center font-black text-xl shadow-2xl border-4 border-white z-20">
                    VS
                 </div>
                 <div className="h-full w-0.5 bg-slate-200 absolute top-0 bottom-0 -z-10"></div>
            </div>

            {/* SCRUM CARD */}
             <motion.div 
                initial={{ x: 50, opacity: 0, rotateY: -10 }}
                animate={{ x: 0, opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.6 }}
                className="w-1/3 bg-white rounded-2xl shadow-xl border-t-8 border-blue-500 overflow-hidden flex flex-col"
            >
                <div className="p-6 bg-blue-50 border-b border-blue-100 flex flex-col items-center">
                    <div className="text-4xl mb-2">⏱️</div>
                    <h2 className="text-2xl font-black text-blue-600 tracking-tight">SCRUM</h2>
                    <span className="text-[10px] uppercase font-bold text-blue-400">Iterative Sprints</span>
                </div>
                <div className="p-4 flex flex-col gap-4">
                    {comparisonData.map((item, i) => (
                         <div key={i} className="flex flex-col items-center text-center">
                            <span className="text-[10px] text-slate-400 font-bold uppercase mb-1">{item.label}</span>
                            <span className="text-xs font-bold text-slate-700">{item.scrum}</span>
                            {i < 3 && <div className="w-8 h-0.5 bg-slate-100 mt-3"></div>}
                        </div>
                    ))}
                </div>
            </motion.div>

        </div>

      </div>
    </SlideLayout>
  );
};

export default KanbanVsScrumSlide;