/**
 * Core Interactivity - Elis Fonseca Psicóloga
 */

document.addEventListener('DOMContentLoaded', () => {
    const init = (fn) => {
        try { fn(); } catch (e) { console.error(`Error initializing ${fn.name}:`, e); }
    };

    init(initScrollReveal);
    init(initNavbarScroll);
    init(initMobileMenu);
    init(initSmoothScroll);
    init(initYear);
    init(initChat);
    init(initContactForm);
    init(initWhatsAppLinks);
    
    // Initialize Lucide Icons
    try {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    } catch (e) {
        console.error('Error initializing Lucide Icons:', e);
    }
});

// ── Mini Chat Logic ──
function initChat() {
    const toggle = document.getElementById('chat-toggle');
    const windowChat = document.getElementById('chat-window');
    const questions = document.querySelectorAll('.chat-question');
    const answerBox = document.getElementById('chat-answer');
    const answerText = document.getElementById('answer-text');

    if (!toggle || !windowChat) return;

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = windowChat.classList.contains('opacity-0');
        if (isHidden) {
            windowChat.classList.remove('opacity-0', 'scale-90', 'translate-y-10');
            windowChat.classList.add('opacity-100', 'scale-100', 'translate-y-0');
        } else {
            windowChat.classList.add('opacity-0', 'scale-90', 'translate-y-10');
            windowChat.classList.remove('opacity-100', 'scale-100', 'translate-y-0');
            answerBox.classList.add('hidden');
        }
    });

    // Fechar ao clicar fora
    document.addEventListener('click', (e) => {
        if (!windowChat.contains(e.target) && !toggle.contains(e.target)) {
            if (!windowChat.classList.contains('opacity-0')) {
                windowChat.classList.add('opacity-0', 'scale-90', 'translate-y-10');
                windowChat.classList.remove('opacity-100', 'scale-100', 'translate-y-0');
                answerBox.classList.add('hidden');
            }
        }
    });

    questions.forEach(q => {
        q.addEventListener('click', () => {
            const answer = q.dataset.answer;
            answerText.textContent = answer;
            answerBox.classList.remove('hidden');
        });
    });
}

// ── Video Modal Logic ──
function initVideoModal() {
    console.log('Initializing Video Modal...');
    const modal = document.getElementById('video-modal');
    const content = document.getElementById('modal-content');
    const triggers = document.querySelectorAll('.video-trigger');
    const closeBtn = document.getElementById('close-video');

    if (!modal || !content) {
        console.error('Video modal elements not found');
        return;
    }

    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const btn = e.currentTarget;
            const videoId = btn.getAttribute('data-video-id');
            console.log('Opening video:', videoId);
            
            content.innerHTML = `<iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay></iframe>`;;
            
            modal.classList.remove('opacity-0', 'pointer-events-none');
            content.classList.remove('scale-95');
            content.classList.add('scale-100');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeModal = () => {
        console.log('Closing video modal');
        modal.classList.add('opacity-0', 'pointer-events-none');
        content.classList.remove('scale-100');
        content.classList.add('scale-95');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            content.innerHTML = '';
        }, 300);
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// ── Set Dynamic Year in Footer ──
function initYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

// ── Reveal Elements on Scroll ──
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// ── Navbar Style Change on Scroll ──
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled', 'py-3');
            navbar.classList.remove('h-20');
        } else {
            navbar.classList.remove('scrolled', 'py-3');
            navbar.classList.add('h-20');
        }
    });
}

// ── Mobile Menu Toggle ──
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-link');

    if (!btn || !menu) return;

    const toggleMenu = () => {
        const isOpen = !menu.classList.contains('opacity-0');
        if (isOpen) {
            menu.classList.add('opacity-0', 'pointer-events-none');
            document.body.style.overflow = 'auto';
        } else {
            menu.classList.remove('opacity-0', 'pointer-events-none');
            document.body.style.overflow = 'hidden';
        }
    };

    btn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    
    links.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
}

// ── Smooth Scroll for Anchor Links ──
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ── WhatsApp Greeting Helpers ──
function getGreeting() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Bom dia';
    if (hour >= 12 && hour < 18) return 'Boa tarde';
    return 'Boa noite';
}

function getWhatsAppUrl(customText) {
    const text = customText || `Olá, Elis! ${getGreeting()}! Vim pelo site e gostaria de saber mais sobre as consultas.`;
    return `https://api.whatsapp.com/send?phone=5531999756192&text=${encodeURIComponent(text)}`;
}

function initWhatsAppLinks() {
    document.querySelectorAll('[data-whatsapp]').forEach(el => {
        const url = getWhatsAppUrl();
        if (el.tagName === 'A') {
            el.href = url;
        } else {
            el.addEventListener('click', () => window.open(url, '_blank', 'noopener,noreferrer'));
        }
    });
}

// ── Contact Form Submit ──
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Honeypot: robôs preenchem campos ocultos — aborta silenciosamente
        if (form.website && form.website.value !== '') return;

        const name = form.name.value.trim();
        const phone = form.phone.value.trim();
        const message = form.message.value.trim();

        const text = `Olá, Elis! ${getGreeting()}! Vim pelo site e gostaria de entrar em contato.\n\n*Nome:* ${name}\n*Telefone:* ${phone}\n\n*Mensagem:* ${message}`;
        const url = getWhatsAppUrl(text);

        form.reset();
        window.open(url, '_blank', 'noopener,noreferrer');
    });
}
