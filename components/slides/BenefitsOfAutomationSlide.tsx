import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const BenefitsOfAutomationSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="14"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex items-center justify-center pb-4">
        {/* Wheel Container */}
        <div className="relative w-[500px] h-[300px] flex items-center justify-center">
            
            {/* Center Text */}
            <div className="absolute z-20 bg-white rounded-full w-40 h-40 flex flex-col items-center justify-center text-center shadow-lg border-4 border-slate-50">
                <span className="text-[#00529b] font-extrabold text-lg leading-tight">Benefits of <br/>DevOps <br/>Automation</span>
            </div>

            {/* Segments - Using CSS Rotation for a Fan effect */}
            {/* Top Left - Accelerated time to market */}
            <div className="absolute top-0 left-1/2 -translate-x-full w-48 h-32 bg-[#00529b] rounded-tl-[100px] origin-bottom-right transform -rotate-[30deg] translate-y-2 translate-x-2 flex items-center justify-center p-4">
                <span className="text-white text-[10px] font-bold text-center leading-tight transform rotate-[30deg] translate-x-2 translate-y-4">Accelerated <br/>time to market</span>
            </div>

            {/* Top Right - Increased efficiency */}
            <div className="absolute top-0 right-1/2 translate-x-full w-48 h-32 bg-[#a01a35] rounded-tr-[100px] origin-bottom-left transform rotate-[30deg] translate-y-2 -translate-x-2 flex items-center justify-center p-4">
                 <span className="text-white text-[10px] font-bold text-center leading-tight transform -rotate-[30deg] -translate-x-2 translate-y-4">Increased efficiency <br/>and productivity</span>
            </div>

            {/* Right - Scalability */}
            <div className="absolute top-1/2 right-0 w-32 h-24 bg-[#ef4444] rounded-r-lg transform translate-x-[-10px] -translate-y-1/2 flex items-center justify-center p-2">
                 <span className="text-white text-[10px] font-bold text-center leading-tight pl-2">Scalability <br/>and flexibility</span>
            </div>
            
            {/* Bottom Right - Cost Optimization */}
            <div className="absolute bottom-0 right-1/2 translate-x-full w-48 h-32 bg-[#f97316] rounded-br-[100px] origin-top-left transform -rotate-[30deg] -translate-y-2 -translate-x-2 flex items-center justify-center p-4">
                 <span className="text-white text-[10px] font-bold text-center leading-tight transform rotate-[30deg] -translate-x-4 -translate-y-4">Cost <br/>optimization</span>
            </div>

            {/* Bottom Left - Improved Collaboration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-full w-48 h-32 bg-[#2dd4bf] rounded-bl-[100px] origin-top-right transform rotate-[30deg] -translate-y-2 translate-x-2 flex items-center justify-center p-4">
                 <span className="text-white text-[10px] font-bold text-center leading-tight transform -rotate-[30deg] translate-x-4 -translate-y-4">Improved <br/>collaboration and <br/>communication</span>
            </div>

             {/* Left - Enhanced Quality */}
             <div className="absolute top-1/2 left-0 w-32 h-24 bg-[#3b82f6] rounded-l-lg transform translate-x-[10px] -translate-y-1/2 flex items-center justify-center p-2">
                 <span className="text-white text-[10px] font-bold text-center leading-tight pr-2">Enhanced <br/>quality and <br/>reliability</span>
            </div>

        </div>
      </div>
    </SlideLayout>
  );
};

export default BenefitsOfAutomationSlide;