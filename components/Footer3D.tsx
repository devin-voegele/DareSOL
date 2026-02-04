"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Twitter, MessageCircle, Mail, Github, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
  trading: [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Strategies", href: "#strategies" },
    { label: "Performance", href: "#performance" },
    { label: "Risk Framework", href: "#risk" },
  ],
  education: [
    { label: "Trading Guides", href: "#guides" },
    { label: "Market Analysis", href: "#analysis" },
    { label: "Resources", href: "#resources" },
    { label: "Blog", href: "#blog" },
  ],
  community: [
    { label: "Twitter/X", href: "#", icon: Twitter },
    { label: "Telegram", href: "#", icon: MessageCircle },
    { label: "Discord", href: "#", icon: MessageCircle },
    { label: "GitHub", href: "#", icon: Github },
  ],
};

export default function Footer3D() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-column",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="relative pt-20 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="footer-column lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl blur-lg opacity-50" />
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                DareSOL
              </span>
            </div>

            <p className="text-gray-400 mb-6 max-w-sm">
              Solana-native trader & builder. Leveraging volatility as opportunity
              in the digital finance revolution.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Twitter, color: "hover:bg-blue-500/20 hover:border-blue-400/50" },
                { icon: MessageCircle, color: "hover:bg-blue-600/20 hover:border-blue-500/50" },
                { icon: Mail, color: "hover:bg-blue-400/20 hover:border-blue-400/50" },
                { icon: Github, color: "hover:bg-gray-500/20 hover:border-gray-500/50" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5 text-gray-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Trading Links */}
          <div className="footer-column">
            <h4 className="text-white font-semibold mb-4">Trading</h4>
            <ul className="space-y-3">
              {footerLinks.trading.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Education Links */}
          <div className="footer-column">
            <h4 className="text-white font-semibold mb-4">Education</h4>
            <ul className="space-y-3">
              {footerLinks.education.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div className="footer-column">
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    {link.icon && <link.icon className="w-4 h-4" />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="relative mb-16 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-blue-700/10 border border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get the latest news and updates from DareSOL</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 text-white placeholder:text-gray-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl font-semibold whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            © {currentYear} DareSOL. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Risk Disclosure"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
