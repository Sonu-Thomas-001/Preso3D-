import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const DevOpsModelSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="20"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col items-center justify-center h-full pt-2">
        <h2 className="text-3xl text-slate-800 font-normal mb-12">DevOps Model</h2>
        
        <div className="flex items-center justify-between w-full max-w-3xl px-8 relative">
            
            {/* Left: Your Computer */}
            <div className="flex flex-col items-center z-10">
                <div className="w-24 h-20 border-4 border-[#00529b] rounded-lg relative flex items-center justify-center bg-white">
                    <div className="w-16 h-12 bg-[#00529b]/10"></div>
                    <div className="absolute -bottom-3 w-12 h-3 bg-[#00529b] rounded-b-lg"></div>
                    <div className="absolute -bottom-4 w-16 h-1 bg-[#00529b]"></div>
                </div>
                <span className="mt-6 text-sm font-bold text-slate-600">YOUR COMPUTER</span>
            </div>

            {/* Center: Process Flow Arrows */}
            <div className="flex-grow relative h-32 mx-4">
                
                {/* Top Arrow: Delivery Pipeline (Left to Right) */}
                <div className="absolute top-0 left-0 w-full">
                    <div className="flex items-center justify-center gap-1">
                        {/* Build */}
                        <div className="relative border border-slate-400 px-4 py-1 text-[10px] font-bold text-slate-600 bg-white">
                            BUILD
                            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-slate-400 rotate-45 bg-white"></div>
                        </div>
                        {/* Test */}
                        <div className="relative border border-slate-400 px-4 py-1 text-[10px] font-bold text-slate-600 bg-white ml-2">
                            TEST
                             <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-slate-400 rotate-45 bg-white"></div>
                        </div>
                        {/* Release */}
                        <div className="relative bg-[#a5f3fc] px-6 py-1 text-[10px] font-bold text-slate-700 ml-2 clip-arrow-right">
                            RELEASE
                             <div className="absolute -right-4 top-0 h-full w-4 bg-[#a5f3fc]" style={{clipPath: 'polygon(0 0, 0 100%, 100% 50%)'}}></div>
                        </div>
                    </div>
                    <span className="text-[9px] text-slate-400 text-center block mt-1 w-full italic">Delivery Pipeline</span>
                </div>

                {/* Bottom Arrow: Feedback Loop (Right to Left) */}
                <div className="absolute bottom-0 left-0 w-full mt-8">
                    <div className="flex items-center justify-center gap-1 flex-row-reverse">
                        {/* Monitor */}
                         <div className="relative border border-slate-400 px-4 py-1 text-[10px] font-bold text-slate-600 bg-white">
                            MONITOR
                            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 border-b border-l border-slate-400 rotate-45 bg-white"></div>
                        </div>
                        {/* Plan */}
                        <div className="relative bg-[#bef264] px-6 py-1 text-[10px] font-bold text-slate-700 mr-4 ml-2">
                             PLAN
                             <div className="absolute -left-4 top-0 h-full w-4 bg-[#bef264]" style={{clipPath: 'polygon(100% 0, 100% 100%, 0 50%)'}}></div>
                        </div>
                    </div>
                    <span className="text-[9px] text-slate-400 text-center block mt-1 w-full italic">Feedback Loop</span>
                </div>

            </div>

            {/* Right: Customers */}
            <div className="flex flex-col items-center z-10">
                 <div className="w-24 h-20 border-4 border-[#00529b] rounded-lg relative flex items-center justify-center bg-white">
                    <div className="w-16 h-12 bg-[#00529b]/10"></div>
                    <div className="absolute -bottom-3 w-12 h-3 bg-[#00529b] rounded-b-lg"></div>
                    <div className="absolute -bottom-4 w-16 h-1 bg-[#00529b]"></div>
                </div>
                <span className="mt-6 text-sm font-bold text-slate-600">CUSTOMERS</span>
            </div>

        </div>
      </div>
    </SlideLayout>
  );
};

export default DevOpsModelSlide;