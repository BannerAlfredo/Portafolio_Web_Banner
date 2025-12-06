"use client"

import { Navigation } from "@/components/home/Navigation"
import { Footer } from "@/components/home/Footer"

const TIMELINE_ITEMS = [
    {
        year: "2020",
        title: "Termino mis estudios secundarios",
        date: "Catán, 05-12-2020",
        description:
            "Este fue el momento en que culminé mis estudios secundarios. No tenía claro qué camino seguir, pero inicié la carrera de computación e informática al entender que podía aportar soluciones en el mundo web.",
    },
    {
        year: "2021",
        title: "Empiezo a trabajar",
        date: "Trujillo",
        description:
            "Comencé mi carrera profesional como ayudante en una empresa local. Esta experiencia fue fundamental para entender las dinámicas del mundo laboral y desarrollar mis habilidades técnicas.",
    },
    {
        year: "2022",
        title: "Envato Studio - Lead Web Designer",
        date: "Remoto",
        description:
            "Ascendí a la posición de Lead Web Designer en Envato Studio. Aquí lideré proyectos de diseño web, trabajé con clientes internacionales y mejoré mis habilidades en diseño responsivo.",
    },
    {
        year: "2023",
        title: "Especializándome en Frontend",
        date: "Actual",
        description:
            "Actualmente me estoy especializando en desarrollo frontend moderno con React y Next.js. Combino mis habilidades de diseño con programación para crear experiencias digitales excepcionales.",
    },
]

export default function HistoriaPage() {
    return (
        <>
            <Navigation />
            <main>
                {/* Header */}
                <section className="section-padding bg-gradient-to-b from-background via-muted/10 to-background">
                    <div className="container-smooth text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
                            Mi Historia
                        </h1>
                        <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
                            Un viaje de crecimiento, aprendizaje y transformación digital
                        </p>
                    </div>
                </section>

                {/* Timeline */}
                <section className="section-padding bg-gradient-to-b from-background to-muted/5">
                    <div className="container-smooth max-w-4xl">
                        <div className="space-y-16">
                            {TIMELINE_ITEMS.map((item, index) => (
                                <div key={index} className="relative flex gap-6 md:gap-12">
                                    {/* Timeline Line and Dot */}
                                    <div className="flex flex-col items-center">
                                        {/* Dot */}
                                        <div className="w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full mt-2 ring-4 ring-background relative z-10 shadow-lg shadow-primary/30" />
                                        {/* Line */}
                                        {index !== TIMELINE_ITEMS.length - 1 && (
                                            <div className="w-1 h-40 md:h-48 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/20 mt-4 rounded-full" />
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="pb-8 md:pb-12 flex-1">
                                        {/* Year Badge */}
                                        <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-4">
                                            <span className="text-sm font-bold text-primary">{item.year}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 tracking-tight">
                                            {item.title}
                                        </h3>

                                        {/* Date */}
                                        <p className="text-sm text-foreground/60 mb-5">{item.date}</p>

                                        {/* Description */}
                                        <div className="card-soft p-6 md:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                                            <p className="text-foreground/80 leading-relaxed text-base">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Summary Stats */}
                <section className="section-padding bg-gradient-to-b from-muted/10 via-background to-background">
                    <div className="container-smooth">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                            {[
                                { label: "Años de Experiencia", value: "4+" },
                                { label: "Proyectos Completados", value: "30+" },
                                { label: "Clientes Satisfechos", value: "25+" },
                                { label: "Tecnologías", value: "20+" },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="card-soft text-center py-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-3">
                                        {stat.value}
                                    </div>
                                    <p className="text-foreground/70 text-sm font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
