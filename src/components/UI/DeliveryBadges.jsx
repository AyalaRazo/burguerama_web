import React from 'react';

const platforms = [
  {
    name: "Didi Food",
    color: "from-orange-500 to-orange-600",
    border: "border-orange-500",
    text: "text-white",
    emoji: "🟠",
    url: "https://web.didiglobal.com/mx/food/mexicali-bcn/burguerama/5764608076901256603/",
  },
  {
    name: "Uber Eats",
    color: "from-green-600 to-green-700",
    border: "border-green-500",
    text: "text-white",
    emoji: "🟢",
    url: "https://www.ubereats.com/mx/store/burguerama-mexicali/CM2gk8fSWOyYcV6b9xTxqg",
  },
  {
    name: "Rappi",
    color: "from-red-500 to-red-600",
    border: "border-red-400",
    text: "text-white",
    emoji: "🔴",
    url: "https://www.rappi.com.mx/restaurantes/1930257126-burguerama-mxl",
  },
];

const DeliveryBadges = ({ size = "medium", label = true }) => {
  const textSize = size === "small" ? "text-xs" : "text-sm";
  const padding  = size === "small" ? "px-3 py-1.5 gap-1.5" : "px-4 py-2 gap-2";
  const dot      = size === "small" ? "text-xs" : "text-base";

  return (
    <div className="flex flex-col items-center gap-2">
      {label && (
        <p className="font-['VT323'] text-gray-500 text-lg tracking-widest">
          PIDE A DOMICILIO VÍA:
        </p>
      )}
      <div className="flex flex-wrap justify-center gap-2">
        {platforms.map(({ name, color, border, text, emoji, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center ${padding}
              bg-gradient-to-r ${color}
              border-2 ${border}
              font-['Press_Start_2P'] ${textSize} ${text}
              shadow-[2px_2px_0px_rgba(0,0,0,0.4)]
              hover:brightness-110 hover:-translate-y-0.5
              transition-all duration-150 cursor-pointer
            `}
          >
            <span className={dot}>{emoji}</span>
            <span>{name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DeliveryBadges;
