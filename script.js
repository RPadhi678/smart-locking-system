/**
 * Smart Locker System - EEC 172 Final Project
 * JavaScript for interactive elements
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll animation for elements
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .detail-card, .tech-icon, .challenge-card, .timeline-item, .tech-detail');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            }
        });
    };

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .feature-card, .detail-card, .tech-icon, .challenge-card, .timeline-item, .tech-detail {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .feature-card.visible, .detail-card.visible, .tech-icon.visible, .challenge-card.visible, .timeline-item.visible, .tech-detail.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .feature-card:nth-child(2), .detail-card:nth-child(2), .tech-icon:nth-child(2), .challenge-card:nth-child(2), .timeline-item:nth-child(2), .tech-detail:nth-child(2) {
            transition-delay: 0.1s;
        }
        
        .feature-card:nth-child(3), .detail-card:nth-child(3), .tech-icon:nth-child(3), .challenge-card:nth-child(3), .timeline-item:nth-child(3), .tech-detail:nth-child(3) {
            transition-delay: 0.2s;
        }
        
        .feature-card:nth-child(4), .detail-card:nth-child(4), .tech-icon:nth-child(4), .challenge-card:nth-child(4), .timeline-item:nth-child(4), .tech-detail:nth-child(4) {
            transition-delay: 0.3s;
        }
    `;
    document.head.appendChild(style);

    // Run on initial load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Video placeholder click handler (for demo page)
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            alert('Replace this placeholder with your actual YouTube video embed code when available.');
        });
    }

    // Mobile menu toggle (for smaller screens)
    const createMobileMenu = function() {
        if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-button')) {
            const nav = document.querySelector('nav');
            const header = document.querySelector('header .container');
            
            const mobileMenuButton = document.createElement('button');
            mobileMenuButton.classList.add('mobile-menu-button');
            mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
            
            header.insertBefore(mobileMenuButton, nav);
            
            nav.classList.add('mobile-hidden');
            
            const mobileStyle = document.createElement('style');
            mobileStyle.textContent = `
                .mobile-menu-button {
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    display: none;
                }
                
                @media (max-width: 768px) {
                    .mobile-menu-button {
                        display: block;
                    }
                    
                    nav.mobile-hidden ul {
                        display: none;
                    }
                    
                    nav ul {
                        flex-direction: column;
                        width: 100%;
                        text-align: center;
                    }
                    
                    nav ul li {
                        margin: 10px 0;
                    }
                }
            `;
            document.head.appendChild(mobileStyle);
            
            mobileMenuButton.addEventListener('click', function() {
                nav.classList.toggle('mobile-hidden');
            });
        }
    };

    // Check for mobile menu needs
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);
});