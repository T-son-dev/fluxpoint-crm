"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Bell,
  Lock,
  Palette,
  Globe,
  CreditCard,
  Users,
  Zap,
  ChevronRight,
  Check,
} from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "profile", name: "Profile", icon: User },
  { id: "notifications", name: "Notifications", icon: Bell },
  { id: "security", name: "Security", icon: Lock },
  { id: "appearance", name: "Appearance", icon: Palette },
  { id: "language", name: "Language", icon: Globe },
  { id: "billing", name: "Billing", icon: CreditCard },
  { id: "team", name: "Team", icon: Users },
  { id: "integrations", name: "Integrations", icon: Zap },
];

const integrations = [
  { name: "Slack", description: "Get notifications in Slack", connected: true, icon: "🔔" },
  { name: "Google Calendar", description: "Sync meetings and events", connected: true, icon: "📅" },
  { name: "Zapier", description: "Connect with 5,000+ apps", connected: false, icon: "⚡" },
  { name: "Salesforce", description: "Import/export contacts", connected: false, icon: "☁️" },
  { name: "HubSpot", description: "Marketing automation", connected: false, icon: "🎯" },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    deals: true,
    mentions: true,
    weekly: false,
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Sidebar />

      <div className="pl-60 transition-all duration-200">
        <Header
          title="Settings"
          subtitle="Manage your account and preferences"
        />

        <main className="p-6">
          <div className="flex gap-6">
            {/* Sidebar Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-64 flex-shrink-0"
            >
              <Card className="p-2">
                <nav className="space-y-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm",
                        "transition-all duration-200",
                        activeTab === tab.id
                          ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                          : "text-zinc-400 hover:text-zinc-200 hover:bg-[#1f1f23]"
                      )}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.name}
                      {activeTab === tab.id && (
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      )}
                    </button>
                  ))}
                </nav>
              </Card>
            </motion.div>

            {/* Content Area */}
            <div className="flex-1 space-y-6">
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Information</CardTitle>
                      <p className="text-sm text-zinc-500">Update your personal details</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Avatar */}
                      <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">JH</span>
                        </div>
                        <div>
                          <Button variant="secondary" size="sm">Change Avatar</Button>
                          <p className="text-xs text-zinc-500 mt-2">JPG, PNG or GIF. Max 2MB</p>
                        </div>
                      </div>

                      {/* Form Fields */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-zinc-400 mb-2">First Name</label>
                          <input
                            type="text"
                            defaultValue="Jason"
                            className={cn(
                              "w-full px-4 py-2.5 rounded-lg",
                              "bg-[#18181b] border border-[#27272a]",
                              "text-white placeholder-zinc-500",
                              "focus:outline-none focus:border-indigo-500/50",
                              "transition-all duration-200"
                            )}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-zinc-400 mb-2">Last Name</label>
                          <input
                            type="text"
                            defaultValue="Hiroshi"
                            className={cn(
                              "w-full px-4 py-2.5 rounded-lg",
                              "bg-[#18181b] border border-[#27272a]",
                              "text-white placeholder-zinc-500",
                              "focus:outline-none focus:border-indigo-500/50",
                              "transition-all duration-200"
                            )}
                          />
                        </div>
                        <div className="col-span-2">
                          <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                          <input
                            type="email"
                            defaultValue="jason.hiroshi@fluxpoint.io"
                            className={cn(
                              "w-full px-4 py-2.5 rounded-lg",
                              "bg-[#18181b] border border-[#27272a]",
                              "text-white placeholder-zinc-500",
                              "focus:outline-none focus:border-indigo-500/50",
                              "transition-all duration-200"
                            )}
                          />
                        </div>
                        <div className="col-span-2">
                          <label className="block text-sm font-medium text-zinc-400 mb-2">Role</label>
                          <input
                            type="text"
                            defaultValue="Sales Director"
                            className={cn(
                              "w-full px-4 py-2.5 rounded-lg",
                              "bg-[#18181b] border border-[#27272a]",
                              "text-white placeholder-zinc-500",
                              "focus:outline-none focus:border-indigo-500/50",
                              "transition-all duration-200"
                            )}
                          />
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button variant="primary">Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Notifications Tab */}
              {activeTab === "notifications" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                      <p className="text-sm text-zinc-500">Choose how you want to be notified</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { key: "email", label: "Email Notifications", desc: "Receive updates via email" },
                        { key: "push", label: "Push Notifications", desc: "Browser push notifications" },
                        { key: "deals", label: "Deal Updates", desc: "When deals are updated or closed" },
                        { key: "mentions", label: "Mentions", desc: "When someone mentions you" },
                        { key: "weekly", label: "Weekly Digest", desc: "Weekly summary of activity" },
                      ].map((item) => (
                        <div
                          key={item.key}
                          className={cn(
                            "flex items-center justify-between p-4 rounded-lg",
                            "bg-[#18181b]/50 border border-[#27272a]",
                            "hover:border-[#3f3f46] transition-colors"
                          )}
                        >
                          <div>
                            <p className="text-sm font-medium text-white">{item.label}</p>
                            <p className="text-xs text-zinc-500">{item.desc}</p>
                          </div>
                          <button
                            onClick={() =>
                              setNotifications((prev) => ({
                                ...prev,
                                [item.key]: !prev[item.key as keyof typeof prev],
                              }))
                            }
                            className={cn(
                              "w-11 h-6 rounded-full transition-colors duration-200",
                              notifications[item.key as keyof typeof notifications]
                                ? "bg-indigo-500"
                                : "bg-[#27272a]"
                            )}
                          >
                            <motion.div
                              animate={{
                                x: notifications[item.key as keyof typeof notifications] ? 22 : 2,
                              }}
                              className="w-5 h-5 bg-white rounded-full shadow"
                            />
                          </button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Integrations Tab */}
              {activeTab === "integrations" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Integrations</CardTitle>
                      <p className="text-sm text-zinc-500">Connect FluxPoint with your favorite tools</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {integrations.map((integration) => (
                        <div
                          key={integration.name}
                          className={cn(
                            "flex items-center gap-4 p-4 rounded-lg",
                            "bg-[#18181b]/50 border border-[#27272a]",
                            "hover:border-[#3f3f46] transition-colors"
                          )}
                        >
                          <div className="w-12 h-12 rounded-xl bg-[#27272a] flex items-center justify-center text-2xl">
                            {integration.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-medium text-white">{integration.name}</p>
                              {integration.connected && (
                                <Badge variant="success">
                                  <Check className="w-3 h-3 mr-1" />
                                  Connected
                                </Badge>
                              )}
                            </div>
                            <p className="text-xs text-zinc-500">{integration.description}</p>
                          </div>
                          <Button
                            variant={integration.connected ? "ghost" : "secondary"}
                            size="sm"
                          >
                            {integration.connected ? "Disconnect" : "Connect"}
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Appearance Tab */}
              {activeTab === "appearance" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Appearance</CardTitle>
                      <p className="text-sm text-zinc-500">Customize the look and feel</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-3">Theme</label>
                        <div className="grid grid-cols-3 gap-3">
                          {["Dark", "Light", "System"].map((theme) => (
                            <button
                              key={theme}
                              className={cn(
                                "p-4 rounded-lg border-2 transition-all duration-200",
                                theme === "Dark"
                                  ? "border-indigo-500 bg-indigo-500/10"
                                  : "border-[#27272a] hover:border-[#3f3f46]"
                              )}
                            >
                              <div
                                className={cn(
                                  "w-full h-16 rounded-lg mb-3",
                                  theme === "Dark"
                                    ? "bg-[#0a0a0a]"
                                    : theme === "Light"
                                    ? "bg-white"
                                    : "bg-gradient-to-r from-[#0a0a0a] to-white"
                                )}
                              />
                              <p className="text-sm font-medium text-white">{theme}</p>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-3">Accent Color</label>
                        <div className="flex gap-3">
                          {["#6366f1", "#8b5cf6", "#ec4899", "#22c55e", "#f59e0b", "#ef4444"].map(
                            (color) => (
                              <button
                                key={color}
                                className={cn(
                                  "w-10 h-10 rounded-full transition-transform hover:scale-110",
                                  color === "#6366f1" && "ring-2 ring-white ring-offset-2 ring-offset-[#0a0a0a]"
                                )}
                                style={{ backgroundColor: color }}
                              />
                            )
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Default placeholder for other tabs */}
              {!["profile", "notifications", "integrations", "appearance"].includes(activeTab) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card className="p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Coming Soon</h3>
                    <p className="text-sm text-zinc-500 max-w-md mx-auto">
                      This section is under development. Check back later for updates.
                    </p>
                  </Card>
                </motion.div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
