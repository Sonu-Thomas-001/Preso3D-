import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const ContinuousDeliverySlide: React.FC<Props> = ({ isPresenting }) => {
  const HeaderTitle = (
    <div className="flex flex-col">
        <span className="text-[#46c256] text-3xl font-bold">[DevOps Foundations]</span>
        <span className="text-[#46c256] text-xl font-bold mt-1">Continuous Delivery</span>
    </div>
  );

  const points = [
    "Continuous delivery is the practice of keeping software in a deployable state at all times by automatically building, testing, and validating every code change.",
    "In this approach, changes are integrated frequently, tested thoroughly, and prepared for release through automated pipelines, allowing deployments to be performed quickly and safely whenever needed.",
    "Continuous delivery reduces release risk by promoting smaller, incremental changes rather than large, infrequent releases. It enables faster time-to-market, improved quality, and greater responsiveness to customer feedback and business requirements."
  ];

  return (
    <SlideLayout 
      title={HeaderTitle}
      titleColor="green"
      id="15"
      isPresenting={isPresenting}
    >
      <div className="flex flex-col h-full pt-4 relative">
        <div className="flex flex-col gap-6 pr-8 z-10 relative">
            {points.map((text, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        {text}
                    </p>
                </div>
            ))}
        </div>

        {/* Bottom Right Illustration - Scooter Delivery */}
        <div className="absolute bottom-0 right-0 z-0">
             <img 
                src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1708806000~exp=1708806600~hmac=scooter"
                alt="Continuous Delivery Scooter"
                className="w-48 h-auto object-contain mix-blend-multiply"
             />
        </div>
      </div>
    </SlideLayout>
  );
};

export default ContinuousDeliverySlide;