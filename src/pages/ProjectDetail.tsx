import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ENGINEERING_PROJECTS } from '../data/projects';
import { ImageStack } from '../components/ImageStack';
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
        }} className="max-w-4xl mx-auto">
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

        {/* Images with Captions - Image Stack Gallery */}
        {project.detailImages && project.detailImages.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 mb-24">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col" style={{ gap: '16px' }}>
                {/* Special handling for Truss Bridge - first two images on same row */}
                {project.title === 'Truss Bridge' && project.detailImages.length >= 2 ? (
                  <>
                    {/* First two images on same row */}
                    {project.detailImages.length >= 2 && (
                      <ImageStack 
                        images={project.detailImages.slice(0, 2).map(img => ({
                          imageUrl: img.imageUrl,
                          size: img.size,
                          aspectRatio: img.aspectRatio
                        }))}
                        gap={32}
                        rowGap={32}
                        maxRowHeight={400}
                      />
                    )}
                    
                    {/* Description after first two images */}
                    {project.detailDescription && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ marginTop: '12px', marginBottom: '12px' }}
                      >
                        <p className="text-xl text-gray-600 leading-relaxed">
                          {project.detailDescription}
                        </p>
                      </motion.div>
                    )}
                    
                    {/* Remaining images with special row groupings */}
                    {project.detailImages.length > 2 && (() => {
                      const remainingImages = project.detailImages.slice(2).map(img => ({
                        imageUrl: img.imageUrl,
                        size: img.size,
                        aspectRatio: img.aspectRatio
                      }));
                      
                      // Make v2-isometric-sw and failure larger
                      if (remainingImages.length >= 8) {
                        if (remainingImages[3]) {
                          remainingImages[3].size = 'full'; // v2-isometric-sw (bigger, on its own row)
                        }
                        // v2-buckling-2kn: use default size (slightly larger than two-thirds)
                        // Remove size constraint to allow it to be closer to full width
                        if (remainingImages[7]) {
                          remainingImages[7].size = 'full'; // failure
                        }
                        
                        const imagesByRow = [
                          [remainingImages[0]], // GIF (full width)
                          [remainingImages[1], remainingImages[2]], // v1-dualview-sw and v1-dualview-fea on same row
                          [remainingImages[3]], // v2-isometric-sw (bigger, on its own row)
                          [remainingImages[4], remainingImages[5]], // v2-fea-final and v2-fea-closeup-final on same row
                          [remainingImages[6]], // v2-buckling-2kn (larger, on its own row)
                          [remainingImages[7]] // failure (bigger, on its own row)
                        ].filter(row => row.length > 0 && row.every(img => img !== undefined));
                        
                        return (
                          <ImageStack 
                            images={remainingImages}
                            imagesByRow={imagesByRow}
                            gap={32}
                            rowGap={32}
                            maxRowHeight={550}
                          />
                        );
                      }
                      
                      return (
                        <ImageStack 
                          images={remainingImages}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={400}
                        />
                      );
                    })()}
                  </>
                ) : project.title === 'Running Biomechanics' && project.detailImages.length >= 2 ? (
                  <>
                    {/* First image only */}
                    {project.detailImages.length >= 1 && (
                      <ImageStack 
                        images={[project.detailImages[0]].map(img => ({
                          imageUrl: img.imageUrl,
                          size: img.size,
                          aspectRatio: img.aspectRatio
                        }))}
                        gap={32}
                        rowGap={32}
                        maxRowHeight={400}
                      />
                    )}
                    
                    {/* Description after first image */}
                    {project.detailDescription && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ marginTop: '12px', marginBottom: '12px' }}
                      >
                        <p className="text-xl text-gray-600 leading-relaxed">
                          {project.detailDescription}
                        </p>
                      </motion.div>
                    )}
                    
                    {/* All remaining images with special row groupings */}
                    {project.detailImages.length > 1 && (() => {
                      const remainingImages = project.detailImages.slice(1).map(img => ({
                        imageUrl: img.imageUrl,
                        size: img.size,
                        aspectRatio: img.aspectRatio
                      }));
                      
                      // remainingImages: [0]=angular-velocity-matched, [1]=GIF, [2]=angular-velocity-flipped, [3]=index-application, [4]=zoomed-index-application, [5]=manual-peak-correction, [6]=grass-symmetry-graph, [7]=grass-symmetry-stats, [8]=grass-duration-graph, [9]=grass-duration-stats, [10]=grass-repeatability-graph, [11]=grass-repeatability-stats, [12]=woods-duration-graph, [13]=woods-duration-stats, [14]=trail-pilot-gps-map, [15]=umill-puma-materials, [16]=umill-puma-treadmill
                      const imagesByRow = [
                        [remainingImages[1]], // GIF (full width)
                        [remainingImages[0], remainingImages[2]], // angular-velocity-matched and angular-velocity-flipped (after GIF)
                        [remainingImages[5], remainingImages[3]], // manual-peak-correction and index-application
                        [remainingImages[4]], // zoomed-index-application on its own row
                        [remainingImages[8], remainingImages[12]], // grass-duration-graph and woods-duration-graph
                        [remainingImages[9]], // grass-duration-stats on its own row
                        [remainingImages[13]], // woods-duration-stats on its own row
                        [remainingImages[10]], // grass-repeatability-graph on its own row
                        [remainingImages[11]], // grass-repeatability-stats on its own row
                        [remainingImages[6]], // grass-symmetry-graph on its own row
                        [remainingImages[7]], // grass-symmetry-stats on its own row
                        [remainingImages[14]], // trail-pilot-gps on its own row
                        [remainingImages[16], remainingImages[15]] // umill-puma-treadmill and umill-puma-materials on same row
                      ].filter(row => row.length > 0 && row.every(img => img !== undefined));
                      
                      return (
                        <ImageStack 
                          images={remainingImages}
                          imagesByRow={imagesByRow}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={400}
                        />
                      );
                    })()}
                  </>
                ) : (
                  <>
                    {/* First two images */}
                    {project.detailImages.length >= 2 && (
                      <ImageStack 
                        images={project.detailImages.slice(0, 2).map(img => ({
                          imageUrl: img.imageUrl,
                          size: img.size,
                          aspectRatio: img.aspectRatio
                        }))}
                        gap={32}
                        rowGap={32}
                        maxRowHeight={project.title === 'Dino Robot Walker' ? 450 : 400}
                      />
                    )}
                    
                    {/* Description after first two images */}
                    {project.detailDescription && project.detailImages.length >= 2 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ marginTop: '12px', marginBottom: '12px' }}
                      >
                        <p className="text-xl text-gray-600 leading-relaxed">
                          {project.detailDescription}
                        </p>
                      </motion.div>
                    )}
                    
                    {/* Remaining images */}
                    {project.detailImages.length > 2 && (() => {
                      const remainingImages = project.detailImages.slice(2).map(img => ({
                        imageUrl: img.imageUrl,
                        size: img.size,
                        aspectRatio: img.aspectRatio
                      }));
                      
                      // Special handling for 3D Printed Footwear project
                  if (project.title === '3D Printed Footwear' && remainingImages.length > 1) {
                    // After GIF (index 0 is GIF in remaining), group images into specific rows
                    // Counting after GIF: 1st=rear(1), 2nd=top(2), 3rd=bottom(3), 4th=profile-medial(4), 5th=isometric(5), 6th=profile(6), 7th=overhead(7), 8th=cross-section(8), 9th=slicer(9), 10th=opt1(10), 11th=opt2(11), 12th=website(12)
                    // Increase size of last image (website)
                    const lastImage = remainingImages[remainingImages.length - 1];
                    if (lastImage) {
                      lastImage.size = 'full'; // Make website screenshot larger
                    }
                    
                    const imagesByRow = [
                      [remainingImages[0]], // GIF (full width)
                      [remainingImages[1], remainingImages[2]], // 1st and 2nd after GIF (rear, top)
                      [remainingImages[3], remainingImages[4]], // 3rd and 4th after GIF (bottom, profile-medial)
                      ...(remainingImages.length > 5 ? [[remainingImages[5]]] : []), // 5th (isometric)
                      ...(remainingImages.length > 6 ? [[remainingImages[6]]] : []), // 6th (profile)
                      ...(remainingImages.length > 7 ? [[remainingImages[7]]] : []), // 7th (overhead)
                      [remainingImages[8], remainingImages[9]], // 8th and 9th after GIF (cross-section, slicer) - indices 8,9
                      [remainingImages[10], remainingImages[11]], // 10th and 11th after GIF (opt1, opt2) - indices 10,11
                      ...(remainingImages.length > 12 ? [[remainingImages[12]]] : []) // website (12th, last, larger)
                    ].filter(row => row.length > 0);
                    
                    return (
                      <ImageStack 
                        images={remainingImages}
                        imagesByRow={imagesByRow}
                        gap={32}
                        rowGap={32}
                        maxRowHeight={remainingImages.length > 12 ? 550 : 400}
                      />
                    );
                  }
                  
                  // Special handling for Microfluidics Research - make poster larger after GIF
                  if (project.title === 'Microfluidics Research' && remainingImages.length >= 2) {
                    // Poster is at index 1 (after GIF at index 0)
                    if (remainingImages[1]) {
                      remainingImages[1].size = 'full'; // Make poster larger
                    }
                    
                    // Don't use imagesByRow - let it auto-wrap, but ensure poster is larger
                    return (
                      <ImageStack 
                        images={remainingImages}
                        gap={32}
                        rowGap={32}
                        maxRowHeight={600}
                      />
                    );
                  }
                  
                  // Special handling for AirPods Max Redesign - group last two images on same row
                  if (project.title === 'AirPods Max Redesign' && remainingImages.length >= 5) {
                    // Increase size of slides 1-3
                    if (remainingImages[0]) remainingImages[0].size = 'full';
                    if (remainingImages[1]) remainingImages[1].size = 'full';
                    if (remainingImages[2]) remainingImages[2].size = 'full';
                    
                    const imagesByRow = [
                      [remainingImages[0]], // slide1 (full width, larger)
                      [remainingImages[1]], // slide2 (full width, larger)
                      [remainingImages[2]], // slide3 (full width, larger)
                      [remainingImages[3], remainingImages[4]] // assembly-drawing and ear-closeup on same row (last row)
                    ];
                    
                    return (
                      <ImageStack 
                        images={remainingImages}
                        imagesByRow={imagesByRow}
                        gap={32}
                        rowGap={32}
                        maxRowHeight={550}
                      />
                    );
                  }
                  
                  // Special handling for Dino Robot - increase size of image after GIF and group last two
                  if (project.title === 'Dino Robot Walker' && remainingImages.length > 1) {
                    // Image after GIF (index 1 in remaining - solidworks isometric) should be larger
                    if (remainingImages[1]) {
                      remainingImages[1].size = 'full';
                    }
                    
                    // Group last two images on same row
                    if (remainingImages.length >= 4) {
                      const imagesByRow = [
                        [remainingImages[0]], // GIF (full width)
                        [remainingImages[1]], // Solidworks isometric (larger, full width)
                        [remainingImages[2], remainingImages[3]] // Last two images on same row
                      ];
                      
                      return (
                        <ImageStack 
                          images={remainingImages}
                          imagesByRow={imagesByRow}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={450}
                        />
                      );
                    }
                  }
                  
                  return (
                    <ImageStack 
                      images={remainingImages}
                      gap={32}
                      rowGap={32}
                      maxRowHeight={400}
                    />
                  );
                })()}
                  </>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Back Button at Bottom */}
        <div className="max-w-7xl mx-auto px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center bg-gray-900 text-white font-medium px-8 py-3 rounded-xl hover:bg-black transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>;
}