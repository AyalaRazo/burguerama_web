import React from 'react';

const HealthBar = ({ value, max = 100, label = "POWER", color = "green" }) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const colors = {
    green: "from-green-500 to-green-400",
    orange: "from-orange-500 to-orange-400",
    red: "from-red-500 to-red-400",
    yellow: "from-yellow-500 to-yellow-400",
    blue: "from-blue-500 to-blue-400",
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-gray-400 font-['VT323'] tracking-widest">{label}</span>
        <span className="text-xs text-yellow-400 font-['Press_Start_2P']">{value}%</span>
      </div>
      <div className="h-4 bg-gray-800 border-2 border-gray-600 overflow-hidden relative">
        {/* Fondo con efecto pixel */}
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        {/* Barra de progreso */}
        <div
          className={`h-full bg-gradient-to-r ${colors[color]} transition-all duration-700 ease-out relative`}
          style={{ width: `${percentage}%` }}
        >
          {/* Efecto brillo en la barra */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default HealthBar;
