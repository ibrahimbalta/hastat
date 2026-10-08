import React, { useRef, useState, useEffect } from 'react';

export interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /**
   * Maximum tilt angle in degrees. Default is 6.
   */
  maxTilt?: number;
  /**
   * 3D Perspective depth in px. Default is 1000.
   */
  perspective?: number;
  /**
   * Whether to display dynamic specular light sheen. Default is true.
   */
  glare?: boolean;
  /**
   * Maximum opacity of the specular glare reflection. Default is 0.22.
   */
  glareMaxOpacity?: number;
  /**
   * Scale factor on hover. Default is 1.02.
   */
  scale?: number;
  /**
   * Disable tilt effect (forces static rendering). Default is false.
   */
  disabled?: boolean;
  /**
   * Additional wrapper class names.
   */
  className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  maxTilt = 6,
  perspective = 1000,
  glare = true,
  glareMaxOpacity = 0.22,
  scale = 1.02,
  disabled = false,
  className = '',
  style,
  ...rest
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const isHovered = useRef(false);

  useEffect(() => {
    const checkTouch = () => {
      const hasCoarse = window.matchMedia('(pointer: coarse)').matches;
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      return hasCoarse || hasTouch;
    };
    setIsTouch(checkTouch());
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || isTouch || !cardRef.current) return;

    isHovered.current = true;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize coordinates (-1 to 1)
    const normX = (mouseX / rect.width) * 2 - 1;
    const normY = (mouseY / rect.height) * 2 - 1;

    // Calculate rotation angles
    const rotX = -normY * maxTilt;
    const rotY = normX * maxTilt;

    // Apply fast hardware-accelerated transform with zero transition delay while moving
    card.style.transition = 'transform 0.08s ease-out';
    card.style.transform = `perspective(${perspective}px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(${scale}, ${scale}, 1)`;

    // Update dynamic specular glare
    if (glare && glareRef.current) {
      glareRef.current.style.opacity = `${glareMaxOpacity}`;
      glareRef.current.style.background = `
        radial-gradient(
          circle 320px at ${mouseX}px ${mouseY}px,
          rgba(255, 255, 255, ${glareMaxOpacity}) 0%,
          rgba(243, 201, 120, ${glareMaxOpacity * 0.45}) 30%,
          rgba(212, 155, 68, ${glareMaxOpacity * 0.15}) 55%,
          transparent 75%
        )
      `;
    }
  };

  const handleMouseLeave = () => {
    if (disabled || isTouch || !cardRef.current) return;

    isHovered.current = false;
    const card = cardRef.current;

    // Smooth return transition
    card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
    card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

    if (glare && glareRef.current) {
      glareRef.current.style.transition = 'opacity 0.5s ease-out';
      glareRef.current.style.opacity = '0';
    }
  };

  const handleMouseEnter = () => {
    if (disabled || isTouch || !glareRef.current) return;
    if (glare) {
      glareRef.current.style.transition = 'opacity 0.2s ease-in';
    }
  };

  // On touch screens or when disabled, render standard container
  if (isTouch || disabled) {
    return (
      <div className={`relative ${className}`} style={style} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={`relative will-change-transform transform-gpu ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        ...style,
      }}
      {...rest}
    >
      {children}

      {/* Dynamic Specular Sheen Reflection */}
      {glare && (
        <div
          ref={glareRef}
          className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 z-30"
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default TiltCard;
