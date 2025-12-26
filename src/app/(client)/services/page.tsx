"use client"

import { Navigation } from "@/components/home/Navigation"
import { Footer } from "@/components/home/Footer"
import {   Code, Megaphone, Globe, Settings, Palette, Zap, Wrench, Search, BookOpen } from "lucide-react"

const SERVICES = [
    {
        icon: Code,
        title: "Desarrollo de software a medida",
        description:
            "Creamos soluciones tecnológicas personalizadas según las necesidades de cada cliente. Desarrollamos sistemas internos, aplicaciones web y móviles, automatización de procesos y herramientas empresariales que optimizan la gestión y productividad empresarial.",
    },
    {
        icon: Megaphone,
        title: "Estrategia y Publicidad Digital",
        description:
            "Diseñamos y ejecutamos estrategias digitales efectivas en redes sociales, Google Ads y otros canales digitales, orientadas a mejorar la visibilidad de marca, atraer clientes potenciales y aumentar las conversiones.",
    },
    {
        icon: Globe,
        title: "Diseño y Desarrollo Web",
        description:
            "Desarrollamos sitios web informativos, corporativos y tiendas virtuales (e-commerce), con un enfoque moderno, escalable y optimizado para todos los dispositivos. Creamos experiencias digitales que convierten visitantes en clientes.",
    },
    {
        icon: Settings,
        title: "Sistemas de Gestión Empresarial",
        description:
            "Desarrollamos sistemas de gestión personalizados como inventarios, ventas, reservas, clientes y reportes, adaptados a las necesidades de cada negocio y con acceso seguro para administradores y usuarios.",
    },
    {
        icon: Palette,
        title: "Diseño Gráfico y Branding",
        description:
            "Creamos identidad visual profesional: logotipos, manual de marca, piezas publicitarias, contenido para redes sociales y material corporativo, alineados a la imagen y objetivos de tu negocio.",
    },
    {
        icon: Zap,
        title: "Automatización de Procesos",
        description:
            "Optimizamos procesos repetitivos mediante herramientas digitales y sistemas automatizados, reduciendo tiempos operativos y errores humanos, y mejorando la eficiencia empresarial.",
    },
    {
        icon: Wrench,
        title: "Mantenimiento y Soporte Web",
        description:
            "Brindamos soporte técnico, mantenimiento y actualizaciones para sitios web y sistemas, garantizando seguridad, rendimiento y disponibilidad continua.",
    },
    {
        icon: Search,
        title: "Optimización y SEO",
        description:
            "Optimizamos sitios web para motores de búsqueda (SEO), mejorando su posicionamiento, velocidad de carga y experiencia de usuario para atraer tráfico orgánico de calidad.",
    },
]

export default function ServiciosPage() {
    return (
        <>
            <Navigation />
            <main>
                <section className="section-padding bg-linear-to-br from-background via-muted/10 to-background">
                    <div className="container-smooth text-center max-w-3xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
                            ¿Qué ofrezco?
                        </h1>
                        <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                            Brindamos soluciones digitales integrales para impulsar tu negocio. Desde el desarrollo de software y
                            diseño web profesional, hasta estrategias de marketing y formación personalizada. Nuestro objetivo es
                            ayudarte a crecer con tecnología moderna, creatividad y resultados medibles.
                        </p>
                    </div>
                </section>

                <section className="pt-10 pb-20 bg-linear-to-br from-background to-muted/5">
                    <div className="container-smooth">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {SERVICES.map((service, index) => {
                                const Icon = service.icon
                                return (
                                    <div
                                        key={index}
                                        className="group card-soft p-8 lg:p-10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="w-15 h-15 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 border border-primary/20 group-hover:border-primary">
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
