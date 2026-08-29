const CONTENT = {
  en: {
    skip:'Skip to content', 'nav.work':'Work','nav.experience':'Experience','nav.about':'About','nav.contact':'Contact','language.label':'Français','header.available':'Available',
    'hero.eyebrow':'FULL-STACK DEVELOPER','hero.title':'I build web products','hero.titleEm':'that work.','hero.description':'I design and develop reliable web applications, APIs and digital products with Symfony, React and TypeScript.','hero.work':'View selected work','hero.cv':'Download CV','hero.based':'Based in Madagascar','hero.remote':'Open to remote opportunities','hero.note':'Software engineering<br>with a product mindset.',
    'stack.label':'Core stack','work.eyebrow':'SELECTED WORK','work.title':'Projects with a purpose.','work.description':'Not a list of technologies. A selection of things I have actually built.',
    'engineering.eyebrow':'ENGINEERING','engineering.title':'How I work.','engineering.description':'I care about clear architecture, maintainable code and interfaces that stay out of the way.',
    'cap.backend.title':'Backend & APIs','cap.backend.text':'Application architecture, REST APIs, authentication, authorization, relational data and business logic.','cap.frontend.title':'Frontend','cap.frontend.text':'Responsive interfaces built around useful interactions, readable state and predictable components.','cap.data.title':'Data & Architecture','cap.data.text':'Relational modelling and application structure designed to keep complexity understandable as a project grows.','cap.workflow.title':'Tools & Workflow','cap.workflow.text':'Version control, package management and a terminal-first workflow focused on repeatable development.',
    'experience.eyebrow':'EXPERIENCE','experience.title':"Where I've worked.",'about.eyebrow':'ABOUT RORO','about.title1':'Still learning.','about.title2':'Already building.','about.lead':"I'm Roni, known online as Roro — a software engineering student and full-stack developer based in Madagascar.",'about.p1':'I work mainly across Symfony, React, TypeScript and PostgreSQL. I enjoy taking a problem from data modelling and backend logic to a usable interface, then making the whole thing easier to maintain.','about.p2':'My current direction is deeper software engineering: stronger architecture, Linux and developer tooling, deployment, testing and practical automation.','about.location':'Location','about.focus':'Focus','about.focusValue':'Full-stack / Backend','about.education':'Education','about.educationValue':'Software Engineering',
    'contact.eyebrow':'CONTACT','contact.title':'An opportunity? Let’s talk.','contact.description':'A project, a professional opportunity, or simply want to exchange? Write to me.','contact.cta':'Open contact','footer.contact':'Contact','footer.top':'Back to top ↑','projects.live':'Live demo ↗','projects.source':'Source code ↗','projects.gallery':'View project','projects.noImage':'Project preview coming soon.',
    'modal.eyebrow':"LET'S TALK",'modal.title':'An opportunity? Let’s talk.','modal.description':'A project, a professional opportunity, or simply want to exchange? Write to me.','modal.email':'Write an email','modal.close':'Close','gallery.previous':'Previous image','gallery.next':'Next image'
  },
  fr: {
    skip:'Aller au contenu','nav.work':'Projets','nav.experience':'Expérience','nav.about':'À propos','nav.contact':'Contact','language.label':'Français','header.available':'Disponible',
    'hero.eyebrow':'DÉVELOPPEUR FULL-STACK','hero.title':'Je construis des produits web','hero.titleEm':'qui fonctionnent.','hero.description':'Je conçois et développe des applications web fiables, des APIs et des produits numériques avec Symfony, React et TypeScript.','hero.work':'Voir mes projets','hero.cv':'Télécharger le CV','hero.based':'Basé à Madagascar','hero.remote':'Ouvert aux opportunités à distance','hero.note':'Ingénierie logicielle<br>avec une approche produit.',
    'stack.label':'Stack principale','work.eyebrow':'PROJETS SÉLECTIONNÉS','work.title':'Des projets qui répondent à un besoin.','work.description':'Pas une simple liste de technologies. Une sélection de projets que j’ai réellement construits.',
    'engineering.eyebrow':'INGÉNIERIE','engineering.title':'Ma façon de travailler.','engineering.description':'Je privilégie une architecture claire, un code maintenable et des interfaces qui restent au service du produit.',
    'cap.backend.title':'Backend & APIs','cap.backend.text':'Architecture applicative, APIs REST, authentification, autorisation, données relationnelles et logique métier.','cap.frontend.title':'Frontend','cap.frontend.text':'Interfaces responsive pensées autour d’interactions utiles, d’un état lisible et de composants prévisibles.','cap.data.title':'Données & Architecture','cap.data.text':'Modélisation relationnelle et structure applicative conçues pour garder la complexité compréhensible à mesure que le projet grandit.','cap.workflow.title':'Outils & Workflow','cap.workflow.text':'Gestion de versions, gestionnaires de paquets et workflow orienté terminal pour un développement reproductible.',
    'experience.eyebrow':'EXPÉRIENCE','experience.title':'Mon parcours professionnel.','about.eyebrow':'À PROPOS DE RORO','about.title1':'Toujours en apprentissage.','about.title2':'Déjà dans la construction.','about.lead':'Je suis Roni, connu en ligne sous le nom de Roro — étudiant en génie logiciel et développeur full-stack basé à Madagascar.','about.p1':'Je travaille principalement avec Symfony, React, TypeScript et PostgreSQL. J’aime partir d’un problème, modéliser les données et la logique métier, construire le backend puis aboutir à une interface réellement utilisable et maintenable.','about.p2':'Ma direction actuelle est l’ingénierie logicielle approfondie : architecture, Linux et outils de développement, déploiement, tests et automatisation pratique.','about.location':'Localisation','about.focus':'Orientation','about.focusValue':'Full-stack / Backend','about.education':'Formation','about.educationValue':'Génie logiciel',
    'contact.eyebrow':'CONTACT','contact.title':'Une opportunité ? Discutons-en.','contact.description':'Un projet, une opportunité professionnelle ou simplement envie d’échanger ? Écrivez-moi.','contact.cta':'Ouvrir le contact','footer.contact':'Contact','footer.top':'Retour en haut ↑','projects.live':'Démo en ligne ↗','projects.source':'Code source ↗','projects.gallery':'Voir le projet','projects.noImage':'Aperçu du projet bientôt disponible.',
    'modal.eyebrow':'ÉCHANGEONS','modal.title':'Une opportunité ? Discutons-en.','modal.description':'Un projet, une opportunité professionnelle ou simplement envie d’échanger ? Écrivez-moi.','modal.email':'Écrire un email','modal.close':'Fermer','gallery.previous':'Image précédente','gallery.next':'Image suivante'
  }
};

