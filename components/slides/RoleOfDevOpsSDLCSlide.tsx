import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const RoleOfDevOpsSDLCSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-[#46c256] text-xl font-bold mt-1 leading-tight">Role of DevOps in the Software Development Life Cycle (SDLC)</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="19"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-2 gap-4">
        
        <p className="text-sm text-slate-700 leading-relaxed text-justify">
            DevOps plays a critical role in the SDLC by integrating development, operations, quality assurance, and security. Instead of treating SDLC phases as isolated steps, DevOps connects them into a continuous, iterative loop that improves speed, quality, and reliability.
        </p>

        <h3 className="text-[#46c256] text-lg font-bold mt-2">1. Planning Phase</h3>

        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-start">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                    In the planning phase, DevOps promotes collaboration between business stakeholders, developers, operations, and security teams to define clear requirements, priorities, and release goals.
                </p>
            </div>
            <div className="flex gap-3 items-start">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                    Tools such as Jira or Azure Boards are used to manage backlogs, user stories, and sprint planning, while infrastructure and deployment considerations are addressed early to avoid downstream issues.
                </p>
            </div>
            <div className="flex gap-3 items-start">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                    Example: While planning a new e-commerce feature, the DevOps team identifies scalability and availability requirements upfront and plans cloud resources and CI/CD pipelines alongside application features.
                </p>
            </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default RoleOfDevOpsSDLCSlide;