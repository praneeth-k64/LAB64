'use client';

import {
  MeshGradient,
  NeuroNoise,
  SmokeRing,
  Spiral,
  SimplexNoise,
  ColorPanels,
  Dithering,
} from '@paper-design/shaders-react';

export type LayeredShaderType =
  // Original favorites
  | 'mesh-wireframe'
  | 'spiral-smoke'
  // Selected favorites
  | 'neon-mesh-glow'
  | 'neural-fusion'
  | 'holographic-data-field';

interface LayeredShaderConfig {
  value: LayeredShaderType;
  label: string;
  description: string;
  component: React.ReactNode;
}

/**
 * KEPT ORIGINALS (2)
 */

const MeshWireframe = () => (
  <div className="absolute inset-0 w-full h-full bg-black overflow-hidden">
    <MeshGradient
      colors={['#000000', '#5100ff', '#000000', '#ea00ff']}
      distortion={1.2}
      swirl={0.8}
      speed={0.2}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
      }}
    />
    <MeshGradient
      colors={['#000000', '#8a2be2', '#ffffff', '#9370db']}
      distortion={0.8}
      swirl={1.2}
      speed={0.3}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.6,
      }}
    />
  </div>
);

const SpiralSmoke = () => (
  <div className="absolute inset-0 w-full h-full bg-black overflow-hidden">
    <Spiral
      colorFront="#9333ea"
      colorBack="#000000"
      strokeWidth={1.2}
      noise={0.4}
      speed={0.18}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
      }}
    />
    <SmokeRing
      colors={['#d946ef', '#8b5cf6', '#6366f1', '#1e1b4b']}
      speed={0.25}
      scale={1.8}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.7,
      }}
    />
  </div>
);

/**
 * SELECTED FAVORITES
 */

const NeonMeshGlow = () => (
  <div className="absolute inset-0 w-full h-full bg-black overflow-hidden">
    {/* Base layer */}
    <MeshGradient
      className="absolute inset-0 w-full h-full"
      colors={['#000000', '#0080ff', '#000000', '#3b82f6']}
      distortion={1.0}
      swirl={0.7}
      speed={0.18}
    />
    {/* Overlay with screen blend for additive glow */}
    <MeshGradient
      className="absolute inset-0 w-full h-full"
      colors={['#000000', '#00ffff', '#ffffff', '#06b6d4']}
      distortion={0.8}
      swirl={1.0}
      speed={0.25}
      style={{
        opacity: 0.5,
        mixBlendMode: 'screen',
      }}
    />
  </div>
);

const NeuralFusion = () => (
  <div className="absolute inset-0 w-full h-full bg-black overflow-hidden">
    {/* Base neural layer */}
    <NeuroNoise
      colorFront="#6366f1"
      colorBack="#000000"
      brightness={0.2}
      contrast={0.7}
      speed={0.15}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
      }}
    />
    {/* Simplex noise with overlay blend for texture integration */}
    <SimplexNoise
      colors={['#00ffff', '#ffffff', '#22d3ee', '#000000']}
      stepsPerColor={5}
      speed={0.22}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.4,
        mixBlendMode: 'overlay',
      }}
    />
  </div>
);


const HolographicDataField = () => (
  <div className="absolute inset-0 w-full h-full bg-black overflow-hidden">
    {/* Tech/innovation color panels with blur */}
    <ColorPanels
      colors={[
        '#0ea5e9', // Sky blue
        '#00ffff', // Cyan
        '#8b5cf6', // Violet
        '#3b82f6', // Blue
        '#10b981', // Emerald green
        '#a855f7', // Purple
        '#0891b2', // Teal
        '#6366f1', // Indigo
      ]}
      scale={1}
      speed={0.85}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 1,
        mixBlendMode: 'screen',
        filter: 'blur(8px)',
      }}
    />
    {/* Dithering overlay */}
    <Dithering
      colorBack="#000000"
      colorFront="#00b3ff"
      shape="simplex"
      type="4x4"
      size={2}
      speed={1}
      scale={0.6}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.1,
        mixBlendMode: 'overlay',
      }}
    />
  </div>
);


/**
 * Export favorite configurations only
 */
export const layeredShaderConfigs: LayeredShaderConfig[] = [
  // Original favorites
  {
    value: 'mesh-wireframe',
    label: 'Mesh Wireframe',
    description: 'Dual mesh layers with violet/purple depth',
    component: <MeshWireframe />,
  },
  {
    value: 'spiral-smoke',
    label: 'Spiral Smoke',
    description: 'Spiraling energy with atmospheric smoke',
    component: <SpiralSmoke />,
  },
  // Selected favorites
  {
    value: 'neon-mesh-glow',
    label: 'Neon Mesh Glow',
    description: 'Dual mesh with screen blend additive glow',
    component: <NeonMeshGlow />,
  },
  {
    value: 'neural-fusion',
    label: 'Neural Fusion',
    description: 'Neural base with overlay texture blend',
    component: <NeuralFusion />,
  },
  {
    value: 'holographic-data-field',
    label: 'Holographic Data Field',
    description: 'Rainbow color panels with dithering overlay',
    component: <HolographicDataField />,
  },
];

export function getLayeredShader(type: LayeredShaderType): React.ReactNode {
  const config = layeredShaderConfigs.find((c) => c.value === type);
  return config?.component || <MeshWireframe />;
}
