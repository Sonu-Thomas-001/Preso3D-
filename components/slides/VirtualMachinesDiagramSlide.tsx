import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const VirtualMachinesDiagramSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  const VMBox = ({ num }: { num: number }) => (
    <div className="border border-slate-400 p-2 flex flex-col gap-1 items-center bg-white shadow-sm w-1/3 mx-1">
        <span className="font-bold text-slate-700 text-xs mb-1">VM{num}</span>
        <div className="w-full bg-green-100 border border-green-300 py-1 text-center text-[10px] text-green-800 font-bold">App</div>
        <div className="w-full bg-blue-100 border border-blue-300 py-1 text-center text-[10px] text-blue-800 font-bold">Guest OS</div>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="41"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full items-center pt-2">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Virtual machines</h2>
        
        <div className="w-full max-w-2xl border border-slate-400 p-4 bg-white shadow-lg">
            {/* VMs Row */}
            <div className="flex justify-between mb-2 px-4">
                <VMBox num={1} />
                <VMBox num={2} />
                <VMBox num={3} />
            </div>

            {/* Hypervisor */}
            <div className="w-full bg-[#dbece2] border border-[#46c256] py-3 text-center font-bold text-slate-700 mb-2 mx-auto rounded-sm shadow-sm">
                Hypervisor
            </div>

            {/* Host OS */}
            <div className="w-full bg-[#bfdbfe] border border-blue-400 py-3 text-center font-bold text-slate-700 mb-2 mx-auto rounded-sm shadow-sm">
                Host operating system
            </div>

            {/* Host Hardware */}
            <div className="w-full bg-[#fde68a] border border-yellow-400 py-3 text-center font-bold text-slate-700 mx-auto rounded-sm shadow-sm">
                Host hardware
            </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default VirtualMachinesDiagramSlide;