import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const BranchingStrategiesSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-[#46c256] text-xl font-bold mt-1">Branching Strategies</span>
    </div>
  );

  const points = [
    "Branching strategies define how and when branches are created, merged, and deleted to support collaboration and stability.",
    "Common strategies include feature branching, release branching, and trunk-based development.",
    "Feature branching isolates work on new features, reducing the risk of unstable code in shared branches, while trunk-based development emphasizes frequent small commits to a single main branch to accelerate delivery.",
    "Example: In a microservices-based system, teams may use trunk-based development for fast-moving services, committing small changes daily to the main branch, while larger enterprise applications may prefer feature branching to manage complexity and reduce integration risks."
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="34"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-4">
        <div className="flex flex-col gap-6 pr-8">
            {points.map((text, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        {text}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default BranchingStrategiesSlide;