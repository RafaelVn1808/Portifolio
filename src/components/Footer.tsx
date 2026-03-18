"use client";

import { motion } from "motion/react";
import { personalInfo } from "@/data/projects";
import NeuButton from "./NeuButton";

export default function Footer() {
  return (
    <footer id="contato" className="px-6 py-12 md:px-12 lg:px-24 border-t-3 border-neu-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="md:flex md:items-start md:justify-between gap-8">
          <div className="mb-8 md:mb-0">
            <h2 className="font-heading font-black text-3xl md:text-4xl mb-2">
              Vamos conversar?
            </h2>
            <p className="font-body text-neu-black/60 max-w-md">
              Aberto a oportunidades backend, projetos freelance e colaborações
              técnicas.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <NeuButton
              href={`mailto:${personalInfo.emailProfessional}`}
              variant="primary"
              size="md"
            >
              {personalInfo.emailProfessional}
            </NeuButton>
            <NeuButton
              href={`mailto:${personalInfo.email}`}
              variant="outline"
              size="md"
            >
              {personalInfo.email}
            </NeuButton>
            <NeuButton
              href={personalInfo.github}
              variant="outline"
              size="md"
            >
              GitHub
            </NeuButton>
            <NeuButton
              href={personalInfo.linkedin}
              variant="outline"
              size="md"
            >
              LinkedIn
            </NeuButton>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t-2 border-neu-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-neu-black/40">
            {new Date().getFullYear()} — Rafael Almeida. Feito com Next.js,
            Tailwind CSS e Motion.
          </p>
          <p className="font-body text-sm text-neu-black/40">
            {personalInfo.phone}
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
