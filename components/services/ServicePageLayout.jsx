"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Clock, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import DiamondLineDoodle from "@/components/doodles/DiamondLineDoodle";
import FloralDoodle from "@/components/doodles/FloralDoodle";
import SparklesDoodle from "@/components/doodles/SparklesDoodle";
import BrowlineDoodle from "@/components/doodles/BrowlineDoodle";

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-b last:border-0" style={{ borderColor: "rgba(201,164,53,0.2)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left transition-colors duration-200 hover:text-[#C9A435]"
        style={{ color: open ? "var(--gold)" : "var(--green)" }}>
        <span className="font-jost font-medium text-sm pr-4">{faq.question}</span>
        {open ? <ChevronUp size={18} className="flex-shrink-0" style={{ color: "var(--gold)" }} />
          : <ChevronDown size={18} className="flex-shrink-0" style={{ color: "rgba(201,164,53,0.6)" }} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="font-jost font-light text-sm leading-relaxed pb-5" style={{ color: "#555" }}>
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServicePageLayout({ service }) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center justify-center text-center"
        style={{ background: "linear-gradient(160deg, #060F0C 0%, #0C3B2E 55%, #0F2D22 100%)", minHeight: "55vh" }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(201,164,53,0.10) 0%, transparent 70%)" }} />
        <div className="absolute top-20 right-8 opacity-20 animate-shimmer pointer-events-none" style={{ color: "var(--gold)" }}>
          <SparklesDoodle size={70} />
        </div>
        <div className="absolute bottom-12 left-10 opacity-10 animate-float pointer-events-none" style={{ color: "var(--gold)" }}>
          <FloralDoodle size={100} />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6 font-jost text-xs tracking-widest uppercase"
            style={{ color: "rgba(232,213,163,0.5)" }}>
            <Link href="/" className="hover:text-[#C9A435] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#C9A435] transition-colors">Services</Link>
            <span>/</span>
            <span style={{ color: "var(--gold)" }}>{service.shortTitle}</span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl mb-5 block" style={{ color: "var(--gold)" }}>
            {service.icon}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="font-cormorant font-semibold mb-4"
            style={{ color: "var(--gold)", fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
            {service.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-5 opacity-50" style={{ color: "var(--gold)" }}>
            <BrowlineDoodle width={180} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="font-cormorant italic text-xl md:text-2xl mb-6" style={{ color: "var(--gold-light)" }}>
            {service.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918422926464"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-jost text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
              style={{ background: "var(--gold)", color: "var(--green)" }}>
              <FaWhatsapp size={17} /> Book This Service
            </a>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-jost text-sm tracking-widest uppercase font-medium border transition-all duration-300 hover:scale-105"
              style={{ borderColor: "var(--gold)", color: "var(--gold-light)" }}>
              View Results <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About the service */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            About This Treatment
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            className="font-jost font-light text-base md:text-lg leading-relaxed" style={{ color: "#555" }}>
            {service.description}
          </motion.p>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-20 px-6" style={{ background: "#F4EFE8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
              Techniques Available
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-cormorant font-semibold mb-4" style={{ color: "var(--green)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Which Technique Is Right for You?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center" style={{ color: "var(--gold)" }}>
              <DiamondLineDoodle width={160} />
            </motion.div>
          </div>

          <div className={`grid grid-cols-1 ${service.techniques.length === 1 ? "max-w-md mx-auto" : service.techniques.length === 2 ? "sm:grid-cols-2 max-w-2xl mx-auto" : service.techniques.length <= 4 ? "sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto" : "sm:grid-cols-2 lg:grid-cols-3"} gap-6`}>
            {service.techniques.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
                style={{ border: "1px solid rgba(201,164,53,0.15)" }}>
                {/* Header band */}
                <div className="px-6 py-5" style={{ background: "var(--green)" }}>
                  <h3 className="font-cormorant font-semibold text-xl" style={{ color: "var(--gold-light)" }}>
                    {tech.name}
                  </h3>
                </div>
                {/* Body */}
                <div className="px-6 py-5">
                  <p className="font-jost text-sm leading-relaxed mb-5" style={{ color: "#555" }}>
                    {tech.desc}
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} style={{ color: "var(--gold)" }} />
                      <span className="font-jost text-xs" style={{ color: "#777" }}>{tech.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} style={{ color: "var(--gold)" }} />
                      <span className="font-jost text-xs" style={{ color: "#777" }}>Lasts {tech.longevity}</span>
                    </div>
                  </div>
                </div>
                {/* Gold bottom hover line */}
                <div className="h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: "var(--gold)" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Image */}
      {service.image && (
        <section className="py-20 px-6" style={{ background: "var(--green)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.p
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
                Real Results
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
                className="font-cormorant font-semibold" style={{ color: "var(--gold-light)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                Before &amp; After
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-2xl"
              style={{ border: "2px solid rgba(201,164,53,0.4)" }}>
              <Image
                src={service.image}
                alt={`${service.title} before and after by Mayuri Londhe, Nashik`}
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-8">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-jost text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
                style={{ background: "var(--gold)", color: "var(--green)" }}>
                View Full Gallery <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <motion.p
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
                Questions & Answers
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
                className="font-cormorant font-semibold mb-4" style={{ color: "var(--green)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                Frequently Asked Questions
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center" style={{ color: "var(--gold)" }}>
                <DiamondLineDoodle width={160} />
              </motion.div>
            </div>
            <div className="bg-white rounded-2xl px-6 md:px-8 py-2 shadow-sm" style={{ border: "1px solid rgba(201,164,53,0.15)" }}>
              {service.faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        className="relative py-20 px-6 overflow-hidden text-center"
        style={{ background: "linear-gradient(135deg, #060F0C 0%, #0C3B2E 100%)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(circle at 50% 50%, rgba(201,164,53,0.08) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            Ready to Transform?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cormorant font-semibold mb-4" style={{ color: "var(--gold-light)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Book Your {service.shortTitle} Appointment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            className="font-jost font-light text-sm mb-8" style={{ color: "rgba(232,213,163,0.7)" }}>
            Every appointment begins with a consultation and design session. Message Mayuri on WhatsApp to book yours today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918422926464"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-jost text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
              style={{ background: "var(--gold)", color: "var(--green)" }}>
              <FaWhatsapp size={17} /> Book on WhatsApp
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-jost text-sm tracking-widest uppercase font-medium border transition-all duration-300 hover:scale-105"
              style={{ borderColor: "var(--gold)", color: "var(--gold-light)" }}>
              All Services <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
