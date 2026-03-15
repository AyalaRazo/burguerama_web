import React, { useState, useCallback } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroSection from './components/Home/HeroSection';
import MenuGrid from './components/Home/MenuGrid';
import MenuCardSection from './components/Home/MenuCardSection';
import WingsHotDogsSection from './components/Home/WingsHotDogsSection';
import VersusSection from './components/Home/VersusSection';
import PowerUpsSection from './components/Home/PowerUpsSection';
import AboutSection from './components/Home/AboutSection';
import GallerySection from './components/Home/GallerySection';
import ReviewsSection from './components/Home/ReviewsSection';
import LocationSection from './components/Home/LocationSection';
import useKonamiCode from './hooks/useKonamiCode';

function App() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const activateKonami = useCallback(() => {
    setShowEasterEgg(true);
    setTimeout(() => setShowEasterEgg(false), 5000);
  }, []);

  useKonamiCode(activateKonami);

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MenuGrid />
        <WingsHotDogsSection />
        <VersusSection />
        <PowerUpsSection />
        <MenuCardSection />
        <AboutSection />
        <GallerySection />
        <ReviewsSection />
        <LocationSection />
      </main>
      <Footer />

      {/* Easter Egg — Código Konami */}
      {showEasterEgg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="bg-gray-900 border-8 border-yellow-400 p-10 text-center max-w-md mx-4 relative"
            style={{ boxShadow: '0 0 60px rgba(251,191,36,0.8), 12px 12px 0px rgba(249,115,22,0.5)' }}>
            <div className="absolute top-0 left-0 w-6 h-6 bg-yellow-400"></div>
            <div className="absolute top-0 right-0 w-6 h-6 bg-yellow-400"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 bg-orange-500"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-orange-500"></div>
            <div className="text-6xl mb-4 animate-bounce">🎮</div>
            <h2 className="font-['Press_Start_2P'] text-yellow-400 text-xl mb-4 animate-glitch">¡KONAMI CODE!</h2>
            <p className="font-['VT323'] text-green-400 text-3xl mb-2">↑↑↓↓←→←→BA</p>
            <p className="font-['VT323'] text-white text-2xl mb-6">¡DESBLOQUEASTE EL MODO SECRETO!</p>
            <div className="bg-orange-500 border-4 border-orange-700 p-4 mb-4">
              <p className="font-['Press_Start_2P'] text-white text-xs leading-relaxed">
                🍔 10% DESCUENTO<br />
                <span className="text-yellow-300 text-xs">EN TU PRÓXIMA VISITA</span>
              </p>
            </div>
            <p className="font-['VT323'] text-gray-500 text-xl">Menciona "KONAMI" al pedir. Válido hoy.</p>
            <p className="font-['Press_Start_2P'] text-xs text-gray-700 mt-4 animate-blink">AUTO-CERRANDO...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
