"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Project } from "@/data/projects";
import NeuButton from "./NeuButton";

const colorMap: Record<string, string> = {
  "neu-green": "bg-neu-green",
  "neu-blue": "bg-neu-blue",
  "neu-yellow": "bg-neu-yellow",
  "neu-pink": "bg-neu-pink",
  "neu-orange": "bg-neu-orange",
  "neu-purple": "bg-neu-purple",
};

const gridSpanMap: Record<string, string> = {
  normal: "",
  wide: "md:col-span-2",
  tall: "md:row-span-2",
  featured: "md:col-span-2 md:row-span-2",
};

export default function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className={`
        bg-neu-white border-3 border-neu-black shadow-neu
        active:translate-x-[4px] active:translate-y-[4px] active:shadow-neu-pressed
        transition-shadow duration-100
        flex flex-col
        ${gridSpanMap[project.gridSpan]}
      `}
    >
      <div className={`${colorMap[project.color] || "bg-neu-green"} px-6 py-4 border-b-3 border-neu-black`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-heading font-black text-xl md:text-2xl text-neu-black">
              {project.title}
            </h3>
            <p className="font-body text-sm text-neu-black/70 mt-1">
              {project.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-1 shrink-0">
            {project.deployBadges.map((badge) => (
              <span
                key={badge}
                className="inline-block bg-neu-black text-neu-white text-xs font-bold px-2 py-1 border-2 border-neu-black"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-5 flex-1 flex flex-col">
        <p className="font-body text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-block bg-neu-white text-neu-black text-xs font-bold px-3 py-1 border-2 border-neu-black shadow-[2px_2px_0px_#000]"
            >
              {tech}
            </span>
          ))}
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="border-t-3 border-neu-black pt-4 mb-4">
                <h4 className="font-heading font-bold text-sm mb-3 uppercase tracking-wider">
                  Arquitetura & Padrões
                </h4>
                <ul className="space-y-1 mb-4">
                  {project.architecture.map((item) => (
                    <li
                      key={item}
                      className="font-body text-sm flex items-start gap-2"
                    >
                      <span className="text-neu-black font-black mt-0.5">
                        ▸
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h4 className="font-heading font-bold text-sm mb-3 uppercase tracking-wider">
                  Destaques Técnicos
                </h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="font-body text-sm flex items-start gap-2"
                    >
                      <span className="text-neu-black font-black mt-0.5">
                        ▸
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto pt-4 flex flex-wrap items-center gap-3">
          <NeuButton
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            size="sm"
          >
            {isExpanded ? "Fechar" : "Deep Dive"}
          </NeuButton>
          <NeuButton href={project.githubUrl} variant="primary" size="sm">
            <GithubSmallIcon />
            Código
          </NeuButton>
          {project.liveUrl && (
            <NeuButton href={project.liveUrl} variant="secondary" size="sm">
              Demo
            </NeuButton>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function GithubSmallIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
