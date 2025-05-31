
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-pink-500 to-purple-600 min-h-screen flex items-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Background image effect */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/lovable-uploads/7bd2cb86-547d-4e10-9bb7-20cad3b174bb.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-pink-500 font-bold text-sm">C</span>
            </div>
            <span className="text-white font-semibold">Connect</span>
            <span className="text-pink-300">Buy</span>
          </div>
          <Button 
            onClick={scrollToContact}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Contáctanos
          </Button>
        </div>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Digitalizamos tu mall.
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            Conecta con tus clientes, digitaliza tu centro comercial y crea una experiencia única de compra.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Comenzar Ahora →
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
