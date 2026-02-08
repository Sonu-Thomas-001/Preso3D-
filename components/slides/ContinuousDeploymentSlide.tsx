import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const ContinuousDeploymentSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  const StepBox = ({ text }: { text: string }) => (
    <div className="bg-[#3b82f6] text-white text-[10px] sm:text-xs font-bold py-3 px-2 rounded shadow-md w-24 text-center z-10">
      {text}
    </div>
  );

  const Arrow = ({ color = "text-[#46c256]", label }: { color?: string, label?: string }) => (
    <div className="flex flex-col items-center justify-center -mx-1 z-0 relative">
        {label && <span className="text-[8px] text-slate-500 absolute -top-4 w-20 text-center leading-tight">{label}</span>}
        <svg className={`w-8 h-8 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="16"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full justify-center items-center gap-12 pt-4">
        
        {/* Top Flow: Continuous Delivery */}
        <div className="flex flex-col items-center w-full">
            <h3 className="text-sm font-bold text-slate-700 mb-2">Continuous Delivery</h3>
            <div className="flex items-center justify-center gap-1">
                <StepBox text="Dev" />
                <Arrow />
                <StepBox text="Application Test" />
                <Arrow />
                <StepBox text="Integration Test" />
                <Arrow label="Automatic trigger" />
                <StepBox text="Acceptance Test" />
                <Arrow color="text-[#ef4444]" label="Manual trigger" />
                <StepBox text="Production" />
            </div>
        </div>

        {/* Bottom Flow: Continuous Deployment */}
        <div className="flex flex-col items-center w-full">
            <div className="flex items-center justify-center gap-1">
                <StepBox text="Dev" />
                <Arrow />
                <StepBox text="Application Test" />
                <Arrow />
                <StepBox text="Integration Test" />
                <Arrow />
                <StepBox text="Acceptance Test" />
                <Arrow label="Automatic trigger" />
                <StepBox text="Production" />
            </div>
            <h3 className="text-sm font-bold text-slate-700 mt-2">Continuous Deployment</h3>
        </div>

      </div>
    </SlideLayout>
  );
};

export default ContinuousDeploymentSlide;