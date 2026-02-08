import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const DockerContainersDiagramSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  const ContainerBox = ({ num, label }: { num: number, label: string }) => (
    <div className="border border-[#1e293b] p-2 flex flex-col gap-2 items-center bg-[#0f172a]/50 rounded-lg w-1/3 mx-2 relative">
        <span className="text-slate-300 text-[10px] absolute -top-4">Docker Container {num}</span>
        <div className="w-full border border-slate-500 py-2 text-center text-[10px] text-slate-300 font-bold rounded bg-[#1e293b]">App {label}</div>
        <div className="w-full border border-slate-500 py-2 text-center text-[10px] text-slate-300 font-bold rounded bg-[#1e293b]">Bins/Libs</div>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="43"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full items-center pt-2">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">DOCKER CONTAINERS</h3>

        <div className="w-full max-w-3xl bg-[#020617] p-8 rounded-xl shadow-2xl border border-slate-800 flex flex-col items-center">
            
            {/* Containers Row */}
            <div className="flex justify-between w-full mb-4 px-4 border-2 border-dashed border-slate-600 rounded-lg py-6 relative">
                 <ContainerBox num={1} label="A" />
                 <ContainerBox num={2} label="B" />
                 <ContainerBox num={3} label="C" />
            </div>

            {/* Docker Engine */}
            <div className="w-full bg-[#1e40af] py-3 text-center font-bold text-white text-xs mb-2 rounded shadow-md border border-blue-600/50">
                Docker engine
            </div>

            {/* Host OS */}
            <div className="w-full bg-[#f97316] py-3 text-center font-bold text-white text-xs mb-2 rounded shadow-md">
                Host Operating System
            </div>

            {/* Infrastructure */}
            <div className="w-full bg-[#15803d] py-3 text-center font-bold text-white text-xs rounded shadow-md">
                Infrastructure
            </div>

        </div>
      </div>
    </SlideLayout>
  );
};

export default DockerContainersDiagramSlide;