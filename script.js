/**
 * E-COMMERCE LANDING PAGE JAVASCRIPT
 * Created for: [ISI_NAMA_BRAND]
 * Version: 1.0
 * Features: Mobile menu, gallery, variants, WhatsApp integration, FAQ, animations
 */

// Global Variables
let selectedColor = 'Black';
let selectedSize = 'M';
let selectedQuantity = 1;

// DOM Elements
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const quantityInput = document.getElementById('quantity');
const whatsappBtn = document.getElementById('whatsappBtn');
const mainImage = document.getElementById('mainImage');

// Configuration
const CONFIG = {
    whatsappNumber: '[ISI_NOMOR_WA]',
    productName: '[ISI_NAMA_PRODUK]',
    productPrice: 'Rp [ISI_HARGA_PROMO]',
    countdownEndDate: '[ISI_TANGGAL_BERAKHIR]',
    maxStock: parseInt('[ISI_JUMLAH_STOK]') || 100
};

/**
 * ==========================================
 * INITIALIZATION
 * ==========================================
 */

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize all components
    initMobileMenu();
    initSmoothScrolling();
    initGallery();
    initVariantSelectors();
    initQuantityControls();
    initWhatsAppIntegration();
    initFAQ();
    initCountdown();
    initScrollAnimations();
    initLazyLoading();
    initPerformanceOptimizations();
    initAnalytics();
    
    // Initial WhatsApp link update
    updateWhatsAppLink();
    
    console.log('E-commerce landing page initialized successfully!');
}

/**
 * ==========================================
 * MOBILE MENU
 * ==========================================
 */

function initMobileMenu() {
    if (!mobileToggle || !navMenu) return;
    
    mobileToggle.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking on links
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
}

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        mobileToggle.setAttribute('aria-expanded', 'true');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        mobileToggle.setAttribute('aria-expanded', 'false');
    }
}

function closeMobileMenu() {
    navMenu.classList.remove('active');
    const icon = mobileToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
    mobileToggle.setAttribute('aria-expanded', 'false');
}

/**
 * ==========================================
 * SMOOTH SCROLLING
 * ==========================================
 */

function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
                
                // Track scroll event
                trackEvent('Navigation Click', 'User Interaction', href);
            }
        });
    });
}

/**
 * ==========================================
 * GALLERY FUNCTIONALITY
 * ==========================================
 */

function initGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            changeMainImage(this);
        });
        
        // Add keyboard support
        thumbnail.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                changeMainImage(this);
            }
        });
        
        // Make thumbnails focusable
        thumbnail.setAttribute('tabindex', '0');
        thumbnail.setAttribute('role', 'button');
        thumbnail.setAttribute('aria-label', `View ${this.alt}`);
    });
}

function changeMainImage(thumbnail) {
    if (!mainImage || !thumbnail) return;
    
    // Smooth transition effect
    mainImage.style.opacity = '0.5';
    
    setTimeout(() => {
        mainImage.src = thumbnail.src;
        mainImage.alt = thumbnail.alt;
        
        // Update active thumbnail
        document.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.classList.remove('active');
            thumb.setAttribute('aria-selected', 'false');
        });
        
        thumbnail.classList.add('active');
        thumbnail.setAttribute('aria-selected', 'true');
        
        mainImage.style.opacity = '1';
    }, 150);
    
    // Track gallery interaction
    trackEvent('Gallery Image Change', 'Product Interaction', thumbnail.alt);
}

/**
 * ==========================================
 * VARIANT SELECTORS
 * ==========================================
 */

function initVariantSelectors() {
    initColorSelector();
    initSizeSelector();
}

function initColorSelector() {
    const colorOptions = document.querySelectorAll('.color-option');
    
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            selectColor(this);
        });
        
        // Add keyboard support
        option.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectColor(this);
            }
        });
        
        // Make color options accessible
        option.setAttribute('tabindex', '0');
        option.setAttribute('role', 'button');
        option.setAttribute('aria-label', `Select ${this.dataset.color} color`);
    });
}

