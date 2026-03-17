"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SparklesDoodle from "@/components/doodles/SparklesDoodle";
import DiamondLineDoodle from "@/components/doodles/DiamondLineDoodle";

const results = [
  {
    label: "Permanent Eyebrows",
    technique: "Microblading",
    image: "/images/eye_brows_before_after.jpeg",
    caption: "From sparse, undefined brows to bold, natural-looking arches.",
    isComposite: true,
  },
  {
    label: "Lip Blush",
    technique: "Dark Neutralisation",
    beforeImage: "/images/facial_before.jpeg",
    afterImage: "/images/facial_after.jpeg",
    caption: "Deeply pigmented lips transformed to a beautiful natural pink.",
    isComposite: false,
  },
  {
    label: "Lip Blush",
    technique: "Lip Blush Treatment",
    image: "/images/lip_before_after.jpeg",
    caption: "Stunning lip colour enhancement — side by side result.",
    isComposite: true,
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: "var(--green)" }}>
      {/* Sparkle decorations */}
      <div className="absolute top-12 right-12 opacity-20 animate-shimmer pointer-events-none" style={{ color: "var(--gold)" }}>
        <SparklesDoodle size={80} />
      </div>
      <div className="absolute bottom-12 left-12 opacity-15 animate-shimmer pointer-events-none" style={{ color: "var(--gold-light)", animationDelay: "1s" }}>
        <SparklesDoodle size={55} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-jost text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Authentic Client Results
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cormorant font-semibold mb-4"
            style={{ color: "var(--gold-light)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Real Transformations
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
            style={{ color: "var(--gold)" }}
          >
            <DiamondLineDoodle width={180} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-jost font-light text-sm mt-4 max-w-lg mx-auto"
            style={{ color: "rgba(232,213,163,0.7)" }}
          >
            Every result is a real client of Mayuri Londhe at Defined MD Aesthetics, Nashik.
          </motion.p>
        </div>

        {/* Result cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="rounded-2xl overflow-hidden group"
              style={{ border: "1px solid rgba(201,164,53,0.3)" }}
            >
              {/* Service badge */}
              <div className="px-5 py-3 flex items-center justify-between" style={{ background: "rgba(201,164,53,0.1)" }}>
                <span className="font-jost text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>
                  {r.label}
                </span>
                <span className="font-jost text-xs px-3 py-0.5 rounded-full" style={{ background: "var(--gold)", color: "var(--green)" }}>
                  {r.technique}
                </span>
              </div>

              {/* Image */}
              {r.isComposite ? (
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={`${r.label} before and after by Mayuri Londhe, Nashik`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={r.beforeImage}
                      alt={`${r.label} before treatment`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-2 left-2 font-jost text-[10px] tracking-widest uppercase px-2 py-0.5 rounded"
                      style={{ background: "rgba(10,31,23,0.85)", color: "var(--gold-light)" }}>
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={r.afterImage}
                      alt={`${r.label} after treatment`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-2 right-2 font-jost text-[10px] tracking-widest uppercase px-2 py-0.5 rounded"
                      style={{ background: "var(--gold)", color: "var(--green)" }}>
                      After
                    </span>
                  </div>
                </div>
              )}

              {/* Caption */}
              <div className="px-5 py-4" style={{ background: "rgba(255,255,255,0.04)" }}>
                <p className="font-jost text-sm" style={{ color: "rgba(232,213,163,0.75)" }}>{r.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-jost text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
            style={{ background: "var(--gold)", color: "var(--green)" }}
          >
            View Full Gallery <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
