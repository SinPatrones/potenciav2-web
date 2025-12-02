import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contabilidad y Tributacion | Potencia V2",
  description:
    "Servicios de asesoria contable, tributaria, laboral y financiera. Declaraciones SUNAT, gestion de planillas, liquidaciones y mas.",
};

const services = [
  {
    category: "Asesoria Contable y Tributaria",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    items: [
      "Declaraciones mensuales y anuales",
      "Declaracion de rentas",
      "Tramites de SUNAT",
      "Subsanacion de multas",
      "Reconstruccion contable",
    ],
  },
  {
    category: "Asesoria Laboral",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    items: [
      "Acreditacion de Essalud",
      "Elaboracion de boletas de pago",
      "Elaboracion y calculo de liquidaciones",
      "Beneficios sociales y CTS",
      "Gestion de Planillas",
    ],
  },
  {
    category: "Servicios Financieros",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    items: [
      "Elaboracion de expedientes ITF",
      "Tramites de Essalud",
      "Valorizacion de inventarios",
      "Expedientes para gestionar cuentas corrientes",
    ],
  },
];

const benefits = [
  {
    title: "Cumplimiento Tributario",
    description: "Mantenemos tu empresa al dia con todas las obligaciones fiscales",
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
  {
    title: "Ahorro de Tiempo",
    description: "Nos encargamos de la burocracia para que te enfoques en tu negocio",
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
    title: "Seguridad Financiera",
    description: "Protegemos tu empresa de multas y sanciones tributarias",
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
];

export default function ContabilidadPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-[var(--accent)]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
            alt="Contabilidad"
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
                  <span className="text-white">Contabilidad y Tributacion</span>
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Contabilidad y Tributacion
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Mantene tu empresa al dia con nuestros servicios de asesoria
              contable, tributaria, laboral y financiera. Expertos en normativas
              peruanas y tramites SUNAT.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-[var(--gold)] text-[var(--primary)] rounded-full font-semibold hover:bg-[var(--gold-light)] transition-all shadow-lg"
            >
              Solicitar Asesoria
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
                <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] flex-shrink-0">
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
              Nuestros Servicios Contables
            </h2>
            <p className="text-[var(--gray-600)] max-w-2xl mx-auto">
              Ofrecemos una gama completa de servicios para mantener las
              finanzas de tu empresa en orden.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.category}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--accent)] flex items-center justify-center text-white mb-6">
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

      {/* Image Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-6">
                Expertos en Normativas Peruanas
              </h2>
              <p className="text-[var(--gray-600)] mb-6 leading-relaxed">
                Nuestro equipo de contadores y asesores tributarios cuenta con
                amplia experiencia en la legislacion peruana. Te ayudamos a
                cumplir con todas tus obligaciones fiscales de manera eficiente
                y oportuna.
              </p>
              <p className="text-[var(--gray-600)] mb-8 leading-relaxed">
                Ya sea que necesites apoyo con declaraciones mensuales,
                subsanacion de multas o gestion completa de planillas, estamos
                aqui para ayudarte.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-[var(--accent)]/10 rounded-full">
                  <span className="text-[var(--accent)] font-medium">SUNAT</span>
                </div>
                <div className="px-6 py-3 bg-[var(--accent)]/10 rounded-full">
                  <span className="text-[var(--accent)] font-medium">Essalud</span>
                </div>
                <div className="px-6 py-3 bg-[var(--accent)]/10 rounded-full">
                  <span className="text-[var(--accent)] font-medium">Planillas</span>
                </div>
                <div className="px-6 py-3 bg-[var(--accent)]/10 rounded-full">
                  <span className="text-[var(--accent)] font-medium">CTS</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                alt="Asesoria contable"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[var(--accent)] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-white/80">Cumplimiento fiscal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--accent)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Necesitas asesoria contable?
              </h2>
              <p className="text-white/80">
                Contactanos hoy y mantene tu empresa al dia con sus obligaciones.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-white text-[var(--accent)] rounded-full font-semibold hover:bg-[var(--gray-100)] transition-all shadow-lg whitespace-nowrap"
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
          </div>
        </div>
      </section>
    </div>
  );
}
