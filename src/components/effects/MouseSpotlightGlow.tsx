import React, { useEffect, useRef, useState } from 'react';

interface MouseSpotlightGlowProps {
  /**
   * Spotlight size in pixels. Default is 640px.
   */
  size?: number;
  /**
   * Additional container classes
   */
  className?: string;
}

export const MouseSpotlightGlow: React.FC<MouseSpotlightGlowProps> = ({
  size = 640,
  className = '',
}) => {
  const [isTouch, setIsTouch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const glowWrapperRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);
  const isRunning = useRef(false);

  useEffect(() => {
    // Detect touch-first or coarse pointer devices
    const checkTouch = () => {
      const hasCoarse = window.matchMedia('(pointer: coarse)').matches;
      const hasTouchEvents = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      return hasCoarse || hasTouchEvents;
    };

    const touchDevice = checkTouch();
    setIsTouch(touchDevice);

    if (touchDevice) {
      // Touch fallback: static ambient light, no continuous mouse tracking
      return;
    }

    const animate = () => {
      // Smooth lerp (linear interpolation) with 0.12 damping factor
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;

      currentPos.current.x += dx * 0.12;
      currentPos.current.y += dy * 0.12;

      if (glowWrapperRef.current) {
        // Center the spotlight container on the interpolated coordinate
        const x = currentPos.current.x - size / 2;
        const y = currentPos.current.y - size / 2;
        glowWrapperRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      // If motion is still happening, keep looping; otherwise sleep until next move
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        rafId.current = requestAnimationFrame(animate);
      } else {
        isRunning.current = false;
        rafId.current = null;
      }
    };

    const startAnimation = () => {
      if (!isRunning.current) {
        isRunning.current = true;
        rafId.current = requestAnimationFrame(animate);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
        // Initialize position immediately on first move to prevent long sliding
        if (currentPos.current.x < -500) {
          currentPos.current.x = e.clientX;
          currentPos.current.y = e.clientY;
          if (glowWrapperRef.current) {
            const x = currentPos.current.x - size / 2;
            const y = currentPos.current.y - size / 2;
            glowWrapperRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          }
        }
      }

      startAnimation();
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
    };

    const handlePointerEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);
    document.addEventListener('mouseenter', handlePointerEnter);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      document.removeEventListener('mouseenter', handlePointerEnter);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [size, isVisible]);

  // Touch fallback: gentle static warm ambient aura
  if (isTouch) {
    return (
      <div
        className={`fixed inset-0 pointer-events-none overflow-hidden z-20 ${className}`}
        aria-hidden="true"
      >
        {/* Soft static warm gold glow on top-right */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-35"
          style={{
            background:
              'radial-gradient(circle, rgba(212, 155, 68, 0.28) 0%, rgba(243, 201, 120, 0.12) 45%, transparent 75%)',
          }}
        />
        {/* Subtle static forest/gold ambient accent on middle-left */}
        <div
          className="absolute top-1/3 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{
            background:
              'radial-gradient(circle, rgba(27, 56, 43, 0.18) 0%, rgba(212, 155, 68, 0.1) 50%, transparent 80%)',
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={`fixed inset-0 pointer-events-none overflow-hidden z-20 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      aria-hidden="true"
    >
      {/* GPU Accelerated Moving Container */}
      <div
        ref={glowWrapperRef}
        className="absolute top-0 left-0 will-change-transform"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: 'translate3d(-1000px, -1000px, 0)',
        }}
      >
        {/* Primary Radial Gold Halo */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `
              radial-gradient(
                circle closest-side,
                rgba(212, 155, 68, 0.14) 0%,
                rgba(243, 201, 120, 0.08) 30%,
                rgba(27, 56, 43, 0.03) 60%,
                transparent 78%
              )
            `,
            filter: 'blur(36px)',
          }}
        />

        {/* Central Warm Gold Sheen */}
        <div
          className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full opacity-60"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 235, 195, 0.2) 0%, rgba(212, 155, 68, 0.08) 50%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      </div>
    </div>
  );
};

export default MouseSpotlightGlow;
