"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const data = [
  { stage: "Lead", count: 45, color: "#6366f1" },
  { stage: "Qualified", count: 32, color: "#8b5cf6" },
  { stage: "Proposal", count: 24, color: "#a855f7" },
  { stage: "Negotiation", count: 18, color: "#c084fc" },
  { stage: "Closed Won", count: 12, color: "#22c55e" },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#18181b] border border-[#27272a] rounded-lg p-3 shadow-xl">
        <p className="text-zinc-400 text-xs mb-1">{label}</p>
        <p className="text-white font-semibold">{payload[0].value} deals</p>
      </div>
    );
  }
  return null;
};

export function DealsChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Deal Pipeline</CardTitle>
          <p className="text-sm text-zinc-500 mt-1">Deals by stage</p>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                layout="vertical"
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#27272a"
                  horizontal={false}
                />
                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#71717a", fontSize: 12 }}
                />
                <YAxis
                  dataKey="stage"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#71717a", fontSize: 12 }}
                  width={90}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.05)" }} />
                <Bar
                  dataKey="count"
                  radius={[0, 4, 4, 0]}
                  barSize={24}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
