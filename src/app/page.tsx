"use client"

import { Navigation } from "@/components/home/Navigation"
import { Footer } from "@/components/home/Footer"
import Link from "next/link"
import { ArrowRight, Download, Sparkles } from "lucide-react"
import { PORTFOLIO_CONTENT } from "@/lib/content/content"

export default function Home() {
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv.pdf"
    link.download = "Banner_Casanotan_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <Navigation />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-5rem)] flex items-center section-padding bg-gradient-to-b from-background via-background to-muted/20">
          <div className="container-smooth w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Content */}
              <div className="space-y-8 lg:pr-8">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-primary tracking-wide">Disponible para proyectos</span>
                </div>

                <div className="space-y-6">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                    <span className="block">{PORTFOLIO_CONTENT.name}</span>
                  </h1>

                  <p className="text-xl sm:text-2xl text-foreground/90 leading-relaxed font-light max-w-2xl">
                    {PORTFOLIO_CONTENT.shortBio}
                  </p>

                  <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-2xl">
                    {PORTFOLIO_CONTENT.longBio}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link
                    href="/contacto"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02]"
                  >
                    Empecemos
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    onClick={handleDownloadCV}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-border hover:border-primary/50 hover:bg-muted/50 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02]"
                  >
                    <Download size={18} />
                    Descargar CV
                  </button>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl blur-3xl" />
                <div className="relative w-full h-full max-w-lg bg-gradient-to-br from-card via-card to-muted/30 rounded-3xl border border-border/50 flex items-center justify-center shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="text-center text-foreground/50 z-10">
                    <Sparkles className="w-16 h-16 mx-auto mb-4 text-primary/30" />
                    <div className="text-sm font-medium">Imagen del Desarrollador</div>
                    <div className="text-xs mt-2 text-foreground/40">(Reemplazar)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="section-padding bg-gradient-to-b from-muted/20 to-background">
          <div className="container-smooth">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
                Tecnologías
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Herramientas y tecnologías con las que trabajo
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6">
              {PORTFOLIO_CONTENT.technologies.map((tech) => (
                <div
                  key={tech}
                  className="group card-soft py-8 px-6 text-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <p className="font-semibold text-foreground/90 group-hover:text-primary transition-colors">
                    {tech}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA to Projects */}
        <section className="section-padding bg-gradient-to-b from-background via-muted/10 to-background">
          <div className="container-smooth text-center max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Mira mis proyectos
            </h2>
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
              Explora mis trabajos recientes y descubre cómo combino diseño y desarrollo para crear soluciones digitales
              innovadoras.
            </p>
            <Link
              href="/proyectos"
              className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02]"
            >
              Ver Proyectos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
