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

  // Desktop: Use shader effect with Paper Design exported settings
  return (
    <div style={{ width, height }} className={className}>
      <LiquidMetal
        image="https://workers.paper.design/file-assets/01K732DQNVNJK9Y9JN1NQKC32X/01K8QC5KP7M5Y2B358D7XA34KV.png"
        speed={1}
        colorBack="#00000000"
        colorTint="#FFFFFF"
        softness={0.09}
        repetition={1}
        shiftRed={0.3}
        shiftBlue={0.3}
        distortion={0.81}
        contour={0.49}
        scale={1.58}
        rotation={0}
        shape="diamond"
        angle={54}
        style={{
          backgroundColor: 'transparent',
          borderRadius: '12px',
          height: '100%',
          width: '100%',
          opacity: 1,
        }}
      />
    </div>
  );
}
