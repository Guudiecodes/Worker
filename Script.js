       gsap.registerPlugin(ScrollTrigger);

        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');

        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });

        function animateFollower() {
            const diffX = mouseX - followerX;
            const diffY = mouseY - followerY;
            
            followerX += diffX * 0.12;
            followerY += diffY * 0.12;
            
            cursorFollower.style.left = followerX + 'px';
            cursorFollower.style.top = followerY + 'px';
            
            requestAnimationFrame(animateFollower);
        }
        animateFollower();

        const hoverElements = document.querySelectorAll('a, button, input, .toggle-password, .social-icon');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                gsap.to(cursorFollower, {
                    width: '60px',
                    height: '60px',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                gsap.to(cursorFollower, {
                    width: '40px',
                    height: '40px',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });

        window.addEventListener('load', function() {
            const preloader = document.querySelector('.preloader');
            setTimeout(function() {
                preloader.classList.add('hidden');
                setTimeout(initAnimations, 100);
            }, 1200);
        });

        function initAnimations() {
            gsap.from('.hero-section h1', {
                opacity: 0,
                y: 60,
                duration: 1.2,
                ease: 'power3.out'
            });

            gsap.from('.breadcrumb', {
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.4,
                ease: 'power3.out'
            });

            gsap.from('.login-container', {
                scrollTrigger: {
                    trigger: '.login-container',
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 80,
                duration: 1,
                ease: 'power3.out'
            });

            gsap.from('.form-group', {
                scrollTrigger: {
                    trigger: '.login-container',
                    start: 'top 70%',
                },
                opacity: 0,
                y: 40,
                stagger: 0.15,
                duration: 0.8,
                ease: 'power2.out'
            });

            gsap.from('.remember-me', {
                scrollTrigger: {
                    trigger: '.remember-me',
                    start: 'top 85%',
                },
                opacity: 0,
                x: -30,
                duration: 0.6,
                ease: 'power2.out'
            });

            gsap.from('.login-btn', {
                scrollTrigger: {
                    trigger: '.login-btn',
                    start: 'top 85%',
                },
                opacity: 0,
                scale: 0.9,
                duration: 0.6,
                ease: 'back.out(1.7)'
            });

            gsap.from('.forgot-password', {
                scrollTrigger: {
                    trigger: '.forgot-password',
                    start: 'top 90%',
                },
                opacity: 0,
                y: 20,
                duration: 0.5,
                ease: 'power2.out'
            });

            gsap.from('.footer-content > div', {
                scrollTrigger: {
                    trigger: '.footer',
                    start: 'top 80%',
                },
                opacity: 0,
                y: 60,
                stagger: 0.2,
                duration: 0.8,
                ease: 'power2.out'
            });

            gsap.from('.footer-bottom', {
                scrollTrigger: {
                    trigger: '.footer-bottom',
                    start: 'top 90%',
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power2.out'
            });

            let lastScroll = 0;
            ScrollTrigger.create({
                start: 'top -50',
                end: 99999,
                onUpdate: (self) => {
                    const currentScroll = self.scroll();
                    if (currentScroll > lastScroll && currentScroll > 100) {
                        gsap.to('.header', { y: -100, duration: 0.3 });
                    } else {
                        gsap.to('.header', { y: 0, duration: 0.3 });
                    }
                    lastScroll = currentScroll;
                }
            });

            gsap.to('.hero-section h1', {
                scrollTrigger: {
                    trigger: '.hero-section',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                },
                y: 150,
                opacity: 0.3
            });

            gsap.from('.top-nav a', {
                opacity: 0,
                y: -20,
                stagger: 0.05,
                duration: 0.6,
                ease: 'power2.out',
                delay: 0.3
            });

            gsap.from('.logo', {
                opacity: 0,
                scale: 0,
                rotation: -180,
                duration: 1.2,
                ease: 'elastic.out(1, 0.5)',
                delay: 0.2
            });

            gsap.from('.brand-name', {
                opacity: 0,
                x: -40,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.5
            });

            gsap.from('.header-buttons button', {
                opacity: 0,
                x: 40,
                stagger: 0.15,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.6
            });

            gsap.from('.whatsapp-container', {
                opacity: 0,
                scale: 0,
                rotation: 180,
                duration: 1,
                ease: 'elastic.out(1, 0.5)',
                delay: 1.2
            });

            gsap.to('.whatsapp-btn', {
                y: -8,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

            gsap.from('.contact-info', {
                scrollTrigger: {
                    trigger: '.contact-info',
                    start: 'top 90%',
                },
                opacity: 0,
                x: -40,
                stagger: 0.2,
                duration: 0.8,
                ease: 'power2.out'
            });
        }

        const togglePassword = document.getElementById('togglePassword');
        const passwordInput = document.getElementById('password');

        if (togglePassword && passwordInput) {
            togglePassword.addEventListener('click', function() {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                
                gsap.to(this, {
                    rotation: 360,
                    duration: 0.4,
                    ease: 'power2.out'
                });
                
                if (type === 'password') {
                    this.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
                } else {
                    this.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>';
                }
            });
        }

        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                const remember = document.getElementById('remember').checked;

                if (!username || !password) {
                    gsap.to('.login-container', {
                        x: -10,
                        duration: 0.1,
                        repeat: 5,
                        yoyo: true,
                        ease: 'power1.inOut',
                        onComplete: () => {
                            gsap.set('.login-container', { x: 0 });
                            alert('Please enter both username and password');
                        }
                    });
                    return;
                }

                gsap.to('.login-btn', {
                    scale: 0.95,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    onComplete: () => {
                        alert('Login functionality would be connected to backend authentication system');
                        console.log('Login attempt:', { username, remember });
                    }
                });
            });
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href.length > 1) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        gsap.to(window, {
                            scrollTo: {
                                y: target,
                                offsetY: 120
                            },
                            duration: 1,
                            ease: 'power2.inOut'
                        });
                    }
                }
            });
        });

        const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                gsap.to(this.parentElement, {
                    scale: 1.02,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            input.addEventListener('blur', function() {
                gsap.to(this.parentElement, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });

        document.querySelectorAll('.social-icon').forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    scale: 1.2,
                    rotation: 360,
                    duration: 0.5,
                    ease: 'back.out(1.7)'
                });
            });
            
            icon.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });

        document.querySelectorAll('.contact-icon').forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    rotation: 360,
                    duration: 0.6,
                    ease: 'power2.out'
                });
            });
        });

        document.querySelectorAll('.footer ul li a').forEach(link => {
            link.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    x: 8,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            link.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    x: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });

        document.querySelectorAll('.dashboard-btn, .register-btn, .login-btn').forEach(button => {
            button.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            button.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });

        document.querySelector('.logo').addEventListener('mouseenter', function() {
            gsap.to(this, {
                rotation: 360,
                scale: 1.1,
                duration: 0.6,
                ease: 'power2.out'
            });
        });

        document.querySelector('.logo').addEventListener('mouseleave', function() {
            gsap.to(this, {
                rotation: 0,
                scale: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
        });

        gsap.to('.footer-logo', {
            scrollTrigger: {
                trigger: '.footer',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            y: -30,
            rotation: 15
        });

        gsap.from('.unauthorized-text', {
            scrollTrigger: {
                trigger: '.unauthorized-text',
                start: 'top 85%',
            },
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
            ease: 'power2.out'
        });