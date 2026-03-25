"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import AnimatedText from "@/components/ui/AnimatedText";

interface ProjectShowcaseProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  scrollIconSrc: string;
  href: string;
  priority?: boolean;
  index: number;
}

export default function ProjectShowcase({
  title,
  subtitle,
  description,
  imageSrc,
  scrollIconSrc,
  href,
  priority = false,
  index,
}: ProjectShowcaseProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const isEven = index % 2 === 0;

  return (
    <section className="w-[90%] max-w-[1100px] mx-auto mt-24">
      <div
        className={`flex flex-col ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        } gap-10 items-center`}
      >
        {/* Text Side */}
        <motion.div
          className="md:w-[35%] text-center md:text-left"
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.p
            className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-medium mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
          <AnimatedText
            text={title}
            as="h2"
            className="text-[clamp(28px,4vw,42px)] font-light tracking-wide leading-tight"
          />
          <motion.p
            className="text-sm text-gray-500 mt-4 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex items-center gap-3 mt-6 justify-center md:justify-start"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Image
              src={scrollIconSrc}
              alt=""
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <Link
              href={href}
              className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors duration-300 relative group"
            >
              View Project
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          ref={cardRef}
          className="md:w-[65%]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            perspective: 1000,
          }}
          initial={{
            opacity: 0,
            scale: 0.9,
            clipPath: "inset(10% 10% 10% 10%)",
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            clipPath: "inset(0% 0% 0% 0%)",
          }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Link href={href} className="block overflow-hidden rounded-lg group">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src={imageSrc}
                alt={title}
                width={1100}
                height={700}
                className="w-full h-auto transition-all duration-500 group-hover:brightness-105"
                priority={priority}
              />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      <motion.hr
        className="divider mt-16"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transformOrigin: isEven ? "left" : "right" }}
      />
    </section>
  );
}
