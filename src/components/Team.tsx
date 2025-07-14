import React from 'react';
import { User, ExternalLink, Linkedin, BookOpen } from 'lucide-react';
import bijuSimonImage from '../assets/BijuSimon.jpg';
import dittoImage from '../assets/ImmanuelDitto.jpg'; // ✅ Make sure the file exists

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 md:py-18 lg:py-17 bg-soft-lilac">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-14 lg:mb-14">
          <h2 className="text-2xl md:text-4xl lg:text-3xl font-bold mb-4 text-primary-purple">
            Our Team & Mentors
          </h2>
          <p className="text-base md:text-lg lg:text-base text-charcoal-gray max-w-2xl mx-auto">
            Meet the passionate individuals driving FunLingua's mission to transform language learning.
          </p>
        </div>

        {/* Core Team */}
        <div className="max-w-4xl mx-auto mb-16 lg:mb-14">
          <h3 className="text-xl md:text-2xl lg:text-xl font-bold text-center mb-8 lg:mb-7 text-primary-purple">
            Our Team
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-7">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-7 text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-22 lg:h-22 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary-orange shadow-lg">
                <img 
                  src={bijuSimonImage} 
                  alt="Biju Simon - Founder & CEO" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg md:text-xl lg:text-lg font-bold text-primary-purple mb-2">
                Biju Simon
              </h4>
              <p className="text-primary-orange font-semibold mb-4 lg:mb-3">Founder & CEO</p>
              <p className="text-charcoal-gray text-sm md:text-base lg:text-sm">
                A passionate social innovator and educator with over a decade of experience in grassroots engagement, community development, and language-based empowerment. His vision drives the academy's learner-centered, fun-first approach.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-7 text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-22 lg:h-22 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary-orange shadow-lg">
                <img 
                  src={dittoImage} 
                  alt="Immanuel Ditto Lopez - CFO" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg md:text-xl lg:text-lg font-bold text-primary-purple mb-2">
                Immanuel Ditto Lopez
              </h4>
              <p className="text-primary-orange font-semibold mb-4 lg:mb-3">CFO</p>
              <p className="text-charcoal-gray text-sm md:text-base lg:text-sm">
                Oversees financial strategy and operational planning. With expertise in finance, budgeting, and scaling social ventures, he ensures financial sustainability while supporting growth into new markets.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8 lg:mt-7">
            <p className="text-base md:text-lg lg:text-base text-charcoal-gray">
              <strong className="text-primary-purple">+ A passionate core team</strong> of educators, trainers, volunteers, and curriculum developers who make learning joyful, inclusive, and effective.
            </p>
          </div>
        </div>

        {/* Mentors */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl lg:text-xl font-bold text-center mb-8 lg:mb-7 text-primary-purple">
            Our Mentors
          </h3>
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-7">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-7">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-18 lg:h-18 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={22} />
              </div>
              <h4 className="text-lg md:text-xl lg:text-lg font-bold text-primary-purple mb-2 text-center">
                Joseph Fernandez
              </h4>
              <p className="text-charcoal-gray text-sm md:text-base lg:text-sm mb-4 lg:mb-3">
                An international consultant, author, and strategic guide to FunLingua. Joseph has served in leadership roles in publishing, language training, and academic development across the UK, Middle East, and India.
              </p>
              <blockquote className="text-primary-purple italic text-sm lg:text-xs mb-4 lg:mb-3">
                "Joseph doesn't just give advice—he opens possibilities."
              </blockquote>
              <div className="flex gap-2 justify-center">
                <a href="#" className="text-primary-orange hover:text-primary-purple transition-colors">
                  <ExternalLink size={14} />
                </a>
                <a href="#" className="text-primary-orange hover:text-primary-purple transition-colors">
                  <Linkedin size={14} />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-7">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-18 lg:h-18 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-white" size={22} />
              </div>
              <h4 className="text-lg md:text-xl lg:text-lg font-bold text-primary-purple mb-2 text-center">
                Sabriye Tenberken
              </h4>
              <p className="text-charcoal-gray text-sm md:text-base lg:text-sm mb-4 lg:mb-3">
                Co-founder of kanthari International Institute for Social Change. Globally celebrated social innovator and blind education leader. Creator of Tibetan Braille script and leader of inclusive empowerment through education.
              </p>
              <blockquote className="text-primary-purple italic text-sm lg:text-xs mb-4 lg:mb-3">
                "Language is power. Sabriye reminds us that even without sight, one can lead the world—if they are taught to believe in their voice."
              </blockquote>
              <div className="flex gap-2 justify-center">
                <a href="#" className="text-primary-orange hover:text-primary-purple transition-colors">
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-7">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-18 lg:h-18 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-white" size={22} />
              </div>
              <h4 className="text-lg md:text-xl lg:text-lg font-bold text-primary-purple mb-2 text-center">
                Satya Kedar Illa
              </h4>
              <p className="text-charcoal-gray text-sm md:text-base lg:text-sm mb-4 lg:mb-3">
                CEO, Association of Startup Incubators & Accelerators (ASIA). Founder-Director, Kaanthi Impact Foundation. Mentor to youth startups, innovation leader, and recipient of the Commonwealth Youth Award.
              </p>
              <blockquote className="text-primary-purple italic text-sm lg:text-xs mb-4 lg:mb-3">
                "Satya helps us innovate with purpose—he shows us that every learner's voice can be the starting point of a revolution."
              </blockquote>
              <div className="flex gap-2 justify-center">
                <a href="#" className="text-primary-orange hover:text-primary-purple transition-colors">
                  <Linkedin size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
