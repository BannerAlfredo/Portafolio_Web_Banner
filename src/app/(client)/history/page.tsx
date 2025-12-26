"use client"

import { Navigation } from "@/components/home/Navigation"
import { Footer } from "@/components/home/Footer"

const TIMELINE_ITEMS = [
    {
        year: "Enero 2025 - Actualidad",
        title: "Programador - Proyectos Personales",
        date: "Trujillo",
        description:
            "Desde enero de 2025 desarrollo proyectos personales como Programador, aplicando tecnologías de desarrollo web y software para crear sistemas funcionales, portafolios web, aplicaciones y soluciones digitales, consolidando mi perfil como desarrollador en formación.",
    },
    {
        year: "Enero 2024 - Actualidad",
        title: "Diseñador Gráfico",
        date: "Modalidad: Estudio y Trabajo",
        description:
            "A partir de enero de 2024 comencé a trabajar como Diseñador Gráfico, aplicando mis conocimientos en proyectos reales mientras continúo con mis estudios. He participado en el diseño de piezas visuales, contenido digital e identidad gráfica, fortaleciendo mi experiencia profesional.",
    },
    {
        year: "Agosto 2023 - Actualidad",
        title: "Computación e Informática",
        date: "Trujillo",
        description:
            "Desde agosto de 2023 estudio la carrera de Computación e Informática, enfocándome en el desarrollo de software, aplicaciones web y bases de datos. Esta formación me ha permitido complementar mis habilidades creativas con conocimientos técnicos orientados a la creación de soluciones digitales funcionales y eficientes.",
    },
    {
        year: "2021 - 2023",
        title: "Estudios en Diseño Gráfico",
        date: "Trujillo",
        description:
            "En el año 2021 inicié mis estudios en Diseño Gráfico, donde desarrollé habilidades creativas y visuales, fortaleciendo mi capacidad para comunicar ideas mediante el diseño. Esta etapa fue clave para despertar mi interés por la creación de interfaces atractivas y experiencias visuales orientadas al entorno digital.",
    },
    {
        year: "2016 - 2020",
        title: "Termino mis estudios secundarios",
        date: "Catán - 05 de diciembre de 2020",
        description:
            "Durante este período culminé mis estudios secundarios. Al finalizar, aún no tenía completamente definido el camino profesional a seguir, pero ya mostraba un fuerte interés por la creatividad y la tecnología, lo que despertó mi motivación por el área digital.",
    },
]

export default function HistoriaPage() {
    return (
        <>
            <Navigation />
            <main>
                <section className="section-padding bg-linear-to-br from-background via-muted/10 to-background">
                    <div className="container-smooth text-center max-w-3xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
                            Mi Historia
                        </h1>
                        <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
                            Un viaje de crecimiento, aprendizaje y transformación digital
                        </p>
                    </div>
                </section>

                <section className="pt-10 pb-20 bg-linear-to-br from-background to-muted/5">
                    <div className="container-smooth max-w-4xl">
                        <div className="space-y-16">
                            {TIMELINE_ITEMS.map((item, index) => (
                                <div key={index} className="relative flex gap-6 md:gap-12">
                                    <div className="flex flex-col items-center">
                                        <div className="w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full mt-2 ring-4 ring-background relative z-10 shadow-lg shadow-primary/30" />
                                        {index !== TIMELINE_ITEMS.length - 1 && (
                                            <div className="w-1 h-40 md:h-48 bg-linear-to-br from-primary/60 via-primary/40 to-primary/20 mt-4 rounded-full" />
                                        )}
                                    </div>

                                    <div className="pb-8 md:pb-12 flex-1">
                                        <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-4">
                                            <span className="text-sm font-bold text-primary">{item.year}</span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 tracking-tight">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-foreground/60 mb-5">{item.date}</p>

                                        <div className="card-soft p-6 md:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                                            <p className="text-foreground/80 leading-relaxed text-base">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="pt-10 pb-20 bg-linear-to-br from-muted/10 via-background to-background">
                    <div className="container-smooth">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                            {[
                                { label: "Años de Experiencia", value: "4+" },
                                { label: "Proyectos Completados", value: "30+" },
                                { label: "Clientes Satisfechos", value: "25+" },
                                { label: "Tecnologías & Herramientas", value: "10+" },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="card-soft text-center py-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="text-4xl md:text-5xl font-bold bg-linear-to-br from-primary to-primary/70 bg-clip-text text-transparent mb-3">
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
