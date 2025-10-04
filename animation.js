// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Animate skill bars
    gsap.to('.skill-progress', {
        width: function() {
            return this.getAttribute('data-width');
        },
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    // Animate counters
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = { value: 0 };
        
        gsap.to(count, {
            value: target,
            duration: 2,
            scrollTrigger: {
                trigger: counter,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            onUpdate: () => {
                counter.textContent = Math.floor(count.value);
            }
        });
    });
    
    // Animate project cards on scroll
    gsap.from('.project-card', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: '#projects',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    // Animate education timeline
    gsap.from('.timeline-item', {
        opacity: 0,
        x: -50,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
            trigger: '#education',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    // Animate certificate items
    gsap.from('.certificate-item', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: '#certificates',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    // Animate experience items
    gsap.from('#experience .flex', {
        opacity: 0,
        x: -50,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
            trigger: '#experience',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    
    // Parallax effect for sections
    gsap.utils.toArray('section').forEach(section => {
        gsap.to(section, {
            backgroundPosition: `50% ${window.innerHeight / 2}px`,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
});