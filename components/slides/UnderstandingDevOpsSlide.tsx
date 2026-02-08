import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const UnderstandingDevOpsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Understanding DevOps?</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="06"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col items-center justify-center h-full pt-2">
        <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
            {/* Using a representative DevOps Loop image as recreating the exact complex diagram with all logos in CSS is impractical */}
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Devops-toolchain.svg/1200px-Devops-toolchain.svg.png" 
                alt="DevOps Infinity Loop with Tools"
                className="max-h-[75vh] w-auto object-contain drop-shadow-md"
            />
        </div>
      </div>
    </SlideLayout>
  );
};

export default UnderstandingDevOpsSlide;