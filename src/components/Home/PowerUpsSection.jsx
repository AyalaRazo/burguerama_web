import React from 'react';

const PowerUpsSection = () => {

  const extras = [
    { name: "ORDEN PAPAS",        icon: "🍟", price: 100, stat: "+40 HP" },
    { name: "½ ORDEN PAPAS",      icon: "🍟", price: 50,  stat: "+20 HP" },
    { name: "CARNE CON QUESO",    icon: "🧀", price: 50,  stat: "+25 DEF" },
    { name: "TOCINO",             icon: "🥓", price: 30,  stat: "+15 ATK" },
    { name: "ADEREZO PIXELADO 2oz", icon: "🫙", price: 20, stat: "+10 BUFF" },
    { name: "RANCH 2oz",          icon: "🫙", price: 20,  stat: "+10 BUFF" },
    { name: "BBQ 2oz",            icon: "🫙", price: 20,  stat: "+10 BUFF" },
    { name: "BÚFALO 2oz",         icon: "🌶️", price: 20,  stat: "+10 FIRE" },
    { name: "CHIPOTLE",           icon: "🌶️", price: 20,  stat: "+10 FIRE" },
    { name: "PEPINILLOS 2oz",     icon: "🥒", price: 20,  stat: "+5 SPD" },
  ];

  const malteadas = [
    { name: "MEGA VAINILLA",  icon: "🍦", price: 85,  desc: null },
    { name: "CHOCO DONKEY",   icon: "🍫", price: 85,  desc: null },
    { name: "KIRBY DELUX",    icon: "🍓", price: 85,  desc: null },
    { name: "PAC-MAN SHAKE",  icon: "👻", price: 115, desc: "Galleta Oreo y paleta tipo Magnum" },
  ];

  const bebidas = [
    { name: "SODAS 355ml",   icon: "🥤", price: 40 },
    { name: "AGUA DE SABOR", icon: "🧃", price: 40 },
    { name: "AGUA NATURAL",  icon: "💦", price: 25 },
  ];

  return (
    <section id="power-ups" className="py-20 bg-blue-950 border-t-4 border-b-4 border-yellow-400 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #1E3A8A 0px, #1E3A8A 2px, transparent 2px, transparent 20px)' }} />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-400/10 border-2 border-yellow-400/30 px-4 py-2 mb-4">
            <span className="font-['VT323'] text-yellow-400 text-xl tracking-widest">⚡ MEJORA TU PARTIDA</span>
          </div>
          <h2 className="font-['Press_Start_2P'] text-3xl md:text-4xl text-yellow-400 mb-2 leading-tight"
            style={{ textShadow: '0 0 20px rgba(251,191,36,0.4)' }}>
            POWER-UPS
          </h2>
          <p className="text-blue-300 font-['VT323'] text-2xl mt-2">¡EQUIPA TU PEDIDO!</p>
        </div>

        {/* ── EXTRAS ──────────────────────────────────────── */}
        <div className="mb-14">
          <h3 className="font-['Press_Start_2P'] text-xl text-center text-orange-400 mb-6">
            🎒 EXTRAS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {extras.map(({ name, icon, price, stat }) => (
              <div key={name}
                className="bg-gray-900/80 border-2 border-blue-800 hover:border-yellow-400 p-4 text-center transition-all cursor-pointer group">
                <span className="text-4xl block mb-2 group-hover:animate-bounce">{icon}</span>
                <p className="font-['Press_Start_2P'] text-xs text-white mb-1 leading-relaxed">{name}</p>
                <p className="font-['VT323'] text-green-400 text-lg">{stat}</p>
                <p className="font-['VT323'] text-yellow-400 text-xl mt-1">🪙 ${price} <span className="text-xs">MXN</span></p>
              </div>
            ))}
          </div>
        </div>

        {/* ── MALTEADAS & BEBIDAS ──────────────────────────── */}
        <div className="border-t-2 border-blue-800 pt-10">
          <h3 className="font-['Press_Start_2P'] text-xl text-center text-orange-400 mb-2">
            🥤 MALTEADAS & BEBIDAS
          </h3>
          <p className="text-center text-blue-300 font-['VT323'] text-xl mb-8">¡RECARGA TUS PUNTOS DE VIDA!</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {malteadas.map(({ name, icon, price, desc }) => (
              <div key={name}
                className="bg-gray-900 border-2 border-purple-600 hover:border-pink-400 p-4 text-center transition-all cursor-pointer group">
                <span className="text-4xl block mb-2 group-hover:animate-bounce">{icon}</span>
                <p className="font-['Press_Start_2P'] text-xs text-pink-300 mb-1 leading-relaxed">{name}</p>
                {desc && <p className="font-['VT323'] text-gray-400 text-base mb-1 leading-tight">{desc}</p>}
                <p className="font-['VT323'] text-yellow-400 text-xl mt-1">🪙 ${price} <span className="text-xs">MXN</span></p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
            {bebidas.map(({ name, icon, price }) => (
              <div key={name}
                className="bg-gray-900/80 border-2 border-blue-700 hover:border-blue-400 p-3 text-center transition-all cursor-pointer group">
                <span className="text-3xl block mb-1 group-hover:animate-bounce">{icon}</span>
                <p className="font-['VT323'] text-blue-300 text-base leading-tight">{name}</p>
                <p className="font-['VT323'] text-yellow-400 text-lg mt-1">🪙 ${price} <span className="text-xs">MXN</span></p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PowerUpsSection;
