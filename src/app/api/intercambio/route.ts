import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, currentModule, requestedModule, reason } = body;

    if (!name || !email || !currentModule || !requestedModule) {
      return NextResponse.json({ error: 'Faltan datos para procesar el intercambio' }, { status: 400 });
    }

    // TODO: Registrar en sistema de inventario y logística inversa
    console.log('[API MOCK] Nueva solicitud de intercambio de módulos:', {
      name,
      email,
      currentModule,
      requestedModule,
      reason,
    });

    return NextResponse.json({ success: true, message: 'Solicitud de intercambio procesada' });
  } catch (err) {
    return NextResponse.json({ error: 'Error al procesar solicitud' }, { status: 500 });
  }
}
