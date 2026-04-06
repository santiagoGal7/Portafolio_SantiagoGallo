// ── i18n — Language toggle ───────────────────────────────────
const translations = {
  es: {
    nav_about:    'Quién soy',
    nav_skills:   'Qué ofrezco',
    nav_projects: 'Proyectos',
    nav_contact:  'Contacto',

    hero_label: 'Disponible para trabajar',
    hero_role:  'Junior Developer & Problem Solver',
    hero_bio:   'Construyo experiencias digitales con código limpio, curiosidad infinita y pasión por resolver problemas reales. Cada proyecto es una oportunidad de aprender.',
    hero_cta1:  'Ver proyectos',
    hero_cta2:  'Trabajemos juntos →',

    about_tag:   'Quién soy',
    about_title: 'Una mente que piensa en <em>soluciones</em>,<br>no solo en código.',
    about_p1:    'Soy <strong>desarrollador junior</strong> con hambre de crecer. Empecé a programar porque quería entender cómo funcionan las cosas por dentro — y ese instinto me sigue guiando.',
    about_p2:    'Me manejo bien entre el front y el back: puedo construir interfaces que enamoran al usuario y lógica que hace que todo funcione sin que nadie lo note. Eso es exactamente lo que busco: código que <strong>simplemente funciona</strong>.',
    about_p3:    'Estoy en modo aprendizaje constante, colaboro bien en equipo, y me tomo cada bug como un puzle que quiero resolver.',
    stat1: 'Proyectos completados',
    stat2: 'Años de práctica',
    stat3: 'Ganas de aprender',
    stat4: 'Enfoque total',

    skills_tag:   'Qué ofrezco',
    skills_title: 'Herramientas que <em>entregan resultados.</em>',
    sk1_name: 'Frontend',
    sk1_desc: 'Interfaces rápidas, responsivas y accesibles. Me preocupo por cada píxel y por cada milisegundo de carga.',
    sk2_name: 'Backend',
    sk2_desc: 'Scripts y lógica de servidor con Python. Disfruto construir la lógica que hace posible lo que el usuario ve.',
    sk3_name: 'Base de datos',
    sk3_desc: 'Modelos de datos bien pensados para bases relacionales. La estructura importa y lo sé.',
    sk4_name: 'Control de versiones',
    sk4_desc: 'Git no es solo commits. Trabajo con ramas, pull requests y buenas prácticas de colaboración.',
    sk5_name: 'Diseño responsivo',
    sk5_desc: 'Cada proyecto luce perfecto en móvil, tablet y escritorio. El diseño adaptativo es obligatorio, no opcional.',
    sk6_name: 'Trabajo en equipo',
    sk6_desc: 'Código limpio, bien comentado y fácil de mantener. Creo en la comunicación clara y el código que otros pueden leer.',
    tag_clean: 'Código limpio',
    tag_docs:  'Documentación',
    stack_label: 'También he trabajado con',

    proj_tag:   'Proyectos',
    proj_title: 'Cosas que he <em>construido.</em>',
    proj1_num:  'Proyecto destacado &nbsp; 01',
    proj1_desc: 'Aplicación web de gestión de reservas hoteleras. Sistema completo con autenticación de usuarios y panel de administrador, módulo de reservas con validación de solapamiento de fechas, gestión de quejas y reclamos, y arquitectura modular basada en Web Components.',
    proj2_desc: 'Sitio web estático de una tienda de relojes de lujo con diseño elegante y responsivo. Construido con HTML y CSS puro — sin JavaScript. Catálogo de 20 relojes, carrusel animado, línea de tiempo histórica, blog y formulario de contacto.',
    proj3_desc: 'Aplicación de consola en Python para gestionar colecciones de libros, películas y música. CRUD completo, persistencia en JSON, navegación con flechas de teclado, búsqueda por criterios y validación robusta de datos.',
    proj_link:       'Ver en GitHub →',
    tag_nojs:        'Sin JS',
    tag_responsive:  'Responsivo',

    contact_tag:   'Contacto',
    contact_title: '¿Tienes un proyecto? <em>Hablemos.</em>',
    contact_sub:   'Estoy buscando oportunidades para crecer, colaborar y construir cosas que importen. Si tienes algo en mente, escríbeme — respondo rápido.',
    form_name:    'Tu nombre',
    form_name_ph: '¿Cómo te llamas?',
    form_email:   'Tu email',
    form_msg:     'Mensaje',
    form_msg_ph:  'Cuéntame sobre tu proyecto...',
    form_send:    'Enviar mensaje',

    footer_copy: '© 2026 Santiago Gallo — Todos los derechos reservados',
    footer_sig:  'Hecho con código & café ☕',
    link_email:  'Correo',
  },
  en: {
    nav_about:    'About me',
    nav_skills:   'What I offer',
    nav_projects: 'Projects',
    nav_contact:  'Contact',

    hero_label: 'Available for work',
    hero_role:  'Junior Developer & Problem Solver',
    hero_bio:   'I build digital experiences with clean code, endless curiosity and a passion for solving real problems. Every project is a chance to learn.',
    hero_cta1:  'View projects',
    hero_cta2:  "Let's work together →",

    about_tag:   'About me',
    about_title: 'A mind that thinks in <em>solutions</em>,<br>not just code.',
    about_p1:    'I\'m a <strong>junior developer</strong> hungry to grow. I started coding because I wanted to understand how things work under the hood — and that instinct still drives me.',
    about_p2:    'I move comfortably between front and back end: I can build interfaces users love and logic that makes everything work without anyone noticing. That\'s exactly what I aim for: code that <strong>just works</strong>.',
    about_p3:    "I'm in constant learning mode, collaborate well in teams, and treat every bug as a puzzle I want to solve.",
    stat1: 'Completed projects',
    stat2: 'Years of practice',
    stat3: 'Eagerness to learn',
    stat4: 'Full focus',

    skills_tag:   'What I offer',
    skills_title: 'Tools that <em>deliver results.</em>',
    sk1_name: 'Frontend',
    sk1_desc: 'Fast, responsive and accessible interfaces. I care about every pixel and every millisecond of load time.',
    sk2_name: 'Backend',
    sk2_desc: 'Server-side scripts and logic with Python. I enjoy building the engine that powers what the user sees.',
    sk3_name: 'Databases',
    sk3_desc: 'Well-thought-out data models for relational databases. Structure matters — and I know it.',
    sk4_name: 'Version control',
    sk4_desc: "Git is more than commits. I work with branches, pull requests and solid collaboration practices.",
    sk5_name: 'Responsive design',
    sk5_desc: 'Every project looks perfect on mobile, tablet and desktop. Adaptive design is a must, not an option.',
    sk6_name: 'Teamwork',
    sk6_desc: 'Clean, well-commented and maintainable code. I believe in clear communication and code others can read.',
    tag_clean: 'Clean code',
    tag_docs:  'Documentation',
    stack_label: "I've also worked with",

    proj_tag:   'Projects',
    proj_title: 'Things I have <em>built.</em>',
    proj1_num:  'Featured project &nbsp; 01',
    proj1_desc: 'Hotel booking management web app. Full system with user authentication and admin panel, reservation module with date-overlap validation, complaints management, and modular architecture built on Web Components.',
    proj2_desc: 'Static website for a luxury watch store with an elegant and responsive design. Built with pure HTML and CSS — no JavaScript. Catalog of 20 watches, animated carousel, historical timeline, blog and contact form.',
    proj3_desc: 'Python console app to manage collections of books, movies and music. Full CRUD, JSON persistence, keyboard-arrow navigation, multi-criteria search and robust data validation.',
    proj_link:       'View on GitHub →',
    tag_nojs:        'No JS',
    tag_responsive:  'Responsive',

    contact_tag:   'Contact',
    contact_title: 'Got a project? <em>Let\'s talk.</em>',
    contact_sub:   "I'm looking for opportunities to grow, collaborate and build things that matter. If you have something in mind, write to me — I reply fast.",
    form_name:    'Your name',
    form_name_ph: 'What is your name?',
    form_email:   'Your email',
    form_msg:     'Message',
    form_msg_ph:  'Tell me about your project...',
    form_send:    'Send message',

    footer_copy: '© 2026 Santiago Gallo — All rights reserved',
    footer_sig:  'Made with code & coffee ☕',
    link_email:  'Email',
  }
};

