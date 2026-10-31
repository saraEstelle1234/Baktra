import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Correo electrónico inválido' }, { status: 400 });
    }

    // TODO: Conectar con Mailchimp, Klaviyo o servicio de email marketing
    console.log('[API MOCK] Nueva suscripción al newsletter:', email);

    return NextResponse.json({ success: true, message: 'Suscripción registrada correctamente' });
  } catch (err) {
    return NextResponse.json({ error: 'Error al procesar solicitud' }, { status: 500 });
  }
}
