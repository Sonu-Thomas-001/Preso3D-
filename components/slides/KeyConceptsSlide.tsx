import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const KeyConceptsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-[#46c256] text-xl font-bold mt-1">Key Concepts and Principles of DevOps</span>
    </div>
  );

  const points = [
    "Collaboration is a foundational DevOps principle that emphasizes breaking down silos between development, operations, quality assurance, and security teams.",
    "Instead of working in isolation, teams share responsibility for the entire application lifecycle—from design and development to deployment and ongoing operations.",
    "This collaborative culture improves communication, transparency, and accountability, enabling faster decision-making and reduced handoff delays.",
    "Practices such as cross-functional teams, shared dashboards, common goals (for example, service reliability and deployment success), and blameless post-incident reviews help build trust and ensure that all stakeholders work toward delivering stable and high-quality software."
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="11"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-4 pr-6">
        <h3 className="text-[#46c256] text-lg font-bold mb-4">Collaboration:</h3>
        
        <div className="flex flex-col gap-6">
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

export default KeyConceptsSlide;