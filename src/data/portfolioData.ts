export type Language = "fr" | "en";

export interface Project {
  id: number;
  title: string;
  kicker: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  stack: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  images: string[];
}

export interface Experience {
  date: string;
  role: {
    fr: string;
    en: string;
  };
  company: string;
  location: string;
  description: {
    fr: string;
    en: string;
  };
  stack: string[];
}

export interface Capability {
  number: string;
  title: {
    fr: string;
    en: string;
  };
  text: {
    fr: string;
    en: string;
  };
  tags: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Campus Scheduler",
    kicker: {
      fr: "SYSTÈME FULL-STACK",
      en: "FULL-STACK SYSTEM",
    },
    description: {
      fr: "Système full-stack de gestion des emplois du temps universitaires. Il centralise la planification des salles, enseignants et groupes, détecte les conflits, permet de rechercher des salles libres et distingue la consultation publique de l’administration sécurisée.",
      en: "A full-stack university scheduling system. It centralizes room, teacher and group planning, detects conflicts, supports free-room search and separates public consultation from secured administration.",
    },
    stack: ["React", "TypeScript", "Symfony", "Doctrine", "JWT", "PostgreSQL"],
    github: "https://github.com/roniratsimba/campus-scheduler",
    featured: true,
    images: [],
  },
  {
    id: 2,
    title: "Calculateur IRSA Madagascar",
    kicker: {
      fr: "APPLICATION WEB",
      en: "WEB APPLICATION",
    },
    description: {
      fr: "Application web dédiée au calcul de l’Impôt sur les Revenus Salariaux et Assimilés selon le barème fiscal malgache 2026. L’interface transforme un calcul fiscal précis en une expérience simple, rapide et adaptée au mobile.",
      en: "A web application dedicated to calculating Madagascar’s salary income tax using the 2026 tax scale. It turns a precise tax calculation into a simple, fast and mobile-friendly experience.",
    },
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    demo: "https://calcul-irsa-v1.vercel.app/",
    github: "https://github.com/roniratsimba/calcul-irsa-v1",
    images: [
      "/images/projects/irsa/info.png",
      "/images/projects/irsa/mobile.png",
      "/images/projects/irsa/calcul.png",
      "/images/projects/irsa/bareme.png",
    ],
  },
  {
    id: 3,
    title: "Commit Generator",
    kicker: {
      fr: "OUTIL DE DÉVELOPPEMENT",
      en: "DEVELOPER TOOL",
    },
    description: {
      fr: "Outil CLI qui analyse les changements Git et génère des messages de commit conformes aux Conventional Commits. Il peut fonctionner sans IA ou s’appuyer sur plusieurs fournisseurs, notamment Groq, Gemini et LocalAI.",
      en: "A CLI that analyses Git changes and generates Conventional Commit messages. It can run without AI or connect to multiple providers, including Groq, Gemini and LocalAI.",
    },
    stack: ["Python", "CLI", "Git", "APIs"],
    demo: "https://roniratsimba.github.io/commit-generator-site/",
    github: "https://github.com/roniratsimba/commit-generator",
    images: [
      "/images/projects/commit-gen/1.png",
      "/images/projects/commit-gen/2.png",
      "/images/projects/commit-gen/3.png",
    ],
  },
  {
    id: 4,
    title: "Mobile Money Simulation",
    kicker: {
      fr: "APPLICATION JAVA",
      en: "JAVA APPLICATION",
    },
    description: {
      fr: "Application web Java simulant un service de transactions Mobile Money. Elle couvre les envois, retraits, calcul des frais, génération de relevés PDF et notifications automatisées, avec PostgreSQL comme couche de données.",
      en: "A Java web application simulating a Mobile Money transaction service. It covers transfers, withdrawals, fee calculation, PDF statements and automated notifications, with PostgreSQL as its data layer.",
    },
    stack: ["Java 17", "JSP / Servlets", "PostgreSQL", "Maven"],
    github: "https://github.com/roniratsimba/mobile-money",
    images: [],
  },
  {
    id: 5,
    title: "Gestion Restaurant",
    kicker: {
      fr: "APPLICATION DE GESTION",
      en: "BUSINESS APPLICATION",
    },
    description: {
      fr: "Application web de gestion de restaurant développée pour structurer les opérations et la gestion des données au quotidien. Le projet met l’accent sur une interface pratique et sur une organisation claire des fonctionnalités métier.",
      en: "A web application for restaurant management, built to structure day-to-day operations and data management. The project focuses on a practical interface and a clear organization of business functionality.",
    },
    stack: ["PHP", "XAMPP", "MySQL", "JavaScript"],
    github: "https://github.com/roniratsimba/restau-management",
    images: [
      "/images/projects/restau/GestResto1.png",
      "/images/projects/restau/GestResto2.png",
      "/images/projects/restau/GestResto3.png",
      "/images/projects/restau/GestResto5.png",
    ],
  },
  {
    id: 6,
    title: "Portfolio Terminal",
    kicker: {
      fr: "EXPÉRIMENTAL",
      en: "EXPERIMENTAL",
    },
    description: {
      fr: "Expérimentation de portfolio personnel sous la forme d’un environnement interactif inspiré d’un terminal et d’un bureau. Le projet explore volontairement l’interface, la navigation et les interactions comme alternative à un portfolio classique.",
      en: "An experimental personal portfolio presented as an interactive terminal-and-desktop environment. The project deliberately explores interface, navigation and interaction as an alternative to a conventional portfolio.",
    },
    stack: ["React", "TypeScript"],
    demo: "https://roni-terminal.vercel.app/",
    github: "https://github.com/roniratsimba/portfolio-fun",
    images: [
      "/images/projects/fun-portfolio/terminal.png",
      "/images/projects/fun-portfolio/bureau.png",
      "/images/projects/fun-portfolio/mobile.png",
      "/images/projects/fun-portfolio/hire.png",
    ],
  },
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    date: "Sep — Dec 2025",
    role: {
      fr: "Stagiaire développeur web",
      en: "Web Developer Intern",
    },
    company: "Direction Générale des Impôts",
    location: "Antananarivo",
    description: {
      fr: "Conception et déploiement d’une application web de gestion et de suivi des stagiaires, avec gestion des rôles, rapports hebdomadaires, notifications et archivage des données.",
      en: "Designed and deployed a web application for intern management and tracking, including user roles, weekly reports, notifications and data archiving.",
    },
    stack: ["Symfony", "PostgreSQL", "Doctrine ORM", "Twig", "JavaScript"],
  },
  {
    date: "2024 — Present",
    role: {
      fr: "Génie logiciel (Licence)",
      en: "Software Engineering (B.Sc.)",
    },
    company: "ENI Fianarantsoa",
    location: "Madagascar",
    description: {
      fr: "Formation universitaire d'excellence axée sur le génie logiciel, la modélisation objet, l'algorithmique et les bases de données relationnelles.",
      en: "Degree-level studies focused on software engineering, object-oriented design, algorithms, and relational database systems.",
    },
    stack: [""],
  },
];

