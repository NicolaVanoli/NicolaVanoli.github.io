/**
 * Advanced Header Animations
 * Special effects for the header/hero section
 */

// Mobile/Touch Detection
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                 ('ontouchstart' in window) || 
                 (navigator.maxTouchPoints > 0);

// Starfield Background Effect
class StarfieldEffect {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
        // Reduce stars on mobile for better performance
        this.numStars = isMobile ? 50 : 200;
        this.init();
    }

    init() {
        this.canvas.id = 'starfield';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '-1';
        
        const wrapper = document.getElementById('wrapper');
        if (wrapper) {
            wrapper.insertBefore(this.canvas, wrapper.firstChild);
        }

        this.resize();
        this.createStars();
        
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createStars() {
        for (let i = 0; i < this.numStars; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                z: Math.random() * this.canvas.width,
                radius: Math.random() * 1.5,
                speed: Math.random() * 0.5 + 0.2
            });
        }
    }

    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;

        this.stars.forEach(star => {
            star.z -= star.speed;

            if (star.z <= 0) {
                star.z = this.canvas.width;
                star.x = Math.random() * this.canvas.width;
                star.y = Math.random() * this.canvas.height;
            }

            const x = (star.x - centerX) * (this.canvas.width / star.z);
            const y = (star.y - centerY) * (this.canvas.width / star.z);
            const size = star.radius * (this.canvas.width / star.z);

            const screenX = x + centerX;
            const screenY = y + centerY;

            this.ctx.beginPath();
            this.ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${1 - star.z / this.canvas.width})`;
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animate());
    }
}

// DNA Helix Animation
class DNAHelixEffect {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        this.init();
    }

    init() {
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.opacity = '0.3';
        this.canvas.style.zIndex = '-1';
        
        const header = document.getElementById('header');
        if (header) {
            header.appendChild(this.canvas);
        }

        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        const centerX = this.canvas.width / 2;
        const amplitude = 100;
        const frequency = 0.02;
        const segments = 50;

        this.ctx.strokeStyle = 'rgba(100, 150, 255, 0.5)';
        this.ctx.lineWidth = 2;

        // Draw first strand
        this.ctx.beginPath();
        for (let i = 0; i < segments; i++) {
            const y = (i / segments) * this.canvas.height;
            const x = centerX + Math.sin(i * frequency + this.time) * amplitude;
            
            if (i === 0) {
                this.ctx.moveTo(x, y);
            } else {
                this.ctx.lineTo(x, y);
            }
        }
        this.ctx.stroke();

        // Draw second strand
        this.ctx.strokeStyle = 'rgba(255, 100, 150, 0.5)';
        this.ctx.beginPath();
        for (let i = 0; i < segments; i++) {
            const y = (i / segments) * this.canvas.height;
            const x = centerX - Math.sin(i * frequency + this.time) * amplitude;
            
            if (i === 0) {
                this.ctx.moveTo(x, y);
            } else {
                this.ctx.lineTo(x, y);
            }
        }
        this.ctx.stroke();

        // Draw connecting lines
        this.ctx.strokeStyle = 'rgba(200, 200, 255, 0.3)';
        this.ctx.lineWidth = 1;
        for (let i = 0; i < segments; i += 3) {
            const y = (i / segments) * this.canvas.height;
            const x1 = centerX + Math.sin(i * frequency + this.time) * amplitude;
            const x2 = centerX - Math.sin(i * frequency + this.time) * amplitude;
            
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y);
            this.ctx.lineTo(x2, y);
            this.ctx.stroke();
        }

        this.time += 0.02;
        requestAnimationFrame(() => this.animate());
    }
}

// Matrix Rain Effect
class MatrixRainEffect {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.columns = [];
        this.fontSize = 14;
        this.chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789αβγδεζηθικλμνξοπρστυφχψω';
        this.init();
    }

    init() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.opacity = '0.2';
        this.canvas.style.zIndex = '-1';
        
        const wrapper = document.getElementById('wrapper');
        if (wrapper) {
            wrapper.insertBefore(this.canvas, wrapper.firstChild);
        }

        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        const numColumns = Math.floor(this.canvas.width / this.fontSize);
        this.columns = Array(numColumns).fill(1);
    }

    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#0F0';
        this.ctx.font = this.fontSize + 'px monospace';

        for (let i = 0; i < this.columns.length; i++) {
            const text = this.chars.charAt(Math.floor(Math.random() * this.chars.length));
            const x = i * this.fontSize;
            const y = this.columns[i] * this.fontSize;
            
            this.ctx.fillText(text, x, y);
            
            if (y > this.canvas.height && Math.random() > 0.975) {
                this.columns[i] = 0;
            }
            
            this.columns[i]++;
        }

        setTimeout(() => requestAnimationFrame(() => this.animate()), 50);
    }
}

// Geometric Shapes Floating
class GeometricShapes {
    constructor() {
        this.shapes = [];
        this.numShapes = 15;
        this.init();
    }

    init() {
        const wrapper = document.getElementById('wrapper');
        if (!wrapper) return;

        for (let i = 0; i < this.numShapes; i++) {
            const shape = document.createElement('div');
            shape.className = 'geometric-shape';
            
            const types = ['circle', 'square', 'triangle'];
            const type = types[Math.floor(Math.random() * types.length)];
            
            shape.style.position = 'absolute';
            shape.style.width = Math.random() * 100 + 50 + 'px';
            shape.style.height = shape.style.width;
            shape.style.left = Math.random() * 100 + '%';
            shape.style.top = Math.random() * 100 + '%';
            shape.style.opacity = '0.1';
            shape.style.pointerEvents = 'none';
            shape.style.zIndex = '-1';
            
            if (type === 'circle') {
                shape.style.borderRadius = '50%';
                shape.style.border = '2px solid rgba(255, 255, 255, 0.3)';
            } else if (type === 'square') {
                shape.style.border = '2px solid rgba(100, 150, 255, 0.3)';
                shape.style.transform = 'rotate(' + Math.random() * 45 + 'deg)';
            } else {
                shape.style.width = '0';
                shape.style.height = '0';
                shape.style.borderLeft = '50px solid transparent';
                shape.style.borderRight = '50px solid transparent';
                shape.style.borderBottom = '100px solid rgba(255, 100, 150, 0.3)';
            }
            
            const duration = Math.random() * 20 + 10;
            shape.style.animation = `floatShape ${duration}s ease-in-out infinite`;
            
            wrapper.appendChild(shape);
            this.shapes.push(shape);
        }

        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatShape {
                0%, 100% {
                    transform: translate(0, 0) rotate(0deg);
                }
                25% {
                    transform: translate(50px, -50px) rotate(90deg);
                }
                50% {
                    transform: translate(0, -100px) rotate(180deg);
                }
                75% {
                    transform: translate(-50px, -50px) rotate(270deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Wave Animation
class WaveAnimation {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        this.waves = [
            { amplitude: 50, frequency: 0.02, speed: 0.03, color: 'rgba(100, 150, 255, 0.3)' },
            { amplitude: 30, frequency: 0.03, speed: 0.02, color: 'rgba(150, 100, 255, 0.2)' },
            { amplitude: 40, frequency: 0.025, speed: 0.025, color: 'rgba(255, 100, 200, 0.2)' }
        ];
        this.init();
    }

    init() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.bottom = '0';
        this.canvas.style.left = '0';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '-1';
        
        const wrapper = document.getElementById('wrapper');
        if (wrapper) {
            wrapper.appendChild(this.canvas);
        }

        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = 200;
    }

    drawWave(amplitude, frequency, speed, color, offset) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.canvas.height / 2);

        for (let x = 0; x < this.canvas.width; x++) {
            const y = this.canvas.height / 2 + 
                     Math.sin(x * frequency + this.time * speed + offset) * amplitude;
            this.ctx.lineTo(x, y);
        }

        this.ctx.lineTo(this.canvas.width, this.canvas.height);
        this.ctx.lineTo(0, this.canvas.height);
        this.ctx.closePath();
        
        this.ctx.fillStyle = color;
        this.ctx.fill();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.waves.forEach((wave, index) => {
            this.drawWave(
                wave.amplitude,
                wave.frequency,
                wave.speed,
                wave.color,
                index * Math.PI / 3
            );
        });

        this.time += 0.5;
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize advanced effects
(function() {
    'use strict';

    function initAdvancedEffects() {
        setTimeout(() => {
            if (isMobile) {
                // Mobile: NO effects at all for maximum performance
                console.log('Mobile device detected - all canvas effects disabled for performance');
                return; // Exit completely on mobile
            } else {
                // Desktop: all effects
                new StarfieldEffect();        // Stars moving toward you
                // new DNAHelixEffect();      // DNA helix pattern
                // new MatrixRainEffect();    // Matrix-style falling code
                new GeometricShapes();        // Floating geometric shapes
                // new WaveAnimation();       // Wave animation at bottom (DISABLED)
            }
        }, 200);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAdvancedEffects);
    } else {
        initAdvancedEffects();
    }

})();
