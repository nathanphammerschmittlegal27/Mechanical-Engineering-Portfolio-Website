import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { FilterTabs } from '../components/FilterTabs';
import { ProjectCard, Project } from '../components/ProjectCard';
import { Footer } from '../components/Footer';
const PROJECTS: Project[] = [{
  id: '1',
  title: 'Lumina Interface',
  category: 'Web',
  description: 'A comprehensive design system for a next-generation analytics dashboard, focusing on data visualization and clarity.',
  imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426'
}, {
  id: '2',
  title: 'Apex Fitness',
  category: 'Mobile',
  description: 'iOS application for tracking high-performance workouts with real-time biometric feedback integration.',
  imageUrl: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=2574'
}, {
  id: '3',
  title: 'Mono Brand Identity',
  category: 'Design',
  description: 'Minimalist brand refresh for a sustainable architecture firm, emphasizing negative space and typography.',
  imageUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2500'
}, {
  id: '4',
  title: 'Flow Commerce',
  category: 'Web',
  description: 'Headless e-commerce storefront built for speed and conversion, featuring seamless page transitions.',
  imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=2500'
}, {
  id: '5',
  title: 'Zenith Banking',
  category: 'Mobile',
  description: 'Secure and intuitive mobile banking experience designed to simplify complex financial operations.',
  imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1470'
}, {
  id: '6',
  title: 'Echo Smart Home',
  category: 'Design',
  description: 'Product design and interface concepts for a new line of smart home thermostats and controllers.',
  imageUrl: 'https://images.unsplash.com/photo-1558002038-1091a166111c?auto=format&fit=crop&q=80&w=2500'
}];
const CATEGORIES = ['All', 'Web', 'Mobile', 'Design'];
export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = activeCategory === 'All' ? PROJECTS : PROJECTS.filter(project => project.category === activeCategory);
  return <div className="min-h-screen bg-white font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main id="work">
        <Hero />

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