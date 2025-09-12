// Main JavaScript functionality for Sug website

// Component Loading System
class ComponentLoader {
    constructor() {
        this.loadedComponents = new Set();
        this.components = {
            header: `<!-- Header Component -->
<header class="header" role="banner" itemscope itemtype="https://schema.org/WPHeader">
    <div class="container">
        <div class="header-content">
            <div class="logo" itemscope itemtype="https://schema.org/Organization">
                <img src="images/SUG.png" alt="Sug Logo" class="logo-image" itemprop="logo" style="height: 50px; width: auto;">
            </div>
            
            <nav class="nav" role="navigation" aria-label="Main navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
                <a href="index.html" class="nav-link" itemprop="url">Home</a>
                <a href="products.html" class="nav-link" itemprop="url">Products</a>
                <a href="about.html" class="nav-link" itemprop="url">About Us</a>
                <a href="contact.html" class="btn btn-primary" aria-label="Reach out to Sug">Reach out</a>
            </nav>
            
            <!-- Mobile Navigation Toggle -->
            <button class="mobile-nav-toggle" aria-label="Toggle mobile navigation" aria-expanded="false" aria-controls="mobile-nav">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
        </div>
    </div>
</header>`,
            footer: `<!-- Footer Component -->
<footer id="footer" class="footer" role="contentinfo" itemscope itemtype="https://schema.org/WPFooter">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section" itemscope itemtype="https://schema.org/Organization">
                <h3 itemprop="name">Sug</h3>
                <p itemprop="description">Empowering businesses with innovative surveying solutions and cutting-edge technology. Your trusted partner for precision measurement equipment in India.</p>
                <div class="social-links" aria-label="Social media links">
                    <a href="#" class="social-link" aria-label="Follow us on Facebook" itemprop="sameAs">
                        <i class="fab fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="#" class="social-link" aria-label="Follow us on Twitter" itemprop="sameAs">
                        <i class="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="#" class="social-link" aria-label="Follow us on LinkedIn" itemprop="sameAs">
                        <i class="fab fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="#" class="social-link" aria-label="Follow us on Instagram" itemprop="sameAs">
                        <i class="fab fa-instagram" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            
            <div class="footer-section">
                <h4>Quick Links</h4>
                <nav aria-label="Footer navigation">
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="products.html">Products</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
            </div>
            
            <div class="footer-section">
                <h4>Contact Information</h4>
                <address class="contact-info" itemscope itemtype="https://schema.org/PostalAddress">
                    <p><i class="fas fa-map-marker-alt" aria-hidden="true"></i> <span itemprop="streetAddress">86, Parakkai Road</span>, <span itemprop="addressLocality">Keezhavannanvilai</span>, <span itemprop="addressRegion">Nagercoil-2</span> <span itemprop="postalCode">629501</span></p>
                    <p><i class="fas fa-phone" aria-hidden="true"></i> <a href="tel:+918903301652" itemprop="telephone" style="color: white;">+91 8903301652</a></p>
                    <p><i class="fas fa-envelope" aria-hidden="true"></i> <a href="mailto:sugix.info@gmail.com" itemprop="email" style="color: white;">sugix.info@gmail.com</a></p>
                    <p><i class="fas fa-clock" aria-hidden="true"></i> Mon-Fri: 9:00 AM - 6:00 PM IST</p>
                </address>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="footer-bottom-content">
                <p>&copy; 2025 Sug. All rights reserved. | <span itemprop="name">Sug Surveying Instruments</span></p>
                <nav class="footer-bottom-links" aria-label="Legal links">
                    <a href="privacy-policy.html">Privacy Policy</a>
                    <a href="terms-of-service.html">Terms of Service</a>
                </nav>
            </div>
        </div>
    </div>
</footer>`
        };
    }

