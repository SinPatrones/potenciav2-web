"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

// Datos de ejemplo de ofertas de trabajo
const jobOffers = [
  {
    id: "1",
    title: "Contador Senior",
    company: "Potencia V2",
    city: "Lima",
    type: "Tiempo completo",
    modality: "Presencial",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    description: "Buscamos un contador con experiencia en gestión tributaria y financiera para unirse a nuestro equipo de profesionales.",
    shortDescription: "Buscamos un contador con experiencia en gestión tributaria y financiera...",
    requirements: [
      "Título profesional en Contabilidad",
      "Mínimo 5 años de experiencia",
      "Conocimiento en NIIF y tributación",
      "Dominio de Excel avanzado",
      "Experiencia en ERP contables"
    ],
    benefits: [
      "Sueldo competitivo",
      "Seguro de salud",
      "Capacitaciones constantes",
      "Bono por desempeño",
      "Horario flexible"
    ],
    whatsapp: "51920220050",
    salary: "S/ 4,000 - S/ 6,000",
    postedDate: "2024-12-15"
  },
  {
    id: "2",
    title: "Asesor Legal Corporativo",
    company: "Potencia V2",
    city: "Arequipa",
    type: "Tiempo completo",
    modality: "Híbrido",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    description: "Se requiere abogado especializado en derecho corporativo y comercial para asesoría a empresas.",
    shortDescription: "Se requiere abogado especializado en derecho corporativo y comercial...",
    requirements: [
      "Título de Abogado colegiado",
      "Especialización en derecho corporativo",
      "Mínimo 3 años de experiencia",
      "Conocimiento en contratos comerciales",
      "Inglés intermedio"
    ],
    benefits: [
      "Sueldo acorde al mercado",
      "EPS cubierto al 100%",
      "Oportunidad de crecimiento",
      "Ambiente laboral dinámico"
    ],
    whatsapp: "51920220050",
    salary: "S/ 5,000 - S/ 8,000",
    postedDate: "2024-12-14"
  },
  {
    id: "3",
    title: "Especialista en Marketing Digital",
    company: "Potencia V2",
    city: "Lima",
    type: "Medio tiempo",
    modality: "Híbrido",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "Únete a nuestro equipo de marketing para desarrollar estrategias digitales innovadoras.",
    shortDescription: "Únete a nuestro equipo de marketing para desarrollar estrategias digitales...",
    requirements: [
      "Bachiller en Marketing o Comunicaciones",
      "Experiencia en redes sociales",
      "Conocimiento en Google Ads y Meta Ads",
      "Manejo de herramientas de diseño",
      "Creatividad y proactividad"
    ],
    benefits: [
      "Trabajo híbrido",
      "Horario flexible",
      "Capacitación en herramientas digitales",
      "Buen ambiente de trabajo"
    ],
    whatsapp: "51920220050",
    salary: "S/ 2,000 - S/ 3,500",
    postedDate: "2024-12-13"
  },
  {
    id: "4",
    title: "Analista de Recursos Humanos",
    company: "Potencia V2",
    city: "Trujillo",
    type: "Tiempo completo",
    modality: "Presencial",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
    description: "Buscamos profesional en gestión del talento humano para procesos de selección y desarrollo.",
    shortDescription: "Buscamos profesional en gestión del talento humano para procesos de selección...",
    requirements: [
      "Licenciado en Psicología o Administración",
      "Experiencia en reclutamiento y selección",
      "Conocimiento en legislación laboral",
      "Habilidades de comunicación",
      "Manejo de indicadores de RRHH"
    ],
    benefits: [
      "Contrato en planilla",
      "Seguro de vida",
      "Capacitaciones",
      "Línea de carrera"
    ],
    whatsapp: "51920220050",
    salary: "S/ 3,000 - S/ 4,500",
    postedDate: "2024-12-12"
  },
  {
    id: "5",
    title: "Asistente Contable",
    company: "Potencia V2",
    city: "Cusco",
    type: "Prácticas",
    modality: "Presencial",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    description: "Oportunidad para practicantes de contabilidad con ganas de aprender y crecer profesionalmente.",
    shortDescription: "Oportunidad para practicantes de contabilidad con ganas de aprender...",
    requirements: [
      "Estudiante de últimos ciclos de Contabilidad",
      "Conocimiento básico de Excel",
      "Disponibilidad inmediata",
      "Ganas de aprender"
    ],
    benefits: [
      "Subvención económica",
      "Certificado de prácticas",
      "Posibilidad de contrato",
      "Mentoría de profesionales"
    ],
    whatsapp: "51920220050",
    salary: "S/ 1,025",
    postedDate: "2024-12-11"
  },
  {
    id: "6",
    title: "Consultor Tributario",
    company: "Potencia V2",
    city: "Lima",
    type: "Freelance",
    modality: "Remoto",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    description: "Consultor independiente para asesoría tributaria a nuestra cartera de clientes.",
    shortDescription: "Consultor independiente para asesoría tributaria a nuestra cartera de clientes...",
    requirements: [
      "Contador Público Colegiado",
      "Especialización en tributación",
      "Mínimo 5 años de experiencia",
      "Cartera de clientes propia (deseable)",
      "Disponibilidad para reuniones virtuales"
    ],
    benefits: [
      "Honorarios competitivos",
      "Flexibilidad de horarios",
      "Trabajo remoto",
      "Cartera de clientes establecida"
    ],
    whatsapp: "51920220050",
    salary: "Por proyecto",
    postedDate: "2024-12-10"
  }
];

