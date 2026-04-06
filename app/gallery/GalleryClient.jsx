"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { ArrowRight, ExternalLink } from "lucide-react";
import DiamondLineDoodle from "@/components/doodles/DiamondLineDoodle";
import FloralDoodle from "@/components/doodles/FloralDoodle";
import SparklesDoodle from "@/components/doodles/SparklesDoodle";
import BrowlineDoodle from "@/components/doodles/BrowlineDoodle";
import LeafSprayDoodle from "@/components/doodles/LeafSprayDoodle";
import { galleryItems } from "@/lib/data";

const FILTERS = ["All", "Eyebrows", "Lip Blush", "Studio"];

function SplitCard({ item }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 group"
      style={{ border: "1px solid rgba(201,164,53,0.15)" }}>
      <div className="grid grid-cols-2">
        <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
          <Image
            src={item.beforeImage}
            alt={`Before — ${item.technique}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 py-2 text-center font-jost text-xs tracking-widest uppercase"
            style={{ background: "rgba(12,59,46,0.85)", color: "rgba(232,213,163,0.9)" }}>
            Before
          </div>
        </div>
        <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
          <Image
            src={item.afterImage}
            alt={`After — ${item.technique}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 py-2 text-center font-jost text-xs tracking-widest uppercase"
            style={{ background: "rgba(201,164,53,0.85)", color: "#fff" }}>
            After
          </div>
        </div>
      </div>
      <div className="px-5 py-4" style={{ background: "#fff" }}>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-jost text-xs tracking-widest uppercase px-2 py-0.5 rounded-full mr-2"
              style={{ background: "rgba(12,59,46,0.08)", color: "var(--green)" }}>
              {item.service}
            </span>
            <span className="font-cormorant text-base font-medium" style={{ color: "var(--green)" }}>
              {item.technique}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompositeCard({ item }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 group"
      style={{ border: "1px solid rgba(201,164,53,0.15)" }}>
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="px-5 py-4" style={{ background: "#fff" }}>
        <div className="flex items-center gap-2">
          <span className="font-jost text-xs tracking-widest uppercase px-2 py-0.5 rounded-full"
            style={{ background: "rgba(12,59,46,0.08)", color: "var(--green)" }}>
            {item.service}
          </span>
          <span className="font-cormorant text-base font-medium" style={{ color: "var(--green)" }}>
            {item.technique}
          </span>
        </div>
      </div>
    </div>
  );
}

function SingleCard({ item }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 group"
      style={{ border: "1px solid rgba(201,164,53,0.15)" }}>
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="px-5 py-4" style={{ background: "#fff" }}>
        <div className="flex items-center gap-2">
          <span className="font-jost text-xs tracking-widest uppercase px-2 py-0.5 rounded-full"
            style={{ background: "rgba(201,164,53,0.1)", color: "var(--gold)" }}>
            {item.service}
          </span>
          <span className="font-cormorant text-base font-medium" style={{ color: "var(--green)" }}>
            {item.technique}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function GalleryClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter((g) => g.service === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative pt-32 pb-24 px-6 overflow-hidden flex items-center justify-center text-center"
        style={{ background: "linear-gradient(160deg, #432F4F 0%, #432F4F 50%, #432F4F 100%)", minHeight: "52vh" }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(201,164,53,0.1) 0%, transparent 70%)" }} />
        <div className="absolute top-20 right-12 opacity-15 animate-float pointer-events-none" style={{ color: "var(--gold)" }}>
          <LeafSprayDoodle size={100} />
        </div>
        <div className="absolute bottom-16 left-10 opacity-20 animate-shimmer pointer-events-none" style={{ color: "var(--gold)" }}>
          <SparklesDoodle size={70} />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            Real Results
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="font-cormorant font-semibold mb-4"
            style={{ color: "var(--gold)", fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}>
            Before &amp; After Gallery
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-5 opacity-50" style={{ color: "var(--gold)" }}>
            <BrowlineDoodle width={180} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="font-jost font-light text-sm max-w-lg mx-auto" style={{ color: "rgba(232,213,163,0.75)" }}>
            Every result you see is a real client transformation by Mayuri Londhe at Defined MD Aesthetics, Nashik.
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto">
          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center mb-14">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="font-jost text-xs tracking-widest uppercase px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
                style={
                  activeFilter === f
                    ? { background: "var(--green)", color: "var(--gold-light)" }
                    : { background: "transparent", color: "var(--green)", border: "1px solid rgba(12,59,46,0.3)" }
                }>
                {f}
              </button>
            ))}
          </motion.div>

          {/* Gallery grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}>
                  {item.type === "split" ? (
                    <SplitCard item={item} />
                  ) : item.type === "single" ? (
                    <SingleCard item={item} />
                  ) : (
                    <CompositeCard item={item} />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 px-6" style={{ background: "var(--green)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
                See More Work
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
                className="font-cormorant font-semibold mb-4" style={{ color: "var(--gold-light)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                Follow Us on Instagram
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-5" style={{ color: "var(--gold)" }}>
                <DiamondLineDoodle width={160} />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}
                className="font-jost font-light text-sm leading-relaxed mb-8" style={{ color: "rgba(232,213,163,0.75)" }}>
                Our Instagram is constantly updated with fresh client results, behind-the-scenes moments, and transformation stories. Follow{" "}
                <span style={{ color: "var(--gold)" }}>@_defined_aesthetics_by_mayuri</span> for the full portfolio.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.instagram.com/_defined_aesthetics_by_mayuri"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-jost text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
                  style={{ background: "var(--gold)", color: "var(--green)" }}>
                  <FaInstagram size={17} /> View Instagram
                </a>
                <a
                  href="https://wa.me/918422926464"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-jost text-sm tracking-widest uppercase font-medium border transition-all duration-300 hover:scale-105"
                  style={{ borderColor: "var(--gold)", color: "var(--gold)" }}>
                  <FaWhatsapp size={17} /> Book Appointment
                </a>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex items-center justify-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ border: "2px solid rgba(201,164,53,0.3)" }}>
                <Image
                  src="/images/insta_scanner.jpeg"
                  alt="Scan to follow @_defined_aesthetics_by_mayuri on Instagram"
                  width={320}
                  height={320}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 px-5 py-3 rounded-2xl shadow-lg"
                style={{ background: "rgba(201,164,53,0.95)" }}>
                <div className="font-cormorant font-bold text-base text-center" style={{ color: "var(--green)" }}>
                  Scan to Follow
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "var(--cream)" }}>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex justify-center mb-6 opacity-30 pointer-events-none" style={{ color: "var(--gold)" }}>
            <FloralDoodle size={80} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="font-cormorant font-semibold mb-4" style={{ color: "var(--green)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Love What You See?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-jost font-light text-sm leading-relaxed mb-8" style={{ color: "#666" }}>
            Your transformation is waiting. Book your free consultation with Mayuri and take the first step toward waking up with defined, effortless beauty every single day.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918422926464"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-jost text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
