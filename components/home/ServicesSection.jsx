"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import DiamondLineDoodle from "@/components/doodles/DiamondLineDoodle";
import FloralDoodle from "@/components/doodles/FloralDoodle";

const services = [
  {
    slug: "eyebrows",
    icon: "✦",
    title: "Permanent Eyebrows",
    techniques: "Microblading · Ombre · Powder · Combo · Nano",
    desc: "Wake up with perfectly shaped brows every single morning. Each technique is tailored to your unique facial structure and skin type.",
    image: "/images/eye_brows_before_after.jpeg",
    imageAlt: "Permanent eyebrows microblading result — Defined MD Aesthetics Nashik",
  },
  {
    slug: "lip-blush",
    icon: "♡",
    title: "Lip Blush",
    techniques: "Dark Neutralisation · Nude · Baby Rosy · Bold",
    desc: "Enhance your natural lip colour, correct dark pigmentation, and achieve your perfect pout — morning to night, effortlessly.",
    image: "/images/lip_before_after.jpeg",
    imageAlt: "Lip blush treatment result — Defined MD Aesthetics by Mayuri",
  },
  {
    slug: "scalp-micropigmentation",
    icon: "◈",
    title: "Scalp Micropigmentation",
    techniques: "Hairline Restoration · Density · Full Scalp",
    desc: "A non-surgical permanent solution that recreates the look of hair follicles, restoring confidence for men and women.",
    image: "/images/scalpmicropigmentation.webp",
    imageAlt: "Scalp micropigmentation SMP treatment — Defined MD Aesthetics Nashik",
  },
  {
    slug: "beauty-spot",
    icon: "•",
    title: "Beauty Spot Making",
    techniques: "Classic Placement · Custom Position",
    desc: "A timeless, precisely placed beauty mark that adds classic elegance and a signature touch to your natural features.",
    image: "/images/beautyspotmaking.jpg",
    imageAlt: "Permanent beauty spot making — Defined MD Aesthetics by Mayuri Londhe",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: "var(--cream)" }}>
      {/* Background doodle */}
      <div className="absolute top-10 right-0 opacity-[0.04] pointer-events-none" style={{ color: "var(--green)" }}>
        <FloralDoodle size={300} />
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
            style={{ color: "var(--green-light)" }}
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cormorant font-semibold mb-4"
            style={{ color: "var(--green)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Our Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
            style={{ color: "var(--green-light)" }}
          >
            <DiamondLineDoodle width={180} />
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              style={{ border: "1px solid rgba(201,164,53,0.15)" }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={svc.image}
                  alt={svc.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(67, 47, 78) 0%, rgba(12,59,46,0.2) 60%, transparent 100%)" }} />
                {/* Icon + title on image */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-2">
                  <span className="text-2xl mb-1 block" style={{ color: "var(--gold)" }}>{svc.icon}</span>
                  <h3 className="font-cormorant font-semibold text-lg leading-tight" style={{ color: "var(--gold-light)" }}>
                    {svc.title}
                  </h3>
                  <p className="font-jost text-xs mt-0.5 tracking-wide" style={{ color: "rgba(232,213,163,0.65)" }}>
                    {svc.techniques}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="px-5 py-5">
                <p className="font-jost text-sm leading-relaxed mb-4" style={{ color: "#555" }}>
                  {svc.desc}
                </p>
                <Link
                  href={`/services/${svc.slug}`}
                  className="inline-flex items-center gap-2 font-jost text-xs tracking-widest uppercase font-medium transition-all duration-200 group-hover:gap-3"
                  style={{ color: "var(--green)" }}
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>

              {/* Gold bottom line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: "var(--gold)" }} />
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-jost text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
            style={{ background: "var(--green)", color: "var(--gold-light)" }}
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
