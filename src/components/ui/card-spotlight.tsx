'use client';

import { useRef, useState, MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface CardSpotlightProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function CardSpotlight({
  children,
  className,
  spotlightColor = 'rgba(255, 255, 255, 0.15)',
}: CardSpotlightProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn('relative overflow-hidden group', className)}
      style={
        {
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`,
          '--spotlight-color': spotlightColor,
        } as React.CSSProperties
      }
    >
      {/* Spotlight effect overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 40%)`,
        }}
      />

      {children}
    </div>
  );
}
