"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Datos de ejemplo de ofertas de trabajo (mismo que en la página principal)
const jobOffers = [
  {
    id: "1",
    title: "Contador Senior",
    company: "Potencia V2",
    city: "Lima",
    type: "Tiempo completo",
    modality: "Presencial",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    description: "Buscamos un contador con experiencia en gestión tributaria y financiera para unirse a nuestro equipo de profesionales. El candidato ideal tendrá sólidos conocimientos en normativas contables y tributarias peruanas, capacidad de liderazgo y habilidades para trabajar en equipo. Será responsable de la gestión contable integral de una cartera de clientes, incluyendo la preparación de estados financieros, declaraciones tributarias y asesoría contable.",
    requirements: [
      "Título profesional en Contabilidad",
      "Mínimo 5 años de experiencia",
      "Conocimiento en NIIF y tributación peruana",
      "Dominio de Excel avanzado",
      "Experiencia en ERP contables (SAP, Oracle, Concar)",
      "Capacidad de análisis y atención al detalle",
      "Habilidades de comunicación efectiva"
    ],
    benefits: [
      "Sueldo competitivo acorde al mercado",
      "Seguro de salud EPS al 100%",
      "Capacitaciones constantes pagadas",
      "Bono por desempeño trimestral",
      "Horario flexible",
      "Día libre por cumpleaños",
      "Oportunidad de línea de carrera"
    ],
    whatsapp: "51920220050",
    salary: "S/ 4,000 - S/ 6,000",
    postedDate: "2024-12-15",
    email: "rrhh@potenciav2.com"
  },
  {
    id: "2",
    title: "Asesor Legal Corporativo",
    company: "Potencia V2",
    city: "Arequipa",
    type: "Tiempo completo",
    modality: "Híbrido",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    description: "Se requiere abogado especializado en derecho corporativo y comercial para asesoría integral a empresas. El profesional será responsable de brindar consultoría legal a nuestra cartera de clientes, elaborar y revisar contratos, participar en negociaciones comerciales y asegurar el cumplimiento normativo de las operaciones empresariales.",
    requirements: [
      "Título de Abogado colegiado y habilitado",
      "Especialización o maestría en derecho corporativo",
      "Mínimo 3 años de experiencia en asesoría empresarial",
      "Conocimiento profundo en contratos comerciales",
      "Inglés intermedio-avanzado",
      "Experiencia en due diligence",
      "Conocimiento en derecho laboral empresarial"
    ],
    benefits: [
      "Sueldo acorde al mercado",
      "EPS cubierto al 100%",
      "Oportunidad de crecimiento profesional",
      "Ambiente laboral dinámico",
      "Trabajo con clientes de diversos sectores",
      "Capacitación continua"
    ],
    whatsapp: "51920220050",
    salary: "S/ 5,000 - S/ 8,000",
    postedDate: "2024-12-14",
    email: "rrhh@potenciav2.com"
  },
  {
    id: "3",
    title: "Especialista en Marketing Digital",
    company: "Potencia V2",
    city: "Lima",
    type: "Medio tiempo",
    modality: "Híbrido",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "Únete a nuestro equipo de marketing para desarrollar estrategias digitales innovadoras que impulsen el crecimiento de nuestros clientes. Serás responsable de gestionar campañas publicitarias en múltiples plataformas, crear contenido atractivo y analizar métricas de rendimiento para optimizar resultados.",
    requirements: [
      "Bachiller en Marketing, Comunicaciones o afines",
      "Experiencia comprobada en gestión de redes sociales",
      "Conocimiento avanzado en Google Ads y Meta Ads",
      "Manejo de herramientas de diseño (Canva, Photoshop)",
      "Creatividad y proactividad",
      "Capacidad de análisis de métricas",
      "Conocimiento en SEO y SEM"
    ],
    benefits: [
      "Trabajo híbrido (presencial y remoto)",
      "Horario flexible",
      "Capacitación en herramientas digitales premium",
      "Buen ambiente de trabajo",
      "Proyectos variados y desafiantes"
    ],
    whatsapp: "51920220050",
    salary: "S/ 2,000 - S/ 3,500",
    postedDate: "2024-12-13",
    email: "rrhh@potenciav2.com"
  },
  {
    id: "4",
    title: "Analista de Recursos Humanos",
    company: "Potencia V2",
    city: "Trujillo",
    type: "Tiempo completo",
    modality: "Presencial",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
    description: "Buscamos profesional en gestión del talento humano para liderar procesos de selección, capacitación y desarrollo organizacional. El candidato será responsable de implementar estrategias de atracción y retención de talento, gestionar el clima laboral y asegurar el cumplimiento de la normativa laboral vigente.",
    requirements: [
      "Licenciado en Psicología, Administración o RRHH",
      "Experiencia mínima de 2 años en reclutamiento y selección",
      "Conocimiento actualizado en legislación laboral",
      "Excelentes habilidades de comunicación",
      "Manejo de indicadores de gestión de RRHH",
      "Experiencia en programas de capacitación",
      "Conocimiento en evaluación de desempeño"
    ],
    benefits: [
      "Contrato en planilla desde el primer día",
      "Seguro de vida",
      "Capacitaciones especializadas",
      "Línea de carrera clara",
      "Bonos por cumplimiento de objetivos"
    ],
    whatsapp: "51920220050",
    salary: "S/ 3,000 - S/ 4,500",
    postedDate: "2024-12-12",
    email: "rrhh@potenciav2.com"
  },
  {
    id: "5",
    title: "Asistente Contable",
    company: "Potencia V2",
    city: "Cusco",
    type: "Prácticas",
    modality: "Presencial",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    description: "Oportunidad para practicantes de contabilidad con ganas de aprender y crecer profesionalmente en un ambiente dinámico. Participarás en el registro de operaciones contables, conciliaciones bancarias, archivo documentario y apoyo en la elaboración de reportes financieros bajo la supervisión de contadores senior.",
    requirements: [
      "Estudiante de últimos ciclos de Contabilidad",
      "Conocimiento básico de Excel",
      "Disponibilidad inmediata para prácticas",
      "Ganas de aprender y desarrollarse",
      "Responsabilidad y puntualidad",
      "Buena actitud y trabajo en equipo"
    ],
    benefits: [
      "Subvención económica de S/ 1,025",
      "Certificado de prácticas",
      "Posibilidad de contrato al término",
      "Mentoría de profesionales experimentados",
      "Aprendizaje práctico real",
      "Horario flexible para estudios"
    ],
    whatsapp: "51920220050",
    salary: "S/ 1,025",
    postedDate: "2024-12-11",
    email: "rrhh@potenciav2.com"
  },
  {
    id: "6",
    title: "Consultor Tributario",
    company: "Potencia V2",
    city: "Lima",
    type: "Freelance",
    modality: "Remoto",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    description: "Consultor independiente para brindar asesoría tributaria especializada a nuestra cartera de clientes. Buscamos un profesional con amplia experiencia en planificación fiscal, que pueda identificar oportunidades de optimización tributaria y asegurar el cumplimiento de obligaciones fiscales de manera eficiente.",
    requirements: [
      "Contador Público Colegiado",
      "Especialización o diplomado en tributación",
      "Mínimo 5 años de experiencia en consultoría tributaria",
      "Cartera de clientes propia (deseable)",
      "Disponibilidad para reuniones virtuales y presenciales",
      "Actualización constante en normativa tributaria",
      "Experiencia en fiscalizaciones SUNAT"
    ],
    benefits: [
      "Honorarios competitivos por proyecto",
      "Total flexibilidad de horarios",
      "Trabajo 100% remoto",
      "Cartera de clientes establecida",
      "Soporte administrativo incluido",
      "Red de contactos profesionales"
    ],
    whatsapp: "51920220050",
    salary: "Por proyecto",
    postedDate: "2024-12-10",
    email: "rrhh@potenciav2.com"
  }
];

