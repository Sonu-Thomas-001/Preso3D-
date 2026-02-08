import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const WhyNeedDevOpsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-[#46c256] text-xl font-bold mt-1">Why Organizations Need DevOps</span>
    </div>
  );

  const points = [
    "DevOps enables faster time-to-market by automating build, test, and deployment pipelines, reducing manual effort and deployment errors.",
    "It improves software quality and reliability through continuous testing, monitoring, and feedback loops, allowing teams to detect and resolve issues early.",
    "DevOps also enhances collaboration and accountability by breaking down silos and promoting shared ownership across teams.",
    "Additionally, DevOps supports scalability, cost optimization, and resilience through cloud-native architectures and automation, helping organizations deliver customer-centric, secure, and highly available applications efficiently."
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="09"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-4">
        <p className="text-sm text-slate-700 font-medium mb-6">
            Organizations need DevOps to remain competitive in fast-changing digital markets where rapid innovation and high system availability are critical.
        </p>

        <div className="flex flex-col gap-5">
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

export default WhyNeedDevOpsSlide;