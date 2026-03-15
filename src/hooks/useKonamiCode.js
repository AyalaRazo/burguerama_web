import { useState, useEffect } from 'react';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

const useKonamiCode = (callback) => {
  const [sequence, setSequence] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setSequence(prev => {
        const newSequence = [...prev, e.key].slice(-KONAMI_CODE.length);
        if (JSON.stringify(newSequence) === JSON.stringify(KONAMI_CODE)) {
          callback();
          return [];
        }
        return newSequence;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [callback]);

  return sequence;
};

export default useKonamiCode;
