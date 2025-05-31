
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-white font-semibold text-xl">ConnectBuy</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Digitalizamos tu mall para crear experiencias de compra únicas y maximizar cada visita.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📧 contacto@connectbuy.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>📍 Ciudad, País</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Soluciones</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Para Malls</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Para Tiendas</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Integración</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ConnectBuy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
