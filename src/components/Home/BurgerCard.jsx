import React, { useState } from 'react';
import HealthBar from '../UI/HealthBar';

const BurgerCard = ({ name, description, price, powerLevel, icon, tag, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getPowerColor = (level) => {
    if (level >= 90) return 'green';
    if (level >= 70) return 'yellow';
    if (level >= 50) return 'orange';
    return 'red';
  };

  return (
    <div
      className={`
        bg-gray-900 border-4 rounded-none relative overflow-hidden
        transform transition-all duration-300 cursor-pointer flex flex-col
        ${isHovered ? 'scale-105 border-orange-500' : 'border-yellow-400'}
      `}
      style={{
        boxShadow: isHovered
          ? '0 0 30px rgba(249,115,22,0.7), 6px 6px 0px rgba(249,115,22,0.3)'
          : '4px 4px 0px rgba(251,191,36,0.3)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Burger photo */}
      <div className="relative h-52 overflow-hidden bg-gray-800">
        {image ? (
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-900 to-yellow-800">
            <span className="text-7xl">{icon}</span>
          </div>
        )}
        {/* Scanlines over photo */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 2px, transparent 2px, transparent 4px)' }}
        />
        {/* Gradient fade bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent" />

        {/* Tag */}
        {tag && (
          <div className="absolute top-2 left-2 bg-red-500 border-2 border-red-700 px-2 py-0.5 z-10">
            <span className="font-['Press_Start_2P'] text-white text-xs">{tag}</span>
          </div>
        )}

        {/* Level badge */}
        <div className="absolute top-2 right-2 bg-orange-500 border-2 border-orange-700 px-2 py-1 z-10">
          <span className="font-['Press_Start_2P'] text-white text-xs">LVL.{powerLevel}</span>
        </div>

        {/* Icon over image bottom-left */}
        <div className="absolute bottom-2 left-3 z-10">
          <span className={`text-3xl ${isHovered ? 'animate-bounce' : ''}`}>{icon}</span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1 relative">
        {/* Corner decorations */}
        <div className="absolute top-0 right-0 w-3 h-3 bg-yellow-400 opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-orange-500 opacity-40"></div>

        {/* Title */}
        <h3 className="font-['Press_Start_2P'] text-sm text-yellow-400 mb-3 leading-relaxed">
          {name}
        </h3>

        {/* Description */}
        <p className="text-gray-300 font-['VT323'] text-xl leading-snug flex-1 mb-4">
          {description}
        </p>

        {/* Price + colored line */}
        <div className="flex items-center gap-3 pt-3 border-t border-gray-700/60">
          <div
            className="w-1 self-stretch shrink-0 rounded-full"
            style={{
              background: `linear-gradient(to bottom, #facc15, #f97316)`,
              minHeight: '2.5rem',
            }}
          />
          <div>
            <p className="font-['VT323'] text-gray-500 text-sm tracking-widest leading-none mb-0.5">PRECIO</p>
            <p className="font-['Press_Start_2P'] text-white text-sm leading-none flex items-center gap-1.5">
              ${price}{' '}
              <span className="text-yellow-400 text-xs animate-spin-slow">🪙</span>
              <span className="text-yellow-400 text-xs">MXN</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerCard;
