"use client"
import { X, Github, ExternalLink } from "lucide-react"

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

interface ProjectModalProps {
    project: Project | null
    onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
    if (!project) return null

    return (
        <>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/50 z-40 cursor-pointer" onClick={onClose} aria-hidden="true" />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-border/50 shadow-2xl backdrop-blur-xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-start justify-between p-6 lg:p-8 border-b border-border/30 sticky top-0 bg-card/95 backdrop-blur-sm z-10">
                        <div>
                            <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20 mb-3">
                                {project.category}
                            </span>
                            <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">{project.title}</h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-muted/50 rounded-xl transition-colors"
                            aria-label="Cerrar modal"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-8 space-y-8">
                        {/* Image */}
                        <div className="w-full h-64 bg-gradient-to-br from-primary/20 via-primary/10 to-muted/20 rounded-xl flex items-center justify-center border border-border/50">
                            <div className="text-center text-foreground/40">
                                <div className="text-sm font-medium">Imagen del Proyecto</div>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="font-semibold text-foreground mb-3 text-lg">Descripción</h3>
                            <p className="text-foreground/80 leading-relaxed text-base">{project.fullDescription}</p>
                        </div>

                        {/* Technologies */}
                        <div>
                            <h3 className="font-semibold text-foreground mb-4 text-lg">Tecnologías Utilizadas</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 bg-muted/50 text-foreground/80 rounded-lg text-xs font-medium border border-border/50"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-200 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02]"
                                >
                                    <Github size={18} /> GitHub
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-xl hover:bg-primary/10 transition-all duration-200 font-semibold hover:scale-[1.02]"
                                >
                                    <ExternalLink size={18} /> Ver en Vivo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
