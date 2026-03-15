import React from 'react';

const PixelButton = ({ children, size = "medium", onClick, disabled = false, variant = "primary" }) => {
  const sizes = {
    small: "px-3 py-1 text-xs",
    medium: "px-6 py-2 text-xs",
    large: "px-8 py-3 text-sm"
  };

  const variants = {
    primary: `
      bg-orange-500 text-white
      border-b-4 border-orange-700
      hover:bg-orange-600 hover:border-orange-800
      shadow-[0_4px_0_0_#9a3412]
      hover:shadow-[0_2px_0_0_#9a3412]
    `,
    secondary: `
      bg-yellow-400 text-black
      border-b-4 border-yellow-600
      hover:bg-yellow-500 hover:border-yellow-700
      shadow-[0_4px_0_0_#854d0e]
      hover:shadow-[0_2px_0_0_#854d0e]
    `,
    outline: `
      bg-transparent text-orange-500 border-4 border-orange-500
      hover:bg-orange-500 hover:text-white
      shadow-none hover:shadow-none
    `
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${sizes[size]}
        ${variants[variant]}
        font-['Press_Start_2P']
        active:border-b-0 active:translate-y-1
        transition-all duration-100
        disabled:opacity-50 disabled:cursor-not-allowed
        rounded-none
        cursor-pointer
        inline-block
      `}
    >
      {children}
    </button>
  );
};

export default PixelButton;
