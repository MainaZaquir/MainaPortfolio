'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const technologies = [
  {
    name: "React",
    category: "Frontend",
    usage: "Built 15+ production applications including the AI Content Generator dashboard",
    icon: "⚛️",
    color: "text-blue-500"
  },
  {
    name: "Next.js",
    category: "Framework",
    usage: "Primary framework for SSR applications like the e-commerce platform",
    icon: "🚀",
    color: "text-black dark:text-white"
  },
  {
    name: "TypeScript",
    category: "Language",
    usage: "Type-safe development across all major projects, reducing bugs by 60%",
    icon: "📘",
    color: "text-blue-600"
  },
  {
    name: "Node.js",
    category: "Backend",
    usage: "Server-side development for APIs handling 100K+ requests daily",
    icon: "💚",
    color: "text-green-500"
  },
  {
    name: "PostgreSQL",
    category: "Database",
    usage: "Primary database for complex relational data in enterprise applications",
    icon: "🐘",
    color: "text-blue-700"
  },
  {
    name: "Python",
    category: "Language",
    usage: "Machine learning models and data processing for analytics dashboard",
    icon: "🐍",
    color: "text-yellow-500"
  },
  {
    name: "AWS",
    category: "Cloud",
    usage: "Infrastructure management and deployment for scalable applications",
    icon: "☁️",
    color: "text-orange-500"
  },
  {
    name: "Docker",
    category: "DevOps",
    usage: "Containerization for consistent development and production environments",
    icon: "🐳",
    color: "text-blue-500"
  },
  {
    name: "GraphQL",
    category: "API",
    usage: "Efficient data fetching for complex dashboard interfaces",
    icon: "🔗",
    color: "text-pink-500"
  },
  {
    name: "Redis",
    category: "Cache",
    usage: "High-performance caching reducing API response times by 40%",
    icon: "🔴",
    color: "text-red-500"
  },
  {
    name: "TensorFlow",
    category: "AI/ML",
    usage: "Custom ML models for content generation and recommendation systems",
    icon: "🧠",
    color: "text-orange-600"
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    usage: "Rapid UI development with consistent design systems",
    icon: "🎨",
    color: "text-cyan-500"
  }
];

export default function ToolboxSection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="toolbox" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Toolbox</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I use to bring ideas to life. Hover to see real-world applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="text-center">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <h3 className="font-semibold text-sm mb-1">{tech.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground`}>
                    {tech.category}
                  </span>
                </div>
              </div>

              {/* Hover tooltip */}
              {hoveredTech === tech.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-popover border border-border rounded-lg shadow-lg"
                >
                  <div className="text-sm">
                    <div className="font-semibold mb-1">{tech.name} Usage</div>
                    <div className="text-muted-foreground">{tech.usage}</div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Always Learning</h3>
            <p className="text-muted-foreground">
              Technology evolves rapidly, and so do I. Currently exploring Web3 technologies, 
              advanced AI integration, and edge computing solutions to stay ahead of the curve.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}