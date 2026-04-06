"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import DiamondLineDoodle from "@/components/doodles/DiamondLineDoodle";
import FloralDoodle from "@/components/doodles/FloralDoodle";
import SparklesDoodle from "@/components/doodles/SparklesDoodle";
import BrowlineDoodle from "@/components/doodles/BrowlineDoodle";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

function ArticleContent({ block, index }) {
  switch (block.type) {
    case "intro":
      return (
        <motion.p
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          className="font-cormorant italic text-xl md:text-2xl leading-relaxed mb-8"
          style={{ color: "var(--green)", borderLeft: "3px solid var(--gold)", paddingLeft: "1.5rem" }}>
          {block.text}
        </motion.p>
      );
    case "heading":
      return (
        <motion.h2
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          className="font-cormorant font-semibold mt-10 mb-4"
          style={{ color: "var(--green)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
          {block.text}
        </motion.h2>
      );
    case "paragraph":
      return (
        <motion.p
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.04 }}
          className="font-jost font-light text-base leading-relaxed mb-5"
          style={{ color: "#444" }}>
          {block.text}
        </motion.p>
      );
    case "list":
      return (
        <motion.ul
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.04 }}
          className="mb-6 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 font-jost font-light text-sm leading-relaxed" style={{ color: "#444" }}>
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--gold)" }} />
              {item}
            </li>
          ))}
        </motion.ul>
      );
    case "callout":
      return (
        <motion.div
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          className="my-8 px-8 py-7 rounded-2xl text-center"
          style={{ background: "var(--green)", border: "1px solid rgba(201,164,53,0.2)" }}>
          <p className="font-cormorant italic text-xl mb-5" style={{ color: "var(--gold-light)" }}>
            {block.text}
          </p>
          <a
            href="https://wa.me/918422926464"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-jost text-xs tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
            style={{ background: "var(--gold)", color: "var(--green)" }}>
            <FaWhatsapp size={15} /> Free Consultation
          </a>
        </motion.div>
      );
    default:
      return null;
  }
}

