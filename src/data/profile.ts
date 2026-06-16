export const profile = {
  name: "Bladimir Luna Corrales",
  title: "Desarrollador en Formación",
  subtitle: "Construyendo soluciones reales con Laravel, PHP y Docker",
  description:
    "Autodidacta, curioso y constructor. Mi enfoque está en el backend con Laravel y PHP, la administración de servidores Linux, y la contenerización con Docker. Actualmente exploro áreas como DevOps, inteligencia artificial local y ciberseguridad como siguientes pasos en mi formación.",
  location: "Colombia",
  email: "bladimirlunacorrales@gmail.com",
  social: {
    github: "https://github.com/BladyLuna",
    linkedin: "https://www.linkedin.com/in/bladimir-luna-corrales-4a19a4370",
  },
  skills: [
    {
      category: "Backend",
      level: "comprobado",
      items: [
        { name: "Laravel", level: "construyendo" },
        { name: "PHP", level: "construyendo" },
        { name: "C#", level: "lo-basico" },
        { name: "Java", level: "lo-basico" },
      ],
    },
    {
      category: "Frontend",
      level: "intermedio",
      items: [
        { name: "HTML", level: "construyendo" },
        { name: "CSS", level: "construyendo" },
        { name: "JavaScript", level: "lo-basico" },
      ],
    },
    {
      category: "DevOps",
      level: "explorando",
      items: [
        { name: "Docker", level: "construyendo" },
        { name: "Linux (Arch/Ubuntu)", level: "construyendo" },
        { name: "Virtualización (KVM)", level: "explorando" },
      ],
    },
    {
      category: "Bases de Datos",
      level: "comprobado",
      items: [
        { name: "MySQL", level: "construyendo" },
      ],
    },
    {
      category: "Control de Versiones",
      level: "comprobado",
      items: [
        { name: "Git", level: "construyendo" },
        { name: "GitHub", level: "construyendo" },
      ],
    },
    {
      category: "IA Local",
      level: "explorando",
      items: [
        { name: "Ollama", level: "experimentando" },
        { name: "Modelos LLM locales", level: "experimentando" },
        { name: "OpenCode", level: "experimentando" },
      ],
    },
    {
      category: "Seguridad",
      level: "explorando",
      items: [
        { name: "Seguridad Web", level: "explorando" },
        { name: "Burp Suite", level: "explorando" },
      ],
    },
  ],
  experience: [
    {
      title: "Sistema Hospitalario de Gestión de Turnos",
      role: "Desarrollador Backend",
      period: "Proyecto de Grado",
      description:
        "Sistema web completo para la gestión de turnos médicos en un entorno hospitalario. Desarrollo con Laravel, MySQL y Docker con arquitectura modular y buenas prácticas.",
      highlights: [
        "Gestión de usuarios con roles y permisos",
        "Asignación de personal y disponibilidad médica",
        "Control de turnos y dashboard administrativo",
        "Arquitectura modular con Docker",
      ],
    },
  ],
  projects: [
    {
      title: "Sistema Hospitalario de Gestión de Turnos",
      role: "Desarrollador Backend",
      period: "Proyecto de Grado",
      description:
        "Sistema web para la gestión de turnos médicos. Arquitectura modular con Laravel, MySQL y Docker.",
      tech: ["Laravel", "PHP", "MySQL", "Docker"],
      link: "/projects/hospital-system",
    },
  ],
  roadmap: [
    { year: "2024", label: "Fundaciones", description: "PHP, Laravel, MySQL, Git, Linux" },
    { year: "2025", label: "Infraestructura", description: "Docker, servidores Linux, virtualización" },
    { year: "2026", label: "Expansión", description: "DevOps, CI/CD, IA local, seguridad ofensiva" },
  ],
  growthAreas: [
    {
      area: "DevOps",
      description: "Automatización, CI/CD, orquestación con Docker y Kubernetes",
    },
    {
      area: "Inteligencia Artificial",
      description: "Modelos locales con Ollama, integración de LLMs en aplicaciones web",
    },
    {
      area: "Ciberseguridad",
      description: "Seguridad web, análisis con Burp Suite, buenas prácticas de hardening",
    },
  ],
};
