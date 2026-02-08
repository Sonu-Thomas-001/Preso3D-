import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const AgendaSlide: React.FC<Props> = ({ isPresenting }) => {
  return (
    <SlideLayout 
      title="Agenda" 
      titleColor="green"
      id="01"
      isPresenting={isPresenting}
    >
      <div className="flex items-center h-full pt-4">
        {/* Left: List */}
        <div className="w-1/2 space-y-6 pl-4">
          {[
            "Definition of DevOps & its Role",
            "Agile and DevOps",
            "Version Control Systems",
            "Virtualization vs Containerization"
          ].map((item, index) => (
            <div key={index} className="flex items-baseline gap-3">
              <span className="text-base text-slate-500 font-medium w-4 text-right">
                {index + 1}.
              </span>
              <span className="text-lg font-medium text-slate-700">
                {item}
              </span>
            </div>
          ))}
        </div>
        
        {/* Right: Illustration */}
        <div className="w-1/2 flex justify-center items-center">
             <img 
                src="https://img.freepik.com/free-vector/happy-woman-chatting-online_74855-4835.jpg?w=826&t=st=1708803000~exp=1708803600~hmac=abc"
                alt="Agenda Illustration"
                className="max-w-xs w-full object-contain mix-blend-multiply"
             />
        </div>
      </div>
    </SlideLayout>
  );
};

export default AgendaSlide;