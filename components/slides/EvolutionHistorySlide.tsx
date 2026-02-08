import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

interface Props {
  isPresenting: boolean;
}

const EvolutionHistorySlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-slate-500 text-xl font-medium mt-1">Evolution history of DevOps software development</span>
    </div>
  );

  const timelineEvents = [
    { year: "2009-2010", title: "Siloed development", desc: "Waterfall model, Dev & Ops isolated, manual deployments." },
    { year: "2010-2012", title: "Agile Development", desc: "Iterative development, customer feedback, faster dev cycles." },
    { year: "2012-2015", title: "Continuous integration & deployment", desc: "Automated builds, CI tools, early containerization." },
    { year: "2015-2018", title: "Continuous testing & monitoring", desc: "Automated testing suites, real-time monitoring, feedback loops." },
    { year: "2018-2020", title: "Site reliability engineering (SRE)", desc: "Focus on reliability, SLAs/SLOs, scalability, automation." },
    { year: "2020-Present", title: "DevSecOps", desc: "Security as code, shift-left security, AI/ML in DevOps." },
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="08"
      isPresenting={isPresenting}
    >
      <div className="w-full h-full flex flex-col justify-center pt-8">
        <div className="relative w-full">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-teal-100 -translate-y-1/2 rounded-full" />
            
            <div className="flex justify-between relative z-10 px-2">
                {timelineEvents.map((event, index) => (
                    <div key={index} className="flex flex-col items-center w-1/6 relative group">
                        {/* Dot */}
                        <div className="w-4 h-4 rounded-full bg-[#46c256] border-4 border-white shadow-sm mb-4 relative z-20 group-hover:scale-125 transition-transform"></div>
                        
                        {/* Year Bubble */}
                        <div className="absolute top-1/2 -translate-y-1/2 mt-8 bg-white border border-slate-200 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600 shadow-sm z-20">
                            {event.year}
                        </div>

                        {/* Content Card */}
                        {/* Alternating position: Top vs Bottom */}
                        <div className={`absolute ${index % 2 === 0 ? 'bottom-full mb-8' : 'top-full mt-16'} w-32 sm:w-40 bg-[#f0f9f1] p-3 rounded-lg border border-[#e0f2e2] text-center shadow-sm transition-all hover:shadow-md hover:bg-[#e6f7e8]`}>
                            <h4 className="text-[10px] font-bold text-[#00529b] mb-1 leading-tight">{event.title}</h4>
                            <p className="text-[8px] text-slate-600 leading-tight">{event.desc}</p>
                            
                            {/* Connector Line */}
                            <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-[#46c256]/30 h-8 ${index % 2 === 0 ? 'top-full' : 'bottom-full'}`}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default EvolutionHistorySlide;