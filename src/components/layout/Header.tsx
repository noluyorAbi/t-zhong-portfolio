"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-[90%] max-w-[1100px] mx-auto pt-8"
    >
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/personal-logo.jpg"
              alt="Tianxiong Zhong Logo"
              width={40}
              height={40}
              className="rounded"
            />
          </motion.div>
          <span className="text-lg font-medium tracking-wide group-hover:text-[var(--accent)] transition-colors duration-300">
            Tianxiong Zhong
          </span>
        </Link>
        <div className="flex gap-8 text-sm uppercase tracking-[0.2em]">
          {[
            { href: "/design", label: "Design" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <MagneticButton key={link.href}>
              <Link href={link.href} className="relative py-2 group">
                <span
                  className={`transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-[var(--accent)]"
                      : "group-hover:text-[var(--accent)]"
                  }`}
                >
                  {link.label}
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 h-[1px] bg-[var(--accent)]"
                  initial={false}
                  animate={{
                    width: pathname === link.href ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                />
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
              </Link>
            </MagneticButton>
          ))}
        </div>
      </nav>
      <motion.hr
        className="divider mt-5"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        style={{ transformOrigin: "left" }}
      />
    </motion.header>
  );
}
