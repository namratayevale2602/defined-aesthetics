"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/data";
import DiamondLineDoodle from "@/components/doodles/DiamondLineDoodle";
import LeafSprayDoodle from "@/components/doodles/LeafSprayDoodle";

export default function ProcessSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: "#F4EFE8" }}>
      <div className="absolute top-0 left-0 opacity-[0.04] pointer-events-none select-none" style={{ color: "var(--green)" }}>
        <LeafSprayDoodle size={280} />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--green-light)" }}>
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cormorant font-semibold mb-4" style={{ color: "var(--green)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Your Journey to Defined Beauty
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center" style={{ color: "var(--green-light)" }}>
            <DiamondLineDoodle width={180} />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          {process.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative text-center group"
            >
              {/* Connector line */}
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+32px)] right-[-50%] h-[1px] opacity-20"
                  style={{ background: "var(--gold)" }} />
              )}
              <div
                className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center text-lg font-semibold transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(201,164,53,0.15)", color: "var(--green)", fontFamily: "var(--font-cormorant)", border: "1.5px solid rgba(201,164,53,0.3)" }}>
                {step.step}
              </div>
              <h3 className="font-cormorant font-semibold text-base mb-2" style={{ color: "var(--green)" }}>
                {step.title}
              </h3>
              <p className="font-jost text-xs leading-relaxed" style={{ color: "#777" }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
