'use client';

import { LiquidMetal } from '@paper-design/shaders-react';

/**
 * Code exported from Paper
 * https://app.paper.design/file/01K8QCAQ1Y8DY6BZ13HVSRABKR?node=01K4PRV1TBDZBSTJ2F25P9SEQA
 * on Oct 29, 2025 at 8:20 PM.
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
  return (
    <div style={{ width, height }} className={className}>
      <LiquidMetal
        image="https://workers.paper.design/file-assets/01K732DQNVNJK9Y9JN1NQKC32X/01K8QC5KP7M5Y2B358D7XA34KV.png"
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
