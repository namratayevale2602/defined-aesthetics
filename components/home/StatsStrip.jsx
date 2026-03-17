"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "200+", label: "Happy Clients" },
  { value: "4", label: "Signature Techniques" },
  { value: "Since 2022", label: "Serving Nashik" },
  { value: "5★", label: "Rated Results" },
];

export default function StatsStrip() {
  return (
    <section className="py-12 px-6" style={{ background: "var(--green)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center">
              <div
                className="font-cormorant font-bold mb-1"
                style={{ color: "var(--gold)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
                {stat.value}
              </div>
              <div className="font-jost text-xs tracking-widest uppercase" style={{ color: "rgba(232,213,163,0.65)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
