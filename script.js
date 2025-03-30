gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Navbar Animation
gsap.from('.navbar', {
    y: -80,
    duration: 1.2,
    ease: 'power3.out',
    opacity: 0,
});

// Reach Out Button Animation
gsap.from('.reach-out-btn', {
    opacity: 0,
    x: 60,
    duration: 1.2,
    ease: 'power3.out',
    delay: 0.3
});

// Hero Section Animations
gsap.from('.hero-title', {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power2.out',
    delay: 0.2
});
gsap.from('.tagline', {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power2.out',
    delay: 0.4
});
gsap.from('.intro-text', {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: 'power2.out',
    delay: 0.6
});
gsap.from('.button-container', {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: 'power2.out',
    delay: 0.8
});

// Profile Photo and Rotating Ring Animation
gsap.from(['.profile-photo', '.rotating-ring'], {
    opacity: 0,
    scale: 0.95,
    duration: 1.2,
    ease: 'power3.out',
    delay: 1,
    stagger: 0.1
});

// Profile Photo Up-Down Animation
gsap.to('.profile-photo', {
    y: 5,
    duration: 3,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true
});

// Progress Circles Animation
document.querySelectorAll('.progress-circle').forEach(circle => {
    const percentage = circle.getAttribute('data-percentage');
    const ring = circle.querySelector('.progress-ring__circle');
    const circumference = 2 * Math.PI * 36;

    ring.style.strokeDasharray = `${circumference} ${circumference}`;
    ring.style.strokeDashoffset = circumference;

    gsap.to(ring, {
        strokeDashoffset: circumference - (percentage / 100) * circumference,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: circle,
            start: 'top 90%'
        }
    });
});

// Section Animations
gsap.utils.toArray('.section').forEach(section => {
    const title = section.querySelector('.section-title');

    gsap.from(title, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: section,
            start: 'top 90%'
        }
    });

    ScrollTrigger.create({
        trigger: section,
        start: 'top 100px',
        end: 'bottom 100px',
        onEnter: () => title.classList.add('active'),
        onLeave: () => title.classList.remove('active'),
        onEnterBack: () => title.classList.add('active'),
        onLeaveBack: () => title.classList.remove('active')
    });

    gsap.from(section.querySelectorAll('.skill-card, .exp-card, .cert-card, .project-card, .contact-item'), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: section,
            start: 'top 85%'
        }
    });
});

// Hover Animation for Cards
document.querySelectorAll('.skill-card, .exp-card, .cert-card, .project-card, .contact-item').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.03, duration: 0.3, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        gsap.to(window, {
            duration: 1.5,
            scrollTo: {
                y: target,
                offsetY: 80
            },
            ease: 'power3.out'
        });
    });
});

// Handle Hash on Page Load
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            gsap.to(window, {
                duration: 1.5,
                scrollTo: {
                    y: target,
                    offsetY: 80
                },
                ease: 'power3.out'
            });
        }
    }
}, false);

// Refresh ScrollTrigger on Load
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});
