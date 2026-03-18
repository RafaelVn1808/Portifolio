"use client";

import { motion } from "motion/react";
import { personalInfo, certifications } from "@/data/projects";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const institutionColors: Record<string, string> = {
  Udemy: "bg-neu-orange",
  DIO: "bg-neu-purple",
};

const institutionTextColors: Record<string, string> = {
  Udemy: "text-neu-black",
  DIO: "text-neu-white",
};

export default function FormacaoSection() {
  const edu = personalInfo.education[0];

  return (
    <section className="px-6 py-10 md:px-12 lg:px-24" id="formacao">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading font-black text-4xl md:text-5xl mb-4">
          Formação
        </h2>
        <p className="font-body text-lg text-neu-black/60 mb-12 max-w-xl">
          Graduação em andamento e cursos técnicos voltados à prática em produção.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8"
        >
          <motion.div
            variants={item}
            className="border-3 border-neu-black shadow-neu bg-neu-white"
          >
            <div className="bg-neu-cyan px-6 py-4 border-b-3 border-neu-black">
              <span className="font-heading font-bold text-sm text-neu-black uppercase tracking-wider">
                Graduação
              </span>
            </div>
            <div className="px-6 py-5 md:flex md:items-center md:justify-between gap-6">
              <div>
                <h3 className="font-heading font-black text-xl md:text-2xl text-neu-black">
                  {edu.course}
                </h3>
                <p className="font-body text-sm text-neu-black/60 mt-1">
                  {edu.institution}
                </p>
              </div>
              <div className="mt-3 md:mt-0 shrink-0">
                <span className="inline-block bg-neu-yellow text-neu-black font-heading font-bold text-sm px-4 py-2 border-2 border-neu-black shadow-[2px_2px_0px_#000]">
                  {edu.period}
                </span>
              </div>
            </div>
          </motion.div>

          <div>
            <h3 className="font-heading font-black text-2xl md:text-3xl mb-6">
              Certificados
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.title}
                  variants={item}
                  className="border-3 border-neu-black shadow-neu-sm bg-neu-white flex flex-col"
                >
                  <div
                    className={`${institutionColors[cert.institution] ?? "bg-neu-blue"} px-4 py-2 border-b-3 border-neu-black flex items-center justify-between gap-2`}
                  >
                    <span
                      className={`font-heading font-bold text-xs uppercase tracking-wider ${institutionTextColors[cert.institution] ?? "text-neu-white"}`}
                    >
                      {cert.institution}
                    </span>
                    <span
                      className={`font-heading font-bold text-xs ${institutionTextColors[cert.institution] ?? "text-neu-white"} opacity-80`}
                    >
                      {cert.hours}h
                    </span>
                  </div>
                  <div className="px-4 py-4 flex-1">
                    <p className="font-body text-sm leading-snug text-neu-black line-clamp-3">
                      {cert.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
