"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteSEO } from "@/utils/seoConfig";

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp — bottom right */}
      <a
        href={siteSEO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-pulse-ring" />
        <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
          <FaWhatsapp size={26} />
        </span>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#1A1A1A] text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Chat with us
        </span>
      </a>

      {/* Call — bottom left */}
      <a
        href={`tel:${siteSEO.phone}`}
        aria-label="Call us"
        className="fixed bottom-6 left-6 z-50 group"
      >
        <span className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"
          style={{ background: "var(--gold)" }}>
          <Phone size={22} color="#0C3B2E" strokeWidth={2.5} />
        </span>
        <span className="absolute left-16 top-1/2 -translate-y-1/2 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
          style={{ background: "var(--dark)" }}>
          Call Mayuri
        </span>
      </a>
    </>
  );
}
