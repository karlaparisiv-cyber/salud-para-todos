/* =========================================================================
   DATA.JS — Fuente única de información del Centro Médico Salud Para Todos
   =========================================================================
   Toda la información de sedes y servicios vive AQUÍ, separada de la
   interfaz. Para agregar, quitar o modificar una sede o un servicio,
   edita únicamente este archivo — el resto de la web se actualiza sola.

   Campos marcados con "[...]" son PLACEHOLDERS: aún no tenemos el dato
   real (dirección exacta, teléfono, WhatsApp, correo u horario) y deben
   sustituirse por la información oficial antes de publicar la página.
   ========================================================================= */

// ---------------------------------------------------------------------
// 1. CONTACTO GENERAL DEL CENTRO MÉDICO
// ---------------------------------------------------------------------
const CONTACTO_GENERAL = {
  telefono: "(0212) 710 21 25",
  telefonoHref: "tel:+582127102125",
  whatsapp: "(0412) 738 62 13",
  whatsappHref: "https://wa.me/584127386213",
  instagram: "@saludparatodos.ve",
  instagramHref: "https://instagram.com/saludparatodos.ve",
  direccionCorta: "Caracas, Venezuela",
};

// ---------------------------------------------------------------------
// 2. CATEGORÍAS GENERALES DE SERVICIOS (para la sección "Servicios")
//    id -> debe coincidir con los ids usados dentro de cada sede
// ---------------------------------------------------------------------
const CATEGORIAS_SERVICIOS = [
  {
    id: "consultas",
    nombre: "Consultas médicas",
    icono: "stethoscope",
    descripcion: "Cardiología, medicina interna, ginecología y más, según sede.",
  },
  {
    id: "laboratorio",
    nombre: "Laboratorio",
    icono: "flask",
    descripcion: "Exámenes de laboratorio clínico.",
  },
  {
    id: "imagenologia",
    nombre: "Imagenología y diagnóstico",
    icono: "scan",
    descripcion: "Rayos X, ecografías, tomografías y estudios especializados.",
  },
  {
    id: "emergencias",
    nombre: "Emergencias",
    icono: "siren",
    descripcion: "Atención de emergencias en sedes habilitadas.",
  },
  {
    id: "odontologia",
    nombre: "Odontología",
    icono: "tooth",
    descripcion: "Cirugía, ortodoncia, periodoncia, endodoncia, odontología general.",
  },
  {
    id: "optica",
    nombre: "Óptica",
    icono: "glasses",
    descripcion: "Valoración especializada, estudios visuales y orientación para elegir los lentes y monturas que mejor se adapten a tus necesidades.",
  },
  {
    id: "rehabilitacion",
    nombre: "Fisioterapia y rehabilitación",
    icono: "activity",
    descripcion: "Fisioterapia, optometría y medicina ocupacional.",
  },
];

