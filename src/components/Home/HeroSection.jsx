import React, { useState, useEffect } from 'react';
import PixelButton from '../UI/PixelButton';
import DeliveryBadges from '../UI/DeliveryBadges';

const HeroSection = () => {
  const [score, setScore] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  // Incrementar score aleatoriamente para efecto visual
  useEffect(() => {
    const interval = setInterval(() => {
      setScore(prev => prev + Math.floor(Math.random() * 10) + 1);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const floatingIcons = ['🍔', '🎮', '🍟', '🕹️', '🍔', '⚡', '🪙', '👾'];

  return (
    <section id="inicio" className="relative min-h-screen bg-[#0A0A0A] pt-16 overflow-hidden">
      {/* Foodtruck background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/foodtruck.jpg"
          alt="Foodtruck Burguerama de noche en Mexicali, B.C. — hamburguesas smash retro"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/40 to-[#0A0A0A]" />
      </div>

      {/* Scanlines overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 2px, transparent 2px, transparent 4px)'
        }}
      />

      {/* Grid background */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: 'linear-gradient(rgba(249,115,22,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.06) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating background icons */}
      {floatingIcons.map((icon, i) => (
        <div
          key={i}
          className="absolute text-4xl opacity-10 animate-float pointer-events-none"
          style={{
            left: `${(i * 13 + 5) % 95}%`,
            top: `${(i * 17 + 10) % 80}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${3 + (i % 3)}s`
          }}
        >
          {icon}
        </div>
      ))}

      {/* Score display */}
      <div className="absolute top-24 right-4 md:right-8 z-20 text-right">
        <p className="font-['Press_Start_2P'] text-xs text-gray-600">SCORE</p>
        <p className="font-['Press_Start_2P'] text-yellow-400 text-lg">{String(score).padStart(6, '0')}</p>
      </div>

      {/* Player 1 indicator */}
      <div className="absolute top-24 left-4 md:left-8 z-20">
        <p className="font-['Press_Start_2P'] text-xs text-gray-600">1UP</p>
        <div className="flex gap-1 mt-1">
          {['❤️', '❤️', '❤️'].map((h, i) => (
            <span key={i} className="text-sm">{h}</span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center max-w-5xl mx-auto">

          {/* Badge */}
          <div className="inline-block bg-orange-500/20 border-2 border-orange-500 px-4 py-2 mb-8">
            <span className="font-['Press_Start_2P'] text-orange-400 text-xs">
              🎮 STAGE 1: EL ORIGEN DEL SABOR
            </span>
          </div>

          {/* Main title con efecto glitch */}
          <div className="relative mb-4">
            <h1
              className="font-['Press_Start_2P'] text-5xl md:text-7xl lg:text-8xl text-yellow-400 relative animate-glitch leading-tight"
              style={{ textShadow: '0 0 20px rgba(251,191,36,0.5)' }}
            >
              GAME OVER
            </h1>
            {/* Glitch layers */}
            <h1
              className="font-['Press_Start_2P'] text-5xl md:text-7xl lg:text-8xl text-orange-500 absolute top-0 left-0 w-full animate-glitch-delay leading-tight opacity-60"
              aria-hidden="true"
            >
              GAME OVER
            </h1>
          </div>

          <h2
            className="font-['Press_Start_2P'] text-2xl md:text-4xl text-white mb-6 leading-relaxed"
            style={{ textShadow: '2px 2px 0px rgba(249,115,22,0.5)' }}
          >
            ...PARA TU <span className="text-orange-500">HAMBRE</span>
          </h2>

          <p className="font-['VT323'] text-2xl md:text-3xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Las mejores hamburguesas con sabor a videojuego retro.
            <span className="text-yellow-400"> 8 bits de puro placer gastronómico.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <PixelButton
              size="large"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🍔 VER MENÚ
            </PixelButton>
            <PixelButton
              size="large"
              variant="secondary"
              onClick={() => document.getElementById('ubicacion')?.scrollIntoView({ behavior: 'smooth' })}
            >
              📍 UBICACIÓN
            </PixelButton>
          </div>

          {/* Delivery badges */}
          <div className="mb-5">
            <DeliveryBadges size="small" label={true} />
          </div>

          {/* Service distinctions */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              { label: 'Contactless Delivery', icon: '🛵' },
              { label: 'Takeout',              icon: '🥡' },
              { label: 'Dine-in',              icon: '🪑' },
              { label: 'In-store Pickup',      icon: '🏪' },
              { label: 'Curbside Pickup',      icon: '🚗' },
            ].map(({ label, icon }) => (
              <div key={label}
                className="flex items-center gap-1.5 bg-gray-900/80 border border-gray-700 hover:border-orange-500 px-3 py-1.5 transition-colors duration-200">
                <span className="text-sm">{icon}</span>
                <span className="font-['VT323'] text-gray-300 text-lg leading-none">{label}</span>
              </div>
            ))}
          </div>

          {/* Logo showcase */}
          <div className="relative inline-block">
            <div
              className="w-64 h-64 mx-auto border-4 border-yellow-400 bg-black relative overflow-hidden animate-float"
              style={{
                boxShadow: '0 0 50px rgba(251,191,36,0.5), 0 0 100px rgba(249,115,22,0.2), 8px 8px 0px rgba(249,115,22,0.5)',
                animationDuration: '3s'
              }}
            >
              {/* CRT scanlines sobre la imagen */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 2px, transparent 2px, transparent 4px)'
                }}
              />
              <img
                src="/logo_mascota.jpg"
                alt="Burguerama mascot"
                className="w-full h-full object-cover"
              />
              {/* Corner decorations */}
              <div className="absolute top-1 left-1 w-5 h-5 border-t-2 border-l-2 border-yellow-400 z-20"></div>
              <div className="absolute top-1 right-1 w-5 h-5 border-t-2 border-r-2 border-yellow-400 z-20"></div>
              <div className="absolute bottom-1 left-1 w-5 h-5 border-b-2 border-l-2 border-orange-500 z-20"></div>
              <div className="absolute bottom-1 right-1 w-5 h-5 border-b-2 border-r-2 border-orange-500 z-20"></div>
            </div>

            {/* Level badge */}
            <div className="absolute -top-3 -right-3 bg-orange-500 border-2 border-orange-700 px-2 py-1 z-20">
              <span className="font-['Press_Start_2P'] text-white text-xs">LVL.99</span>
            </div>

            {/* INSERT COIN text */}
            <p className="font-['Press_Start_2P'] text-xs text-gray-600 text-center mt-4 animate-blink">
              ▼ INSERT COIN ▼
            </p>
          </div>

          {/* Stats bar */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { label: 'BURGERS', value: '8', icon: '🍔' },
              { label: 'POWER-UPS', value: '17', icon: '⚡' },
              { label: 'RATING', value: '5★', icon: '🏆' },
            ].map(({ label, value, icon }) => (
              <div key={label} className="bg-gray-900/80 border-2 border-gray-700 p-3 text-center">
                <span className="text-2xl block mb-1">{icon}</span>
                <p className="font-['Press_Start_2P'] text-yellow-400 text-lg">{value}</p>
                <p className="font-['VT323'] text-gray-500 text-sm tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-1 animate-bounce">
          <span className="font-['VT323'] text-gray-600 text-lg tracking-widest">SCROLL DOWN</span>
          <span className="text-orange-500 text-xl">▼</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
