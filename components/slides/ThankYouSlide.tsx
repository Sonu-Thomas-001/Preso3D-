import React from 'react';
import SlideLayout from '../SlideLayout';

interface Props {
  isPresenting: boolean;
}

const ThankYouSlide: React.FC<Props> = ({ isPresenting }) => {
  return (
    <SlideLayout 
      title={<span></span>} 
      titleColor="green"
      id="end"
      isPresenting={isPresenting}
    >
      <div className="flex h-full items-center justify-center">
        <h1 className="text-3xl font-bold text-slate-800">Thank You!</h1>
      </div>
    </SlideLayout>
  );
};

export default ThankYouSlide;