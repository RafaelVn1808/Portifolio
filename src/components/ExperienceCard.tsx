"use client";

import { motion } from "motion/react";
import { experiences } from "@/data/projects";

const colorMap: Record<string, string> = {
  "neu-yellow": "bg-neu-yellow",
  "neu-orange": "bg-neu-orange",
  "neu-purple": "bg-neu-purple",
  "neu-green": "bg-neu-green",
  "neu-blue": "bg-neu-blue",
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ExperienceSection() {
  return (
    <section className="px-6 py-10 md:px-12 lg:px-24" id="experiencia">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading font-black text-4xl md:text-5xl mb-4">
          Experiência
        </h2>
        <p className="font-body text-lg text-neu-black/60 mb-12 max-w-xl">
          Evolução contínua: de estagiário a desenvolvedor em sistemas críticos de órgão público.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div key={exp.id} variants={item}>
              <ExperienceCardItem experience={exp} isFirst={index === 0} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceCardItem({
  experience,
  isFirst,
}: {
  experience: (typeof experiences)[0];
  isFirst: boolean;
}) {
  return (
    <div
      className={`
        border-3 border-neu-black shadow-neu bg-neu-white
        ${isFirst ? "md:grid md:grid-cols-[1fr_auto]" : ""}
      `}
    >
      <div className="p-6 md:p-8">
        <div
          className={`${colorMap[experience.color] || "bg-neu-yellow"} inline-block px-4 py-1 border-2 border-neu-black mb-4`}
        >
          <span className="font-heading font-bold text-sm text-neu-black">
            {experience.period}
          </span>
        </div>

        <h3 className="font-heading font-black text-xl md:text-2xl mb-1">
          {experience.role}
        </h3>
        <p className="font-body text-sm text-neu-black/60 mb-4">
          {experience.department} — {experience.company}
        </p>

        <ul className="space-y-2">
          {experience.highlights.map((highlight) => (
            <li
              key={highlight}
              className="font-body text-sm flex items-start gap-2"
            >
              <span className="text-neu-black font-black mt-0.5 shrink-0">
                ▸
              </span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      {isFirst && experience.metrics.length > 0 && (
        <div className="border-t-3 md:border-t-0 md:border-l-3 border-neu-black bg-neu-yellow p-6 md:p-8 flex flex-col items-center justify-center gap-6 min-w-[200px]">
          {experience.metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <span className="font-heading font-black text-5xl md:text-6xl lg:text-7xl block text-neu-black leading-none">
                {metric.value}
              </span>
              <span className="font-body text-sm text-neu-black/80 mt-2 block max-w-[160px]">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