const FALLBACK_DATA = {
  projects:[
    {id:1,title:'Campus Scheduler',kicker:{en:'FULL-STACK SYSTEM',fr:'SYSTÈME FULL-STACK'},description:{en:'A scheduling platform for universities: room, teacher and group planning, conflict detection, free-room search and a secured administration interface.',fr:'Une plateforme de gestion des emplois du temps universitaires : planification des salles, enseignants et groupes, détection des conflits, recherche de salles libres et interface d’administration sécurisée.'},stack:['React','TypeScript','Symfony','Doctrine','JWT','PostgreSQL'],github:'https://github.com/roniratsimba/campus-scheduler',featured:true,images:[]},
    {id:2,title:'Calculateur IRSA Madagascar',kicker:{en:'WEB APPLICATION',fr:'APPLICATION WEB'},description:{en:'A focused web application for calculating Malagasy salary income tax using the 2026 tax scale, with a responsive interface built for quick, practical use.',fr:'Une application web dédiée au calcul de l’IRSA selon le barème fiscal malgache 2026, avec une interface responsive pensée pour une utilisation rapide et pratique.'},stack:['React','TypeScript','Tailwind CSS','Vite'],demo:'https://calcul-irsa-v1.vercel.app/',github:'https://github.com/roniratsimba/calcul-irsa-v1',images:['images/projects/irsa/info.png','images/projects/irsa/mobile.png','images/projects/irsa/calcul.png','images/projects/irsa/bareme.png']},
    {id:3,title:'Commit Generator',kicker:{en:'DEVELOPER TOOL',fr:'OUTIL DE DÉVELOPPEMENT'},description:{en:'A CLI that analyses Git changes and generates conventional commit messages, with optional AI support through multiple providers.',fr:'Un outil en ligne de commande qui analyse les changements Git et génère des messages de commit conventionnels, avec un support IA optionnel via plusieurs fournisseurs.'},stack:['Python','CLI','Git','APIs'],demo:'https://roniratsimba.github.io/commit-generator-site/',github:'https://github.com/roniratsimba/commit-generator',images:['images/projects/commit-gen/1.png','images/projects/commit-gen/2.png','images/projects/commit-gen/3.png']},
    {id:4,title:'Mobile Money Simulation',kicker:{en:'JAVA APPLICATION',fr:'APPLICATION JAVA'},description:{en:'A financial transaction simulator covering transfers, withdrawals, fee calculation, PDF statements and automated notifications.',fr:'Un simulateur de transactions financières couvrant les transferts, retraits, calcul des frais, relevés PDF et notifications automatisées.'},stack:['Java 17','JSP / Servlets','PostgreSQL','Maven'],github:'https://github.com/roniratsimba/mobile-money',images:[]},
    {id:5,title:'Gestion Restaurant',kicker:{en:'BUSINESS APPLICATION',fr:'APPLICATION DE GESTION'},description:{en:'A restaurant management application built around day-to-day operational workflows, data management and a practical web interface.',fr:'Une application de gestion de restaurant pensée autour des opérations quotidiennes, de la gestion des données et d’une interface web pratique.'},stack:['PHP','XAMPP','MySQL','JavaScript'],github:'https://github.com/roniratsimba/restau-management',images:['images/projects/restau/GestResto1.png','images/projects/restau/GestResto2.png','images/projects/restau/GestResto3.png','images/projects/restau/GestResto4.png','images/projects/restau/GestResto5.png']},
    {id:6,title:'Portfolio Terminal',kicker:{en:'EXPERIMENTAL',fr:'EXPÉRIMENTAL'},description:{en:'A second personal portfolio presented as a terminal-style interactive environment — an exploration of interface and interaction design.',fr:'Un second portfolio personnel présenté comme un environnement interactif de type terminal — une exploration du design d’interface et des interactions.'},stack:['React','TypeScript'],demo:'https://roni-terminal.vercel.app/',github:'https://github.com/roniratsimba/portfolio-fun',images:['images/projects/fun-portfolio/terminal.png','images/projects/fun-portfolio/bureau.png','images/projects/fun-portfolio/mobile.png','images/projects/fun-portfolio/hire.png']}
  ],
  experiences:[
    {date:'Sep — Dec 2025',role:{en:'Web Developer Intern',fr:'Stagiaire développeur web'},company:'Direction Générale des Impôts',location:'Antananarivo',description:{en:'Designed and deployed a web application for intern management and tracking, including user roles, weekly reports, notifications and data archiving.',fr:'Conception et déploiement d’une application web de gestion et de suivi des stagiaires, avec gestion des rôles, rapports hebdomadaires, notifications et archivage des données.'},stack:['Symfony','PostgreSQL','Doctrine ORM','Twig','JavaScript']},
    {date:'2024 — Present',role:{en:'Software Engineering',fr:'Génie logiciel'},company:'ENI Fianarantsoa',location:'Madagascar',description:{en:'Licence-level studies focused on software engineering and databases.',fr:'Formation de niveau Licence axée sur le génie logiciel et les bases de données.'},stack:[]}
  ]
};

