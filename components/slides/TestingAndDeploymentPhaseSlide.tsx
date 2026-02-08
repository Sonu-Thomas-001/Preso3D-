import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const TestingAndDeploymentPhaseSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="23"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-2 gap-6">
        
        {/* Testing Phase */}
        <div>
            <h3 className="text-[#46c256] text-lg font-bold mb-2">4. Testing Phase</h3>
            <div className="flex flex-col gap-2 pl-2">
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        DevOps integrates automated testing into the pipeline to validate application functionality, performance, and security early and continuously.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Automated unit, integration, regression, and security tests replace manual testing wherever possible, enabling faster feedback and early defect detection.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify italic">
                        Example: After a successful build, the pipeline automatically runs integration and security scans, failing the pipeline if vulnerabilities or test failures are detected.
                    </p>
                </div>
            </div>
        </div>

        {/* Deployment Phase */}
        <div>
            <h3 className="text-[#46c256] text-lg font-bold mb-2">5. Deployment Phase</h3>
            <div className="flex flex-col gap-2 pl-2">
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        In the deployment phase, DevOps enables continuous delivery or continuous deployment through automated and reliable release pipelines.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Infrastructure as Code (IaC) tools are used to provision and configure environments consistently, while deployment strategies such as blue-green or canary deployments reduce risk.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify italic">
                        Example: A new application version is deployed using a blue-green deployment, where traffic is gradually shifted to the new version after validation, minimizing downtime and rollback risk.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default TestingAndDeploymentPhaseSlide;