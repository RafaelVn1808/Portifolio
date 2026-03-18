"use client";

import { motion } from "motion/react";
import { personalInfo } from "@/data/projects";
import NeuButton from "./NeuButton";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center px-6 py-20 md:px-12 lg:px-24">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-5xl mx-auto"
      >
        <motion.div variants={item} className="mb-6">
          <span className="inline-block bg-neu-green text-neu-black font-heading font-bold text-sm px-4 py-2 border-3 border-neu-black shadow-neu-sm">
            Disponível para oportunidades
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-heading font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div variants={item} className="mb-8">
          <span className="inline-block bg-neu-blue text-neu-white font-heading font-bold text-xl md:text-2xl px-5 py-2 border-3 border-neu-black shadow-neu-sm">
            {personalInfo.title}
          </span>
        </motion.div>

        <motion.p
          variants={item}
          className="font-body text-lg md:text-xl max-w-2xl leading-relaxed mb-10 text-neu-black/80"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap gap-4"
        >
          <NeuButton href={personalInfo.github} variant="primary" size="lg">
            <GithubIcon />
            GitHub
          </NeuButton>
          <NeuButton href={personalInfo.linkedin} variant="secondary" size="lg">
            <LinkedinIcon />
            LinkedIn
          </NeuButton>
          <NeuButton
            href={`mailto:${personalInfo.emailProfessional}`}
            variant="outline"
            size="lg"
          >
            <MailIcon />
            E-mail
          </NeuButton>
          <NeuButton
            href="/CV_RAFAEL_ATS.pdf"
            download="CV_Rafael_Almeida.pdf"
            variant="secondary"
            size="lg"
          >
            <DownloadIcon />
            Currículo
          </NeuButton>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 pt-8 border-t-2 border-neu-black/10"
        >
          <p className="font-body text-base md:text-lg max-w-2xl leading-relaxed text-neu-black/70">
            {personalInfo.about}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