function applyLang(lang) {
  const t = translations[lang];
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  const btn = document.getElementById('lang-btn');
  btn.textContent = lang === 'es' ? 'EN' : 'ES';
}

document.getElementById('lang-btn').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-lang');
  applyLang(current === 'es' ? 'en' : 'es');
});

// ── Orbital cursor ──────────────────────────────────────────
const canvas = document.getElementById('cursor-canvas');
const ctx = canvas.getContext('2d');
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
});

const CYAN     = '#00f0c8';
const CYAN_DIM = 'rgba(0,240,200,0.35)';
let mx = window.innerWidth / 2, my = window.innerHeight / 2;
let cx = mx, cy = my;
let hovered = false;
let t = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
document.querySelectorAll('a, button, .skill-card, .project-card, .stat-card, .stack-item, .contact-link')
  .forEach(el => {
    el.addEventListener('mouseenter', () => hovered = true);
    el.addEventListener('mouseleave', () => hovered = false);
  });

const TRAIL = 18;
const trail = Array.from({ length: TRAIL }, () => ({ x: mx, y: my }));

function drawCursor() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  t += 0.04;
  cx += (mx - cx) * 0.14;
  cy += (my - cy) * 0.14;
  trail.unshift({ x: cx, y: cy });
  trail.length = TRAIL;

  // Comet trail
  for (let i = 1; i < trail.length; i++) {
    ctx.beginPath();
    ctx.arc(trail[i].x, trail[i].y, (1 - i / TRAIL) * 3, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0,240,200,${(1 - i / TRAIL) * 0.25})`;
    ctx.fill();
  }

  const scale = hovered ? 1.5 : 1;
  const R1 = 12 * scale, R2 = 20 * scale, R3 = 29 * scale;

  // Orbit 1 — fast, counter-clockwise
  const a1 = -t * 2.4;
  ctx.beginPath();
  ctx.arc(cx + Math.cos(a1) * R1, cy + Math.sin(a1) * R1, hovered ? 3 : 2.5, 0, Math.PI * 2);
  ctx.fillStyle = CYAN;
  ctx.fill();

  // Orbit 2 — medium, 2 dots
  for (let i = 0; i < 2; i++) {
    const a2 = t * 1.5 + i * Math.PI;
    ctx.beginPath();
    ctx.arc(cx + Math.cos(a2) * R2, cy + Math.sin(a2) * R2, hovered ? 2.5 : 2, 0, Math.PI * 2);
    ctx.fillStyle = CYAN_DIM;
    ctx.fill();
  }

  // Orbit 3 — dashed ring + 3 slow dots
  ctx.save();
  ctx.strokeStyle = 'rgba(0,240,200,0.1)';
  ctx.lineWidth = 0.5;
  ctx.setLineDash([3, 5]);
  ctx.beginPath();
  ctx.arc(cx, cy, R3, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
  for (let i = 0; i < 3; i++) {
    const a3 = -t * 0.8 + i * 2 * Math.PI / 3;
    ctx.beginPath();
    ctx.arc(cx + Math.cos(a3) * R3, cy + Math.sin(a3) * R3, hovered ? 2 : 1.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,240,200,0.5)';
    ctx.fill();
  }

  // Center dot with glow
  ctx.beginPath();
  ctx.arc(cx, cy, hovered ? 4 : 3, 0, Math.PI * 2);
  ctx.fillStyle = CYAN;
  ctx.shadowColor = CYAN;
  ctx.shadowBlur = 8;
  ctx.fill();
  ctx.shadowBlur = 0;

  requestAnimationFrame(drawCursor);
}
drawCursor();

// ── Reveal on scroll ────────────────────────────────────────
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);
document.querySelectorAll('.reveal').forEach(r => observer.observe(r));
document.querySelectorAll('#hero .reveal').forEach(el => setTimeout(() => el.classList.add('visible'), 200));

// ── Active nav on scroll ─────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 200) current = s.id; });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--cyan)' : '';
  });
});

// ── Send button — clear form ─────────────────────────────────
document.getElementById('btn-send').addEventListener('click', () => {
  document.getElementById('form-name').value  = '';
  document.getElementById('form-email').value = '';
  document.getElementById('form-msg').value   = '';
});