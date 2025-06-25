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

    // Initialize intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in sections
    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-off-white overflow-x-hidden">
      <Navbar />
      <main className="space-y-section">
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
      </main>
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