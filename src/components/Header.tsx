"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  {
    name: "Servicios",
    href: "#",
    children: [
      { name: "Contabilidad y Tributacion", href: "/servicios/contabilidad" },
      { name: "Asesoria Legal", href: "/servicios/legal" },
      { name: "Marketing Empresarial", href: "/servicios/marketing" },
      { name: "Talento Humano", href: "/servicios/talento-humano" },
    ],
  },
  { name: "Bolsa de Trabajo", href: "/bolsa-trabajo" },
  { name: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo con animación navideña */}
          <Link href="/" className="flex items-center gap-3 group christmas-logo">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-[var(--secondary)] ring-offset-2 christmas-glow">
                <Image
                  src="/images/potencia_v2_logo.jpg"
                  alt="Potencia V2 Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Copos de nieve decorativos */}
              <span className="snowflake snowflake-1">*</span>
              <span className="snowflake snowflake-2">*</span>
              <span className="snowflake snowflake-3">*</span>
            </div>
            <div className="flex flex-col relative">
              <span className="font-bold text-lg sm:text-xl text-[var(--primary)] christmas-text">
                POTENCIA V2
              </span>
              <span className="text-[10px] sm:text-xs text-[var(--gray-500)]">
                Clinica de Empresas
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 text-[var(--gray-700)] hover:text-[var(--secondary)] font-medium transition-colors">
                    {item.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 pt-2 w-64">
                      <div className="bg-white rounded-xl shadow-xl border border-[var(--gray-100)] py-2 animate-fade-in">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-3 text-[var(--gray-700)] hover:bg-[var(--gray-50)] hover:text-[var(--secondary)] transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[var(--gray-700)] hover:text-[var(--secondary)] font-medium transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
            <Link
              href="/contacto"
              className="px-6 py-2.5 bg-[var(--secondary)] text-white rounded-full font-medium hover:bg-[var(--secondary)]/90 transition-colors shadow-lg shadow-[var(--secondary)]/30"
            >
              Cotizar Ahora
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[var(--gray-700)] hover:bg-[var(--gray-100)]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[var(--gray-100)] animate-fade-in">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-[var(--gray-700)] font-medium"
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="pl-8 bg-[var(--gray-50)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-3 text-[var(--gray-600)] hover:text-[var(--secondary)]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-[var(--gray-700)] font-medium hover:text-[var(--secondary)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="px-4 pt-4">
              <Link
                href="/contacto"
                className="block w-full text-center px-6 py-3 bg-[var(--secondary)] text-white rounded-full font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cotizar Ahora
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
