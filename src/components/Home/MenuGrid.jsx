import React, { useState } from 'react';
import BurgerCard from './BurgerCard';

const MenuGrid = () => {
  const [filter, setFilter] = useState('ALL');

  const hamburguesas = [
    {
      name: "SUPER MARIO CLASSIC",
      description: "La hamburguesa que salva cualquier día. Carne de res, cebolla caramelizada, queso americano y aderezo pixelado. Clásica, poderosa y siempre al rescate.",
      price: 170,
      powerLevel: 70,
      icon: "🍄",
      category: "CLASSIC",
      image: "/burgers/super_mario_classic/super_mario_classic.png"
    },
    {
      name: "DOUBLE DRAGON",
      description: "Doble carne, doble golpe de sabor. Inspirada en los míticos hermanos del arcade, esta burger lleva doble carne de res, cebolla caramelizada, quesos americano y suizo, con aderezo pixelado. Un dúo letal para el hambre feroz.",
      price: 220,
      powerLevel: 90,
      icon: "🐉",
      category: "LEGENDARY",
      image: "/burgers/double_dragon/doube_dragon.png"
    },
    {
      name: "FINAL BOSS",
      description: "Para los que vinieron a ganar. Triple carne de res, cebolla caramelizada, quesos americano y suizo, con aderezo pixelado. Derrota a este monstruo de carne o acepta el game over.",
      price: 250,
      powerLevel: 99,
      icon: "👾",
      category: "LEGENDARY",
      tag: "🔥 HOT",
      image: "/burgers/final_boss/final_boss.png"
    },
    {
      name: "LUIGI'S CLASSIC",
      description: "La opción fresca del menú. Carne de res, cebolla caramelizada, con queso americano, lechuga, tomate, cebolla morada y aderezo pixelado. Porque el Player 2 también puede ser el héroe.",
      price: 180,
      powerLevel: 72,
      icon: "🥑",
      category: "CLASSIC",
      image: "/burgers/luigis_classic/lugis_classic.jpeg"
    },
    {
      name: "STREET MEAT FIGHTER",
      description: "¡Round 1, fight! Carne de res, tocino, cebolla caramelizada, queso suizo, champiñones y jalapeños salteados. Una explosión de sabor que te dejará KO de gusto.",
      price: 230,
      powerLevel: 88,
      icon: "🥊",
      category: "FIGHTER",
      image: "/burgers/street_meat_fighter/street_meat_fighter.png"
    },
    {
      name: "SONIC BURGER",
      description: "Rápida, crujiente y llena de actitud. Carne de res, cebolla caramelizada, tocino, queso suizo, aros de cebolla y salsa BBQ. Crujido, actitud y velocidad. Todo en una sola burger.",
      price: 230,
      powerLevel: 75,
      icon: "⚡",
      category: "SPEED",
      image: "/burgers/sonic_burger/sonic_burger.png"
    },
    {
      name: "PUNCH OUT BACON",
      description: "Carne jugosa, cebolla caramelizada, queso americano, mermelada de tocino, aderezo especial y pepinillos. Un golpe directo al antojo.",
      price: 230,
      powerLevel: 91,
      icon: "🥓",
      category: "LEGENDARY",
      image: "/burgers/punch_out_bacon/punch_out_bacon.png"
    },
    {
      name: "CASTLEVANIA",
      description: "Una burger de otra era, ideal para cazadores del sabor. Pechuga de pollo bañada en salsa búfalo o BBQ, con lechuga, tomate, cebolla morada y aderezo ranch. Bienvenido a la noche eterna del antojo.",
      price: 190,
      powerLevel: 87,
      icon: "🧛",
      category: "CLASSIC",
      image: "/burgers/castlevania/castlevania.png"
    },
  ];

  const categories = ['ALL', 'CLASSIC', 'LEGENDARY', 'SPEED', 'FIGHTER'];
  const filtered = filter === 'ALL' ? hamburguesas : hamburguesas.filter(b => b.category === filter);

  return (
    <section id="menu" className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #F97316 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-400/10 border-2 border-yellow-400/30 px-4 py-2 mb-4">
            <span className="font-['VT323'] text-yellow-400 text-xl tracking-widest">🍔 HAMBURGUESAS</span>
          </div>
          <h2 className="font-['Press_Start_2P'] text-3xl md:text-4xl text-center text-yellow-400 mb-2 leading-tight"
            style={{ textShadow: '0 0 20px rgba(251,191,36,0.3)' }}>
            HAMBURGUESAS
          </h2>
          <p className="font-['VT323'] text-orange-400 text-2xl mb-2">Acompañadas con papas fritas.</p>
          <p className="font-['VT323'] text-blue-300 text-xl mb-4">⬇️ ELIGE TU COMBATIENTE ⬇️</p>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`
                  font-['Press_Start_2P'] text-xs px-3 py-2
                  border-2 transition-all duration-200
                  ${filter === cat
                    ? 'bg-orange-500 border-orange-700 text-white shadow-[0_3px_0_0_#9a3412]'
                    : 'bg-transparent border-gray-600 text-gray-400 hover:border-orange-500 hover:text-orange-400'
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((burger, index) => (
            <BurgerCard key={index} {...burger} />
          ))}
        </div>

        <div className="text-center mt-12 p-6 border-2 border-dashed border-gray-700">
          <p className="font-['VT323'] text-gray-400 text-2xl mb-2">
            ¿Buscas algo especial? ¡Pregunta en el truck!
          </p>
          <p className="font-['Press_Start_2P'] text-xs text-orange-400 animate-blink">
            DLC DISPONIBLE — BURGERS DE TEMPORADA
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuGrid;
