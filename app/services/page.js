"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import DiamondLineDoodle from "@/components/doodles/DiamondLineDoodle";
import FloralDoodle from "@/components/doodles/FloralDoodle";
import SparklesDoodle from "@/components/doodles/SparklesDoodle";
import BrowlineDoodle from "@/components/doodles/BrowlineDoodle";
import { services, whyChooseUs } from "@/lib/data";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative pt-32 pb-24 px-6 overflow-hidden flex items-center justify-center text-center"
        style={{ background: "linear-gradient(160deg, #432F4F 0%, #432F4F 50%, #432F4F 100%)", minHeight: "52vh" }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(201,164,53,0.1) 0%, transparent 70%)" }} />
        <div className="absolute top-24 right-10 opacity-20 animate-shimmer pointer-events-none" style={{ color: "var(--gold)" }}>
          <SparklesDoodle size={70} />
        </div>
        <div className="absolute bottom-16 left-10 opacity-10 animate-float pointer-events-none" style={{ color: "var(--gold)" }}>
          <FloralDoodle size={100} />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="font-cormorant font-semibold mb-4"
            style={{ color: "var(--gold)", fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}>
            Our Services
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-5 opacity-50" style={{ color: "var(--gold)" }}>
            <BrowlineDoodle width={180} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="font-jost font-light text-sm max-w-lg mx-auto" style={{ color: "rgba(232,213,163,0.75)" }}>
            Premium permanent makeup treatments by Mayuri Londhe — each one tailored to your features, skin tone, and lifestyle.
          </motion.p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc, i) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400"
                style={{ border: "1px solid rgba(201,164,53,0.15)" }}>
                {/* Green header */}
                <div className="px-8 pt-10 pb-8 relative overflow-hidden" style={{ background: "var(--green)" }}>
                  <div className="absolute top-4 right-4 opacity-10 pointer-events-none" style={{ color: "var(--gold)" }}>
                    <FloralDoodle size={80} />
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-4xl mt-1 flex-shrink-0" style={{ color: "var(--gold)" }}>{svc.icon}</span>
                    <div>
                      <h2 className="font-cormorant font-semibold text-2xl md:text-3xl leading-tight mb-2" style={{ color: "var(--gold-light)" }}>
                        {svc.title}
                      </h2>
                      <p className="font-cormorant italic text-base" style={{ color: "rgba(232,213,163,0.65)" }}>
                        &ldquo;{svc.tagline}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
                {/* Body */}
                <div className="px-8 py-7">
                  <p className="font-jost font-light text-sm leading-relaxed mb-6" style={{ color: "#555" }}>
                    {svc.description}
                  </p>
                  {/* Techniques list */}
                  <div className="mb-6">
                    <p className="font-jost text-xs tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>
                      Techniques
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {svc.techniques.map((t) => (
                        <span
                          key={t.name}
                          className="font-jost text-xs px-3 py-1 rounded-full"
                          style={{ background: "rgba(12,59,46,0.07)", color: "var(--green)", border: "1px solid rgba(201,164,53,0.2)" }}>
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-jost text-xs tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
                      style={{ background: "var(--green)", color: "var(--gold-light)" }}>
                      Learn More <ArrowRight size={14} />
                    </Link>
                    <a
                      href="https://wa.me/918422926464"
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-jost text-xs tracking-widest uppercase font-medium border transition-all duration-300 hover:scale-105"
                      style={{ borderColor: "var(--green)", color: "var(--green)" }}>
                      <FaWhatsapp size={13} /> Book
                    </a>
                  </div>
                </div>
                {/* Gold bottom hover line */}
                <div className="h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: "var(--gold)" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 px-6" style={{ background: "var(--green)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
              The Difference
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-cormorant font-semibold mb-4" style={{ color: "var(--gold-light)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Why Choose Defined Aesthetics?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center" style={{ color: "var(--gold)" }}>
              <DiamondLineDoodle width={160} />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 rounded-2xl" style={{ border: "1px solid rgba(201,164,53,0.2)" }}>
                <span className="text-2xl mb-3 block" style={{ color: "var(--gold)" }}>{item.icon}</span>
                <h3 className="font-cormorant font-semibold text-lg mb-2" style={{ color: "var(--gold-light)" }}>
                  {item.title}
                </h3>
                <p className="font-jost text-xs leading-relaxed" style={{ color: "rgba(232,213,163,0.65)" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "var(--cream)" }}>
        <div className="max-w-xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="font-cormorant font-semibold mb-4" style={{ color: "var(--green)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Not Sure Which Service?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-jost font-light text-sm leading-relaxed mb-8" style={{ color: "#666" }}>
            Message Mayuri on WhatsApp for a free consultation. She'll guide you to the perfect treatment for your skin type, lifestyle, and goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <a
              href="https://wa.me/918422926464"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-jost text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: "var(--green)", color: "var(--gold-light)" }}>
              <FaWhatsapp size={18} /> Free Consultation on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
