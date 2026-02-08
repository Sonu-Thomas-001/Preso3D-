import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const AgilePrinciplesSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-[#46c256] text-xl font-bold mt-1">Agile Principles</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="27"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-2 relative">
        
        {/* Bullets */}
        <div className="flex flex-col gap-4 pl-2 pr-8 z-10">
            <div className="flex gap-3 items-start">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                    Agile is based on the Agile Manifesto, which emphasizes customer collaboration, responding to change, frequent delivery of working software, and close interaction between business and technical teams.
                </p>
            </div>
            <div className="flex gap-3 items-start">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                    Agile principles promote iterative development, small and incremental releases, continuous feedback, and self-organizing cross-functional teams.
                </p>
            </div>
            <div className="flex gap-3 items-start">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                <p className="text-sm text-slate-700 leading-relaxed text-justify italic">
                    Example: Instead of delivering a full application after six months, an Agile team releases a usable feature every two weeks, gathers customer feedback, and adjusts the next sprint's priorities accordingly.
                </p>
            </div>
        </div>

        {/* Bottom Graphic */}
        <div className="flex-grow flex flex-col items-center justify-end pb-4 mt-8">
             <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4">Agile vs DevOps - Understand the Difference</h4>
             <div className="flex items-center gap-8">
                {/* Agile Cycle */}
                <div className="relative w-32 h-32 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-4 border-blue-400 border-t-transparent -rotate-45"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-yellow-400 border-b-transparent rotate-12 scale-90"></div>
                    <span className="text-xs font-bold text-slate-600 bg-white p-2 rounded-full shadow-sm z-10">AGILE</span>
                </div>

                <span className="text-lg font-bold text-slate-400">VS</span>

                {/* DevOps Infinity */}
                <div className="relative w-40 h-20 flex items-center justify-center">
                     <svg viewBox="0 0 100 50" className="w-full h-full drop-shadow-sm">
                        <path d="M 25 25 C 25 10 50 10 50 25 C 50 40 75 40 75 25 C 75 10 50 10 50 25 C 50 40 25 40 25 25" 
                              stroke="#84cc16" strokeWidth="8" fill="none" />
                     </svg>
                     <div className="absolute flex justify-between w-full px-6">
                        <span className="text-[10px] font-bold text-slate-600 bg-white/80 px-1 rounded">DEV</span>
                        <span className="text-[10px] font-bold text-slate-600 bg-white/80 px-1 rounded">OPS</span>
                     </div>
                </div>
             </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default AgilePrinciplesSlide;