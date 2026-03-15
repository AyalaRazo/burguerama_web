import React, { useState, useRef, useCallback, useEffect } from 'react';

const SCALE_MIN = 1;
const SCALE_MAX = 5;
const SCALE_STEP = 0.3;

const MenuCardSection = () => {
  const [zoomed, setZoomed]     = useState(null);
  const [scale, setScale]       = useState(1);
  const [pos, setPos]           = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const dragStart  = useRef(null);
  const posRef     = useRef({ x: 0, y: 0 });
  const scaleRef   = useRef(1);
  const pinchRef   = useRef(null);
  const imgWrapRef = useRef(null);

  const cards = [
    { src: '/menu-1.png', label: 'CARTA 01', sub: 'Hamburguesas · Alitas y Boneless · Hot Dogs' },
    { src: '/menu-2.png', label: 'CARTA 02', sub: 'Fries Invaders · Charola Gamer · Malteadas · Bebidas · Extras' },
  ];

  /* ── helpers ───────────────────────────────────────────── */
  const clampPos = useCallback((x, y, s) => {
    const el = imgWrapRef.current;
    if (!el) return { x, y };
    const maxX = (el.offsetWidth  * (s - 1)) / 2;
    const maxY = (el.offsetHeight * (s - 1)) / 2;
    return {
      x: Math.max(-maxX, Math.min(maxX, x)),
      y: Math.max(-maxY, Math.min(maxY, y)),
    };
  }, []);

  const applyScale = useCallback((next) => {
    const s = Math.max(SCALE_MIN, Math.min(SCALE_MAX, next));
    const clamped = clampPos(posRef.current.x, posRef.current.y, s);
    scaleRef.current  = s;
    posRef.current    = clamped;
    setScale(s);
    setPos(clamped);
  }, [clampPos]);

  const resetView = useCallback(() => {
    scaleRef.current = 1;
    posRef.current   = { x: 0, y: 0 };
    setScale(1);
    setPos({ x: 0, y: 0 });
  }, []);

  const openLightbox = (i) => {
    setZoomed(i);
    resetView();
  };

  const closeLightbox = () => {
    setZoomed(null);
    resetView();
  };

  /* ── keyboard ──────────────────────────────────────────── */
  useEffect(() => {
    if (zoomed === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === '+' || e.key === '=') applyScale(scaleRef.current + SCALE_STEP);
      if (e.key === '-')                  applyScale(scaleRef.current - SCALE_STEP);
      if (e.key === '0')                  resetView();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoomed, applyScale, resetView]); // eslint-disable-line

  /* ── mouse wheel ───────────────────────────────────────── */
  const onWheel = useCallback((e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? SCALE_STEP : -SCALE_STEP;
    applyScale(scaleRef.current + delta);
  }, [applyScale]);

  /* ── mouse drag ────────────────────────────────────────── */
  const onMouseDown = useCallback((e) => {
    if (scaleRef.current <= 1) return;
    e.preventDefault();
    setDragging(true);
    dragStart.current = { x: e.clientX - posRef.current.x, y: e.clientY - posRef.current.y };
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!dragStart.current) return;
    const raw = { x: e.clientX - dragStart.current.x, y: e.clientY - dragStart.current.y };
    const clamped = clampPos(raw.x, raw.y, scaleRef.current);
    posRef.current = clamped;
    setPos(clamped);
  }, [clampPos]);

  const onMouseUp = useCallback(() => {
    dragStart.current = null;
    setDragging(false);
  }, []);

  /* ── touch pinch + pan ─────────────────────────────────── */
  const onTouchStart = useCallback((e) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      pinchRef.current = { dist: Math.hypot(dx, dy), scale: scaleRef.current };
      dragStart.current = null;
    } else if (e.touches.length === 1 && scaleRef.current > 1) {
      dragStart.current = {
        x: e.touches[0].clientX - posRef.current.x,
        y: e.touches[0].clientY - posRef.current.y,
      };
    }
  }, []);

  const onTouchMove = useCallback((e) => {
    e.preventDefault();
    if (e.touches.length === 2 && pinchRef.current) {
      const dx   = e.touches[0].clientX - e.touches[1].clientX;
      const dy   = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const next = pinchRef.current.scale * (dist / pinchRef.current.dist);
      applyScale(next);
    } else if (e.touches.length === 1 && dragStart.current) {
      const raw = {
        x: e.touches[0].clientX - dragStart.current.x,
        y: e.touches[0].clientY - dragStart.current.y,
      };
      const clamped = clampPos(raw.x, raw.y, scaleRef.current);
      posRef.current = clamped;
      setPos(clamped);
    }
  }, [applyScale, clampPos]);

  const onTouchEnd = useCallback((e) => {
    if (e.touches.length < 2) pinchRef.current = null;
    if (e.touches.length === 0) dragStart.current = null;
  }, []);

  /* ── render ────────────────────────────────────────────── */
  return (
    <section
      id="carta"
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a0533 0%, #2d1b4e 25%, #1e2a6e 60%, #0d1b3e 100%)' }}
    >
      {/* Stripe decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #e8a598 0px, #e8a598 2px, transparent 2px, transparent 28px)' }} />

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,110,175,0.18) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(100,149,237,0.18) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 mb-4 border-2"
            style={{ borderColor: '#c46eaf', background: 'rgba(196,110,175,0.12)' }}>
            <span className="font-['VT323'] text-xl tracking-widest" style={{ color: '#f0b8d8' }}>
              📋 GAME SELECT — ELIGE TU NIVEL
            </span>
          </div>
          <h2 className="font-['Press_Start_2P'] text-3xl md:text-4xl mb-2 leading-tight"
            style={{ color: '#f5cba7', textShadow: '0 0 24px rgba(245,203,167,0.5)' }}>
            CARTA DEL
          </h2>
          <h2 className="font-['Press_Start_2P'] text-3xl md:text-4xl leading-tight"
            style={{ color: '#c46eaf', textShadow: '0 0 24px rgba(196,110,175,0.5)' }}>
            MENÚ 🗂️
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map(({ src, label, sub }, i) => (
            <div key={i} className="relative group cursor-pointer" onClick={() => openLightbox(i)}>
              {/* Glow border */}
              <div className="absolute -inset-0.5 rounded-none opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: i === 0
                    ? 'linear-gradient(135deg, #c46eaf, #7b5ea7, #4a6dd4)'
                    : 'linear-gradient(135deg, #f5cba7, #e8915a, #c46eaf)',
                  filter: 'blur(4px)',
                }} />

              <div className="relative overflow-hidden border-4"
                style={{
                  borderColor: i === 0 ? '#7b5ea7' : '#e8915a',
                  background: '#0d0820',
                  boxShadow: i === 0
                    ? '8px 8px 0px rgba(123,94,167,0.4)'
                    : '8px 8px 0px rgba(232,145,90,0.4)',
                }}>
                {/* Header bar */}
                <div className="flex items-center justify-between px-4 py-2 border-b-2"
                  style={{
                    background: i === 0
                      ? 'linear-gradient(90deg, #2d1b4e, #1e2a6e)'
                      : 'linear-gradient(90deg, #3d1a0a, #2d1b4e)',
                    borderColor: i === 0 ? '#7b5ea7' : '#e8915a',
                  }}>
                  <span className="font-['Press_Start_2P'] text-xs" style={{ color: i === 0 ? '#c4a3e8' : '#f5cba7' }}>
                    {label}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: '#7fd48f' }} />
                    <span className="font-['Press_Start_2P'] text-xs" style={{ color: '#7fd48f' }}>VER</span>
                  </div>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <img src={src} alt={label}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    style={{ background: '#0d0820' }} />
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.07) 0px, rgba(0,0,0,0.07) 1px, transparent 1px, transparent 4px)' }} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: 'rgba(13,8,32,0.5)' }}>
                    <div className="border-2 px-4 py-2" style={{ borderColor: '#f0b8d8', background: 'rgba(13,8,32,0.8)' }}>
                      <span className="font-['Press_Start_2P'] text-xs" style={{ color: '#f0b8d8' }}>🔍 AMPLIAR</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-4 py-3 border-t-2"
                  style={{ background: 'rgba(13,8,32,0.9)', borderColor: i === 0 ? '#7b5ea7' : '#e8915a' }}>
                  <p className="font-['VT323'] text-lg" style={{ color: '#d4b8e8' }}>{sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-['VT323'] text-xl mt-8 animate-blink" style={{ color: '#9b7eb8' }}>
          — HAZ CLIC PARA VER EN DETALLE —
        </p>
      </div>

      {/* ── LIGHTBOX ──────────────────────────────────────── */}
      {zoomed !== null && (
        <div
          className="fixed inset-0 z-[200] flex flex-col"
          style={{ background: 'rgba(13,8,32,0.97)' }}
        >
          {/* Toolbar */}
          <div
            className="flex items-center justify-between px-4 py-2 border-b-2 shrink-0"
            style={{
              background: zoomed === 0
                ? 'linear-gradient(90deg, #2d1b4e, #1e2a6e)'
                : 'linear-gradient(90deg, #3d1a0a, #2d1b4e)',
              borderColor: zoomed === 0 ? '#7b5ea7' : '#e8915a',
            }}
          >
            <span className="font-['Press_Start_2P'] text-xs" style={{ color: '#f5cba7' }}>
              {cards[zoomed].label}
            </span>

            {/* Zoom controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => applyScale(scaleRef.current - SCALE_STEP)}
                className="font-['Press_Start_2P'] text-sm w-8 h-8 border-2 flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ borderColor: '#7b5ea7', color: '#c4a3e8', background: 'rgba(123,94,167,0.2)' }}
              >−</button>

              <span
                className="font-['Press_Start_2P'] text-xs min-w-[52px] text-center"
                style={{ color: '#f0b8d8' }}
              >
                {Math.round(scale * 100)}%
              </span>

              <button
                onClick={() => applyScale(scaleRef.current + SCALE_STEP)}
                className="font-['Press_Start_2P'] text-sm w-8 h-8 border-2 flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ borderColor: '#7b5ea7', color: '#c4a3e8', background: 'rgba(123,94,167,0.2)' }}
              >+</button>

              <button
                onClick={resetView}
                className="font-['Press_Start_2P'] text-xs px-3 h-8 border-2 hover:opacity-80 transition-opacity"
                style={{ borderColor: '#e8915a', color: '#f5cba7', background: 'rgba(232,145,90,0.15)' }}
              >RESET</button>

              <button
                onClick={closeLightbox}
                className="font-['Press_Start_2P'] text-xs px-3 h-8 border-2 hover:opacity-80 transition-opacity"
                style={{ borderColor: '#c46eaf', color: '#f0b8d8', background: 'rgba(196,110,175,0.15)' }}
              >✕ ESC</button>
            </div>
          </div>

          {/* Hint bar */}
          <div className="text-center py-1 shrink-0"
            style={{ background: 'rgba(13,8,32,0.8)' }}>
            <span className="font-['VT323'] text-base" style={{ color: '#6b5580' }}>
              Rueda del ratón para zoom · Arrastra para mover · Pellizca en móvil
            </span>
          </div>

          {/* Image viewport */}
          <div
            ref={imgWrapRef}
            className="flex-1 overflow-hidden flex items-center justify-center"
            style={{ cursor: scale > 1 ? (dragging ? 'grabbing' : 'grab') : 'default' }}
            onWheel={onWheel}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={cards[zoomed].src}
              alt={cards[zoomed].label}
              draggable={false}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                transform: `scale(${scale}) translate(${pos.x / scale}px, ${pos.y / scale}px)`,
                transformOrigin: 'center center',
                transition: dragging ? 'none' : 'transform 0.15s ease',
                userSelect: 'none',
                touchAction: 'none',
              }}
            />
          </div>

          {/* Glow border bottom */}
          <div className="h-1 shrink-0"
            style={{
              background: zoomed === 0
                ? 'linear-gradient(90deg, #c46eaf, #7b5ea7, #4a6dd4)'
                : 'linear-gradient(90deg, #f5cba7, #e8915a, #c46eaf)',
            }} />
        </div>
      )}
    </section>
  );
};

export default MenuCardSection;
