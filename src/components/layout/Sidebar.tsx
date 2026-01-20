"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  BarChart3,
  Settings,
  ChevronLeft,
  Search,
  Bell,
  Plus,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Contacts", href: "/contacts", icon: Users },
  { name: "Deals", href: "/deals", icon: Briefcase },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="fixed left-0 top-0 h-screen bg-[#0a0a0a] border-r border-[#1f1f23] flex flex-col z-50"
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-4 border-b border-[#1f1f23]">
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center"
          >
            <Zap className="w-5 h-5 text-white" />
          </motion.div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.15 }}
                className="font-semibold text-white tracking-tight"
              >
                FluxPoint
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="p-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg",
            "bg-gradient-to-r from-indigo-500/10 to-purple-500/10",
            "border border-indigo-500/20 hover:border-indigo-500/40",
            "text-indigo-400 hover:text-indigo-300",
            "transition-all duration-200"
          )}
        >
          <Plus className="w-4 h-4" />
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm font-medium"
              >
                New Contact
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Search */}
      <div className="px-3 mb-2">
        <div
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-lg",
            "bg-[#18181b] border border-[#27272a]",
            "text-zinc-500 hover:text-zinc-400 hover:border-[#3f3f46]",
            "cursor-pointer transition-all duration-200"
          )}
        >
          <Search className="w-4 h-4" />
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm"
              >
                Search...
              </motion.span>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!collapsed && (
              <motion.kbd
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="ml-auto text-xs bg-[#27272a] px-1.5 py-0.5 rounded font-mono"
              >
                ⌘K
              </motion.kbd>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={{ x: 2 }}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg relative",
                  "transition-all duration-200",
                  isActive
                    ? "bg-[#18181b] text-white"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-[#18181b]/50"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-indigo-500 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.15 }}
                      className="text-sm font-medium"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Notifications */}
      <div className="px-3 py-2 border-t border-[#1f1f23]">
        <div
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-lg",
            "text-zinc-400 hover:text-zinc-200 hover:bg-[#18181b]/50",
            "cursor-pointer transition-all duration-200"
          )}
        >
          <div className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm font-medium"
              >
                Notifications
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Collapse Button */}
      <div className="p-3 border-t border-[#1f1f23]">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg",
            "text-zinc-500 hover:text-zinc-300 hover:bg-[#18181b]",
            "transition-all duration-200"
          )}
        >
          <motion.div
            animate={{ rotate: collapsed ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>
    </motion.aside>
  );
}
