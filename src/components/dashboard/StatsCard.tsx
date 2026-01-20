"use client";

import { motion } from "framer-motion";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";

interface StatsCardProps {
  title: string;
  value: string;
  change?: number;
  changeLabel?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
  index?: number;
}

export function StatsCard({
  title,
  value,
  change,
  changeLabel,
  icon: Icon,
  trend = "neutral",
  index = 0,
}: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="p-6" glow>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm text-zinc-500 font-medium">{title}</p>
            <motion.p
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              className="text-3xl font-bold text-white tracking-tight"
            >
              {value}
            </motion.p>
            {change !== undefined && (
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium",
                    trend === "up" && "text-green-400",
                    trend === "down" && "text-red-400",
                    trend === "neutral" && "text-zinc-400"
                  )}
                >
                  {trend === "up" && <TrendingUp className="w-4 h-4" />}
                  {trend === "down" && <TrendingDown className="w-4 h-4" />}
                  {change > 0 ? "+" : ""}
                  {change}%
                </span>
                {changeLabel && (
                  <span className="text-xs text-zinc-500">{changeLabel}</span>
                )}
              </div>
            )}
          </div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={cn(
              "p-3 rounded-xl",
              "bg-gradient-to-br from-indigo-500/10 to-purple-500/10",
              "border border-indigo-500/20"
            )}
          >
            <Icon className="w-6 h-6 text-indigo-400" />
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