let DATA=FALLBACK_DATA;
let currentLanguage=localStorage.getItem('roro-language')||'en';
let galleryProject=null;
let galleryIndex=0;
let lastFocusedElement=null;

const escapeHTML=value=>String(value??'').replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
const t=key=>CONTENT[currentLanguage][key]??key;

async function loadData(){
  try{const response=await fetch('data/projects.json',{cache:'no-store'});if(response.ok){const external=await response.json();if(external.projects?.length){DATA.projects=external.projects.map(normalizeProject);}}}catch(error){console.info('Using embedded project data.',error);}
}
function normalizeProject(p){return {...p,images:p.images||[]};}

function applyTranslations(lang){
  if(!CONTENT[lang])lang='en';
  currentLanguage=lang;localStorage.setItem('roro-language',lang);document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(CONTENT[lang][key]!==undefined)el.innerHTML=CONTENT[lang][key];});
  document.querySelectorAll('.language-button').forEach(btn=>{const active=btn.dataset.lang===lang;btn.classList.toggle('is-active',active);btn.setAttribute('aria-pressed',String(active));});
  document.querySelectorAll('[data-i18n-aria]').forEach(el=>{const key=el.dataset.i18nAria;if(CONTENT[lang][key])el.setAttribute('aria-label',CONTENT[lang][key]);});
  renderProjects();renderExperiences();
}

