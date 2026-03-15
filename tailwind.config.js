/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 1s linear infinite',
        'glitch-delay': 'glitch 1s linear infinite 0.5s',
        'spin-slow': 'spin 3s linear infinite',
        'scanlines': 'scanlines 8s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 3s ease-in-out infinite',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scanlines: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 10px' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'vt323': ['VT323', 'monospace'],
      },
      colors: {
        'retro-orange': '#F97316',
        'retro-yellow': '#FBBF24',
        'retro-blue': '#2563EB',
        'retro-dark-blue': '#1E3A8A',
        'retro-black': '#0A0A0A',
      },
      boxShadow: {
        'pixel': '4px 4px 0px 0px rgba(249,115,22,0.5)',
        'pixel-lg': '6px 6px 0px 0px rgba(249,115,22,0.5)',
        'glow-orange': '0 0 30px rgba(249,115,22,0.7)',
        'glow-yellow': '0 0 30px rgba(251,191,36,0.7)',
      }
    },
  },
  plugins: [],
}
