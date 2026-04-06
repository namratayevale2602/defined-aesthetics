import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import FloralDoodle from "@/components/doodles/FloralDoodle";
import LogoSVG from "@/components/Logo/LogoSVG";
import { services } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "#432F4F" }}
    >
      {/* Decorative doodle */}
      <div className="absolute top-8 right-8 opacity-10 pointer-events-none select-none">
        <FloralDoodle size={160} className="text-[#D8D1BE]" />
      </div>
      <div className="absolute bottom-16 left-4 opacity-5 pointer-events-none select-none">
        <FloralDoodle size={120} className="text-[#e6e2da]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link
            href="/"
            className="flex items-center flex-shrink-0"
            aria-label="Defined Aesthetics by Mayuri — Home"
          >
            <Image
              src="/logo/definedaestheticwhite.png"
              alt="Defined Aesthetics Logo"
              width={180}
              height={50}
              priority
              className="h-auto w-auto max-h-50"
            />
          </Link>
            <p
              className="text-[#e6e2da]/70 text-sm leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-jost), sans-serif" }}
            >
              Nashik&apos;s premier permanent makeup studio. Expert microblading, ombre brows, lip blush, scalp micropigmentation — each treatment crafted to your unique beauty.
            </p>
            <p
              className="text-[#D8D1BE] text-sm italic mb-5"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              &ldquo;Defined Beauty. Lasting Confidence.&rdquo;
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/_defined_aesthetics_by_mayuri"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#D8D1BE] text-[#e6e2da] hover:text-[#0C3B2E] transition-all duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://wa.me/918422926464"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#25D366] text-[#e6e2da] hover:text-white transition-all duration-200"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3
              className="text-[#D8D1BE] text-base font-semibold mb-5 pb-3 border-b border-[#D8D1BE]/20"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[#e6e2da]/75 hover:text-[#D8D1BE] text-sm transition-colors duration-200 flex items-center gap-2"
                    style={{ fontFamily: "var(--font-jost), sans-serif" }}
                  >
                    <span className="text-[#D8D1BE]/50 text-xs">✦</span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h3
              className="text-[#D8D1BE] text-base font-semibold mb-5 pb-3 border-b border-[#D8D1BE]/20"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Mayuri", href: "/about" },
                { label: "All Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "Blog", href: "/blog" },
                { label: "Book Appointment", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#e6e2da]/75 hover:text-[#D8D1BE] text-sm transition-colors duration-200 flex items-center gap-2"
                    style={{ fontFamily: "var(--font-jost), sans-serif" }}
                  >
                    <span className="text-[#D8D1BE]/50 text-xs">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3
              className="text-[#D8D1BE] text-base font-semibold mb-5 pb-3 border-b border-[#D8D1BE]/20"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+918422926464"
                  className="flex items-start gap-3 text-[#e6e2da]/75 hover:text-[#D8D1BE] text-sm transition-colors"
                  style={{ fontFamily: "var(--font-jost), sans-serif" }}
                >
                  <FaPhone className="mt-0.5 text-[#D8D1BE]/70 flex-shrink-0" size={13} />
                  +91 8422926464
                </a>
              </li>
              <li>
                <a
                  href="mailto:definedaestheticsbymayuri@gmail.com"
                  className="flex items-start gap-3 text-[#e6e2da]/75 hover:text-[#D8D1BE] text-sm transition-colors break-all"
                  style={{ fontFamily: "var(--font-jost), sans-serif" }}
                >
                  <FaEnvelope className="mt-0.5 text-[#D8D1BE]/70 flex-shrink-0" size={13} />
                  definedaestheticsbymayuri@gmail.com
                </a>
              </li>
              <li>
                <span
                  className="flex items-start gap-3 text-[#e6e2da]/75 text-sm"
                  style={{ fontFamily: "var(--font-jost), sans-serif" }}
                >
                  <FaMapMarkerAlt className="mt-0.5 text-[#D8D1BE]/70 flex-shrink-0" size={13} />
                  Nashik, Maharashtra, India
                </span>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/_defined_aesthetics_by_mayuri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[#e6e2da]/75 hover:text-[#D8D1BE] text-sm transition-colors"
                  style={{ fontFamily: "var(--font-jost), sans-serif" }}
                >
                  <FaInstagram className="mt-0.5 text-[#D8D1BE]/70 flex-shrink-0" size={13} />
                  @_defined_aesthetics_by_mayuri
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <a
                href="https://wa.me/918422926464"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D8D1BE] text-[#0C3B2E] text-sm font-semibold hover:bg-[#e6e2da] transition-colors duration-200"
                style={{ fontFamily: "var(--font-jost), sans-serif" }}
              >
                <FaWhatsapp size={15} />
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#D8D1BE]/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-[#e6e2da]/50 text-xs text-center sm:text-left"
            style={{ fontFamily: "var(--font-jost), sans-serif" }}
          >
            &copy; {year} Defined MD Aesthetics by Mayuri. All rights reserved.
          </p>
          <p
            className="text-[#e6e2da]/40 text-xs"
            style={{ fontFamily: "var(--font-jost), sans-serif" }}
          >
            Permanent Makeup Studio · Nashik, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
}
