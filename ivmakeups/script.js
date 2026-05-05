/**
 * IV Makeups — Core Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    const init = (fn) => {
        try { fn(); } catch (e) { console.error(`Error in ${fn.name}:`, e); }
    };

    init(initScrollReveal);
    init(initNavbarScroll);
    init(initMobileMenu);
    init(initSmoothScroll);
    init(initYear);
    init(initFAQ);
    init(initContactForm);
    init(initLightbox);

    try {
        if (typeof lucide !== 'undefined') lucide.createIcons();
    } catch (e) {
        console.error('Lucide init error:', e);
    }
});

// ── Reveal Elements on Scroll ──
function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));
}

// ── Navbar Glass on Scroll ──
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });
}

// ── Mobile Menu Toggle ──
function initMobileMenu() {
    const btn      = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const menu     = document.getElementById('mobile-menu');
    const links    = document.querySelectorAll('.mobile-link');

    if (!btn || !menu) return;

    const open = () => {
        menu.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-4');
        menu.classList.add('opacity-100', 'translate-y-0');
        document.body.style.overflow = 'hidden';
    };
    const close = () => {
        menu.classList.add('opacity-0', 'pointer-events-none', '-translate-y-4');
        menu.classList.remove('opacity-100', 'translate-y-0');
        document.body.style.overflow = '';
    };

    const toggle = () => {
        const isOpen = menu.classList.contains('opacity-100');
        if (isOpen) close(); else open();
    };

    btn.addEventListener('click', toggle);
    if (closeBtn) closeBtn.addEventListener('click', close);
    links.forEach(link => link.addEventListener('click', close));
}

// ── Smooth Scroll for Anchors ──
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
}

// ── Dynamic Year ──
function initYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
}

// ── FAQ Accordion ──
function initFAQ() {
    const buttons = document.querySelectorAll('.faq-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const isOpen  = content.classList.contains('open');

            // Close all
            document.querySelectorAll('.faq-content.open').forEach(c => c.classList.remove('open'));
            document.querySelectorAll('.faq-btn.active').forEach(b => b.classList.remove('active'));

            // Toggle clicked
            if (!isOpen) {
                content.classList.add('open');
                btn.classList.add('active');
            }
        });
    });
}

// ── Gallery Lightbox ──
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lbImg    = document.getElementById('lightbox-img');
    const lbClose  = document.getElementById('lightbox-close');

    if (!lightbox || !lbImg) return;

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (!img) return;
            lbImg.src = img.src;
            lbImg.alt = img.alt;
            lightbox.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    });

    const close = () => {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
        setTimeout(() => { lbImg.src = ''; }, 300);
    };

    if (lbClose) lbClose.addEventListener('click', close);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) close();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('open')) close();
    });
}

// ── Contact Form — Honeypot + WhatsApp redirect ──
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Honeypot: se bot preencheu campo oculto, aborta silenciosamente
        const hp = form.querySelector('input[name="website"]');
        if (hp && hp.value !== '') return;

        const name    = (form.querySelector('[name="name"]')?.value || '').trim();
        const phone   = (form.querySelector('[name="phone"]')?.value || '').trim();
        const service = (form.querySelector('[name="service"]')?.value || '').trim();
        const date    = (form.querySelector('[name="date"]')?.value || '').trim();
        const message = (form.querySelector('[name="message"]')?.value || '').trim();

        // Monta mensagem formatada para WhatsApp
        let text = `Olá! Vim pelo site e gostaria de agendar um atendimento. 🌸\n\n`;
        text += `*Nome:* ${name}\n`;
        if (phone) text += `*Telefone:* ${phone}\n`;
        if (service) text += `*Serviço:* ${service}\n`;
        if (date) text += `*Data de interesse:* ${date}\n`;
        if (message) text += `\n*Mensagem:* ${message}`;

        const waNumber = '[NUMERO]'; // Substituir pelo número com DDI+DDD, sem espaços
        const waURL    = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

        window.open(waURL, '_blank');
    });
}
