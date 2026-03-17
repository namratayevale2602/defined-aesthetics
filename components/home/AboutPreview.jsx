"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import FloralDoodle from "@/components/doodles/FloralDoodle";
import DiamondLineDoodle from "@/components/doodles/DiamondLineDoodle";

const highlights = [
  "Fully customised to your unique facial structure & skin tone",
  "Premium pigments — safe, skin-tested, long-lasting",
  "Dedicated consultation & design session before every procedure",
  "Aftercare support throughout your entire healing journey",
];

export default function AboutPreview() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: "var(--cream)" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Text side */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-jost text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Meet the Artist
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cormorant font-semibold mb-3"
            style={{ color: "var(--green)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            About Mayuri
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
            style={{ color: "var(--gold)" }}
          >
            <DiamondLineDoodle width={160} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-jost font-light text-base leading-relaxed mb-4"
            style={{ color: "#555" }}
          >
            Mayuri Londhe is the founder and lead artist behind Defined MD Aesthetics — Nashik's premium permanent makeup studio dedicated to enhancing natural beauty with precision and artistry.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-jost font-light text-base leading-relaxed mb-8"
            style={{ color: "#555" }}
          >
            With a passion for detail and a commitment to safe, beautiful results, Mayuri specialises in eyebrow techniques, lip blush, scalp micropigmentation, and beauty spot making — tailored specifically for Indian skin tones.
          </motion.p>

          <ul className="space-y-3 mb-10">
            {highlights.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-3 font-jost text-sm"
                style={{ color: "#444" }}
              >
                <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} />
                {item}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-jost text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
              style={{ background: "var(--green)", color: "var(--gold-light)" }}
            >
              Meet Mayuri <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Gold frame */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: "2px solid rgba(201,164,53,0.4)" }}>
            <Image
              src="/images/what_we_do.jpeg"
              alt="Defined MD Aesthetics — services overview by Mayuri Londhe Nashik"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
            />
            {/* Gold corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 rounded-tr-2xl"
              style={{ borderColor: "var(--gold)" }} />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 rounded-bl-2xl"
              style={{ borderColor: "var(--gold)" }} />
          </div>

          {/* Floral doodle overlay */}
          <div className="absolute -bottom-6 -right-6 opacity-20 pointer-events-none" style={{ color: "var(--gold)" }}>
            <FloralDoodle size={100} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
