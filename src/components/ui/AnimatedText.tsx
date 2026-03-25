"use client";

import { motion, type Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function AnimatedText({
  text,
  className = "",
  as: Tag = "h2",
}: AnimatedTextProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 30, rotateX: -40 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <Tag className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="inline-flex flex-wrap"
        style={{ perspective: "600px" }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={child}
            className="inline-block mr-[0.3em]"
            style={{ transformOrigin: "bottom" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
