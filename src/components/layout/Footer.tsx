"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  return (
    <motion.footer
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="w-[90%] max-w-[1100px] mx-auto py-10 mt-20"
    >
      <hr className="divider mb-8" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-500">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          &copy; 2025, Tianxiong Zhong
        </motion.p>
        <div className="flex gap-8 uppercase tracking-[0.2em] text-xs">
          {[
            { href: "/", label: "Homepage" },
            { href: "/contact", label: "Contact" },
            { href: "/impressum", label: "Impressum" },
          ].map((link, i) => (
            <MagneticButton key={link.href}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                <Link
                  href={link.href}
                  className="hover:text-[var(--accent)] transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            </MagneticButton>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
