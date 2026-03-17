import React, { useState } from 'react';
import HealthBar from '../UI/HealthBar';
import { srcSet, srcSetSmall } from '../../utils/imageUtils';

const wingsPhotos = [
  "/alitas_boneless/galeria/koopa_wings_01.webp",
  "/alitas_boneless/galeria/koopa_wings_02.webp",
  "/alitas_boneless/galeria/koopa_wings_03.webp",
  "/alitas_boneless/galeria/koopa_wings_04.webp",
  "/alitas_boneless/galeria/koopa_wings_05.webp",
  "/alitas_boneless/galeria/koopa_wings_06.webp",
];

const WingsHotDogsSection = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('MEDIUM');
  const [hoveredWing, setHoveredWing]               = useState(null);
  const [activePhoto, setActivePhoto]               = useState(0);

  const difficulties = [
    { id: 'MILD',    label: '😊 EASY',   borderColor: 'border-green-500',  description: 'Sin picante' },
    { id: 'MEDIUM',  label: '😤 MEDIUM', borderColor: 'border-yellow-500', description: 'Toque de fuego' },
    { id: 'HOT',     label: '🔥 HARD',   borderColor: 'border-orange-500', description: 'Picante real' },
    { id: 'INFERNO', label: '💀 INSANE', borderColor: 'border-red-500',    description: 'Solo para valientes' },
  ];

  const wings = [
    {
      name: "KOOPA WINGS",
      pieces: 8,
      power: "🔥 FUEGO",
      stat: "ATK +80",
      price: 170,
      color: "from-green-700 to-green-600",
      borderColor: "border-green-500",
      powerLevel: 80,
      powerColor: "red",
      description: "Alitas crujientes con sabor potente y clásico. Bañadas en salsa búfalo o BBQ, inspiradas en los caparazones más famosos del mundo gamer. Sabrosas y peligrosamente irresistibles.",
    },
    {
      name: "BONELESS 64",
      pieces: 8,
      power: "⚡ SPEED",
      stat: "SPD +64",
      price: 170,
      color: "from-purple-700 to-purple-600",
      borderColor: "border-purple-500",
      powerLevel: 82,
      powerColor: "yellow",
      description: "Boneless con alma retro y sabor de otro nivel. Jugosas tiras de pechuga al estilo clásico bañadas en salsa búfalo o BBQ. Una mordida y desbloqueas la nostalgia en 64 bits.",
    },
  ];

  const chiliDogs = [
    {
      name: "DOG HUNT CLASSIC",
      description: "Salchicha de res ¼ lb, cebolla fresca, sweet relish y aderezos clásicos. El clásico que nunca falla. Insert coin to eat.",
      price: 180,
      icon: "🌭",
      image: "/hot_dogs/dog_hunt_inferno.webp",
    },
    {
      name: "DOGZILLA",
      description: "El dog más feroz: salchicha de res ¼ de libra, con cebolla caramelizada, un toque de chili beans y queso cheddar derretido. Un monstruo de sabor que no se anda con rodeos.",
      price: 200,
      icon: "🦖",
      image: "/hot_dogs/dogzilla.webp",
    },
    {
      name: "CALL OF DOGGY",
      description: "Misión cumplida: salchicha de res ¼ de libra con cebolla caramelizada, mezcla táctica de champiñones y jalapeños salteados, y un ataque certero de queso cheddar derretido. Solo para jugadores en modo difícil.",
      price: 200,
      icon: "💀",
      image: "/hot_dogs/call_of_doggy.webp",
    },
  ];

  return (
    <section
      id="alitas-hotdogs"
      className="py-20 bg-blue-950 border-t-4 border-yellow-400 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #1E3A8A 0px, #1E3A8A 2px, transparent 2px, transparent 20px)' }} />

      <div className="container mx-auto px-4 relative z-10">

        {/* ── WINGS ───────────────────────────────────────────── */}
        <div className="text-center mb-10">
          <div className="inline-block bg-yellow-400/10 border-2 border-yellow-400/30 px-4 py-2 mb-4">
            <span className="font-['VT323'] text-yellow-400 text-xl tracking-widest">🍗 ALITAS Y BONELESS</span>
          </div>
          <h2 className="font-['Press_Start_2P'] text-3xl md:text-4xl text-yellow-400 mb-2 leading-tight"
            style={{ textShadow: '0 0 20px rgba(251,191,36,0.4)' }}>
            ALITAS Y BONELESS
          </h2>
          <p className="text-orange-400 font-['VT323'] text-2xl mt-1 mb-1">
            Acompañadas con bastones de apio y zanahoria.
          </p>
          <p className="text-blue-300 font-['VT323'] text-2xl mt-1 mb-6">
            ¡ELIGE TU NIVEL DE PICANTE!
          </p>

          {/* Difficulty selector */}
          <div className="inline-block bg-blue-900/50 border-2 border-blue-700 p-4">
            <p className="font-['Press_Start_2P'] text-xs text-blue-300 mb-3">NIVEL DE PICANTE:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {difficulties.map(({ id, label, borderColor, description }) => (
                <button key={id} onClick={() => setSelectedDifficulty(id)} title={description}
                  className={`font-['VT323'] text-xl px-4 py-2 border-2 transition-all
                    ${selectedDifficulty === id
                      ? `${borderColor} text-white bg-white/10`
                      : 'border-blue-700 text-blue-400 hover:border-blue-400'}`}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Wings gallery + cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Photo gallery */}
          <div className="relative">
            <div className="relative border-4 border-yellow-400 overflow-hidden aspect-square"
              style={{ boxShadow: '6px 6px 0px rgba(251,191,36,0.3)' }}>
              <img
                src={wingsPhotos[activePhoto]}
                srcSet={srcSet(wingsPhotos[activePhoto])}
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt="Wings"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex gap-2 mt-2">
              {wingsPhotos.map((photo, i) => (
                <button key={i} onClick={() => setActivePhoto(i)}
                  className={`flex-1 aspect-square overflow-hidden border-2 transition-all
                    ${activePhoto === i ? 'border-orange-500' : 'border-gray-700 hover:border-yellow-400'}`}>
                  <img
                    src={photo}
                    srcSet={srcSetSmall(photo)}
                    sizes="17vw"
                    alt={`wing ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Wing cards */}
          <div className="flex flex-col gap-4">
            {wings.map((wing, index) => (
              <div key={index}
                className={`bg-gray-900 border-4 ${wing.borderColor} p-4 relative overflow-hidden
                  transform transition-all duration-300 ${hoveredWing === index ? 'scale-[1.02]' : ''}`}
                style={{ boxShadow: hoveredWing === index ? '0 0 20px rgba(249,115,22,0.4)' : '3px 3px 0px rgba(0,0,0,0.5)' }}
                onMouseEnter={() => setHoveredWing(index)}
                onMouseLeave={() => setHoveredWing(null)}
              >
                <div className="flex items-center gap-4">
                  <div className={`bg-gradient-to-r ${wing.color} p-3 shrink-0 text-center min-w-[70px]`}>
                    <span className="text-3xl block">🍗</span>
                    <span className="font-['Press_Start_2P'] text-white text-xs block mt-1">{wing.pieces}pz</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-['Press_Start_2P'] text-xs text-white mb-1">{wing.name}</h3>
                    <p className="font-['VT323'] text-gray-400 text-lg mb-2 leading-tight">{wing.description}</p>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex gap-3">
                        <span className="font-['VT323'] text-green-400 text-lg">{wing.power}</span>
                        <span className="font-['VT323'] text-orange-400 text-lg">
                          {selectedDifficulty === 'MILD' ? '🌶' : selectedDifficulty === 'MEDIUM' ? '🌶🌶' : selectedDifficulty === 'HOT' ? '🌶🌶🌶' : '💀'}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pt-2 border-t border-gray-700/60">
                      <div className="w-1 self-stretch shrink-0 rounded-full"
                        style={{ background: 'linear-gradient(to bottom, #facc15, #f97316)', minHeight: '2rem' }} />
                      <div>
                        <p className="font-['VT323'] text-gray-500 text-sm tracking-widest leading-none mb-0.5">PRECIO</p>
                        <p className="font-['Press_Start_2P'] text-white text-sm flex items-center gap-1.5">${wing.price} <span className="text-yellow-400 text-xs animate-spin-slow">🪙</span><span className="text-yellow-400 text-xs">MXN</span></p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <HealthBar value={wing.powerLevel} label="FLAVOR" color={wing.powerColor} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── HOT DOGS ────────────────────────────────────────── */}
        <div className="border-t-4 border-orange-500/50 pt-14">
          <div className="text-center mb-10">
            <div className="inline-block bg-orange-500/10 border-2 border-orange-500/30 px-4 py-2 mb-4">
              <span className="font-['VT323'] text-orange-400 text-xl tracking-widest">🌭 HOT DOGS</span>
            </div>
            <h2 className="font-['Press_Start_2P'] text-3xl md:text-4xl text-orange-400 mb-2 leading-tight"
              style={{ textShadow: '0 0 20px rgba(249,115,22,0.4)' }}>
              HOT DOGS
            </h2>
            <p className="text-orange-400 font-['VT323'] text-2xl mt-1 mb-1">Acompañados con papas fritas.</p>
            <p className="text-blue-300 font-['VT323'] text-2xl">¡EL ARMA SECRETA DEL MENÚ!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {chiliDogs.map((dog, i) => (
              <div key={i} className="bg-gray-900 border-4 border-orange-500 overflow-hidden flex flex-col"
                style={{ boxShadow: '4px 4px 0px rgba(249,115,22,0.3)' }}>
                <div className="relative h-52 overflow-hidden shrink-0">
                  <img
                    src={dog.image}
                    srcSet={dog.image.includes('dogzilla') ? srcSetSmall(dog.image) : srcSet(dog.image)}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    alt={dog.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 2px, transparent 2px, transparent 4px)' }} />
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900 to-transparent" />
                  <div className="absolute top-2 right-2 bg-orange-500 border-2 border-orange-700 px-2 py-1">
                    <span className="font-['Press_Start_2P'] text-white text-xs">{dog.icon}</span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h4 className="font-['Press_Start_2P'] text-xs text-yellow-400 mb-2 leading-relaxed">{dog.name}</h4>
                  <p className="font-['VT323'] text-gray-300 text-xl flex-1 mb-4">{dog.description}</p>
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-700/60">
                    <div className="w-1 self-stretch shrink-0 rounded-full"
                      style={{ background: 'linear-gradient(to bottom, #facc15, #f97316)', minHeight: '2.5rem' }} />
                    <div>
                      <p className="font-['VT323'] text-gray-500 text-sm tracking-widest leading-none mb-0.5">PRECIO</p>
                      <p className="font-['Press_Start_2P'] text-white text-sm leading-none flex items-center gap-1.5">${dog.price} <span className="text-yellow-400 text-xs animate-spin-slow">🪙</span><span className="text-yellow-400 text-xs">MXN</span></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WingsHotDogsSection;
