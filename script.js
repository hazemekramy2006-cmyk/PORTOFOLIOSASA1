// Hide loader
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
            }, 1500);
        });

        // Mobile menu
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileNav = document.getElementById('mobileNav');
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });

        // Close mobile menu on link click
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
            });
        });

        // Scroll to top button
        const scrollTopBtn = document.getElementById('scrollTop');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Active nav link
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });

        // Tab switching for Journey
        function switchTab(tab) {
            document.querySelectorAll('#design .tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('#design .tab-content').forEach(content => content.classList.remove('active'));
            event.target.classList.add('active');
            document.getElementById('tab-' + tab).classList.add('active');
        }

        // Tab switching for Prototypes
        function switchTabProto(tab) {
            document.querySelectorAll('#prototype .tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('#prototype .tab-content').forEach(content => content.classList.remove('active'));
            event.target.classList.add('active');
            document.getElementById('proto-' + tab).classList.add('active');
        }

        // Accordion functionality
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const accordion = header.parentElement;
                accordion.classList.toggle('active');
            });
        });

        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Animate cards on scroll
        gsap.utils.toArray('.card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 0.6,
                delay: i * 0.1,
                ease: 'power3.out'
            });
        });

        // Animate persona cards
        gsap.utils.toArray('.persona-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                x: i % 2 === 0 ? -50 : 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
        });

        // Animate journey steps
        gsap.utils.toArray('.journey-step').forEach((step, i) => {
            gsap.from(step, {
                scrollTrigger: {
                    trigger: step,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                x: -30,
                opacity: 0,
                duration: 0.6,
                delay: i * 0.15,
                ease: 'power3.out'
            });
        });

        // Animate principle cards
        gsap.utils.toArray('.principle-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 40,
                opacity: 0,
                duration: 0.7,
                delay: i * 0.1,
                ease: 'power3.out'
            });
        });

        // Animate color swatches
        gsap.utils.toArray('.color-swatch').forEach((swatch, i) => {
            gsap.from(swatch, {
                scrollTrigger: {
                    trigger: swatch,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                scale: 0.8,
                opacity: 0,
                duration: 0.5,
                delay: i * 0.05,
                ease: 'back.out(1.7)'
            });
        });

        // Animate test results
        gsap.utils.toArray('.test-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 60,
                opacity: 0,
                duration: 0.7,
                delay: i * 0.15,
                ease: 'power3.out'
            });
        });

        // Animate ethics cards
        gsap.utils.toArray('.ethics-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 40,
                opacity: 0,
                duration: 0.6,
                delay: i * 0.08,
                ease: 'power3.out'
            });
        });

        // Animate meeting items
        gsap.utils.toArray('.meeting-item').forEach((item, i) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                x: -20,
                opacity: 0,
                duration: 0.5,
                delay: i * 0.1,
                ease: 'power3.out'
            });
        });

        // Animate progress bars
        gsap.utils.toArray('.progress-fill').forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            gsap.to(bar, {
                scrollTrigger: {
                    trigger: bar,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                },
                width: width,
                duration: 1.5,
                ease: 'power2.out'
            });
        });

        // Animate chart bars
        gsap.utils.toArray('.chart-bar-fill').forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            gsap.to(bar, {
                scrollTrigger: {
                    trigger: bar,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                },
                width: width,
                duration: 1.5,
                ease: 'power2.out'
            });
        });

        // Hero parallax
        gsap.to('.hero-content', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            y: 100,
            opacity: 0.3
        });

        // 3D Background with Three.js
        const canvasContainer = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        canvasContainer.appendChild(renderer.domElement);

        // Create floating particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 150;
        const posArray = new Float32Array(particlesCount * 3);
        const scaleArray = new Float32Array(particlesCount);

        for (let i = 0; i < particlesCount * 3; i += 3) {
            posArray[i] = (Math.random() - 0.5) * 15;
            posArray[i + 1] = (Math.random() - 0.5) * 15;
            posArray[i + 2] = (Math.random() - 0.5) * 10;
            scaleArray[i / 3] = Math.random();
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.05,
            color: 0x1565C0,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Create floating shapes
        const shapes = [];
        const shapeColors = [0x1565C0, 0x1E88E5, 0xBBDEFB, 0xE3F2FD];

        for (let i = 0; i < 8; i++) {
            const geometry = new THREE.IcosahedronGeometry(Math.random() * 0.5 + 0.2, 0);
            const material = new THREE.MeshBasicMaterial({
                color: shapeColors[i % shapeColors.length],
                transparent: true,
                opacity: 0.15,
                wireframe: true
            });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(
                (Math.random() - 0.5) * 12,
                (Math.random() - 0.5) * 8,
                (Math.random() - 0.5) * 6
            );
            mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
            shapes.push({
                mesh: mesh,
                rotSpeed: {
                    x: (Math.random() - 0.5) * 0.01,
                    y: (Math.random() - 0.5) * 0.01,
                    z: (Math.random() - 0.5) * 0.01
                },
                floatSpeed: Math.random() * 0.002 + 0.001,
                floatOffset: Math.random() * Math.PI * 2
            });
            scene.add(mesh);
        }

        camera.position.z = 5;

        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        // Animation loop
        let time = 0;
        function animate() {
            requestAnimationFrame(animate);
            time += 0.01;

            // Smooth mouse follow
            targetX += (mouseX - targetX) * 0.02;
            targetY += (mouseY - targetY) * 0.02;

            // Rotate particles
            particlesMesh.rotation.x += 0.0003;
            particlesMesh.rotation.y += 0.0005;
            particlesMesh.position.x = targetX * 0.5;
            particlesMesh.position.y = targetY * 0.5;

            // Animate shapes
            shapes.forEach((shape, i) => {
                shape.mesh.rotation.x += shape.rotSpeed.x;
                shape.mesh.rotation.y += shape.rotSpeed.y;
                shape.mesh.rotation.z += shape.rotSpeed.z;
                shape.mesh.position.y += Math.sin(time + shape.floatOffset) * shape.floatSpeed;
                shape.mesh.position.x += Math.cos(time * 0.5 + shape.floatOffset) * shape.floatSpeed * 0.5;
            });

            // Camera subtle movement
            camera.position.x = targetX * 0.3;
            camera.position.y = targetY * 0.3;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
        }
        animate();

        // Resize handler
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });