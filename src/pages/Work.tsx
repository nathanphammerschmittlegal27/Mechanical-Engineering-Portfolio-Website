import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { PageHeader } from '../components/PageHeader';
import { FilterTabs } from '../components/FilterTabs';
import { ProjectCard } from '../components/ProjectCard';
import { Footer } from '../components/Footer';
import { ENGINEERING_PROJECTS, CATEGORIES } from '../data/projects';
export function Work() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = activeCategory === 'All' ? ENGINEERING_PROJECTS : ENGINEERING_PROJECTS.filter(project => project.category === activeCategory);
  return <div className="min-h-screen bg-white font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main>
        <PageHeader title="Engineering Portfolio" subtitle="A collection of mechanical design, robotics, and systems engineering projects demonstrating precision and innovation." />

        <FilterTabs categories={CATEGORIES} activeCategory={activeCategory} onSelectCategory={setActiveCategory} />

        <div className="max-w-7xl mx-auto px-6 pb-20">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(project => <ProjectCard key={project.id} project={project} />)}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>;
}