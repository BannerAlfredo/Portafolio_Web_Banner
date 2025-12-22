import nodemailer from "nodemailer"
import { type NextRequest, NextResponse } from "next/server"

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NEXT_PUBLIC_MAIL_USER,
        pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
    },
})

export async function POST(request: NextRequest) {
    try {
        const { name, email, message, phone } = await request.json()

        if (!name || !email || !message || !phone) {
            return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: "Email inválido" }, { status: 400 })
        }

        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_MAIL_USER,
            to: process.env.NEXT_PUBLIC_MAIL_USER,
            subject: `Nuevo mensaje de ${name} - Portafolio`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d3748; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">Nuevo Mensaje de Contacto</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>
          </div>
          
          <div style="background-color: #f7fafc; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0;">
            <h3 style="color: #2d3748; margin-top: 0;">Mensaje:</h3>
            <p style="color: #4a5568; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
          
          <p style="color: #718096; font-size: 12px; margin-top: 30px;">
            Este email fue enviado desde tu portafolio de Banner Casanotan.
          </p>
        </div>
      `,
        })

        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_MAIL_USER,
            to: email,
            subject: "Recibimos tu mensaje - Portafolio Banner Casanotan",
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d3748;">¡Gracias por contactarme!</h2>
          
          <p style="color: #4a5568; line-height: 1.6;">
            Hola ${escapeHtml(name)},
          </p>
          
          <p style="color: #4a5568; line-height: 1.6;">
            He recibido tu mensaje y lo revisaré pronto. Te responderé en las próximas 24 horas.
          </p>
          
          <div style="background-color: #f7fafc; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0;">
            <p style="color: #718096; font-size: 13px; margin: 0;">
              <strong>Tu mensaje:</strong><br/>
              ${escapeHtml(message).substring(0, 200)}${escapeHtml(message).length > 200 ? "..." : ""}
            </p>
          </div>
          
          <p style="color: #718096; font-size: 12px; margin-top: 30px;">
            Banner Casanotan - Desarrollador Web Creativo
          </p>
        </div>
      `,
        })

        return NextResponse.json({ success: true, message: "Email enviado correctamente" }, { status: 200 })
    } catch (error) {
        console.error("Error enviando email:", error)
        return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 })
    }
}

function escapeHtml(text: string): string {
    const map: { [key: string]: string } = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    }
    return text.replace(/[&<>"']/g, (char) => map[char])
}
