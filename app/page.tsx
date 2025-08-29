'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ToolboxSection from '@/components/ToolboxSection';
import TimelineSection from '@/components/TimelineSection';
import RecruiterSidebar from '@/components/RecruiterSidebar';
import ThemeToggle from '@/components/ThemeToggle';
import EasterEggs from '@/components/EasterEggs';

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ToolboxSection />
        <TimelineSection />
        
        {/* Fixed UI Elements */}
        <ThemeToggle />
        <RecruiterSidebar />
        <EasterEggs />
        
        {/* Footer */}
        <footer className="py-12 px-4 border-t border-border bg-accent/5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground mb-4">
              Built with Next.js, Tailwind CSS, Three.js, and lots of ☕
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 Maina Zaquir. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </ThemeProvider>
  );
}