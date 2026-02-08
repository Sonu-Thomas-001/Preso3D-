import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">
            Slides should be <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Experiences.</span>
        </h1>

        <div className="prose prose-invert prose-lg text-slate-400">
            <p className="lead text-xl text-slate-200">
                For 30 years, presentations have been flat. Rectangles following rectangles. Bullet points following bullet points.
            </p>
            <p>
                We built Preso3D because we believe information deserves dimension. When you add depth to a slide, you create a hierarchy of importance that flat design simply cannot convey.
            </p>
            <p>
                Our mission is to give developers, designers, and founders the tools to create presentations that feel like modern web experiences—interactive, fluid, and memorable.
            </p>
            
            <hr className="border-white/10 my-12" />

            <h3 className="text-white">Why Web Technology?</h3>
            <p>
                Proprietary formats like .pptx lock your content away. By building presentations with React and HTML, your deck becomes a first-class citizen of the web. It is indexable, accessible, and infinitely extensible.
            </p>
        </div>
        
        <div className="mt-16 p-8 bg-white/5 rounded-2xl border border-white/10 text-center">
            <p className="text-white font-serif italic text-lg mb-4">"The medium is the message."</p>
            <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">— Marshall McLuhan</p>
        </div>
    </div>
  );
};

export default AboutPage;