import React, { useEffect, useRef } from 'react';

export interface BotanicalCanvasProps {
  /**
   * Additional container classes. Default is 'absolute inset-0 w-full h-full pointer-events-none'.
   */
  className?: string;
  /**
   * Total particle count (dust + leaves). Default is 42.
   */
  particleCount?: number;
  /**
   * Density factor for particle distribution. Default is 1.
   */
  density?: number;
}

interface GoldDustParticle {
  kind: 'dust';
  x: number;
  y: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulsePhase: number;
  speedX: number;
  speedY: number;
  swayAmp: number;
  swayFreq: number;
  color: string;
}

interface LeafParticle {
  kind: 'leaf';
  x: number;
  y: number;
  length: number;
  width: number;
  angle: number;
  angularVelocity: number;
  speedX: number;
  speedY: number;
  swayAmp: number;
  swayFreq: number;
  alpha: number;
  color: string;
  veinColor: string;
}

type Particle = GoldDustParticle | LeafParticle;

export const BotanicalCanvas: React.FC<BotanicalCanvasProps> = ({
  className = 'absolute inset-0 w-full h-full pointer-events-none',
  particleCount = 42,
  density = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number | null = null;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Palette: Gold dust & botanical forest hues
    const goldColors = [
      'rgba(212, 155, 68, ',  // primary gold
      'rgba(243, 201, 120, ', // light amber
      'rgba(182, 126, 43, ',  // deep bronze
    ];

    const leafColors = [
      { fill: 'rgba(27, 56, 43, ', vein: 'rgba(212, 155, 68, ' }, // forest emerald with gold vein
      { fill: 'rgba(39, 82, 62, ', vein: 'rgba(243, 201, 120, ' }, // light botanical green
      { fill: 'rgba(212, 155, 68, ', vein: 'rgba(27, 56, 43, ' }, // golden laurel leaf
    ];

    const particles: Particle[] = [];

    const createDustParticle = (w: number, h: number, randomY = true): GoldDustParticle => {
      const colorPrefix = goldColors[Math.floor(Math.random() * goldColors.length)];
      const baseAlpha = 0.2 + Math.random() * 0.45;
      return {
        kind: 'dust',
        x: Math.random() * w,
        y: randomY ? Math.random() * h : h + 10,
        radius: 1.0 + Math.random() * 2.2,
        alpha: baseAlpha,
        baseAlpha,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulsePhase: Math.random() * Math.PI * 2,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: -(0.25 + Math.random() * 0.45), // gentle upward float
        swayAmp: 0.3 + Math.random() * 0.6,
        swayFreq: 0.015 + Math.random() * 0.02,
        color: colorPrefix,
      };
    };

    const createLeafParticle = (w: number, h: number, randomY = true): LeafParticle => {
      const palette = leafColors[Math.floor(Math.random() * leafColors.length)];
      const alpha = 0.12 + Math.random() * 0.22;
      const sizeMultiplier = 0.7 + Math.random() * 0.6;
      return {
        kind: 'leaf',
        x: Math.random() * w,
        y: randomY ? Math.random() * h : h + 20,
        length: 14 * sizeMultiplier,
        width: 6 * sizeMultiplier,
        angle: Math.random() * Math.PI * 2,
        angularVelocity: (Math.random() - 0.5) * 0.018,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -(0.3 + Math.random() * 0.5), // gentle float upward and drift
        swayAmp: 0.8 + Math.random() * 1.2,
        swayFreq: 0.01 + Math.random() * 0.015,
        alpha,
        color: `${palette.fill}${alpha})`,
        veinColor: `${palette.vein}${alpha * 0.9})`,
      };
    };

    const initParticles = (w: number, h: number) => {
      particles.length = 0;
      const targetCount = Math.floor(particleCount * density);
      // 70% gold dust, 30% floating botanical leaf spores
      const leafCount = Math.max(3, Math.floor(targetCount * 0.28));
      const dustCount = targetCount - leafCount;

      for (let i = 0; i < dustCount; i++) {
        particles.push(createDustParticle(w, h, true));
      }
      for (let i = 0; i < leafCount; i++) {
        particles.push(createLeafParticle(w, h, true));
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;
      const rect = parent ? parent.getBoundingClientRect() : canvas.getBoundingClientRect();
      width = Math.max(rect.width, 300);
      height = Math.max(rect.height, 200);
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      if (particles.length === 0) {
        initParticles(width, height);
      }
    };

    resize();

    // ResizeObserver for responsive parent adjustments
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && canvas.parentElement) {
      resizeObserver = new ResizeObserver(() => {
        resize();
      });
      resizeObserver.observe(canvas.parentElement);
    }

    // IntersectionObserver to pause rendering when not in viewport
    let intersectionObserver: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      intersectionObserver = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && animId === null) {
          animId = requestAnimationFrame(render);
        }
      });
      intersectionObserver.observe(canvas);
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isVisible = false;
        if (animId !== null) {
          cancelAnimationFrame(animId);
          animId = null;
        }
      } else {
        isVisible = true;
        if (animId === null) {
          animId = requestAnimationFrame(render);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    let frame = 0;

    const render = () => {
      if (!isVisible) {
        animId = null;
        return;
      }

      frame++;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (p.kind === 'dust') {
          // Update dust
          p.pulsePhase += p.pulseSpeed;
          p.alpha = p.baseAlpha + Math.sin(p.pulsePhase) * (p.baseAlpha * 0.4);
          p.x += p.speedX + Math.sin(frame * p.swayFreq) * p.swayAmp;
          p.y += p.speedY;

          // Wrap around top or edges
          if (p.y < -10) {
            particles[i] = createDustParticle(width, height, false);
            continue;
          }
          if (p.x < -10) p.x = width + 5;
          if (p.x > width + 10) p.x = -5;

          // Draw gold dust particle with soft glow
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${Math.max(0, Math.min(1, p.alpha))})`;
          ctx.shadowBlur = p.radius * 3;
          ctx.shadowColor = 'rgba(212, 155, 68, 0.45)';
          ctx.fill();
        } else {
          // Update leaf
          p.angle += p.angularVelocity;
          p.x += p.speedX + Math.sin(frame * p.swayFreq) * p.swayAmp;
          p.y += p.speedY;

          // Wrap around top or edges
          if (p.y < -30) {
            particles[i] = createLeafParticle(width, height, false);
            continue;
          }
          if (p.x < -20) p.x = width + 15;
          if (p.x > width + 20) p.x = -15;

          // Draw stylized leaf
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);

          // Leaf shape
          ctx.beginPath();
          ctx.moveTo(0, -p.length / 2);
          ctx.bezierCurveTo(
            p.width * 0.9,
            -p.length * 0.25,
            p.width * 0.9,
            p.length * 0.25,
            0,
            p.length / 2
          );
          ctx.bezierCurveTo(
            -p.width * 0.9,
            p.length * 0.25,
            -p.width * 0.9,
            -p.length * 0.25,
            0,
            -p.length / 2
          );
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 4;
          ctx.shadowColor = 'rgba(212, 155, 68, 0.2)';
          ctx.fill();

          // Leaf vein
          ctx.beginPath();
          ctx.moveTo(0, -p.length * 0.38);
          ctx.lineTo(0, p.length * 0.38);
          ctx.strokeStyle = p.veinColor;
          ctx.lineWidth = 0.6;
          ctx.shadowBlur = 0;
          ctx.stroke();

          ctx.restore();
        }
      }

      // Reset shadow properties for next frame
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      if (animId !== null) {
        cancelAnimationFrame(animId);
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (intersectionObserver) {
        intersectionObserver.disconnect();
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [particleCount, density]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
};

export default BotanicalCanvas;
