"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";

const projects = [
  {
    title: "Tesla Cyberrad",
    href: "/projects/tesla",
    imageSrc: "/images/tesla-cyber-design-design-page-overview.png",
    category: "Transportation",
  },
  {
    title: "Readymade Motorcycle",
    href: "/projects/readymade",
    imageSrc: "/images/readymade-motorcycle-design-page-overview.png",
    category: "Transportation",
  },
  {
    title: "LittleEasy Table",
    href: "/projects/little",
    imageSrc: "/images/little-easy-table--design-page-overview.png",
    category: "Furniture",
  },
  {
    title: "The Book of Time",
    href: "/projects/illustration",
    imageSrc: "/images/the-book-of-time-design-page-overview.png",
    category: "Illustration",
  },
];

export default function DesignPage() {
  return (
    <div className="w-[90%] max-w-[1100px] mx-auto mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-medium mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Selected Works
        </motion.p>
        <AnimatedText
          text="Design Projects"
          as="h1"
          className="text-[clamp(36px,8vw,72px)] font-light tracking-wide"
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
          },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.href}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              },
            }}
          >
            <Link href={project.href} className="group block">
              <div className="overflow-hidden rounded-lg relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    width={550}
                    height={400}
                    className="w-full h-auto transition-all duration-500 group-hover:brightness-90"
                  />
                </motion.div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                  <div>
                    <p className="text-white/70 text-xs uppercase tracking-[0.2em] mb-1">
                      {project.category}
                    </p>
                    <p className="text-white text-xl font-light">
                      {project.title}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-1">
                    {project.category}
                  </p>
                  <p className="text-lg font-light group-hover:text-[var(--accent)] transition-colors duration-300">
                    {project.title}
                  </p>
                </div>
                <motion.span
                  className="text-[var(--accent)] text-xl"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  &rarr;
                </motion.span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
