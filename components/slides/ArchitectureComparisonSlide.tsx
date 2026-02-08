import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const ArchitectureComparisonSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="45"
      isPresenting={isPresenting}
    >
      <div className="flex h-full items-end justify-center gap-12 pb-8">
        
        {/* Left: VM Architecture */}
        <div className="flex flex-col items-center w-5/12">
            <div className="flex justify-between w-full mb-1 gap-2">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex flex-col gap-1 w-1/3">
                        <div className="border border-[#46c256] bg-green-50 p-2 text-center text-[10px] font-bold text-slate-700 uppercase h-10 flex items-center justify-center">App{i}</div>
                        <div className="border border-[#46c256] bg-green-50 p-2 text-center text-[10px] font-bold text-slate-700 uppercase h-12 flex items-center justify-center">Bins/Libs</div>
                        <div className="border border-[#46c256] bg-green-50 p-2 text-center text-[10px] font-bold text-slate-700 uppercase h-12 flex items-center justify-center leading-tight">Guest OS</div>
                    </div>
                ))}
            </div>
            
            <div className="w-full border border-[#46c256] bg-green-50 p-2 text-center text-xs font-bold text-slate-700 uppercase mb-1">Hypervisor</div>
            <div className="w-full border border-[#46c256] bg-green-50 p-2 text-center text-xs font-bold text-slate-700 uppercase">Host OS</div>
            
            <div className="w-full bg-slate-300 py-1 text-center text-[10px] font-bold text-slate-700 mt-2 rounded">Virtual Machine Architecture</div>
        </div>

        {/* Right: Docker Architecture */}
        <div className="flex flex-col items-center w-5/12">
            <div className="flex justify-between w-full mb-1 gap-4 px-4">
                {[1, 2].map((i) => (
                    <div key={i} className="flex flex-col gap-2 w-1/2 relative">
                         <div className="absolute -top-6 w-full text-center text-[10px] font-bold text-slate-500 uppercase">Container {i}</div>
                         <div className="border border-slate-400 p-1 flex flex-col gap-1 bg-[#e2e8f0]">
                            <div className="border border-slate-500 bg-white p-2 text-center text-[10px] font-bold text-slate-700 uppercase h-12 flex items-center justify-center leading-tight">App{i}<br/>Bins/Libs</div>
                         </div>
                         {/* Arrow */}
                         <div className="w-full flex justify-center">
                            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                         </div>
                    </div>
                ))}
            </div>

            <div className="w-full border border-[#46c256] bg-green-50 p-2 text-center text-xs font-bold text-slate-700 uppercase mb-1 mt-1">Docker Engine</div>
            <div className="w-full border border-[#46c256] bg-green-50 p-2 text-center text-xs font-bold text-slate-700 uppercase">Host OS</div>

            <div className="w-full bg-slate-300 py-1 text-center text-[10px] font-bold text-slate-700 mt-2 rounded">Docker Architecture</div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default ArchitectureComparisonSlide;