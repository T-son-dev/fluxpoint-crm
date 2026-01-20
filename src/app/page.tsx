"use client";

import { motion } from "framer-motion";
import { Users, DollarSign, TrendingUp, Target, Plus, Filter, Download } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { DealsChart } from "@/components/dashboard/DealsChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { TopDeals } from "@/components/dashboard/TopDeals";
import { Button } from "@/components/ui/Button";

const stats = [
  {
    title: "Total Revenue",
    value: "$472,500",
    change: 12.5,
    changeLabel: "vs last month",
    icon: DollarSign,
    trend: "up" as const,
  },
  {
    title: "Active Deals",
    value: "131",
    change: 8.2,
    changeLabel: "vs last month",
    icon: Target,
    trend: "up" as const,
  },
  {
    title: "New Contacts",
    value: "284",
    change: -3.1,
    changeLabel: "vs last month",
    icon: Users,
    trend: "down" as const,
  },
  {
    title: "Conversion Rate",
    value: "24.8%",
    change: 4.3,
    changeLabel: "vs last month",
    icon: TrendingUp,
    trend: "up" as const,
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Sidebar />

      {/* Main Content */}
      <div className="pl-60 transition-all duration-200">
        <Header
          title="Dashboard"
          subtitle="Welcome back, Jason. Here's what's happening with your business."
        />

        <main className="p-6 space-y-6">
          {/* Actions Bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between"
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
            <Button variant="ghost" size="md">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <StatsCard key={stat.title} {...stat} index={index} />
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <div>
              <DealsChart />
            </div>
          </div>

          {/* Activity & Deals Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentActivity />
            <TopDeals />
          </div>
        </main>
      </div>
    </div>
  );
}
