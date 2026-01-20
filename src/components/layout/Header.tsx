"use client";

import { motion } from "framer-motion";
import { Search, Bell, Settings, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="h-16 border-b border-[#1f1f23] bg-[#0a0a0a]/80 backdrop-blur-xl sticky top-0 z-40">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Left - Title */}
        <div>
          <h1 className="text-lg font-semibold text-white">{title}</h1>
          {subtitle && (
            <p className="text-sm text-zinc-500">{subtitle}</p>
          )}
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "p-2 rounded-lg",
              "text-zinc-400 hover:text-zinc-200",
              "hover:bg-[#18181b] transition-all duration-200"
            )}
          >
            <Search className="w-5 h-5" />
          </motion.button>

          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "p-2 rounded-lg relative",
              "text-zinc-400 hover:text-zinc-200",
              "hover:bg-[#18181b] transition-all duration-200"
            )}
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full" />
          </motion.button>

          {/* Settings */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "p-2 rounded-lg",
              "text-zinc-400 hover:text-zinc-200",
              "hover:bg-[#18181b] transition-all duration-200"
            )}
          >
            <Settings className="w-5 h-5" />
          </motion.button>

          {/* Divider */}
          <div className="w-px h-6 bg-[#27272a]" />

          {/* Profile */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "flex items-center gap-3 px-3 py-1.5 rounded-lg",
              "hover:bg-[#18181b] transition-all duration-200"
            )}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-sm font-medium text-white">JH</span>
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-sm font-medium text-white">Jason Hiroshi</p>
              <p className="text-xs text-zinc-500">Admin</p>
            </div>
            <ChevronDown className="w-4 h-4 text-zinc-500" />
          </motion.button>
        </div>
      </div>
    </header>
  );
}
