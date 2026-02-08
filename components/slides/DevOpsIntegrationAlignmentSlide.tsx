import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const DevOpsIntegrationAlignmentSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="26"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-2 gap-8">
        
        {/* Top Section */}
        <div className="flex flex-col gap-2 pl-2">
            <div className="flex gap-3 items-start">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                    By integrating DevOps practices across all SDLC phases, organizations achieve faster delivery, improved collaboration, higher software quality, and better alignment between business objectives and technical execution.
                </p>
            </div>
            <div className="flex gap-3 items-start">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                    DevOps transforms the SDLC from a linear process into a continuous, feedback-driven lifecycle that supports scalable, resilient, and customer-focused software development.
                </p>
            </div>
        </div>

        {/* Bottom Section: Agile and DevOps */}
        <div>
            <h3 className="text-[#46c256] text-lg font-bold mb-4">Agile and DevOps: Concepts, Principles, and Alignment</h3>
            <div className="flex flex-col gap-4 pl-2">
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Agile and DevOps are complementary approaches that together enable organizations to deliver software rapidly, reliably, and continuously.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Agile primarily focuses on how software is developed, while DevOps focuses on how software is built, tested, deployed, and operated.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        When aligned effectively, they create an end-to-end delivery model that supports continuous improvement, customer satisfaction, and operational stability.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default DevOpsIntegrationAlignmentSlide;