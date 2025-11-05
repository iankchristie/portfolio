import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updatePosition = () => {
      setScrollPosition(window.scrollY);
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick);
    updatePosition(); // Set initial position

    return () => window.removeEventListener('scroll', requestTick);
  }, []);

  return scrollPosition;
}
