import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const AutomationSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  const points = [
    "Automation is central to DevOps and focuses on reducing manual, repetitive, and error-prone tasks across the software delivery pipeline.",
    "It includes automating code builds, testing, deployments, infrastructure provisioning, configuration management, and monitoring.",
    "By using tools such as CI/CD pipelines, infrastructure as code, and automated testing frameworks, organizations achieve consistency, repeatability, and faster execution.",
    "Automation not only accelerates delivery but also improves reliability by minimizing human error and ensuring that environments are created and managed in a predictable and auditable manner."
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="13"
      isPresenting={isPresenting}
    >
       <div className="flex flex-col h-full pt-2">
         <h3 className="text-[#46c256] text-lg font-bold mb-4">Automation:</h3>

         <div className="flex gap-8 h-full">
            {/* Left Content */}
            <div className="w-2/3 flex flex-col gap-5">
                {points.map((text, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                        <p className="text-sm text-slate-700 leading-relaxed text-justify">
                            {text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Right Illustration */}
            <div className="w-1/3 flex items-center justify-center">
                 <img 
                    src="https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-1428.jpg?w=740&t=st=1708805000~exp=1708805600~hmac=xyz"
                    alt="Automation Brain Circuit"
                    className="w-full max-w-[250px] object-contain mix-blend-multiply opacity-90"
                 />
            </div>
         </div>
       </div>
    </SlideLayout>
  );
};

export default AutomationSlide;