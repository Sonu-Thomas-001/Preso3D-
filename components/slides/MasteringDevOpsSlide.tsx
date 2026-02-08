import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const MasteringDevOpsSlide: React.FC<Props> = ({ isPresenting }) => {
  return (
    <SlideLayout 
      title="Mastering DevOps" 
      titleColor="blue"
      id="intro"
      isPresenting={isPresenting}
      noContentPadding={true}
    >
      <div className="w-full h-full relative">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
          alt="Students in lab" 
          className="w-full h-full object-cover object-top"
        />
        {/* Subtle gradient to ensure footer separation if image is light at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>
    </SlideLayout>
  );
};

export default MasteringDevOpsSlide;