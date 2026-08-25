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

  // Load JSON data
  loadJSONData();

  function initHeroAnimations() {
    // 1. Animation de la section Hero à l'ouverture
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    heroTl
      .from(".hero-intro", { y: -20, opacity: 0, delay: 0.2 })
      .from(".hero-title", { y: 30, opacity: 0 }, "-=0.6")
      .from(".hero-subtitle", { y: 20, opacity: 0 }, "-=0.6")
      .from(".availability-status", { y: 20, opacity: 0 }, "-=0.6")
      .from(".hero-actions", { y: 20, opacity: 0 }, "-=0.6")
      .from(".hero-media", { scale: 0.9, opacity: 0 }, "-=0.8");
  }

  // 2. Animation au scroll pour le footer uniquement
  const footer = document.querySelector(".footer");
  if (footer) {
    gsap.from(footer, {
      scrollTrigger: {
        trigger: footer,
        start: "top 95%",
        toggleActions: "play none none none"
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });
  }

  // 3. Contact Modal Handler
  const floatingMessageBtn = document.getElementById('floatingMessageBtn');
  const contactModal = document.getElementById('contactModal');
  const modalClose = document.getElementById('modalClose');
  const contactForm = document.getElementById('contactForm');
  const thankYouMessage = document.getElementById('thankYouMessage');

  if (floatingMessageBtn && contactModal) {
    floatingMessageBtn.addEventListener('click', () => {
      contactModal.classList.add('active');
    });
  }

  if (modalClose && contactModal) {
    modalClose.addEventListener('click', () => {
      contactModal.classList.remove('active');
    });
  }

  if (contactModal) {
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        contactModal.classList.remove('active');
      }
    });
  }

  // Formspree Form Handler
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(contactForm);

      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          contactForm.style.display = 'none';
          thankYouMessage.style.display = 'block';
          setTimeout(() => {
            contactModal.classList.remove('active');
            setTimeout(() => {
              contactForm.style.display = 'flex';
              thankYouMessage.style.display = 'none';
              contactForm.reset();
            }, 500);
          }, 3000);
        } else {
          alert('Une erreur est survenue. Veuillez réessayer.');
        }
      }).catch(error => {
        alert('Une erreur est survenue. Veuillez réessayer.');
      });
    });
  }

  // 4. CV Download Handler
  const cvButton = document.querySelector('.cv-download .animated-button');

  if (cvButton) {
    cvButton.addEventListener('click', function() {
      // Simulate CV download (replace with actual CV file)
      console.log('CV download triggered');
      // Here you would normally trigger a real download
      // window.location.href = 'path/to/cv.pdf';
    });
  }
});

async function loadJSONData() {
  try {
    // Load projects
    const projectsResponse = await fetch('data/projects.json');
    if (projectsResponse.ok) {
      const projectsData = await projectsResponse.json();
      renderProjects(projectsData.projects);
    } else {
      console.error('Failed to load projects.json, using fallback');
      renderProjectsFallback();
    }

    // Load experiences
    const experiencesResponse = await fetch('data/experiences.json');
    if (experiencesResponse.ok) {
      const experiencesData = await experiencesResponse.json();
      renderExperiences(experiencesData.experiences);
    } else {
      console.error('Failed to load experiences.json, using fallback');
      renderExperiencesFallback();
    }

    // Load education
    const educationResponse = await fetch('data/education.json');
    if (educationResponse.ok) {
      const educationData = await educationResponse.json();
      renderEducation(educationData.education);
    } else {
      console.error('Failed to load education.json, using fallback');
      renderEducationFallback();
    }

    // Load skills
    const skillsResponse = await fetch('data/skills.json');
    if (skillsResponse.ok) {
      const skillsData = await skillsResponse.json();
      renderSkills(skillsData.skills);
    } else {
      console.error('Failed to load skills.json, using fallback');
      renderSkillsFallback();
    }

  } catch (error) {
    console.error('Error loading JSON data:', error);
    // Fallback to static content
    renderProjectsFallback();
    renderExperiencesFallback();
    renderEducationFallback();
    renderSkillsFallback();
  }
}

// function renderProjects(projects) {
//   const container = document.getElementById('projects-container');
//   if (!container) return;

//   container.innerHTML = projects.map((project, index) => {
//     // Use images if available, otherwise use numbered placeholder
//     const thumbnail = project.images && project.images.length > 0 
//       ? `<img src="${project.images[0]}" alt="${project.title}" class="project-image">`
//       : `<span>0${index + 1}</span>`;
    
//     return `
//     <div class="project-card">
//       <div class="project-thumb">
//         ${thumbnail}
//       </div>
//       <h3>${project.title}</h3>
//       <p>${project.description || ''}</p>
//       <div class="project-tags">
//         ${project.stack.map(tech => `<span>${tech}</span>`).join('')}
//       </div>
//       <div class="project-links">
//         ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener" class="project-link">🔗 Demo Live</a>` : ''}
//         ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener" class="project-link">📂 GitHub</a>` : ''}
//       </div>
//     </div>
//   `}).join('');
// }

