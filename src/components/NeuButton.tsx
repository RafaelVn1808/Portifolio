"use client";

import { motion } from "motion/react";

interface NeuButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantStyles = {
  primary:
    "bg-neu-black text-neu-white hover:bg-neu-blue",
  secondary:
    "bg-neu-yellow text-neu-black hover:bg-neu-orange",
  outline:
    "bg-neu-white text-neu-black",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function NeuButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}: NeuButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-heading font-bold
    border-3 border-neu-black
    shadow-neu-sm
    active:translate-x-[4px] active:translate-y-[4px] active:shadow-neu-pressed
    transition-all duration-100
    cursor-pointer select-none
  `;

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedStyles}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
