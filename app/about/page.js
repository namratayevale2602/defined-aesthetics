"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Heart, Award, Shield } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import DiamondLineDoodle from "@/components/doodles/DiamondLineDoodle";
import FloralDoodle from "@/components/doodles/FloralDoodle";
import SparklesDoodle from "@/components/doodles/SparklesDoodle";
import BrowlineDoodle from "@/components/doodles/BrowlineDoodle";
import { services, whyChooseUs } from "@/lib/data";

const values = [
  {
    icon: <Heart size={22} />,
    title: "Artistry First",
    desc: "Every face is a canvas. I approach each client with fresh eyes, tailoring the design to their unique features — never using a one-size template.",
  },
  {
    icon: <Shield size={22} />,
    title: "Safety & Hygiene",
    desc: "Single-use sterile equipment on every single client. Premium skin-safe pigments that are tested for Indian skin tones.",
  },
  {
    icon: <Award size={22} />,
    title: "Natural Results",
    desc: "My work philosophy is simple: enhance, never overdo. The goal is always results that look like they could be natural.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative pt-32 pb-24 px-6 overflow-hidden flex items-center justify-center text-center"
        style={{ background: "linear-gradient(160deg, #060F0C 0%, #0C3B2E 55%, #0F2D22 100%)", minHeight: "55vh" }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(201,164,53,0.1) 0%, transparent 70%)" }} />
        <div className="absolute top-24 left-10 opacity-15 animate-float pointer-events-none" style={{ color: "var(--gold)" }}>
          <FloralDoodle size={110} />
        </div>
        <div className="absolute bottom-16 right-10 opacity-20 animate-shimmer pointer-events-none" style={{ color: "var(--gold)" }}>
          <SparklesDoodle size={70} />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            Meet the Artist
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="font-cormorant font-semibold mb-4"
            style={{ color: "var(--gold)", fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}>
            About Mayuri
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-4 opacity-50" style={{ color: "var(--gold)" }}>
            <BrowlineDoodle width={180} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="font-cormorant italic text-xl md:text-2xl" style={{ color: "var(--gold-light)" }}>
            Founder &amp; Lead Artist, Defined MD Aesthetics
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 overflow-hidden" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ border: "2px solid rgba(201,164,53,0.4)" }}>
              <Image
                src="/images/what_we_do.jpeg"
                alt="Mayuri Londhe — Permanent Makeup Artist Nashik, Defined MD Aesthetics"
                width={600}
                height={480}
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 rounded-tr-2xl" style={{ borderColor: "var(--gold)" }} />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 rounded-bl-2xl" style={{ borderColor: "var(--gold)" }} />
            </div>
            {/* Badge */}
            <div
              className="absolute -bottom-6 -right-4 md:right-6 px-6 py-4 rounded-2xl shadow-xl"
              style={{ background: "var(--green)", border: "1px solid rgba(201,164,53,0.3)" }}>
              <div className="font-cormorant font-bold text-2xl text-center" style={{ color: "var(--gold)" }}>Since 2022</div>
              <div className="font-jost text-xs tracking-widest uppercase text-center" style={{ color: "rgba(232,213,163,0.7)" }}>
                Serving Nashik
              </div>
            </div>
            <div className="absolute -top-4 -left-4 opacity-20 pointer-events-none" style={{ color: "var(--gold)" }}>
              <FloralDoodle size={90} />
            </div>
          </motion.div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
              My Story
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-cormorant font-semibold mb-3" style={{ color: "var(--green)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Mayuri Londhe
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6" style={{ color: "var(--gold)" }}>
              <DiamondLineDoodle width={160} />
            </motion.div>
            {[
              "Mayuri Londhe is the founder and lead artist behind Defined MD Aesthetics — Nashik's premier permanent makeup studio dedicated to enhancing natural beauty with precision, artistry, and care.",
              "Her passion for beauty began long before she picked up a microblade. With a deep appreciation for facial symmetry and a love for art, Mayuri found her calling in the world of permanent makeup — a craft that combines technical skill with genuine artistry.",
              "Specialising in eyebrow techniques, lip blush, scalp micropigmentation, and beauty spot making, Mayuri has helped hundreds of clients in Nashik wake up feeling confident and beautiful — without spending time in front of the mirror.",
              "Every client relationship begins with a conversation. Mayuri believes that understanding a client's lifestyle, preferences, and beauty goals is just as important as the technical procedure itself.",
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
                className="font-jost font-light text-sm leading-relaxed mb-4" style={{ color: "#555" }}>
                {para}
              </motion.p>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.65 }}
              className="flex gap-3 mt-6">
              <a
                href="https://wa.me/918422926464"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-jost text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
                style={{ background: "var(--green)", color: "var(--gold-light)" }}>
                <FaWhatsapp size={16} /> Book Now
              </a>
              <a
                href="https://www.instagram.com/_defined_aesthetics_by_mayuri"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-jost text-sm tracking-widest uppercase font-medium border transition-all duration-300 hover:scale-105"
                style={{ borderColor: "var(--green)", color: "var(--green)" }}>
                <FaInstagram size={16} /> Instagram
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6" style={{ background: "#F4EFE8" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
              My Philosophy
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-cormorant font-semibold mb-4" style={{ color: "var(--green)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              What I Believe In
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center" style={{ color: "var(--gold)" }}>
              <DiamondLineDoodle width={160} />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                style={{ border: "1px solid rgba(201,164,53,0.15)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "var(--green)", color: "var(--gold)" }}>
                  {val.icon}
                </div>
                <h3 className="font-cormorant font-semibold text-xl mb-3" style={{ color: "var(--green)" }}>
                  {val.title}
                </h3>
                <p className="font-jost text-sm leading-relaxed" style={{ color: "#555" }}>
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 px-6" style={{ background: "var(--green)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
              Treatments Offered
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-cormorant font-semibold mb-4" style={{ color: "var(--gold-light)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              What I Specialise In
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center" style={{ color: "var(--gold)" }}>
              <DiamondLineDoodle width={160} />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((svc, i) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Link
                  href={`/services/${svc.slug}`}
                  className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 hover:bg-white/5 group"
                  style={{ border: "1px solid rgba(201,164,53,0.2)" }}>
                  <span className="text-2xl" style={{ color: "var(--gold)" }}>{svc.icon}</span>
                  <div className="flex-1">
                    <div className="font-cormorant font-semibold text-lg group-hover:text-[#C9A435] transition-colors" style={{ color: "var(--gold-light)" }}>
                      {svc.title}
                    </div>
                    <div className="font-jost text-xs mt-0.5" style={{ color: "rgba(232,213,163,0.55)" }}>
                      {svc.techniques.map(t => t.name).join(" · ")}
                    </div>
                  </div>
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--gold)" }} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "var(--cream)" }}>
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="font-cormorant font-semibold mb-4" style={{ color: "var(--green)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Ready to Work With Mayuri?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-jost font-light text-sm leading-relaxed mb-8" style={{ color: "#666" }}>
            Book your free consultation today and take the first step toward waking up with defined, effortless beauty every morning.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918422926464"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-jost text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
              style={{ background: "var(--green)", color: "var(--gold-light)" }}>
              <FaWhatsapp size={17} /> Book Appointment
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-jost text-sm tracking-widest uppercase font-medium border transition-all duration-300 hover:scale-105"
              style={{ borderColor: "var(--green)", color: "var(--green)" }}>
              View Services <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
