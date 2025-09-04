// Main JavaScript functionality for Sug website

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    // Remove sections array since we're not doing single-page navigation anymore

    // Smooth scrolling for navigation links (only for internal links)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for internal links (starting with #)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            // For external links (like services.html, products.html), allow normal navigation
        });
    });

    // Remove scroll-based active navigation since we're not doing single-page navigation

    // Add fade-in animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all feature cards and offering items
    document.querySelectorAll('.feature-card, .offering-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // FAQ Accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isOpen = answer.style.display === 'block';
            
            // Close all other answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });
            
            // Toggle current answer
            answer.style.display = isOpen ? 'none' : 'block';
        });
    });

    // Scrollable categories tabs functionality
    const categoriesContainer = document.querySelector('.categories-horizontal');
    if (categoriesContainer) {
        // Add scroll indicators
        const addScrollIndicators = () => {
            const isScrollable = categoriesContainer.scrollWidth > categoriesContainer.clientWidth;
            const container = categoriesContainer.closest('.results-categories-container');
            
            if (isScrollable) {
                container.classList.add('scrollable');
            } else {
                container.classList.remove('scrollable');
            }
        };

        // Check on load and resize
        addScrollIndicators();
        window.addEventListener('resize', addScrollIndicators);

        // Smooth scroll to category when clicked
        const categoryLinks = categoriesContainer.querySelectorAll('.category-link-horizontal');
        categoryLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all links
                categoryLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Scroll the clicked category into view
                this.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            });
        });
    }

    // Mobile navigation toggle functionality
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileNavToggle && nav) {
        mobileNavToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Toggle navigation
            nav.classList.toggle('active');
            this.classList.toggle('active');
            
            // Update ARIA attributes
            this.setAttribute('aria-expanded', !isExpanded);
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close mobile menu when clicking on a link (only for mobile navigation)
        const mobileNavLinks = nav.querySelectorAll('.nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Close mobile menu
                nav.classList.remove('active');
                mobileNavToggle.classList.remove('active');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                
                // Allow normal navigation for external links
                const href = this.getAttribute('href');
                if (href && !href.startsWith('#')) {
                    // This will allow the default navigation behavior
                }
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !mobileNavToggle.contains(e.target)) {
                nav.classList.remove('active');
                mobileNavToggle.classList.remove('active');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
        
        // Close mobile menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                nav.classList.remove('active');
                mobileNavToggle.classList.remove('active');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

    // Hero Slider functionality
    const heroSlider = {
        currentSlide: 1,
        totalSlides: 3,
        autoPlayInterval: null,
        autoPlayDelay: 5000, // 5 seconds

        init: function() {
            this.slides = document.querySelectorAll('.hero-slide');
            this.indicators = document.querySelectorAll('.slider-indicator');
            this.prevBtn = document.querySelector('.slider-nav-btn.prev');
            this.nextBtn = document.querySelector('.slider-nav-btn.next');

            if (this.slides.length > 0) {
                this.bindEvents();
                this.startAutoPlay();
            }
        },

        bindEvents: function() {
            // Previous button
            if (this.prevBtn) {
                this.prevBtn.addEventListener('click', () => {
                    this.prevSlide();
                });
            }

            // Next button
            if (this.nextBtn) {
                this.nextBtn.addEventListener('click', () => {
                    this.nextSlide();
                });
            }

            // Indicators
            this.indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    this.goToSlide(index + 1);
                });
            });

            // Pause auto-play on hover
            const sliderContainer = document.querySelector('.hero-slider');
            if (sliderContainer) {
                sliderContainer.addEventListener('mouseenter', () => {
                    this.pauseAutoPlay();
                });

                sliderContainer.addEventListener('mouseleave', () => {
                    this.startAutoPlay();
                });
            }

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    this.prevSlide();
                } else if (e.key === 'ArrowRight') {
                    this.nextSlide();
                }
            });
        },

        goToSlide: function(slideNumber) {
            if (slideNumber < 1 || slideNumber > this.totalSlides) return;

            // Remove active classes
            this.slides.forEach(slide => {
                slide.classList.remove('active', 'prev', 'next');
            });

            this.indicators.forEach(indicator => {
                indicator.classList.remove('active');
            });

            // Add active class to current slide
            const currentSlide = document.querySelector(`[data-slide="${slideNumber}"]`);
            if (currentSlide) {
                currentSlide.classList.add('active');
            }

            // Add active class to current indicator
            const currentIndicator = document.querySelector(`.slider-indicator[data-slide="${slideNumber}"]`);
            if (currentIndicator) {
                currentIndicator.classList.add('active');
            }

            this.currentSlide = slideNumber;
        },

        nextSlide: function() {
            const nextSlideNumber = this.currentSlide === this.totalSlides ? 1 : this.currentSlide + 1;
            this.goToSlide(nextSlideNumber);
        },

        prevSlide: function() {
            const prevSlideNumber = this.currentSlide === 1 ? this.totalSlides : this.currentSlide - 1;
            this.goToSlide(prevSlideNumber);
        },

        startAutoPlay: function() {
            this.autoPlayInterval = setInterval(() => {
                this.nextSlide();
            }, this.autoPlayDelay);
        },

        pauseAutoPlay: function() {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
                this.autoPlayInterval = null;
            }
        }
    };

    // Initialize hero slider
    heroSlider.init();

    // Smooth scroll for all internal links (only those starting with #)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });

    // EmailJS Configuration and Contact Form Handling
    (function() {
        // Wait for EmailJS to be fully loaded
        if (typeof emailjs === 'undefined') {
            console.error('EmailJS not loaded! Check if the script is loading properly.');
            return;
        }
        
        // Initialize EmailJS with your Public Key (User ID)
        try {
            // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS Public Key from dashboard
            emailjs.init('rMxppyKpJoh4YPkKE');
            console.log('EmailJS initialized successfully with Public Key');
        } catch (error) {
            console.error('Failed to initialize EmailJS:', error);
            return;
        }
        
        // Contact form handling
        const contactForms = document.querySelectorAll('form[data-contact]');
        if (contactForms.length === 0) {
            console.warn('No contact forms found with data-contact attribute');
            return;
        }
        
        console.log('Found', contactForms.length, 'contact form(s)');
        
        contactForms.forEach((form, index) => {
            console.log(`Setting up form ${index + 1}:`, form);
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                console.log('Form submitted, preventing default');
                handleContactFormSubmission(this);
            });
        });
        
        function handleContactFormSubmission(form) {
            // Get form data
            const formData = new FormData(form);
            const submitBtn = form.querySelector('.btn-submit');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            
            // Prepare email parameters
            const templateParams = {
                from_name: formData.get('name'),
                from_email: formData.get('email'),
                from_phone: formData.get('phone'),
                service_needed: formData.get('service'),
                message: formData.get('message'),
                to_name: 'Sug Team'
            };
            console.log('Template params:', templateParams);

            // Debug logging to help identify the issue
            console.log('=== EMAILJS DEBUG INFO ===');
            console.log('Form data:', templateParams);
            console.log('Service ID:', 'service_ukqt9bm');
            console.log('Template ID:', 'template_vg5pyxu');
            console.log('EmailJS object:', typeof emailjs);
            console.log('EmailJS initialized:', emailjs.init);
            console.log('EmailJS send function:', typeof emailjs.send);
            console.log('========================');
            
            // Validate EmailJS before sending
            if (typeof emailjs.send !== 'function') {
                console.error('EmailJS send function not available!');
                throw new Error('EmailJS not properly initialized');
            }
            
            console.log('Attempting to send email...');
            emailjs.send('service_ukqt9bm', 'template_vg5pyxu', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Show success message
                    showFormMessage(form, 'success', 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
                    
                    // Reset form
                    form.reset();
                    
                    // Reset button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                })
                .catch(function(error) {
                    console.log('FAILED...', error);
                    console.log('Error details:', {
                        status: error.status,
                        text: error.text,
                        message: error.message
                    });
                    
                    // Show error message
                    showFormMessage(form, 'error', 'Sorry, there was an error sending your message. Please try again or contact us directly.');
                    
                    // Reset button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                });
        }
        
        function showFormMessage(form, type, message) {
            // Remove existing messages
            const existingMessage = form.querySelector('.form-message');
            if (existingMessage) {
                existingMessage.remove();
            }
            
            // Create message element
            const messageDiv = document.createElement('div');
            messageDiv.className = `form-message ${type}`;
            messageDiv.innerHTML = `
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
            `;
            
            // Insert message after form
            form.parentNode.insertBefore(messageDiv, form.nextSibling);
            
            // Auto-remove message after 5 seconds
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.remove();
                }
            }, 5000);
        }
        
        // Form validation
        const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    clearFieldError(this);
                }
            });
        });
        
        function validateField(field) {
            const value = field.value.trim();
            let isValid = true;
            let errorMessage = '';
            
            // Required field validation
            if (field.hasAttribute('required') && !value) {
                isValid = false;
                errorMessage = 'This field is required.';
            }
            
            // Email validation
            if (field.type === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address.';
                }
            }
            
            // Phone validation
            if (field.type === 'tel' && value) {
                const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
                if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
                    isValid = false;
                    errorMessage = 'Please enter a valid phone number.';
                }
            }
            
            if (!isValid) {
                showFieldError(field, errorMessage);
            } else {
                clearFieldError(field);
            }
            
            return isValid;
        }
        
        function showFieldError(field, message) {
            clearFieldError(field);
            
            field.classList.add('error');
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'field-error';
            errorDiv.textContent = message;
            
            field.parentNode.appendChild(errorDiv);
        }
        
        function clearFieldError(field) {
            field.classList.remove('error');
            
            const errorDiv = field.parentNode.querySelector('.field-error');
            if (errorDiv) {
                errorDiv.remove();
            }
        }
    })();

    // Add scroll-to-top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollToTopBtn);

    // Show/hide scroll-to-top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add CSS for scroll-to-top button
    const scrollToTopStyles = `
        .scroll-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            font-size: 20px;
            display: none;
            z-index: 1000;
            transition: all 0.3s ease;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .scroll-to-top:hover {
            background: #0056b3;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
    `;

    // Inject styles if not already present
    if (!document.querySelector('#scroll-to-top-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'scroll-to-top-styles';
        styleSheet.textContent = scrollToTopStyles;
        document.head.appendChild(styleSheet);
    }
});

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize lazy loading when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', lazyLoadImages);
} else {
    lazyLoadImages();
}

