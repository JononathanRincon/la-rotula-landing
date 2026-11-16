// Utilidades compartidas: API de Supabase, fechas de Bogotá, WhatsApp y medición.
const URL_API = import.meta.env.PUBLIC_SUPABASE_URL as string;
const KEY = import.meta.env.PUBLIC_SUPABASE_KEY as string;
export const WHATSAPP = String(import.meta.env.PUBLIC_WHATSAPP || '570000000000').replace(/\D/g, '');

const ERRORES: Record<string, string> = {
  slot_taken: 'Alguien acaba de apartar esa hora. Elige otra, por favor.',
  invalid_plate: 'Escribe la placa completa, por ejemplo KXL 482.',
  invalid_phone: 'Escribe un celular de 10 dígitos que empiece por 3, por ejemplo 300 123 4567.',
  invalid_day: 'Ese día ya no está disponible. Elige otro.',
  invalid_slot: 'Esa hora no está disponible ese día. Elige otra.',
  invalid_service: 'Elige un servicio de la lista.',
  invalid_date: 'Revisa la fecha de vencimiento.',
  invalid_kind: 'Elige qué quieres que te recordemos.',
  too_many: 'Ese celular ya tiene varias solicitudes activas. Escríbenos por WhatsApp y lo resolvemos.',
  invalid_key: 'La clave del panel no es correcta.',
};

export class ApiError extends Error {
  code: string;
  constructor(code: string, msg: string) { super(msg); this.code = code; }
}

export async function rpc<T = unknown>(fn: string, args: Record<string, unknown>): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${URL_API}/rest/v1/rpc/${fn}`, {
      method: 'POST',
      headers: { apikey: KEY, 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(args),
    });
  } catch {
    throw new ApiError('network', 'No hay conexión. Revisa tu internet e inténtalo de nuevo.');
  }
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) {
    const code = String(data?.message || 'error');
    throw new ApiError(code, ERRORES[code] || 'No pudimos guardar. Inténtalo de nuevo o escríbenos por WhatsApp.');
  }
  return data as T;
}

// Fechas en hora de Bogotá
export const DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
export const DCORTO = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
export const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
export const MCORTO = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

/** Fecha de hoy en Bogotá como 'YYYY-MM-DD'. */
export function hoyBogota(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Bogota', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
}
/** Convierte 'YYYY-MM-DD' en Date al mediodía UTC (evita saltos de zona). */
export function iso2date(iso: string): Date { return new Date(iso + 'T12:00:00Z'); }
export function date2iso(d: Date): string { return d.toISOString().slice(0, 10); }
export function sumarDias(iso: string, n: number): string { const d = iso2date(iso); d.setUTCDate(d.getUTCDate() + n); return date2iso(d); }
export function fechaLarga(iso: string): string { const d = iso2date(iso); return `${DIAS[d.getUTCDay()]} ${d.getUTCDate()} de ${MESES[d.getUTCMonth()]}`; }
export function hora12(hhmm: string): string {
  const [h, m] = hhmm.split(':').map(Number);
  return `${h > 12 ? h - 12 : h}:${String(m).padStart(2, '0')} ${h < 12 ? 'a.m.' : 'p.m.'}`;
}

export const placaLimpia = (v: string) => v.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
export const placaBonita = (p: string) => (p.length > 3 ? p.slice(0, 3) + ' ' + p.slice(3) : p);
export const celularLimpio = (v: string) => v.replace(/\D/g, '');
export const placaValida = (p: string) => /^[A-Z]{3}[0-9]{2}[0-9A-Z]$/.test(p);
export const celularValido = (c: string) => /^3\d{9}$/.test(c);
export const pesos = (n: number) => '$' + (Math.round(n / 5000) * 5000).toLocaleString('es-CO');

export function waLink(texto: string): string { return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`; }

/** Evento de conversión para GA4 / Meta Pixel / dataLayer. */
export function track(cta: string, servicio = '') {
  try {
    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: 'whatsapp_click', cta, servicio });
    if (typeof w.gtag === 'function') w.gtag('event', 'conversion_click', { cta, servicio });
    if (typeof w.fbq === 'function') w.fbq('track', cta.startsWith('agendador') ? 'Schedule' : 'Contact', { content_name: servicio, content_category: cta });
  } catch { /* sin medición */ }
}

/** Activa la selección única de un grupo de chips con aria-pressed. */
export function chipGroup(root: Element, onPick: (value: string, btn: HTMLButtonElement) => void) {
  root.addEventListener('click', (e) => {
    const btn = (e.target as Element).closest('button[data-value]') as HTMLButtonElement | null;
    if (!btn || !root.contains(btn)) return;
    root.querySelectorAll('button[data-value]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    onPick(btn.dataset.value!, btn);
  });
}
