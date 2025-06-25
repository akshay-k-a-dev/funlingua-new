import React from 'react';
import { AlertCircle } from 'lucide-react';

const ProblemStatement: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl lg:max-w-2xl mx-auto">
          <div className="bg-soft-lilac rounded-xl p-6 sm:p-8 lg:p-9 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-45 lg:h-45 bg-primary-purple opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <AlertCircle 
              className="text-primary-purple mb-4 sm:mb-6 lg:mb-7"
              size={30}
            />
            
            <div className="space-y-4 sm:space-y-6 lg:space-y-7 mb-6 sm:mb-8 lg:mb-9">
              <div className="flex items-start gap-3 lg:gap-3">
                <span className="flex-shrink-0 w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-primary-orange flex items-center justify-center text-white font-bold text-sm lg:text-sm">1</span>
                <p className="text-base sm:text-lg lg:text-lg text-charcoal-gray leading-relaxed">Thinking in Malayalam… pause… and searching for English words.</p>
              </div>
              
              <div className="flex items-start gap-3 lg:gap-3">
                <span className="flex-shrink-0 w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-primary-orange flex items-center justify-center text-white font-bold text-sm lg:text-sm">2</span>
                <p className="text-base sm:text-lg lg:text-lg text-charcoal-gray leading-relaxed">Having the thoughts, but not the right words.</p>
              </div>
              
              <div className="flex items-start gap-3 lg:gap-3">
                <span className="flex-shrink-0 w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-primary-orange flex items-center justify-center text-white font-bold text-sm lg:text-sm">3</span>
                <p className="text-base sm:text-lg lg:text-lg text-charcoal-gray leading-relaxed">Staying silent due to fear of being wrong.</p>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl lg:text-xl font-semibold text-primary-purple text-center leading-relaxed">
              FunLingua is built for people like you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;