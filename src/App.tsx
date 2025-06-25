import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Philosophy from './components/Philosophy';
import Approach from './components/Approach';
import LearningExperiences from './components/LearningExperiences';
import SocialImpact from './components/SocialImpact';
import About from './components/About';
import Team from './components/Team';
import SuccessStories from './components/SuccessStories';
import Vision from './components/Vision';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = 'FunLingua - Just Speak, Have Fun!';
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <Hero />
      <ProblemStatement />
      <Philosophy />
      <Approach />
      <LearningExperiences />
      <SocialImpact />
      <About />
      <Team />
      <SuccessStories />
      <Vision />
      <ContactForm />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;