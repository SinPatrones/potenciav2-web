import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  imageUrl: string;
  color: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
  imageUrl,
  color,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            className="absolute inset-0 opacity-60"
            style={{ backgroundColor: color }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Icon */}
          <div
            className="absolute bottom-4 left-4 w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg"
            style={{ backgroundColor: color }}
          >
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-[var(--primary)] mb-2 group-hover:text-[var(--secondary)] transition-colors">
            {title}
          </h3>
          <p className="text-[var(--gray-600)] text-sm leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex items-center text-[var(--secondary)] font-medium text-sm">
            <span>Ver mas</span>
            <svg
              className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2"
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
          </div>
        </div>

        {/* Decorative corner */}
        <div
          className="absolute top-0 right-0 w-20 h-20 opacity-10"
          style={{
            background: `linear-gradient(135deg, ${color} 0%, transparent 100%)`,
          }}
        />
      </div>
    </Link>
  );
}
