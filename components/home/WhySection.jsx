"use client";

import { motion } from "framer-motion";
import { whyChooseUs } from "@/lib/data";
import DiamondLineDoodle from "@/components/doodles/DiamondLineDoodle";
import SparklesDoodle from "@/components/doodles/SparklesDoodle";

export default function WhySection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: "var(--green)" }}>
      <div className="absolute top-12 right-12 opacity-15 animate-shimmer pointer-events-none select-none" style={{ color: "var(--gold)" }}>
        <SparklesDoodle size={80} />
      </div>
      <div className="absolute bottom-12 left-12 opacity-10 animate-shimmer pointer-events-none select-none" style={{ color: "var(--gold-light)", animationDelay: "1.2s" }}>
        <SparklesDoodle size={55} />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            Why Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cormorant font-semibold mb-4" style={{ color: "var(--gold-light)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            The Defined Aesthetics Difference
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center" style={{ color: "var(--gold)" }}>
            <DiamondLineDoodle width={180} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-7 rounded-2xl transition-all duration-300 hover:bg-white/5"
              style={{ border: "1px solid rgba(201,164,53,0.2)" }}>
              <span className="text-3xl mb-4 block" style={{ color: "var(--gold)" }}>{item.icon}</span>
              <h3 className="font-cormorant font-semibold text-xl mb-3" style={{ color: "var(--gold-light)" }}>
                {item.title}
              </h3>
              <p className="font-jost text-sm leading-relaxed" style={{ color: "rgba(232,213,163,0.7)" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
