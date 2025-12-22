"use client"

import { Navigation } from "@/components/home/Navigation"
import { Footer } from "@/components/home/Footer"
import { Code, Zap, Palette, Book } from "lucide-react"

const SERVICES = [
    {
        icon: Code,
        title: "Desarrollo de software a medida",
        description:
            "Desarrollamos soluciones personalizadas según tus necesidades: sistemas internos, aplicaciones web y móviles, automatización de procesos y herramientas empresariales.",
    },
    {
        icon: Zap,
        title: "Estrategia y Publicidad Digital",
        description:
            "Diseñamos y ejecutamos campañas efectivas en redes sociales, Google Ads y otros canales digitales para aumentar tu visibilidad, atraer clientes y generar ventas.",
    },
    {
        icon: Palette,
        title: "Diseño y Desarrollo Web",
        description:
            "Informativos, corporativos y e-commerce, con enfoque moderno y escalable. Creamos experiencias digitales que convierten visitantes en clientes.",
    },
    {
        icon: Book,
        title: "Cursos y Capacitaciones",
        description:
            "Capacitaciones en diseño gráfico, fotografía, programación y más. Formación personalizada para equipos y profesionales independientes.",
    },
]

export default function ServiciosPage() {
    return (
        <>
            <Navigation />
            <main>
                <section className="section-padding bg-linear-to-br from-background via-muted/10 to-background">
                    <div className="container-smooth text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
                            ¿Qué ofrezco?
                        </h1>
                        <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
                            Brindamos soluciones digitales integrales para impulsar tu negocio. Desde el desarrollo de software y
                            diseño web profesional, hasta estrategias de marketing y formación personalizada. Nuestro objetivo es
                            ayudarte a crecer con tecnología moderna, creatividad y resultados medibles.
                        </p>
                    </div>
                </section>

                <section className="section-padding bg-linear-to-br from-background to-muted/5">
                    <div className="container-smooth">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {SERVICES.map((service, index) => {
                                const Icon = service.icon
                                return (
                                    <div
                                        key={index}
                                        className="group card-soft p-8 lg:p-10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 border border-primary/20 group-hover:border-primary">
                                            <Icon className="text-primary group-hover:text-primary-foreground transition-colors" size={32} />
                                        </div>

                                        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>

                                        <p className="text-foreground/70 leading-relaxed text-base mb-6">{service.description}</p>

                                        {/* <button className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center gap-2 group-hover:gap-3">
                                            Más información
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </button> */}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                <section className="section-padding bg-linear-to-br from-muted/10 via-background to-background">
                    <div className="container-smooth text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
                            Listo para transformar tu proyecto
                        </h2>
                        <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
                            Contáctame hoy y hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos digitales.
                        </p>
                        <a
                            href="/contact"
                            className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02]"
                        >
                            Iniciar Conversación
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
