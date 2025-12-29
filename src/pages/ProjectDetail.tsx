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
          <Link to="/" className="text-[#007AFF] hover:text-[#0051D5] font-medium">
            ← Back to Projects
          </Link>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#007AFF]/20 selection:text-[#007AFF]">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[#007AFF] mb-4">
              {Array.isArray(project.category) ? project.category.join(' • ') : project.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
              {project.title}
            </h1>
            <p className="text-2xl text-gray-500 font-light leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </motion.div>
        </section>

        {/* Main Image */}
        <motion.section initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="max-w-7xl mx-auto px-6 mb-12">
          <div className={`overflow-hidden rounded-3xl ${project.title === 'Design Sketching' ? 'aspect-[16/9]' : ''}`}>
            <img src={project.imageUrl} alt={project.title} className={`w-full ${project.title === 'Design Sketching' ? 'h-full object-cover object-left' : 'h-auto'} rounded-3xl`} />
          </div>
        </motion.section>

        {/* Descriptive Paragraph */}
        {project.detailDescription && <section className="max-w-4xl mx-auto px-6 mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <p className="text-xl text-gray-600 leading-relaxed">
              {project.detailDescription}
            </p>
          </motion.div>
        </section>}

        {/* Images with Captions - Flexible Layout */}
        {project.detailImages && project.detailImages.length > 0 && <section className="max-w-7xl mx-auto px-6 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.detailImages.map((detailImage, idx) => {
                const size = detailImage.size || 'half';
                const aspectRatio = detailImage.aspectRatio || 'auto';
                
                // Check if image is a GIF - make all GIFs full-width
                const isGif = detailImage.imageUrl.toLowerCase().endsWith('.gif');
                const finalSize = isGif ? 'full' : size;
                
                // Check if image is vertical (portrait orientation)
                const isVertical = detailImage.aspectRatio === 'portrait';
                
                // Vertical images should not be full-width
                const effectiveSize = isVertical ? 'half' : finalSize;
                
                // Determine grid column span based on size
                const colSpan = effectiveSize === 'full' ? 'md:col-span-2' : 
                               effectiveSize === 'two-thirds' ? 'md:col-span-2' :
                               effectiveSize === 'one-third' ? 'md:col-span-1' : 
                               'md:col-span-1';
                
                // Determine aspect ratio - use auto for natural aspect ratio
                const useNaturalAspect = aspectRatio === 'auto';
                
                return (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={colSpan}
                  >
                    {useNaturalAspect ? (
                      <div className="mb-4">
                        <img 
                          src={detailImage.imageUrl} 
                          alt="" 
                          className="w-full h-auto rounded-2xl" 
                        />
                      </div>
                    ) : (
                      <div className={`${aspectRatio === 'landscape' ? 'aspect-[16/9]' : aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'} rounded-2xl overflow-hidden mb-4`}>
                        <img 
                          src={detailImage.imageUrl} 
                          alt="" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </section>}

        {/* Back Button at Bottom */}
        <div className="max-w-7xl mx-auto px-6 pb-12">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>

      </main>

      <Footer />
    </div>;
}