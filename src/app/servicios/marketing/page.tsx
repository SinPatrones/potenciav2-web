import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Empresarial | Potencia V2",
  description:
    "Servicios de marketing digital, branding, diseno grafico, gestion de redes sociales y estrategias de contenido para tu empresa.",
};

const services = [
  {
    category: "Disenos y Branding",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    items: [
      "Creacion de logos",
      "Manual de marca",
      "Disenos de banners y tarjetas",
      "Brochure empresarial",
      "Creacion de catalogos",
      "Cartas de presentacion",
    ],
  },
  {
    category: "Gestion de Redes Sociales",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </svg>
    ),
    items: [
      "Estrategias de contenido",
      "Creacion de contenido",
      "Material audiovisual",
      "Analisis de competencias",
      "Analisis de Branding",
      "Estudio de Mercado SMART",
    ],
  },
  {
    category: "Planes Empresariales",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    items: [
      "Estrategias de ventas",
      "Estudio de Mercado SMART",
    ],
  },
];

const benefits = [
  {
    title: "Mayor Visibilidad",
    description: "Aumenta la presencia de tu marca en el mercado digital",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    title: "Identidad Unica",
    description: "Destaca de la competencia con una imagen profesional",
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
    title: "Mas Clientes",
    description: "Atrae nuevos clientes con estrategias efectivas",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default function MarketingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-[var(--secondary)]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
            alt="Marketing Empresarial"
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
                  <span className="text-white">Marketing Empresarial</span>
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Marketing Empresarial
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Impulsa tu marca con estrategias de marketing efectivas. Branding
              profesional, gestion de redes sociales y contenido que conecta con
              tu audiencia.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-white text-[var(--secondary)] rounded-full font-semibold hover:bg-[var(--gray-100)] transition-all shadow-lg"
            >
              Potenciar mi Marca
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
                <div className="w-14 h-14 rounded-xl bg-[var(--secondary)]/10 flex items-center justify-center text-[var(--secondary)] flex-shrink-0">
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
              Servicios de Marketing
            </h2>
            <p className="text-[var(--gray-600)] max-w-2xl mx-auto">
              Desde el diseno de tu identidad visual hasta la gestion completa
              de tus redes sociales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.category}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--secondary)] flex items-center justify-center text-white mb-6">
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

      {/* Portfolio Preview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-6">
                Diseno que Impacta
              </h2>
              <p className="text-[var(--gray-600)] mb-6 leading-relaxed">
                Tu imagen corporativa es la primera impresion que das a tus
                clientes. Creamos disenos profesionales que reflejan la esencia
                de tu marca y conectan con tu publico objetivo.
              </p>
              <p className="text-[var(--gray-600)] mb-8 leading-relaxed">
                Desde logos memorables hasta materiales de marketing completos,
                cada pieza esta disenada para destacar y comunicar tu propuesta
                de valor.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Logos creados", value: "200+" },
                  { label: "Marcas posicionadas", value: "150+" },
                  { label: "Posts mensuales", value: "500+" },
                  { label: "Clientes satisfechos", value: "100%" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[var(--gray-50)] rounded-xl p-4"
                  >
                    <div className="text-2xl font-bold text-[var(--secondary)]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[var(--gray-600)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80"
                alt="Diseno grafico"
                width={300}
                height={300}
                className="rounded-2xl shadow-lg object-cover w-full h-[200px]"
              />
              <Image
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80"
                alt="Branding"
                width={300}
                height={300}
                className="rounded-2xl shadow-lg object-cover w-full h-[200px] mt-8"
              />
              <Image
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80"
                alt="Redes sociales"
                width={300}
                height={300}
                className="rounded-2xl shadow-lg object-cover w-full h-[200px] -mt-8"
              />
              <Image
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&q=80"
                alt="Estrategia digital"
                width={300}
                height={300}
                className="rounded-2xl shadow-lg object-cover w-full h-[200px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--secondary)] to-[var(--gold)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Listo para impulsar tu marca?
              </h2>
              <p className="text-white/90">
                Creamos estrategias de marketing que generan resultados reales.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-white text-[var(--secondary)] rounded-full font-semibold hover:bg-[var(--gray-100)] transition-all shadow-lg whitespace-nowrap"
            >
              Empezar Ahora
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
