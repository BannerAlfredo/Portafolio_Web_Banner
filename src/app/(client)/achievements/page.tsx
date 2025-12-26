"use client"

import { useState } from "react"
import { Navigation } from "@/components/home/Navigation"
import { Footer } from "@/components/home/Footer"
import { Award, Briefcase as Certificate, X } from "lucide-react"
import Image from "next/image"

const ACHIEVEMENTS = {
    diplomas: [
        {
            id: 1,
            title: "Los que saben mas - XXXVI Aniversario",
            institution: "I.E. San Francisco de Asís - Tantarica Catán",
            year: "2017",
            image: "/diplomas/diploma-2017.jpg",
            description: "Premio a la excelencia académica en el XXXVI Aniversario de la Institución Educativa San Francisco de Asís - Tantarica Catán.",
        },
        {
            id: 2,
            title: "Diploma de Honor al Merito Academico",
            institution: "I.E. San Francisco de Asís - Tantarica Catán",
            year: "2018",
            image: "/diplomas/diploma-2018.jpg",
            description: "Premio a la excelencia académica en la Institución Educativa San Francisco de Asís - Tantarica Catán.",
        },
        {
            id: 3,
            title: "Diploma de Honor al Merito Academico",
            institution: "I.E. San Francisco de Asís - Tantarica Catán",
            year: "2019",
            image: "/diplomas/diploma-2019.jpg",
            description: "Premio a la excelencia académica en la Institución Educativa San Francisco de Asís - Tantarica Catán.",
        },
    ],
    constancias: [
        {
            id: 1,
            title: "Certificado de participación Feria Tecnología 2023 - II",
            organization: "CIBERTEC",
            year: "2023",
            image: "/certifications/certification-cibertec.jpg",
            description: "Certificado de participación en la Feria Tecnología 2023 - II organizada por CIBERTEC.",
        }
    ],
}

export default function LogrosPage() {
    const [activeTab, setActiveTab] = useState<"diplomas" | "constancias">("diplomas")
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <>
            <Navigation />
            <main>
                <section className="section-padding bg-linear-to-br from-background via-muted/10 to-background">
                    <div className="container-smooth text-center max-w-3xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
                            Logros y Certificaciones
                        </h1>
                        <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                            Mis credenciales académicas y certificaciones profesionales
                        </p>
                    </div>
                </section>

                <section className="pt-10 pb-20 bg-linear-to-br from-background to-muted/5">
                    <div className="container-smooth">
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

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {(activeTab === "diplomas" ? ACHIEVEMENTS.diplomas : ACHIEVEMENTS.constancias).map(
                                (achievement: any) => (
                                    <div
                                        key={achievement.id}
                                        className="group card-soft overflow-hidden h-full flex flex-col hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="w-full h-56 bg-linear-to-br from-primary/20 via-primary/10 to-muted/20 flex items-center justify-center relative overflow-hidden">
                                            <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                                            <Image 
                                                src={achievement.image} 
                                                alt={achievement.title} 
                                                fill
                                                className="object-cover z-10"
                                            />
                                        </div>

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

                                            <button 
                                                onClick={() => setSelectedImage(achievement.image)}
                                                className="mt-auto inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group-hover:gap-2"
                                            >
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

            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div 
                        className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 z-10 bg-background/90 hover:bg-background text-foreground rounded-full p-2 shadow-lg transition-colors"
                        >
                            <X size={24} />
                        </button>
                        <div className="relative w-full h-full">
                            <Image
                                src={selectedImage}
                                alt="Credencial completa"
                                fill
                                className="object-contain"
                                sizes="90vw"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
