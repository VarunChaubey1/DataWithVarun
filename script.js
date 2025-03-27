gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
});

gsap.from('.navbar', { y: -100, duration: 1, ease: 'power3.out' });
gsap.from('.reach-out-btn', { opacity: 0, x: 50, duration: 1, delay: 0.5 });
gsap.from('.hero-content h1', { opacity: 0, x: -100, duration: 1, delay: 0.5 });
gsap.from('.tagline', { opacity: 0, x: -50, duration: 1, delay: 0.7 });
gsap.from('.intro-text', { opacity: 0, x: -30, duration: 1, delay: 0.9 });
gsap.from('.button-container', { opacity: 0, y: 50, duration: 1, delay: 1.1 });
gsap.from('.profile-photo', { opacity: 0, scale: 0, duration: 1.5, delay: 1.3, ease: 'back.out(1.7)' });

document.querySelectorAll('.progress-circle').forEach(circle => {
    const percentage = circle.getAttribute('data-percentage');
    const ring = circle.querySelector('.progress-ring__circle');
    const circumference = 2 * Math.PI * 36;
    ring.style.strokeDasharray = `${circumference} ${circumference}`;
    ring.style.strokeDashoffset = circumference;
    gsap.to(ring, {
        strokeDashoffset: circumference - (percentage / 100) * circumference,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: { trigger: circle, start: 'top 80%' }
    });
});

gsap.utils.toArray('.section').forEach(section => {
    const title = section.querySelector('.section-title');
    gsap.from(title, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: { trigger: section, start: 'top 80%' }
    });
    ScrollTrigger.create({
        trigger: section,
        start: 'top 80px',
        end: 'bottom 80px',
        onEnter: () => title.classList.add('active'),
        onLeave: () => title.classList.remove('active'),
        onEnterBack: () => title.classList.add('active'),
        onLeaveBack: () => title.classList.remove('active')
    });
    gsap.from(section.querySelectorAll('.skill-card, .exp-card, .cert-card, .project-card, .contact-item'), {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: { trigger: section, start: 'top 80%' }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            gsap.to(window, { duration: 1, scrollTo: { y: target, offsetY: 100 }, ease: 'power2.out' });
        }
    }
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            gsap.to(window, { duration: 1, scrollTo: { y: target, offsetY: 100 }, ease: 'power2.out' });
        });
    });
});

window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});