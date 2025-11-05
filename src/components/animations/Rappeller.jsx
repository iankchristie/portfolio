import { useState, useEffect, useRef } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export function Rappeller() {
  const scrollPosition = useScrollPosition();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(150);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    // Trigger animation after 500ms (matching original behavior)
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const targetPosition = scrollPosition + 150;

    const animate = () => {
      setCurrentPosition(prev => {
        const diff = targetPosition - prev;
        const speed = diff * 0.1; // Smooth following with 10% lerp

        // Stop animating if we're close enough
        if (Math.abs(diff) < 0.5) {
          return targetPosition;
        }

        return prev + speed;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [scrollPosition]);

  const rappellerStyle = {
    top: `${currentPosition}px`,
    transition: 'none'
  };

  return (
    <img
      src="/rappeller.png"
      alt="Rappeller character"
      className={`rappeller ${hasLoaded ? 'animate-in' : ''}`}
      style={rappellerStyle}
      id="rappeller"
    />
  );
}
