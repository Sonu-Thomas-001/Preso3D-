import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const ScrumAndKanbanDetailsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold tracking-tight">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Methodology Details</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="29"
      isPresenting={isPresenting}
    >
      <div className="flex h-full gap-8 px-4 relative z-10">
        
        {/* SCRUM PANEL */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-1/2 h-full bg-white/60 backdrop-blur-md rounded-2xl border border-blue-100 shadow-lg p-6 flex flex-col relative overflow-hidden group hover:bg-white transition-colors"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-10 -mt-10 opacity-50 z-0"></div>
            
            <div className="relative z-10 flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white text-xl shadow-md">🔄</div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">Scrum</h3>
                    <span className="text-[10px] font-bold text-blue-500 uppercase">Fixed Iterations</span>
                </div>
            </div>

            <div className="flex-grow space-y-4 text-sm text-slate-600 text-justify relative z-10">
                <p>Scrum is a structured framework organizing work into <span className="font-bold text-blue-600">Sprints</span> (2-4 weeks). It relies on roles (PO, Scrum Master) and ceremonies (Stand-ups, Reviews).</p>
                <div className="bg-blue-50 p-3 rounded-xl border border-blue-100 italic text-xs">
                    <span className="font-bold block mb-1">Example:</span>
                    "A banking app team plans a 2-week sprint for transaction history, reviews it with stakeholders, and deploys."
                </div>
            </div>

            {/* Visual: Rotating Sprint Cycle */}
            <div className="mt-auto h-24 flex items-center justify-center relative">
                 <motion.div 
                    className="w-20 h-20 rounded-full border-4 border-dashed border-blue-300"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                 />
                 <div className="absolute text-[10px] font-black text-blue-400">SPRINT</div>
            </div>
        </motion.div>

        {/* KANBAN PANEL */}
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-1/2 h-full bg-white/60 backdrop-blur-md rounded-2xl border border-orange-100 shadow-lg p-6 flex flex-col relative overflow-hidden group hover:bg-white transition-colors"
        >
             <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -mr-10 -mt-10 opacity-50 z-0"></div>

             <div className="relative z-10 flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center text-white text-xl shadow-md">📋</div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">Kanban</h3>
                    <span className="text-[10px] font-bold text-orange-500 uppercase">Continuous Flow</span>
                </div>
            </div>

            <div className="flex-grow space-y-4 text-sm text-slate-600 text-justify relative z-10">
                <p>Kanban is a visual method focused on efficiency. Work items move through columns (To Do, In Progress, Done) with enforced <span className="font-bold text-orange-600">WIP Limits</span>.</p>
                <div className="bg-orange-50 p-3 rounded-xl border border-orange-100 italic text-xs">
                    <span className="font-bold block mb-1">Example:</span>
                    "Ops team manages incidents on a board, limiting active tickets to 3 per person to ensure faster resolution."
                </div>
            </div>

            {/* Visual: Moving Cards */}
            <div className="mt-auto h-24 flex items-center justify-center gap-2 relative overflow-hidden">
                 <div className="flex gap-2 w-full justify-center">
                    {[1, 2, 3].map((i) => (
                        <motion.div 
                            key={i}
                            className="w-12 h-16 bg-white border border-slate-200 rounded shadow-sm flex flex-col p-1 gap-1"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                        >
                            <div className="h-1 w-full bg-orange-300 rounded-full"></div>
                            <div className="h-1 w-2/3 bg-slate-200 rounded-full"></div>
                        </motion.div>
                    ))}
                 </div>
                 {/* Swimlanes */}
                 <div className="absolute inset-0 flex justify-between pointer-events-none">
                     <div className="w-px h-full bg-slate-200"></div>
                     <div className="w-px h-full bg-slate-200"></div>
                 </div>
            </div>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default ScrumAndKanbanDetailsSlide;