"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import SparklesDoodle from "@/components/doodles/SparklesDoodle";
import FloralDoodle from "@/components/doodles/FloralDoodle";
import BrowlineDoodle from "@/components/doodles/BrowlineDoodle";

export default function InstagramCTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: "#F0EAE0" }}>
      <div className="absolute top-8 left-8 opacity-10 pointer-events-none select-none animate-float" style={{ color: "var(--gold)" }}>
        <FloralDoodle size={130} />
      </div>
      <div className="absolute bottom-8 right-8 opacity-10 pointer-events-none select-none animate-shimmer" style={{ color: "var(--gold)" }}>
        <SparklesDoodle size={90} />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            Follow the Journey
          </p>
          <h2 className="font-cormorant font-semibold mb-4" style={{ color: "var(--green)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            See Our Latest Work
          </h2>
          <div className="flex justify-center mb-6" style={{ color: "var(--gold)", opacity: 0.6 }}>
            <BrowlineDoodle width={180} />
          </div>
          <p className="font-jost font-light text-sm leading-relaxed mb-8 max-w-lg mx-auto" style={{ color: "#666" }}>
            Follow{" "}
            <a
              href="https://www.instagram.com/_defined_aesthetics_by_mayuri"
              target="_blank" rel="noopener noreferrer"
              className="font-medium hover:underline transition-colors"
              style={{ color: "var(--green)" }}>
              @_defined_aesthetics_by_mayuri
            </a>{" "}
            on Instagram for the latest transformations, before & afters, and permanent makeup inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/_defined_aesthetics_by_mayuri"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-jost text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ background: "var(--green)", color: "var(--gold-light)" }}>
              <FaInstagram size={18} /> Follow on Instagram
            </a>
            <a
              href="https://wa.me/918422926464"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-jost text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ background: "var(--gold)", color: "var(--green)" }}>
              <FaWhatsapp size={18} /> Book Appointment
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