// Add smooth scrolling polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js';
    document.head.appendChild(script);
}

// ===== COMPREHENSIVE ANIMATION SYSTEM =====

// Advanced Animation Controller
class AnimationController {
    constructor() {
        this.animatedElements = new Map();
        this.intersectionObserver = null;
        this.scrollAnimations = new Map();
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupScrollAnimations();
        this.setupHoverAnimations();
        this.setupTextAnimations();
        this.setupCounterAnimations();
        this.setupParallaxEffects();
        this.setupMorphingShapes();
        this.setupGradientAnimations();
        this.setupTypingEffects();
        this.setupCardFlipAnimations();
        this.setupProgressBars();
        this.setupFloatingElements();
        this.setupLoadingAnimations();
        this.setupStaggeredAnimations();
        this.setupPerformanceOptimizations();
    }

    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        this.intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, options);

        // Observe all elements with animation classes
        const animatedElements = document.querySelectorAll('[class*="animate"], [class*="fade-"], [class*="slide-"], [class*="scale-"], [class*="bounce-"], [class*="rotate-"], [class*="flip-"], [class*="zoom-"]');
        
        animatedElements.forEach(element => {
            this.intersectionObserver.observe(element);
            this.animatedElements.set(element, {
                animated: false,
                classes: this.getAnimationClasses(element)
            });
        });
    }

    getAnimationClasses(element) {
        const classes = [];
        const classList = element.className.split(' ');
        
        classList.forEach(cls => {
            if (cls.includes('animate') || cls.includes('fade-') || cls.includes('slide-') || 
                cls.includes('scale-') || cls.includes('bounce-') || cls.includes('rotate-') || 
                cls.includes('flip-') || cls.includes('zoom-')) {
                classes.push(cls);
            }
        });
        
        return classes;
    }

    animateElement(element) {
        const elementData = this.animatedElements.get(element);
        if (!elementData || elementData.animated) return;

        elementData.animated = true;
        
        // Add animation classes with delays
        elementData.classes.forEach((cls, index) => {
            setTimeout(() => {
                element.classList.add(cls);
                element.style.opacity = '1';
                element.style.transform = 'none';
            }, index * 200);
        });
    }

    setupScrollAnimations() {
        const scrollElements = document.querySelectorAll('[data-scroll-animation]');
        
        scrollElements.forEach(element => {
            const animationType = element.dataset.scrollAnimation;
            const threshold = parseFloat(element.dataset.scrollThreshold) || 0.5;
            
            this.scrollAnimations.set(element, {
                type: animationType,
                threshold: threshold,
                animated: false
            });
        });

        window.addEventListener('scroll', this.handleScrollAnimations.bind(this));
    }

    handleScrollAnimations() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        this.scrollAnimations.forEach((data, element) => {
            if (data.animated) return;

            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrollY;
            const elementHeight = rect.height;
            const triggerPoint = elementTop + (elementHeight * data.threshold);

            if (scrollY + windowHeight >= triggerPoint) {
                this.triggerScrollAnimation(element, data.type);
                data.animated = true;
            }
        });
    }

    triggerScrollAnimation(element, type) {
        switch (type) {
            case 'fade-in':
                element.classList.add('fade-in');
                break;
            case 'slide-up':
                element.classList.add('slide-in-up');
                break;
            case 'slide-left':
                element.classList.add('slide-in-left');
                break;
            case 'slide-right':
                element.classList.add('slide-in-right');
                break;
            case 'scale-in':
                element.classList.add('scale-in');
                break;
            case 'bounce-in':
                element.classList.add('bounce-in');
                break;
            case 'rotate-in':
                element.classList.add('rotate-in');
                break;
            case 'flip-in-x':
                element.classList.add('flip-in-x');
                break;
            case 'flip-in-y':
                element.classList.add('flip-in-y');
                break;
            case 'zoom-in':
                element.classList.add('zoom-in');
                break;
        }
    }

    setupHoverAnimations() {
        const hoverElements = document.querySelectorAll('[class*="hover-"]');
        
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', this.handleHoverEnter.bind(this));
            element.addEventListener('mouseleave', this.handleHoverLeave.bind(this));
        });
    }

    handleHoverEnter(event) {
        const element = event.currentTarget;
        const classes = element.className.split(' ');
        
        classes.forEach(cls => {
            if (cls === 'hover-lift') {
                element.style.transform = 'translateY(-5px)';
                element.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
            } else if (cls === 'hover-scale') {
                element.style.transform = 'scale(1.05)';
            } else if (cls === 'hover-rotate') {
                element.style.transform = 'rotate(5deg)';
            } else if (cls === 'hover-glow') {
                element.style.boxShadow = '0 0 20px rgba(0, 123, 255, 0.5)';
            } else if (cls === 'hover-bounce') {
                element.classList.add('bounce-in');
            }
        });
    }

    handleHoverLeave(event) {
        const element = event.currentTarget;
        const classes = element.className.split(' ');
        
        classes.forEach(cls => {
            if (cls === 'hover-lift') {
                element.style.transform = 'translateY(0)';
                element.style.boxShadow = '';
            } else if (cls === 'hover-scale') {
                element.style.transform = 'scale(1)';
            } else if (cls === 'hover-rotate') {
                element.style.transform = 'rotate(0deg)';
            } else if (cls === 'hover-glow') {
                element.style.boxShadow = '';
            } else if (cls === 'hover-bounce') {
                element.classList.remove('bounce-in');
            }
        });
    }

    setupTextAnimations() {
        const textElements = document.querySelectorAll('.text-reveal');
        
        textElements.forEach(element => {
            const text = element.textContent;
            element.innerHTML = '';
            
            text.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.animationDelay = `${index * 0.05}s`;
                element.appendChild(span);
            });
        });
    }

    setupCounterAnimations() {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.target) || 100;
            const duration = parseInt(counter.dataset.duration) || 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            this.intersectionObserver.observe(counter);
            counter.addEventListener('animationstart', updateCounter);
        });
    }

    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = parseFloat(element.dataset.speed) || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    setupMorphingShapes() {
        const morphShapes = document.querySelectorAll('.morph-shape');
        
        morphShapes.forEach(shape => {
            const duration = parseFloat(shape.dataset.duration) || 4;
            shape.style.animationDuration = `${duration}s`;
        });
    }

    setupGradientAnimations() {
        const gradientElements = document.querySelectorAll('.gradient-bg');
        
        gradientElements.forEach(element => {
            const duration = parseFloat(element.dataset.duration) || 15;
            element.style.animationDuration = `${duration}s`;
        });
    }

    setupTypingEffects() {
        const typingElements = document.querySelectorAll('.typing-effect');
        
        typingElements.forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            element.style.width = '0';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    element.style.width = `${(i + 1) * 100 / text.length}%`;
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            this.intersectionObserver.observe(element);
            element.addEventListener('animationstart', typeWriter);
        });
    }

    setupCardFlipAnimations() {
        const flipCards = document.querySelectorAll('.card-flip');
        
        flipCards.forEach(card => {
            const front = card.querySelector('.card-flip-front');
            const back = card.querySelector('.card-flip-back');
            
            if (front && back) {
                card.addEventListener('click', () => {
                    card.classList.toggle('flipped');
                });
            }
        });
    }

    setupProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        progressBars.forEach(bar => {
            const target = parseFloat(bar.dataset.target) || 100;
            const duration = parseInt(bar.dataset.duration) || 2000;
            
            this.intersectionObserver.observe(bar);
            bar.addEventListener('animationstart', () => {
                bar.style.width = `${target}%`;
            });
        });
    }

    setupFloatingElements() {
        const floatingElements = document.querySelectorAll('.floating');
        
        floatingElements.forEach(element => {
            const duration = parseFloat(element.dataset.duration) || 3;
            element.style.animationDuration = `${duration}s`;
        });
    }

    setupLoadingAnimations() {
        const loadingElements = document.querySelectorAll('.loading-spinner, .loading-dots');
        
        loadingElements.forEach(element => {
            const duration = parseFloat(element.dataset.duration) || 1;
            element.style.animationDuration = `${duration}s`;
        });
    }

    setupStaggeredAnimations() {
        const staggeredContainers = document.querySelectorAll('.stagger-container');
        
        staggeredContainers.forEach(container => {
            const items = container.querySelectorAll('.stagger-item');
            const delay = parseFloat(container.dataset.delay) || 0.1;
            
            items.forEach((item, index) => {
                item.style.animationDelay = `${index * delay}s`;
            });
        });
    }

    setupPerformanceOptimizations() {
        // Reduce motion for users who prefer it
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        }
        
        // Throttle scroll events
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.handleScrollAnimations();
                    ticking = false;
                });
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
    }
}

