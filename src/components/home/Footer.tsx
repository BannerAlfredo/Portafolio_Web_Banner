"use client"

import Link from "next/link"
import { Github, Linkedin, Facebook, MessageCircle } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: Github, href: "https://github.com/BannerAlfredo", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn", text: "Banner Casanotan" },
        { icon: Facebook, href: "https://www.facebook.com/banner.rodriguez.39", label: "Facebook" },
        { icon: MessageCircle, href: "https://wa.me/51926507778?text=Hola%20Banner", label: "WhatsApp" },
    ]


    const footerLinks = [
        { href: "/projects", label: "Proyectos" },
        { href: "/services", label: "Servicios" },
        { href: "/contact", label: "Contacto" },
    ]

    return (
        <footer className="border-t border-border/30 bg-linear-to-br from-background to-muted/10">
            <div className="container-smooth py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold bg-linear-to-br from-primary to-primary/70 bg-clip-text text-transparent mb-4">
                            BC
                        </h3>
                        <p className="text-foreground/70 text-sm leading-relaxed max-w-xs">
                            Desarrollador web creativo especializado en crear experiencias digitales funcionales e innovadoras.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">
                            Enlaces
                        </h3>
                        <div className="flex flex-col gap-3">
                            {footerLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="text-foreground/70 hover:text-primary transition-colors text-sm w-fit group"
                                >
                                    {label}
                                    <span className="block w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 mt-1" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">
                            Sígueme
                        </h3>
                        <div className="flex gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-xl bg-muted/50 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200 hover:scale-110 border border-border/50 hover:border-primary/50"
                                    aria-label={label}
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-border/30 pt-8">
                    <p className="text-center text-foreground/60 text-sm">
                        © {currentYear} Banner Casanotan. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
