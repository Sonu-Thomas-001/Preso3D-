import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const EvolutionOfDevOpsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-[#46c256] text-xl font-bold mt-1">Evolution of DevOps</span>
    </div>
  );

  const points = [
    "DevOps evolved as a response to the inefficiencies of traditional software development models, particularly the Waterfall approach, where development and operations teams worked in isolated silos, leading to slow releases and frequent production issues.",
    "The introduction of Agile methodologies improved development speed through iterative delivery but did not fully address operational challenges such as deployment, scalability, and reliability.",
    "Around 2007–2009, DevOps emerged by combining Agile principles with Lean practices, automation, and collaboration between Dev and Ops teams. The growth of cloud computing, virtualization, containerization, and configuration management tools further accelerated DevOps adoption.",
    "Over time, DevOps expanded into related practices such as DevSecOps, which integrates security early in the lifecycle, and GitOps, which manages infrastructure and operations through version-controlled code."
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="07"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col gap-6 pt-6 pr-4">
        {points.map((text, idx) => (
            <div key={idx} className="flex gap-3 items-start">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                    {text}
                </p>
            </div>
        ))}
      </div>
    </SlideLayout>
  );
};

export default EvolutionOfDevOpsSlide;