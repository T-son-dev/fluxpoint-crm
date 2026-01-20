"use client";

import { motion } from "framer-motion";
import { MessageSquare, Phone, Mail, Calendar, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    type: "call",
    icon: Phone,
    title: "Call with Sarah Chen",
    description: "Discussed Q1 budget allocation",
    time: "2 min ago",
    status: "completed",
  },
  {
    id: 2,
    type: "email",
    icon: Mail,
    title: "Email sent to Acme Corp",
    description: "Proposal for enterprise plan",
    time: "15 min ago",
    status: "completed",
  },
  {
    id: 3,
    type: "meeting",
    icon: Calendar,
    title: "Meeting scheduled",
    description: "Demo with TechStart Inc",
    time: "1 hour ago",
    status: "pending",
  },
  {
    id: 4,
    type: "message",
    icon: MessageSquare,
    title: "New message from John",
    description: "Questions about pricing",
    time: "2 hours ago",
    status: "pending",
  },
  {
    id: 5,
    type: "deal",
    icon: CheckCircle,
    title: "Deal closed",
    description: "Global Tech - $45,000",
    time: "3 hours ago",
    status: "success",
  },
];

const statusColors = {
  completed: "text-zinc-400",
  pending: "text-yellow-400",
  success: "text-green-400",
};

const iconBgColors = {
  call: "bg-blue-500/10 text-blue-400",
  email: "bg-purple-500/10 text-purple-400",
  meeting: "bg-orange-500/10 text-orange-400",
  message: "bg-cyan-500/10 text-cyan-400",
  deal: "bg-green-500/10 text-green-400",
};

export function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Activity</CardTitle>
          <button className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
            View all
          </button>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={cn(
                  "flex items-start gap-4 p-3 rounded-lg",
                  "hover:bg-[#1f1f23] transition-colors cursor-pointer"
                )}
              >
                <div
                  className={cn(
                    "p-2.5 rounded-lg",
                    iconBgColors[activity.type as keyof typeof iconBgColors]
                  )}
                >
                  <activity.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {activity.title}
                  </p>
                  <p className="text-xs text-zinc-500 truncate">
                    {activity.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-zinc-500">{activity.time}</p>
                  <p
                    className={cn(
                      "text-xs mt-1 capitalize",
                      statusColors[activity.status as keyof typeof statusColors]
                    )}
                  >
                    {activity.status === "success" ? (
                      <span className="flex items-center gap-1 justify-end">
                        <CheckCircle className="w-3 h-3" /> Won
                      </span>
                    ) : activity.status === "pending" ? (
                      <span className="flex items-center gap-1 justify-end">
                        <AlertCircle className="w-3 h-3" /> Pending
                      </span>
                    ) : (
                      "Done"
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
