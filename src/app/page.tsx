"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectShowcase from "@/components/ProjectShowcase";
import AnimatedText from "@/components/ui/AnimatedText";
import MagneticButton from "@/components/ui/MagneticButton";

const projects = [
  {
    title: "Tesla Cyberrad",
    subtitle: "Transportation Design",
    description:
      "A futuristic motorcycle concept inspired by Tesla's Cybertruck design language. Exploring angular geometry and electric powertrain integration in two-wheeled mobility.",
    imageSrc: "/images/cyber-motorrad.png",
    scrollIconSrc: "/images/tesla-cyber-motorrad-scroll-icon-homepage.png",
    href: "/projects/tesla",
  },
  {
    title: "Readymade Motorcycle",
    subtitle: "Transportation Design",
    description:
      "A motorcycle design concept that reimagines the readymade philosophy in industrial design, combining found objects with purposeful engineering.",
    imageSrc: "/images/readymade-motorcycle-design-page-overview.png",
    scrollIconSrc: "/images/readymade-motorbike-scroll-icon-homepage.png",
    href: "/projects/readymade",
  },
  {
    title: "The Book of Time",
    subtitle: "Illustration",
    description:
      "An illustrated book project exploring the concept of time through visual storytelling and artistic expression.",
    imageSrc: "/images/book-of-time-design-page-overview.png",
    scrollIconSrc: "/images/the-book-of-time-scroll-icon-homepage.png",
    href: "/projects/illustration",
  },
  {
    title: "LittleEasy Table",
    subtitle: "Furniture Design",
    description:
      "A minimalist table design focusing on simplicity, functionality, and elegant form. Easy to assemble, easy to live with.",
    imageSrc: "/images/little-table-design-page-overview.png",
    scrollIconSrc: "/images/little-easy-table-scroll-icon-homepage.png",
    href: "/projects/little",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero / About Me Section */}
      <section className="w-[90%] max-w-[1100px] mx-auto mt-20 flex flex-col md:flex-row items-center gap-14">
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.div
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-[var(--accent)]/10 to-transparent rounded-2xl" />
            <Image
              src="/images/bio-pic-about-me-homepage-2x.png"
              alt="Tianxiong Zhong"
              width={300}
              height={300}
              className="w-[260px] h-auto relative rounded-lg"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.p
            className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-medium mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Design Portfolio
          </motion.p>
          <AnimatedText
            text="About Me"
            as="h1"
            className="text-[clamp(32px,5vw,52px)] font-light tracking-wide"
          />
          <motion.p
            className="text-base text-gray-600 mt-5 leading-[1.8] max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hi, I&apos;m Tianxiong Zhong, a design student at{" "}
            <a
              href="https://design.hm.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors duration-300 underline underline-offset-4 decoration-[var(--accent)]/30 hover:decoration-[var(--accent)]"
            >
              Hochschule M&uuml;nchen
            </a>
            . Before studying design, I worked as an automotive engineer, which
            gave me a strong foundation in technical problem-solving. I&apos;m
            passionate about photography and visual storytelling, bringing a
            unique perspective to my design work that bridges engineering
            precision with creative expression.
          </motion.p>
        </motion.div>
      </section>

      <motion.hr
        className="divider w-[90%] max-w-[1100px] mx-auto mt-16"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transformOrigin: "left" }}
      />

      {/* Project Showcases */}
      {projects.map((project, i) => (
        <ProjectShowcase
          key={project.href}
          {...project}
          priority={i === 0}
          index={i}
        />
      ))}

      {/* Contact CTA */}
      <motion.section
        className="w-[90%] max-w-[1100px] mx-auto text-center mt-28 mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col items-center gap-5">
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.08, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/bio-pic-contact-homepage-2x.png"
                alt="Contact Tianxiong Zhong"
                width={120}
                height={120}
                className="w-[100px] h-auto rounded-full shadow-lg shadow-[var(--accent)]/10"
              />
            </motion.div>
          </Link>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/finger-pointing-up-homepage.png"
              alt=""
              width={24}
              height={24}
              className="w-5 h-5 opacity-60"
            />
          </motion.div>
          <MagneticButton>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 text-sm uppercase tracking-[0.2em] text-[var(--accent)] border border-[var(--accent)]/30 rounded-full hover:bg-[var(--accent)] hover:text-white transition-all duration-400"
            >
              Get in touch
            </Link>
          </MagneticButton>
        </div>
      </motion.section>
    </>
  );
}
