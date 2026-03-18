"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Projetos",    href: "#projetos"    },
  { label: "Experiência", href: "#experiencia"  },
  { label: "Formação",    href: "#formacao"     },
  { label: "Stack",       href: "#stack"        },
  { label: "Contato",     href: "#contato"      },
];

const sectionIds = ["inicio", "projetos", "experiencia", "formacao", "stack", "contato"];

function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function useActiveSection() {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}

export default function Navbar() {
  const scrolled = useScrolled();
  const activeSection = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 h-16
        bg-neu-white border-b-3 border-neu-black
        transition-shadow duration-150
        ${scrolled ? "shadow-neu-sm" : ""}
      `}
    >
      <div className="max-w-5xl mx-auto h-full px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <a
          href="#inicio"
          className="inline-flex items-center justify-center w-10 h-10 bg-neu-black text-neu-white font-heading font-black text-base border-2 border-neu-black hover:bg-neu-blue transition-colors duration-100 select-none"
          aria-label="Voltar ao topo"
        >
          RA
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`
                  font-heading font-bold text-sm px-3 py-1.5 transition-all duration-100
                  ${isActive
                    ? "bg-neu-yellow border-2 border-neu-black shadow-[2px_2px_0px_#000]"
                    : "hover:bg-neu-black/5 border-2 border-transparent"
                  }
                `}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 border-2 border-neu-black bg-neu-white active:bg-neu-yellow transition-colors duration-100 gap-1.5"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-0.5 bg-neu-black origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="block w-5 h-0.5 bg-neu-black"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-0.5 bg-neu-black origin-center"
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-neu-white border-b-3 border-neu-black shadow-neu"
            aria-label="Menu mobile"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`
                    block px-6 py-4 font-heading font-bold text-base border-b-2 border-neu-black/10 last:border-b-0
                    transition-colors duration-100
                    ${isActive ? "bg-neu-yellow" : "hover:bg-neu-black/5"}
                  `}
                >
                  {link.label}
                </a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