export const CAPABILITIES_DATA: Capability[] = [
  {
    number: "01",
    title: {
      fr: "Backend & APIs",
      en: "Backend & APIs",
    },
    text: {
      fr: "Architecture applicative, APIs REST, authentification JWT, autorisation fine, données relationnelles et logique métier rigoureuse.",
      en: "Application architecture, REST APIs, JWT authentication, access control, relational modeling, and robust business logic.",
    },
    tags: ["PHP", "Symfony", "Doctrine", "Node.js", "PostgreSQL"],
  },
  {
    number: "02",
    title: {
      fr: "Frontend & UI",
      en: "Frontend & UI",
    },
    text: {
      fr: "Interfaces réactives et fluides pensées autour d'interactions utiles, d'un état lisible et de composants prévisibles.",
      en: "Responsive and fluid interfaces built with helpful interactions, clear state machines, and predictable component hierarchies.",
    },
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Spline 3D"],
  },
  {
    number: "03",
    title: {
      fr: "Données & Architecture",
      en: "Data & Architecture",
    },
    text: {
      fr: "Modélisation relationnelle et structure applicative conçues pour garder la complexité compréhensible à mesure que le projet grandit.",
      en: "Relational data schema design and application structure crafted to keep complexity manageable as the project scales.",
    },
    tags: ["PostgreSQL", "MySQL", "UML", "POO", "Indexation"],
  },
  {
    number: "04",
    title: {
      fr: "Outils & Workflow",
      en: "Tools & Workflow",
    },
    text: {
      fr: "Gestion de versions, gestionnaires de paquets et workflow orienté terminal pour un développement reproductible et automatisable.",
      en: "Version control, package managers, and terminal-first workflows for reproducible and automated development.",
    },
    tags: ["Git", "GitHub", "Composer", "NPM"],
  },
];

export const TECH_STACK_TAGS = [
  "Symfony",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "Java",
  "Doctrine ORM",
  "Git",
  "REST APIs"
];

