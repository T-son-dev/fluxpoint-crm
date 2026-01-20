"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Filter,
  MoreHorizontal,
  Calendar,
  DollarSign,
  User,
  GripVertical,
} from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface Deal {
  id: number;
  title: string;
  company: string;
  value: number;
  contact: string;
  dueDate: string;
  probability: number;
}

interface Stage {
  id: string;
  name: string;
  color: string;
  deals: Deal[];
}

const initialStages: Stage[] = [
  {
    id: "lead",
    name: "Lead",
    color: "#6366f1",
    deals: [
      {
        id: 1,
        title: "Enterprise License",
        company: "TechStart Inc",
        value: 45000,
        contact: "John Smith",
        dueDate: "2024-02-15",
        probability: 20,
      },
      {
        id: 2,
        title: "Annual Subscription",
        company: "DataViz Co",
        value: 28000,
        contact: "Sarah Lee",
        dueDate: "2024-02-20",
        probability: 25,
      },
    ],
  },
  {
    id: "qualified",
    name: "Qualified",
    color: "#8b5cf6",
    deals: [
      {
        id: 3,
        title: "Platform Integration",
        company: "CloudNine",
        value: 67000,
        contact: "Mike Chen",
        dueDate: "2024-02-10",
        probability: 45,
      },
      {
        id: 4,
        title: "Custom Development",
        company: "Innovate Labs",
        value: 92000,
        contact: "Emma Wilson",
        dueDate: "2024-02-25",
        probability: 50,
      },
    ],
  },
  {
    id: "proposal",
    name: "Proposal",
    color: "#a855f7",
    deals: [
      {
        id: 5,
        title: "SaaS Migration",
        company: "Global Solutions",
        value: 125000,
        contact: "David Park",
        dueDate: "2024-02-05",
        probability: 65,
      },
    ],
  },
  {
    id: "negotiation",
    name: "Negotiation",
    color: "#c084fc",
    deals: [
      {
        id: 6,
        title: "Enterprise Deal",
        company: "TechCorp Intl",
        value: 180000,
        contact: "Sarah Chen",
        dueDate: "2024-02-01",
        probability: 85,
      },
    ],
  },
  {
    id: "closed",
    name: "Closed Won",
    color: "#22c55e",
    deals: [
      {
        id: 7,
        title: "Annual Contract",
        company: "MegaCorp",
        value: 95000,
        contact: "James Brown",
        dueDate: "2024-01-30",
        probability: 100,
      },
    ],
  },
];

function DealCard({ deal, stageColor }: { deal: Deal; stageColor: string }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -2 }}
      className={cn(
        "p-4 rounded-xl bg-[#18181b] border border-[#27272a]",
        "hover:border-[#3f3f46] hover:bg-[#1f1f23]",
        "cursor-grab active:cursor-grabbing",
        "transition-colors duration-200"
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <GripVertical className="w-4 h-4 text-zinc-600" />
          <h4 className="text-sm font-medium text-white">{deal.title}</h4>
        </div>
        <button className="p-1 rounded hover:bg-[#27272a] text-zinc-500 hover:text-zinc-300 transition-colors">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-zinc-400 mb-3">{deal.company}</p>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <User className="w-3.5 h-3.5" />
          <span>{deal.contact}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <Calendar className="w-3.5 h-3.5" />
          <span>{new Date(deal.dueDate).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-[#27272a] flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <DollarSign className="w-4 h-4 text-green-400" />
          <span className="text-sm font-semibold text-white">
            ${deal.value.toLocaleString()}
          </span>
        </div>
        <div
          className="px-2 py-1 rounded text-xs font-medium"
          style={{ backgroundColor: `${stageColor}20`, color: stageColor }}
        >
          {deal.probability}%
        </div>
      </div>
    </motion.div>
  );
}

export default function DealsPage() {
  const [stages] = useState(initialStages);

  const totalValue = stages.reduce(
    (acc, stage) => acc + stage.deals.reduce((sum, deal) => sum + deal.value, 0),
    0
  );

  const totalDeals = stages.reduce((acc, stage) => acc + stage.deals.length, 0);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Sidebar />

      <div className="pl-60 transition-all duration-200">
        <Header
          title="Deals Pipeline"
          subtitle={`${totalDeals} deals · $${(totalValue / 1000).toFixed(0)}k total value`}
        />

        <main className="p-6">
          {/* Actions Bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between gap-4 mb-6"
          >
            <div className="flex items-center gap-3">
              <Button variant="primary" size="md">
                <Plus className="w-4 h-4" />
                New Deal
              </Button>
              <Button variant="secondary" size="md">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#18181b] border border-[#27272a]">
                <span className="text-xs text-zinc-500">Pipeline Value:</span>
                <span className="text-sm font-semibold text-white">
                  ${totalValue.toLocaleString()}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Kanban Board */}
          <div className="flex gap-4 overflow-x-auto pb-4">
            {stages.map((stage, stageIndex) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: stageIndex * 0.1 }}
                className="flex-shrink-0 w-[300px]"
              >
                {/* Stage Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: stage.color }}
                    />
                    <h3 className="text-sm font-semibold text-white">{stage.name}</h3>
                    <Badge variant="default">{stage.deals.length}</Badge>
                  </div>
                  <button className="p-1 rounded hover:bg-[#18181b] text-zinc-500 hover:text-zinc-300 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Stage Value */}
                <div className="mb-4 p-3 rounded-lg bg-[#18181b]/50 border border-[#27272a]">
                  <p className="text-xs text-zinc-500 mb-1">Stage Value</p>
                  <p className="text-lg font-semibold text-white">
                    ${stage.deals.reduce((sum, deal) => sum + deal.value, 0).toLocaleString()}
                  </p>
                </div>

                {/* Deals */}
                <div className="space-y-3">
                  {stage.deals.map((deal) => (
                    <DealCard key={deal.id} deal={deal} stageColor={stage.color} />
                  ))}
                </div>

                {/* Add Deal Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full mt-3 p-3 rounded-xl border-2 border-dashed border-[#27272a]",
                    "text-zinc-500 hover:text-zinc-400 hover:border-[#3f3f46]",
                    "flex items-center justify-center gap-2",
                    "transition-all duration-200"
                  )}
                >
                  <Plus className="w-4 h-4" />
                  <span className="text-sm">Add Deal</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
