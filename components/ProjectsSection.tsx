'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';
interface Project {
  title: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  impact: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Kenya-Real",
    description: "Next-gen real estate marketplace with verified agents, rich insights, and mobile-first design",
    longDescription: "Kenya-Real is a modern real estate platform built for the Kenyan market, offering advanced property listings with filters, interactive maps, verified agents, and neighborhood insights. Unlike generic listing sites, it emphasizes trust, affordability, and transparency through agent verification, price heatmaps, and market analytics.",
    problem: "Existing Kenyan real estate platforms are cluttered, untrustworthy, and lack transparency. Users struggle with fake agents, outdated listings, poor filtering, and weak mobile experiences on unreliable networks.",
    solution: "Developed a full-stack property marketplace with Next.js, Node.js, and PostgreSQL. Features include agent verification with admin approval, advanced property filters, interactive map-based search, rich neighborhood data, price heatmaps, mortgage/rent calculators, and smart recommendations. Built mobile-first and PWA-ready to work seamlessly on low connectivity.",
    impact: "Delivered a trusted real estate experience for over 5,000 users, helping buyers and renters make informed decisions. Reduced fake listings by 70% via agent verification, improved user engagement with property insights and calculators, and achieved 45% faster load times on mobile compared to legacy platforms.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "WebSockets", "Redis"],
    liveUrl: "https://kenyareal.vercel.app/",
    githubUrl: "https://github.com/MainaZaquir/Kenya-Real"
  },
  {
    title: "Personal Finance Tracker",
    description: "Smart personal finance management tool with real-time insights",
    longDescription: "A modern financial tracking platform that helps individuals and small businesses manage expenses, monitor budgets, and analyze spending habits through intuitive dashboards and AI-powered insights.",
    problem: "People often struggle to keep track of their daily expenses, manage budgets effectively, and gain clear insights into their financial health.",
    solution: "Developed a financial tracking platform with real-time expense categorization, budget planning, predictive analytics, and secure cloud storage using React, Node.js, and Firebase.",
    impact: "Helped users reduce unnecessary spending by 30%, improve savings by 25%, and gain clear visibility into financial habits for over 1,000 individuals and small businesses.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "Firebase", "Chart.js", "AI/ML"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/MainaZaquir/Financial-Tracker"
  },
  {
    title: "Japanese-Web-App-UI",
    description: "Interactive Japanese-themed web application UI with modern design patterns",
    longDescription: "A sleek and culturally-inspired Japanese web app UI built with modern front-end technologies. It blends minimalism and traditional Japanese aesthetics with responsive layouts, interactive components, and smooth animations, making it both functional and visually immersive.",
    problem: "Most Japanese-themed websites and apps available online are either outdated in design or fail to deliver a seamless interactive experience, especially on mobile devices.",
    solution: "Designed and developed a responsive, interactive web application interface using React, TailwindCSS, and Framer Motion. Features include dynamic navigation, multi-language support (English/Japanese), dark/light mode inspired by Japanese art styles, and interactive components such as calendars, dashboards, and content cards.",
    impact: "Delivered an engaging, culturally rich UI that improved user session time by 50%, boosted accessibility for bilingual users, and showcased how modern web technologies can be fused with traditional aesthetics for global appeal.",
    image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "TailwindCSS", "Framer Motion", "i18next", "Vite  "],
    liveUrl: "https://japanese-web-app.vercel.app/",
    githubUrl: "https://github.com/MainaZaquir/japanese-web-app"
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work, from concept to deployment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-white text-black px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Case Study
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject || projects[0]}
      />
    </section>
  );
}
