"use client";

import { motion } from "framer-motion";
import { Building2, MoreHorizontal, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const deals = [
  {
    id: 1,
    company: "TechCorp International",
    contact: "Sarah Chen",
    value: 125000,
    stage: "Negotiation",
    probability: 85,
    logo: "TC",
  },
  {
    id: 2,
    company: "Global Solutions Ltd",
    contact: "Michael Park",
    value: 89000,
    stage: "Proposal",
    probability: 65,
    logo: "GS",
  },
  {
    id: 3,
    company: "Innovate AI",
    contact: "Emma Wilson",
    value: 67000,
    stage: "Qualified",
    probability: 45,
    logo: "IA",
  },
  {
    id: 4,
    company: "DataFlow Systems",
    contact: "James Brown",
    value: 54000,
    stage: "Proposal",
    probability: 70,
    logo: "DF",
  },
];

const stageColors = {
  Negotiation: "success",
  Proposal: "info",
  Qualified: "warning",
} as const;

export function TopDeals() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Top Deals</CardTitle>
            <p className="text-sm text-zinc-500 mt-1">Highest value opportunities</p>
          </div>
          <button className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
            View all
          </button>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            {deals.map((deal, index) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 4 }}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-xl",
                  "bg-[#1f1f23]/50 hover:bg-[#1f1f23]",
                  "border border-transparent hover:border-[#27272a]",
                  "cursor-pointer transition-all duration-200"
                )}
              >
                {/* Company Logo */}
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center">
                  <span className="text-sm font-semibold text-indigo-300">
                    {deal.logo}
                  </span>
                </div>

                {/* Deal Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-white truncate">
                      {deal.company}
                    </p>
                    <Badge variant={stageColors[deal.stage as keyof typeof stageColors]}>
                      {deal.stage}
                    </Badge>
                  </div>
                  <p className="text-xs text-zinc-500 mt-0.5">{deal.contact}</p>
                </div>

                {/* Value & Probability */}
                <div className="text-right">
                  <p className="text-sm font-semibold text-white">
                    ${deal.value.toLocaleString()}
                  </p>
                  <div className="flex items-center gap-1 justify-end mt-0.5">
                    <TrendingUp className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-green-400">{deal.probability}%</span>
                  </div>
                </div>

                {/* Actions */}
                <button className="p-1.5 rounded-lg hover:bg-[#27272a] text-zinc-500 hover:text-zinc-300 transition-colors">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
