# Custom Animations Documentation

## Overview
This website now features a comprehensive set of custom animations that create an immersive and engaging user experience. The animations are designed to be smooth, performant, and visually stunning.

## Animation Features

### 1. Background Animations

#### Animated Gradient Background
- **Effect**: Slowly shifting gradient background with multiple colors
- **Colors**: Deep blues and purples creating a modern, professional look
- **Duration**: 15 seconds per cycle
- **File**: `custom-animations.css`

#### Starfield Effect
- **Effect**: Stars moving toward the viewer creating a 3D depth sensation
- **Particles**: 200 animated stars
- **File**: `advanced-effects.js`

#### Floating Geometric Shapes
- **Effect**: Circles, squares, and triangles floating around
- **Count**: 15 shapes with random sizes and positions
- **Animation**: Smooth floating motion with rotation
- **File**: `advanced-effects.js`

#### Wave Animation
- **Effect**: Layered waves at the bottom of the screen
- **Layers**: 3 overlapping waves with different frequencies
- **Colors**: Blues and pinks with transparency
- **File**: `advanced-effects.js`

### 2. Text Animations

#### Glowing Text
- **Target**: Main header (h1)
- **Effect**: Pulsing glow with white and blue colors
- **Duration**: 3 seconds per cycle
- **CSS Class**: Applied automatically to h1

#### Gradient Text
- **Target**: "welcome to my world" text
- **Effect**: Animated color gradient flowing through text
- **CSS Class**: `.gradient-text`

#### Shimmer Text
- **Target**: "DATA SCIENTIST | DATA ANALYST" subtitle
- **Effect**: Light shimmer passing across text
- **CSS Class**: `.shimmer-text`

#### Neon Glow
- **Target**: Main name "Nicola Vanoli"
- **Effect**: Cyan neon glow effect with flickering
- **CSS Class**: `.neon-glow`

#### Rotating Words Animation
- **Target**: Skills text (A.I., Python, sql, Physics, Maths)
- **Effect**: 3D rotation effect cycling through different skills
- **Duration**: 15 seconds total cycle (3 seconds per word)

### 3. Interactive Animations

#### Particle System with Mouse Tracking
- **Effect**: Particles follow mouse movement
- **Canvas-based**: High-performance animation
- **Colors**: Dynamic blue/cyan hues
- **File**: `custom-animations.js`

#### Cursor Trail
- **Effect**: Glowing dots follow cursor movement
- **Opacity**: Fades over time
- **Color**: Blue gradient
- **File**: `custom-animations.js`

#### Magnetic Button Effect
- **Target**: All navigation links and buttons
- **Effect**: Elements move slightly toward cursor on hover
- **Strength**: 30% movement factor
- **File**: `custom-animations.js`

#### Ripple Effect
- **Trigger**: Click anywhere on the page
- **Effect**: Expanding circle ripple from click point
- **Duration**: 0.6 seconds
- **File**: `custom-animations.js`

#### 3D Tilt Effect
- **Target**: Elements with `.tilt-effect` class
- **Effect**: 3D perspective rotation following mouse
- **Hover**: Scales up to 105%
- **File**: `custom-animations.js`

### 4. Navigation Animations

#### Staggered Fade In
- **Target**: Navigation menu items
- **Effect**: Each item fades in with slight delay
- **Delay**: 0.2s increments between items

#### Hover Animations
- **Effect**: Move up and scale on hover
- **Transform**: translateY(-5px) scale(1.05)
- **Shadow**: Adds depth shadow

#### Shine Effect
- **Effect**: Light sweeps across links on hover
- **CSS**: Gradient overlay animation

#### Glitch Effect
- **Target**: "Tell me a data science joke!" link
- **CSS Class**: `.glitch`
- **Effect**: Quick position shifts on hover

### 5. Content Entrance Animations