    async loadComponent(componentName, targetElement) {
        if (this.loadedComponents.has(componentName)) {
            return;
        }

        const target = document.querySelector(targetElement);
        if (!target) {
            console.warn(`Target element ${targetElement} not found for ${componentName}`);
            return;
        }

        try {
            // Try to load from external file first
            const paths = [
                `components/${componentName}.html`,
                `./components/${componentName}.html`,
                `${window.location.pathname.split('/').slice(0, -1).join('/')}/components/${componentName}.html`
            ];
            
            let html = null;
            
            for (const path of paths) {
                try {
                    console.log(`Trying to load ${componentName} from: ${path}`);
                    const response = await fetch(path);
                    if (response.ok) {
                        html = await response.text();
                        console.log(`Successfully fetched ${componentName} from: ${path}`);
                        break;
                    }
                } catch (e) {
                    console.log(`Failed to load from ${path}:`, e.message);
                    continue;
                }
            }
            
            // If external loading failed, use embedded component
            if (!html && this.components[componentName]) {
                console.log(`Using embedded ${componentName} component`);
                html = this.components[componentName];
            }
            
            if (!html) {
                throw new Error(`No ${componentName} component available`);
            }
            
            target.innerHTML = html;
            this.loadedComponents.add(componentName);
            console.log(`Successfully loaded ${componentName} component into ${targetElement}`);
            
            // Add a visual indicator that component loaded
            target.style.border = '2px solid green';
            target.style.padding = '5px';
            setTimeout(() => {
                target.style.border = '';
                target.style.padding = '';
            }, 2000);
            
            // Re-initialize navigation functionality after loading
            this.initializeNavigation();
            this.setActiveNavigation();
            
        } catch (error) {
            console.error(`Error loading ${componentName}:`, error);
            // Show error message in placeholder
            target.innerHTML = `<div style="color: red; padding: 10px; border: 1px solid red; margin: 10px 0;">
                Error loading ${componentName} component: ${error.message}
            </div>`;
        }
    }

    initializeNavigation() {
        // Re-initialize mobile navigation after component load
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const nav = document.querySelector('.nav');
        
        console.log('Initializing mobile navigation...', { mobileNavToggle, nav });
        
        if (mobileNavToggle && nav) {
            // Remove existing event listeners to prevent duplicates
            const newToggle = mobileNavToggle.cloneNode(true);
            mobileNavToggle.parentNode.replaceChild(newToggle, mobileNavToggle);
            
            console.log('Mobile navigation toggle button found and replaced');
            
            const toggleMobileNav = function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('Mobile navigation toggle clicked');
                
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                
                // Toggle navigation
                nav.classList.toggle('active');
                this.classList.toggle('active');
                
                // Update ARIA attributes
                this.setAttribute('aria-expanded', !isExpanded);
                
                // Prevent body scroll when menu is open
                document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
                
                console.log('Mobile navigation toggled:', {
                    navActive: nav.classList.contains('active'),
                    toggleActive: this.classList.contains('active'),
                    ariaExpanded: this.getAttribute('aria-expanded')
                });
            };
            
            // Add both click and touchstart events for better mobile support
            newToggle.addEventListener('click', toggleMobileNav);
            newToggle.addEventListener('touchstart', toggleMobileNav);
            
            // Close mobile menu when clicking on a link
            const mobileNavLinks = nav.querySelectorAll('.nav-link');
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', function() {
                    // Close mobile menu
                    nav.classList.remove('active');
                    newToggle.classList.remove('active');
                    newToggle.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                });
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!nav.contains(e.target) && !newToggle.contains(e.target)) {
                    nav.classList.remove('active');
                    newToggle.classList.remove('active');
                    newToggle.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                }
            });
            
            // Close mobile menu on window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    nav.classList.remove('active');
                    newToggle.classList.remove('active');
                    newToggle.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                }
            });
        }
    }

    setActiveNavigation() {
        // Set active navigation based on current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
            }
        });
    }

    async loadAllComponents() {
        console.log('Starting to load components...');
        
        // Load header if header placeholder exists
        const headerPlaceholder = document.querySelector('#header-placeholder');
        if (headerPlaceholder) {
            console.log('Header placeholder found, loading header component...');
            await this.loadComponent('header', '#header-placeholder');
        } else {
            console.log('Header placeholder not found');
        }
        
        // Load footer if footer placeholder exists
        const footerPlaceholder = document.querySelector('#footer-placeholder');
        if (footerPlaceholder) {
            console.log('Footer placeholder found, loading footer component...');
            await this.loadComponent('footer', '#footer-placeholder');
        } else {
            console.log('Footer placeholder not found');
        }
        
        console.log('Component loading completed');
    }

    loadComponentsSync() {
        console.log('Loading components synchronously...');
        
        // Load header if header placeholder exists
        const headerPlaceholder = document.querySelector('#header-placeholder');
        if (headerPlaceholder && this.components.header) {
            console.log('Loading header component synchronously...');
            headerPlaceholder.innerHTML = this.components.header;
            this.loadedComponents.add('header');
            
            // Add visual indicator
            headerPlaceholder.style.border = '2px solid green';
            headerPlaceholder.style.padding = '5px';
            setTimeout(() => {
                headerPlaceholder.style.border = '';
                headerPlaceholder.style.padding = '';
            }, 2000);
            
            this.initializeNavigation();
            this.setActiveNavigation();
        }
        
        // Load footer if footer placeholder exists
        const footerPlaceholder = document.querySelector('#footer-placeholder');
        if (footerPlaceholder && this.components.footer) {
            console.log('Loading footer component synchronously...');
            footerPlaceholder.innerHTML = this.components.footer;
            this.loadedComponents.add('footer');
            
            // Add visual indicator
            footerPlaceholder.style.border = '2px solid green';
            footerPlaceholder.style.padding = '5px';
            setTimeout(() => {
                footerPlaceholder.style.border = '';
                footerPlaceholder.style.padding = '';
            }, 2000);
        }
        
        console.log('Synchronous component loading completed');
    }
}

