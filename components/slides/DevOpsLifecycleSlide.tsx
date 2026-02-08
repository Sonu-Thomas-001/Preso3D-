import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const DevOpsLifecycleSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  const LifeCycleItem = ({ text, color, icon, positionClass }: { text: string, color: string, icon: string, positionClass: string }) => (
    <div className={`absolute flex items-center gap-2 px-4 py-2 rounded-full shadow-md text-white font-bold text-sm min-w-[120px] justify-center ${color} ${positionClass}`}>
        <span>{icon}</span>
        <span>{text}</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="22"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex items-center justify-center pt-4 pb-8">
        
        <div className="relative w-[600px] h-[350px] flex items-center justify-center">
            
            {/* Center Circle */}
            <div className="z-20 w-40 h-40 bg-white rounded-full border-[6px] border-slate-400 flex flex-col items-center justify-center shadow-xl">
                <span className="text-2xl font-bold text-slate-800">DevOps</span>
                <span className="text-lg font-semibold text-slate-600">Lifecycle</span>
            </div>

            {/* Connecting Arc (Simulated) */}
            <div className="absolute inset-0 border-[3px] border-slate-200 rounded-[40%] scale-x-110 scale-y-90 z-0"></div>

            {/* Items arranged roughly in an infinity/cycle loop */}
            
            {/* Top Left - Plan */}
            <LifeCycleItem text="Plan" color="bg-[#e91e63]" icon="📅" positionClass="top-4 left-20" />
            
            {/* Mid Left - Code */}
            <LifeCycleItem text="Code" color="bg-[#4db6ac]" icon="💻" positionClass="top-24 left-0" />
            
            {/* Bottom Left - Build */}
            <LifeCycleItem text="Build" color="bg-[#5c6bc0]" icon="🏗️" positionClass="bottom-24 left-0" />
            
            {/* Bottom Left Center - Test */}
            <LifeCycleItem text="Test" color="bg-[#7e57c2]" icon="🧪" positionClass="bottom-4 left-24" />


            {/* Top Right - Monitor */}
            <LifeCycleItem text="Monitor" color="bg-[#ff7043]" icon="🔍" positionClass="top-4 right-20" />

            {/* Mid Right - Operate */}
            <LifeCycleItem text="Operate" color="bg-[#fbc02d]" icon="⚙️" positionClass="top-24 right-0" />

            {/* Bottom Right - Deploy */}
            <LifeCycleItem text="Deploy" color="bg-[#ef5350]" icon="🚀" positionClass="bottom-24 right-0" />

            {/* Bottom Right Center - Release */}
            <LifeCycleItem text="Release" color="bg-[#66bb6a]" icon="📦" positionClass="bottom-4 right-24" />

        </div>

      </div>
    </SlideLayout>
  );
};

export default DevOpsLifecycleSlide;