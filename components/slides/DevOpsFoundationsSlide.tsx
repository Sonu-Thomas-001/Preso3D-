import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const DevOpsFoundationsSlide: React.FC<Props> = ({ isPresenting }) => {
  
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-[#46c256] text-xl font-bold mt-1">Definition of DevOps</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="04"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-4">
        
        {/* Text Content */}
        <div className="space-y-4 pr-8 relative z-20">
            {[
                "DevOps is a cultural, organizational, and technical approach that unifies software development (Dev) and IT operations (Ops) to improve collaboration, automate processes, and enable continuous delivery of high-quality software.",
                "Rather than being only a toolset, DevOps emphasizes shared responsibility, rapid feedback, and end-to-end ownership of applications. Core practices include continuous integration and continuous delivery/deployment (CI/CD), infrastructure as code, configuration management, automated testing, continuous monitoring, and incident response.",
                "The primary goal of DevOps is to shorten development cycles, increase deployment frequency, and ensure system reliability and scalability."
            ].map((text, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                        {text}
                    </p>
                </div>
            ))}
        </div>

        {/* Bottom Right Illustration */}
        <div className="flex-grow flex items-end justify-end -mb-2 -mr-6">
             <img 
                src="https://img.freepik.com/free-vector/programmer-working-flat-style_52683-15041.jpg?w=740&t=st=1708804000~exp=1708804600~hmac=def"
                alt="DevOps Engineer"
                className="w-56 h-auto object-contain mix-blend-multiply"
             />
        </div>
      </div>
    </SlideLayout>
  );
};

export default DevOpsFoundationsSlide;