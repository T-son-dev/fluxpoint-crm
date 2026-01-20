"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const data = [
  { month: "Jan", revenue: 18500, deals: 12 },
  { month: "Feb", revenue: 22300, deals: 15 },
  { month: "Mar", revenue: 19800, deals: 13 },
  { month: "Apr", revenue: 28900, deals: 19 },
  { month: "May", revenue: 35200, deals: 24 },
  { month: "Jun", revenue: 42100, deals: 28 },
  { month: "Jul", revenue: 38700, deals: 26 },
  { month: "Aug", revenue: 45600, deals: 31 },
  { month: "Sep", revenue: 52300, deals: 35 },
  { month: "Oct", revenue: 48900, deals: 33 },
  { month: "Nov", revenue: 56700, deals: 38 },
  { month: "Dec", revenue: 62400, deals: 42 },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#18181b] border border-[#27272a] rounded-lg p-3 shadow-xl">
        <p className="text-zinc-400 text-xs mb-1">{label}</p>
        <p className="text-white font-semibold">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Revenue Overview</CardTitle>
            <p className="text-sm text-zinc-500 mt-1">Monthly revenue for 2024</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500" />
              <span className="text-xs text-zinc-400">Revenue</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#27272a"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#71717a", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#71717a", fontSize: 12 }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#6366f1"
                  strokeWidth={2}
                  fill="url(#revenueGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
