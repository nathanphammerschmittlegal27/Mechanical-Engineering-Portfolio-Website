import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ENGINEERING_PROJECTS } from '../data/projects';
export function ProjectDetail() {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const project = ENGINEERING_PROJECTS.find(p => p.id === id);
  if (!project) {
    return <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Projects
          </Link>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-white font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main>
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-8">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
              {project.title}
            </h1>
            <p className="text-2xl text-gray-500 font-light leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </motion.div>
        </section>

        {/* Hero Image */}
        <motion.section initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="max-w-7xl mx-auto px-6 mb-24">
          <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-gray-100">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          </div>
        </motion.section>

        {/* Technical Specs */}
        {project.specs && <section className="bg-gray-50 py-16 mb-24">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
                Technical Specifications
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {project.specs.map((spec, idx) => <motion.div key={spec.label} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: idx * 0.1
            }} className="text-center">
                    <p className="text-4xl font-semibold text-gray-900 mb-2">
                      {spec.value}
                    </p>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">
                      {spec.label}
                    </p>
                  </motion.div>)}
              </div>
            </div>
          </section>}

        {/* Overview Section */}
        <section className="max-w-4xl mx-auto px-6 mb-24">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Overview
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {project.overview || project.description}
            </p>
          </motion.div>
        </section>

        {/* Challenge & Solution */}
        {(project.challenge || project.solution) && <section className="bg-gray-900 text-white py-24 mb-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {project.challenge && <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }}>
                    <h3 className="text-2xl font-semibold mb-6">
                      The Challenge
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {project.challenge}
                    </p>
                  </motion.div>}
                {project.solution && <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }}>
                    <h3 className="text-2xl font-semibold mb-6">
                      The Solution
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {project.solution}
                    </p>
                  </motion.div>}
              </div>
            </div>
          </section>}

        {/* Process Images */}
        {project.processImages && project.processImages.length > 0 && <section className="max-w-7xl mx-auto px-6 mb-24">
            <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
              Design Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.processImages.map((imageUrl, idx) => <motion.div key={idx} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: idx * 0.1
          }} className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                  <img src={imageUrl} alt={`Process step ${idx + 1}`} className="w-full h-full object-cover" />
                </motion.div>)}
            </div>
          </section>}

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 py-24 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Interested in collaborating?
            </h2>
            <p className="text-xl text-gray-500 mb-8">
              Let's discuss how we can work together on your next project.
            </p>
            <Link to="/contact" className="inline-block bg-gray-900 text-white font-medium px-8 py-4 rounded-xl hover:bg-black transition-colors">
              Get in Touch
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>;
}