// Initialize component loader
const componentLoader = new ComponentLoader();

document.addEventListener('DOMContentLoaded', function() {
    // Load components first
    componentLoader.loadAllComponents().then(() => {
        // Initialize other functionality after components are loaded
        initializeMainFunctionality();
    }).catch((error) => {
        console.error('Error loading components:', error);
        // Fallback: try to load components synchronously
        componentLoader.loadComponentsSync();
        initializeMainFunctionality();
    });
    
    // Additional fallback: Initialize mobile navigation after a short delay
    setTimeout(() => {
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const nav = document.querySelector('.nav');
        
        if (mobileNavToggle && nav && !mobileNavToggle.hasAttribute('data-initialized')) {
            console.log('Fallback mobile navigation initialization');
            componentLoader.initializeNavigation();
            mobileNavToggle.setAttribute('data-initialized', 'true');
        }
    }, 1000);
});

function initializeMainFunctionality() {
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

    // Mobile navigation functionality is now handled by ComponentLoader

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

    // Handle hero section button clicks
    const heroButtons = document.querySelectorAll('.hero-cta a[href="products.html"]');
    heroButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            console.log('Hero button clicked, navigating to products page');
            // Ensure navigation works by using window.location
            e.preventDefault();
            window.location.href = 'products.html';
        });
    });

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
}

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