export const TRANSLATIONS = {
  fr: {
    nav: {
      work: "Projets",
      engineering: "Ingénierie",
      experience: "Expérience",
      about: "À propos",
      contact: "Contact",
      getQuote: "Me contacter",
      available: "Disponible pour opportunités",
    },
    hero: {
      badge: "DÉVELOPPEUR FULL-STACK",
      titleMain: "JE CONSTRUIS DES PRODUITS WEB",
      titleAccent: " QUI ONT UNE RAISON D'EXISTER.",
      subheading: "Ingénierie logicielle avec une approche produit.",
      description:
        "Je conçois et développe des applications web fiables, des APIs robustes et des outils numériques avec Symfony, React, TypeScript et PostgreSQL. Basé à Madagascar, ouvert aux opportunités à distance et internationales.",
      ctaWork: "Voir mes projets",
      ctaCv: "Télécharger le CV",
      ctaContact: "Me contacter",
      trust: "Basé à Madagascar · Ouvert aux opportunités à distance · Symfony · React · TypeScript · PostgreSQL",
      asideNote: "01 Ingénierie logicielle avec une approche produit.",
    },
    work: {
      eyebrow: "PROJETS SÉLECTIONNÉS",
      title: "Des projets construits pour répondre à de vrais besoins.",
      subtitle:
        "Chaque projet montre une manière de réfléchir, de modéliser et de transformer une idée en produit numérique utilisable et robuste.",
      liveDemo: "Démo en ligne ↗",
      sourceCode: "Code source ↗",
      allProjects: "Tous les projets",
    },
    engineering: {
      eyebrow: "INGÉNIERIE",
      title: "Ma façon de construire.",
      subtitle:
        "Je privilégie une architecture claire, un code maintenable et des interfaces qui restent au service direct du produit et des utilisateurs.",
    },
    experience: {
      eyebrow: "EXPÉRIENCE & FORMATION",
      title: "Le travail derrière les projets.",
    },
    about: {
      eyebrow: "À PROPOS DE RONI",
      title1: "Toujours en apprentissage.",
      title2: "Déjà dans la construction.",
      lead: "Je suis Roni Ratsimbazafy, étudiant en génie logiciel et développeur full-stack basé à Madagascar.",
      p1: "Je travaille principalement avec Symfony, React, TypeScript et PostgreSQL. J’aime partir d’un problème concret, modéliser les données et la logique métier, concevoir l'architecture backend puis aboutir à une interface intuitive, maintenable et rapide.",
      p2: "Ma direction actuelle est l’ingénierie logicielle approfondie : conception orientée objet, architecture propre, écosystème Linux, automatisation et bonnes pratiques de livraison.",
      location: "Localisation",
      locationValue: "Madagascar",
      focus: "Orientation",
      focusValue: "Full-stack / Backend",
      education: "Formation",
      educationValue: "Génie logiciel (ENI)",
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Une opportunité ? Discutons-en.",
      description:
        "Un projet, un poste à distance ou simplement envie d’échanger autour du dev ? Je réponds rapidement par email.",
      email: "roniratsimba@gmail.com",
      copyEmail: "Copier l'email",
      copied: "Email copié !",
      openEmail: "Envoyer un message",
      close: "Fermer",
    },
    footer: {
      rights: "Tous droits réservés.",
      designedWith: "Design Hero 3D Spline & React.",
      top: "Haut de page ↑",
    },
  },
  en: {
    nav: {
      work: "Projects",
      engineering: "Engineering",
      experience: "Experience",
      about: "About",
      contact: "Contact",
      getQuote: "Get in touch",
      available: "Open to opportunities",
    },
    hero: {
      badge: "FULL-STACK DEVELOPER",
      titleMain: "I BUILD WEB PRODUCTS",
      titleAccent: " THAT HAVE A REASON TO EXIST.",
      subheading: "Software engineering with a product-first approach.",
      description:
        "I design and build reliable web applications, robust APIs, and digital tools with Symfony, React, TypeScript, and PostgreSQL. Based in Madagascar, open to global remote opportunities.",
      ctaWork: "View Projects",
      ctaCv: "Download CV",
      ctaContact: "Get in Touch",
      trust: "Based in Madagascar · Open to remote opportunities · Symfony · React · TypeScript · PostgreSQL",
      asideNote: "01 Software engineering with a product-first approach.",
    },
    work: {
      eyebrow: "SELECTED PROJECTS",
      title: "Projects engineered to solve tangible problems.",
      subtitle:
        "Each project reflects a deliberate way of thinking, modeling domain logic, and turning requirements into usable, high-performance software.",
      liveDemo: "Live Demo ↗",
      sourceCode: "Source Code ↗",
      allProjects: "All Projects",
    },
    engineering: {
      eyebrow: "ENGINEERING",
      title: "How I build systems.",
      subtitle:
        "I prioritize clean architecture, maintainable codebases, and interfaces designed to serve users and business goals.",
    },
    experience: {
      eyebrow: "EXPERIENCE & EDUCATION",
      title: "The track record behind the projects.",
    },
    about: {
      eyebrow: "ABOUT RONI",
      title1: "Always learning.",
      title2: "Already building.",
      lead: "I'm Roni Ratsimbazafy, a software engineering student and full-stack developer based in Madagascar.",
      p1: "I work primarily with Symfony, React, TypeScript, and PostgreSQL. I enjoy taking a real-world problem, modeling its data and business logic, architecting the backend, and building a polished, accessible frontend.",
      p2: "My current focus is deep software craftsmanship: clean architecture, Linux systems, automation, and reliable deployment workflows.",
      location: "Location",
      locationValue: "Madagascar",
      focus: "Focus",
      focusValue: "Full-stack / Backend",
      education: "Education",
      educationValue: "Software Engineering (ENI)",
    },
    contact: {
      eyebrow: "CONTACT",
      title: "An opportunity? Let's talk.",
      description:
        "A project, a remote position, or simply want to connect and talk tech? Feel free to reach out directly.",
      email: "roniratsimba@gmail.com",
      copyEmail: "Copy email",
      copied: "Email copied!",
      openEmail: "Send email",
      close: "Close",
    },
    footer: {
      rights: "All rights reserved.",
      designedWith: "Hero 3D Spline & React.",
      top: "Back to top ↑",
    },
  },
};
