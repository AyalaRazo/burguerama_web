import React, { useState } from 'react';

const allPhotos = [
  "/burgers/galeria/burger_galeria_01.jpg",
  "/burgers/galeria/burger_galeria_02.jpg",
  "/burgers/galeria/burger_galeria_03.jpg",
  "/burgers/galeria/burger_galeria_04.jpg",
  "/burgers/galeria/burger_galeria_05.jpg",
  "/burgers/galeria/burger_galeria_06.jpg",
  "/burgers/galeria/burger_galeria_07.jpg",
  "/burgers/galeria/burger_galeria_08.jpg",
  "/burgers/galeria/burger_galeria_09.jpg",
  "/burgers/galeria/burger_galeria_10.jpg",
  "/burgers/galeria/burger_galeria_11.jpg",
  "/burgers/galeria/burger_galeria_12.jpg",
  "/burgers/galeria/burger_galeria_13.jpg",
  "/burgers/galeria/burger_galeria_14.jpg",
  "/burgers/galeria/burger_galeria_15.jpg",
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (src) => setLightbox(src);
  const closeLightbox = () => setLightbox(null);

  return (
    <section className="py-20 bg-gray-950 border-t-4 border-orange-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #F97316 1px, transparent 1px), radial-gradient(circle at 75% 75%, #FBBF24 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-400/10 border-2 border-yellow-400/30 px-4 py-2 mb-4">
            <span className="font-['VT323'] text-yellow-400 text-xl tracking-widest">📸 GALERÍA</span>
          </div>
          <h2 className="font-['Press_Start_2P'] text-3xl md:text-4xl text-yellow-400 leading-tight mb-2"
            style={{ textShadow: '0 0 20px rgba(251,191,36,0.3)' }}>
            SCREENSHOT
          </h2>
          <h2 className="font-['Press_Start_2P'] text-3xl md:text-4xl text-orange-500 leading-tight"
            style={{ textShadow: '0 0 20px rgba(249,115,22,0.3)' }}>
            MODE
          </h2>
          <p className="font-['VT323'] text-gray-400 text-2xl mt-3">
            Haz clic en cualquier imagen para verla completa
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {allPhotos.map((src, i) => (
            <div key={i}
              className="break-inside-avoid border-2 border-gray-700 hover:border-orange-500 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] relative group"
              style={{ boxShadow: '2px 2px 0px rgba(249,115,22,0.2)' }}
              onClick={() => openLightbox(src)}
            >
              <img
                src={src}
                alt={`Hamburguesa smash Burguerama Mexicali — foto ${i + 1}`}
                className="w-full object-cover block group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Scanlines */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 2px, transparent 2px, transparent 4px)' }} />
              {/* Expand icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                <span className="font-['Press_Start_2P'] text-white text-xs bg-orange-500/80 px-2 py-1">[ ZOOM ]</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh] border-4 border-yellow-400"
            style={{ boxShadow: '0 0 60px rgba(251,191,36,0.4)' }}
            onClick={e => e.stopPropagation()}
          >
            <img src={lightbox} alt="Ampliada" className="max-h-[85vh] max-w-full object-contain block" />
            {/* Scanlines */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 2px, transparent 2px, transparent 4px)' }} />
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 bg-orange-500 border-2 border-orange-700 text-white font-['Press_Start_2P'] text-xs px-2 py-1 hover:bg-orange-600 transition-colors"
            >
              ✕ ESC
            </button>
          </div>
          <p className="absolute bottom-4 font-['Press_Start_2P'] text-gray-600 text-xs animate-blink">
            CLICK FUERA PARA CERRAR
          </p>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
