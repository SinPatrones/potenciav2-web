import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Potencia V2 - Clinica de Empresas",
  description:
    "Contacta con Potencia V2 para asesoria empresarial integral. Contabilidad, legal, marketing y talento humano en Arequipa, Peru.",
};

const contactInfo = [
  {
    title: "Telefonos",
    value: ["+51 920 220 050", "+51 992 577 161"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    href: "tel:+51920220050",
  },
  {
    title: "Email",
    value: ["marketingpotenciav2@gmail.com"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    href: "mailto:marketingpotenciav2@gmail.com",
  },
  {
    title: "Direccion",
    value: ["Calle Peral 314, of 402", "Cuarto piso, Arequipa, Peru"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    ),
    href: "https://maps.google.com/?q=Calle+Peral+314+Arequipa+Peru",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    handle: "POTENCIA V2",
    href: "https://facebook.com/POTENCIAV2",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@POTENCIA V2",
    href: "https://instagram.com/POTENCIAV2",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@POTENCIAEMPRESA",
    href: "https://tiktok.com/@POTENCIAEMPRESA",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

const services = [
  { name: "Contabilidad y Tributacion", href: "/servicios/contabilidad" },
  { name: "Asesoria Legal", href: "/servicios/legal" },
  { name: "Marketing Empresarial", href: "/servicios/marketing" },
  { name: "Talento Humano", href: "/servicios/talento-humano" },
];

export default function ContactoPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 gradient-hero">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contacto"
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
                  <span className="text-white">Contacto</span>
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Contactanos
            </h1>
            <p className="text-xl text-white/80">
              Estamos listos para ayudarte a potenciar tu empresa. Contactanos
              hoy mismo y descubre como podemos trabajar juntos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--primary)] mb-6">
                Enviar Mensaje
              </h2>
              <p className="text-[var(--gray-600)] mb-8">
                Completa el formulario y nos pondremos en contacto contigo lo
                antes posible.
              </p>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-[var(--gray-700)] mb-2"
                    >
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--gray-200)] focus:border-[var(--secondary)] focus:ring-2 focus:ring-[var(--secondary)]/20 outline-none transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-sm font-medium text-[var(--gray-700)] mb-2"
                    >
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--gray-200)] focus:border-[var(--secondary)] focus:ring-2 focus:ring-[var(--secondary)]/20 outline-none transition-all"
                      placeholder="+51 999 999 999"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--gray-700)] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--gray-200)] focus:border-[var(--secondary)] focus:ring-2 focus:ring-[var(--secondary)]/20 outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="servicio"
                    className="block text-sm font-medium text-[var(--gray-700)] mb-2"
                  >
                    Servicio de interes
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--gray-200)] focus:border-[var(--secondary)] focus:ring-2 focus:ring-[var(--secondary)]/20 outline-none transition-all bg-white"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service) => (
                      <option key={service.name} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-[var(--gray-700)] mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--gray-200)] focus:border-[var(--secondary)] focus:ring-2 focus:ring-[var(--secondary)]/20 outline-none transition-all resize-none"
                    placeholder="Cuentanos sobre tu proyecto o consulta..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[var(--secondary)] text-white rounded-xl font-semibold hover:bg-[var(--secondary)]/90 transition-all shadow-lg shadow-[var(--secondary)]/30"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--primary)] mb-6">
                Informacion de Contacto
              </h2>
              <p className="text-[var(--gray-600)] mb-8">
                Tambien puedes contactarnos directamente a traves de los
                siguientes medios.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-start gap-4 p-4 bg-[var(--gray-50)] rounded-xl hover:bg-[var(--gray-100)] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--secondary)]/10 flex items-center justify-center text-[var(--secondary)] flex-shrink-0 group-hover:bg-[var(--secondary)] group-hover:text-white transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--primary)] mb-1">
                        {info.title}
                      </h3>
                      {info.value.map((v) => (
                        <p key={v} className="text-[var(--gray-600)] text-sm">
                          {v}
                        </p>
                      ))}
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-[var(--primary)] mb-4">
                  Siguenos en Redes Sociales
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 bg-[var(--gray-50)] rounded-xl hover:bg-[var(--secondary)] hover:text-white transition-colors group"
                    >
                      <span className="text-[var(--secondary)] group-hover:text-white">
                        {social.icon}
                      </span>
                      <div>
                        <div className="text-xs text-[var(--gray-500)] group-hover:text-white/70">
                          {social.name}
                        </div>
                        <div className="text-sm font-medium text-[var(--gray-700)] group-hover:text-white">
                          {social.handle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[var(--gray-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--primary)] mb-4">
              Nuestra Ubicacion
            </h2>
            <p className="text-[var(--gray-600)]">
              Visitanos en nuestras oficinas en el centro de Arequipa.
            </p>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=80"
              alt="Mapa de ubicacion"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[var(--primary)]/60 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 rounded-full bg-[var(--secondary)] flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
                </div>
                <h3 className="text-xl font-bold mb-2">POTENCIA V2</h3>
                <p className="text-white/80 mb-4">
                  Calle Peral 314, of 402
                  <br />
                  Cuarto piso, Arequipa, Peru
                </p>
                <a
                  href="https://maps.google.com/?q=Calle+Peral+314+Arequipa+Peru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-[var(--primary)] rounded-full font-medium hover:bg-[var(--gray-100)] transition-colors"
                >
                  Ver en Google Maps
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
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
                Prefieres una llamada?
              </h2>
              <p className="text-white/80">
                Llamanos directamente y resolvemos tus dudas al instante.
              </p>
            </div>
            <a
              href="tel:+51920220050"
              className="inline-flex items-center px-8 py-4 bg-[var(--gold)] text-[var(--primary)] rounded-full font-semibold hover:bg-[var(--gold-light)] transition-all shadow-lg whitespace-nowrap"
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
      </section>
    </div>
  );
}
