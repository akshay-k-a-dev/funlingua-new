import React from 'react';
import { Users, BookOpen, Globe, Quote } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-14 bg-off-white">
      <div className="container mx-auto px-4">
        {/* Philosophy Quote */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-14">
          <div className="max-w-4xl mx-auto">
            <Quote className="text-primary-orange mx-auto mb-4 sm:mb-6 lg:mb-7" size={38} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-7 text-primary-purple px-2">
              Philosophy of FunLingua
            </h2>
            <blockquote className="text-lg sm:text-xl lg:text-xl italic text-charcoal-gray mb-6 sm:mb-8 lg:mb-9 leading-relaxed px-2">
              "We believe language is not just learned. It is lived."
            </blockquote>
            <div className="text-base md:text-lg lg:text-lg text-charcoal-gray space-y-4 lg:space-y-5 max-w-3xl mx-auto px-2">
              <p className="leading-relaxed">
                FunLingua stands for transformational, inclusive language learning rooted in everyday life. Our approach is designed for those who've long been silenced by fear, poor access, or traditional rote-based systems.
              </p>
              <p className="leading-relaxed">
                Whether it's a child in a CCI, a homemaker returning to work, or a youth navigating interviews, our program empowers learners to speak up with confidence and purpose.
              </p>
              <p className="font-semibold text-primary-purple leading-relaxed">
                We don't believe in textbook fluency. We believe in real fluency — where English becomes a tool of connection, opportunity, and dignity.
              </p>
            </div>
          </div>
        </div>

        {/* Learning Levels */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-primary-purple mb-3 lg:mb-3 px-2">
              Our Learning Journey
            </h3>
            <p className="text-charcoal-gray lg:text-base px-2">
              English is not about correctness, but connection.
            </p>
          </div>
          
          <div className="grid gap-4 sm:gap-6 lg:gap-7">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-9 relative z-10">
                <div className="absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 bg-primary-orange rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl lg:text-xl">
                  1
                </div>
                
                <Users className="text-primary-orange mb-4 lg:mb-5" size={26} />
                <h4 className="text-lg sm:text-xl lg:text-xl font-semibold text-primary-purple mb-3 lg:mb-3">Foundation Level</h4>
                <p className="text-charcoal-gray lg:text-base mb-4 lg:mb-5 leading-relaxed">
                  30-hour action-based foundation where you learn through doing, not just studying.
                </p>
                <ul className="space-y-2 lg:space-y-2 text-sm sm:text-base lg:text-base">
                  <li className="flex items-start gap-2 lg:gap-3">
                    <span className="text-primary-orange font-bold">•</span>
                    <span>Overcome fear and hesitation</span>
                  </li>
                  <li className="flex items-start gap-2 lg:gap-3">
                    <span className="text-primary-orange font-bold">•</span>
                    <span>Build basic conversation skills</span>
                  </li>
                  <li className="flex items-start gap-2 lg:gap-3">
                    <span className="text-primary-orange font-bold">•</span>
                    <span>Develop confidence in speaking</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-9 relative z-10">
                <div className="absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 bg-primary-orange rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl lg:text-xl">
                  2
                </div>
                
                <BookOpen className="text-primary-orange mb-4 lg:mb-5" size={26} />
                <h4 className="text-lg sm:text-xl lg:text-xl font-semibold text-primary-purple mb-3 lg:mb-3">Intermediate Level</h4>
                <p className="text-charcoal-gray lg:text-base mb-4 lg:mb-5 leading-relaxed">
                  Grammar, public speaking, and advanced conversation techniques.
                </p>
                <ul className="space-y-2 lg:space-y-2 text-sm sm:text-base lg:text-base">
                  <li className="flex items-start gap-2 lg:gap-3">
                    <span className="text-primary-orange font-bold">•</span>
                    <span>Master grammar naturally</span>
                  </li>
                  <li className="flex items-start gap-2 lg:gap-3">
                    <span className="text-primary-orange font-bold">•</span>
                    <span>Develop presentation skills</span>
                  </li>
                  <li className="flex items-start gap-2 lg:gap-3">
                    <span className="text-primary-orange font-bold">•</span>
                    <span>Expand vocabulary significantly</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-9 relative z-10">
                <div className="absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 bg-primary-orange rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl lg:text-xl">
                  3
                </div>
                
                <Globe className="text-primary-orange mb-4 lg:mb-5" size={26} />
                <h4 className="text-lg sm:text-xl lg:text-xl font-semibold text-primary-purple mb-3 lg:mb-3">Advanced Level</h4>
                <p className="text-charcoal-gray lg:text-base mb-4 lg:mb-5 leading-relaxed">
                  IELTS/TOEFL preparation and global fluency techniques.
                </p>
                <ul className="space-y-2 lg:space-y-2 text-sm sm:text-base lg:text-base">
                  <li className="flex items-start gap-2 lg:gap-3">
                    <span className="text-primary-orange font-bold">•</span>
                    <span>Prepare for international tests</span>
                  </li>
                  <li className="flex items-start gap-2 lg:gap-3">
                    <span className="text-primary-orange font-bold">•</span>
                    <span>Master advanced English idioms</span>
                  </li>
                  <li className="flex items-start gap-2 lg:gap-3">
                    <span className="text-primary-orange font-bold">•</span>
                    <span>Develop cross-cultural communication</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;