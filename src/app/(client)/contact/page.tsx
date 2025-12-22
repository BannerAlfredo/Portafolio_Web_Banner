"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/home/Navigation"
import { Footer } from "@/components/home/Footer"
import { Github, Linkedin, Facebook, MessageCircle, Mail, MapPin } from "lucide-react"

export default function ContactoPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        setSuccess(false)

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error("Error al enviar el mensaje")
            }

            setSuccess(true)
            setFormData({ name: "", email: "", message: "" })
            setTimeout(() => setSuccess(false), 5000)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Ocurrió un error")
        } finally {
            setLoading(false)
        }
    }

    const socialLinks = [
        { icon: Github, href: "https://github.com/BannerAlfredo", label: "GitHub", text: "@BannerAlfredo" },
        { icon: Linkedin, href: "#", label: "LinkedIn", text: "Banner Casanotan" },
        { icon: Facebook, href: "https://www.facebook.com/banner.rodriguez.39", label: "Facebook", text: "Banner Alfredo" },
        { icon: MessageCircle, href: "https://wa.me/51926507778?text=Hola%20Banner", label: "WhatsApp", text: "+51 926 507 778" },
    ]

    return (
        <>
            <Navigation />
            <main>
                <section className="section-padding bg-linear-to-br from-background via-muted/10 to-background">
                    <div className="container-smooth text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
                            Contacto
                        </h1>
                        <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
                            Estoy disponible para nuevos proyectos y colaboraciones. ¡Cuéntame sobre tu idea!
                        </p>
                    </div>
                </section>

                <section className="section-padding bg-linear-to-br from-background to-muted/5">
                    <div className="container-smooth">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                            <div className="space-y-10">
                                <div>
                                    <h2 className="text-3xl font-bold text-foreground mb-8 tracking-tight">
                                        Información de Contacto
                                    </h2>

                                    <div className="space-y-6">
                                        <div className="flex gap-4 group">
                                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all duration-200">
                                                <Mail className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-1.5">Email</h3>
                                                <a
                                                    href="mailto:rodriguezbanner89@gmail.com"
                                                    className="text-primary hover:text-primary/80 transition-colors text-sm"
                                                >
                                                    rodriguezbanner89@gmail.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 group">
                                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all duration-200">
                                                <MapPin className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-1.5">Ubicación</h3>
                                                <p className="text-foreground/70 text-sm">Trujillo, Perú</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-6">Sígueme en mis redes</h3>
                                    <div className="space-y-3">
                                        {socialLinks.map(({ icon: Icon, href, label, text }) => (
                                            <a
                                                key={label}
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center gap-4 p-4 card-soft hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 hover:-translate-y-0.5"
                                            >
                                                <Icon className="text-primary group-hover:scale-110 transition-transform" size={24} />
                                                <div>
                                                    <p className="font-semibold text-foreground">{label}</p>
                                                    <p className="text-sm text-foreground/60">{text}</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="card-soft p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-foreground mb-8 tracking-tight">Envíame un Mensaje</h2>

                                {success && (
                                    <div className="p-4 bg-primary/10 border border-primary/30 rounded-xl mb-6">
                                        <p className="text-primary font-semibold text-sm">
                                            ¡Mensaje enviado exitosamente! Pronto te responderé.
                                        </p>
                                    </div>
                                )}

                                {error && (
                                    <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-xl mb-6">
                                        <p className="text-destructive font-semibold text-sm">{error}</p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2.5">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Tu nombre"
                                            required
                                            className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2.5">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="tu@email.com"
                                            required
                                            className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2.5">
                                            Mensaje
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Cuéntame sobre tu proyecto..."
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02]"
                                    >
                                        {loading ? "Enviando..." : "Enviar Mensaje"}
                                    </button>
                                </form>

                                <p className="text-xs text-foreground/60 mt-6 text-center">
                                    Respeto tu privacidad. Solo usaré tu email para responderte.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
