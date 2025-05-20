// JavaScript for enhanced interactivity and animations

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Loader animation
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        document.getElementById('loader').style.visibility = 'hidden';
    }, 2000);

    // Custom cursor effect
    const cursor = document.getElementById('cursor');
    const cursorBlur = document.getElementById('cursor-blur');

    window.addEventListener('mousemove', function(e) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorBlur.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    // Add hover effect to all links and buttons
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(1.5)`;
            cursor.style.backgroundColor = 'white';
            cursorBlur.style.height = '450px';
            cursorBlur.style.width = '450px';
        });
        
        link.addEventListener('mouseleave', function() {
            cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(1)`;
            cursor.style.backgroundColor = '#95c11e';
            cursorBlur.style.height = '400px';
            cursorBlur.style.width = '400px';
        });
    });

    // Mobile menu toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-nav .nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Back to top button visibility
        const backToTop = document.getElementById('back-to-top');
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Testimonial slider
    const dots = document.querySelectorAll('.dot');
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showTestimonial(index));
    });
    
    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);

    // GSAP Animations
    if (typeof gsap !== 'undefined') {
        // Hero section animations
        gsap.from("#page1 h1", {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        });
        
        gsap.from("#page1 h2", {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: "power4.out"
        });
        
        gsap.from("#page1 p", {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 0.6,
            ease: "power4.out"
        });
        
        // Scroll animations
        gsap.registerPlugin(ScrollTrigger);
        
        // About section
        gsap.from("#about-us img", {
            scrollTrigger: {
                trigger: "#about-us",
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none"
            },
            x: function(i) { return i === 0 ? -100 : 100; },
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out"
        });
        
        gsap.from("#about-us-in", {
            scrollTrigger: {
                trigger: "#about-us",
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        
        // Card animations
        gsap.from(".card", {
            scrollTrigger: {
                trigger: "#card-container",
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none"
            },
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out"
        });
        
        // Newsletter section
        gsap.from(".newsletter", {
            scrollTrigger: {
                trigger: "#green",
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none"
            },
            scale: 0.9,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        
        // Testimonial section
        gsap.from(".testimonial-container", {
            scrollTrigger: {
                trigger: "#page3",
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        
        // Elements section
        gsap.from("#page4 h1", {
            scrollTrigger: {
                trigger: "#page4",
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none"
            },
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        
        gsap.from(".elem", {
            scrollTrigger: {
                trigger: ".elements-container",
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none"
            },
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out"
        });
        
        // Footer animations
        gsap.from(".footer-column", {
            scrollTrigger: {
                trigger: "#footer",
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out"
        });
    }
});
