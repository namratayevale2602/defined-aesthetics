"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import FloralDoodle from "@/components/doodles/FloralDoodle";
import LeafSprayDoodle from "@/components/doodles/LeafSprayDoodle";
import SparklesDoodle from "@/components/doodles/SparklesDoodle";
import LogoSVG from "@/components/Logo/LogoSVG";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, show: { opacity: 1 } };

// Sample images - replace with your actual image paths
const carouselImages = [
  
  { src: "/images/lip_before_after.jpeg", alt: "Lip blush result" },
  { src: "/images/hair.png", alt: "Scalp micropigmentation" },
  { src: "/images/beauty.png", alt: "Beauty spot" },
  { src: "/images/permanenteyebrows.png", alt: "Microblading result" },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #432F4F 0%, #432F4F 50%, #432F4F 100%)" }}
    >
      {/* Radial glow behind content */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
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

      {/* Main Content - Left Side Text */}
      <div className="relative z-10 w-full mt-30 md:mt-1 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-cormorant font-bold leading-tight mb-3"
              style={{ color: "var(--gold)", fontSize: "clamp(2.8rem, 7vw, 5rem)" }}
            >
              Stay Beautiful Forever
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
              className="font-jost font-light text-sm md:text-base max-w-lg mx-auto lg:mx-0 mb-10 tracking-wide"
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
              className="flex flex-col sm:flex-row gap-4 items-center lg:justify-start"
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

          {/* Right Column - Image Carousel */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Main Image */}
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={carouselImages[currentIndex].src}
                  alt={carouselImages[currentIndex].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? "w-8 h-2 bg-gold"
                        : "w-2 h-2 bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative gold border/frame effect */}
            <div
              className="absolute -inset-3 rounded-2xl border-2 opacity-20 pointer-events-none"
              style={{ borderColor: "var(--gold)" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: "rgba(201,164,53,0.5)" }}
      >
        <span className="font-jost text-xs tracking-widest uppercase" style={{ color: "rgba(201,164,53,0.5)" }}>
          Scroll
        </span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.div>
    </section>
  );
}