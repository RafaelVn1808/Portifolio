"use client";

import { motion } from "motion/react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function BentoGrid() {
  return (
    <section className="px-6 py-10 md:px-12 lg:px-24" id="projetos">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading font-black text-4xl md:text-5xl mb-4">
          Projetos
        </h2>
        <p className="font-body text-lg text-neu-black/60 mb-12 max-w-xl">
          APIs em produção, deploy multi-cloud e arquitetura pensada para escalar.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
