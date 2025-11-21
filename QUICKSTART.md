# 🎨 Custom Animations Quick Start Guide

## What's New

Your website now features **stunning custom animations** that include:

### ✨ Visual Effects
- 🌟 **Starfield background** - Stars moving toward you in 3D
- 🔷 **Floating geometric shapes** - Dynamic shapes in background
- 🌈 **Gradient animations** - Smoothly shifting color gradients
- ✨ **Section animations** - All sections have entrance effects

### 💫 Text Effects  
- ✨ **Glowing text** - Your name pulses with a neon glow
- 🎭 **Gradient text** - "welcome to my world" with flowing colors
- ⚡ **Shimmer effect** - Light passes across subtitle
- 🔄 **Rotating skills** - A.I., Python, SQL, Physics, Maths cycle

### 🎯 Interactive Effects
- 🖱️ **Mouse particles** - Particles follow your cursor
- 💫 **Cursor trail** - Glowing dots trail behind cursor
- 🧲 **Magnetic buttons** - Nav items move toward cursor
- 💧 **Ripple clicks** - Ripples appear where you click
- 🎪 **3D tilt** - Elements tilt based on mouse position

### 🎬 Entrance Animations
- 📊 **Staggered nav** - Menu items fade in one by one
- 🎪 **Hover effects** - Links lift and glow on hover
- ⚡ **Glitch effect** - Joke link has a glitch animation
- 🎨 **Section animations** - Each article section fades in smoothly
- 📋 **Table rows** - Slide in sequentially
- 🖼️ **Project cards** - Fade in with stagger effect
- 📝 **Form fields** - Slide in one by one
- 📖 **Timeline cards** - Animate from left to right

## 🚀 Testing Your Animations

### Option 1: Local Server (Recommended)

Open a terminal in your project folder and run:

```bash
# If you have Python 3:
python3 -m http.server 8000

# OR if you have Node.js:
npx http-server -p 8000

# OR if you have PHP:
php -S localhost:8000
```

Then open: http://localhost:8000

### Option 2: Open Directly

Simply double-click `index.html` to open it in your browser.

### Option 3: VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## 🎛️ Customization

### Enable/Disable Effects

Edit `assets/js/advanced-effects.js` (lines 342-347):

```javascript
// Uncomment to enable, comment to disable
new StarfieldEffect();        // ⭐ Starfield (ACTIVE)
// new DNAHelixEffect();      // 🧬 DNA helix (DISABLED)
// new MatrixRainEffect();    // 💚 Matrix rain (DISABLED)
new GeometricShapes();        // 🔷 Shapes (ACTIVE)
// new WaveAnimation();       // 🌊 Waves (DISABLED)
```

### Adjust Animation Speed

Edit `assets/css/custom-animations.css`:

```css
/* Line 14 - Background gradient speed */
animation: gradientShift 15s ease infinite;  /* Change 15s */

/* Line 25 - Glow pulse speed */
animation: glow 3s ease-in-out infinite;  /* Change 3s */
```

### Change Colors

Edit `assets/css/custom-animations.css`:

```css
/* Line 11 - Background gradient colors */
background: linear-gradient(-45deg, 
    #1a1a2e,    /* Dark blue */
    #16213e,    /* Navy */
    #0f3460,    /* Ocean blue */
    #533483     /* Purple */
);
```

## 🎨 Animation Classes Reference

Add these classes to any HTML element:

| Class | Effect |
|-------|--------|
| `.gradient-text` | Animated color gradient |
| `.shimmer-text` | Shimmering light effect |
| `.neon-glow` | Neon sign effect |
| `.ripple-effect` | Ripple on click |
| `.glitch` | Glitch effect on hover |
| `.tilt-effect` | 3D tilt on mouse move |
| `data-depth="20"` | Parallax movement |

Example:
```html
<h1 class="neon-glow gradient-text">Cool Title</h1>
```

## 📱 Performance Tips

### For Better Performance:
1. **Reduce particles**: In `custom-animations.js` line 41, change `this.maxTrail = 20` to a lower number
2. **Disable heavy effects**: Comment out StarfieldEffect
3. **Simplify background**: Remove geometric shapes

### For Maximum Visual Impact:
1. Enable all effects (including DNA and Matrix)
2. Increase particle counts
3. Add more geometric shapes

## 🐛 Troubleshooting

### Animations not showing?
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console (F12) for errors
- Ensure all files are in correct folders

### Performance issues?
- Disable some effects (see Performance Tips)
- Close other browser tabs
- Try a different browser

### Some effects missing?
- Check that all script files are loading
- Verify file paths in index.html
- Ensure JavaScript is enabled

## 📂 Files Added/Modified

### New Files Created:
- ✅ `assets/css/custom-animations.css` - Main animation styles
- ✅ `assets/js/custom-animations.js` - Interactive animations
- ✅ `assets/js/advanced-effects.js` - Canvas effects
- ✅ `ANIMATIONS.md` - Detailed documentation
- ✅ `QUICKSTART.md` - This file

### Modified Files:
- ✅ `index.html` - Added script/style links and animation classes

### Original Files (Untouched):
- ✅ All other existing files remain unchanged

## 🎯 Next Steps

1. **Test**: Open your website and enjoy the animations!
2. **Customize**: Adjust colors and speeds to your taste
3. **Optimize**: Enable/disable effects based on preference
4. **Deploy**: Push changes to GitHub Pages

## 🚀 Deploying to GitHub Pages

```bash
# In your terminal:
git add .
git commit -m "Add custom animations to homepage"
git push origin main
```

Your animations will be live at: https://nicolavanoli.github.io

## 💡 Tips for Best Experience

- **Desktop**: All effects work best on desktop browsers
- **Chrome/Firefox**: Recommended for full feature support
- **Night Mode**: Animations look stunning in dark environments
- **Fullscreen**: Press F11 for immersive experience

## 🎓 Learning Resources

Want to learn how these work?

- Study `custom-animations.css` for CSS animation techniques
- Review `custom-animations.js` for canvas and DOM manipulation
- Check `advanced-effects.js` for advanced canvas patterns

## 📞 Need Help?

- Check `ANIMATIONS.md` for detailed documentation
- Review browser console for error messages
- Test in different browsers

---

**Enjoy your new animated website! 🎉**

Made with ❤️ by GitHub Copilot
