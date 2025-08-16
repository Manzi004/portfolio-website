// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio loaded successfully!');
    
    // Initialize first section as visible
    const homeSection = document.querySelector('#home');
    if (homeSection) {
        homeSection.classList.add('visible');
    }
    
    // Initialize all functionality
    setupNavigation();
    setupScrollAnimations();
    setupSkillAnimations();
    
    console.log('✅ All features initialized');
});

// Fixed Navigation functionality
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            console.log('Nav clicked:', this.getAttribute('href'));
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Smooth scroll to target section
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                console.log('✅ Scrolled to:', targetId);
            } else {
                console.log('❌ Section not found:', targetId);
            }
        });
    });
    
    console.log('✅ Navigation setup complete');
}

// Scroll animations and active nav updating
function setupScrollAnimations() {
    // Intersection Observer for section animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        sectionObserver.observe(section);
    });

    // Update active navigation on scroll
    window.addEventListener('scroll', function() {
        let current = 'home'; // default to home
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    console.log('✅ Scroll animations setup complete');
}

// Skills progress bar animations
function setupSkillAnimations() {
    const skillsSection = document.querySelector('#skills');
    
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        animateSkillBars();
                        animateProjectProgress();
                    }, 500);
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        skillsObserver.observe(skillsSection);
    }
    
    console.log('✅ Skill animations setup complete');
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar, index) => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width + '%';
        }, index * 100);
    });
    
    console.log('✅ Skill bars animated');
}

function animateProjectProgress() {
    const progressBars = document.querySelectorAll('.progress-fill-small');
    
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        setTimeout(() => {
            bar.style.width = progress + '%';
        }, 1000);
    });
    
    console.log('✅ Project progress animated');
}

// Demo function for AI project
function showDemo() {
    alert('🤖 Fake News Detector AI\n\n' +
          'Project Status: 60% Complete\n' +
          'Currently in ML Model Training Phase\n\n' +
          'Features:\n' +
          '• Text preprocessing and analysis\n' +
          '• Sentiment analysis and bias detection\n' +
          '• Machine learning classification\n' +
          '• Real-time credibility scoring\n' +
          '• Source reliability tracking\n\n' +
          'Technology Stack:\n' +
          '• Frontend: Angular, TypeScript\n' +
          '• Backend: Node.js, Express.js\n' +
          '• AI/ML: Python, TensorFlow, NLTK\n' +
          '• Database: MongoDB\n\n' +
          'Full interactive demo coming soon!');
}

// Enhanced development status function for AI project
function showDevStatus() {
    const statusMessage = `
🤖 Fake News Detector AI - Development Status

📅 Started: January 2025
🎯 Expected Completion: Q2 2025

📊 Current Progress: 60%

✅ COMPLETED PHASES:
• Project Planning & Research
• Dataset Collection & Preparation
• Data Preprocessing Pipeline
• Initial Model Architecture Design

🔄 CURRENT PHASE:
• Machine Learning Model Training
• Algorithm Testing & Optimization
• Accuracy Improvements

⏳ UPCOMING PHASES:
• Angular Frontend Development
• Node.js Backend API
• Model Integration
• Testing & Deployment

🛠️ TECH STACK:
• Frontend: Angular 17, TypeScript, Angular Material
• Backend: Node.js, Express.js, MongoDB
• AI/ML: Python, TensorFlow, NLTK, spaCy, Scikit-learn
• Deployment: Docker, Cloud Services

📧 Want updates? Contact me at manzi.ishimwe2023@gmail.com

🚀 This project will be open-sourced once development is complete!
    `;
    
    alert(statusMessage);
}

// Enhanced hover effects for project cards
document.addEventListener('DOMContentLoaded', function() {
    // Enhanced hover effects for project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px)';
            card.style.boxShadow = '0 30px 80px rgba(102, 126, 234, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08)';
        });
    });

    // Enhanced hover effects for skill cards
    document.querySelectorAll('.skills-category').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 25px 50px rgba(102, 126, 234, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08)';
        });
    });

    // Add ripple effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Skip ripple for navigation buttons and disabled buttons
            if (this.classList.contains('nav-link') || this.classList.contains('btn-disabled')) return;
            
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple animation dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Console welcome message
console.log(`
🚀 Welcome to Manzi's Portfolio!
👋 Thanks for checking out the code.
💼 Built with HTML, CSS, and JavaScript
🎨 Featuring modern design and animations
📧 Contact: manzi.ishimwe2023@gmail.com
🔗 GitHub: https://github.com/Manzi004

If you're interested in working together, let's connect!
`);

// Optional: Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log(`⚡ Page loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
        }, 0);
    });
}