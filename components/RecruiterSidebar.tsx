'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, MessageCircle, X } from 'lucide-react';

export default function RecruiterSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      action: () => window.open('mailto:mzaquir58@gmail.com?subject=Job Opportunity&body=Hi Maina Zaquir, I\'d like to discuss a potential opportunity with you.'),
      color: "text-red-500"
    },
    {
      icon: Github,
      label: "GitHub",
      action: () => window.open('https://github.com/mainazaquir', '_blank'),
      color: "text-gray-800 dark:text-gray-200"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      action: () => window.open('https://linkedin.com/in/mainazaquir', '_blank'),
      color: "text-blue-600"
    },
    {
      icon: FileText,
      label: "Resume",
      action: () => window.open('./Resume/Zaquir Kambo CV.pdf', '_blank'),
      color: "text-green-600"
    },
    {
      icon: MessageCircle,
      label: "Schedule Call",
      action: () => window.open('https://calendly.com/mzaquir58', '_blank'),
      color: "text-purple-600"
    }
  ];

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="bg-background border border-border rounded-lg shadow-lg overflow-hidden"
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                key="hire"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-xs font-bold"
              >
                HIRE
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-card"
            >
              <div className="p-4 border-b border-border">
                <h3 className="font-semibold text-sm mb-1">Quick Contact</h3>
                <p className="text-xs text-muted-foreground">Ready to collaborate</p>
              </div>
              
              <div className="p-2">
                {contacts.map((contact, index) => (
                  <motion.button
                    key={contact.label}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={contact.action}
                    className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors text-left"
                  >
                    <contact.icon className={`w-4 h-4 ${contact.color}`} />
                    <span className="text-sm">{contact.label}</span>
                  </motion.button>
                ))}
              </div>

              <div className="p-4 border-t border-border bg-accent/20">
                <button
                  onClick={() => window.open('mailto:mzaquir58@gmail.com?subject=Job Offer&body=Hi Maina Zaquir, We have an exciting opportunity for you!')}
                  className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
                >
                  Send Job Offer
                </button>
              </div>

              <div className="p-2 text-center">
                <p className="text-xs text-muted-foreground">
                  Response time: &lt;24h
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}