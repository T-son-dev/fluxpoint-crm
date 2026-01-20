"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Plus,
  Filter,
  MoreHorizontal,
  Mail,
  Phone,
  Building2,
  MapPin,
  Star,
  CheckCircle,
} from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const contacts = [
  {
    id: 1,
    name: "Sarah Chen",
    email: "sarah.chen@techcorp.com",
    phone: "+1 (555) 123-4567",
    company: "TechCorp International",
    location: "San Francisco, CA",
    status: "active",
    starred: true,
    avatar: "SC",
    deals: 3,
    value: 245000,
  },
  {
    id: 2,
    name: "Michael Park",
    email: "m.park@globalsolutions.io",
    phone: "+1 (555) 234-5678",
    company: "Global Solutions Ltd",
    location: "New York, NY",
    status: "active",
    starred: false,
    avatar: "MP",
    deals: 2,
    value: 89000,
  },
  {
    id: 3,
    name: "Emma Wilson",
    email: "emma@innovateai.co",
    phone: "+1 (555) 345-6789",
    company: "Innovate AI",
    location: "Austin, TX",
    status: "lead",
    starred: true,
    avatar: "EW",
    deals: 1,
    value: 67000,
  },
  {
    id: 4,
    name: "James Brown",
    email: "jbrown@dataflow.systems",
    phone: "+1 (555) 456-7890",
    company: "DataFlow Systems",
    location: "Seattle, WA",
    status: "inactive",
    starred: false,
    avatar: "JB",
    deals: 0,
    value: 0,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    email: "lisa.t@cloudnine.tech",
    phone: "+1 (555) 567-8901",
    company: "CloudNine Technologies",
    location: "Denver, CO",
    status: "active",
    starred: false,
    avatar: "LT",
    deals: 4,
    value: 312000,
  },
  {
    id: 6,
    name: "David Kim",
    email: "david.kim@nextera.io",
    phone: "+1 (555) 678-9012",
    company: "NextEra Solutions",
    location: "Los Angeles, CA",
    status: "lead",
    starred: true,
    avatar: "DK",
    deals: 1,
    value: 45000,
  },
];

const statusConfig = {
  active: { label: "Active", variant: "success" as const },
  lead: { label: "Lead", variant: "info" as const },
  inactive: { label: "Inactive", variant: "default" as const },
};

export default function ContactsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContacts, setSelectedContacts] = useState<number[]>([]);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSelect = (id: number) => {
    setSelectedContacts((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Sidebar />

      <div className="pl-60 transition-all duration-200">
        <Header
          title="Contacts"
          subtitle={`${contacts.length} total contacts`}
        />

        <main className="p-6 space-y-6">
          {/* Search & Actions Bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search contacts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={cn(
                    "w-full pl-10 pr-4 py-2.5 rounded-lg",
                    "bg-[#18181b] border border-[#27272a]",
                    "text-white placeholder-zinc-500",
                    "focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50",
                    "transition-all duration-200"
                  )}
                />
              </div>
              <Button variant="secondary" size="md">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
            <Button variant="primary" size="md">
              <Plus className="w-4 h-4" />
              Add Contact
            </Button>
          </motion.div>

          {/* Selected Actions */}
          <AnimatePresence>
            {selectedContacts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20"
              >
                <CheckCircle className="w-4 h-4 text-indigo-400" />
                <span className="text-sm text-indigo-300">
                  {selectedContacts.length} contact{selectedContacts.length > 1 ? "s" : ""} selected
                </span>
                <div className="flex-1" />
                <Button variant="ghost" size="sm" onClick={() => setSelectedContacts([])}>
                  Clear selection
                </Button>
                <Button variant="secondary" size="sm">
                  Send Email
                </Button>
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Contacts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredContacts.map((contact, index) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card
                  className={cn(
                    "p-5 cursor-pointer",
                    selectedContacts.includes(contact.id) && "border-indigo-500/50 bg-indigo-500/5"
                  )}
                  onClick={() => toggleSelect(contact.id)}
                >
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                        <span className="text-sm font-semibold text-white">
                          {contact.avatar}
                        </span>
                      </div>
                      {contact.starred && (
                        <Star className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 fill-yellow-400" />
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-semibold text-white truncate">
                          {contact.name}
                        </h3>
                        <Badge variant={statusConfig[contact.status as keyof typeof statusConfig].variant}>
                          {statusConfig[contact.status as keyof typeof statusConfig].label}
                        </Badge>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-xs text-zinc-400">
                          <Building2 className="w-3.5 h-3.5" />
                          <span className="truncate">{contact.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-zinc-400">
                          <Mail className="w-3.5 h-3.5" />
                          <span className="truncate">{contact.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-zinc-400">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{contact.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <button
                      className="p-1.5 rounded-lg hover:bg-[#27272a] text-zinc-500 hover:text-zinc-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="mt-4 pt-4 border-t border-[#27272a] flex items-center justify-between">
                    <div className="text-center">
                      <p className="text-lg font-semibold text-white">{contact.deals}</p>
                      <p className="text-xs text-zinc-500">Deals</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-white">
                        ${(contact.value / 1000).toFixed(0)}k
                      </p>
                      <p className="text-xs text-zinc-500">Value</p>
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-[#27272a] text-zinc-400 hover:text-white hover:bg-indigo-500/20 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-[#27272a] text-zinc-400 hover:text-white hover:bg-green-500/20 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Phone className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
