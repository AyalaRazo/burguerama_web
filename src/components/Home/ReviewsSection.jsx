import React, { useState, useEffect, useCallback } from 'react';

const reviews = [
  {
    name: "Carlos Méndez",
    initials: "CM",
    color: "from-orange-500 to-yellow-400",
    rating: 5,
    date: "hace 2 semanas",
    text: "La Final Boss es una locura total. Doble smash con esa cantidad de queso derretido… literalmente no puedes comerla de una manera elegante y no importa. Las mejores smash burgers de todo Mexicali, sin discusión. El truck por las noches se ve increíble con las luces naranjas.",
    highlight: "Final Boss 🏆",
    local: true,
  },
  {
    name: "Alejandra Ruiz",
    initials: "AR",
    color: "from-pink-500 to-rose-400",
    rating: 5,
    date: "hace 1 mes",
    text: "Fui con mi novio un viernes y la experiencia fue espectacular. El ambiente retro de videojuegos lo hace único en la ciudad. Pedimos las wings Buffalo y los chili dogs — todo delicioso. Definitivamente volvemos cada semana. El servicio es muy amable y rápido.",
    highlight: "Wings Buffalo 🍗",
    local: false,
  },
  {
    name: "Miguel Torres",
    initials: "MT",
    color: "from-blue-500 to-cyan-400",
    rating: 5,
    date: "hace 3 semanas",
    text: "El Hollow Smash con pan negro es la burger más fotogénica que he probado en mucho tiempo. El sabor está a la altura: los pimientos asados con el queso brie son una combinación ganadora. Ya la he recomendado a todos mis amigos. Además puedes pedir por Uber Eats, muy conveniente.",
    highlight: "Hollow Smash 💀",
    local: true,
  },
  {
    name: "Fernanda Castillo",
    initials: "FC",
    color: "from-green-500 to-emerald-400",
    rating: 5,
    date: "hace 2 meses",
    text: "Primera visita y ya somos fans. Los precios son muy accesibles para la calidad que recibes. La mascota del truck y toda la decoración retro hacen que el lugar sea muy instagrameable. Las papas que vienen con las burgers están perfectas, crujientes por fuera y suaves por dentro.",
    highlight: "Super Mario Classic 🍄",
    local: false,
  },
  {
    name: "Roberto Espinoza",
    initials: "RE",
    color: "from-purple-500 to-violet-400",
    rating: 5,
    date: "hace 1 semana",
    text: "Pedí la Double Dragon y la Street Meat Fighter para comparar — las dos son brutales. La Meat Fighter con los jalapeños toreados te da ese kick de picante que uno busca. El personal siempre está de buen humor y la atención es de primera. El truck más cool de la frontera.",
    highlight: "Double Dragon 🐉",
    local: true,
  },
  {
    name: "Sofía Vega",
    initials: "SV",
    color: "from-amber-500 to-orange-400",
    rating: 5,
    date: "hace 5 días",
    text: "Pedí a domicilio por Didi Food y llegó en perfecto estado, caliente y bien empacado. La 8 Bit Beast con el pollo crujiente y el coleslaw morado es mi favorita absoluta. Ya es nuestro lugar de fin de semana con la familia. Los niños aman el tema de videojuegos retro.",
    highlight: "8 Bit Beast 🐉",
    local: false,
  },
];