const cities = ["Todas", "Lima", "Arequipa", "Trujillo", "Cusco"];
const jobTypes = ["Todos", "Tiempo completo", "Medio tiempo", "Prácticas", "Freelance"];
const modalities = ["Todas", "Presencial", "Híbrido", "Remoto"];

export default function BolsaTrabajoPage() {
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedCity, setSelectedCity] = useState("Todas");
  const [selectedType, setSelectedType] = useState("Todos");
  const [selectedModality, setSelectedModality] = useState("Todas");

  const filteredJobs = useMemo(() => {
    return jobOffers.filter((job) => {
      const matchesTitle = job.title.toLowerCase().includes(searchTitle.toLowerCase());
      const matchesCity = selectedCity === "Todas" || job.city === selectedCity;
      const matchesType = selectedType === "Todos" || job.type === selectedType;
      const matchesModality = selectedModality === "Todas" || job.modality === selectedModality;
      return matchesTitle && matchesCity && matchesType && matchesModality;
    });
  }, [searchTitle, selectedCity, selectedType, selectedModality]);

  return (
    <main className="min-h-screen bg-[var(--gray-50)]">
      {/* Hero Section */}
      <section className="pt-28 pb-12 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Bolsa de Trabajo
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              Encuentra las mejores oportunidades laborales. Conectamos talento con empresas que buscan crecer.
            </p>
          </div>
        </div>
      </section>

      {/* Buscador y Filtros */}
      <section className="py-8 bg-white shadow-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Búsqueda por título */}
            <div className="flex-1">
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--gray-400)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Buscar por título de trabajo..."
                  value={searchTitle}
                  onChange={(e) => setSearchTitle(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-[var(--gray-200)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Filtro por ciudad */}
            <div className="w-full lg:w-48">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 border border-[var(--gray-200)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent transition-all bg-white appearance-none cursor-pointer"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city === "Todas" ? "Todas las ciudades" : city}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtro por tipo */}
            <div className="w-full lg:w-48">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-[var(--gray-200)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent transition-all bg-white appearance-none cursor-pointer"
              >
                {jobTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === "Todos" ? "Todos los tipos" : type}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtro por modalidad */}
            <div className="w-full lg:w-48">
              <select
                value={selectedModality}
                onChange={(e) => setSelectedModality(e.target.value)}
                className="w-full px-4 py-3 border border-[var(--gray-200)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent transition-all bg-white appearance-none cursor-pointer"
              >
                {modalities.map((modality) => (
                  <option key={modality} value={modality}>
                    {modality === "Todas" ? "Todas las modalidades" : modality}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Listado de Ofertas */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contador de resultados */}
          <div className="mb-6">
            <p className="text-[var(--gray-600)]">
              {filteredJobs.length} {filteredJobs.length === 1 ? "oferta encontrada" : "ofertas encontradas"}
            </p>
          </div>

          {/* Grid de ofertas */}
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg
                className="w-16 h-16 mx-auto text-[var(--gray-300)] mb-4"
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
              <h3 className="text-xl font-semibold text-[var(--gray-700)] mb-2">
                No se encontraron ofertas
              </h3>
              <p className="text-[var(--gray-500)]">
                Intenta ajustar los filtros de búsqueda
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

// Componente JobCard
function JobCard({ job }: { job: typeof jobOffers[0] }) {
  const whatsappMessage = encodeURIComponent(
    `Hola, estoy interesado en la oferta de trabajo: ${job.title}`
  );
  const whatsappLink = `https://wa.me/${job.whatsapp}?text=${whatsappMessage}`;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Imagen */}
      <div className="relative h-48 bg-[var(--gray-100)]">
        <Image
          src={job.image}
          alt={job.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 left-3 right-3 flex justify-between">
          <span className={`px-3 py-1 text-white text-xs font-medium rounded-full ${
            job.modality === "Remoto"
              ? "bg-[var(--success)]"
              : job.modality === "Híbrido"
                ? "bg-[var(--accent)]"
                : "bg-[var(--gold)]"
          }`}>
            {job.modality}
          </span>
          <span className="px-3 py-1 bg-[var(--secondary)] text-white text-xs font-medium rounded-full">
            {job.type}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-[var(--primary)] line-clamp-2">
            {job.title}
          </h3>
        </div>

        <div className="flex items-center gap-2 text-sm text-[var(--gray-500)] mb-3">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>{job.city}</span>
          <span className="text-[var(--gray-300)]">|</span>
          <span className="text-[var(--secondary)] font-medium">{job.salary}</span>
        </div>

        <p className="text-[var(--gray-600)] text-sm mb-4 line-clamp-3">
          {job.shortDescription}
        </p>

        {/* Tags de requerimientos */}
        <div className="flex flex-wrap gap-2 mb-4">
          {job.requirements.slice(0, 2).map((req, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-[var(--gray-100)] text-[var(--gray-600)] text-xs rounded-lg"
            >
              {req.length > 25 ? req.substring(0, 25) + "..." : req}
            </span>
          ))}
          {job.requirements.length > 2 && (
            <span className="px-2 py-1 bg-[var(--gray-100)] text-[var(--gray-500)] text-xs rounded-lg">
              +{job.requirements.length - 2} más
            </span>
          )}
        </div>

        {/* Botones */}
        <div className="mt-auto flex gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#128C7E] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <Link
            href={`/bolsa-trabajo/${job.id}`}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-[var(--primary)] text-[var(--primary)] rounded-xl font-medium hover:bg-[var(--primary)] hover:text-white transition-colors"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
}
