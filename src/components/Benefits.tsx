
import React from 'react';
import { TrendingUp, Users, Target } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <TrendingUp size={40} />,
      title: "Diseñado para malls, tiendas y visitantes que quieren ganar hoy",
      points: [
        "Incremento inmediato en conversiones",
        "Datos valiosos de comportamiento",
        "Mejora en la experiencia del cliente",
        "ROI medible y transparente"
      ]
    },
    {
      icon: <Users size={40} />,
      title: "Para tiendas y malls",
      points: [
        "Integración sin complicaciones",
        "Dashboard intuitivo de analytics",
        "Soporte técnico especializado",
        "Escalabilidad para cualquier tamaño"
      ]
    },
    {
      icon: <Target size={40} />,
      title: "Para visitantes",
      points: [
        "Experiencia de compra personalizada",
        "Ofertas relevantes y oportunas",
        "Navegación simplificada",
        "Conexión directa con tiendas"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-pink-500 mb-6 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-6 leading-tight">
                {benefit.title}
              </h3>
              <ul className="space-y-3 text-left">
                {benefit.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Construyamos juntos el retail del futuro
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Únete a la comunidad de malls que ya están maximizando cada visita.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                El futuro del retail ya empezó.
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                No te quedes atrás y únete a nosotros.
              </p>
              <div className="text-center">
                <h4 className="text-xl font-bold text-pink-600 mb-4">
                  Permítenos contactarte
                </h4>
              </div>
            </div>
            <div className="w-full h-64 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center">
              <span className="text-gray-500">Network Visualization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
