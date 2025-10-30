'use client';

import { useEffect, useState } from 'react';
import { getLayeredShader, LayeredShaderType } from './LayeredShaderConfigs';

export type ShaderType = LayeredShaderType;

interface HeroBackgroundProps {
  shaderType?: ShaderType;
}

/**
 * HeroBackground Component
 * Layered Paper Shaders for technology/innovation/visionary themes
 * Fallback to CSS gradient on mobile or WebGL-unsupported devices
 */
export function HeroBackground({ shaderType = 'mesh-wireframe' }: HeroBackgroundProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [useWebGL, setUseWebGL] = useState(true);

  useEffect(() => {
    setIsMounted(true);

    // Disable WebGL on mobile for performance
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 768;
      const hasWebGL = (() => {
        try {
          const canvas = document.createElement('canvas');
          return !!(
            canvas.getContext('webgl') ||
            canvas.getContext('experimental-webgl')
          );
        } catch {
          return false;
        }
      })();

      setUseWebGL(hasWebGL && !isMobile);
    }
  }, []);

  // CSS fallback for mobile or no WebGL
  if (!isMounted || !useWebGL) {
    return (
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 15s ease infinite',
          }}
        />
        <style jsx>{`
          @keyframes gradientShift {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
        `}</style>
      </div>
    );
  }

  // All shaders are now layered configurations
  return <>{getLayeredShader(shaderType)}</>;
}