export default function BlogArticleClient({ post, relatedPosts }) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative pt-32 pb-24 px-6 overflow-hidden flex items-center justify-center text-center"
        style={{ background: "linear-gradient(160deg, #432F4F 0%, #432F4F 50%, #432F4F 100%)", minHeight: "55vh" }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(201,164,53,0.1) 0%, transparent 70%)" }} />
        <div className="absolute top-20 right-12 opacity-15 animate-float pointer-events-none" style={{ color: "var(--gold)" }}>
          <FloralDoodle size={110} />
        </div>
        <div className="absolute bottom-16 left-10 opacity-20 animate-shimmer pointer-events-none" style={{ color: "var(--gold)" }}>
          <SparklesDoodle size={70} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
            className="flex justify-center mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-jost text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
              style={{ color: "rgba(232,213,163,0.6)" }}>
              <ArrowLeft size={12} /> Back to Journal
            </Link>
          </motion.div>
          {/* Category + meta */}
          <motion.div
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-5 flex-wrap">
            <span
              className="font-jost text-xs tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ background: "rgba(201,164,53,0.15)", color: "var(--gold)" }}>
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 font-jost text-xs" style={{ color: "rgba(232,213,163,0.55)" }}>
              <Clock size={11} /> {post.readTime} read
            </span>
            <span className="flex items-center gap-1.5 font-jost text-xs" style={{ color: "rgba(232,213,163,0.55)" }}>
              <Calendar size={11} /> {formatDate(post.date)}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="font-cormorant font-semibold mb-4"
            style={{ color: "var(--gold)", fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.2 }}>
            {post.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-5 opacity-50" style={{ color: "var(--gold)" }}>
            <BrowlineDoodle width={160} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="font-jost font-light text-sm" style={{ color: "rgba(232,213,163,0.6)" }}>
            By <span style={{ color: "var(--gold)" }}>Mayuri Londhe</span> · Defined MD Aesthetics, Nashik
          </motion.p>
        </div>
      </section>

      {/* Article content */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-3xl mx-auto">
          {post.content && post.content.map((block, i) => (
            <ArticleContent key={i} block={block} index={i} />
          ))}

          {/* Tags */}
          {post.tags && (
            <motion.div
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 mt-12 pt-8"
              style={{ borderTop: "1px solid rgba(201,164,53,0.2)" }}>
              <Tag size={13} style={{ color: "var(--gold)" }} />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-jost text-xs px-3 py-1 rounded-full"
                  style={{ background: "rgba(12,59,46,0.07)", color: "var(--green)", border: "1px solid rgba(201,164,53,0.15)" }}>
                  {tag}
                </span>
              ))}
            </motion.div>
          )}

          {/* Author box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mt-12 p-8 rounded-2xl flex items-start gap-6"
            style={{ background: "rgba(12,59,46,0.05)", border: "1px solid rgba(201,164,53,0.15)" }}>
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-cormorant font-bold text-xl"
              style={{ background: "var(--green)", color: "var(--gold)" }}>
              M
            </div>
            <div>
              <div className="font-cormorant font-semibold text-lg mb-1" style={{ color: "var(--green)" }}>
                Mayuri Londhe
              </div>
              <div className="font-jost text-xs tracking-widest uppercase mb-2" style={{ color: "var(--green-light)" }}>
                Founder & Lead Artist · Defined MD Aesthetics
              </div>
              <p className="font-jost text-sm font-light leading-relaxed" style={{ color: "#666" }}>
                Certified permanent makeup artist based in Nashik, specialising in eyebrow techniques, lip blush, scalp micropigmentation, and beauty spot making.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-6" style={{ background: "#F4EFE8" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <motion.p
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--green-light)" }}>
                Continue Reading
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
                className="font-cormorant font-semibold mb-4" style={{ color: "var(--green)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                More From the Journal
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center" style={{ color: "var(--green-light)" }}>
                <DiamondLineDoodle width={160} />
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedPosts.map((related, i) => (
                <motion.div
                  key={related.slug}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <Link href={`/blog/${related.slug}`} className="block group">
                    <div
                      className="bg-white rounded-2xl p-6 h-full transition-all duration-400 hover:shadow-md"
                      style={{ border: "1px solid rgba(201,164,53,0.15)" }}>
                      <span
                        className="font-jost text-xs tracking-widest uppercase px-3 py-1 rounded-full inline-block mb-4"
                        style={{ background: "rgba(12,59,46,0.07)", color: "var(--green)" }}>
                        {related.category}
                      </span>
                      <h3
                        className="font-cormorant font-semibold mb-3 group-hover:text-[#C9A435] transition-colors"
                        style={{ color: "var(--green)", fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)", lineHeight: 1.3 }}>
                        {related.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 font-jost text-xs tracking-widest uppercase font-medium"
                        style={{ color: "var(--green-light)" }}>
                        Read <ArrowRight size={11} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "var(--green)" }}>
        <div className="max-w-xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="font-cormorant font-semibold mb-4" style={{ color: "var(--gold-light)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Ready to Book Your Appointment?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center mb-6" style={{ color: "var(--gold)" }}>
            <DiamondLineDoodle width={160} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-jost font-light text-sm leading-relaxed mb-8" style={{ color: "rgba(232,213,163,0.7)" }}>
            Message Mayuri directly on WhatsApp to book your free consultation or ask any questions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918422926464"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-jost text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
              style={{ background: "var(--gold)", color: "var(--green)" }}>
              <FaWhatsapp size={17} /> Book Appointment
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-jost text-sm tracking-widest uppercase font-medium border transition-all duration-300 hover:scale-105"
              style={{ borderColor: "var(--gold)", color: "var(--gold)" }}>
              <ArrowLeft size={15} /> More Articles
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
