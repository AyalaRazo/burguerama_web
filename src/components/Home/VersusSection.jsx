import React, { useState, useEffect } from 'react';
import HealthBar from '../UI/HealthBar';

const fighters = [
  {
    id: 'charola',
    player: 'P1',
    name: 'CHAROLA GAMER',
    subtitle: 'El Combo Definitivo',
    price: 530,
    icon: '🎮',
    emoji: '🍽️',
    description: 'Combo nivel legendario: 2 Mario Classic, boneless o alitas, papas fritas, aros de cebolla y aderezo. La partida perfecta para disfrutar en modo multijugador.',
    stats: [
      { label: 'FULLNESS',  value: 99 },
      { label: 'VALUE',     value: 95 },
      { label: 'POWER',     value: 90 },
    ],
    special: '¡PACK COMPLETO!',
    color: '#facc15',
    glow: 'rgba(250,204,21,0.5)',
    border: '#ca8a04',
    gradient: 'linear-gradient(135deg, #78350f, #92400e, #1c1917)',
    playerColor: 'text-yellow-400',
    side: 'left',
  },
  {
    id: 'fries',
    player: 'P2',
    name: 'FRIES INVADERS',
    subtitle: 'La Invasión Crujiente',
    price: 150,
    icon: '👾',
    emoji: '🍟',
    description: 'Oleada de papas doradas listas para invadir tu hambre: bañadas en queso de nacho derretido y reforzadas con chili beans. Una misión imposible de detener.',
    stats: [
      { label: 'CRUNCH',    value: 95 },
      { label: 'SPEED',     value: 88 },
      { label: 'FLAVOR',    value: 85 },
    ],
    special: '¡EXTRA CHEESE!',
    color: '#f97316',
    glow: 'rgba(249,115,22,0.5)',
    border: '#c2410c',
    gradient: 'linear-gradient(135deg, #1c1917, #431407, #1c1917)',
    playerColor: 'text-orange-400',
    side: 'right',
  },
];

