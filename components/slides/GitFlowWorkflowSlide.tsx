import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const GitFlowWorkflowSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-[#46c256] text-xl font-bold mt-1">GitFlow Workflow</span>
    </div>
  );

  const points = [
    "GitFlow is a structured branching model designed for projects with planned releases and multiple parallel development efforts.",
    "It defines long-lived branches such as main (or master) for production-ready code and develop for ongoing development, along with supporting branches like feature, release, and hotfix.",
    "Feature branches are created from develop for new functionality, release branches prepare code for production by stabilizing and fixing bugs, and hotfix branches handle urgent production issues directly from main.",
    "Example: A team developing a retail application works on multiple feature branches (e.g., feature/cart-discounts), merges them into develop, creates a release/1.2 branch for final testing, and later uses a hotfix/1.2.1 branch to quickly fix a production payment bug without disrupting ongoing development."
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="32"
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

export default GitFlowWorkflowSlide;