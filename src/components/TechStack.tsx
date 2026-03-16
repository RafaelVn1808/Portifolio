"use client";

import { motion } from "motion/react";
import { techCategories } from "@/data/projects";

const colorMap: Record<string, string> = {
  "neu-blue": "bg-neu-blue",
  "neu-green": "bg-neu-green",
  "neu-orange": "bg-neu-orange",
  "neu-red": "bg-neu-red",
  "neu-pink": "bg-neu-pink",
  "neu-purple": "bg-neu-purple",
  "neu-yellow": "bg-neu-yellow",
  "neu-cyan": "bg-neu-cyan",
};

const textColorMap: Record<string, string> = {
  "neu-blue": "text-neu-white",
  "neu-green": "text-neu-black",
  "neu-orange": "text-neu-black",
  "neu-red": "text-neu-white",
  "neu-pink": "text-neu-white",
  "neu-purple": "text-neu-white",
  "neu-yellow": "text-neu-black",
  "neu-cyan": "text-neu-black",
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function TechStack() {
  return (
    <section className="px-6 py-10 md:px-12 lg:px-24" id="stack">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading font-black text-4xl md:text-5xl mb-4">
          Tech Stack
        </h2>
        <p className="font-body text-lg text-neu-black/60 mb-12 max-w-xl">
          As ferramentas que uso para construir e entregar sistemas em produção.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.category}
              variants={item}
              className="border-3 border-neu-black shadow-neu bg-neu-white"
            >
              <div
                className={`${colorMap[category.color] || "bg-neu-blue"} px-5 py-3 border-b-3 border-neu-black`}
              >
                <h3
                  className={`font-heading font-bold text-base ${textColorMap[category.color] || "text-neu-white"}`}
                >
                  {category.category}
                </h3>
              </div>
              <div className="p-5 flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-block bg-neu-white text-neu-black text-sm font-bold px-3 py-1.5 border-2 border-neu-black shadow-[2px_2px_0px_#000] cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