// Product Image Slider/Carousel Functionality
class ProductImageSlider {
    constructor() {
        this.sliders = new Map();
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeSliders());
        } else {
            this.initializeSliders();
        }
    }

    initializeSliders() {
        // Find all product cards with multiple images
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach((card, index) => {
            const productImage = card.querySelector('.product-image img');
            if (productImage) {
                this.createSlider(card, productImage, index);
            }
        });
    }

    createSlider(card, mainImage, index) {
        // Get product data from the image src or data attributes
        const imageSrc = mainImage.src;
        const productId = this.extractProductId(imageSrc);
        
        // Find the product data
        const product = this.findProductData(productId);
        
        if (product && product.images && product.images.length > 1) {
            // Create slider container
            const sliderContainer = this.createSliderHTML(product.images, index);
            
            // Replace the main image with slider
            const imageContainer = mainImage.closest('.product-image');
            if (imageContainer) {
                imageContainer.innerHTML = sliderContainer;
                
                // Initialize slider functionality
                this.initializeSliderEvents(card, index, product.images.length);
            }
        }
    }

    createSliderHTML(images, index) {
        const sliderId = `product-slider-${index}`;
        
        return `
            <div class="product-image-slider" id="${sliderId}">
                <div class="slider-container">
                    <div class="slider-track">
                        ${images.map((img, imgIndex) => `
                            <div class="slider-slide ${imgIndex === 0 ? 'active' : ''}" data-slide="${imgIndex}">
                                <img src="${img}" alt="Product Image ${imgIndex + 1}" loading="lazy">
                            </div>
                        `).join('')}
                    </div>
                    
                    ${images.length > 1 ? `
                        <div class="slider-controls">
                            <button class="slider-btn prev" aria-label="Previous image">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <button class="slider-btn next" aria-label="Next image">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        
                        <div class="slider-indicators">
                            ${images.map((_, imgIndex) => `
                                <button class="slider-indicator ${imgIndex === 0 ? 'active' : ''}" 
                                        data-slide="${imgIndex}" 
                                        aria-label="Go to image ${imgIndex + 1}">
                                </button>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }

    initializeSliderEvents(card, index, totalSlides) {
        const slider = card.querySelector('.product-image-slider');
        if (!slider || totalSlides <= 1) return;

        const sliderId = `product-slider-${index}`;
        const sliderData = {
            currentSlide: 0,
            totalSlides: totalSlides,
            autoPlayInterval: null,
            autoPlayDelay: 4000
        };

        this.sliders.set(sliderId, sliderData);

        // Navigation buttons
        const prevBtn = slider.querySelector('.slider-btn.prev');
        const nextBtn = slider.querySelector('.slider-btn.next');
        const indicators = slider.querySelectorAll('.slider-indicator');

        // Previous button
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.prevSlide(sliderId);
            });
        }

        // Next button
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.nextSlide(sliderId);
            });
        }

        // Indicators
        indicators.forEach((indicator, slideIndex) => {
            indicator.addEventListener('click', () => {
                this.goToSlide(sliderId, slideIndex);
            });
        });

        // Touch/swipe support
        this.addTouchSupport(slider, sliderId);

        // Auto-play (optional)
        this.startAutoPlay(sliderId);

        // Pause on hover
        slider.addEventListener('mouseenter', () => {
            this.pauseAutoPlay(sliderId);
        });

        slider.addEventListener('mouseleave', () => {
            this.startAutoPlay(sliderId);
        });
    }

    goToSlide(sliderId, slideIndex) {
        const sliderData = this.sliders.get(sliderId);
        if (!sliderData) return;

        const slider = document.getElementById(sliderId);
        if (!slider) return;

        // Update current slide
        sliderData.currentSlide = slideIndex;

        // Update slides
        const slides = slider.querySelectorAll('.slider-slide');
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === slideIndex);
        });

        // Update indicators
        const indicators = slider.querySelectorAll('.slider-indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === slideIndex);
        });
    }

    nextSlide(sliderId) {
        const sliderData = this.sliders.get(sliderId);
        if (!sliderData) return;

        const nextIndex = (sliderData.currentSlide + 1) % sliderData.totalSlides;
        this.goToSlide(sliderId, nextIndex);
    }

    prevSlide(sliderId) {
        const sliderData = this.sliders.get(sliderId);
        if (!sliderData) return;

        const prevIndex = sliderData.currentSlide === 0 
            ? sliderData.totalSlides - 1 
            : sliderData.currentSlide - 1;
        this.goToSlide(sliderId, prevIndex);
    }

    addTouchSupport(slider, sliderId) {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;

        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        slider.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            // Only trigger if horizontal swipe is more significant than vertical
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    this.nextSlide(sliderId);
                } else {
                    this.prevSlide(sliderId);
                }
            }
        });
    }

    startAutoPlay(sliderId) {
        const sliderData = this.sliders.get(sliderId);
        if (!sliderData || sliderData.totalSlides <= 1) return;

        this.pauseAutoPlay(sliderId);
        sliderData.autoPlayInterval = setInterval(() => {
            this.nextSlide(sliderId);
        }, sliderData.autoPlayDelay);
    }

    pauseAutoPlay(sliderId) {
        const sliderData = this.sliders.get(sliderId);
        if (sliderData && sliderData.autoPlayInterval) {
            clearInterval(sliderData.autoPlayInterval);
            sliderData.autoPlayInterval = null;
        }
    }

    extractProductId(imageSrc) {
        // Extract product identifier from image path
        const pathParts = imageSrc.split('/');
        const fileName = pathParts[pathParts.length - 1];
        return fileName.replace(/\.[^/.]+$/, ""); // Remove file extension
    }

    findProductData(productId) {
        // This would typically search through your product data
        // For now, we'll use a simple approach
        if (typeof productData !== 'undefined') {
            return productData.find(product => 
                product.images && product.images.some(img => 
                    img.includes(productId)
                )
            );
        }
        return null;
    }
}

// Initialize the product image slider
const productImageSlider = new ProductImageSlider();

// Add CSS styles for the image slider
const sliderStyles = `
    .product-image-slider {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 8px;
    }

    .slider-container {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .slider-track {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        transition: transform 0.3s ease;
    }

    .slider-slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .slider-slide.active {
        opacity: 1;
    }

    .slider-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }

    .slider-controls {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        pointer-events: none;
    }

    .slider-btn {
        background: rgba(255, 255, 255, 0.9);
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        pointer-events: auto;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .slider-btn:hover {
        background: rgba(255, 255, 255, 1);
        transform: scale(1.1);
    }

    .slider-btn i {
        font-size: 14px;
        color: #333;
    }

    .slider-indicators {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;
    }

    .slider-indicator {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.5);
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .slider-indicator.active {
        background: rgba(255, 255, 255, 1);
        transform: scale(1.2);
    }

    .slider-indicator:hover {
        background: rgba(255, 255, 255, 0.8);
    }

    /* Hide controls on mobile for cleaner look */
    @media (max-width: 768px) {
        .slider-controls {
            display: none;
        }
        
        .slider-indicators {
            bottom: 5px;
        }
        
        .slider-indicator {
            width: 6px;
            height: 6px;
        }
    }
`;

// Inject styles
if (!document.querySelector('#product-slider-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'product-slider-styles';
    styleSheet.textContent = sliderStyles;
    document.head.appendChild(styleSheet);
}
