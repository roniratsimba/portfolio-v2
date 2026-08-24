document.addEventListener("DOMContentLoaded", () => {
  // Loader
  const loader = document.getElementById('loader');
  
  // Hide loader after 2.5 seconds
  setTimeout(() => {
    loader.classList.add('hidden');
    
    // Start hero animations after loader is hidden
    setTimeout(() => {
      initHeroAnimations();
    }, 500);
  }, 2500);

  // Enregistrement du plugin ScrollTrigger de GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Theme Toggle
  const themeToggle = document.querySelector('.theme-toggle');
  const moonIcon = document.querySelector('.theme-icon.moon');
  const sunIcon = document.querySelector('.theme-icon.sun');
  
  // Check for saved theme preference or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (theme === 'dark') {
      moonIcon.style.display = 'block';
      sunIcon.style.display = 'none';
    } else {
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
    }
  }

  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  function initHeroAnimations() {
    // 1. Animation de la section Hero à l'ouverture
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    heroTl
      .from(".hero-intro", { y: -20, opacity: 0, delay: 0.2 })
      .from(".hero-title", { y: 30, opacity: 0 }, "-=0.6")
      .from(".hero-subtitle", { y: 20, opacity: 0 }, "-=0.6")
      .from(".hero-availability", { y: 20, opacity: 0 }, "-=0.6")
      .from(".hero-actions", { y: 20, opacity: 0 }, "-=0.6")
      .from(".hero-media", { scale: 0.9, opacity: 0 }, "-=0.8");
  }

  // 2. Animations au scroll pour chaque section
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    gsap.from(section.querySelectorAll(".section-title, p, .service-card, .project-card, .timeline-item, .contact-item, .form-group"), {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    });
  });

  // 3. Effet Parallaxe subtil sur les cercles de fond
  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    gsap.to(".circle-blue", {
      x: mouseX * 60,
      y: mouseY * 60,
      duration: 2,
      ease: "power1.out"
    });

    gsap.to(".circle-pink", {
      x: mouseX * -40,
      y: mouseY * -40,
      duration: 2,
      ease: "power1.out"
    });
  });

  // 4. Contact Form Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      // Create mailto link with form data
      const mailtoLink = `mailto:roniratsimba@gmail.com?subject=Message depuis le portfolio de ${encodeURIComponent(name)}&body=${encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      
      window.location.href = mailtoLink;
      
      // Reset form
      contactForm.reset();
    });
  }

  // 5. CV Download Handler
  const cvInput = document.querySelector('.cv-download .input');
  const cvLabel = document.querySelector('.cv-download .label');
  
  if (cvInput && cvLabel) {
    cvInput.addEventListener('change', function() {
      if (this.checked) {
        cvLabel.classList.add('checked');
        
        // Simulate CV download (replace with actual CV file)
        setTimeout(() => {
          // Here you would normally trigger a real download
          // window.location.href = 'path/to/cv.pdf';
          console.log('CV download triggered');
          
          // Reset after animation
          setTimeout(() => {
            this.checked = false;
            cvLabel.classList.remove('checked');
          }, 5000);
        }, 3500);
      }
    });
  }
});