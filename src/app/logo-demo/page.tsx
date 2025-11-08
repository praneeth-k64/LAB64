'use client';

import { useState } from 'react';
import { motion as m } from 'motion/react';
import { HolographicGlitchLogo } from '@/components/ui/logo-animations/HolographicGlitchLogo';
import { MagneticHoverLogo } from '@/components/ui/logo-animations/MagneticHoverLogo';
import { NeuralNetworkLogo } from '@/components/ui/logo-animations/NeuralNetworkLogo';
import { GradientShimmerLogo } from '@/components/ui/logo-animations/GradientShimmerLogo';
import { ChromaticAberrationLogo } from '@/components/ui/logo-animations/ChromaticAberrationLogo';
import { RotationTiltLogo } from '@/components/ui/logo-animations/RotationTiltLogo';
import { GlitchTextLogo } from '@/components/ui/logo-animations/GlitchTextLogo';
import { QuantumFlickerLogo } from '@/components/ui/logo-animations/QuantumFlickerLogo';
import { DottedGlowLogo } from '@/components/ui/logo-animations/DottedGlowLogo';
import { LiquidMetalLogo } from '@/components/ui/LiquidMetalLogo';

interface LogoEffect {
  id: string;
  name: string;
  description: string;
  component: React.ComponentType<any>;
  tier: string;
  performance: 'Excellent' | 'Great' | 'Good' | 'Moderate';
  interactivity: 'None' | 'Hover' | 'Periodic' | 'Continuous';
  recommended?: boolean;
}

const logoEffects: LogoEffect[] = [
  {
    id: 'holographic-glitch',
    name: 'Holographic Glitch',
    description: 'Subtle RGB color split with shimmer and scanline effects. Matches your holographic background perfectly.',
    component: HolographicGlitchLogo,
    tier: 'Tier 1: Subtle & Professional',
    performance: 'Excellent',
    interactivity: 'Periodic',
    recommended: true
  },
  {
    id: 'magnetic-hover',
    name: 'Magnetic Hover',
    description: 'Logo subtly pulls toward cursor on hover with glow effect. Innovative and feels "alive".',
    component: MagneticHoverLogo,
    tier: 'Tier 2: Interactive & Engaging',
    performance: 'Good',
    interactivity: 'Hover',
    recommended: true
  },
  {
    id: 'neural-network',
    name: 'Neural Network Lines',
    description: 'Animated network graph/nodes connecting through letters. Perfect for AI company!',
    component: NeuralNetworkLogo,
    tier: 'Tier 4: Extreme Innovation',
    performance: 'Moderate',
    interactivity: 'Periodic',
    recommended: true
  },
  {
    id: 'gradient-shimmer',
    name: 'Gradient Shimmer',
    description: 'Animated gradient sweeps across logo like light reflecting off chrome surface.',
    component: GradientShimmerLogo,
    tier: 'Tier 1: Subtle & Professional',
    performance: 'Great',
    interactivity: 'Continuous'
  },
  {
    id: 'chromatic-aberration',
    name: 'Chromatic Aberration',
    description: 'RGB channels separate on hover creating camera lens distortion effect.',
    component: ChromaticAberrationLogo,
    tier: 'Tier 4: Extreme Innovation',
    performance: 'Excellent',
    interactivity: 'Hover'
  },
  {
    id: 'rotation-tilt',
    name: '3D Rotation Tilt',
    description: 'Logo has 3D perspective that responds to mouse movement. Premium Apple-like feel.',
    component: RotationTiltLogo,
    tier: 'Tier 2: Interactive & Engaging',
    performance: 'Excellent',
    interactivity: 'Hover'
  },
  {
    id: 'glitch-text',
    name: 'Glitch Text Animation',
    description: 'Intense data corruption effect with RGB split and horizontal slices. Very tech-forward.',
    component: GlitchTextLogo,
    tier: 'Tier 3: Bold & Futuristic',
    performance: 'Good',
    interactivity: 'Periodic'
  },
  {
    id: 'quantum-flicker',
    name: 'Quantum Flicker',
    description: 'Letters randomly phase in/out like quantum superposition. Unique conversation-starter.',
    component: QuantumFlickerLogo,
    tier: 'Tier 4: Extreme Innovation',
    performance: 'Good',
    interactivity: 'Continuous'
  },
  {
    id: 'dotted-glow',
    name: 'Dotted Glow Background',
    description: 'Animated glowing dots create a futuristic particle field behind the logo. Inspired by Aceternity UI.',
    component: DottedGlowLogo,
    tier: 'Tier 3: Bold & Futuristic',
    performance: 'Great',
    interactivity: 'Continuous',
    recommended: true
  },
  {
    id: 'liquid-metal',
    name: 'Liquid Metal (Current)',
    description: 'Current shader-based effect with diamond pattern and metallic flow.',
    component: LiquidMetalLogo,
    tier: 'Current Implementation',
    performance: 'Excellent',
    interactivity: 'Continuous'
  }
];

