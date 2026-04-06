"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import FloralDoodle from "@/components/doodles/FloralDoodle";
import LeafSprayDoodle from "@/components/doodles/LeafSprayDoodle";
import SparklesDoodle from "@/components/doodles/SparklesDoodle";
import BrowlineDoodle from "@/components/doodles/BrowlineDoodle";
import LogoSVG from "@/components/Logo/LogoSVG";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #432F4F 0%, #432F4F 50%, #432F4F 100%)" }}
    >
      {/* Radial glow behind logo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,164,53,0.12) 0%, transparent 70%)" }}
      />

      {/* Doodle — FloralDoodle top-left */}
      <div className="absolute top-24 left-8 md:left-16 opacity-15 animate-float pointer-events-none" style={{ color: "var(--gold)" }}>
        <FloralDoodle size={130} />
      </div>

      {/* Doodle — LeafSpray bottom-right */}
      <div className="absolute bottom-24 right-8 md:right-16 opacity-10 animate-float-reverse pointer-events-none" style={{ color: "var(--gold-light)" }}>
        <LeafSprayDoodle size={120} />
      </div>

      {/* Doodle — Sparkles top-right */}
      <div className="absolute top-16 right-16 md:right-32 opacity-20 animate-shimmer pointer-events-none" style={{ color: "var(--gold)" }}>
        <SparklesDoodle size={70} />
      </div>

      {/* Doodle — Sparkles bottom-left small */}
      <div className="absolute bottom-32 left-20 opacity-15 animate-shimmer pointer-events-none" style={{ color: "var(--gold-light)", animationDelay: "1.5s" }}>
        <SparklesDoodle size={45} />
      </div>

      {/* Doodle — Floral bottom-left */}
      <div className="absolute bottom-10 left-1/4 opacity-8 animate-float pointer-events-none" style={{ color: "var(--gold)", animationDelay: "2s" }}>
        <FloralDoodle size={80} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        {/* Logo */}
        {/* <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <LogoSVG layout="stacked" variant="light" width={270} />
        </motion.div> */}

        {/* BrowLine decoration */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 opacity-50"
          style={{ color: "var(--gold)" }}
        >
          <BrowlineDoodle width={200} />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-cormorant font-bold leading-tight mb-3"
          style={{ color: "var(--gold)", fontSize: "clamp(2.8rem, 7vw, 5rem)" }}
        >
          Defined Beauty.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-cormorant italic font-light mb-6"
          style={{ color: "var(--gold-light)", fontSize: "clamp(1.8rem, 4.5vw, 3rem)" }}
        >
          Lasting Confidence.
        </motion.p>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-jost font-light text-sm md:text-base max-w-lg mb-10 tracking-wide"
          style={{ color: "rgba(232,213,163,0.75)" }}
        >
          Premium permanent makeup artistry in Nashik by{" "}
          <span style={{ color: "var(--gold)" }}>Mayuri Londhe</span>.
          Microblading · Lip Blush · Scalp Micropigmentation · Beauty Spots
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="https://wa.me/918422926464"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full font-jost font-500 text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ background: "var(--gold)", color: "var(--green)" }}
          >
            Book an Appointment
          </a>
          <Link
            href="/gallery"
            className="px-8 py-3.5 rounded-full font-jost font-light text-sm tracking-widest uppercase border transition-all duration-300 hover:scale-105"
            style={{ borderColor: "var(--gold)", color: "var(--gold-light)" }}
          >
            View Our Work
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: "rgba(201,164,53,0.5)" }}
      >
        <span className="font-jost text-xs tracking-widest uppercase" style={{ color: "rgba(201,164,53,0.5)" }}>Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
