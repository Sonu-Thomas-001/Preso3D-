import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const LeanAndAlignmentSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="30"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-2 gap-8">
        
        {/* Lean Section */}
        <div>
            <h3 className="text-[#46c256] text-lg font-bold mb-2">Lean</h3>
            <div className="flex flex-col gap-2 pl-2">
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Lean principles aim to maximize customer value while minimizing waste by optimizing processes and eliminating non-value-adding activities.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        In software development, Lean focuses on faster feedback, reduced handoffs, continuous learning, and delivering only what is necessary.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify italic">
                        Example: By automating testing and deployments, a Lean-DevOps team eliminates manual approval delays, reducing release cycles from weeks to hours.
                    </p>
                </div>
            </div>
        </div>

        {/* Alignment Section */}
        <div>
            <h3 className="text-[#46c256] text-lg font-bold mb-2">Aligning DevOps with Agile Methodologies</h3>
            <div className="flex flex-col gap-2 pl-2">
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        DevOps aligns naturally with Agile by extending Agile practices beyond development into testing, deployment, and operations.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        While Agile ensures rapid and iterative development, DevOps ensures that these increments can be reliably built, tested, and deployed through automation and CI/CD pipelines.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify italic">
                        Example: An Agile team completes a feature in a sprint, and a DevOps pipeline automatically runs tests, builds the application, provisions infrastructure using Infrastructure as Code, and deploys the feature to production.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default LeanAndAlignmentSlide;