// ---------------------------------------------------------------------
// 3. SEDES
//    Cada sede es independiente: se puede agregar/eliminar un objeto
//    de este arreglo sin tocar ningún componente de la interfaz.
// ---------------------------------------------------------------------
const SEDES = [
  {
    id: "jesus-regueti",
    nombre: "Ambulatorio Jesús Regueti",
    subtitulo: "El origen del modelo",
    ciudadEstado: "El Hatillo, Caracas",
    direccion: "Calle La Lagunita, entre la calle La Mota y la calle B2, en el pueblo de El Hatillo",
    horario: "De lunes a viernes de 7:00 am a 4:00 pm. Sábados de 8:00 am a 2:00 pm",
    telefono: "(0212) 710 21 25",
    telefonoHref: "tel:+582127102125",
    whatsapp: "(0412) 738 62 13",
    whatsappHref: "https://wa.me/584127386213",
    mapsHref: "https://maps.app.goo.gl/VHZtvogvV6UeBjzH6",
    imagen: "sede-jesus-regueti",
    anioApertura: 2019,
    emergencia24h: true,
    especialidades: [], // no reportadas en el material fuente
    diagnosticoEstudios: [
      "Laboratorio",
      "Rayos X (24 horas)",
      "Tomografías, con y sin contraste (24 horas)",
    ],
    serviciosComplementarios: [],
    odontologia: [],
    destacado:
      "Aquí nació el modelo Salud Para Todos en 2019: integrar capacidades existentes para generar más valor que empezar desde cero.",
  },
  {
    id: "cafetal",
    nombre: "Sede Cafetal",
    subtitulo: "La primera expansión",
    ciudadEstado: "El Cafetal, Caracas",
    direccion: "Ambulatorio El Cafetal, Av. Principal La Guairita, Caracas 1061, Distrito Capital, Venezuela",
    horario: "De lunes a viernes de 7:00 am a 4:00 pm. Sábados de 8:00 am a 2:00 pm",
    telefono: "(0212) 710 21 25",
    telefonoHref: "tel:+582127102125",
    whatsapp: "(0412) 738 62 13",
    whatsappHref: "https://wa.me/584127386213",
    mapsHref: "https://maps.app.goo.gl/7W2jUUppHZdvgFYU8",
    imagen: "sede-cafetal",
    anioApertura: 2020,
    emergencia24h: false,
    especialidades: [
      "Medicina General",
      "Ginecología y Obstetricia",
      "Cardiología",
      "Medicina Interna",
      "Gastroenterología",
      "Traumatología",
      "Dermatología",
      "Neurología",
      "Pediatría",
      "Otorrinolaringología",
      "Endocrinología",
      "Reumatología",
      "Neumonología",
      "Urología",
      "Psiquiatría",
      "Medicina del Dolor",
    ],
    diagnosticoEstudios: [
      "Laboratorio",
      "Rayos X",
      "Mamografía",
      "Ecografías simples",
      "Ecografías Doppler",
    ],
    serviciosComplementarios: [],
    odontologia: [],
    destacado:
      "El modelo salió del ambulatorio y llegó a una nueva comunidad, demostrando que podía crecer sin perder su esencia.",
  },
  {
    id: "paseo-el-hatillo",
    nombre: "Sede Paseo El Hatillo",
    subtitulo: "La consolidación",
    ciudadEstado: "El Hatillo, Caracas",
    direccion: "Centro Comercial Paseo El Hatillo, Nivel Auto Mercado",
    horario: "De lunes a viernes de 7:00 am a 4:00 pm. Sábados de 8:00 am a 2:00 pm",
    telefono: "(0212) 710 21 25",
    telefonoHref: "tel:+582127102125",
    whatsapp: "(0412) 738 62 13",
    whatsappHref: "https://wa.me/584127386213",
    mapsHref: "https://maps.app.goo.gl/ZjidjNCKriBxj3pb6",
    imagen: "sede-paseo-el-hatillo",
    anioApertura: 2021,
    emergencia24h: false,
    especialidades: [
      "Medicina General",
      "Medicina Interna",
      "Cardiología",
      "Urología",
      "Ginecología y Obstetricia",
      "Neurología",
      "Psicología",
      "Neumonología",
      "Traumatología",
      "Dermatología",
      "Otorrinolaringología",
      "Pediatría",
      "Endocrinología",
      "Nutrición",
      "Oftalmología",
      "Neurocirugía",
      "Gastroenterología",
      "Nefrología",
      "Medicina del Dolor",
      "Odontología",
    ],
    diagnosticoEstudios: [
      "Laboratorio",
      "Rayos X",
      "Ecografías",
      "Ecografías Doppler",
      "Ecografía transvaginal",
      "Electrocardiograma",
      "Holter",
      "MAPA",
      "Prueba de esfuerzo",
      "Espirometría",
      "Citología",
      "Cardisio",
    ],
    serviciosComplementarios: [
      "Fisioterapia",
      "Optometría",
      "Óptica",
      "Medicina Ocupacional",
    ],
    odontologia: [],
    destacado:
      "Incorporamos nuevas especialidades y fortalecimos la red de atención para el Municipio El Hatillo.",
  },
  {
    id: "santa-fe",
    nombre: "Sede Santa Fe",
    subtitulo: "La evolución",
    ciudadEstado: "Santa Fe, Caracas",
    direccion: "Avenida Carlos Bello, Iglesia Nuestra Señora del Pilar, Santa Fe Norte",
    horario: "De lunes a viernes de 7:00 am a 4:00 pm. Sábados de 8:00 am a 2:00 pm",
    telefono: "(0212) 710 21 25",
    telefonoHref: "tel:+582127102125",
    whatsapp: "(0412) 738 62 13",
    whatsappHref: "https://wa.me/584127386213",
    mapsHref: "https://maps.app.goo.gl/vKw6V9VK1LcZxQQK7",
    imagen: "sede-santa-fe",
    anioApertura: 2021,
    emergencia24h: false,
    especialidades: [
      "Medicina General",
      "Pediatría",
      "Medicina Interna",
      "Psicología",
      "Cardiología",
      "Traumatología",
      "Gastroenterología",
      "Urología",
      "Neumonología",
    ],
    diagnosticoEstudios: [
      "Laboratorio",
      "Electrocardiograma",
      "Espirometría",
      "MAPA",
      "Pase de tratamiento",
    ],
    serviciosComplementarios: [],
    odontologia: [
      "Odontología General",
      "Ortodoncia",
      "Endodoncia",
      "Periodoncia",
      "Extracciones Dentales",
    ],
    destacado:
      "Confirmamos que el modelo podía adaptarse a distintos entornos, ampliando el acceso a la salud.",
  },
];

