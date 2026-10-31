import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
    }

    // TODO: Enviar correo mediante Resend, SendGrid o webhook de CRM (Bigin / HubSpot)
    console.log('[API MOCK] Nuevo contacto recibido:', { name, email, subject, message });

    return NextResponse.json({ success: true, message: 'Mensaje recibido correctamente' });
  } catch (err) {
    return NextResponse.json({ error: 'Error al procesar solicitud' }, { status: 500 });
  }
}