function initSizeSelector() {
    const sizeOptions = document.querySelectorAll('.size-option');
    
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            selectSize(this);
        });
        
        // Add keyboard support
        option.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectSize(this);
            }
        });
        
        // Make size options accessible
        option.setAttribute('tabindex', '0');
        option.setAttribute('role', 'button');
        option.setAttribute('aria-label', `Select size ${this.textContent}`);
    });
}

function selectColor(colorOption) {
    if (!colorOption) return;
    
    // Remove active class from all color options
    document.querySelectorAll('.color-option').forEach(option => {
        option.classList.remove('active');
        option.setAttribute('aria-selected', 'false');
    });
    
    // Add active class to selected option
    colorOption.classList.add('active');
    colorOption.setAttribute('aria-selected', 'true');
    
    // Update selected color
    selectedColor = colorOption.dataset.color || 'Black';
    
    // Update WhatsApp link
    updateWhatsAppLink();
    
    // Visual feedback
    showSelectionFeedback('Warna dipilih: ' + selectedColor);
    
    // Track color selection
    trackEvent('Color Selection', 'Product Interaction', selectedColor);
}

function selectSize(sizeOption) {
    if (!sizeOption) return;
    
    // Remove active class from all size options
    document.querySelectorAll('.size-option').forEach(option => {
        option.classList.remove('active');
        option.setAttribute('aria-selected', 'false');
    });
    
    // Add active class to selected option
    sizeOption.classList.add('active');
    sizeOption.setAttribute('aria-selected', 'true');
    
    // Update selected size
    selectedSize = sizeOption.textContent.trim();
    
    // Update WhatsApp link
    updateWhatsAppLink();
    
    // Visual feedback
    showSelectionFeedback('Ukuran dipilih: ' + selectedSize);
    
    // Track size selection
    trackEvent('Size Selection', 'Product Interaction', selectedSize);
}

