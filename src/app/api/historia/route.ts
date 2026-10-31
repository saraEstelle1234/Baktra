import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, handle, destination, text, consent } = body;

    if (!name || !text || !consent) {
      return NextResponse.json({ error: 'Faltan campos obligatorios o consentimiento' }, { status: 400 });
    }

    // TODO: Guardar en base de datos (Supabase / MongoDB) para moderación de contenido
    console.log('[API MOCK] Nueva historia de viajero recibida:', { name, handle, destination, text });

    return NextResponse.json({ success: true, message: 'Historia recibida para moderación' });
  } catch (err) {
    return NextResponse.json({ error: 'Error al procesar solicitud' }, { status: 500 });
  }
}
