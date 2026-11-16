# La Rótula — landing con agendador

Astro + Tailwind 4 + GSAP/Lenis. Backend en Supabase (funciones `landing_*`).

## Desarrollo
```bash
npm install
cp .env.example .env   # pon tu número de WhatsApp
npm run dev
```

## Variables
- `PUBLIC_SUPABASE_URL`, `PUBLIC_SUPABASE_KEY`: proyecto Supabase (clave publicable).
- `PUBLIC_WHATSAPP`: número del taller con indicativo, ej. 573001234567.
- `PUBLIC_GA4_ID`, `PUBLIC_META_PIXEL_ID`: opcionales, para medir clics y citas.

## Dónde cambiar cosas
- Datos del taller, servicios, precios, equipo, FAQ: `src/config.ts`.
- Pon `demo: false` en `src/config.ts` cuando uses datos reales.
- Antes y después: agrega pares en `ANTES_DESPUES` con fotos en `public/img`.
- Video del recorrido: `public/video/recorrido-720.mp4` y `recorrido-540.mp4`.

## Panel
`/panel` con la clave del taller. Desde ahí: confirmar citas, actualizar el estado de cada carro (lo que ve el cliente en "¿Cómo va mi carro?") y ver recordatorios pendientes.
