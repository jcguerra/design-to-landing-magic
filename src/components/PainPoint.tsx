
import React from 'react';
import { AlertCircle, TrendingDown, Users } from 'lucide-react';

const PainPoint = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              El dolor de hoy
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Los retailers de los centros comerciales no pueden obtener insights sobre sus clientes potenciales.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <TrendingDown className="text-red-500" size={24} />
                <span>Hoy más del 70% del tráfico se va sin interactuar, sin comprar y sin dejar información útil.</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <AlertCircle className="text-orange-500" size={24} />
                <span>¿El resultado?</span>
              </div>
            </div>
            <div className="mt-8 flex space-x-4">
              <div className="bg-red-100 px-4 py-2 rounded-lg">
                <span className="text-red-600 font-semibold">Visitantes desconectados</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <Users size={80} className="text-gray-400" />
              </div>
              <p className="text-center mt-4 text-gray-600 font-medium">
                Clientes potenciales perdidos diariamente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoint;