// Initialize Animation Controller
const animationController = new AnimationController();

// Product Listing Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Layout Toggle Functionality
    const layoutBtns = document.querySelectorAll('.layout-btn');
    const productGrid = document.getElementById('product-grid');
    
    if (layoutBtns.length > 0 && productGrid) {
        layoutBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                layoutBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                // Change grid layout
                const layout = this.getAttribute('data-layout');
                if (layout === 'list') {
                    productGrid.style.gridTemplateColumns = '1fr';
                    productGrid.classList.add('list-layout');
                } else {
                    productGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
                    productGrid.classList.remove('list-layout');
                }
            });
        });
    }
    
    // Filter Tags Functionality
    const filterTags = document.querySelectorAll('.filter-tag');
    filterTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.classList.toggle('active');
            updateResultsCount();
        });
    });
    
    // Category Links Functionality
    const categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove active class from all links
            categoryLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            updateResultsCount();
        });
    });
    
    // Brand Checkboxes Functionality
    const brandCheckboxes = document.querySelectorAll('.brand-checkbox input[type="checkbox"]');
    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateResultsCount();
        });
    });
    
    // Price Filter Functionality
    const applyFilterBtn = document.querySelector('.apply-filter-btn');
    if (applyFilterBtn) {
        applyFilterBtn.addEventListener('click', function() {
            const priceFrom = document.getElementById('price-from').value;
            const priceTo = document.getElementById('price-to').value;
            
            if (priceFrom || priceTo) {
                // Here you would typically filter products based on price range
                console.log(`Filtering products from ₹${priceFrom || 0} to ₹${priceTo || '∞'}`);
                updateResultsCount();
            }
        });
    }
    
    // Search Functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            filterProductsBySearch(searchTerm);
        });
    }
    
    // Pagination Functionality
    const pageBtns = document.querySelectorAll('.page-btn');
    const prevBtn = document.querySelector('.pagination-btn.prev');
    const nextBtn = document.querySelector('.pagination-btn.next');
    
    pageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            pageBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // Here you would typically load the corresponding page
            console.log(`Loading page ${this.textContent}`);
        });
    });
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            const activePage = document.querySelector('.page-btn.active');
            const currentPage = parseInt(activePage.textContent);
            if (currentPage > 1) {
                pageBtns.forEach(b => b.classList.remove('active'));
                pageBtns[currentPage - 2].classList.add('active');
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            const activePage = document.querySelector('.page-btn.active');
            const currentPage = parseInt(activePage.textContent);
            if (currentPage < pageBtns.length) {
                pageBtns.forEach(b => b.classList.remove('active'));
                pageBtns[currentPage].classList.add('active');
            }
        });
    }
    
    // Product Card Interactions
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        // Quick View Button
        const quickViewBtn = card.querySelector('.action-btn[title="Quick View"]');
        if (quickViewBtn) {
            quickViewBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const productTitle = card.querySelector('.product-title').textContent;
                console.log(`Quick view: ${productTitle}`);
                // Here you would typically open a modal with product details
            });
        }
        
        // Wishlist Button
        const wishlistBtn = card.querySelector('.action-btn[title="Add to Wishlist"]');
        if (wishlistBtn) {
            wishlistBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                this.style.color = '#ef4444';
                this.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
                console.log('Added to wishlist');
            });
        }
        
        // Compare Button
        const compareBtn = card.querySelector('.action-btn[title="Compare"]');
        if (compareBtn) {
            compareBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                this.style.color = '#007bff';
                this.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
                console.log('Added to compare');
            });
        }
        
        // Add to Cart Button
        const addToCartBtn = card.querySelector('.add-to-cart-btn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const productTitle = card.querySelector('.product-title').textContent;
                const originalText = this.textContent;
                this.textContent = 'ADDED!';
                this.style.background = '#10b981';
                this.style.borderColor = '#10b981';
                this.style.color = 'white';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = 'white';
                    this.style.borderColor = '#007bff';
                    this.style.color = '#007bff';
                }, 2000);
                
                console.log(`Added to cart: ${productTitle}`);
            });
        }
    });
    
    // Helper Functions
    function updateResultsCount() {
        const resultsCount = document.querySelector('.results-count');
        if (resultsCount) {
            // Calculate filtered results count based on active filters
            let count = 24; // Base count
            
            // Reduce count based on active filters (simplified logic)
            const activeTags = document.querySelectorAll('.filter-tag.active').length;
            const activeCategories = document.querySelectorAll('.category-link.active').length;
            
            if (activeTags > 0 || activeCategories > 1) {
                count = Math.max(6, count - Math.floor(Math.random() * 10));
            }
            
            resultsCount.textContent = `Show ${count} Results`;
        }
    }
    
    function filterProductsBySearch(searchTerm) {
        const productCards = document.querySelectorAll('.product-card');
        let visibleCount = 0;
        
        productCards.forEach(card => {
            const title = card.querySelector('.product-title').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Update results count
        const resultsCount = document.querySelector('.results-count');
        if (resultsCount) {
            resultsCount.textContent = `Show ${visibleCount} Results`;
        }
    }
    
    // Initialize results count
    updateResultsCount();
});
