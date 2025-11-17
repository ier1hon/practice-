        gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);

        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                const loader = document.querySelector('.cssloader');
                const mainContent = document.querySelector('#main-content');
                
                if (loader) {
                    gsap.to(loader, {
                        opacity: 0,
                        duration: 0.5,
                        onComplete: () => {
                            loader.style.display = 'none'; 
                        }
                    });
                }
                
                if (mainContent) {
                    gsap.to(mainContent, {
                        opacity: 1,
                        duration: 0.8, 
                        delay: 0.2 
                    });
                }
            }, 2000); 
        });


        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            offset: 100
        });


        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: false
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });

        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        gsap.from('.hero-content h1', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out',
            delay: 0.3
        });

        gsap.from('.hero-content p', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'power3.out',
            delay: 0.5
        });

        gsap.from('.hero-content button', {
            duration: 0.8,
            y: 20,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.7
        });

        gsap.to('.hero-image img', {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });

        document.querySelectorAll('.course-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });

        gsap.to('.play-button', {
            scale: 1.1,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });

        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: 1
                },
                opacity: 0,
                y: 50,
                duration: 1
            });
        });

        gsap.to('.blob-orange', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            y: 200,
            rotation: 360,
            ease: 'none'
        });

        gsap.to('.blob-purple', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            y: -200,
            rotation: -360,
            ease: 'none'
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: {
                            y: target,
                            offsetY: 100 
                        },
                        ease: 'power2.inOut'
                    });
                }
            });
        });

        gsap.from('.testimonial-card', {
            scrollTrigger: {
                trigger: '.testimonials',
                start: 'top 70%'
            },
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power2.out'
        });

        document.querySelectorAll('.faq-card').forEach(card => {
            card.addEventListener('click', () => {
                gsap.to(card, {
                    backgroundColor: '#f0f2ff',
                    duration: 0.3,
                    yoyo: true,
                    repeat: 1
                });
            });
        });

        const newsletterInput = document.querySelector('.newsletter input');
        newsletterInput.addEventListener('focus', () => {
            gsap.to(newsletterInput, {
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        newsletterInput.addEventListener('blur', () => {
            gsap.to(newsletterInput, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        document.querySelectorAll('.social-icons a').forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                gsap.to(icon, {
                    rotation: 360,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
        });

        gsap.utils.toArray('.client-card-image').forEach(image => {
            gsap.from(image, {
                scrollTrigger: {
                    trigger: image,
                    start: 'top 80%'
                },
                scale: 0.8,
                opacity: 0,
                duration: 0.8,
                ease: 'back.out(1.7)'
            });
        });

        document.querySelectorAll('.video-container').forEach(container => {
            container.addEventListener('click', () => {
                gsap.to(container.querySelector('.play-button'), {
                    scale: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.in',
                    onComplete: () => {
                        alert('Video player would open here!');
                        gsap.to(container.querySelector('.play-button'), {
                            scale: 1,
                            opacity: 1,
                            duration: 0.3,
                            delay: 0.5, 
                            ease: 'back.out(1.7)'
                        });
                    }
                });
            });
        });

        let cursor = { x: 0, y: 0 };
        document.addEventListener('mousemove', (e) => {
            cursor.x = e.clientX;
            cursor.y = e.clientY;
        });

        document.querySelectorAll('button, .btn-primary, .btn-secondary').forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 255, 255, 0.6)';
                ripple.style.pointerEvents = 'none';
                ripple.style.transform = 'scale(0)';
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                gsap.to(ripple, {
                    scale: 2,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    onComplete: () => ripple.remove()
                });
            });
        });

        console.log('🎨 BrainHome - All animations loaded successfully!');