/**
 * Aviation Digital Partners (ADP) Main JavaScript
 * Provides interactive functionality for the website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuIcon && mobileMenu) {
        menuIcon.addEventListener('click', function() {
            this.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            document.body.classList.toggle('menu-open');
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuIcon.classList.remove('open');
                mobileMenu.classList.remove('open');
                document.body.classList.remove('menu-open');
            });
        });
    }
    
    // Back to top button functionality
    const backToTopButton = document.createElement('div');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>';
    document.body.appendChild(backToTopButton);
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Add active class to current navigation link
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a, .nav-links-mobile a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else if (linkHref === '#' && (currentPage === link.textContent.toLowerCase() + '.html' || 
                 currentPage.includes(link.textContent.toLowerCase()))) {
            link.classList.add('active');
        }
    });
    
    // Fade-in animation for content sections
    const fadeElements = document.querySelectorAll('.content-section, .hero-content, .value-prop, .contact-card');
    
    const fadeInOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const fadeInObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, fadeInOptions);
    
    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add container class to content sections for better layout
    const contentSections = document.querySelectorAll('.content');
    contentSections.forEach(section => {
        const children = Array.from(section.children);
        children.forEach(child => {
            if (!child.classList.contains('container') && 
                !child.closest('.container')) {
                const container = document.createElement('div');
                container.className = 'container';
                child.parentNode.insertBefore(container, child);
                container.appendChild(child);
            }
        });
    });
    
    // Add wrapper for hero content if not already present
    const heroSections = document.querySelectorAll('.hero:not(.hero-split)');
    heroSections.forEach(hero => {
        if (!hero.querySelector('.hero-content') && !hero.querySelector('.container')) {
            const heroContent = document.createElement('div');
            heroContent.className = 'hero-content';
            
            // Move all direct children into the hero-content div
            while (hero.firstChild) {
                heroContent.appendChild(hero.firstChild);
            }
            
            hero.appendChild(heroContent);
        }
    });
    
    // Add background image class to hero sections
    const heroes = document.querySelectorAll('.hero:not(.hero-split)');
    heroes.forEach(hero => {
        const computedStyle = window.getComputedStyle(hero);
        const backgroundImage = computedStyle.backgroundImage;
        
        if (backgroundImage && backgroundImage !== 'none' && !hero.querySelector('.hero-bg')) {
            const heroBg = document.createElement('div');
            heroBg.className = 'hero-bg';
            heroBg.style.backgroundImage = backgroundImage;
            
            // Insert at the beginning
            hero.insertBefore(heroBg, hero.firstChild);
            
            // Remove the background from the hero element
            hero.style.backgroundImage = 'none';
        }
    });
});