const VersusSection = () => {
  const [flash, setFlash] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => setFlash(f => !f), 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-20 relative overflow-hidden border-t-4 border-b-4"
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a0a00 50%, #0a0a0a 100%)',
        borderColor: '#f97316',
      }}
    >
      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{ background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 4px)' }} />

      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(249,115,22,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block border-2 border-orange-500/40 bg-orange-500/10 px-5 py-2 mb-4">
            <span className="font-['VT323'] text-orange-400 text-xl tracking-widest">⚔️ ELIGE TU COMBO — SELECT YOUR FIGHTER</span>
          </div>
          <h2 className="font-['Press_Start_2P'] text-3xl md:text-4xl text-white leading-tight"
            style={{ textShadow: '0 0 20px rgba(249,115,22,0.6)' }}>
            ROUND <span className="text-orange-500">1</span>
          </h2>
        </div>

        {/* VS Arena */}
        <div className="relative max-w-5xl mx-auto">

          {/* Arena border */}
          <div className="border-4 border-orange-500/60 relative"
            style={{ boxShadow: '0 0 40px rgba(249,115,22,0.2), inset 0 0 60px rgba(0,0,0,0.5)' }}>

            {/* Corner pixels */}
            <div className="absolute top-0 left-0 w-5 h-5 bg-yellow-400 z-10" />
            <div className="absolute top-0 right-0 w-5 h-5 bg-yellow-400 z-10" />
            <div className="absolute bottom-0 left-0 w-5 h-5 bg-orange-500 z-10" />
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-orange-500 z-10" />

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]">

              {fighters.map((f, fi) => (
                <button
                  key={f.id}
                  onClick={() => setSelected(selected === f.id ? null : f.id)}
                  className="text-left focus:outline-none transition-all duration-300 p-6 md:p-8"
                  style={{
                    background: selected === f.id ? f.gradient : 'transparent',
                    borderRight: fi === 0 ? '2px solid rgba(249,115,22,0.3)' : undefined,
                    borderLeft: fi === 1 ? '2px solid rgba(249,115,22,0.3)' : undefined,
                  }}
                >
                  {/* Player tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-['Press_Start_2P'] text-xs px-2 py-1 border-2"
                      style={{ color: f.color, borderColor: f.border, background: 'rgba(0,0,0,0.5)' }}
                    >
                      {f.player}
                    </span>
                    {selected === f.id && (
                      <span className="font-['VT323'] text-green-400 text-lg animate-pulse">▶ SELECTED</span>
                    )}
                  </div>

                  {/* Character icon */}
                  <div
                    className="relative mb-5 flex items-center justify-center"
                    style={{
                      height: '120px',
                      background: 'rgba(0,0,0,0.4)',
                      border: `2px solid ${f.border}`,
                      boxShadow: selected === f.id ? `0 0 30px ${f.glow}` : 'none',
                    }}
                  >
                    <span className="text-7xl" style={{ filter: selected === f.id ? `drop-shadow(0 0 12px ${f.color})` : 'none' }}>
                      {f.emoji}
                    </span>
                    <span
                      className="absolute bottom-1 right-2 font-['Press_Start_2P'] text-xs"
                      style={{ color: f.color }}
                    >
                      {f.icon}
                    </span>
                    {/* Scanlines on character */}
                    <div className="absolute inset-0 pointer-events-none"
                      style={{ background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 3px)' }} />
                  </div>

                  {/* Name */}
                  <h3 className="font-['Press_Start_2P'] text-sm md:text-base mb-1 leading-relaxed"
                    style={{ color: f.color, textShadow: `0 0 10px ${f.glow}` }}>
                    {f.name}
                  </h3>
                  <p className="font-['VT323'] text-gray-400 text-lg mb-4">{f.subtitle}</p>

                  {/* Stats */}
                  <div className="space-y-2 mb-4">
                    {f.stats.map(({ label, value }) => (
                      <div key={label}>
                        <div className="flex justify-between mb-0.5">
                          <span className="font-['Press_Start_2P'] text-xs text-gray-500">{label}</span>
                          <span className="font-['Press_Start_2P'] text-xs" style={{ color: f.color }}>{value}</span>
                        </div>
                        <HealthBar value={value} color={f.id === 'charola' ? 'yellow' : 'orange'} />
                      </div>
                    ))}
                  </div>

                  {/* Description (visible when selected) */}
                  {selected === f.id && (
                    <p className="font-['VT323'] text-gray-300 text-xl mb-4 border-l-2 pl-3"
                      style={{ borderColor: f.color }}>
                      {f.description}
                    </p>
                  )}

                  {/* Price */}
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-700/60">
                    <div className="w-1 self-stretch shrink-0 rounded-full" style={{ background: `linear-gradient(to bottom, ${f.color}, ${f.border})`, minHeight: '2rem' }} />
                    <div>
                      <p className="font-['VT323'] text-gray-500 text-sm tracking-widest leading-none mb-0.5">PRECIO</p>
                      <p className="font-['Press_Start_2P'] text-white text-sm flex items-center gap-1.5">${f.price} <span className="text-xs animate-spin-slow">🪙</span><span className="text-xs" style={{ color: f.color }}>MXN</span></p>
                    </div>
                  </div>

                  {/* Special tag */}
                  <div className="mt-3">
                    <span
                      className="font-['VT323'] text-sm px-2 py-0.5 border"
                      style={{ color: f.color, borderColor: f.border, background: 'rgba(0,0,0,0.5)' }}
                    >
                      ★ {f.special}
                    </span>
                  </div>
                </button>
              ))}

              {/* VS divider */}
              <div className="flex flex-col items-center justify-center px-4 py-8 md:py-0 border-t border-b md:border-t-0 md:border-b-0 border-orange-500/30">
                <div className="relative">
                  {/* VS glow rings */}
                  <div className="absolute inset-0 rounded-full animate-pulse"
                    style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.3) 0%, transparent 70%)', transform: 'scale(2.5)' }} />
                  <p
                    className="font-['Press_Start_2P'] text-4xl md:text-5xl relative z-10"
                    style={{
                      color: flash ? '#facc15' : '#f97316',
                      textShadow: `0 0 20px ${flash ? 'rgba(250,204,21,0.8)' : 'rgba(249,115,22,0.8)'}, 0 0 40px ${flash ? 'rgba(250,204,21,0.4)' : 'rgba(249,115,22,0.4)'}`,
                      transition: 'color 0.3s, text-shadow 0.3s',
                    }}
                  >
                    VS
                  </p>
                </div>
                <p className="font-['VT323'] text-gray-600 text-sm mt-4 tracking-widest text-center">HAZ CLIC<br/>PARA VER</p>
              </div>

            </div>
          </div>

          {/* Fight prompt */}
          <p
            className="text-center font-['Press_Start_2P'] text-xs mt-6 animate-blink"
            style={{ color: flash ? '#facc15' : '#f97316' }}
          >
            ▶ ▶ ▶  PRESS START  ◀ ◀ ◀
          </p>
        </div>
      </div>
    </section>
  );
};

export default VersusSection;
