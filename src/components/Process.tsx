
import React from 'react';
import { CheckCircle, Users, Target, Zap, BarChart3, Award } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: 1,
      icon: <Users size={24} />,
      title: "Cliente entra al mall",
      description: "El cliente llega al centro comercial"
    },
    {
      number: 2,
      icon: <Target size={24} />,
      title: "Entra procesos fundamentales",
      description: "Utilizamos tecnología avanzada para detectar intenciones"
    },
    {
      number: 3,
      icon: <Zap size={24} />,
      title: "Cuenta, mira una tienda",
      description: "El sistema identifica el interés del cliente"
    },
    {
      number: 4,
      icon: <BarChart3 size={24} />,
      title: "Conexión",
      description: "Se establece la conexión entre cliente y tienda"
    },
    {
      number: 5,
      icon: <Award size={24} />,
      title: "ROI",
      description: "Conversión exitosa y métricas de retorno"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            ¿Cómo creamos una nueva experiencia retail?
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-pink-200"></div>
                )}
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-pink-500 mb-3 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Esto es ConnectBuy.
            </h3>
            <div className="w-full max-w-4xl mx-auto h-64 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl flex items-center justify-center">
              <span className="text-gray-600 text-lg">Platform Preview</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
