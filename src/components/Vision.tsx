import React from 'react';

const Vision: React.FC = () => {
  return (
    <section className="py-16 md:py-18 lg:py-17 bg-primary-purple text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl lg:text-3xl font-bold mb-6 lg:mb-5">
            Our Vision
          </h2>
          <p className="text-lg md:text-3xl lg:text-2xl font-light italic leading-relaxed mb-8 lg:mb-7">
            "To turn 'I can't speak' into 'Let me speak first!'"
          </p>
          
          <div className="h-px w-24 lg:w-22 bg-primary-orange mx-auto my-8 lg:my-7 opacity-70"></div>
          
          <p className="text-base md:text-lg lg:text-base opacity-90 max-w-3xl mx-auto">
            To empower a confident, English-speaking India where language is not a barrier but a bridge — to identity, opportunity, and global citizenship.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;