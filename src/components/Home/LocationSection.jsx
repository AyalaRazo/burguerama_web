import React, { useState } from 'react';
import PixelButton from '../UI/PixelButton';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from '../UI/SocialIcons';
import DeliveryBadges from '../UI/DeliveryBadges';

const LocationSection = () => {
  const [activeDay, setActiveDay] = useState(null);

  const schedule = [
    { day: 'LUN', status: 'OFF', icon: '💤', hours: null },
    { day: 'MAR', status: 'ON',  icon: '🎮', hours: '2:00 PM – 10:00 PM', location: 'Av. P. Elías Calles 465' },
    { day: 'MIÉ', status: 'ON',  icon: '🎮', hours: '2:00 PM – 10:00 PM', location: 'Av. P. Elías Calles 465' },
    { day: 'JUE', status: 'ON',  icon: '🎮', hours: '2:00 PM – 10:00 PM', location: 'Av. P. Elías Calles 465' },
    { day: 'VIE', status: 'ON',  icon: '🎮', hours: '2:00 PM – 10:00 PM', location: 'Av. P. Elías Calles 465' },
    { day: 'SÁB', status: 'ON',  icon: '🎮', hours: '2:00 PM – 10:00 PM', location: 'Av. P. Elías Calles 465' },
    { day: 'DOM', status: 'ON',  icon: '🎮', hours: '2:00 PM – 10:00 PM', location: 'Av. P. Elías Calles 465' },
  ];

  const locations = [
    {
      name: "BURGUERAMA",
      address: "Av. Gral. Plutarco Elías Calles 465",
      city: "Sta. Teresa, Mexicali B.C. 21270",
      day: "Martes – Domingo",
      hours: "2:00 PM – 10:00 PM",
      phone: "686 184 0640",
      icon: "🎮",
      active: true,
      mapsUrl: "https://maps.app.goo.gl/eDZV2E2Yv2BpRRYu6"
    }
  ];

  return (
    <section id="ubicacion" className="py-20 bg-[#0A0A0A] border-t-4 border-orange-500 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-500/10 border-2 border-orange-500/30 px-4 py-2 mb-4">
            <span className="font-['VT323'] text-orange-400 text-xl tracking-widest">📍 FIND YOUR SPAWN POINT</span>
          </div>
          <h2
            className="font-['Press_Start_2P'] text-3xl md:text-4xl text-yellow-400 mb-2 leading-tight"
            style={{ textShadow: '0 0 20px rgba(251,191,36,0.3)' }}
          >
            MAPA DEL
          </h2>
          <h2
            className="font-['Press_Start_2P'] text-3xl md:text-4xl text-orange-500 mb-4 leading-tight"
            style={{ textShadow: '0 0 20px rgba(249,115,22,0.3)' }}
          >
            NIVEL 🗺️
          </h2>
        </div>

        {/* Weekly Schedule */}
        <div className="bg-gray-900 border-4 border-yellow-400 p-6 mb-10"
          style={{ boxShadow: '6px 6px 0px rgba(251,191,36,0.3)' }}
        >
          <h3 className="font-['Press_Start_2P'] text-sm text-orange-400 mb-4 text-center">
            HORARIO SEMANAL
          </h3>
          <div className="grid grid-cols-7 gap-2">
            {schedule.map(({ day, status, icon, hours, location }) => (
              <button
                key={day}
                onClick={() => setActiveDay(activeDay === day ? null : day)}
                className={`
                  p-2 text-center border-2 transition-all
                  ${status === 'ON'
                    ? activeDay === day
                      ? 'bg-orange-500 border-orange-700 text-white scale-110'
                      : 'bg-gray-800 border-green-500 hover:border-orange-500 hover:scale-105 cursor-pointer'
                    : 'bg-gray-950 border-gray-800 opacity-40 cursor-not-allowed'
                  }
                `}
              >
                <span className="font-['Press_Start_2P'] text-xs block mb-1 text-gray-300">{day}</span>
                <span className="text-xl block">{icon}</span>
                {status === 'ON' && hours && (
                  <span className="font-['VT323'] text-xs text-green-400 block mt-1">OPEN</span>
                )}
              </button>
            ))}
          </div>
          {activeDay && (() => {
            const day = schedule.find(s => s.day === activeDay);
            return day?.status === 'ON' && (
              <div className="mt-4 p-3 bg-orange-500/10 border-2 border-orange-500 text-center">
                <p className="font-['VT323'] text-yellow-400 text-2xl">{day.location}</p>
                <p className="font-['VT323'] text-gray-300 text-xl">{day.hours}</p>
              </div>
            );
          })()}
        </div>

        {/* Location card */}
        <div className="mb-10">
          {locations.map(({ name, address, city, day, hours, phone, icon, mapsUrl }) => (
            <div
              key={name}
              className="bg-gray-900 border-4 border-green-500 p-6 relative"
              style={{ boxShadow: '6px 6px 0px rgba(34,197,94,0.3)' }}
            >
              {/* Status indicator */}
              <div className="absolute top-3 right-3 flex items-center gap-2 px-3 py-1 border border-green-500 bg-green-500/10">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-['Press_Start_2P'] text-xs text-green-400">SPAWN POINT</span>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-6">
                  <span className="text-6xl shrink-0">{icon}</span>
                  <div className="flex-1 space-y-2 pr-28">
                    <h4 className="font-['Press_Start_2P'] text-lg text-yellow-400">{name}</h4>
                    <p className="font-['VT323'] text-gray-200 text-2xl flex items-start gap-2">
                      <span className="mt-0.5">📍</span>
                      <span>{address}<br /><span className="text-gray-400">{city}</span></span>
                    </p>
                    <p className="font-['VT323'] text-gray-400 text-xl flex items-center gap-2">
                      <span>📅</span><span className="text-orange-400">{day}</span>
                    </p>
                    <p className="font-['VT323'] text-gray-400 text-xl flex items-center gap-2">
                      <span>🕐</span><span className="text-orange-400">{hours}</span>
                    </p>
                    <a href="tel:+526861840640"
                      className="font-['VT323'] text-gray-400 hover:text-orange-400 text-xl flex items-center gap-2 transition-colors w-fit">
                      <span>📞</span><span>{phone}</span>
                    </a>

                    {/* Service distinctions */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {[
                        { label: 'Contactless Delivery', icon: '🛵' },
                        { label: 'Takeout',              icon: '🥡' },
                        { label: 'Dine-in',              icon: '🪑' },
                        { label: 'In-store Pickup',      icon: '🏪' },
                        { label: 'Curbside Pickup',      icon: '🚗' },
                      ].map(({ label, icon }) => (
                        <div key={label}
                          className="flex items-center gap-1.5 bg-black/50 border border-gray-700 px-2.5 py-1">
                          <span className="text-sm">{icon}</span>
                          <span className="font-['VT323'] text-gray-400 text-lg leading-none">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                    <PixelButton size="large">📍 VER EN GOOGLE MAPS</PixelButton>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps embed */}
        <div className="relative mb-10" style={{ boxShadow: '8px 8px 0px rgba(249,115,22,0.4)' }}>
          {/* Pixel border frame */}
          <div className="border-4 border-yellow-400 overflow-hidden">
            {/* Header bar */}
            <div className="bg-gray-900 border-b-2 border-yellow-400 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-['Press_Start_2P'] text-xs text-orange-400">MINIMAP</span>
                <span className="font-['VT323'] text-gray-500 text-lg">— Mexicali, B.C.</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 animate-pulse rounded-full"></div>
                <span className="font-['Press_Start_2P'] text-xs text-green-400">LIVE</span>
              </div>
            </div>

            {/* Actual Google Maps iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9502.695815184295!2d-115.45061896274257!3d32.640536790089925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d7715d1e11aba5%3A0x9f333b115cbf6eb1!2sBurguerama!5e0!3m2!1ses!2smx!4v1773298229393!5m2!1ses!2smx"
              width="100%"
              height="450"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Burguerama en Google Maps"
            />
          </div>

          {/* Corner pixel decorations */}
          <div className="absolute top-0 left-0 w-4 h-4 bg-yellow-400 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-4 h-4 bg-yellow-400 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-orange-500 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-orange-500 pointer-events-none"></div>
        </div>

        {/* Delivery + Social */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Delivery platforms */}
          <div className="bg-gray-900 border-4 border-orange-500 p-6 text-center"
            style={{ boxShadow: '4px 4px 0px rgba(249,115,22,0.3)' }}>
            <p className="font-['Press_Start_2P'] text-xs text-orange-400 mb-1">🛵 DELIVERY</p>
            <p className="font-['VT323'] text-gray-400 text-xl mb-4">Pide desde casa vía:</p>
            <DeliveryBadges size="small" label={false} />
          </div>

          {/* Social links */}
          <div className="bg-gray-900 border-4 border-yellow-400 p-6 text-center"
            style={{ boxShadow: '4px 4px 0px rgba(251,191,36,0.3)' }}>
            <p className="font-['Press_Start_2P'] text-xs text-yellow-400 mb-1">📲 SÍGUENOS</p>
            <p className="font-['VT323'] text-gray-400 text-xl mb-4">Entérate de todo en redes</p>
            <div className="flex justify-center gap-4">
              <a href="https://www.instagram.com/burgueramamxl/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-4 py-2 border-b-4 border-pink-800 hover:border-b-0 hover:translate-y-1 transition-all font-['Press_Start_2P'] text-xs text-white">
                <InstagramIcon className="w-4 h-4" />
                IG
              </a>
              <a href="https://www.facebook.com/profile.php?id=61574466674944" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 px-4 py-2 border-b-4 border-blue-900 hover:border-b-0 hover:translate-y-1 transition-all font-['Press_Start_2P'] text-xs text-white">
                <FacebookIcon className="w-4 h-4" />
                FB
              </a>
              <a href="https://wa.me/526861840640" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 px-4 py-2 border-b-4 border-green-900 hover:border-b-0 hover:translate-y-1 transition-all font-['Press_Start_2P'] text-xs text-white">
                <WhatsAppIcon className="w-4 h-4" />
                WA
              </a>
            </div>
            <p className="font-['Press_Start_2P'] text-xs text-orange-500 mt-4 animate-blink">
              @BURGUERAMAMXL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
