import { NextResponse } from "next/server"

export async function GET() {
    const cvPath = "Cv.pdf"

    try {
        const cvUrl = `/api/download-cv?file=${cvPath}`
        return NextResponse.json({ downloadUrl: cvUrl })
    } catch (error) {
        console.error("Error generating CV download:", error)
        return NextResponse.json({ error: "Error al descargar el CV" }, { status: 500 })
    }
}
