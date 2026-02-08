import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const OpsAndMonitoringPhaseSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="24"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-2 gap-6">
        
        {/* Operations Phase */}
        <div>
            <h3 className="text-[#46c256] text-lg font-bold mb-2">6. Operations Phase</h3>
            <div className="flex flex-col gap-2 pl-2">
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        DevOps ensures stable and efficient operations through proactive monitoring, logging, and incident management.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Automated scaling, self-healing mechanisms, and configuration management help maintain system performance and availability.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify italic">
                        Example: Monitoring tools detect increased traffic on an application and automatically scale cloud instances to handle demand without manual intervention.
                    </p>
                </div>
            </div>
        </div>

        {/* Monitoring and Feedback Phase */}
        <div>
            <h3 className="text-[#46c256] text-lg font-bold mb-2">7. Monitoring and Feedback Phase</h3>
            <div className="flex flex-col gap-2 pl-2">
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        The monitoring and feedback phase closes the DevOps loop by collecting performance metrics, logs, and user feedback to drive continuous improvement.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Insights gained are shared with development and planning teams to refine future releases.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify italic">
                        Example: Application monitoring reveals slow response times for a specific feature, and this feedback is used to optimize code and infrastructure in the next development sprint.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default OpsAndMonitoringPhaseSlide;