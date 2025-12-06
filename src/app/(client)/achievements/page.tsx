"use client"

import { useState } from "react"
import { Navigation } from "@/components/home/Navigation"
import { Footer } from "@/components/home/Footer"
import { Award, Briefcase as Certificate } from "lucide-react"

const ACHIEVEMENTS = {
    diplomas: [
        {
            id: 1,
            title: "Licenciatura en Computación e Informática",
            institution: "Universidad Nacional de Trujillo",
            year: "2023",
            image: "/diploma-placeholder-1.jpg",
            description: "Carrera académica enfocada en desarrollo de software y sistemas informáticos.",
        },
        {
            id: 2,
            title: "Diploma en Diseño Gráfico",
            institution: "Instituto de Diseño Creativo",
            year: "2022",
            image: "/diploma-placeholder-2.jpg",
            description: "Formación especializada en diseño digital, identidad corporativa y comunicación visual.",
        },
        {
            id: 3,
            title: "Full Stack Web Development",
            institution: "Plataforma Online de Tecnología",
            year: "2021",
            image: "/diploma-placeholder-3.jpg",
            description: "Certificación en desarrollo full-stack con React, Node.js y bases de datos.",
        },
    ],
    constancias: [
        {
            id: 1,
            title: "Google UX Design Certificate",
            organization: "Google",
            year: "2023",
            image: "/certificate-placeholder-1.jpg",
            description: "Certificado en diseño UX por Google, enfocado en investigación y prototipado.",
        },
        {
            id: 2,
            title: "AWS Certified Cloud Practitioner",
            organization: "Amazon Web Services",
            year: "2023",
            image: "/certificate-placeholder-2.jpg",
            description: "Certificación en servicios en la nube y arquitectura AWS.",
        },
        {
            id: 3,
            title: "Advanced JavaScript",
            organization: "Codecademy",
            year: "2022",
            image: "/certificate-placeholder-3.jpg",
            description: "Certificado en JavaScript avanzado y programación orientada a objetos.",
        },
    ],
}

export default function LogrosPage() {
    const [activeTab, setActiveTab] = useState<"diplomas" | "constancias">("diplomas")

    return (
        <>
            <Navigation />
            <main>
                {/* Header */}
                <section className="section-padding bg-gradient-to-b from-background via-muted/10 to-background">
                    <div className="container-smooth text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
                            Logros y Certificaciones
                        </h1>
                        <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
                            Mis credenciales académicas y certificaciones profesionales
                        </p>
                    </div>
                </section>

                {/* Tabs */}
                <section className="section-padding bg-gradient-to-b from-background to-muted/5">
                    <div className="container-smooth">
                        {/* Tab Buttons */}
                        <div className="flex gap-2 mb-12 border-b border-border/30 pb-2">
                            <button
                                onClick={() => setActiveTab("diplomas")}
                                className={`px-6 py-3 font-semibold border-b-2 transition-all rounded-t-lg ${
                                    activeTab === "diplomas"
                                        ? "border-primary text-primary bg-primary/5"
                                        : "border-transparent text-foreground/60 hover:text-foreground hover:bg-muted/30"
                                }`}
                            >
                                <div className="flex items-center gap-2">
                                    <Award size={20} />
                                    Diplomas
                                </div>
                            </button>
                            <button
                                onClick={() => setActiveTab("constancias")}
                                className={`px-6 py-3 font-semibold border-b-2 transition-all rounded-t-lg ${
                                    activeTab === "constancias"
                                        ? "border-primary text-primary bg-primary/5"
                                        : "border-transparent text-foreground/60 hover:text-foreground hover:bg-muted/30"
                                }`}
                            >
                                <div className="flex items-center gap-2">
                                    <Certificate size={20} />
                                    Certificaciones
                                </div>
                            </button>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {(activeTab === "diplomas" ? ACHIEVEMENTS.diplomas : ACHIEVEMENTS.constancias).map(
                                (achievement: any) => (
                                    <div
                                        key={achievement.id}
                                        className="group card-soft overflow-hidden h-full flex flex-col hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                                    >
                                        {/* Image */}
                                        <div className="w-full h-56 bg-gradient-to-br from-primary/20 via-primary/10 to-muted/20 flex items-center justify-center relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="text-center text-foreground/40 z-10">
                                                <div className="text-sm font-medium">
                                                    Imagen de {activeTab === "diplomas" ? "Diploma" : "Certificación"}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col grow">
                                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                                {achievement.title}
                                            </h3>

                                            <p className="text-sm text-primary font-semibold mb-2">
                                                {activeTab === "diplomas" ? achievement?.institution : achievement?.organization}
                                            </p>

                                            <p className="text-xs text-foreground/60 mb-4 px-2 py-1 bg-muted/50 rounded-lg w-fit">
                                                {achievement.year}
                                            </p>

                                            <p className="text-foreground/70 text-sm leading-relaxed grow mb-4">
                                                {achievement.description}
                                            </p>

                                            <button className="mt-auto inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group-hover:gap-2">
                                                Ver Credencial
                                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                                            </button>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
