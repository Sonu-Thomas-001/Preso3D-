import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const GitHubFlowDiagramSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  const StepArrow = ({ num, label, color = "bg-orange-300" }: { num: string, label: string, color?: string }) => (
      <div className="flex flex-col items-center mx-2 z-10">
          <span className="text-red-500 font-bold mb-1 rounded-full border border-red-500 w-5 h-5 flex items-center justify-center text-xs">{num}</span>
          <div className="relative">
              <div className={`h-12 w-24 flex items-center justify-center p-2 text-center text-xs font-bold text-slate-700 border border-slate-300 shadow-sm bg-white`}>
                  {label}
              </div>
              {/* Arrow body */}
              <div className="absolute top-1/2 -right-4 w-4 h-0.5 bg-slate-400 -translate-y-1/2"></div>
              {/* Arrow Head */}
              <div className="absolute top-1/2 -right-4 w-2 h-2 border-t border-r border-slate-400 rotate-45 -translate-y-1/2"></div>
          </div>
      </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="39"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full items-center justify-center pt-2">
        
        <div className="relative w-full max-w-3xl h-[300px] border border-slate-200 rounded-lg p-4 flex items-center">
            
            {/* PM */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                 <div className="w-10 h-10 bg-[#4caf50] rounded-full flex items-center justify-center mb-1">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                 </div>
                 <span className="text-xs font-bold text-slate-600">PM</span>
            </div>

            {/* GitHub Logo Box */}
            <div className="absolute left-28 top-1/2 -translate-y-1/2 border border-slate-300 p-2 rounded flex items-center gap-2 bg-white z-20 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
                <span className="font-bold text-slate-700">GitHub</span>
            </div>

            {/* Developers */}
            <div className="absolute left-40 bottom-10 flex flex-col items-center">
                 <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-[#ff9800] rounded-full flex items-center justify-center border-2 border-white"><svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg></div>
                    <div className="w-8 h-8 bg-[#ff9800] rounded-full flex items-center justify-center border-2 border-white"><svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg></div>
                 </div>
                 <span className="text-xs font-bold text-slate-600 mt-1">Developers</span>
            </div>
            
            {/* Arrows & Steps */}
            <div className="absolute left-[260px] top-1/2 -translate-y-1/2 flex items-center">
                
                {/* Developing Arrow */}
                <div className="flex flex-col items-center mr-2">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-yellow-400 border-b-[10px] border-b-transparent"></div>
                    <span className="text-[9px] text-slate-500 mt-1">Developing</span>
                </div>

                {/* Step 1 */}
                <StepArrow num="1" label="Push to GitHub" />

                {/* Arrow spacer */}
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-blue-300 border-b-[10px] border-b-transparent mx-2"></div>
                <div className="text-[9px] text-slate-500 absolute bottom-[-20px] left-[150px]">Pass Tests</div>

                {/* Step 2 */}
                <StepArrow num="2" label="Code Review" />

                {/* Arrow spacer */}
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-green-300 border-b-[10px] border-b-transparent mx-2"></div>

                {/* Step 3 */}
                <StepArrow num="3" label="Merge Code" />

            </div>

            <div className="absolute right-10 bottom-20 w-32 text-[9px] text-slate-500 text-center">Merge Code to the Master Branch</div>
            <div className="absolute bottom-4 right-1/2 translate-x-1/2 text-[10px] text-slate-400">Approved by PM</div>
            
            {/* Lines connecting PM and Devs */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <path d="M 60 160 L 60 220 L 160 220" stroke="#cbd5e1" strokeWidth="1" fill="none" />
                <path d="M 220 200 Q 240 160 260 150" stroke="#cbd5e1" strokeWidth="1" fill="none" strokeDasharray="4" />
                
                {/* Big Loop for PM Approval */}
                <path d="M 720 170 L 720 260 L 220 260 L 220 250" stroke="#cbd5e1" strokeWidth="1" fill="none" />
                 <line x1="120" y1="150" x2="160" y2="150" stroke="#cbd5e1" strokeWidth="1" />
            </svg>

        </div>

      </div>
    </SlideLayout>
  );
};

export default GitHubFlowDiagramSlide;