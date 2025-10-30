'use client';

import { useState, useEffect } from 'react';
import { LiquidMetal } from '@paper-design/shaders-react';
import Image from 'next/image';

/**
 * LAB64 Logo Component with Performance Optimization
 * - Desktop/Laptop: Uses LiquidMetal shader effect for aesthetics
 * - Mobile: Uses static image for better performance
 * - Logo is now hosted locally instead of CDN
 */

interface LiquidMetalLogoProps {
  width?: string;
  height?: string;
  className?: string;
}

export function LiquidMetalLogo({
  width = '180px',
  height = '60px',
  className = ''
}: LiquidMetalLogoProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent hydration mismatch
  if (!isMounted) {
    return (
      <div style={{ width, height }} className={className}>
        <Image
          src="/lab64-logo.png"
          alt="LAB64 Logo"
          width={180}
          height={60}
          priority
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // Mobile: Use static image for performance
  if (isMobile) {
    return (
      <div style={{ width, height }} className={className}>
        <Image
          src="/lab64-logo.png"
          alt="LAB64 Logo"
          width={180}
          height={60}
          priority
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // Desktop: Use shader effect
  return (
    <div style={{ width, height }} className={className}>
      <LiquidMetal
        image="/lab64-logo.png"
        speed={0.8}
        colorBack="#00000000"
        colorTint="#FFFFFF"
        softness={0.1}
        repetition={1.51}
        shiftRed={0.3}
        shiftBlue={0.3}
        distortion={0.07}
        contour={0.4}
        scale={1.8}
        rotation={0}
        shape="diamond"
        angle={70}
        style={{
          backgroundColor: 'transparent',
          height: '100%',
          width: '100%',
          mixBlendMode: 'luminosity',
        }}
      />
    </div>
  );
}
