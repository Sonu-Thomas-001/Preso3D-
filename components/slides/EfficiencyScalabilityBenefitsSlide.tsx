import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const EfficiencyScalabilityBenefitsSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
    </div>
  );

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="46"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-2 gap-6">
        
        {/* Efficiency Benefits */}
        <div>
            <h3 className="text-[#46c256] text-lg font-bold mb-2">Efficiency Benefits</h3>
            <div className="flex flex-col gap-2 pl-2">
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Containerization offers superior efficiency by reducing overhead and maximizing resource utilization.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Because containers share the host OS kernel, they require less CPU, memory, and storage compared to VMs. This allows organizations to run more applications on the same hardware, reducing infrastructure costs.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify italic">
                        Example: On a cloud server that can host 10 VMs due to resource constraints, the same server might host 40–50 containers, each running a microservice, significantly improving cost efficiency.
                    </p>
                </div>
            </div>
        </div>

        {/* Scalability Benefits */}
        <div>
            <h3 className="text-[#46c256] text-lg font-bold mb-2">Scalability Benefits</h3>
            <div className="flex flex-col gap-2 pl-2">
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Containers can be automatically scaled up or down based on demand, deployed across clusters, and managed declaratively. Virtual machines can also scale, but the process is slower and less granular due to OS-level overhead.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify italic">
                        Example: During a flash sale, an e-commerce application automatically scales from 10 to 100 container instances within minutes to handle increased traffic, whereas scaling the same workload with VMs would require provisioning and booting new virtual machines, taking significantly longer.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default EfficiencyScalabilityBenefitsSlide;