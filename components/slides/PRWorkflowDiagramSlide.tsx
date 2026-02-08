import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const PRWorkflowDiagramSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  const Box = ({ text, icon }: { text: string, icon?: React.ReactNode }) => (
    <div className="border border-slate-400 rounded-md bg-white p-2 min-w-[80px] max-w-[100px] flex flex-col items-center justify-center text-center shadow-sm relative z-10">
        {icon && <div className="mb-1">{icon}</div>}
        <span className="text-[9px] font-bold text-slate-700 leading-tight">{text}</span>
    </div>
  );

  const PersonIcon = () => (
    <div className="w-10 h-10 bg-[#0288d1] rounded-full flex items-center justify-center border-2 border-white shadow-md">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
    </div>
  );

   const GroupIcon = () => (
    <div className="flex -space-x-2">
         <div className="w-6 h-6 bg-slate-400 rounded-full border-2 border-white"></div>
         <div className="w-6 h-6 bg-slate-400 rounded-full border-2 border-white"></div>
         <div className="w-6 h-6 bg-slate-400 rounded-full border-2 border-white"></div>
    </div>
  );


  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="37"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full items-center justify-center pt-8 relative">
        
        {/* Diagram Wrapper */}
        <div className="relative w-full max-w-3xl h-64">
            {/* SVG Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <defs>
                    <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L6,3 z" fill="#94a3b8" />
                    </marker>
                </defs>
                
                {/* Developer to Clone */}
                <path d="M 100 160 L 100 100 L 200 100" stroke="#94a3b8" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />
                
                {/* Clone to Create Branch */}
                <path d="M 280 100 L 330 100" stroke="#94a3b8" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />
                
                {/* Create Branch to Commits (Dots) */}
                <path d="M 380 120 L 380 160" stroke="#94a3b8" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />
                
                {/* Commits Line */}
                <line x1="380" y1="160" x2="520" y2="160" stroke="#000" strokeWidth="2" />

                {/* Commits to Create PR */}
                <path d="M 520 160 L 520 120" stroke="#94a3b8" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />

                {/* Create PR to Discussion */}
                <path d="M 600 120 L 640 150" stroke="#94a3b8" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />
                
                {/* Discussion to Merge */}
                <path d="M 700 150 L 740 120" stroke="#94a3b8" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />

                 {/* Loop back from Discussion */}
                 <path d="M 670 190 Q 670 210 600 210 L 450 210 Q 380 210 380 170" stroke="#94a3b8" strokeWidth="1" fill="none" strokeDasharray="4" markerEnd="url(#arrow)" />

            </svg>

            {/* Nodes */}
            
            {/* Developer */}
            <div className="absolute left-[70px] top-[160px] flex flex-col items-center">
                <PersonIcon />
                <span className="text-[10px] font-bold mt-1 text-slate-600">Developer</span>
            </div>

            {/* Clone */}
            <div className="absolute left-[200px] top-[80px]">
                <Box text="Clone" />
            </div>

            {/* Create Branch */}
            <div className="absolute left-[330px] top-[70px]">
                <Box text="Create a branch" />
            </div>

            {/* Commits Dots */}
            <div className="absolute left-[370px] top-[150px] flex items-center gap-8">
                 <div className="w-5 h-5 rounded-full border-4 border-black bg-white z-10"></div>
                 <div className="w-5 h-5 rounded-full border-4 border-black bg-white z-10"></div>
                 <div className="w-5 h-5 rounded-full border-4 border-black bg-white z-10"></div>
            </div>
             <span className="absolute left-[430px] top-[180px] text-[10px] text-slate-500">commits</span>

            {/* Create Pull Request */}
            <div className="absolute left-[500px] top-[70px]">
                <Box text="Create Pull request" />
            </div>

            {/* Discussion */}
            <div className="absolute left-[640px] top-[150px] flex flex-col items-center">
                 <div className="flex mb-1 gap-1">
                    <div className="bg-slate-200 p-1 rounded border border-slate-300">💬</div>
                 </div>
                 <span className="text-[10px] font-bold text-slate-700">Discussion</span>
                 <div className="mt-1 opacity-50"><GroupIcon /></div>
                 <span className="text-[8px] text-slate-500">Project Community</span>
            </div>

            {/* Merge */}
            <div className="absolute left-[720px] top-[70px]">
                <Box text="Merge or close the PR" />
            </div>

        </div>

      </div>
    </SlideLayout>
  );
};

export default PRWorkflowDiagramSlide;