function showSelectionFeedback(message) {
    // Create temporary feedback element
    const feedback = document.createElement('div');
    feedback.textContent = message;
    feedback.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--success);
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        font-weight: 600;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    `;
    
    document.body.appendChild(feedback);
    
    // Animate in
    setTimeout(() => feedback.style.opacity = '1', 10);
    
    // Remove after delay
    setTimeout(() => {
        feedback.style.opacity = '0';
        setTimeout(() => document.body.removeChild(feedback), 300);
    }, 2000);
}

/**
 * ==========================================
 * QUANTITY CONTROLS
 * ==========================================
 */

function initQuantityControls() {
    const qtyButtons = document.querySelectorAll('.qty-btn');
    
    qtyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent.trim();
            if (action === '+') {
                increaseQty();
            } else if (action === '-') {
                decreaseQty();
            }
        });
    });
    
    if (quantityInput) {
        quantityInput.addEventListener('change', function() {
            validateQuantity();
            updateWhatsAppLink();
        });
        
        quantityInput.addEventListener('blur', validateQuantity);
        quantityInput.addEventListener('keypress', function(e) {
            // Only allow numbers
            if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
                e.preventDefault();
            }
        });
    }
}

function increaseQty() {
    if (!quantityInput) return;
    
    const currentQty = parseInt(quantityInput.value) || 1;
    const maxQty = CONFIG.maxStock;
    
    if (currentQty < maxQty) {
        quantityInput.value = currentQty + 1;
        selectedQuantity = currentQty + 1;
        updateWhatsAppLink();
        
        // Visual feedback
        quantityInput.style.transform = 'scale(1.1)';
        setTimeout(() => quantityInput.style.transform = 'scale(1)', 150);
        
        // Track quantity increase
        trackEvent('Quantity Increase', 'Product Interaction', currentQty + 1);
    } else {
        // Show max quantity reached feedback
        showSelectionFeedback(`Maksimal ${maxQty} item`);
    }
}

function decreaseQty() {
    if (!quantityInput) return;
    
    const currentQty = parseInt(quantityInput.value) || 1;
    
    if (currentQty > 1) {
        quantityInput.value = currentQty - 1;
        selectedQuantity = currentQty - 1;
        updateWhatsAppLink();
        
        // Visual feedback
        quantityInput.style.transform = 'scale(0.9)';
        setTimeout(() => quantityInput.style.transform = 'scale(1)', 150);
        
        // Track quantity decrease
        trackEvent('Quantity Decrease', 'Product Interaction', currentQty - 1);
    }
}

function validateQuantity() {
    if (!quantityInput) return;
    
    let qty = parseInt(quantityInput.value);
    const maxQty = CONFIG.maxStock;
    
    if (isNaN(qty) || qty < 1) {
        qty = 1;
    } else if (qty > maxQty) {
        qty = maxQty;
        showSelectionFeedback(`Maksimal ${maxQty} item`);
    }
    
    quantityInput.value = qty;
    selectedQuantity = qty;
    updateWhatsAppLink();
}

/**
 * ==========================================
 * WHATSAPP INTEGRATION
 * ==========================================
 */

function initWhatsAppIntegration() {
    // Update WhatsApp link when page loads
    updateWhatsAppLink();
    
    // Track WhatsApp button clicks
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            trackEvent('WhatsApp Order Click', 'Conversion', 'WhatsApp');
            
            // Add loading state
            this.classList.add('btn-loading');
            this.style.pointerEvents = 'none';
            
            setTimeout(() => {
                this.classList.remove('btn-loading');
                this.style.pointerEvents = 'auto';
            }, 2000);
        });
    }
    
    // Track all order buttons
    const orderButtons = document.querySelectorAll('.order-btn, .hero-cta, .cta-header');
    orderButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const buttonType = this.classList.contains('whatsapp') ? 'WhatsApp' : 'Form';
            trackEvent('Order Button Click', 'Conversion', buttonType);
        });
    });
}

function updateWhatsAppLink() {
    if (!whatsappBtn) return;
    
    const quantity = quantityInput ? quantityInput.value : '1';
    
    let message = `Halo, saya tertarik dengan ${CONFIG.productName}\n\n`;
    message += `Detail Pesanan:\n`;
    message += `• Produk: ${CONFIG.productName}\n`;
    message += `• Warna: ${selectedColor}\n`;
    message += `• Ukuran: ${selectedSize}\n`;
    message += `• Jumlah: ${quantity} pcs\n`;
    message += `• Harga: ${CONFIG.productPrice} per pcs\n`;
    
    // Calculate total if quantity > 1
    if (parseInt(quantity) > 1) {
        const priceNumber = CONFIG.productPrice.replace(/[^\d]/g, '');
        const total = parseInt(priceNumber) * parseInt(quantity);
        message += `• Total: Rp ${total.toLocaleString('id-ID')}\n`;
    }
    
    message += `\nMohon info lebih lanjut untuk pemesanan. Terima kasih!`;
    
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    whatsappBtn.href = whatsappUrl;
    
    // Update all WhatsApp links on page
    const allWhatsAppLinks = document.querySelectorAll('a[href*="wa.me"]');
    allWhatsAppLinks.forEach(link => {
        if (link !== whatsappBtn) {
            link.href = whatsappUrl;
        }
    });
}

/**
 * ==========================================
 * FAQ FUNCTIONALITY
 * ==========================================
 */

function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            toggleFaq(this);
        });
        
        // Add keyboard support
        question.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFaq(this);
            }
        });
        
        // Make FAQ questions accessible
        question.setAttribute('tabindex', '0');
        question.setAttribute('role', 'button');
        question.setAttribute('aria-expanded', 'false');
    });
}

function toggleFaq(question) {
    const faqItem = question.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = question.querySelector('.faq-icon');
    const isActive = faqItem.classList.contains('active');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem && item.classList.contains('active')) {
            item.classList.remove('active');
            item.querySelector('.faq-answer').classList.remove('active');
            item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
    });
    
    // Toggle current FAQ
    if (isActive) {
        faqItem.classList.remove('active');
        answer.classList.remove('active');
        question.setAttribute('aria-expanded', 'false');
    } else {
        faqItem.classList.add('active');
        answer.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
        
        // Track FAQ interaction
        const questionText = question.querySelector('span').textContent;
        trackEvent('FAQ Opened', 'User Interaction', questionText);
    }
}

/**
 * ==========================================
 * COUNTDOWN TIMER
 * ==========================================
 */

function initCountdown() {
    const countdown = document.getElementById('countdown');
    if (!countdown || !CONFIG.countdownEndDate) return;
    
    // Parse the end date
    let countDownDate;
    try {
        countDownDate = new Date(CONFIG.countdownEndDate).getTime();
        
        // If invalid date, set to 7 days from now
        if (isNaN(countDownDate)) {
            countDownDate = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);
        }
    } catch (e) {
        // Default to 7 days from now
        countDownDate = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);
    }
    
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Update display
            updateCountdownDisplay('days', days);
            updateCountdownDisplay('hours', hours);
            updateCountdownDisplay('minutes', minutes);
            updateCountdownDisplay('seconds', seconds);
        } else {
            // Countdown finished
            clearInterval(timer);
            countdown.innerHTML = '<div style="background: var(--danger); color: white; padding: 2rem; border-radius: var(--border-radius); text-align: center;"><h3 style="margin: 0; font-size: 1.5rem;">⏰ Promo Berakhir!</h3><p style="margin: 0.5rem 0 0 0;">Jangan sampai terlewat promo selanjutnya</p></div>';
            
            // Track countdown end
            trackEvent('Countdown Ended', 'Promotion', 'Timer Expired');
        }
    }, 1000);
}

function updateCountdownDisplay(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
        const formattedValue = value.toString().padStart(2, '0');
        if (element.textContent !== formattedValue) {
            element.textContent = formattedValue;
            
            // Add animation effect
            element.style.transform = 'scale(1.1)';
            element.style.color = 'var(--accent-color)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
                element.style.color = '';
            }, 200);
        }
    }
}

/**
 * ==========================================
 * SCROLL ANIMATIONS
 * ==========================================
 */

function initScrollAnimations() {
    // Throttled scroll handler for performance
    let ticking = false;
    
    function handleScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                animateOnScroll();
                handleHeaderScroll();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    animateOnScroll();
    handleHeaderScroll();
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.testimonial, .benefit, .faq-item, .contact-item, .stat');
    
    elements.forEach(element => {
        if (isElementInViewport(element) && !element.classList.contains('fade-in-up')) {
            element.classList.add('fade-in-up');
        }
    });
}

function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'var(--white)';
        header.style.backdropFilter = 'none';
        header.style.borderBottom = 'none';
    }
}

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= windowHeight + 100 && // Add some buffer
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) || (
        rect.top < windowHeight &&
        rect.bottom >= 0
    );
}

/**
 * ==========================================
 * LAZY LOADING
 * ==========================================
 */

function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Load the image
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    
                    img.classList.remove('lazy');
                    img.classList.add('loaded');
                    
                    // Stop observing this image
                    imageObserver.unobserve(img);
                }
            });
        }, {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        });
        
        // Observe all lazy images
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

/**
 * ==========================================
 * PERFORMANCE OPTIMIZATIONS
 * ==========================================
 */

function initPerformanceOptimizations() {
    // Preload critical images
    preloadCriticalImages();
    
    // Add error handling for images
    initImageErrorHandling();
    
    // Optimize font loading
    optimizeFontLoading();
    
    // Add loading states
    addLoadingStates();
}

function preloadCriticalImages() {
    const criticalImages = [
        '[ISI_LINK_GAMBAR_UTAMA]',
        '[ISI_LINK_LOGO]'
    ];
    
    criticalImages.forEach(src => {
        if (src && src.startsWith('http')) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        }
    });
}

function initImageErrorHandling() {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            // Hide broken images gracefully
            this.style.display = 'none';
            
            // Add fallback text if needed
            const fallback = document.createElement('div');
            fallback.textContent = 'Gambar tidak dapat dimuat';
            fallback.style.cssText = `
                background: var(--background-light);
                color: var(--text-light);
                padding: 2rem;
                text-align: center;
                border-radius: var(--border-radius);
                border: 2px dashed var(--text-light);
            `;
            
            this.parentNode.insertBefore(fallback, this.nextSibling);
        });
        
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
}

function optimizeFontLoading() {
    // Add font-display: swap to improve loading performance
    const fontLink = document.querySelector('link[href*="fonts.googleapis.com"]');
    if (fontLink) {
        fontLink.href += '&display=swap';
    }
}

function addLoadingStates() {
    // Add loading class to body initially
    document.body.classList.add('loading');
    
    // Remove loading class when page is fully loaded
    window.addEventListener('load', function() {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
    });
}

/**
 * ==========================================
 * ANALYTICS & TRACKING
 * ==========================================
 */

function initAnalytics() {
    // Track page view
    trackEvent('Page View', 'Navigation', window.location.pathname);
    
    // Track scroll depth
    trackScrollDepth();
    
    // Track time on page
    trackTimeOnPage();
    
    // Track CTA interactions
    trackCTAInteractions();
}

function trackEvent(action, category = 'User Interaction', label = '', value = null) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value
        });
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', action, {
            category: category,
            label: label
        });
    }
    
    // Console log for debugging
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Event Tracked:', { action, category, label, value });
    }
}

function trackScrollDepth() {
    let maxScroll = 0;
    const milestones = [25, 50, 75, 90, 100];
    const trackedMilestones = new Set();
    
    window.addEventListener('scroll', debounce(function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);
        
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            
            milestones.forEach(milestone => {
                if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
                    trackedMilestones.add(milestone);
                    trackEvent('Scroll Depth', 'Engagement', `${milestone}%`);
                }
            });
        }
    }, 500));
}

function trackTimeOnPage() {
    const startTime = Date.now();
    
    // Track time spent when user leaves
    window.addEventListener('beforeunload', function() {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        trackEvent('Time on Page', 'Engagement', `${timeSpent} seconds`, timeSpent);
    });
    
    // Track milestone time spent
    setTimeout(() => trackEvent('Time Milestone', 'Engagement', '30 seconds'), 30000);
    setTimeout(() => trackEvent('Time Milestone', 'Engagement', '60 seconds'), 60000);
    setTimeout(() => trackEvent('Time Milestone', 'Engagement', '120 seconds'), 120000);
}

function trackCTAInteractions() {
    const ctaButtons = document.querySelectorAll('.hero-cta, .order-btn, .cta-header');
    
    ctaButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            const buttonPosition = index + 1;
            trackEvent('CTA Click', 'Conversion', `${buttonText} (Position ${buttonPosition})`);
        });
    });
}

/**
 * ==========================================
 * UTILITY FUNCTIONS
 * ==========================================
 */

function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        
        if (callNow) func.apply(context, args);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

function formatNumber(number) {
    return new Intl.NumberFormat('id-ID').format(number);
}

/**
 * ==========================================
 * ERROR HANDLING
 * ==========================================
 */

window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    trackEvent('JavaScript Error', 'Error', e.message);
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled Promise Rejection:', e.reason);
    trackEvent('Promise Rejection', 'Error', e.reason);
});

/**
 * ==========================================
 * ACCESSIBILITY ENHANCEMENTS
 * ==========================================
 */

// Add skip link for keyboard users
function addSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
        border-radius: 4px;
        transition: top 0.3s ease;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Add main content landmark
function addMainLandmark() {
    const hero = document.querySelector('.hero');
    if (hero && !hero.getAttribute('id')) {
        hero.setAttribute('id', 'main-content');
    }
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', function() {
    addSkipLink();
    addMainLandmark();
});

/**
 * ==========================================
 * EXPORT FOR TESTING
 * ==========================================
 */

// Export functions for testing (if in development environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        selectColor,
        selectSize,
        updateWhatsAppLink,
        toggleFaq,
        trackEvent,
        formatCurrency,
        debounce,
        throttle
    };
}
