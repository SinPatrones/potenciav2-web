import Link from "next/link";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Contabilidad y Tributacion",
    description:
      "Declaraciones, tramites SUNAT, asesoria laboral, gestion de planillas y servicios financieros para mantener tu empresa al dia.",
    href: "/servicios/contabilidad",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    color: "#0f3460",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Asesoria Legal",
    description:
      "Constitucion de empresas, cambios societarios, contratos laborales, comerciales y gestion de tramites legales.",
    href: "/servicios/legal",
    imageUrl:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    color: "#1a1a2e",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
  },
  {
    title: "Marketing Empresarial",
    description:
      "Branding, diseno grafico, gestion de redes sociales, estrategias de contenido y estudios de mercado SMART.",
    href: "/servicios/marketing",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    color: "#e94560",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
      </svg>
    ),
  },
  {
    title: "Talento Humano",
    description:
      "Reclutamiento, elaboracion de perfiles, medicion de clima laboral, politicas de incentivos y coaching de equipos.",
    href: "/servicios/talento-humano",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    color: "#f4a261",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

const values = [
  { name: "Puntualidad", icon: "clock" },
  { name: "Formalidad", icon: "shield" },
  { name: "Calidad", icon: "star" },
  { name: "Profesionalismo", icon: "briefcase" },
  { name: "Respeto", icon: "heart" },
];

const clients = [
  "Happy Api",
  "Bitel",
  "RE/MAX",
  "Wade Rain",
  "Questdor",
  "Alerta Arequipa",
  "La Casa de la Salchipapa",
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Oficina moderna"
            fill
            className="object-cover mix-blend-overlay opacity-30"
            priority
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-slide-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
                <span className="w-2 h-2 bg-[var(--gold)] rounded-full mr-2" />
                Clinica de Empresas
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Potencia tu{" "}
                <span className="text-[var(--gold)]">Empresa</span> con
                Nosotros
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                Somos tu socio de confianza para el exito empresarial. Ofrecemos
                soluciones integrales que aseguran procesos eficientes y
                resultados medibles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[var(--secondary)] text-white rounded-full font-semibold hover:bg-[var(--secondary)]/90 transition-all shadow-lg shadow-[var(--secondary)]/30 hover:shadow-xl"
                >
                  Solicitar Cotizacion
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/nosotros"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
                >
                  Conocenos
                </Link>
              </div>
            </div>

            <div className="hidden lg:block relative animate-slide-right">
              <div className="relative w-full h-[500px]">
                <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--gold)]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--secondary)]/20 rounded-full blur-3xl" />
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Equipo de trabajo"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[var(--gray-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--secondary)]/10 text-[var(--secondary)] rounded-full text-sm font-medium mb-4">
              Nuestros Servicios
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-4">
              Soluciones Integrales para tu Negocio
            </h2>
            <p className="text-[var(--gray-600)] max-w-2xl mx-auto">
              Adaptamos nuestros servicios a las necesidades especificas de cada
              cliente, proporcionando soluciones personalizadas que generan valor.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-[var(--gold)]/10 rounded-full blur-3xl" />
              <div className="relative grid grid-cols-2 gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80"
                  alt="Reunion de negocios"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-xl col-span-1 object-cover h-[400px]"
                />
                <div className="col-span-1 space-y-4">
                  <Image
                    src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&q=80"
                    alt="Trabajo en equipo"
                    width={300}
                    height={190}
                    className="rounded-2xl shadow-xl object-cover h-[190px]"
                  />
                  <div className="bg-[var(--primary)] rounded-2xl p-6 text-white">
                    <div className="text-4xl font-bold text-[var(--gold)] mb-2">
                      10+
                    </div>
                    <div className="text-sm text-white/80">
                      Anos de experiencia
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block px-4 py-2 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm font-medium mb-4">
                Sobre Nosotros
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-6">
                Tu Socio de Confianza para el Exito Empresarial
              </h2>
              <p className="text-[var(--gray-600)] mb-6 leading-relaxed">
                Somos una empresa especializada en ofrecer servicios integrales de
                asesoramiento empresarial, abarcando una amplia gama de areas
                esenciales para el crecimiento y sostenibilidad de su negocio.
              </p>
              <p className="text-[var(--gray-600)] mb-8 leading-relaxed">
                Nuestro equipo esta compuesto por profesionales altamente
                capacitados y dedicados a brindar la mejor atencion. Nos
                comprometemos a ser un socio de confianza, dedicado a facilitar el
                exito empresarial a largo plazo.
              </p>

              {/* Values */}
              <div className="flex flex-wrap gap-3 mb-8">
                {values.map((value) => (
                  <span
                    key={value.name}
                    className="px-4 py-2 bg-[var(--gray-100)] text-[var(--gray-700)] rounded-full text-sm font-medium"
                  >
                    {value.name}
                  </span>
                ))}
              </div>

              <Link
                href="/nosotros"
                className="inline-flex items-center text-[var(--secondary)] font-semibold hover:text-[var(--secondary)]/80 transition-colors"
              >
                Conoce mas sobre nosotros
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-[var(--primary)] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--gold)]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              Nuestra Mision
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Dedicados al{" "}
              <span className="text-[var(--gold)]">Empoderamiento</span> y Exito
              de Nuestros Clientes
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Somos una consultora empresarial dedicada al empoderamiento y exito
              de nuestros clientes. Ofrecemos soluciones integrales que aseguran
              procesos eficientes, contabilidad a tiempo, seguridad tributaria y
              una gestion excepcional en marketing y talento humano. Cumplimos con
              las normativas vigentes y priorizamos la excelencia en el servicio.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[var(--gold)]/10 text-[var(--gold)] rounded-full text-sm font-medium mb-4">
              Nuestros Clientes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)]">
              Empresas que Confian en Nosotros
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center">
            {clients.map((client) => (
              <div
                key={client}
                className="px-8 py-4 bg-[var(--gray-50)] rounded-xl text-[var(--gray-600)] font-medium hover:bg-[var(--gray-100)] transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[var(--secondary)] to-[var(--gold)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Listo para Potenciar tu Empresa?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contactanos hoy mismo y descubre como podemos ayudarte a alcanzar
              tus objetivos empresariales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--secondary)] rounded-full font-semibold hover:bg-white/90 transition-all shadow-lg"
              >
                Contactar Ahora
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <a
                href="tel:+51920220050"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +51 920 220 050
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
