import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asesoria Legal | Potencia V2",
  description:
    "Servicios de asesoria legal empresarial. Constitucion de empresas, contratos, cambios societarios y tramites SUNARP.",
};

const services = [
  {
    category: "Formalizacion de Empresas",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    items: [
      "Constitucion de empresas",
      "Cambio de gerentes",
      "Aumento de capital",
      "Cambios societarios en general",
    ],
  },
  {
    category: "Contratos",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    items: [
      "Elaboracion de contratos laborales",
      "Contratos de arrendamiento",
      "Contratos comerciales",
    ],
  },
  {
    category: "Otros Servicios Legales",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
    items: [
      "Gestion de tramites en SUNARP",
      "Gestion de sucesion intestada",
    ],
  },
];

const benefits = [
  {
    title: "Seguridad Juridica",
    description: "Protege tu empresa con documentos legales bien estructurados",
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
    title: "Asesoria Personalizada",
    description: "Cada caso es unico, por eso adaptamos nuestros servicios",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
  },
  {
    title: "Tramites Agiles",
    description: "Gestionamos todos los procesos de manera eficiente",
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
];

export default function LegalPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-[var(--primary)]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
            alt="Asesoria Legal"
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
                  <span className="text-white">Asesoria Legal</span>
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Asesoria Legal Empresarial
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Protege tu empresa con nuestros servicios legales especializados.
              Constitucion, contratos, cambios societarios y tramites ante
              SUNARP con profesionales expertos.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-[var(--secondary)] text-white rounded-full font-semibold hover:bg-[var(--secondary)]/90 transition-all shadow-lg"
            >
              Consultar Ahora
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
                <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] flex-shrink-0">
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
              Servicios Legales
            </h2>
            <p className="text-[var(--gray-600)] max-w-2xl mx-auto">
              Cubrimos todas las necesidades legales de tu empresa, desde la
              constitucion hasta la gestion de cambios societarios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.category}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--primary)] flex items-center justify-center text-white mb-6">
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Proceso legal"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-[var(--primary)] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-white/80">Empresas constituidas</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-6">
                Tu Empresa en Regla
              </h2>
              <p className="text-[var(--gray-600)] mb-6 leading-relaxed">
                La formalizacion de tu empresa es el primer paso hacia el exito.
                Te acompanamos en todo el proceso de constitucion, asegurandonos
                de que cada documento este en orden.
              </p>
              <p className="text-[var(--gray-600)] mb-8 leading-relaxed">
                Nuestros abogados especializados en derecho empresarial te guian
                en cada etapa, desde la eleccion del tipo societario hasta la
                inscripcion en SUNARP.
              </p>

              <div className="space-y-4">
                {[
                  "Asesoria en eleccion de tipo societario",
                  "Elaboracion de minutas y estatutos",
                  "Inscripcion en Registros Publicos",
                  "Obtencion de RUC y licencias",
                ].map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <span className="text-[var(--gray-700)]">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Necesitas asesoria legal?
              </h2>
              <p className="text-white/80">
                Protege tu empresa con nuestros servicios legales especializados.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-[var(--secondary)] text-white rounded-full font-semibold hover:bg-[var(--secondary)]/90 transition-all shadow-lg whitespace-nowrap"
            >
              Consultar Ahora
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
