
import React from 'react';
import Hero from '../components/Hero';
import PainPoint from '../components/PainPoint';
import Solution from '../components/Solution';
import Process from '../components/Process';
import Benefits from '../components/Benefits';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PainPoint />
      <Solution />
      <Process />
      <Benefits />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
