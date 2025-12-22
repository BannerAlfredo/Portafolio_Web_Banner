"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ContactButton() {
    return (
        <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors hover:gap-3"
        >
            Empecemos <ArrowRight size={18} />
        </Link>
    )
}
