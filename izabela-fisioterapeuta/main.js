// IZABELA FISIOTERAPEUTA - INTERACTIVE LOGIC


document.addEventListener('DOMContentLoaded', () => {
    // 0. INITIALIZE ICONS
    lucide.createIcons();

    // 1. HEADER SCROLL EFFECT
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. MOBILE MENU TOGGLE
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    mobileMenuBtn.addEventListener('click', () => {
        const isVisible = navLinks.classList.contains('active');
        if (isVisible) {
            navLinks.classList.remove('active');
            navLinks.style.display = 'none';
        } else {
            navLinks.classList.add('active');
            navLinks.style.display = 'flex';
        }
    });

    // 2.1 GALLERY DYNAMISM
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const altText = item.querySelector('img').alt;
            // Demonstrating dynamism - could be a lightbox
            console.log(`Visualizando: ${altText}`);
            // Simple visual feedback
            item.style.transform = 'scale(0.95)';
            setTimeout(() => item.style.transform = '', 200);
        });
    });

    // 2.2 VIDEO HOVER PLAY
    const videoWrappers = document.querySelectorAll('.video-wrapper');
    videoWrappers.forEach(wrapper => {
        const video = wrapper.querySelector('video');
        wrapper.addEventListener('mouseenter', () => video.play());
        wrapper.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    });

    // 3. SCROLL REVEAL ANIMATION
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 4. WHATSAPP FORM HANDLING
    const waForm = document.getElementById('waForm');

    if (waForm) {
        waForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            const whatsappNumber = '5531971034230';
            const text = `Olá Izabela! Meu nome é ${name}.%0A%0A*Contato:* ${phone}%0A*Objetivo/Queixa:* ${message}`;

            window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
        });
    }

    // 5. SMOOTH SCROLL FOR LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 6. CHAT PROTOTYPE LOGIC
    const chatBody = document.getElementById('chatBody');
    const chatOptions = document.querySelectorAll('.chat-option');

    const answers = {
        "Tenho dor crônica, posso fazer?": "Sim! O Pilates é um dos melhores métodos para o manejo de dores crônicas. Como sou fisioterapeuta, adaptamos cada exercício para o seu limite, focando no alívio da dor e fortalecimento seguro.",
        "Nunca fiz exercício, vou conseguir?": "Com certeza. O Pilates é totalmente adaptável. Começaremos com os princípios básicos de respiração e controle, evoluindo no seu tempo.",
        "O Pilates substitui a fisioterapia?": "Depende do caso. Em fases agudas de lesão, a fisioterapia clínica é essencial. O Pilates entra como uma excelente ferramenta de reabilitação avançada e manutenção da saúde."
    };

    if (chatBody) {
        chatOptions.forEach(option => {
            option.addEventListener('click', () => {
                const question = option.getAttribute('data-question');
                const answer = answers[question];

                // Add user message
                const userMsg = document.createElement('div');
                userMsg.className = 'chat-msg user';
                userMsg.textContent = question;
                chatBody.appendChild(userMsg);

                // Add bot message after a short delay
                setTimeout(() => {
                    const botMsg = document.createElement('div');
                    botMsg.className = 'chat-msg bot';
                    botMsg.textContent = answer;
                    chatBody.appendChild(botMsg);

                    // Scroll to bottom
                    chatBody.scrollTop = chatBody.scrollHeight;
                }, 600);
            });
        });
    }
});
