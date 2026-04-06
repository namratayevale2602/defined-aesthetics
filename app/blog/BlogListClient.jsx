"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import DiamondLineDoodle from "@/components/doodles/DiamondLineDoodle";
import FloralDoodle from "@/components/doodles/FloralDoodle";
import SparklesDoodle from "@/components/doodles/SparklesDoodle";
import BrowlineDoodle from "@/components/doodles/BrowlineDoodle";
import LeafSprayDoodle from "@/components/doodles/LeafSprayDoodle";
import { blogPosts } from "@/lib/data";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

const CATEGORY_COLORS = {
  Eyebrows: { bg: "rgba(12,59,46,0.08)", text: "var(--green)" },
  "Lip Blush": { bg: "rgba(196,129,138,0.12)", text: "#a0525a" },
  Aftercare: { bg: "rgba(201,164,53,0.1)", text: "var(--gold)" },
  Scalp: { bg: "rgba(12,59,46,0.08)", text: "var(--green)" },
};

export default function BlogListClient() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative pt-32 pb-24 px-6 overflow-hidden flex items-center justify-center text-center"
        style={{ background: "linear-gradient(160deg, #432F4F 0%, #432F4F 50%, #432F4F 100%)", minHeight: "52vh" }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(201,164,53,0.1) 0%, transparent 70%)" }} />
        <div className="absolute top-20 left-12 opacity-15 animate-float pointer-events-none" style={{ color: "var(--gold)" }}>
          <LeafSprayDoodle size={100} />
        </div>
        <div className="absolute bottom-16 right-10 opacity-20 animate-shimmer pointer-events-none" style={{ color: "var(--gold)" }}>
          <SparklesDoodle size={70} />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            Beauty Insights
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="font-cormorant font-semibold mb-4"
            style={{ color: "var(--gold)", fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}>
            The Journal
          </motion.h1>
          {/* <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-5 opacity-50" style={{ color: "var(--gold)" }}>
            <BrowlineDoodle width={180} />
          </motion.div> */}
          <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="flex justify-center mb-4 opacity-80"
>
  <img
    src="/images/face.png"
    alt="Defined Aesthetics Logo"
    className="w-[50px] md:w-[100px] object-contain"
  />
</motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="font-jost font-light text-sm max-w-lg mx-auto" style={{ color: "rgba(232,213,163,0.75)" }}>
            Expert tips, aftercare guides, and beauty insights from Mayuri Londhe at Defined MD Aesthetics.
          </motion.p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="font-jost text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "var(--green-light)" }}>
            Featured Article
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Link href={`/blog/${featured.slug}`} className="block group">
              <div
                className="rounded-3xl p-10 md:p-14 transition-all duration-400 hover:shadow-xl relative overflow-hidden"
                style={{ background: "var(--green)", border: "1px solid rgba(201,164,53,0.2)" }}>
                <div className="absolute top-6 right-6 opacity-10 pointer-events-none" style={{ color: "var(--green-light)" }}>
                  <FloralDoodle size={120} />
                </div>
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="font-jost text-xs tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{ background: "rgba(201,164,53,0.15)", color: "var(--gold)" }}>
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1.5 font-jost text-xs" style={{ color: "rgba(232,213,163,0.55)" }}>
                    <Clock size={12} /> {featured.readTime} read
                  </span>
                  <span className="flex items-center gap-1.5 font-jost text-xs" style={{ color: "rgba(232,213,163,0.55)" }}>
                    <Calendar size={12} /> {formatDate(featured.date)}
                  </span>
                </div>
                <h2
                  className="font-cormorant font-semibold mb-5 group-hover:opacity-90 transition-opacity"
                  style={{ color: "var(--gold-light)", fontSize: "clamp(1.6rem, 3vw, 2.6rem)", lineHeight: 1.25 }}>
                  {featured.title}
                </h2>
                <p className="font-jost font-light text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: "rgba(232,213,163,0.7)" }}>
                  {featured.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 font-jost text-xs tracking-widest uppercase font-medium transition-all duration-300 group-hover:gap-4"
                  style={{ color: "var(--gold)" }}>
                  Read Article <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="pb-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <motion.p
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="font-jost text-xs tracking-[0.3em] uppercase" style={{ color: "var(--green-light)" }}>
              More Articles
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 overflow-hidden" style={{ color: "var(--green-light)" }}>
              <div style={{ height: "1px", background: "currentColor", opacity: 0.3, marginTop: "9px" }} />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((post, i) => {
              const cat = CATEGORY_COLORS[post.category] || CATEGORY_COLORS.Eyebrows;
              return (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <div
                      className="bg-white rounded-2xl p-8 h-full transition-all duration-400 hover:shadow-lg"
                      style={{ border: "1px solid rgba(201,164,53,0.15)" }}>
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="font-jost text-xs tracking-widest uppercase px-3 py-1 rounded-full"
                          style={{ background: cat.bg, color: cat.text }}>
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1.5 font-jost text-xs" style={{ color: "#aaa" }}>
                          <Clock size={11} /> {post.readTime} read
                        </span>
                      </div>
                      <h3
                        className="font-cormorant font-semibold mb-3 group-hover:text-[#C9A435] transition-colors"
                        style={{ color: "var(--green)", fontSize: "clamp(1.2rem, 2vw, 1.5rem)", lineHeight: 1.3 }}>
                        {post.title}
                      </h3>
                      <p className="font-jost font-light text-sm leading-relaxed mb-5" style={{ color: "#666" }}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 font-jost text-xs" style={{ color: "#aaa" }}>
                          <Calendar size={11} /> {formatDate(post.date)}
                        </span>
                        <span className="inline-flex items-center gap-1.5 font-jost text-xs tracking-widest uppercase font-medium transition-all duration-300 group-hover:gap-3"
                          style={{ color: "var(--green)" }}>
                          Read <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "var(--green)" }}>
        <div className="max-w-xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            Ready to Transform?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cormorant font-semibold mb-4" style={{ color: "var(--gold-light)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Questions? Ask Mayuri Directly.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-6" style={{ color: "var(--gold)" }}>
            <DiamondLineDoodle width={160} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}
            className="font-jost font-light text-sm leading-relaxed mb-8" style={{ color: "rgba(232,213,163,0.7)" }}>
            Have a question about a treatment, your skin type, or the healing process? Message Mayuri directly on WhatsApp for personalised guidance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <a
              href="https://wa.me/918422926464"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-jost text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: "var(--gold)", color: "var(--green)" }}>
              <FaWhatsapp size={18} /> Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