// ---------------------------------------------------------------------
// 4. LÍNEA DE TIEMPO INSTITUCIONAL (sección "Nosotros")
// ---------------------------------------------------------------------
const LINEA_DE_TIEMPO = SEDES.map((s) => ({
  anio: s.anioApertura,
  nombre: s.nombre,
  descripcion: s.destacado,
}));

// ---------------------------------------------------------------------
// 5. MODELO DE IMPACTO — "¿Qué aporta el Modelo Salud Para Todos
//    a la comunidad?" (alianza Grupo Salud Para Todos + Alcaldía)
// ---------------------------------------------------------------------
const IMPACTO = [
  {
    cifra: "10%",
    titulo: "En atenciones — Modelo 1x10",
    descripcion:
      "Por cada 10 estudios realizados, se destina 1 estudio para una persona que no puede cubrir ese gasto. Canalizado a través de la Alcaldía mediante un oficio.",
  },
  {
    cifra: "5%",
    titulo: "Para el personal público",
    descripcion:
      "Se entrega como bono al personal que trabaja en la parte pública del sistema de salud, en reconocimiento a su labor diaria con la comunidad.",
  },
  {
    cifra: "3%",
    titulo: "En insumos",
    descripcion:
      "Se entrega a la Alcaldía para la compra de insumos destinados a la parte pública del ambulatorio, para atender las emergencias.",
  },
];

// ---------------------------------------------------------------------
// 5b. ORIGEN DEL MODELO (resumen del material institucional)
// ---------------------------------------------------------------------
const ORIGEN = {
  contexto:
    "Durante muchos años, el acceso a la salud en Venezuela pareció dividirse entre dos realidades: una medicina privada de calidad pero fuera del alcance de buena parte de la población — hoy solo un 6% de la población cuenta con seguro de salud — y una red pública presente en las comunidades, pero con limitaciones para ampliar su capacidad de atención.",
  idea:
    "El Modelo Salud Para Todos no nació para construir un nuevo sistema de salud. Nació para demostrar que integrar capacidades existentes puede generar más valor para la comunidad que empezar desde cero.",
  publico: ["Presencia en la comunidad", "Infraestructura existente", "Profesionales comprometidos", "Base para la atención"],
  privado: ["Tecnología y equipos", "Procesos eficientes", "Calidad operativa", "Sostenibilidad financiera"],
};

// ---------------------------------------------------------------------
// 6. LISTA DE MÉDICOS (placeholder — pendiente por definir)
//    Estructura lista para completarse cuando exista el directorio médico.
// ---------------------------------------------------------------------
const MEDICOS = [
  // {
  //   id: "medico-1",
  //   nombre: "[Nombre del médico]",
  //   especialidad: "[Especialidad]",
  //   sedes: ["cafetal", "santa-fe"],
  // },
];
