
import React from 'react';
import { Zap, Target, BarChart3 } from 'lucide-react';

const Solution = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Lo resolvemos en 1 TAP
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ConnectBuy convierte visitantes en conexiones de compra en su sección.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Conexión Instantánea</h3>
            <p className="text-gray-600">
              Los visitantes se conectan al instante con las tiendas de su interés
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Targeting Preciso</h3>
            <p className="text-gray-600">
              Segmentación avanzada para llegar al cliente correcto
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Analytics Reales</h3>
            <p className="text-gray-600">
              Datos en tiempo real sobre el comportamiento de tus clientes
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Experimenta con nuestro web</h3>
          <p className="text-xl opacity-90 mb-8">
            Eso es lo que publicitas y exclusive performance web. Datos KPI grandes para tu directorio.
          </p>
          <div className="w-full max-w-md mx-auto h-64 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <span className="text-white/70 text-lg">Demo Interface</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
