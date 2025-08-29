'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mic, Code, Headphones, Lightbulb, Layout } from 'lucide-react';

export default function AboutSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="py-20 px-4 bg-accent/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">
            From being a noob to algorithms, crafting experiences that resonate
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Maina Zaquir"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
                My journey into software development began in an unexpected way. 
                What started as curiosity quickly became a passion for building tools and experiences 
                that not only function well but also feel intuitive and engaging for users.
            </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                The transition into tech wasn’t just a career choice; it was a natural evolution. 
                At its core, development is about communication, timing, and creating experiences that resonate with people. 
                Now, I focus on crafting digital solutions that tell compelling stories through code.
              </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg w-fit mx-auto mb-2">
                    <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-sm font-medium">Innovator</p>
                <p className="text-xs text-muted-foreground">Creative Solutions</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg w-fit mx-auto mb-2">
                  <Code className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-sm font-medium">Developer</p>
                <p className="text-xs text-muted-foreground">Problem Solving</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-lg w-fit mx-auto mb-2">
                  <Layout className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                 </div>
                <p className="text-sm font-medium">Designer</p>
                <p className="text-xs text-muted-foreground">User Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}