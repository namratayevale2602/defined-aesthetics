"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import DiamondLineDoodle from "@/components/doodles/DiamondLineDoodle";
import FloralDoodle from "@/components/doodles/FloralDoodle";
import SparklesDoodle from "@/components/doodles/SparklesDoodle";
import BrowlineDoodle from "@/components/doodles/BrowlineDoodle";
import LeafSprayDoodle from "@/components/doodles/LeafSprayDoodle";
import { services, companyInfo } from "@/lib/data";

const contactCards = [
  {
    icon: <FaWhatsapp size={22} />,
    title: "WhatsApp",
    value: "+91 84229 26464",
    sub: "Message anytime — quickest response",
    href: "https://wa.me/918422926464",
    cta: "Message Now",
    color: "#25D366",
  },
  {
    icon: <Phone size={22} />,
    title: "Call Us",
    value: "+91 84229 26464",
    sub: "Mon–Sat · 10:00 AM – 7:00 PM",
    href: "tel:+918422926464",
    cta: "Call Now",
    color: "var(--gold)",
  },
  {
    icon: <Mail size={22} />,
    title: "Email",
    value: "definedaestheticsbymayuri@gmail.com",
    sub: "For detailed inquiries",
    href: "mailto:definedaestheticsbymayuri@gmail.com",
    cta: "Send Email",
    color: "var(--gold)",
  },
  {
    icon: <FaInstagram size={22} />,
    title: "Instagram",
    value: "@_defined_aesthetics_by_mayuri",
    sub: "DM us or view our portfolio",
    href: "https://www.instagram.com/_defined_aesthetics_by_mayuri",
    cta: "Open Instagram",
    color: "#E1306C",
  },
];

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const text = `Hi Mayuri! I'd like to book an appointment.%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AService Interested In: ${encodeURIComponent(form.service || "Not specified")}%0AMessage: ${encodeURIComponent(form.message || "—")}`;
    window.open(`https://wa.me/918422926464?text=${text}`, "_blank");
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative pt-32 pb-24 px-6 overflow-hidden flex items-center justify-center text-center"
        style={{ background: "linear-gradient(160deg, #432F4F 0%, #432F4F 50%, #432F4F 100%)", minHeight: "52vh" }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(201,164,53,0.1) 0%, transparent 70%)" }} />
        <div className="absolute top-24 right-10 opacity-15 animate-float pointer-events-none" style={{ color: "var(--gold)" }}>
          <LeafSprayDoodle size={100} />
        </div>
        <div className="absolute bottom-16 left-10 opacity-20 animate-shimmer pointer-events-none" style={{ color: "var(--gold)" }}>
          <SparklesDoodle size={70} />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            Let&apos;s Connect
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="font-cormorant font-semibold mb-4"
            style={{ color: "var(--gold)", fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}>
            Book an Appointment
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-5 opacity-50" style={{ color: "var(--gold)" }}>
            <BrowlineDoodle width={180} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="font-jost font-light text-sm max-w-lg mx-auto" style={{ color: "rgba(232,213,163,0.75)" }}>
            Free consultation included. Reach out on WhatsApp, call, or fill the form below — Mayuri will get back to you promptly.
          </motion.p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--green-light)" }}>
              Get in Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-cormorant font-semibold mb-4" style={{ color: "var(--green)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Reach Mayuri Directly
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center" style={{ color: "var(--green-light)" }}>
              <DiamondLineDoodle width={160} />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}>
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block bg-white rounded-2xl p-7 text-center transition-all duration-400 hover:shadow-xl hover:-translate-y-1 group h-full"
                  style={{ border: "1px solid rgba(201,164,53,0.15)" }}>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "var(--green)", color: card.color }}>
                    {card.icon}
                  </div>
                  <h3 className="font-cormorant font-semibold text-lg mb-2" style={{ color: "var(--green)" }}>
                    {card.title}
                  </h3>
                  <p className="font-jost text-xs font-medium mb-1 break-all" style={{ color: "#333" }}>
                    {card.value}
                  </p>
                  <p className="font-jost text-xs mb-4" style={{ color: "#999" }}>
                    {card.sub}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 font-jost text-xs tracking-widest uppercase font-medium transition-all duration-300 group-hover:gap-3"
                    style={{ color: "var(--green)" }}>
                    {card.cta} <ArrowRight size={11} />
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form + Info */}
      <section className="py-20 px-6" style={{ background: "#F4EFE8" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--green-light)" }}>
              Send an Enquiry
            </p>
            <h2 className="font-cormorant font-semibold mb-3" style={{ color: "var(--green)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Book via WhatsApp Form
            </h2>
            <div className="mb-7" style={{ color: "var(--green-light)" }}>
              <DiamondLineDoodle width={160} />
            </div>

            {submitted ? (
              <div
                className="rounded-2xl p-10 text-center"
                style={{ background: "var(--green)", border: "1px solid rgba(201,164,53,0.2)" }}>
                <CheckCircle2 size={48} className="mx-auto mb-4" style={{ color: "var(--gold)" }} />
                <h3 className="font-cormorant font-semibold text-2xl mb-3" style={{ color: "var(--gold-light)" }}>
                  WhatsApp Opened!
                </h3>
                <p className="font-jost text-sm font-light" style={{ color: "rgba(232,213,163,0.75)" }}>
                  Your enquiry details have been pre-filled in WhatsApp. Simply press send and Mayuri will respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-jost text-xs tracking-widest uppercase block mb-2" style={{ color: "var(--green)" }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-5 py-3.5 rounded-xl font-jost text-sm bg-white outline-none transition-all duration-300 focus:ring-2"
                    style={{
                      border: "1px solid rgba(201,164,53,0.25)",
                      color: "#333",
                      // eslint-disable-next-line
                      "--tw-ring-color": "rgba(201,164,53,0.4)",
                    }}
                  />
                </div>
                <div>
                  <label className="font-jost text-xs tracking-widest uppercase block mb-2" style={{ color: "var(--green)" }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-5 py-3.5 rounded-xl font-jost text-sm bg-white outline-none transition-all duration-300 focus:ring-2"
                    style={{ border: "1px solid rgba(201,164,53,0.25)", color: "#333" }}
                  />
                </div>
                <div>
                  <label className="font-jost text-xs tracking-widest uppercase block mb-2" style={{ color: "var(--green)" }}>
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl font-jost text-sm bg-white outline-none transition-all duration-300 focus:ring-2 appearance-none"
                    style={{ border: "1px solid rgba(201,164,53,0.25)", color: form.service ? "#333" : "#aaa" }}>
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Not sure yet">Not sure yet — free consultation</option>
                  </select>
                </div>
                <div>
                  <label className="font-jost text-xs tracking-widest uppercase block mb-2" style={{ color: "var(--green)" }}>
                    Message (optional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Any questions, preferred dates, or details about your goals…"
                    className="w-full px-5 py-3.5 rounded-xl font-jost text-sm bg-white outline-none transition-all duration-300 focus:ring-2 resize-none"
                    style={{ border: "1px solid rgba(201,164,53,0.25)", color: "#333" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-jost text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  style={{ background: "var(--green)", color: "var(--gold-light)" }}>
                  <FaWhatsapp size={18} /> Send via WhatsApp
                </button>
                <p className="font-jost text-xs text-center" style={{ color: "var(--green-light)" }}>
                  Clicking send will open WhatsApp with your details pre-filled.
                </p>
              </form>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6">
            {/* Studio info */}
            <div
              className="bg-white rounded-2xl p-8"
              style={{ border: "1px solid rgba(201,164,53,0.15)" }}>
              <p className="font-jost text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "var(--green-light)" }}>Studio Info</p>
              <h3 className="font-cormorant font-semibold text-xl mb-5" style={{ color: "var(--green)" }}>
                Defined MD Aesthetics
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--green-light)" }} />
                  <div>
                    <div className="font-jost text-sm font-medium" style={{ color: "#333" }}>Location</div>
                    <div className="font-jost text-sm font-light" style={{ color: "#666" }}>Nashik, Maharashtra, India</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--green-light)" }} />
                  <div>
                    <div className="font-jost text-sm font-medium" style={{ color: "#333" }}>Working Hours</div>
                    <div className="font-jost text-sm font-light" style={{ color: "#666" }}>Monday – Saturday</div>
                    <div className="font-jost text-sm font-light" style={{ color: "#666" }}>10:00 AM – 7:00 PM</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--green-light)" }} />
                  <div>
                    <div className="font-jost text-sm font-medium" style={{ color: "#333" }}>Phone / WhatsApp</div>
                    <a href="tel:+918422926464" className="font-jost text-sm font-light hover:underline" style={{ color: "#666" }}>
                      +91 84229 26464
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--green-light)" }} />
                  <div>
                    <div className="font-jost text-sm font-medium" style={{ color: "#333" }}>Email</div>
                    <a
                      href="mailto:definedaestheticsbymayuri@gmail.com"
                      className="font-jost text-xs font-light hover:underline break-all"
                      style={{ color: "#666" }}>
                      definedaestheticsbymayuri@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* What to expect */}
            <div
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{ background: "var(--green)", border: "1px solid rgba(201,164,53,0.2)" }}>
              <div className="absolute bottom-4 right-4 opacity-10 pointer-events-none" style={{ color: "var(--gold)" }}>
                <FloralDoodle size={80} />
              </div>
              <p className="font-jost text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "var(--gold)" }}>
                What to Expect
              </p>
              <h3 className="font-cormorant font-semibold text-xl mb-5" style={{ color: "var(--gold-light)" }}>
                Your First Appointment
              </h3>
              <ul className="space-y-3">
                {[
                  "Free consultation + design discussion",
                  "Personalised shape mapping or colour selection",
                  "Numbing cream applied for comfort",
                  "Careful, precise procedure",
                  "Full aftercare kit + instructions provided",
                  "Touch-up appointment scheduled",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-jost text-sm font-light" style={{ color: "rgba(232,213,163,0.8)" }}>
                    <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services quick links */}
            <div
              className="bg-white rounded-2xl p-7"
              style={{ border: "1px solid rgba(201,164,53,0.15)" }}>
              <p className="font-jost text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--green-light)" }}>
                Our Services
              </p>
              <div className="grid grid-cols-2 gap-2">
                {services.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="flex items-center gap-2 font-jost text-sm py-2 transition-colors hover:underline"
                    style={{ color: "var(--green)" }}>
                    <span style={{ color: "var(--green-light)" }}>{svc.icon}</span>
                    {svc.shortTitle}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram section */}
      <section className="py-20 px-6 text-center" style={{ background: "var(--cream)" }}>
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex justify-center mb-6 opacity-25 pointer-events-none" style={{ color: "var(--green-light)" }}>
            <FloralDoodle size={70} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="font-cormorant font-semibold mb-4" style={{ color: "var(--green)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Follow the Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-jost font-light text-sm leading-relaxed mb-8" style={{ color: "#666" }}>
            See the latest client results, behind-the-scenes moments and permanent makeup transformations at{" "}
            <span style={{ color: "var(--green)", fontWeight: 500 }}>@_defined_aesthetics_by_mayuri</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/_defined_aesthetics_by_mayuri"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-jost text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: "var(--green)", color: "var(--gold-light)" }}>
              <FaInstagram size={17} /> Follow on Instagram
            </a>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-jost text-sm tracking-widest uppercase font-medium border transition-all duration-300 hover:scale-105"
              style={{ borderColor: "var(--green)", color: "var(--green)" }}>
              View Gallery <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
