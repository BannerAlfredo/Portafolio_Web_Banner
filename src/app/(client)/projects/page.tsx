"use client"

import { useState } from "react"
import { Navigation } from "@/components/home/Navigation"
import { Footer } from "@/components/home/Footer"
import { ProjectModal } from "@/components/projects/project-modal"

interface Project {
    id: number
    title: string
    description: string
    image: string
    category: string
    fullDescription: string
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
}

const PROJECTS: Project[] = [
    {
        id: 1,
        title: "E-Commerce Moderno",
        description: "Plataforma de tienda online con carrito dinámico",
        image: "/ecommerce-concept.png",
        category: "E-Commerce",
        fullDescription:
            "Plataforma de e-commerce completamente funcional desarrollada con Next.js y React. Incluye sistema de carrito, integración de pagos, gestión de productos y dashboard administrativo.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        id: 2,
        title: "Aplicación de Tareas",
        description: "Gestor de proyectos y tareas colaborativo",
        image: "/tasks-list.png",
        category: "Productividad",
        fullDescription:
            "Aplicación web de gestión de tareas con colaboración en tiempo real. Los usuarios pueden crear proyectos, asignar tareas y monitorear el progreso.",
        technologies: ["React", "Firebase", "Tailwind CSS", "Zustand"],
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        id: 3,
        title: "Blog Profesional",
        description: "Plataforma de blogging con CMS integrado",
        image: "/blog-concept.png",
        category: "Contenido",
        fullDescription:
            "Sistema de blogging completo con CMS headless, soporte para Markdown, categorías, etiquetas y comentarios. Optimizado para SEO.",
        technologies: ["Next.js", "Markdown", "PostgreSQL", "Prisma"],
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        id: 4,
        title: "Dashboard Analítico",
        description: "Panel de control con gráficos y métricas",
        image: "/general-data-dashboard.png",
        category: "Análisis",
        fullDescription:
            "Dashboard interactivo con gráficos en tiempo real, métricas personalizables y exportación de datos. Diseño responsivo y accesible.",
        technologies: ["React", "Recharts", "Tailwind CSS", "API REST"],
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        id: 5,
        title: "App de Red Social",
        description: "Red social minimalista con feed y mensajes",
        image: "/interconnected-social-network.png",
        category: "Social",
        fullDescription:
            "Red social enfocada en la privacidad con feed personalizado, sistema de mensajería privada y perfiles de usuario completos.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        id: 6,
        title: "Portafolio Interactivo",
        description: "Portafolio personal con animaciones avanzadas",
        image: "/creative-portfolio-layout.png",
        category: "Portafolio",
        fullDescription:
            "Portafolio personal con animaciones suaves, transiciones elegantes y diseño responsivo. Incluye sección de proyectos, blog y contacto.",
        technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
        githubUrl: "#",
        liveUrl: "#",
    },
]

export default function ProyectosPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    return (
        <>
            <Navigation />
            <main>
                <section className="section-padding bg-linear-to-br from-background via-muted/10 to-background">
                    <div className="container-smooth text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
                            Mis Proyectos
                        </h1>
                        <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
                            Explora una selección de mis trabajos más destacados donde combino diseño y desarrollo.
                        </p>
                    </div>
                </section>

                <section className="section-padding bg-linear-to-br from-background to-muted/5">
                    <div className="container-smooth">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {PROJECTS.map((project) => (
                                <div
                                    key={project.id}
                                    onClick={() => setSelectedProject(project)}
                                    className="group cursor-pointer card-soft overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="w-full h-56 bg-linear-to-br from-primary/20 via-primary/10 to-muted/20 flex items-center justify-center overflow-hidden relative">
                                        <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="text-center text-foreground/40 z-10">
                                            <div className="text-sm font-medium">Imagen del Proyecto</div>
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-4">
                                        <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                                            {project.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-foreground/70 text-sm line-clamp-2 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.technologies.slice(0, 3).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="text-xs px-2.5 py-1 bg-muted/50 text-foreground/70 rounded-lg border border-border/50"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="text-xs px-2.5 py-1 bg-muted/50 text-foreground/70 rounded-lg border border-border/50">
                                                    +{project.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        <button className="w-full py-2.5 px-4 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-medium text-sm mt-4 group-hover:shadow-md group-hover:shadow-primary/20">
                                            Ver Detalles
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

            <Footer />
        </>
    )
}
