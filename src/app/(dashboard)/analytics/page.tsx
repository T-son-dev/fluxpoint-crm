"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Target,
  Calendar,
} from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const revenueData = [
  { month: "Jan", revenue: 42000, target: 40000 },
  { month: "Feb", revenue: 48000, target: 45000 },
  { month: "Mar", revenue: 52000, target: 50000 },
  { month: "Apr", revenue: 61000, target: 55000 },
  { month: "May", revenue: 58000, target: 60000 },
  { month: "Jun", revenue: 72000, target: 65000 },
];

const conversionData = [
  { stage: "Leads", value: 1250, fill: "#6366f1" },
  { stage: "Qualified", value: 680, fill: "#8b5cf6" },
  { stage: "Proposal", value: 320, fill: "#a855f7" },
  { stage: "Negotiation", value: 180, fill: "#c084fc" },
  { stage: "Closed", value: 95, fill: "#22c55e" },
];

const sourceData = [
  { name: "Direct", value: 35, color: "#6366f1" },
  { name: "Referral", value: 28, color: "#8b5cf6" },
  { name: "Social", value: 20, color: "#a855f7" },
  { name: "Email", value: 12, color: "#c084fc" },
  { name: "Other", value: 5, color: "#71717a" },
];

const teamPerformance = [
  { name: "Sarah Chen", deals: 28, revenue: 425000, conversion: 32 },
  { name: "Michael Park", deals: 24, revenue: 380000, conversion: 28 },
  { name: "Emma Wilson", deals: 22, revenue: 345000, conversion: 26 },
  { name: "James Brown", deals: 19, revenue: 298000, conversion: 24 },
  { name: "Lisa Thompson", deals: 17, revenue: 265000, conversion: 22 },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color?: string }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#18181b] border border-[#27272a] rounded-lg p-3 shadow-xl">
        <p className="text-zinc-400 text-xs mb-2">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color || "#fff" }}>
            {entry.name}: ${entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Sidebar />

      <div className="pl-60 transition-all duration-200">
        <Header
          title="Analytics"
          subtitle="Track your performance and insights"
        />

        <main className="p-6 space-y-6">
          {/* Period Selector */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              {["7D", "30D", "90D", "12M", "All"].map((period) => (
                <Button
                  key={period}
                  variant={period === "30D" ? "primary" : "ghost"}
                  size="sm"
                >
                  {period}
                </Button>
              ))}
            </div>
            <Button variant="secondary" size="md">
              <Calendar className="w-4 h-4" />
              Custom Range
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Total Revenue", value: "$333,000", change: 12.5, icon: DollarSign, trend: "up" },
              { title: "Deals Closed", value: "95", change: 8.2, icon: Target, trend: "up" },
              { title: "New Contacts", value: "1,250", change: -3.1, icon: Users, trend: "down" },
              { title: "Conversion Rate", value: "7.6%", change: 2.4, icon: TrendingUp, trend: "up" },
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10">
                      <stat.icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <span
                      className={cn(
                        "flex items-center gap-1 text-xs font-medium",
                        stat.trend === "up" ? "text-green-400" : "text-red-400"
                      )}
                    >
                      {stat.trend === "up" ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      {stat.change > 0 ? "+" : ""}
                      {stat.change}%
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-zinc-500 mt-1">{stat.title}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Revenue vs Target */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Revenue vs Target</CardTitle>
                  <p className="text-sm text-zinc-500">Monthly comparison</p>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={revenueData}>
                        <defs>
                          <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#71717a", fontSize: 12 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: "#71717a", fontSize: 12 }} tickFormatter={(v) => `$${v / 1000}k`} />
                        <Tooltip content={<CustomTooltip />} />
                        <Area type="monotone" dataKey="target" stroke="#71717a" strokeWidth={2} strokeDasharray="5 5" fill="none" name="Target" />
                        <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} fill="url(#revenueGradient)" name="Revenue" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Lead Sources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Lead Sources</CardTitle>
                  <p className="text-sm text-zinc-500">Distribution by channel</p>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={sourceData}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {sourceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 space-y-2">
                    {sourceData.map((source) => (
                      <div key={source.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }} />
                          <span className="text-sm text-zinc-400">{source.name}</span>
                        </div>
                        <span className="text-sm font-medium text-white">{source.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Conversion Funnel & Team Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Conversion Funnel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Conversion Funnel</CardTitle>
                  <p className="text-sm text-zinc-500">Lead to closed deal journey</p>
                </CardHeader>
                <CardContent>
                  <div className="h-[280px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={conversionData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="#27272a" horizontal={false} />
                        <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: "#71717a", fontSize: 12 }} />
                        <YAxis dataKey="stage" type="category" axisLine={false} tickLine={false} tick={{ fill: "#71717a", fontSize: 12 }} width={90} />
                        <Tooltip />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={24}>
                          {conversionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Team Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Team Performance</CardTitle>
                  <p className="text-sm text-zinc-500">Top performers this month</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teamPerformance.map((member, index) => (
                      <div
                        key={member.name}
                        className={cn(
                          "flex items-center gap-4 p-3 rounded-lg",
                          "hover:bg-[#1f1f23] transition-colors"
                        )}
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-semibold text-white">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-white">{member.name}</p>
                          <p className="text-xs text-zinc-500">{member.deals} deals closed</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-white">
                            ${(member.revenue / 1000).toFixed(0)}k
                          </p>
                          <p className="text-xs text-green-400">{member.conversion}% conv.</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