export default function JobDetailPage() {
  const params = useParams();
  const jobId = params.id as string;

  const job = jobOffers.find((j) => j.id === jobId);

  if (!job) {
    return (
      <main className="min-h-screen bg-[var(--gray-50)] pt-28">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <svg
            className="w-20 h-20 mx-auto text-[var(--gray-300)] mb-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-2xl font-bold text-[var(--gray-700)] mb-4">
            Oferta no encontrada
          </h1>
          <p className="text-[var(--gray-500)] mb-8">
            La oferta de trabajo que buscas no existe o ha sido removida.
          </p>
          <Link
            href="/bolsa-trabajo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-xl font-medium hover:bg-[var(--primary-light)] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a ofertas
          </Link>
        </div>
      </main>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hola, estoy interesado en la oferta de trabajo: ${job.title}. Me gustaría obtener más información.`
  );
  const whatsappLink = `https://wa.me/${job.whatsapp}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-[var(--gray-50)]">
      {/* Hero con imagen */}
      <section className="pt-20">
        <div className="relative h-64 sm:h-80 lg:h-96 bg-[var(--gray-200)]">
          <Image
            src={job.image}
            alt={job.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Contenido sobre la imagen */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block px-4 py-1.5 bg-[var(--secondary)] text-white text-sm font-medium rounded-full">
                  {job.type}
                </span>
                <span className={`inline-block px-4 py-1.5 text-white text-sm font-medium rounded-full ${
                  job.modality === "Remoto"
                    ? "bg-[var(--success)]"
                    : job.modality === "Híbrido"
                      ? "bg-[var(--accent)]"
                      : "bg-[var(--gold)]"
                }`}>
                  {job.modality}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                {job.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                <span className="flex items-center gap-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {job.company}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.city}
                </span>
                <span className="flex items-center gap-1 text-[var(--gold)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {job.salary}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Botón volver */}
          <Link
            href="/bolsa-trabajo"
            className="inline-flex items-center gap-2 text-[var(--gray-600)] hover:text-[var(--primary)] mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a ofertas
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contenido izquierdo */}
            <div className="lg:col-span-2 space-y-8">
              {/* Descripción */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-[var(--primary)] mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descripción del puesto
                </h2>
                <p className="text-[var(--gray-600)] leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Requerimientos */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-[var(--primary)] mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  Requerimientos
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[var(--gray-600)]">
                      <svg className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Beneficios */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-[var(--primary)] mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  Beneficios
                </h2>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[var(--gray-600)]">
                      <svg className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar derecho */}
            <div className="space-y-6">
              {/* Card de postulación */}
              <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-28">
                <h3 className="text-lg font-bold text-[var(--primary)] mb-4">
                  ¿Te interesa esta oferta?
                </h3>
                <p className="text-[var(--gray-600)] text-sm mb-6">
                  Contáctanos para más información o envía tu CV directamente.
                </p>

                <div className="space-y-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#128C7E] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Contactar por WhatsApp
                  </a>

                  <a
                    href={`mailto:${job.email}?subject=Postulación: ${job.title}&body=Hola, me gustaría postular a la oferta de ${job.title}. Adjunto mi CV.`}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-[var(--primary)] text-[var(--primary)] rounded-xl font-medium hover:bg-[var(--primary)] hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Enviar CV por Email
                  </a>
                </div>

                {/* Info adicional */}
                <div className="mt-6 pt-6 border-t border-[var(--gray-100)]">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-[var(--gray-600)]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Publicado: {new Date(job.postedDate).toLocaleDateString("es-PE", {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      })}
                    </div>
                    <div className="flex items-center gap-2 text-[var(--gray-600)]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Ubicación: {job.city}
                    </div>
                    <div className="flex items-center gap-2 text-[var(--gray-600)]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Tipo: {job.type}
                    </div>
                    <div className="flex items-center gap-2 text-[var(--gray-600)]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      Modalidad: {job.modality}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
