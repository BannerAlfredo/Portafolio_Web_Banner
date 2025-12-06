"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Download } from "lucide-react"

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { href: "/", label: "Inicio" },
        { href: "/projects", label: "Proyectos" },
        { href: "/services", label: "Servicios" },
        { href: "/history", label: "Mi Historia" },
        { href: "/achievements", label: "Logros" },
        { href: "/contact", label: "Contacto" },
    ]

    const handleDownloadCV = () => {
        const link = document.createElement("a")
        link.href = "/cv.pdf"
        link.download = "Banner_Casanotan_CV.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <nav className="sticky top-0 z-50 glass border-b border-border/30">
            <div className="container-smooth flex items-center justify-between h-20">
                {/* Logo */}
                <Link 
                    href="/" 
                    className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent hover:from-primary/80 hover:to-primary/50 transition-all"
                >
                    BC
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                    {links.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-lg hover:bg-muted/50 transition-all duration-200 relative group"
                        >
                            {label}
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300 rounded-full" />
                        </Link>
                    ))}
                </div>

                {/* Desktop CV Button */}
                <button
                    onClick={handleDownloadCV}
                    className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30 font-medium text-sm"
                >
                    <Download size={16} />
                    <span>CV</span>
                </button>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2.5 hover:bg-muted/50 rounded-lg transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-border/30 bg-card/95 backdrop-blur-xl">
                    <div className="container-smooth py-6 flex flex-col gap-2">
                        {links.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                        <button
                            onClick={() => {
                                handleDownloadCV()
                                setIsOpen(false)
                            }}
                            className="mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium"
                        >
                            <Download size={18} />
                            <span>Descargar CV</span>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}
