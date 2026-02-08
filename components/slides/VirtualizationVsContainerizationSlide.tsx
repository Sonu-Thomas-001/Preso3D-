import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const VirtualizationVsContainerizationSlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-[#46c256] text-xl font-bold mt-1">Virtualization vs Containerization</span>
    </div>
  );

  const points = [
    "Virtualization and containerization are foundational technologies in modern IT infrastructure and DevOps that enable efficient use of computing resources, application isolation, and scalable deployment.",
    "While both aim to optimize hardware utilization and support flexible application delivery, they differ significantly in architecture, performance, and operational characteristics."
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="40"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-2 gap-6">
        
        {/* Intro */}
        <div className="flex flex-col gap-2 pl-2">
            {points.map((text, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        {text}
                    </p>
                </div>
            ))}
        </div>

        {/* VMs Section */}
        <div>
            <h3 className="text-[#46c256] text-lg font-bold mb-2">Virtual Machines (VMs)</h3>
            <div className="flex flex-col gap-2 pl-2">
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Virtualization is based on the concept of running multiple <span className="font-bold">virtual machines</span> on a single physical server using a <span className="font-bold">hypervisor</span> (such as VMware ESXi, Microsoft Hyper-V, or KVM).
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        Each virtual machine includes a full guest operating system, its own kernel, libraries, and application runtime, making VMs highly isolated and secure.
                    </p>
                </div>
                <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify italic">
                        Example: A physical server hosts multiple VMs—one running a Linux-based web server, another running a Windows-based database server, and a third running a testing environment—each operating independently with dedicated virtual CPU, memory, and storage resources.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default VirtualizationVsContainerizationSlide;