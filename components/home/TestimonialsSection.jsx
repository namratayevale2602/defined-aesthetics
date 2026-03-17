"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import DiamondLineDoodle from "@/components/doodles/DiamondLineDoodle";
import FloralDoodle from "@/components/doodles/FloralDoodle";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: "var(--cream)" }}>
      <div className="absolute bottom-8 right-0 opacity-[0.04] pointer-events-none select-none" style={{ color: "var(--green)" }}>
        <FloralDoodle size={320} />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            Client Love
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cormorant font-semibold mb-4" style={{ color: "var(--green)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            What Our Clients Say
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center" style={{ color: "var(--gold)" }}>
            <DiamondLineDoodle width={180} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
              style={{ border: "1px solid rgba(201,164,53,0.15)" }}>
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, s) => (
                  <Star key={s} size={14} fill="#C9A435" color="#C9A435" />
                ))}
              </div>
              {/* Quote mark */}
              <div className="font-cormorant text-5xl leading-none mb-2 opacity-30" style={{ color: "var(--gold)" }}>&ldquo;</div>
              {/* Review text */}
              <p className="font-jost font-light text-sm leading-relaxed mb-6 flex-1" style={{ color: "#555" }}>
                {t.text}
              </p>
              {/* Client info */}
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "rgba(201,164,53,0.2)" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
                  style={{ background: "var(--green)", color: "var(--gold)", fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-jost text-sm font-medium" style={{ color: "var(--green)" }}>{t.name}</div>
                  <div className="font-jost text-xs" style={{ color: "var(--gold)" }}>{t.service} · {t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