const StarRating = ({ count = 5, filled = 5 }) => (
  <div className="flex gap-0.5" role="img" aria-label={`${filled} de ${count} estrellas`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className={`w-4 h-4 ${i < filled ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ReviewCard = ({ review, isActive }) => (
  <div
    className={`
      bg-gray-900 border-4 p-6 relative overflow-hidden flex flex-col h-full
      transition-all duration-300 cursor-default
      ${isActive ? 'border-yellow-400 shadow-[0_0_30px_rgba(251,191,36,0.35)]' : 'border-gray-700'}
    `}
  >
    {/* CRT scanlines */}
    <div className="absolute inset-0 pointer-events-none"
      style={{ background: 'repeating-linear-gradient(0deg,rgba(0,0,0,0.06) 0px,rgba(0,0,0,0.06) 2px,transparent 2px,transparent 4px)' }} />

    {/* Corner pixels */}
    <div className="absolute top-0 left-0 w-3 h-3 bg-yellow-400 opacity-60" />
    <div className="absolute top-0 right-0 w-3 h-3 bg-yellow-400 opacity-60" />
    <div className="absolute bottom-0 left-0 w-3 h-3 bg-orange-500 opacity-60" />
    <div className="absolute bottom-0 right-0 w-3 h-3 bg-orange-500 opacity-60" />

    {/* Header */}
    <div className="flex items-start gap-3 mb-4 relative z-10">
      {/* Avatar */}
      <div className={`w-12 h-12 rounded-none bg-gradient-to-br ${review.color} flex items-center justify-center shrink-0 border-2 border-white/20`}>
        <span className="font-['Press_Start_2P'] text-white text-xs">{review.initials}</span>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <p className="font-['Press_Start_2P'] text-xs text-white leading-normal">{review.name}</p>
          {review.local && (
            <span className="bg-green-500/20 border border-green-500 px-1.5 py-0.5 font-['VT323'] text-green-400 text-sm shrink-0">
              LOCAL
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 mt-1">
          <StarRating filled={review.rating} />
          <span className="font-['VT323'] text-gray-500 text-base">{review.date}</span>
        </div>
      </div>

      {/* Google Maps G logo */}
      <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" aria-label="Google Maps" fill="none">
        <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0z" fill="#fff" opacity=".1"/>
        <path d="M21.805 10.023H12v4.01h5.622c-.545 2.504-2.758 4.307-5.622 4.307a6.184 6.184 0 01-6.178-6.184 6.184 6.184 0 016.178-6.183c1.577 0 3.009.591 4.1 1.562l2.985-2.985A10.387 10.387 0 0012 2.157 9.998 9.998 0 002 12.157a9.998 9.998 0 0010 10c5.523 0 9.782-3.886 9.782-9.63 0-.645-.065-1.272-.188-1.877l.211-.627z" fill="#4285F4"/>
        <path d="M3.153 7.345l3.475 2.548A5.998 5.998 0 0112 5.973c1.577 0 3.009.591 4.1 1.562l2.985-2.985A10.387 10.387 0 0012 2.157c-3.7 0-6.945 2-8.847 5.188z" fill="#EA4335"/>
        <path d="M12 22.157a10.37 10.37 0 006.99-2.713l-3.23-2.733a6.17 6.17 0 01-3.76 1.286 6.184 6.184 0 01-5.91-4.307L2.62 16.2A9.993 9.993 0 0012 22.157z" fill="#34A853"/>
        <path d="M21.805 10.023H12v4.01h5.622a5.93 5.93 0 01-2.09 2.681l3.23 2.733C20.893 17.748 22 15.157 22 12.157c0-.645-.065-1.272-.188-1.877l-.007-.257z" fill="#FBBC05"/>
      </svg>
    </div>

    {/* Highlight badge */}
    <div className="relative z-10 mb-3">
      <span className="bg-orange-500/20 border border-orange-500/50 px-2 py-0.5 font-['VT323'] text-orange-400 text-lg">
        ★ {review.highlight}
      </span>
    </div>

    {/* Review text */}
    <p className="font-['VT323'] text-gray-300 text-xl leading-relaxed flex-1 relative z-10">
      "{review.text}"
    </p>
  </div>
);

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const visible = 3;
  const total = reviews.length;

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total]);
  const prev = () => setCurrent(c => (c - 1 + total) % total);

  useEffect(() => {
    if (!autoplay) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [autoplay, next]);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < visible; i++) {
      items.push(reviews[(current + i) % total]);
    }
    return items;
  };

  return (
    <section className="py-20 bg-[#0A0A0A] border-t-4 border-yellow-400 relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(249,115,22,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(249,115,22,0.04) 1px,transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-400/10 border-2 border-yellow-400/30 px-4 py-2 mb-4">
            <span className="font-['VT323'] text-yellow-400 text-xl tracking-widest">
              💬 LO QUE DICEN LOS PLAYERS
            </span>
          </div>
          <h2 className="font-['Press_Start_2P'] text-3xl md:text-4xl text-yellow-400 mb-2 leading-tight"
            style={{ textShadow: '0 0 20px rgba(251,191,36,0.3)' }}>
            RESEÑAS
          </h2>
          <h2 className="font-['Press_Start_2P'] text-3xl md:text-4xl text-orange-500 leading-tight"
            style={{ textShadow: '0 0 20px rgba(249,115,22,0.3)' }}>
            DE GOOGLE MAPS
          </h2>

          {/* Aggregate rating */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <div className="bg-gray-900 border-4 border-yellow-400 px-6 py-4 flex items-center gap-4"
              style={{ boxShadow: '4px 4px 0px rgba(251,191,36,0.3)' }}>
              {/* Big score */}
              <div className="text-center">
                <p className="font-['Press_Start_2P'] text-5xl text-yellow-400 leading-none">4.9</p>
                <div className="flex justify-center mt-2">
                  <StarRating filled={5} />
                </div>
              </div>
              <div className="border-l-2 border-gray-700 pl-4">
                {/* Rating bars */}
                {[
                  { stars: 5, pct: 92 },
                  { stars: 4, pct: 6  },
                  { stars: 3, pct: 2  },
                ].map(({ stars, pct }) => (
                  <div key={stars} className="flex items-center gap-2 mb-1">
                    <span className="font-['VT323'] text-gray-400 text-lg w-4 text-right">{stars}</span>
                    <svg className="w-3 h-3 text-yellow-400 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div className="w-24 h-2 bg-gray-800 border border-gray-700">
                      <div className="h-full bg-yellow-400" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="font-['VT323'] text-gray-500 text-base">{pct}%</span>
                  </div>
                ))}
                <p className="font-['VT323'] text-gray-500 text-lg mt-1">+50 reseñas</p>
              </div>
            </div>

            {/* Google Maps badge */}
            <a href="https://maps.app.goo.gl/eDZV2E2Yv2BpRRYu6"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-900 border-4 border-gray-700 hover:border-orange-500 px-5 py-4 transition-all duration-200 cursor-pointer group"
              style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.4)' }}>
              <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none" aria-label="Google Maps">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335"/>
                <circle cx="12" cy="9" r="2.5" fill="#fff"/>
              </svg>
              <div className="text-left">
                <p className="font-['Press_Start_2P'] text-xs text-white group-hover:text-orange-400 transition-colors leading-relaxed">
                  VER EN<br/>GOOGLE MAPS
                </p>
                <p className="font-['VT323'] text-gray-500 text-base mt-0.5">Deja tu reseña ★</p>
              </div>
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {getVisible().map((review, i) => (
              <ReviewCard key={`${review.name}-${i}`} review={review} isActive={i === 1} />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="bg-gray-900 border-4 border-gray-700 hover:border-yellow-400 hover:text-yellow-400 text-gray-400 w-12 h-12 flex items-center justify-center transition-all duration-200 font-['Press_Start_2P'] text-sm cursor-pointer"
              aria-label="Reseña anterior"
              style={{ boxShadow: '3px 3px 0px rgba(0,0,0,0.5)' }}
            >
              ◀
            </button>

            {/* Dots */}
            <div className="flex">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="flex items-center justify-center min-w-[44px] min-h-[44px] cursor-pointer"
                  aria-label={`Ir a reseña ${i + 1}`}
                  aria-current={i === current ? 'true' : undefined}
                >
                  <span className={`transition-all duration-200 block ${
                    i === current
                      ? 'w-6 h-3 bg-orange-500 border-2 border-orange-700'
                      : 'w-3 h-3 bg-gray-700 border-2 border-gray-600 hover:bg-gray-500'
                  }`} />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="bg-gray-900 border-4 border-gray-700 hover:border-yellow-400 hover:text-yellow-400 text-gray-400 w-12 h-12 flex items-center justify-center transition-all duration-200 font-['Press_Start_2P'] text-sm cursor-pointer"
              aria-label="Siguiente reseña"
              style={{ boxShadow: '3px 3px 0px rgba(0,0,0,0.5)' }}
            >
              ▶
            </button>
          </div>

          {/* Autoplay indicator */}
          <div className="flex justify-center mt-3">
            <p className="font-['VT323'] text-gray-700 text-lg">
              {autoplay ? '▶ AUTO' : '⏸ PAUSE'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
