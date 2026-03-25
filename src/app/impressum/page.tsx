"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";

const sections = [
  {
    title: "Angaben gem\u00E4\u00DF \u00A7 5 TMG",
    content: [
      "Tianxiong Zhong",
      "Lothstr. 17",
      "80335 M\u00FCnchen, Deutschland",
      "",
      "E-Mail: t.zhong@hm.edu",
      "Website: www.t-zhong.com",
    ],
  },
  {
    title: "Haftung f\u00FCr Inhalte",
    content: [
      "Die Inhalte unserer Seiten wurden mit gr\u00F6\u00DFter Sorgfalt erstellt. F\u00FCr die Richtigkeit, Vollst\u00E4ndigkeit und Aktualit\u00E4t der Inhalte k\u00F6nnen wir jedoch keine Gew\u00E4hr \u00FCbernehmen. Als Diensteanbieter sind wir gem\u00E4\u00DF \u00A7 7 Abs.1 TMG f\u00FCr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.",
    ],
  },
  {
    title: "Haftung f\u00FCr Links",
    content: [
      "Unser Angebot enth\u00E4lt Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k\u00F6nnen wir f\u00FCr diese fremden Inhalte auch keine Gew\u00E4hr \u00FCbernehmen.",
    ],
  },
  {
    title: "Urheberrecht",
    content: [
      "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.",
    ],
  },
  {
    title: "Datenschutz",
    content: [
      "Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten m\u00F6glich. Soweit auf unseren Seiten personenbezogene Daten erhoben werden, erfolgt dies stets auf freiwilliger Basis.",
      "",
      "Wir weisen darauf hin, dass die Daten\u00FCbertragung im Internet Sicherheitsl\u00FCcken aufweisen kann. Ein l\u00FCckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m\u00F6glich.",
    ],
  },
];

export default function ImpressumPage() {
  return (
    <div className="w-[90%] max-w-[1000px] mx-auto mt-16">
      <AnimatedText
        text="Impressum"
        as="h1"
        className="text-[clamp(32px,6vw,56px)] font-light tracking-wide"
      />

      <motion.hr
        className="divider mt-4"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ transformOrigin: "left" }}
      />

      <div className="space-y-10 mt-10">
        {sections.map((section, i) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.05,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h2 className="text-lg font-medium text-black mb-3">
              {section.title}
            </h2>
            <div className="text-base leading-[1.8] text-gray-600">
              {section.content.map((line, j) =>
                line === "" ? (
                  <br key={j} />
                ) : line.startsWith("E-Mail:") ? (
                  <p key={j}>
                    E-Mail:{" "}
                    <a
                      href="mailto:t.zhong@hm.edu"
                      className="text-[var(--accent)] hover:underline"
                    >
                      t.zhong@hm.edu
                    </a>
                  </p>
                ) : (
                  <p key={j}>{line}</p>
                ),
              )}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
