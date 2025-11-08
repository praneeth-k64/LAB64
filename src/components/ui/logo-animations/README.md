# LAB64 Logo Animation Components

A collection of creative, production-ready logo animations for the LAB64 brand.

## 🎨 Available Effects

### ⭐ Top Recommendations

1. **Dotted Glow Background** - NEW! Animated particle field with glowing dots (Aceternity UI inspired)
2. **Holographic Glitch** - Subtle RGB split with periodic glitch effect
3. **Magnetic Hover** - Interactive cursor-following effect
4. **Neural Network Lines** - AI-themed animated connection graph

### All Effects

| Component | Description | Performance | Interactivity | Best For |
|-----------|-------------|-------------|---------------|----------|
| `DottedGlowLogo` | Animated glowing particle dots | Great | Continuous | Futuristic, tech-forward |
| `HolographicGlitchLogo` | RGB color split with shimmer | Excellent | Periodic | Professional innovation |
| `MagneticHoverLogo` | Cursor-following magnetic pull | Good | Hover | Interactive engagement |
| `NeuralNetworkLogo` | Animated network connections | Moderate | Periodic | AI/Tech branding |
| `GradientShimmerLogo` | Chrome-like light sweep | Great | Continuous | Elegant, premium |
| `ChromaticAberrationLogo` | Camera lens distortion | Excellent | Hover | Modern, artistic |
| `RotationTiltLogo` | 3D parallax depth | Excellent | Hover | Apple-like premium |
| `GlitchTextLogo` | Intense data corruption | Good | Periodic | Bold, tech-forward |
| `QuantumFlickerLogo` | Quantum superposition effect | Good | Continuous | Unique, experimental |

## 🚀 Usage

### Basic Import

```tsx
import { DottedGlowLogo } from '@/components/ui/logo-animations';

export function MyComponent() {
  return <DottedGlowLogo width="200px" height="70px" />;
}
```

### All Props (Common Interface)

```tsx
interface LogoAnimationProps {
  width?: string;      // Default: '200px'
  height?: string;     // Default: '70px'
  className?: string;  // Additional CSS classes
}
```

## 🎯 Demo Page

Visit `/logo-demo` to see all effects live and interactive:
- **Compare** multiple effects side-by-side
- **Filter** by tier/complexity
- **Click** cards for large previews
- **Test** interactions in real-time

## 📦 Dependencies

- `motion` (Framer Motion fork)
- `next/image`
- Canvas API (for DottedGlowBackground)

## 💡 Customization

### DottedGlowLogo Customization

```tsx
<DottedGlowBackground
  gap={8}                              // Distance between dots (px)
  radius={1.5}                         // Dot size
  color="rgba(96, 165, 250, 0.4)"     // Dot color
  glowColor="rgba(59, 130, 246, 0.8)" // Glow effect color
  opacity={1}                          // Overall opacity
  speedMin={0.3}                       // Min animation speed
  speedMax={1.2}                       // Max animation speed
  speedScale={1}                       // Global speed multiplier
/>
```

### Color Schemes

**Blue Tech (Default)**
- Dots: `rgba(96, 165, 250, 0.4)`
- Glow: `rgba(59, 130, 246, 0.8)`

**Purple AI**
- Dots: `rgba(167, 139, 250, 0.4)`
- Glow: `rgba(139, 92, 246, 0.8)`

**Cyan Futuristic**
- Dots: `rgba(34, 211, 238, 0.4)`
- Glow: `rgba(6, 182, 212, 0.8)`

## 🔧 Integration with Navigation

Replace current logo in [Navigation.tsx](../../layout/Navigation.tsx):

```tsx
import { DottedGlowLogo } from '@/components/ui/logo-animations';

// Replace LiquidMetalLogo with:
<DottedGlowLogo width="200px" height="70px" />
```

## 🎨 Design Philosophy

All animations follow LAB64's brand identity:
- **Professional** yet innovative
- **Subtle** animations that don't distract
- **Performance-optimized** for all devices
- **Accessible** with reduced motion support (future)
- **Responsive** to user interactions

## 📝 Notes

- Mobile devices automatically use static logo for performance (on some components)
- All components support dark mode
- Animations use CSS transforms and canvas for optimal performance
- No external animation libraries beyond Framer Motion

---

**Created with ❤️ for LAB64**
