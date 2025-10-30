'use client';

import { useState } from 'react';
import { ShaderType } from '../hero/HeroBackground';

interface ShaderSelectorProps {
  currentShader: ShaderType;
  onShaderChange: (shader: ShaderType) => void;
}

const shaderOptions: { value: ShaderType; label: string; description: string; category?: string }[] = [
  // Original favorites
  {
    value: 'mesh-wireframe',
    label: 'Mesh Wireframe',
    description: 'Dual mesh layers with violet/purple depth',
    category: 'Favorites',
  },
  {
    value: 'spiral-smoke',
    label: 'Spiral Smoke',
    description: 'Spiraling energy with atmospheric smoke',
    category: 'Favorites',
  },
  // Selected favorites
  {
    value: 'neon-mesh-glow',
    label: 'Neon Mesh Glow',
    description: 'Dual mesh with screen blend additive glow',
    category: 'Favorites',
  },
  {
    value: 'neural-fusion',
    label: 'Neural Fusion',
    description: 'Neural base with overlay texture blend',
    category: 'Favorites',
  },
  {
    value: 'holographic-data-field',
    label: 'Holographic Data Field',
    description: 'Rainbow color panels with dithering overlay',
    category: 'Favorites',
  },
];

// Shader option component
function ShaderOption({ option, currentShader, onSelect }: {
  option: { value: ShaderType; label: string; description: string };
  currentShader: ShaderType;
  onSelect: (value: ShaderType) => void;
}) {
  return (
    <button
      onClick={() => onSelect(option.value)}
      className={`w-full text-left px-4 py-2.5 hover:bg-cyan-500/10 transition-all ${
        currentShader === option.value
          ? 'bg-cyan-500/20 border-l-4 border-cyan-400'
          : 'border-l-4 border-transparent'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1">
          <div className="text-sm font-rajdhani font-bold text-white">
            {option.label}
          </div>
          <div className="text-xs text-gray-400 mt-0.5 leading-tight font-ibm-plex-sans">
            {option.description}
          </div>
        </div>
        {currentShader === option.value && (
          <div className="flex-shrink-0">
            <svg
              className="w-5 h-5 text-cyan-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
    </button>
  );
}

export function ShaderSelector({ currentShader, onShaderChange }: ShaderSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const currentOption = shaderOptions.find((opt) => opt.value === currentShader);

  return (
    <div className="fixed bottom-24 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-black/80 backdrop-blur-md border-2 border-cyan-500/50 rounded-lg px-4 py-2.5 shadow-2xl hover:bg-black hover:border-cyan-400 transition-all font-ibm-plex-sans"
        >
          <span className="text-sm font-medium text-cyan-300">Shader:</span>
          <span className="text-sm font-rajdhani font-bold text-white">
            {currentOption?.label}
          </span>
          <svg
            className={`w-4 h-4 text-cyan-400 transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <div className="absolute bottom-full right-0 mb-2 w-80 bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl border-2 border-cyan-500/30 overflow-hidden z-50">
              <div className="px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600">
                <p className="text-xs font-rajdhani font-bold text-white uppercase tracking-wider">
                  LAB64 • AI • Innovation • Future
                </p>
              </div>
              <div className="max-h-[32rem] overflow-y-auto">
                {/* Favorites */}
                <div className="px-3 py-2 bg-gradient-to-r from-purple-900/40 to-cyan-900/40">
                  <p className="text-xs font-rajdhani font-bold text-purple-200 uppercase tracking-wider">
                    ★ Favorites
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5 font-ibm-plex-sans">
                    Selected shader effects for LAB64
                  </p>
                </div>
                {shaderOptions.map((option) => (
                  <ShaderOption key={option.value} option={option} currentShader={currentShader} onSelect={(value) => { onShaderChange(value); setIsOpen(false); }} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