#### Fade In Up
- **Effect**: Elements fade in while moving up
- **Duration**: 0.8-1s
- **CSS Class**: `.fadeInUp` animation

#### Slide In
- **Variants**: Left and Right
- **Effect**: Elements slide in from sides
- **CSS Classes**: `slideInLeft`, `slideInRight`

#### Scale In
- **Effect**: Elements grow from center
- **CSS Class**: `scaleIn` animation

#### Rotate In
- **Effect**: Elements rotate while scaling in
- **CSS Class**: `rotateIn` animation

### 6. Scroll Animations

#### Parallax Effect
- **Target**: Elements with `data-depth` attribute
- **Effect**: Moves at different speed than scroll
- **Mouse**: Also responds to mouse movement
- **File**: `custom-animations.js`

#### Scroll-Triggered Animations
- **Target**: Elements with `.animate-on-scroll` class
- **Effect**: Animates when scrolling into view
- **Uses**: Intersection Observer API
- **File**: `custom-animations.js`

### 7. Advanced Effects (Optional)

These effects can be enabled/disabled in `advanced-effects.js`:

#### DNA Helix Effect
- **Effect**: Animated double helix pattern
- **Colors**: Blue and pink strands
- **Position**: Over header
- **Status**: Commented out by default

#### Matrix Rain Effect
- **Effect**: Falling characters like The Matrix
- **Characters**: Numbers, letters, and Greek symbols
- **Color**: Classic green
- **Status**: Commented out by default

## Performance Considerations

### Optimization Techniques Used
1. **RequestAnimationFrame**: All animations use rAF for smooth 60fps
2. **CSS Transforms**: Hardware-accelerated transformations
3. **Canvas API**: For complex particle systems
4. **Intersection Observer**: For scroll-based animations
5. **Debouncing**: Event listeners are optimized

### Customization

#### Enabling/Disabling Effects

In `advanced-effects.js`, comment/uncomment effects:

```javascript
// new StarfieldEffect();     // Comment to disable
// new DNAHelixEffect();      // Uncomment to enable
// new MatrixRainEffect();    // Uncomment to enable
new GeometricShapes();        // Active
new WaveAnimation();          // Active
```

#### Adjusting Animation Speed

In `custom-animations.css`, modify animation durations:

```css
animation: gradientShift 15s ease infinite; /* Change 15s to adjust speed */
```

#### Changing Colors

Update color values in both CSS and JavaScript files:

```css
/* In custom-animations.css */
background: linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #533483);
```

```javascript
// In custom-animations.js
color: `hsl(${Math.random() * 60 + 180}, 100%, 70%)`
```

## Browser Compatibility

All animations are compatible with:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

Fallbacks are provided for older browsers.

## File Structure

```
assets/
├── css/
│   ├── custom-animations.css    # Main animation styles
│   ├── animated.css             # Original floating lights
│   └── ...
├── js/
│   ├── custom-animations.js     # Interactive animations
│   ├── advanced-effects.js      # Canvas-based effects
│   └── ...
```

## Usage Tips

### Adding Animation Classes to New Elements

```html
<!-- Gradient text -->
<p class="gradient-text">Your text here</p>

<!-- Neon glow -->
<h1 class="neon-glow">Your heading</h1>

<!-- Ripple effect on click -->
<button class="ripple-effect">Click me</button>

<!-- Parallax movement -->
<div data-depth="20">Moves with mouse</div>

<!-- 3D tilt on hover -->
<div class="tilt-effect">Tilts on hover</div>
```

### Performance Mode

If you experience lag on lower-end devices, disable heavy effects:
1. Comment out `StarfieldEffect` in `advanced-effects.js`
2. Reduce particle count in `ParticleSystem` constructor
3. Disable `CursorTrail` effect

## Credits

- Original template: HTML5 UP (Dimension theme)
- Custom animations: Enhanced by GitHub Copilot
- Developer: Nicola Vanoli

## License

Animations are provided as-is for use with this website.
