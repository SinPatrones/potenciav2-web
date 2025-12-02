import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talento Humano | Potencia V2",
  description:
    "Servicios de gestion de talento humano: reclutamiento, perfiles de puesto, clima laboral, politicas de incentivos y coaching de equipos.",
};

const services = [
  {
    category: "Equipo de Trabajo Eficiente",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    items: [
      "Elaboracion de perfiles de puesto",
      "Servicios de reclutamiento de personal",
      "Medicion de clima y satisfaccion laboral",
      "Elaboracion de politicas de incentivos",
    ],
  },
  {
    category: "Talleres y Capacitaciones",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    items: [
      "Plan de talento humano",
      "Coaching de equipos",
    ],
  },
];

const benefits = [
  {
    title: "Equipos Productivos",
    description: "Construye equipos de alto rendimiento con el talento adecuado",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Mejor Clima Laboral",
    description: "Fomenta un ambiente de trabajo positivo y motivador",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Menor Rotacion",
    description: "Retén a tus mejores talentos con estrategias efectivas",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const process = [
  {
    step: 1,
    title: "Diagnostico",
    description:
      "Evaluamos la situacion actual de tu equipo y las necesidades de talento.",
  },
  {
    step: 2,
    title: "Planificacion",
    description:
      "Disenamos un plan personalizado de gestion de talento humano.",
  },
  {
    step: 3,
    title: "Implementacion",
    description:
      "Ejecutamos las estrategias de reclutamiento, capacitacion e incentivos.",
  },
  {
    step: 4,
    title: "Seguimiento",
    description:
      "Medimos resultados y ajustamos las estrategias para mejora continua.",
  },
];

export default function TalentoHumanoPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-[var(--gold)]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Talento Humano"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-[var(--primary)]/70 text-sm">
                <li>
                  <Link href="/" className="hover:text-[var(--primary)]">
                    Inicio
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <span className="text-[var(--primary)]">Talento Humano</span>
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--primary)] mb-6">
              Talento Humano
            </h1>
            <p className="text-xl text-[var(--primary)]/80 mb-8">
              El capital humano es el activo mas valioso de tu empresa.
              Construye equipos de alto rendimiento con nuestros servicios de
              gestion de talento.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-[var(--primary)] text-white rounded-full font-semibold hover:bg-[var(--primary-light)] transition-all shadow-lg"
            >
              Potenciar mi Equipo
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

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 p-6 bg-[var(--gray-50)] rounded-2xl"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--gold)]/20 flex items-center justify-center text-[var(--gold)] flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--primary)] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[var(--gray-600)] text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-[var(--gray-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-4">
              Servicios de Gestion de Talento
            </h2>
            <p className="text-[var(--gray-600)] max-w-2xl mx-auto">
              Desde el reclutamiento hasta el desarrollo de tu equipo,
              acompanamos cada etapa del ciclo de vida del colaborador.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service) => (
              <div
                key={service.category}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--gold)] flex items-center justify-center text-[var(--primary)] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-4">
                  {service.category}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[var(--success)] mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[var(--gray-600)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-[var(--gray-600)] max-w-2xl mx-auto">
              Un enfoque estructurado para transformar la gestion de talento en
              tu empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-[var(--gray-200)]" />
                )}
                <div className="relative bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--gold)] text-[var(--primary)] flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-[var(--primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--gray-600)] text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + Content Section */}
      <section className="py-24 bg-[var(--gray-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Coaching de equipos"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-[var(--gold)] text-[var(--primary)] p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm">Satisfaccion del equipo</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-6">
                Coaching y Desarrollo de Equipos
              </h2>
              <p className="text-[var(--gray-600)] mb-6 leading-relaxed">
                Un equipo motivado y bien capacitado es la clave del exito
                empresarial. Nuestros programas de coaching estan disenados para
                desarrollar las habilidades de liderazgo y trabajo en equipo de
                tus colaboradores.
              </p>
              <p className="text-[var(--gray-600)] mb-8 leading-relaxed">
                Trabajamos con metodologias probadas para mejorar la
                comunicacion, resolver conflictos y alinear a tu equipo con los
                objetivos de la empresa.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-[var(--gold)]/20 rounded-full">
                  <span className="text-[var(--primary)] font-medium">
                    Liderazgo
                  </span>
                </div>
                <div className="px-6 py-3 bg-[var(--gold)]/20 rounded-full">
                  <span className="text-[var(--primary)] font-medium">
                    Comunicacion
                  </span>
                </div>
                <div className="px-6 py-3 bg-[var(--gold)]/20 rounded-full">
                  <span className="text-[var(--primary)] font-medium">
                    Trabajo en equipo
                  </span>
                </div>
                <div className="px-6 py-3 bg-[var(--gold)]/20 rounded-full">
                  <span className="text-[var(--primary)] font-medium">
                    Motivacion
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--gold)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-[var(--primary)]">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Listo para potenciar tu equipo?
              </h2>
              <p className="text-[var(--primary)]/80">
                Construye equipos de alto rendimiento con nuestro apoyo experto.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-[var(--primary)] text-white rounded-full font-semibold hover:bg-[var(--primary-light)] transition-all shadow-lg whitespace-nowrap"
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
