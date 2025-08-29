'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award } from 'lucide-react';

const timelineData = [
  {
    year: "2024",
    title: "SQL Data Analyst",
    company: "Collection Africa Limited",
    location: "Physical",
    description: "Integrated secure call recording downloads, enhancing audit and compliance processes. Developed and deployed automated reporting dashboards, cutting manual reporting efforts by 40% and supporting data-driven decision-making. Implemented robust data validation techniques, improving accessibility and reducing errors by 30%.",
    skills: ["System Architecture", "Team Leadership", "Performance Optimization"],
    achievement: "Redesigned and optimized data management workflows, increasing operational efficiency by 20%."
  }
];

const skillGrowth = [
  { skill: "Frontend Development", level: 95, color: "bg-blue-500" },
  { skill: "Backend Development", level: 90, color: "bg-green-500" },
  { skill: "Database Management", level: 85, color: "bg-purple-500" },
  { skill: "DevOps & Cloud", level: 80, color: "bg-orange-500" },
  { skill: "AI/ML Integration", level: 65, color: "bg-pink-500" },
  { skill: "Team Leadership", level: 85, color: "bg-indigo-500" }
];

export default function TimelineSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="resume" className="py-20 px-4 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Journey</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My evolution from being a noob to code commits
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative flex items-start mb-12"
                >
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  
                  <div className="ml-16 bg-card border border-border rounded-lg p-6 w-full hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-primary font-medium">{item.company}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end text-sm text-muted-foreground mt-2 md:mt-0">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.year}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                      <Award className="w-4 h-4" />
                      {item.achievement}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Chart */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-card border border-border rounded-lg p-6 sticky top-8"
            >
              <h3 className="text-xl font-semibold mb-6">Skill Progression</h3>
              
              <div className="space-y-6">
                {skillGrowth.map((skill, index) => (
                  <motion.div
                    key={skill.skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.skill}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-accent/20 rounded-lg">
                <h4 className="font-semibold mb-2">Career Highlights</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 3+ years in tech</li>
                  <li>• 10+ projects delivered</li>
                  <li>• 99.9% uptime achieved</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}