export default function LogoDemoPage() {
  const [selectedEffect, setSelectedEffect] = useState<string | null>(null);
  const [filterTier, setFilterTier] = useState<string>('all');

  const filteredEffects = filterTier === 'all'
    ? logoEffects
    : logoEffects.filter(e => e.tier === filterTier || e.recommended);

  const tiers = ['all', ...Array.from(new Set(logoEffects.map(e => e.tier)))];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-rajdhani font-bold mb-2">
              LAB64 Logo Animation Explorer
            </h1>
            <p className="text-white/60 font-ibm-plex-sans">
              Compare and choose the perfect animation for your innovative brand
            </p>
          </m.div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="border-b border-white/10 bg-black/30 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-2">
            <span className="text-white/60 text-sm font-ibm-plex-sans mr-2 self-center">
              Filter by tier:
            </span>
            {tiers.map((tier) => (
              <button
                key={tier}
                onClick={() => setFilterTier(tier)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filterTier === tier
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                {tier === 'all' ? 'All Effects' : tier}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Effects Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEffects.map((effect, index) => {
            const Component = effect.component;
            const isSelected = selectedEffect === effect.id;

            return (
              <m.div
                key={effect.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedEffect(isSelected ? null : effect.id)}
                className={`relative group cursor-pointer rounded-2xl border transition-all ${
                  isSelected
                    ? 'border-blue-500 bg-blue-500/10 scale-105 shadow-2xl shadow-blue-500/20'
                    : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                {/* Recommended Badge */}
                {effect.recommended && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      ⭐ RECOMMENDED
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Logo Preview */}
                  <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 mb-4 flex items-center justify-center min-h-[140px] border border-white/10">
                    <Component width="220px" height="80px" />
                  </div>

                  {/* Info */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold font-rajdhani mb-1">
                        {effect.name}
                      </h3>
                      <p className="text-xs text-blue-400 font-medium">
                        {effect.tier}
                      </p>
                    </div>

                    <p className="text-sm text-white/70 font-ibm-plex-sans leading-relaxed">
                      {effect.description}
                    </p>

                    {/* Specs */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        effect.performance === 'Excellent' ? 'bg-green-500/20 text-green-400' :
                        effect.performance === 'Great' ? 'bg-blue-500/20 text-blue-400' :
                        effect.performance === 'Good' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        ⚡ {effect.performance}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400">
                        🎯 {effect.interactivity}
                      </span>
                    </div>
                  </div>

                  {/* Click to expand indicator */}
                  <div className="mt-4 pt-4 border-t border-white/10 text-center">
                    <span className="text-xs text-white/40 font-ibm-plex-sans">
                      {isSelected ? 'Click to collapse' : 'Click to expand'}
                    </span>
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>

      {/* Large Preview Section */}
      {selectedEffect && (
        <m.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent backdrop-blur-xl border-t border-white/20 z-40"
        >
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-rajdhani font-bold">
                  {logoEffects.find(e => e.id === selectedEffect)?.name}
                </h3>
                <p className="text-white/60 text-sm">
                  Large Preview - Interact to see the full effect
                </p>
              </div>
              <button
                onClick={() => setSelectedEffect(null)}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-sm font-medium"
              >
                Close Preview
              </button>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-16 flex items-center justify-center border border-white/20">
              {(() => {
                const Component = logoEffects.find(e => e.id === selectedEffect)?.component;
                return Component ? <Component width="400px" height="140px" /> : null;
              })()}
            </div>
          </div>
        </m.div>
      )}

      {/* Footer */}
      <div className="border-t border-white/10 bg-black/50 mt-20">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-white/40 text-sm font-ibm-plex-sans">
            Created with Framer Motion for LAB64 • Navigate to{' '}
            <a href="/" className="text-blue-400 hover:text-blue-300 underline">
              homepage
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
