import React from 'react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from '../UI/SocialIcons';
import DeliveryBadges from '../UI/DeliveryBadges';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-black border-t-4 border-orange-500">
      {/* Ticker */}
      <div className="bg-orange-500 py-2 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="font-['Press_Start_2P'] text-black text-xs mx-8">
              🎮 BURGUERAMA &nbsp;|&nbsp; 🍔 GAME OVER PARA TU HAMBRE &nbsp;|&nbsp; 🪙 INSERT COIN TO EAT &nbsp;|&nbsp; ⚡ POWER UP YOUR DAY &nbsp;|&nbsp; 🏆 HIGH SCORE BURGER &nbsp;|&nbsp; 🛵 PIDE EN DIDI FOOD · UBER EATS · RAPPI &nbsp;|&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <a href="#inicio" className="flex items-center gap-3 mb-4 group">
              <img src="/logo_mascota.jpg" alt="Burguerama mascota"
                className="w-10 h-10 object-cover border-2 border-yellow-400 group-hover:border-orange-500 transition-all shrink-0" />
              <img src="/logo.jpg" alt="Burguerama"
                className="h-8 w-auto object-contain" style={{ maxWidth: '140px' }} />
            </a>
            <p className="text-gray-400 font-['VT323'] text-xl leading-relaxed mb-5">
              El foodtruck de hamburguesas con la máxima puntuación en sabor. Desde los píxeles hasta tu boca.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mb-5">
              <a href="https://www.instagram.com/burgueramamxl/"
                target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border-2 border-gray-700 hover:border-pink-500 hover:bg-pink-500/10 flex items-center justify-center transition-all text-gray-400 hover:text-pink-400"
                title="Instagram @burgueramamxl">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61574466674944"
                target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border-2 border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 flex items-center justify-center transition-all text-gray-400 hover:text-blue-400"
                title="Facebook Burguerama">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="https://wa.me/526861840640"
                target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border-2 border-gray-700 hover:border-green-500 hover:bg-green-500/10 flex items-center justify-center transition-all text-gray-400 hover:text-green-400"
                title="WhatsApp 686 184 0640">
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Delivery */}
            <DeliveryBadges size="small" label={true} />
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-['Press_Start_2P'] text-sm text-orange-500 mb-4">SELECT STAGE</h4>
            <ul className="space-y-3">
              {[
                { href: '#inicio',    label: 'INICIO' },
                { href: '#menu',      label: 'MENÚ COMPLETO' },
                { href: '#power-ups', label: 'POWER-UPS' },
                { href: '#ubicacion', label: 'UBICACIÓN' },
                { href: '#contacto',  label: 'CONTACTO' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a href={href}
                    className="text-gray-400 hover:text-yellow-400 font-['VT323'] text-xl transition-colors flex items-center gap-2">
                    <span className="text-orange-500 text-xs">▶</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Press_Start_2P'] text-sm text-orange-500 mb-4">PLAYER INFO</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">📍</span>
                <div>
                  <p className="font-['Press_Start_2P'] text-xs text-yellow-400 mb-1">SPAWN POINT</p>
                  <p className="text-gray-400 font-['VT323'] text-xl leading-relaxed">
                    Av. Gral. Plutarco Elías Calles 465<br />
                    Sta. Teresa, Mexicali B.C. 21270
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">🕐</span>
                <div>
                  <p className="font-['Press_Start_2P'] text-xs text-yellow-400 mb-1">HORARIO</p>
                  <p className="text-gray-400 font-['VT323'] text-xl leading-relaxed">
                    Martes – Domingo<br />
                    <span className="text-orange-400">2:00 PM – 10:00 PM</span>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">📞</span>
                <div>
                  <p className="font-['Press_Start_2P'] text-xs text-yellow-400 mb-1">TELÉFONO</p>
                  <a href="tel:+526861840640"
                    className="text-gray-400 hover:text-orange-400 font-['VT323'] text-xl transition-colors">
                    686 184 0640
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">✉️</span>
                <div>
                  <p className="font-['Press_Start_2P'] text-xs text-yellow-400 mb-1">REDES</p>
                  <a href="https://www.instagram.com/burgueramamxl/" target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-400 font-['VT323'] text-xl transition-colors block">
                    @burgueramamxl
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t-2 border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['VT323'] text-gray-600 text-xl">
            © {currentYear} BURGUERAMA. ALL RIGHTS RESERVED.
          </p>
          <p className="font-['Press_Start_2P'] text-xs text-gray-700 animate-pulse">
            PRESS START TO EAT
          </p>
          <div className="flex gap-1">
            {['❤️', '❤️', '❤️'].map((h, i) => <span key={i} className="text-sm">{h}</span>)}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
