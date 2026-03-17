import React from 'react';
import { srcSet } from '../../utils/imageUtils';

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-[#0A0A0A] border-t-4 border-yellow-400 relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-orange-500/10 border-2 border-orange-500/30 px-4 py-2 mb-4">
            <span className="font-['VT323'] text-orange-400 text-xl tracking-widest">🕹️ INSERT COIN · CONÓCENOS</span>
          </div>
          <h2 className="font-['Press_Start_2P'] text-3xl md:text-4xl text-yellow-400 leading-tight mb-2"
            style={{ textShadow: '0 0 20px rgba(251,191,36,0.3)' }}>
            PLAYER SELECT
          </h2>
          <h2 className="font-['Press_Start_2P'] text-3xl md:text-4xl text-orange-500 leading-tight"
            style={{ textShadow: '0 0 20px rgba(249,115,22,0.3)' }}>
            NUESTRA HISTORIA
          </h2>
        </div>

        {/* Foodtruck hero image */}
        <div className="relative mb-14 mx-auto max-w-3xl">
          <div className="border-4 border-orange-500 overflow-hidden"
            style={{ boxShadow: '8px 8px 0px rgba(249,115,22,0.4)' }}>
            <img
              src="/foodtruck.webp"
              srcSet={srcSet('/foodtruck.webp')}
              sizes="(max-width: 768px) 100vw, 768px"
              alt="Foodtruck Burguerama en Mexicali, B.C. — hamburguesas smash con temática retro"
              className="w-full object-cover"
              style={{ maxHeight: '460px', objectPosition: 'center' }}
              loading="lazy"
            />
            {/* Scanlines */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 2px, transparent 2px, transparent 4px)' }} />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 border-4 border-yellow-400 px-6 py-2 whitespace-nowrap">
            <span className="font-['Press_Start_2P'] text-yellow-400 text-xs">🎮 BURGUERAMA MXL</span>
          </div>
        </div>

        {/* Owners + mascota */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">

          {/* Personal image */}
          <div className="relative">
            <div className="border-4 border-yellow-400 overflow-hidden"
              style={{ boxShadow: '6px 6px 0px rgba(251,191,36,0.3)' }}>
              <img
                src="/personal_image.webp"
                srcSet={srcSet('/personal_image.webp')}
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Dueños de Burguerama, foodtruck de hamburguesas en Mexicali B.C."
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 2px, transparent 2px, transparent 4px)' }} />
            </div>
            {/* Corner pixels */}
            <div className="absolute top-0 left-0 w-4 h-4 bg-yellow-400"></div>
            <div className="absolute top-0 right-0 w-4 h-4 bg-yellow-400"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 bg-orange-500"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-orange-500"></div>
          </div>

          {/* Story text */}
          <div>
            <div className="bg-gray-900 border-4 border-gray-700 p-6"
              style={{ boxShadow: '4px 4px 0px rgba(249,115,22,0.2)' }}>
              <p className="font-['Press_Start_2P'] text-xs text-orange-400 mb-4">// BACKSTORY</p>

              <p className="font-['VT323'] text-gray-200 text-2xl leading-relaxed mb-4">
                Todo comenzó con una idea. Gerardo, filósofo. Miriam, diseñadora. No veníamos de la cocina, pero teníamos hambre de hacer algo auténtico, de conectar con la gente.
              </p>
              <p className="font-['VT323'] text-gray-300 text-xl leading-relaxed mb-4">
                Así nació Burguerama. En un food truck con Smash Burgers, sin poses, sin complicaciones. Porque lo bueno no necesita complicarse. Solo necesita fuego, ganas y <span className="text-yellow-400">corazón</span>.
              </p>
              <p className="font-['VT323'] text-gray-300 text-xl leading-relaxed mb-6">
                No éramos de la cocina pero aquí andamos echándole sazón y alma. Esto es Burguerama — hecho de ideas, riesgos y mucho sabor. <span className="text-orange-400">Bienvenido, el juego sigue.</span>
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'FUNDACIÓN', value: '2025' },
                  { label: 'CIUDAD', value: 'MEXICALI' },
                  { label: 'ESPECIALIDAD', value: 'SMASH' },
                  { label: 'RATING', value: '★★★★★' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-black/50 border border-gray-700 p-2 text-center">
                    <p className="font-['VT323'] text-gray-500 text-sm tracking-widest">{label}</p>
                    <p className="font-['Press_Start_2P'] text-yellow-400 text-xs mt-1">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mascota section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gray-900 border-4 border-orange-500 p-6"
              style={{ boxShadow: '4px 4px 0px rgba(249,115,22,0.3)' }}>
              <p className="font-['Press_Start_2P'] text-xs text-orange-400 mb-4">// NUESTRO MASCOT</p>
              <h3 className="font-['Press_Start_2P'] text-lg text-yellow-400 mb-3 leading-relaxed">
                SMASHY
              </h3>
              <p className="font-['VT323'] text-gray-200 text-2xl leading-relaxed mb-3">
                Smashy no sólo es nuestro personaje — es el que se emociona cuando pides tu smashburger favorita y guarda todos tus "¡mmm qué rico!" como si fueran monedas de oro. 🪙
              </p>
              <p className="font-['VT323'] text-gray-400 text-xl leading-relaxed">
                Es el primer fan de nuestras burgers. Aunque vive en el mundo pixelado de Burguerama, te acompaña en cada antojo con su <span className="text-yellow-400">ternura aplastante</span>. Y sí, cada vez que alguien sonríe al probar una burger… Smashy gana una vida extra. 🎮
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="font-['Press_Start_2P'] text-xs text-gray-600">POWER:</span>
                <div className="flex-1 h-3 bg-gray-800 border border-gray-600">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-yellow-400" style={{ width: '100%' }} />
                </div>
                <span className="font-['Press_Start_2P'] text-xs text-yellow-400">MAX</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="border-4 border-yellow-400 overflow-hidden bg-gradient-to-b from-orange-950 to-gray-900"
              style={{ boxShadow: '6px 6px 0px rgba(251,191,36,0.3)' }}>
              <img
                src="/mascota.webp"
                srcSet={srcSet('/mascota.webp')}
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Smashy, mascota oficial de Burguerama el foodtruck gamer de Mexicali"
                className="w-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-3 -right-3 bg-orange-500 border-2 border-orange-700 px-3 py-1">
              <span className="font-['Press_Start_2P'] text-white text-xs">P1</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