function renderProjects(){
  const root=document.querySelector('#projects-container');
  root.innerHTML=DATA.projects.map((p,i)=>{
    const images=p.images||[];const cover=images[0];
    const visual=cover?`<button class="project-visual" type="button" data-project-id="${p.id}" aria-label="${escapeHTML(t('projects.gallery'))}: ${escapeHTML(p.title)}"><img class="project-image" src="${escapeHTML(cover)}" alt="${escapeHTML(currentLanguage==='fr'?'Capture du projet':'Project screenshot')} — ${escapeHTML(p.title)}" loading="lazy" width="1600" height="900"><span class="project-view">${escapeHTML(t('projects.gallery'))}<span aria-hidden="true">↗</span></span></button>`:`<div class="project-placeholder" aria-label="${escapeHTML(t('projects.noImage'))}"><strong>0${i+1}</strong></div>`;
    return `<article class="project-card reveal ${p.featured?'featured':''}" style="--reveal-delay:${Math.min(i*70,350)}ms"><div>${visual}</div><div class="project-body"><p class="project-kicker">${escapeHTML(p.kicker?.[currentLanguage]||'PROJECT')}</p><h3 class="project-title">${escapeHTML(p.title)}</h3><p class="project-description">${escapeHTML(p.description?.[currentLanguage]||'')}</p><div class="project-tags">${(p.stack||[]).map(s=>`<span>${escapeHTML(s)}</span>`).join('')}</div><div class="project-links">${p.demo?`<a href="${escapeHTML(p.demo)}" target="_blank" rel="noopener">${escapeHTML(t('projects.live'))}</a>`:''}${p.github?`<a href="${escapeHTML(p.github)}" target="_blank" rel="noopener">${escapeHTML(t('projects.source'))}</a>`:''}${images.length?`<button class="text-link" type="button" data-project-id="${p.id}">${escapeHTML(t('projects.gallery'))} ↗</button>`:''}</div></div></article>`;
  }).join('');
  root.querySelectorAll('[data-project-id]').forEach(button=>button.addEventListener('click',()=>openGallery(Number(button.dataset.projectId))));
  observeReveals();
}

function renderExperiences(){
  const root=document.querySelector('#experiences-container');
  root.innerHTML=DATA.experiences.map(e=>`<article class="experience-item"><div class="experience-date">${escapeHTML(e.date)}</div><div><h3 class="experience-role">${escapeHTML(e.role?.[currentLanguage]||'')}</h3><p class="experience-company">${escapeHTML(e.company)}</p><p class="experience-description">${escapeHTML(e.description?.[currentLanguage]||'')}</p>${e.stack?.length?`<div class="project-tags">${e.stack.map(s=>`<span>${escapeHTML(s)}</span>`).join('')}</div>`:''}</div><div class="experience-location">${escapeHTML(e.location)}</div></article>`).join('');
}

