// Datos del taller. Cambia aquí y se actualiza toda la web.
export const TALLER = {
  nombre: 'La Rótula',
  tipo: 'Taller mecánico',
  barrio: 'Prado Veraniego',
  ciudad: 'Bogotá',
  direccion: 'Cra. 50 # 128-40',
  telefono: '601 555 0134',
  telefonoTel: '+576015550134',
  correo: 'contacto@larotula.co',
  nit: '901.000.000-0',
  horario: { semana: 'Lunes a viernes, 7:30 a.m. a 6:00 p.m.', sabado: 'Sábados, 8:00 a.m. a 2:00 p.m.' },
  pagos: 'Efectivo, Nequi, Daviplata, tarjetas y transferencia.',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cra.+50+%23+128-40+Bogot%C3%A1',
  demo: true, // Muestra el aviso de sitio de demostración. Pon false con datos reales.
};

export const WHATSAPP = (import.meta.env.PUBLIC_WHATSAPP || '570000000000').replace(/\D/g, '');

export const SERVICIOS = [
  { id: 'Diagnóstico', img: 'servicio-diagnostico', alt: 'Diana conectando el escáner de diagnóstico con el capó abierto', nombre: 'Diagnóstico', desc: 'Escáner computarizado, revisión visual y reporte con fotos por WhatsApp. Gratis si reparas con nosotros.', tiempo: '1 hora', base: 60000, fijo: true },
  { id: 'Frenos', img: 'servicio-frenos', alt: 'Instalación de un disco de freno rectificado y pastillas nuevas', nombre: 'Frenos', desc: 'Cambio de pastillas o bandas, rectificado de discos y purga del líquido.', tiempo: '2 a 3 horas', base: 180000 },
  { id: 'Cambio de aceite', img: 'servicio-aceite', alt: 'Hernán echando aceite nuevo al motor con un embudo', nombre: 'Aceite y filtros', desc: 'Aceite según el manual de tu carro, filtro de aceite y revisión de 20 puntos.', tiempo: '45 minutos', base: 150000 },
  { id: 'Suspensión', img: 'servicio-suspension', alt: 'Amortiguador viejo con fuga junto a uno nuevo sobre el banco', nombre: 'Suspensión', desc: 'Amortiguadores, tijeras, bujes y terminales. Alineación incluida.', tiempo: 'Medio día', base: 350000 },
  { id: 'Sistema eléctrico', img: 'servicio-electrico', alt: 'Diana midiendo la batería con un multímetro', nombre: 'Sistema eléctrico', desc: 'Batería, alternador, arranque, luces y testigos encendidos en el tablero.', tiempo: 'Según el caso', base: 90000 },
  { id: 'Revisión técnico-mecánica', img: 'servicio-rtm', alt: 'Julián revisando las luces del carro con una lista de chequeo', nombre: 'Pre-revisión RTM', desc: 'Revisamos lo que evalúa el CDA para que pases la técnico-mecánica a la primera.', tiempo: '1 hora', base: 70000, fijo: true },
] as const;

export const MARCAS = ['Chevrolet', 'Renault', 'Mazda', 'Kia', 'Hyundai', 'Toyota', 'Nissan', 'Suzuki', 'Volkswagen', 'Otra'];
export const ANIOS = ['Antes de 2012', '2012 a 2016', '2017 a 2020', '2021 en adelante'];

export const PASOS = [
  { titulo: 'Recibimos el carro', texto: 'Anotamos la placa, el kilometraje y lo que notas. Tomamos fotos del estado en que llega.' },
  { titulo: 'Hacemos el diagnóstico', texto: 'Lo conectamos al escáner y lo revisamos. Te mandamos fotos y una explicación clara por WhatsApp.' },
  { titulo: 'Tú apruebas el presupuesto', texto: 'Ves cada repuesto y la mano de obra con su precio. Empezamos solo cuando respondes que sí.' },
  { titulo: 'Te lo entregamos', texto: 'Probamos el carro en carretera y te entregamos las piezas viejas y la factura con la garantía.' },
];

export const ETAPAS = ['Recibido en el taller', 'Diagnóstico enviado', 'Presupuesto aprobado', 'En reparación', 'Prueba en carretera', 'Listo para recoger'];

export const EQUIPO = [
  { nombre: 'Hernán Pardo', rol: 'Jefe de taller. Técnico automotriz del SENA, 20 años en motores y cajas.', img: 'hernan', alt: 'Hernán ajustando con un torquímetro la suspensión de un carro en el elevador' },
  { nombre: 'Diana Rojas', rol: 'Diagnóstico electrónico y sistema eléctrico. Es quien te manda el reporte.', img: 'diana', alt: 'Diana revisando el escáner de diagnóstico' },
  { nombre: 'Julián Mora', rol: 'Frenos y suspensión. Hace la prueba en carretera antes de entregar.', img: 'julian', alt: 'Julián trabajando en el disco de freno delantero' },
];

export const RESENAS = [
  { texto: 'Me mandaron foto de las pastillas gastadas y el precio antes de hacer nada. Me devolvieron las piezas viejas en una bolsa.', carro: 'Mazda 2' },
  { texto: 'Otro taller me había cotizado cambiar todo el embrague. Aquí encontraron que era el cilindro y me salió por menos de la mitad.', carro: 'Chevrolet Spark' },
  { texto: 'Recogieron el carro en la oficina y me lo devolvieron el mismo día. Pasé la técnico-mecánica a la primera.', carro: 'Renault Logan' },
];

// Antes y después: la sección aparece solo cuando hay pares con las dos fotos (en public/img).
export const ANTES_DESPUES: { titulo: string; antes: string; despues: string; texto: string }[] = [
  { titulo: 'Disco de freno', antes: 'freno-antes', despues: 'freno-despues', texto: 'Disco con canal y pastillas en 2 mm. Rectificamos el disco y cambiamos las pastillas en 2 horas y media.' },
  { titulo: 'Pastillas', antes: 'pastillas-antes', despues: 'pastillas-despues', texto: 'Así llegan las pastillas cuando el freno empieza a sonar, y así salen. Las viejas te las entregamos en una bolsa.' },
];

export const FAQ = [
  { q: '¿El diagnóstico se cobra si no reparo aquí?', a: 'Si agendas desde la página y haces la reparación con nosotros, el diagnóstico es gratis. Si solo quieres el diagnóstico, cuesta $60.000 y te quedas con el reporte y las fotos.' },
  { q: '¿Cuánto se demoran?', a: 'Un cambio de aceite toma 45 minutos y unos frenos de 2 a 3 horas. En el presupuesto te decimos la hora de entrega; si cambia, te avisamos por WhatsApp.' },
  { q: '¿Usan repuestos originales?', a: 'Te damos dos opciones cuando existen: original de marca y homologado de buena calidad, cada uno con su precio. Tú eliges. También puedes traer tus repuestos; en ese caso la garantía cubre solo la mano de obra.' },
  { q: '¿Qué hago si el carro no prende o está varado?', a: 'Escríbenos con la placa y la ubicación. Coordinamos una grúa con un aliado de lunes a sábado y te decimos el costo antes de enviarla.' },
  { q: '¿Cómo puedo pagar?', a: 'Efectivo, Nequi, Daviplata, tarjeta débito o crédito y transferencia. Siempre con factura electrónica.' },
  { q: '¿Qué cubre la garantía?', a: 'Seis meses o 10.000 km, lo que se cumpla primero, en la mano de obra y en los repuestos que instalamos. Si algo falla, lo revisamos sin costo.' },
];
