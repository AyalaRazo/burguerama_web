import React, { useState, useEffect } from 'react';
import PixelButton from '../UI/PixelButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio',    label: 'INICIO' },
    { href: '#menu',      label: 'MENÚ' },
    { href: '#power-ups', label: 'POWER-UPS' },
    { href: '#nosotros',  label: 'NOSOTROS' },
    { href: '#ubicacion', label: 'UBICACIÓN' },
    { href: '#contacto',  label: 'CONTACTO' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-black/95 backdrop-blur-sm border-b-4 border-orange-500 shadow-[0_4px_20px_rgba(249,115,22,0.3)]'
        : 'bg-black border-b-4 border-orange-500'
    }`}>
      <div className="max-w-screen-xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between gap-2">

          {/* Logo: mascota cuadrada + wordmark */}
          <a href="#inicio" className="flex items-center gap-2 group shrink-0">
            <img
              src="/logo_mascota-100w.webp"
              srcSet="/logo_mascota-100w.webp 1x, /logo_mascota-480w.webp 2x"
              alt="Burguerama mascota"
              width="44" height="44"
              className="w-10 h-10 lg:w-11 lg:h-11 object-cover border-2 border-yellow-400 group-hover:border-orange-500 transition-all shrink-0"
            />
            {/* Wordmark logo — fondo negro natural sobre header negro */}
            <img
              src="/logo-200w.webp"
              srcSet="/logo-200w.webp 1x, /logo-480w.webp 2x"
              alt="Burguerama"
              width="160" height="68"
              className="h-8 lg:h-9 w-auto object-contain"
              style={{ maxWidth: '160px' }}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-7">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href}
                className="text-gray-300 hover:text-yellow-400 transition-colors font-['VT323'] text-lg lg:text-xl tracking-widest relative group whitespace-nowrap">
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <span className="hidden xl:block text-gray-600 font-['VT323'] text-base whitespace-nowrap">
              HI-SCORE: 99999
            </span>
            <PixelButton size="small"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>
              PLAY NOW →
            </PixelButton>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white text-2xl hover:text-orange-500 transition-colors p-2 shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black border-t-2 border-orange-500">
          <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href}
                className="text-white hover:text-yellow-400 font-['VT323'] text-2xl tracking-widest py-3 border-b border-gray-800 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}>
                <span className="text-orange-500 text-sm">▶</span>
                {label}
              </a>
            ))}
            <div className="pt-3">
              <PixelButton size="large" onClick={() => {
                setIsMenuOpen(false);
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                PLAY NOW →
              </PixelButton>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
