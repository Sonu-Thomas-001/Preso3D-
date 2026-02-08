import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const MeasurementSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-[#46c256] text-xl font-bold mt-1">Measurement</span>
    </div>
  );

  const points = [
    "Measurement in DevOps involves collecting and analyzing metrics to evaluate the performance, reliability, and efficiency of software delivery and operations.",
    "Commonly tracked metrics include deployment frequency, lead time for changes, change failure rate, mean time to detect (MTTD), and mean time to recover (MTTR).",
    "By measuring both technical and business outcomes, organizations gain visibility into system behavior and process effectiveness.",
    "Data-driven insights help teams identify bottlenecks, optimize workflows, improve system stability, and align technical performance with business goals."
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="17"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-4 relative">
        <div className="flex flex-col gap-6 pr-8 z-10">
            {points.map((text, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        {text}
                    </p>
                </div>
            ))}
        </div>

        {/* Bottom Right Illustration - Chart/Analysis */}
        <div className="absolute bottom-0 right-8 mb-2 flex items-end">
             <img 
                src="https://img.freepik.com/free-vector/business-growth-analysis_23-2148866815.jpg?w=740&t=st=1708807000~exp=1708807600~hmac=chart"
                alt="Measurement Analytics"
                className="w-40 h-auto object-contain mix-blend-multiply opacity-90"
             />
        </div>
      </div>
    </SlideLayout>
  );
};

export default MeasurementSlide;