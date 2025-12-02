import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | Potencia V2 - Clinica de Empresas",
  description:
    "Conoce a Potencia V2, tu socio de confianza para el exito empresarial. Mas de 10 anos de experiencia en asesoria empresarial integral.",
};

const values = [
  {
    name: "Puntualidad",
    description: "Cumplimos con los plazos establecidos y respetamos tu tiempo.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    name: "Formalidad",
    description: "Trabajamos con seriedad y profesionalismo en cada proyecto.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    name: "Calidad",
    description: "Entregamos resultados que superan las expectativas.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
  {
    name: "Profesionalismo",
    description:
      "Contamos con expertos certificados en cada area de servicio.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "Respeto",
    description:
      "Valoramos a cada cliente y tratamos sus proyectos con dedicacion.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: "10+", label: "Anos de experiencia" },
  { value: "500+", label: "Clientes satisfechos" },
  { value: "1000+", label: "Proyectos completados" },
  { value: "100%", label: "Compromiso" },
];

const clients = [
  "Happy Api",
  "Bitel",
  "RE/MAX",
  "Wade Rain - Sistemas de Riego",
  "Questdor",
  "Alerta Arequipa",
  "La Casa de la Salchipapa",
];

export default function NosotrosPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 gradient-hero">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
            alt="Equipo Potencia V2"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-white/70 text-sm">
                <li>
                  <Link href="/" className="hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <span className="text-white">Nosotros</span>
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Conoce a Potencia V2
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Somos tu socio de confianza para el exito empresarial. Mas de una
              decada ayudando a empresas a crecer y prosperar.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-[var(--gold)]/10 rounded-full blur-3xl" />
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Equipo de trabajo"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-xl object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-[var(--primary)] text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-4xl font-bold text-[var(--gold)]">10+</div>
                  <div className="text-sm text-white/80">
                    Anos de experiencia
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block px-4 py-2 bg-[var(--secondary)]/10 text-[var(--secondary)] rounded-full text-sm font-medium mb-4">
                Quienes Somos
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-6">
                Clinica de Empresas
              </h2>
              <p className="text-[var(--gray-600)] mb-6 leading-relaxed">
                Somos una empresa especializada en ofrecer servicios integrales
                de asesoramiento empresarial, abarcando una amplia gama de areas
                esenciales para el crecimiento y sostenibilidad de su negocio.
              </p>
              <p className="text-[var(--gray-600)] mb-6 leading-relaxed">
                Nuestro equipo esta compuesto por profesionales altamente
                capacitados y dedicados a brindar la mejor atencion. Adaptamos
                nuestros servicios a las necesidades especificas de cada
                cliente, proporcionando soluciones personalizadas que generan
                valor y resultados medibles.
              </p>
              <p className="text-[var(--gray-600)] leading-relaxed">
                Nos comprometemos a ser un socio de confianza, dedicado a
                facilitar el exito empresarial a largo plazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-[var(--gold)] mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-[var(--gray-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm font-medium mb-4">
              Nuestra Mision
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-8">
              Dedicados al Empoderamiento y Exito de Nuestros Clientes
            </h2>
            <p className="text-lg text-[var(--gray-600)] leading-relaxed">
              Somos una consultora empresarial dedicada al empoderamiento y
              exito de nuestros clientes. Ofrecemos soluciones integrales que
              aseguran procesos eficientes, contabilidad a tiempo, seguridad
              tributaria y una gestion excepcional en marketing y talento
              humano. Cumplimos con las normativas vigentes y priorizamos la
              excelencia en el servicio, fomentando el crecimiento y la
              confianza sostenible de las empresas que confian en nosotros.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--gold)]/10 text-[var(--gold)] rounded-full text-sm font-medium mb-4">
              Nuestros Valores
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-4">
              Lo que nos Define
            </h2>
            <p className="text-[var(--gray-600)] max-w-2xl mx-auto">
              Nuestros valores son la base de todo lo que hacemos y guian cada
              interaccion con nuestros clientes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.name}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--secondary)] to-[var(--gold)] flex items-center justify-center text-white mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                  {value.name}
                </h3>
                <p className="text-[var(--gray-600)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-[var(--gray-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium mb-4">
              Nuestros Clientes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-4">
              Empresas que Confian en Nosotros
            </h2>
            <p className="text-[var(--gray-600)] max-w-2xl mx-auto">
              Hemos tenido el privilegio de trabajar con empresas de diversos
              sectores, ayudandolas a alcanzar sus objetivos.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {clients.map((client) => (
              <div
                key={client}
                className="px-8 py-5 bg-white rounded-xl shadow-md text-[var(--gray-700)] font-medium hover:shadow-lg transition-shadow"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-[var(--secondary)]/10 text-[var(--secondary)] rounded-full text-sm font-medium mb-4">
                Nuestro Equipo
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-6">
                Profesionales Comprometidos con tu Exito
              </h2>
              <p className="text-[var(--gray-600)] mb-6 leading-relaxed">
                Nuestro equipo esta conformado por contadores, abogados,
                especialistas en marketing y gestores de talento humano, todos
                con amplia experiencia en el mercado peruano.
              </p>
              <p className="text-[var(--gray-600)] mb-8 leading-relaxed">
                Nos mantenemos constantemente actualizados en las normativas y
                tendencias del mercado para brindarte el mejor servicio posible.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center text-[var(--secondary)] font-semibold hover:text-[var(--secondary)]/80 transition-colors"
              >
                Trabaja con nosotros
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
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80"
                alt="Miembro del equipo"
                width={300}
                height={350}
                className="rounded-2xl shadow-lg object-cover w-full h-[280px]"
              />
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                alt="Miembro del equipo"
                width={300}
                height={350}
                className="rounded-2xl shadow-lg object-cover w-full h-[280px] mt-8"
              />
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                alt="Miembro del equipo"
                width={300}
                height={350}
                className="rounded-2xl shadow-lg object-cover w-full h-[280px] -mt-8"
              />
              <Image
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
                alt="Miembro del equipo"
                width={300}
                height={350}
                className="rounded-2xl shadow-lg object-cover w-full h-[280px]"
              />
            </div>
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
          </div>
        </div>
      </section>
    </div>
  );
}
