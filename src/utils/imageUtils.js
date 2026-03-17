/**
 * Returns a srcset string for a WebP image that has -480w and -800w variants.
 * Use for confirmed large photos (gallery, wings, hero, about, hot dogs).
 */
export function srcSet(path) {
  const base = path.replace(/\.webp$/, '');
  return `${base}-480w.webp 480w, ${base}-800w.webp 800w, ${path} 1400w`;
}

/**
 * Returns a srcset with only a 480w variant + original.
 * Use for images whose original is ≤800px wide (no -800w file generated).
 */
export function srcSetSmall(path) {
  const base = path.replace(/\.webp$/, '');
  return `${base}-480w.webp 480w, ${path} 800w`;
}
