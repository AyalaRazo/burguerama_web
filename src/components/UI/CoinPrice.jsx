import React from 'react';

const CoinPrice = ({ price, size = "medium" }) => {
  const sizes = {
    small: "text-sm gap-1",
    medium: "text-base gap-2",
    large: "text-xl gap-2"
  };

  const coinSizes = {
    small: "text-lg",
    medium: "text-2xl",
    large: "text-3xl"
  };

  return (
    <div className={`flex items-center ${sizes[size]}`}>
      <span className={`${coinSizes[size]} animate-spin-slow`}>🪙</span>
      <span className="text-white font-['Press_Start_2P']">
        {price.toFixed(2)}€
      </span>
    </div>
  );
};

export default CoinPrice;
