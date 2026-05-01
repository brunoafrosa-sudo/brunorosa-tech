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
    const window = document.getElementById('chat-window');
    const questions = document.querySelectorAll('.chat-question');
    const answerBox = document.getElementById('chat-answer');
    const answerText = document.getElementById('answer-text');

    if (!toggle || !window) return;

    toggle.addEventListener('click', () => {
        const isHidden = window.classList.contains('opacity-0');
        if (isHidden) {
            window.classList.remove('opacity-0', 'scale-90', 'translate-y-10');
            window.classList.add('opacity-100', 'scale-100', 'translate-y-0');
        } else {
            window.classList.add('opacity-0', 'scale-90', 'translate-y-10');
            window.classList.remove('opacity-100', 'scale-100', 'translate-y-0');
            answerBox.classList.add('hidden');
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

// ── Contact Form Submit ──
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Honeypot: robôs preenchem campos ocultos — aborta silenciosamente
        if (form.website && form.website.value !== '') return;

        // Desafio lógico: valida resposta humana
        const humanCheck = document.getElementById('human-check');
        if (!humanCheck || humanCheck.value.trim() !== '5') {
            humanCheck.setCustomValidity('Resposta incorreta. Tente novamente.');
            humanCheck.reportValidity();
            humanCheck.value = '';
            return;
        }

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Enviando... <i data-lucide="loader" class="w-5 h-5 animate-spin"></i>';
        submitBtn.disabled = true;

        try {
            if (typeof lucide !== 'undefined') lucide.createIcons();
        } catch (e) {}

        const formData = {
            name: form.name.value,
            phone: form.phone.value,
            email: form.email.value,
            message: form.message.value
        };

        try {
            // Nota: Ajustar a URL caso o backend seja hospedado em outro local.
            const response = await fetch('http://localhost:3000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                form.reset();
            } else {
                const errorData = await response.json();
                alert(errorData.error || 'Erro ao enviar a mensagem. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro de conexão:', error);
            alert('Erro de conexão com o servidor. Verifique sua internet ou tente novamente mais tarde.');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            try {
                if (typeof lucide !== 'undefined') lucide.createIcons();
            } catch (e) {}
        }
    });
}
