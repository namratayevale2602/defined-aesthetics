"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data";
import { FaWhatsapp } from "react-icons/fa";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHome = pathname === "/";
  const navBg = scrolled
    ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8D5A3]/30"
    : isHome
    ? "bg-[#FAF7F2]/80"
    : "bg-[#FAF7F2]/80";

  const textColor = scrolled ? "text-[#432F4F]" : "text-[#432F4F]";
  const activeLinkColor = scrolled ? "text-[#432F4F]" : "text-[#432F4F]";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-22">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0"
            aria-label="Defined Aesthetics by Mayuri — Home"
          >
            <Image
              src="/logo/definedaesthetic.png"
              alt="Defined Aesthetics Logo"
              width={180}
              height={50}
              priority
              className="h-auto w-auto max-h-50 md:max-h-50"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-white/10 ${
                      pathname.startsWith("/services")
                        ? activeLinkColor
                        : textColor
                    }`}
                    style={{ fontFamily: "var(--font-jost), sans-serif" }}
                    onClick={() => setServicesOpen(!servicesOpen)}
                    onMouseEnter={() => setServicesOpen(true)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#E8D5A3]/40 overflow-hidden z-50"
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`block px-5 py-3 text-sm text-[#1A1A1A] hover:bg-[#C68BAA] hover:text-[#432F4F] transition-all duration-200 border-b border-[#FAF7F2] last:border-0 ${
                            pathname === sub.href ? "bg-[#432F4F]/5 text-[#432F4F]" : ""
                          }`}
                          style={{ fontFamily: "var(--font-jost), sans-serif" }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-white/10 ${
                    pathname === item.href ? activeLinkColor : textColor
                  }`}
                  style={{ fontFamily: "var(--font-jost), sans-serif" }}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Right side — CTA + WA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/918422926464"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366]/30 transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-[#097e34]" size={18} />
            </a>
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full text-sm font-semibold bg-[#C68BAA] text-[#432F4F] transition-all duration-200 shadow-sm"
              style={{ fontFamily: "var(--font-jost), sans-serif" }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        } bg-[#432F4F] border-t border-[#C9A435]/20`}
      >
        <div className="px-4 py-4 space-y-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-[#D8D1BE] text-sm font-medium rounded-xl hover:bg-white/5 transition-colors"
                  style={{ fontFamily: "var(--font-jost), sans-serif" }}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2.5 text-[#D8D1BE] text-sm rounded-xl hover:bg-white/5 transition-colors"
                        style={{ fontFamily: "var(--font-jost), sans-serif" }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                  pathname === item.href
                    ? "text-[#D8D1BE] bg-white/5"
                    : "text-[#D8D1BE] hover:bg-white/5"
                }`}
                style={{ fontFamily: "var(--font-jost), sans-serif" }}
              >
                {item.label}
              </Link>
            )
          )}
          <div className="pt-3 flex gap-3 border-t border-[#C9A435]/20 mt-3">
            <a
              href="https://wa.me/918422926464"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#a3d0b2] text-[#127e37] text-sm font-medium flex-1 justify-center"
            >
              <FaWhatsapp size={16} />
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="flex-1 text-center px-4 py-2.5 rounded-full bg-[#C68BAA] text-[#432F4F] text-sm font-semibold"
              style={{ fontFamily: "var(--font-jost), sans-serif" }}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}