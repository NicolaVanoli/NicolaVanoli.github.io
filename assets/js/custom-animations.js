/**
 * Custom Interactive Animations for Home Page
 * Adds particle effects, parallax, and interactive elements
 */

(function() {
    'use strict';

    // Custom Cursor
    class CustomCursor {
        constructor() {
            this.cursor = null;
            this.cursorDot = null;
            this.cursorOutline = null;
            this.mouseX = 0;
            this.mouseY = 0;
            this.cursorX = 0;
            this.cursorY = 0;
            this.lastSparkleTime = 0;
            this.init();
        }

        init() {
            // Create cursor elements
            this.cursor = document.createElement('div');
            this.cursor.className = 'custom-cursor';
            
            this.cursorDot = document.createElement('div');
            this.cursorDot.className = 'cursor-dot';
            
            this.cursorOutline = document.createElement('div');
            this.cursorOutline.className = 'cursor-outline';
            
            this.cursor.appendChild(this.cursorDot);
            this.cursor.appendChild(this.cursorOutline);
            document.body.appendChild(this.cursor);

            // Track mouse movement
            document.addEventListener('mousemove', (e) => {
                this.mouseX = e.clientX;
                this.mouseY = e.clientY;
                
                // Create trail particles more frequently
                if (Math.random() > 0.7) {
                    this.createTrailParticle(e.clientX, e.clientY);
                }

                // Create sparkles more frequently for trail effect
                const now = Date.now();
                if (now - this.lastSparkleTime > 50 && Math.random() > 0.5) {
                    this.createSparkle(e.clientX, e.clientY);
                    this.lastSparkleTime = now;
                }
            });

            // Add hover effects on interactive elements
            const interactiveElements = document.querySelectorAll('a, button, .close, input[type="submit"], input[type="reset"]');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    this.cursor.classList.add('hover');
                    this.createSparkles(this.mouseX, this.mouseY, 3);
                });
                el.addEventListener('mouseleave', () => {
                    this.cursor.classList.remove('hover');
                });
            });

            // Add click effect with burst
            document.addEventListener('mousedown', () => {
                this.cursor.classList.add('click');
                this.createSparkles(this.mouseX, this.mouseY, 8);
            });

            document.addEventListener('mouseup', () => {
                this.cursor.classList.remove('click');
            });

            // Smooth cursor movement
            this.animate();
        }

        createTrailParticle(x, y) {
            const particle = document.createElement('div');
            particle.className = 'cursor-trail-particle';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 800);
        }

        createSparkle(x, y) {
            const sparkle = document.createElement('div');
            sparkle.className = 'cursor-sparkle';
            const offsetX = (Math.random() - 0.5) * 20;
            const offsetY = (Math.random() - 0.5) * 20;
            sparkle.style.left = (x + offsetX) + 'px';
            sparkle.style.top = (y + offsetY) + 'px';
            document.body.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 400);
        }

        createSparkles(x, y, count) {
            for (let i = 0; i < count; i++) {
                setTimeout(() => {
                    this.createSparkle(x, y);
                }, i * 30);
            }
        }

        animate() {
            // Smooth lerp for cursor position
            const speed = 0.15;
            this.cursorX += (this.mouseX - this.cursorX) * speed;
            this.cursorY += (this.mouseY - this.cursorY) * speed;
            
            this.cursor.style.left = this.cursorX + 'px';
            this.cursor.style.top = this.cursorY + 'px';
            
            requestAnimationFrame(() => this.animate());
        }
    }

    // Particle System with Mouse Tracking
    class ParticleSystem {
        constructor() {
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.particles = [];
            this.mouseX = 0;
            this.mouseY = 0;
            this.init();
        }

        init() {
            this.canvas.style.position = 'fixed';
            this.canvas.style.top = '0';
            this.canvas.style.left = '0';
            this.canvas.style.pointerEvents = 'none';
            this.canvas.style.zIndex = '-1';
            document.body.insertBefore(this.canvas, document.body.firstChild);
            
            this.resize();
            window.addEventListener('resize', () => this.resize());
            document.addEventListener('mousemove', (e) => this.onMouseMove(e));
            
            this.animate();
        }

        resize() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }

        onMouseMove(e) {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            
            // Create particles on mouse move
            if (Math.random() > 0.8) {
                this.createParticle(e.clientX, e.clientY);
            }
        }

        createParticle(x, y) {
            const particle = {
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                life: 1,
                decay: Math.random() * 0.01 + 0.005,
                size: Math.random() * 3 + 1,
                color: `hsl(${Math.random() * 60 + 180}, 100%, 70%)`
            };
            this.particles.push(particle);
        }

        animate() {
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            for (let i = this.particles.length - 1; i >= 0; i--) {
                const p = this.particles[i];
                
                p.x += p.vx;
                p.y += p.vy;
                p.life -= p.decay;
                
                if (p.life <= 0) {
                    this.particles.splice(i, 1);
                    continue;
                }

                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                this.ctx.fillStyle = p.color;
                this.ctx.globalAlpha = p.life;
                this.ctx.fill();
            }
            
            this.ctx.globalAlpha = 1;
            requestAnimationFrame(() => this.animate());
        }
    }

    // Parallax Effect
    class ParallaxEffect {
        constructor() {
            this.elements = document.querySelectorAll('[data-parallax]');
            this.init();
        }

        init() {
            window.addEventListener('scroll', () => this.onScroll());
            document.addEventListener('mousemove', (e) => this.onMouseMove(e));
        }

        onScroll() {
            const scrolled = window.pageYOffset;
            this.elements.forEach(el => {
                const speed = el.dataset.parallax || 0.5;
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        }

        onMouseMove(e) {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            this.elements.forEach(el => {
                const depth = el.dataset.depth || 20;
                const moveX = mouseX * depth;
                const moveY = mouseY * depth;
                el.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        }
    }

    // Magnetic Button Effect
    class MagneticButtons {
        constructor() {
            this.buttons = document.querySelectorAll('nav a, button');
            this.init();
        }

        init() {
            this.buttons.forEach(button => {
                button.addEventListener('mousemove', (e) => this.onMouseMove(e, button));
                button.addEventListener('mouseleave', () => this.onMouseLeave(button));
            });
        }

        onMouseMove(e, button) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        }

        onMouseLeave(button) {
            button.style.transform = 'translate(0, 0)';
        }
    }

    // Ripple Effect on Click
    class RippleEffect {
        constructor() {
            this.init();
        }

        init() {
            document.addEventListener('click', (e) => this.createRipple(e));
        }

        createRipple(e) {
            const ripple = document.createElement('div');
            ripple.className = 'ripple-circle';
            ripple.style.position = 'fixed';
            ripple.style.left = e.clientX + 'px';
            ripple.style.top = e.clientY + 'px';
            ripple.style.width = '10px';
            ripple.style.height = '10px';
            ripple.style.borderRadius = '50%';
            ripple.style.border = '2px solid rgba(255, 255, 255, 0.5)';
            ripple.style.pointerEvents = 'none';
            ripple.style.zIndex = '1000';
            ripple.style.animation = 'rippleExpand 0.6s ease-out';
            
            document.body.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        }
    }

    // Scroll-triggered Animations
    class ScrollAnimations {
        constructor() {
            this.elements = document.querySelectorAll('.animate-on-scroll');
            this.init();
        }

        init() {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            }, { threshold: 0.1 });

            this.elements.forEach(el => this.observer.observe(el));
        }
    }

    // 3D Tilt Effect
    class TiltEffect {
        constructor() {
            this.elements = document.querySelectorAll('.tilt-effect');
            this.init();
        }

        init() {
            this.elements.forEach(el => {
                el.addEventListener('mousemove', (e) => this.onMouseMove(e, el));
                el.addEventListener('mouseleave', () => this.onMouseLeave(el));
            });
        }

        onMouseMove(e, el) {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        }

        onMouseLeave(el) {
            el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        }
    }

    // Cursor Trail Effect
    class CursorTrail {
        constructor() {
            this.trail = [];
            this.maxTrail = 20;
            this.init();
        }

        init() {
            document.addEventListener('mousemove', (e) => this.onMouseMove(e));
            this.animate();
        }

        onMouseMove(e) {
            this.trail.push({
                x: e.clientX,
                y: e.clientY,
                opacity: 1
            });

            if (this.trail.length > this.maxTrail) {
                this.trail.shift();
            }
        }

        animate() {
            this.trail.forEach((point, index) => {
                point.opacity -= 0.05;
                
                if (point.opacity > 0 && index > 0) {
                    const dot = document.createElement('div');
                    dot.className = 'cursor-dot';
                    dot.style.position = 'fixed';
                    dot.style.left = point.x + 'px';
                    dot.style.top = point.y + 'px';
                    dot.style.width = '4px';
                    dot.style.height = '4px';
                    dot.style.borderRadius = '50%';
                    dot.style.background = `rgba(100, 150, 255, ${point.opacity})`;
                    dot.style.pointerEvents = 'none';
                    dot.style.zIndex = '-1';
                    
                    document.body.appendChild(dot);
                    setTimeout(() => dot.remove(), 50);
                }
            });

            requestAnimationFrame(() => this.animate());
        }
    }

    // Floating Elements
    class FloatingElements {
        constructor() {
            this.createFloatingShapes();
        }

        createFloatingShapes() {
            const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe'];
            
            for (let i = 0; i < 5; i++) {
                const shape = document.createElement('div');
                shape.className = 'bg-shape';
                shape.style.position = 'absolute';
                shape.style.width = Math.random() * 300 + 100 + 'px';
                shape.style.height = Math.random() * 300 + 100 + 'px';
                shape.style.background = colors[Math.floor(Math.random() * colors.length)];
                shape.style.left = Math.random() * 100 + '%';
                shape.style.top = Math.random() * 100 + '%';
                shape.style.animationDelay = Math.random() * 10 + 's';
                
                document.getElementById('wrapper').appendChild(shape);
            }
        }
    }

    // Text Reveal Animation
    class TextReveal {
        constructor() {
            this.init();
        }

        init() {
            const headers = document.querySelectorAll('h1, h2');
            headers.forEach(header => {
                const text = header.textContent;
                header.innerHTML = '';
                
                text.split('').forEach((char, index) => {
                    const span = document.createElement('span');
                    span.textContent = char;
                    span.style.opacity = '0';
                    span.style.animation = `fadeInUp 0.5s ease-out ${index * 0.05}s forwards`;
                    header.appendChild(span);
                });
            });
        }
    }

    // Initialize all effects when DOM is ready
    function initializeEffects() {
        // Wait for page load
        setTimeout(() => {
            new CustomCursor();           // Custom cursor with effects
            new ParticleSystem();
            new ParallaxEffect();
            new MagneticButtons();
            new RippleEffect();
            new ScrollAnimations();
            new TiltEffect();
            new CursorTrail();
            new FloatingElements();
            new SectionAnimations();  // New: Section-specific animations
            
            // Add CSS for ripple animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes rippleExpand {
                    0% {
                        transform: translate(-50%, -50%) scale(0);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(20);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }, 100);
    }

    // Section-specific animations
    class SectionAnimations {
        constructor() {
            this.articles = document.querySelectorAll('#main article');
            this.isClosing = false;
            this.init();
        }

        init() {
            // Observe article visibility
            const observer = new MutationObserver((mutations) => {
                mutations.forEach(mutation => {
                    if (mutation.attributeName === 'class') {
                        const article = mutation.target;
                        
                        if (article.classList.contains('active') && !this.isClosing) {
                            // Article is opening
                            this.animateArticleContent(article);
                        } else if (!article.classList.contains('active')) {
                            // Article is closing - disable animations
                            this.isClosing = true;
                            this.disableAnimations(article);
                            setTimeout(() => {
                                this.isClosing = false;
                            }, 500);
                        }
                    }
                });
            });

            this.articles.forEach(article => {
                observer.observe(article, { attributes: true, attributeFilter: ['class'] });
                
                // If already active, animate
                if (article.classList.contains('active')) {
                    this.animateArticleContent(article);
                }
            });

            // Add hover effects to project containers
            this.addProjectHoverEffects();
            
            // Add form field effects
            this.addFormEffects();
        }

        disableAnimations(article) {
            // Remove animation classes temporarily during close
            const animatedElements = article.querySelectorAll('[style*="animation"]');
            animatedElements.forEach(el => {
                el.style.animation = 'none';
            });
        }

        animateArticleContent(article) {
            // Skip if closing
            if (this.isClosing) return;

            // Animate heading
            const heading = article.querySelector('h2.major');
            if (heading && !heading.classList.contains('animated')) {
                heading.classList.add('animated');
            }

            // Stagger paragraph animations
            const paragraphs = article.querySelectorAll('p');
            paragraphs.forEach((p, index) => {
                setTimeout(() => {
                    if (!this.isClosing) {
                        p.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    }
                }, index * 100);
            });
        }

        addProjectHoverEffects() {
            const containers = document.querySelectorAll('.container');
            containers.forEach(container => {
                container.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                });
                
                container.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        }

        addFormEffects() {
            const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea, select');
            
            inputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.style.animation = 'inputPulse 1s ease-in-out';
                });

                input.addEventListener('blur', function() {
                    this.style.animation = '';
                });
            });
        }
    }

    // Start when page is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeEffects);
    } else {
        initializeEffects();
    }

})();
