import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const KanbanVsScrumSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  const TableRow = ({ icon, label, kanban, scrum }: { icon: any, label: string, kanban: string, scrum: string }) => (
    <div className="grid grid-cols-4 gap-2 text-[9px] items-center mb-3">
        {/* Icon & Label */}
        <div className="col-span-1 flex flex-col items-center justify-center bg-[#ff5722] text-white p-2 rounded">
            {icon}
            <span className="mt-1 text-center leading-none font-bold">{label}</span>
        </div>
        {/* Kanban Text */}
        <div className="col-span-1 bg-slate-100 p-2 rounded flex items-center justify-center text-center h-full border border-slate-200 text-slate-700">
            {kanban}
        </div>
        {/* Scrum Text */}
        <div className="col-span-2 bg-slate-100 p-2 rounded flex items-center justify-center text-center h-full border border-slate-200 text-slate-700">
            {scrum}
        </div>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="28"
      isPresenting={isPresenting}
    >
      <div className="flex h-full gap-8 pt-4">
        
        {/* Left: Comparison Table */}
        <div className="w-1/2 flex flex-col">
            <h3 className="text-center font-bold text-slate-700 mb-4 text-sm">Kanban vs. Scrum</h3>
            
            {/* Header Row */}
            <div className="grid grid-cols-4 gap-2 mb-2 text-[10px] font-bold text-white text-center">
                <div className="col-span-1"></div>
                <div className="col-span-1 bg-[#ff5722] py-1 rounded">Kanban</div>
                <div className="col-span-2 bg-[#ff5722] py-1 rounded">Scrum</div>
            </div>

            <TableRow 
                icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>}
                label="Task Structure"
                kanban="Cards and boards"
                scrum="Sprints, sprint backlogs, and product backlogs"
            />
             <TableRow 
                icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                label="Progress tracking"
                kanban="Visualization of individuals in progress"
                scrum="Checkpoints for flexible adaptation"
            />
            <TableRow 
                icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>}
                label="Prioritization"
                kanban="High to low"
                scrum="Equal (within sprints)"
            />
            <TableRow 
                icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                label="Best team fit"
                kanban="Varied, distributed teams or teams with many players"
                scrum="Teams with complex objectives"
            />
        </div>

        {/* Right: Visuals */}
        <div className="w-1/2 flex items-center justify-center bg-[#0D1B2A] rounded-lg relative overflow-hidden p-4">
             {/* Scrum Loop */}
             <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <div className="w-32 h-32 rounded-full border-8 border-[#0288d1] border-l-transparent flex items-center justify-center rotate-45">
                    <span className="text-white font-bold -rotate-45">Sprint</span>
                    <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="text-white text-center font-bold mt-2">SCRUM</div>
             </div>

             {/* VS Badge */}
             <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-slate-800 z-10 shadow-lg">VS</div>

             {/* Kanban Board */}
             <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center">
                 <div className="bg-slate-200 p-2 rounded w-40">
                    <div className="flex justify-between text-[6px] font-bold mb-1">
                        <span>To do</span>
                        <span>In progress</span>
                        <span>Done</span>
                    </div>
                    <div className="flex gap-1 h-20">
                        <div className="flex-1 bg-slate-300 rounded flex flex-col gap-1 p-0.5">
                            <div className="h-2 bg-red-500 w-full rounded-sm"></div>
                            <div className="h-2 bg-orange-500 w-full rounded-sm"></div>
                        </div>
                         <div className="flex-1 bg-slate-300 rounded flex flex-col gap-1 p-0.5">
                            <div className="h-2 bg-yellow-400 w-full rounded-sm"></div>
                             <div className="h-2 bg-yellow-400 w-full rounded-sm"></div>
                        </div>
                         <div className="flex-1 bg-slate-300 rounded flex flex-col gap-1 p-0.5">
                             <div className="h-2 bg-green-500 w-full rounded-sm"></div>
                        </div>
                    </div>
                 </div>
                 <div className="text-white text-center font-bold mt-2">KANBAN</div>
             </div>

             {/* 24h cycle icon on scrum loop */}
             <div className="absolute left-24 top-16 w-6 h-6 border-2 border-white rounded-full text-[6px] text-white flex items-center justify-center">24h</div>

        </div>

      </div>
    </SlideLayout>
  );
};

export default KanbanVsScrumSlide;