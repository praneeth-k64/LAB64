'use client';

interface SectionFadeProps {
  direction: 'top' | 'bottom';
  height?: string;
  className?: string;
}

/**
 * Professional gradient fade component for seamless section transitions.
 * Uses multi-stop gradients with easing curves to eliminate banding.
 * Inspired by Linear, Stripe, and Apple's fade implementations.
 */
export function SectionFade({
  direction,
  height = '240px',
  className = ''
}: SectionFadeProps) {
  // Multi-stop gradients with easing curves for ultra-smooth fades
  const gradients = {
    top: 'linear-gradient(180deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 75%, transparent 100%)',
    bottom: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 15%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.4) 60%, transparent 100%)'
  };

  return (
    <div
      className={`absolute left-0 right-0 pointer-events-none ${
        direction === 'top' ? 'top-0' : 'bottom-0'
      } ${className}`}
      style={{
        height,
        background: gradients[direction]
      }}
      aria-hidden="true"
    />
  );
}
