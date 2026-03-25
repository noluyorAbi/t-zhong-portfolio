"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "@/components/ui/AnimatedText";

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectGalleryProps {
  title: string;
  subtitle: string;
  images: ProjectImage[];
  backHref?: string;
}

function ParallaxImage({
  src,
  alt,
  index,
  priority = false,
}: {
  src: string;
  alt: string;
  index: number;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 60,
        clipPath: "inset(12% 5% 12% 5%)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1,
        delay: index === 0 ? 0 : 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="overflow-hidden rounded-lg"
    >
      <motion.div style={{ y }} className="will-change-transform">
        <Image
          src={src}
          alt={alt}
          width={1100}
          height={700}
          className="w-full h-auto"
          priority={priority}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ProjectGallery({
  title,
  subtitle,
  images,
  backHref = "/design",
}: ProjectGalleryProps) {
  return (
    <div className="w-[90%] max-w-[1100px] mx-auto mt-12">
      {/* Back Link */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-[var(--accent)] transition-colors duration-300 group"
        >
          <motion.span
            className="inline-block"
            whileHover={{ x: -4 }}
            transition={{ duration: 0.2 }}
          >
            &larr;
          </motion.span>
          Back to Design
        </Link>
      </motion.div>

      {/* Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-medium mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        <AnimatedText
          text={title}
          as="h1"
          className="text-[clamp(32px,6vw,64px)] font-light tracking-wide"
        />
      </motion.div>

      {/* Image Gallery */}
      <div className="space-y-10">
        {images.map((img, i) => (
          <ParallaxImage
            key={img.src}
            src={img.src}
            alt={img.alt}
            index={i}
            priority={i === 0}
          />
        ))}
      </div>

      {/* Bottom nav */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href={backHref}
          className="inline-block px-8 py-3 text-sm uppercase tracking-[0.2em] text-[var(--accent)] border border-[var(--accent)]/30 rounded-full hover:bg-[var(--accent)] hover:text-white transition-all duration-400"
        >
          View All Projects
        </Link>
      </motion.div>
    </div>
  );
}
