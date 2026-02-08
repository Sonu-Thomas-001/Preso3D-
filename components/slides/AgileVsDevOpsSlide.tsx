import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const AgileVsDevOpsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="25"
      isPresenting={isPresenting}
    >
      <div className="flex h-full items-center justify-center gap-12 px-8">
        
        {/* Left: Agile Diagram */}
        <div className="flex flex-col items-center">
            <div className="relative w-64 h-64">
                {/* Center */}
                <div className="absolute inset-0 m-auto w-24 h-24 bg-white rounded-full flex items-center justify-center z-10 shadow-sm">
                    <span className="text-xl font-bold text-slate-700">AGILE</span>
                </div>
                
                {/* Segments - Simplified using a conic gradient approach heavily styled with absolute divs for labels */}
                <div className="w-full h-full rounded-full border-[30px] border-transparent"
                     style={{
                         background: `conic-gradient(
                             #f97316 0deg 60deg,
                             #fbbf24 60deg 120deg,
                             #3b82f6 120deg 180deg,
                             #0ea5e9 180deg 240deg,
                             #2dd4bf 240deg 300deg,
                             #ef4444 300deg 360deg
                         )`
                     }}
                ></div>
                {/* White inner mask to make it a donut */}
                <div className="absolute inset-[30px] bg-white rounded-full"></div>
                {/* Re-add center label */}
                <div className="absolute inset-0 m-auto w-24 h-24 flex items-center justify-center">
                     <span className="text-xl font-bold text-slate-700">AGILE</span>
                </div>

                {/* Labels */}
                <span className="absolute top-6 left-1/2 -translate-x-1/2 -translate-y-full text-[10px] font-bold text-[#f97316]">Design</span>
                <span className="absolute top-1/4 right-0 translate-x-1/2 text-[10px] font-bold text-[#fbbf24]">Develop</span>
                <span className="absolute bottom-4 right-4 text-[10px] font-bold text-[#3b82f6]">Test</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full text-[10px] font-bold text-[#0ea5e9]">Release</span>
                <span className="absolute bottom-1/4 left-0 -translate-x-1/2 text-[10px] font-bold text-[#2dd4bf]">Feedback</span>
                <span className="absolute top-4 left-4 text-[10px] font-bold text-[#ef4444]">Plan</span>
            </div>
        </div>
        
        {/* Divider */}
        <div className="h-48 w-px bg-slate-300"></div>

        {/* Right: DevOps Diagram (Infinity Loop approximation) */}
        <div className="flex flex-col items-center">
             <div className="relative w-[340px] h-[180px]">
                {/* Left Loop (DEV) */}
                <div className="absolute left-0 top-0 w-[180px] h-[180px] rounded-full border-[25px] border-[#a3e635] border-r-transparent -rotate-45 flex items-center justify-center">
                    {/* Inner styling to look like segments */}
                    <div className="absolute inset-0 rounded-full border-[25px] border-[#bef264] border-t-transparent border-l-transparent -rotate-90 opacity-50"></div>
                </div>
                
                {/* Right Loop (OPS) */}
                 <div className="absolute right-0 top-0 w-[180px] h-[180px] rounded-full border-[25px] border-[#3b82f6] border-l-transparent rotate-45 flex items-center justify-center">
                     <div className="absolute inset-0 rounded-full border-[25px] border-[#60a5fa] border-t-transparent border-r-transparent rotate-90 opacity-50"></div>
                </div>

                {/* Text Labels inside loops */}
                <span className="absolute top-1/2 left-[70px] -translate-y-1/2 font-bold text-slate-600">DEV</span>
                <span className="absolute top-1/2 right-[70px] -translate-y-1/2 font-bold text-slate-600">OPS</span>

                 {/* Phase Labels - Approximate positions */}
                 <span className="absolute top-2 left-[80px] text-[9px] font-bold text-slate-500 rotate-[-20deg]">PLAN</span>
                 <span className="absolute left-[10px] top-[70px] text-[9px] font-bold text-slate-500 rotate-[-45deg]">CREATE</span>
                 <span className="absolute bottom-[20px] left-[50px] text-[9px] font-bold text-slate-500 rotate-[-45deg]">VERIFY</span>
                 <span className="absolute bottom-[20px] left-[130px] text-[9px] font-bold text-slate-500 rotate-[45deg]">PACKAGE</span>

                 <span className="absolute top-[20px] right-[130px] text-[9px] font-bold text-slate-500 rotate-[-45deg]">RELEASE</span>
                 <span className="absolute top-[20px] right-[50px] text-[9px] font-bold text-slate-500 rotate-[45deg]">CONFIGURE</span>
                 <span className="absolute bottom-[30px] right-[70px] text-[9px] font-bold text-slate-500 rotate-[20deg]">MONITOR</span>

             </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default AgileVsDevOpsSlide;