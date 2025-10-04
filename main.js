// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Sidebar toggle functionality
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menu-toggle');
const mainContent = document.getElementById('main-content');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-closed');
    sidebar.classList.toggle('sidebar-open');
});

// Close sidebar when clicking on a link (mobile)
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth < 1024) {
            sidebar.classList.add('sidebar-closed');
            sidebar.classList.remove('sidebar-open');
        }
    });
});

// Dark/Light mode toggle
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const icon = modeToggle.querySelector('i');
    if (document.body.classList.contains('light-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Background music toggle
const audioToggle = document.getElementById('audio-toggle');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;

audioToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        audioToggle.querySelector('i').classList.remove('fa-volume-up');
        audioToggle.querySelector('i').classList.add('fa-volume-mute');
    } else {
        bgMusic.play();
        audioToggle.querySelector('i').classList.remove('fa-volume-mute');
        audioToggle.querySelector('i').classList.add('fa-volume-up');
    }
    isPlaying = !isPlaying;
});

// Form validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    
    // Name validation
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (!nameInput.value.trim()) {
        nameError.classList.remove('hidden');
        isValid = false;
    } else {
        nameError.classList.add('hidden');
    }
    
    // Email validation
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.classList.remove('hidden');
        isValid = false;
    } else {
        emailError.classList.add('hidden');
    }
    
    // Subject validation
    const subjectInput = document.getElementById('subject');
    const subjectError = document.getElementById('subject-error');
    if (!subjectInput.value.trim()) {
        subjectError.classList.remove('hidden');
        isValid = false;
    } else {
        subjectError.classList.add('hidden');
    }
    
    // Message validation
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    if (!messageInput.value.trim()) {
        messageError.classList.remove('hidden');
        isValid = false;
    } else {
        messageError.classList.add('hidden');
    }
    
    if (isValid) {
        // Form is valid, you can submit it here
        alert('Form submitted successfully!');
        contactForm.reset();
    }
});

// Certificate modal
const certificateItems = document.querySelectorAll('.certificate-item');
const certificateModal = document.getElementById('certificate-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');

certificateItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        modalImage.src = imgSrc;
        certificateModal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    certificateModal.style.display = 'none';
});

certificateModal.addEventListener('click', (e) => {
    if (e.target === certificateModal) {
        certificateModal.style.display = 'none';
    }
});

// Update active nav item on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === current) {
            item.classList.add('active');
        }
    });
});
// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();