function openGallery(id){
  const project=DATA.projects.find(p=>p.id===id);if(!project||!project.images?.length)return;
  galleryProject=project;galleryIndex=0;lastFocusedElement=document.activeElement;
  const modal=document.querySelector('#gallery-modal');modal.hidden=false;modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');
  updateGallery();modal.querySelector('.modal-close').focus();
}
function updateGallery(){
  const images=galleryProject.images||[];const image=images[galleryIndex];
  document.querySelector('#gallery-image').src=image;document.querySelector('#gallery-image').alt=`${currentLanguage==='fr'?'Capture du projet':'Project screenshot'} — ${galleryProject.title}`;
  document.querySelector('#gallery-title').textContent=galleryProject.title;document.querySelector('#gallery-kicker').textContent=galleryProject.kicker?.[currentLanguage]||'PROJECT';document.querySelector('#gallery-counter').textContent=`${String(galleryIndex+1).padStart(2,'0')} / ${String(images.length).padStart(2,'0')}`;
  document.querySelector('[data-gallery-prev]').disabled=images.length<2;document.querySelector('[data-gallery-next]').disabled=images.length<2;
  document.querySelector('#gallery-thumbs').innerHTML=images.map((src,i)=>`<button class="gallery-thumb ${i===galleryIndex?'is-active':''}" type="button" data-gallery-index="${i}" aria-label="${i+1} / ${images.length}"><img src="${escapeHTML(src)}" alt="" loading="lazy"></button>`).join('');
  document.querySelectorAll('[data-gallery-index]').forEach(btn=>btn.addEventListener('click',()=>{galleryIndex=Number(btn.dataset.galleryIndex);updateGallery();}));
}
function stepGallery(direction){if(!galleryProject)return;const total=galleryProject.images.length;galleryIndex=(galleryIndex+direction+total)%total;updateGallery();}
function closeGallery(){const modal=document.querySelector('#gallery-modal');modal.hidden=true;modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');if(lastFocusedElement)lastFocusedElement.focus();galleryProject=null;}

function openContact(){const modal=document.querySelector('#contact-modal');lastFocusedElement=document.activeElement;modal.hidden=false;modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');modal.querySelector('.modal-close').focus();}
function closeContact(){const modal=document.querySelector('#contact-modal');modal.hidden=true;modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');if(lastFocusedElement)lastFocusedElement.focus();}
function trapFocus(event,modal){if(event.key!=='Tab')return;const focusables=[...modal.querySelectorAll('button,a[href]')].filter(el=>!el.disabled);if(!focusables.length)return;const first=focusables[0],last=focusables[focusables.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}

function setupHeader(){const header=document.querySelector('.site-header');window.addEventListener('scroll',()=>header.classList.toggle('is-scrolled',window.scrollY>30),{passive:true});}
function observeReveals(){const elements=document.querySelectorAll('.reveal:not(.is-visible)');if(!('IntersectionObserver' in window)){elements.forEach(el=>el.classList.add('is-visible'));return;}const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});elements.forEach(el=>observer.observe(el));}
function setupEvents(){
  document.querySelectorAll('.language-button').forEach(btn=>btn.addEventListener('click',()=>applyTranslations(btn.dataset.lang)));
  document.querySelectorAll('[data-open-contact]').forEach(btn=>btn.addEventListener('click',openContact));
  document.querySelectorAll('[data-close-modal]').forEach(btn=>btn.addEventListener('click',closeContact));
  document.querySelectorAll('[data-close-gallery]').forEach(btn=>btn.addEventListener('click',closeGallery));
  document.querySelector('[data-gallery-prev]').addEventListener('click',()=>stepGallery(-1));
  document.querySelector('[data-gallery-next]').addEventListener('click',()=>stepGallery(1));
  document.addEventListener('keydown',event=>{
    const contact=document.querySelector('#contact-modal');const gallery=document.querySelector('#gallery-modal');
    if(!contact.hidden){if(event.key==='Escape')closeContact();else trapFocus(event,contact);}
    if(!gallery.hidden){if(event.key==='Escape')closeGallery();else if(event.key==='ArrowLeft')stepGallery(-1);else if(event.key==='ArrowRight')stepGallery(1);else trapFocus(event,gallery);}
  });
}

setupEvents();setupHeader();applyTranslations(currentLanguage);observeReveals();loadData().then(()=>renderProjects());