function renderProjects(projects) {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = projects.map((project, index) => {
    const images = project.images && project.images.length > 0 ? project.images : null;

    let thumbnail;
    if (images) {
      thumbnail = `
        <div class="project-slideshow">
          ${images.map((img, i) => `<img src="${img}" alt="${project.title}" class="project-image slide${i === 0 ? ' active' : ''}">`).join('')}
          ${images.length > 1 ? `
            <div class="slideshow-dots">
              ${images.map((_, i) => `<span class="dot${i === 0 ? ' active' : ''}"></span>`).join('')}
            </div>
          ` : ''}
        </div>
      `;
    } else {
      thumbnail = `<span>0${index + 1}</span>`;
    }

    return `
    <div class="project-card">
      <div class="project-thumb">
        ${thumbnail}
      </div>
      <h3>${project.title}</h3>
      <p>${project.description || ''}</p>
      <div class="project-tags">
        ${project.stack.map(tech => `<span>${tech}</span>`).join('')}
      </div>
      <div class="project-links">
        ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener" class="project-link">🔗 Demo Live</a>` : ''}
        ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener" class="project-link">📂 GitHub</a>` : ''}
      </div>
    </div>
  `}).join('');

  initProjectSlideshows();
}

// Fait défiler automatiquement les photos de chaque projet
function initProjectSlideshows() {
  document.querySelectorAll('.project-slideshow').forEach(slideshow => {
    const slides = slideshow.querySelectorAll('.slide');
    const dots = slideshow.querySelectorAll('.dot');
    if (slides.length <= 1) return; // rien à faire s'il n'y a qu'une photo (ou zéro)

    let current = 0;
    let interval = setInterval(nextSlide, 3000);

    function goToSlide(i) {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');
      current = i;
      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
    }

    function nextSlide() {
      goToSlide((current + 1) % slides.length);
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        clearInterval(interval);
        goToSlide(i);
        interval = setInterval(nextSlide, 3000);
      });
    });

    // pause au survol, pratique pour regarder une photo tranquillement
    slideshow.addEventListener('mouseenter', () => clearInterval(interval));
    slideshow.addEventListener('mouseleave', () => {
      interval = setInterval(nextSlide, 3000);
    });
  });
}

function renderExperiences(experiences) {
  const container = document.getElementById('experiences-container');
  if (!container) return;

  container.innerHTML = experiences.map(exp => `
    <div class="timeline-item">
      <div class="timeline-date">${exp.date}</div>
      <div class="timeline-content">
        <h3>${exp.title} — ${exp.company}</h3>
        <p>${exp.description}</p>
        <span class="stack">${exp.stack.join(' - ')}</span>
      </div>
    </div>
  `).join('');
}

function renderEducation(education) {
  const container = document.getElementById('experiences-container');
  if (!container) return;

  const educationHTML = education.map(edu => `
    <div class="timeline-item">
      <div class="timeline-date">${edu.date}</div>
      <div class="timeline-content">
        <h3>${edu.title} — ${edu.institution}</h3>
        <p>${edu.description || ''}</p>
      </div>
    </div>
  `).join('');

  container.innerHTML += educationHTML;
}

function renderSkills(skills) {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = Object.values(skills).map(category => `
    <div class="skill-card">
      <h3>${category.title}</h3>
      <div class="skill-card-content">
        ${category.skills.map(skill => `
          <span class="skill-item">${skill.name}</span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Fallback functions if JSON loading fails
function renderProjectsFallback() {
  const container = document.getElementById('projects-container');
  if (!container) return;
  
  container.innerHTML = `
    <div class="project-card">
      <div class="project-thumb"><span>01</span></div>
      <h3>Calculateur IRSA Madagascar</h3>
      <p>Application web permettant de calculer l'Impôt sur les Revenus Salariaux et Assimilés selon le barème fiscal malgache 2026.</p>
      <div class="project-tags"><span>React</span><span>TypeScript</span><span>Tailwind CSS</span><span>Vite</span></div>
      <div class="project-links">
        <a href="http://calcul-irsa-v1.vercel.app/" target="_blank" rel="noopener" class="project-link">🔗 Demo Live</a>
        <a href="https://github.com/roniratsimba/calcul-irsa-v1" target="_blank" rel="noopener" class="project-link">📂 GitHub</a>
      </div>
    </div>
    <div class="project-card">
      <div class="project-thumb"><span>02</span></div>
      <h3>Application Web Mobile Money</h3>
      <p>Simulation complète de transactions financières (envois, retraits, calcul de frais), génération de relevés PDF et notifications automatisées (inspirée de MVola).</p>
      <div class="project-tags"><span>Java 17</span><span>JSP/Servlets</span><span>PostgreSQL</span><span>Tailwind CSS</span><span>Maven</span></div>
      <div class="project-links">
        <a href="https://github.com/roniratsimba/mobile-money" target="_blank" rel="noopener" class="project-link">📂 GitHub</a>
      </div>
    </div>
    <div class="project-card">
      <div class="project-thumb"><span>03</span></div>
      <h3>Campus Scheduler</h3>
      <p>Système fullstack de gestion et d'optimisation des emplois du temps universitaires : planification des salles, enseignants et groupes, détection de conflits, recherche de salles libres, consultation publique et interface d'administration sécurisée.</p>
      <div class="project-tags"><span>React</span><span>TypeScript</span><span>Symfony</span><span>Doctrine ORM</span><span>JWT</span><span>PostgreSQL</span></div>
      <div class="project-links">
        <a href="https://github.com/roniratsimba/campus-scheduler" target="_blank" rel="noopener" class="project-link">📂 GitHub</a>
      </div>
    </div>
    <div class="project-card">
      <div class="project-thumb">
        <img src="images/projects/restau/GestResto1.png" alt="Gestion Restaurant" class="project-image">
      </div>
      <h3>Gestion Restaurant</h3>
      <div class="project-tags"><span>PHP</span><span>XAMPP</span><span>MySQL</span><span>JavaScript</span></div>
      <div class="project-links">
        <a href="https://github.com/roniratsimba/restau-management" target="_blank" rel="noopener" class="project-link">📂 GitHub</a>
      </div>
    </div>
  `;
}

function renderExperiencesFallback() {
  const container = document.getElementById('experiences-container');
  if (!container) return;
  
  container.innerHTML = `
    <div class="timeline-item">
      <div class="timeline-date">Sept 2025 - Déc 2025</div>
      <div class="timeline-content">
        <h3>Stagiaire Développeur Web — Direction Générale des Impôts</h3>
        <p>Mise en place d'un système web de gestion et suivi des stagiaires (rôles, attestations, notifications, archivage).</p>
        <span class="stack">Symfony - PostgreSQL - Doctrine ORM - Twig - JS</span>
      </div>
    </div>
  `;
}

function renderEducationFallback() {
  const container = document.getElementById('experiences-container');
  if (!container) return;
  
  const educationHTML = `
    <div class="timeline-item">
      <div class="timeline-date">2024 - Présent</div>
      <div class="timeline-content">
        <h3>Licence 3 en Génie Logiciel — ENI Fianarantsoa</h3>
        <p>Spécialisation en Génie Logiciel et Base de données.</p>
      </div>
    </div>
  `;
  
  container.innerHTML += educationHTML;
}

function renderSkillsFallback() {
  const container = document.getElementById('skills-container');
  if (!container) return;
  
  container.innerHTML = `
    <div class="skill-card">
      <h3>Backend</h3>
      <div class="skill-card-content">
        <span class="skill-item">PHP</span>
        <span class="skill-item">Symfony</span>
        <span class="skill-item">Doctrine</span>
        <span class="skill-item">Java 17</span>
        <span class="skill-item">Node.js</span>
      </div>
    </div>
    <div class="skill-card">
      <h3>Frontend</h3>
      <div class="skill-card-content">
        <span class="skill-item">React</span>
        <span class="skill-item">TypeScript</span>
        <span class="skill-item">JavaScript</span>
        <span class="skill-item">Tailwind CSS</span>
        <span class="skill-item">Twig</span>
      </div>
    </div>
    <div class="skill-card">
      <h3>Mobile</h3>
      <div class="skill-card-content">
        <span class="skill-item">Flutter</span>
        <span class="skill-item">Android Studio</span>
      </div>
    </div>
    <div class="skill-card">
      <h3>Bases de données</h3>
      <div class="skill-card-content">
        <span class="skill-item">PostgreSQL</span>
        <span class="skill-item">MySQL</span>
        <span class="skill-item">Modélisation relationnelle</span>
      </div>
    </div>
    <div class="skill-card">
      <h3>Conception & Architecture</h3>
      <div class="skill-card-content">
        <span class="skill-item">UML</span>
        <span class="skill-item">Merise</span>
        <span class="skill-item">Architecture MVC</span>
        <span class="skill-item">POO</span>
      </div>
    </div>
    <div class="skill-card">
      <h3>Outils & Workflow</h3>
      <div class="skill-card-content">
        <span class="skill-item">Git</span>
        <span class="skill-item">GitHub</span>
        <span class="skill-item">API REST</span>
        <span class="skill-item">Composer</span>
        <span class="skill-item">NPM</span>
        <span class="skill-item">Maven</span>
      </div>
    </div>
  `;
}