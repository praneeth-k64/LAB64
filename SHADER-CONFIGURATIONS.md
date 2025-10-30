# Layered Shader Configurations Guide

This document explains all the stunning layered shader configurations available in your LAB64 website.

## 📦 What's New

- **Upgraded to `@paper-design/shaders-react@0.0.61`** (latest version)
- **11 Premium Layered Shader Configurations** following the mesh-wireframe pattern
- **Enhanced Dropdown UI** with categories and visual hierarchy
- **TypeScript-safe** implementations

---

## ✨ Layered Shader Configurations

### 1. **Mesh Wireframe** ⭐ (Original Inspiration)
```tsx
colors: ['#000000', '#5100ff', '#ea00ff'] + ['#8a2be2', '#ffffff', '#9370db']
```
- **Base Layer**: Slower purple mesh (speed: 0.2)
- **Overlay**: Faster violet wireframe with white accents (speed: 0.3, opacity: 0.6)
- **Effect**: Creates depth through speed differential
- **Best for**: Modern tech, AI/ML branding, futuristic aesthetics

---

### 2. **Neuro Swirl**
```tsx
NeuroNoise + Swirl overlay
```
- **Base**: Neural network glow (white on black)
- **Overlay**: Purple/violet swirl distortion (opacity: 0.5)
- **Effect**: Organic, brain-like patterns with flowing motion
- **Best for**: AI/neural network themes, organic tech

---

### 3. **Liquid Waves**
```tsx
LiquidMetal + Waves
```
- **Base**: Dark metallic liquid effect
- **Overlay**: Blue waves (opacity: 0.65)
- **Effect**: Underwater metallic flow
- **Best for**: Tech products, fluid dynamics, water tech

---

### 4. **God Rays Mesh**
```tsx
GodRays + MeshGradient
```
- **Base**: Dramatic golden/red/cyan rays
- **Overlay**: Subtle white mesh (opacity: 0.4)
- **Effect**: Divine, ethereal lighting
- **Best for**: Premium products, spiritual/wellness brands

---

### 5. **Voronoi Glow**
```tsx
Voronoi + StaticMeshGradient
```
- **Base**: Cellular purple/pink/orange patterns
- **Overlay**: Glowing purple mesh (opacity: 0.55)
- **Effect**: Organic cell-like structures with glow
- **Best for**: Biology/biotech, network visualization

---

### 6. **Spiral Smoke**
```tsx
Spiral + SmokeRing
```
- **Base**: Purple spiral energy
- **Overlay**: Pink/purple atmospheric smoke (opacity: 0.7)
- **Effect**: Energetic vortex with atmospheric depth
- **Best for**: Energy products, dynamic brands

---

### 7. **Metaballs Grain**
```tsx
Metaballs + GrainGradient
```
- **Base**: Vibrant organic blobs (pink/purple/cyan/orange)
- **Overlay**: Textured grain (opacity: 0.45)
- **Effect**: Playful organic shapes with film grain
- **Best for**: Creative agencies, playful brands

---

### 8. **Perlin Flow**
```tsx
PerlinNoise + SimplexNoise
```
- **Base**: Blue Perlin noise
- **Overlay**: Cyan/white Simplex (opacity: 0.5)
- **Effect**: Complex flowing noise textures
- **Best for**: Technical/scientific, data visualization

---

### 9. **Panels Warp**
```tsx
ColorPanels + Warp
```
- **Base**: Red/orange/yellow color panels
- **Overlay**: White/black warp distortion (opacity: 0.6)
- **Effect**: Geometric panels with space-time warp
- **Best for**: Modern architecture, geometric brands

---

### 10. **Orbit Pulse**
```tsx
DotOrbit + PulsingBorder
```
- **Base**: Cyan orbiting dots
- **Overlay**: Rainbow pulsing border (opacity: 0.55)
- **Effect**: Cosmic orbits with energy frame
- **Best for**: Space tech, orbital systems, cosmic themes

---

### 11. **Static Mesh Layers**
```tsx
StaticMeshGradient × 3
```
- **Base**: Deep purple mesh
- **Mid**: Animated pink mesh (opacity: 0.5)
- **Accent**: Golden white accents (opacity: 0.3)
- **Effect**: Triple-layered depth with metallic shine
- **Best for**: Luxury brands, premium products

---

## 🎨 Color Strategy Insights

### Black Anchors
All configurations use `#000000` (black) as anchor colors to create depth and contrast.

### Speed Differential
Layered shaders use different speeds:
- **Base layers**: 0.15 - 0.25
- **Overlay layers**: 0.25 - 0.4
- Creates parallax-like depth effect

### Opacity Control
Strategic opacity ranges:
- **Heavy overlays**: 0.6 - 0.7
- **Medium overlays**: 0.45 - 0.55
- **Subtle accents**: 0.3 - 0.4

### Color Palettes
- **Tech/AI**: Purples, violets, blues
- **Energy**: Reds, oranges, pinks
- **Premium**: Golds, whites, deep purples
- **Cosmic**: Cyans, magentas, blues

---

## 🚀 Usage

### In Your Dropdown
All 11 layered configurations are available in the shader selector dropdown:

```tsx
<ShaderSelector
  currentShader={currentShader}
  onShaderChange={setCurrentShader}
/>
```

### Default Configuration
The site defaults to **Mesh Wireframe** as it provides the best balance of visual impact and performance.

### Switching Configurations
Use the dropdown in the top-right corner of the hero section to try different effects in real-time!

---

## 🎯 Customization Tips

### Adjust Opacity
```tsx
<ComponentName
  {...props}
  style={{
    ...style,
    opacity: 0.7  // Adjust between 0.3 - 1.0
  }}
/>
```

### Modify Speed
```tsx
<ComponentName
  {...props}
  speed={0.3}  // Slower: 0.1-0.2, Faster: 0.4-0.6
/>
```

### Change Colors
```tsx
<MeshGradient
  colors={['#your', '#custom', '#colors', '#here']}
/>
```

---

## 📊 Performance Notes

- All shaders use **WebGL2** for optimal performance
- Automatic fallback to CSS gradient on mobile
- Background pause when browser tab is hidden
- Lightweight: ~60fps on modern devices

---

## 🎓 Pattern Learned

This layering strategy can be applied to ANY Paper Shader combination:

1. Choose a **base shader** (slower speed)
2. Choose an **overlay shader** (faster speed)
3. Set overlay opacity: 0.4-0.7
4. Use black (`#000000`) as anchor color
5. Test different color combinations!

**Example DIY Configuration:**
```tsx
<div className="absolute inset-0 bg-black overflow-hidden">
  {/* Base */}
  <SimplexNoise colors={['#ff0080', '#00ff80']} speed={0.2} />

  {/* Overlay */}
  <Spiral colors={['#ffffff', '#000000']} speed={0.3} opacity={0.5} />
</div>
```

---

## 🔗 Resources

- [Paper Shaders Documentation](https://shaders.paper.design/)
- [Paper Shaders GitHub](https://github.com/paper-design/shaders)
- Your configs: `src/components/hero/LayeredShaderConfigs.tsx`

---

**Built with ❤️ for LAB64**
