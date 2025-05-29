// Enhanced Effects for Yoga of Emotions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all effects
    initCustomCursor();
    initChakraSymbols();
    initScrollReveal();
    initChakraLines();
    initBreathingCircle();
});

// Custom Cursor
function initCustomCursor() {
    // Check if we're on mobile
    if (window.innerWidth <= 768) {
        // Don't initialize custom cursor on mobile
        document.body.style.cursor = 'auto';
        return;
    }
    
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    
    const cursorOutline = document.createElement('div');
    cursorOutline.classList.add('cursor-dot-outline');
    
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);
    
    // Trail effect - create particles
    const particles = [];
    const particleCount = 7;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('cursor-dot');
        particle.style.width = '5px';
        particle.style.height = '5px';
        particle.style.opacity = (1 - i / particleCount).toString();
        particle.style.backgroundColor = `rgba(180, 83, 9, ${1 - i / particleCount})`;
        particle.style.zIndex = '9998';
        document.body.appendChild(particle);
        particles.push({
            element: particle,
            x: 0,
            y: 0
        });
    }
    
    let mouseX = 0;
    let mouseY = 0;
    let prevMouseX = 0;
    let prevMouseY = 0;
    
    // Update cursor position
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Move the main cursor elements
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
        
        cursorOutline.style.left = mouseX + 'px';
        cursorOutline.style.top = mouseY + 'px';
        
        // Store previous position for particles
        prevMouseX = mouseX;
        prevMouseY = mouseY;
    });
    
    // Cursor hover effects
    document.addEventListener('mousedown', function() {
        cursorDot.style.transform = 'scale(0.7)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(0.7)';
    });
    
    document.addEventListener('mouseup', function() {
        cursorDot.style.transform = 'scale(1)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    
    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .card, .nav-link');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'scale(0.5)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.backgroundColor = 'rgba(180, 83, 9, 0.3)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'scale(1)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.backgroundColor = 'rgba(180, 83, 9, 0.2)';
        });
    });
    
    // Update particle positions with trail effect
    function updateParticles() {
        // Calculate distance between current and previous position
        const dx = mouseX - prevMouseX;
        const dy = mouseY - prevMouseY;
        
        // Update each particle position
        for (let i = 0; i < particles.length; i++) {
            const particle = particles[i];
            
            // Add delay effect based on particle index
            const delay = (i + 1) * 2;
            
            // Calculate new position with delay
            particle.x += (mouseX - particle.x) / delay;
            particle.y += (mouseY - particle.y) / delay;
            
            // Update particle position
            particle.element.style.left = particle.x + 'px';
            particle.element.style.top = particle.y + 'px';
        }
        
        requestAnimationFrame(updateParticles);
    }
    
    updateParticles();
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            // Remove custom cursor on mobile
            document.body.style.cursor = 'auto';
            cursorDot.style.display = 'none';
            cursorOutline.style.display = 'none';
            particles.forEach(particle => {
                particle.element.style.display = 'none';
            });
        } else {
            // Show custom cursor on desktop
            document.body.style.cursor = 'none';
            cursorDot.style.display = 'block';
            cursorOutline.style.display = 'block';
            particles.forEach(particle => {
                particle.element.style.display = 'block';
            });
        }
    });
}

// Energy Symbols
function initChakraSymbols() {
    // Check if we're on mobile
    if (window.innerWidth <= 768) {
        return; // Don't add symbols on mobile
    }
    
    // Create SVG symbols for energy
    const chakraSymbols = [
        `<svg class="chakra-symbol chakra-symbol-1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(180, 83, 9, 0.5)" stroke-width="2"/>
            <path d="M50 10 L50 90 M10 50 L90 50" stroke="rgba(180, 83, 9, 0.5)" stroke-width="2"/>
        </svg>`,
        `<svg class="chakra-symbol chakra-symbol-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(249, 115, 22, 0.5)" stroke-width="2"/>
            <path d="M30 30 L70 70 M30 70 L70 30" stroke="rgba(249, 115, 22, 0.5)" stroke-width="2"/>
        </svg>`,
        `<svg class="chakra-symbol chakra-symbol-3" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(245, 158, 11, 0.5)" stroke-width="2"/>
            <path d="M50 10 L50 90 M10 50 L90 50 M30 30 L70 70 M30 70 L70 30" stroke="rgba(245, 158, 11, 0.5)" stroke-width="2"/>
        </svg>`,
        `<svg class="chakra-symbol chakra-symbol-4" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(146, 64, 14, 0.5)" stroke-width="2"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="rgba(146, 64, 14, 0.5)" stroke-width="2"/>
            <path d="M50 10 L50 90 M10 50 L90 50" stroke="rgba(146, 64, 14, 0.5)" stroke-width="2"/>
        </svg>`
    ];
    
    // Add symbols to the body
    const symbolsContainer = document.createElement('div');
    symbolsContainer.classList.add('chakra-symbols-container');
    symbolsContainer.style.position = 'fixed';
    symbolsContainer.style.top = '0';
    symbolsContainer.style.left = '0';
    symbolsContainer.style.width = '100%';
    symbolsContainer.style.height = '100%';
    symbolsContainer.style.pointerEvents = 'none';
    symbolsContainer.style.zIndex = '0';
    symbolsContainer.style.overflow = 'hidden';
    
    symbolsContainer.innerHTML = chakraSymbols.join('');
    document.body.appendChild(symbolsContainer);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            symbolsContainer.style.display = 'none';
        } else {
            symbolsContainer.style.display = 'block';
        }
    });
}

// Scroll Reveal Animation
function initScrollReveal() {
    // Add reveal class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('reveal');
    });
    
    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Reveal elements when scrolled into view
    function revealElements() {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('active');
            }
        });
    }
    
    // Initial check
    revealElements();
    
    // Add scroll event listener
    window.addEventListener('scroll', revealElements);
}

// Energy Lines
function initChakraLines() {
    // Create top and bottom energy lines
    const topLine = document.createElement('div');
    topLine.classList.add('chakra-line', 'chakra-line-top');
    
    const bottomLine = document.createElement('div');
    bottomLine.classList.add('chakra-line', 'chakra-line-bottom');
    
    document.body.appendChild(topLine);
    document.body.appendChild(bottomLine);
}

// Breathing Circle Animation
function initBreathingCircle() {
    // Check if there's a section where we want to add the breathing circle
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        const breathingContainer = document.createElement('div');
        breathingContainer.classList.add('breathing-container');
        breathingContainer.style.textAlign = 'center';
        breathingContainer.style.margin = '2rem auto';
        
        const breathingCircle = document.createElement('div');
        breathingCircle.classList.add('breathing-circle');
        
        const breathingText = document.createElement('p');
        breathingText.textContent = 'Breathe with me';
        breathingText.style.marginTop = '1rem';
        breathingText.style.fontStyle = 'italic';
        breathingText.style.color = 'var(--chakra-primary)';
        
        breathingContainer.appendChild(breathingCircle);
        breathingContainer.appendChild(breathingText);
        
        // Insert after the first paragraph in the about section
        const firstParagraph = aboutSection.querySelector('p');
        if (firstParagraph && firstParagraph.parentNode) {
            firstParagraph.parentNode.insertBefore(breathingContainer, firstParagraph.nextSibling);
        } else {
            aboutSection.appendChild(breathingContainer);
        }
    }
}

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('animate-float');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('animate-float');
        });
    });
});

// Add chakra glow effect to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary, .cta-button');
    
    buttons.forEach(button => {
        button.classList.add('chakra-glow');
    });
});
