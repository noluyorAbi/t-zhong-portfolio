"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import MagneticButton from "@/components/ui/MagneticButton";

const socials = [
  {
    name: "LinkedIn",
    icon: "/images/linkedin.png",
    href: "https://www.linkedin.com/in/tianxiong-zhong",
  },
  {
    name: "WeChat",
    icon: "/images/wechat.png",
    href: "#",
  },
  {
    name: "Instagram",
    icon: "/images/instagram.png",
    href: "https://www.instagram.com/baerchenphoto",
  },
];

const contactInfo = [
  { label: "Email", value: "t.zhong@hm.edu", href: "mailto:t.zhong@hm.edu" },
  { label: "Phone", value: "+49 176-3066-0547", href: "tel:+491763066054" },
  {
    label: "Address",
    value: "Lothstra\u00DFe 17, 80335 M\u00FCnchen",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="w-[90%] max-w-[900px] mx-auto mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-medium mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Let&apos;s Connect
        </motion.p>
        <AnimatedText
          text="Contact"
          as="h1"
          className="text-[clamp(48px,10vw,100px)] font-light tracking-wide"
        />
      </motion.div>

      <motion.hr
        className="divider"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ transformOrigin: "left" }}
      />

      <div className="flex flex-col md:flex-row gap-14 mt-10">
        <motion.div
          className="flex-1 space-y-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Social Links */}
          <div className="flex gap-5">
            {socials.map((social, i) => (
              <MagneticButton key={social.name}>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-200 hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </motion.a>
              </MagneticButton>
            ))}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-1">
                  {info.label}
                </p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-lg font-light hover:text-[var(--accent)] transition-colors duration-300"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-lg font-light">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.div
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--accent)]/5 rounded-2xl" />
            <Image
              src="/images/bio-pic-contact-page-2x.png"
              alt="Tianxiong Zhong"
              width={300}
              height={400}
              className="w-[300px] h-auto relative rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
