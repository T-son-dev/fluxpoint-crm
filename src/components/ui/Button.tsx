"use client";

import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, disabled, type = "button", onClick }, ref) => {
    const variants = {
      primary: cn(
        "bg-gradient-to-r from-indigo-500 to-purple-600",
        "hover:from-indigo-400 hover:to-purple-500",
        "text-white shadow-lg shadow-indigo-500/25",
        "hover:shadow-indigo-500/40"
      ),
      secondary: cn(
        "bg-[#18181b] border border-[#27272a]",
        "hover:bg-[#27272a] hover:border-[#3f3f46]",
        "text-zinc-200"
      ),
      ghost: cn(
        "bg-transparent",
        "hover:bg-[#18181b]",
        "text-zinc-400 hover:text-zinc-200"
      ),
      danger: cn(
        "bg-red-500/10 border border-red-500/20",
        "hover:bg-red-500/20 hover:border-red-500/30",
        "text-red-400"
      ),
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    };

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        whileHover={disabled ? undefined : { scale: 1.02 }}
        whileTap={disabled ? undefined : { scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center gap-2",
          "font-medium rounded-lg",
          "transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-indigo-500/50",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          sizes[size],
          className
        )}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
