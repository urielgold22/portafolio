// Datos del portafolio
const portfolioData = {
    name: "Tu Nombre Completo",
    bio: "Desarrollador Web Frontend con 3 años de experiencia en React, JavaScript y tecnologías modernas. Apasionado por crear interfaces intuitivas y experiencias de usuario excepcionales.",
    github: "https://github.com/tu-usuario",
    linkedin: "https://linkedin.com/in/tu-usuario",
    projects: [
        {
            id: 1,
            title: "Tienda Virtual",
            description: "E-commerce desarrollado con React y Node.js con carrito de compras, pasarela de pagos y panel de administración.",
            image: "proyecto1.jpg", // Reemplaza con la ruta de tu imagen
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            demo: "https://proyecto1.ejemplo.com",
            code: "https://github.com/tu-usuario/proyecto1"
        },
        {
            id: 2,
            title: "Dashboard Analytics",
            description: "Panel de administración con gráficos en tiempo real para análisis de datos empresariales.",
            image: "proyecto2.jpg", // Reemplaza con la ruta de tu imagen
            tags: ["React", "D3.js", "Firebase", "Tailwind CSS"],
            demo: "https://proyecto2.ejemplo.com",
            code: "https://github.com/tu-usuario/proyecto2"
        },
        {
            id: 3,
            title: "App de Gestión de Tareas",
            description: "Aplicación de gestión de tareas con recordatorios, etiquetas y organización por proyectos.",
            image: "proyecto3.jpg", // Reemplaza con la ruta de tu imagen
            tags: ["JavaScript", "Node.js", "MongoDB", "Express"],
            demo: "https://proyecto3.ejemplo.com",
            code: "https://github.com/tu-usuario/proyecto3"
        }
    ]
};

// Función para cargar los datos del perfil
function loadProfileData() {
    document.getElementById('name').textContent = portfolioData.name;
    document.getElementById('bio').textContent = portfolioData.bio;
    document.getElementById('github-link').href = portfolioData.github;
    document.getElementById('linkedin-link').href = portfolioData.linkedin;
}

// Función para crear las tarjetas de proyectos
function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    const projectsLoading = document.getElementById('projects-loading');
    
    // Simulamos carga
    setTimeout(() => {
        projectsLoading.classList.add('hidden');
        projectsContainer.classList.remove('hidden');
        
        portfolioData.projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-img">
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.demo}" target="_blank" class="project-btn">Demo</a>
                        <a href="${project.code}" target="_blank" class="project-btn">Código</a>
                    </div>
                </div>
            `;
            
            projectsContainer.appendChild(projectCard);
        });
    }, 1500); // Simulamos tiempo de carga
}

// Modo oscuro/claro
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Verificar si hay una preferencia guardada
    const darkMode = localStorage.getItem('darkMode') === 'true';
    
    // Aplicar el tema inicial
    if (darkMode) {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        themeToggle.textContent = isDarkMode ? '☀️' : '🌓';
    });
}

// Manejar el formulario de contacto
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        
        // Aquí normalmente enviarías los datos a un servidor
        // Por ahora simulamos con un alert
        alert(`¡Gracias ${name}! Tu mensaje ha sido enviado.\nTe responderemos pronto al correo ${email}.`);
        contactForm.reset();
    });
}

// Actualizar año actual en el footer
function updateCopyrightYear() {
    const yearElement = document.getElementById('current-year');
    yearElement.textContent = new Date().getFullYear();
}

// Inicializar todo cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    loadProfileData();
    loadProjects();
    setupThemeToggle();
    setupContactForm();
    updateCopyrightYear();
});