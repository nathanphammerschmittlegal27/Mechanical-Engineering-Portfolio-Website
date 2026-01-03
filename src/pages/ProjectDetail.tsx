import { useParams, Link } from 'react-router-dom';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ENGINEERING_PROJECTS } from '../data/projects';
import { ImageStack } from '../components/ImageStack';
import { parseDescriptionWithLinks } from '../utils/textParsing';
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
        <section className="max-w-7xl mx-auto px-6 pt-[141px] pb-16">
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
            <p className="text-2xl text-gray-500 font-light leading-relaxed max-w-4xl mb-8">
              {project.description}
            </p>
            {project.detailDescription && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-lg text-gray-600 leading-relaxed max-w-4xl">
                  {useMemo(() => 
                    project.detailDescription!.split(/\n\n/).map((paragraph, pIndex) => (
                      <p key={pIndex} className={pIndex > 0 ? 'mt-4' : ''}>
                        {parseDescriptionWithLinks(paragraph)}
                      </p>
                    )), [project.detailDescription]
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* Images with Captions - Image Stack Gallery */}
        {project.detailImages && project.detailImages.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 mb-24">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col" style={{ gap: '16px' }}>
                {/* Special handling for Dino Robot Walker */}
                {project.title === 'Dino Robot Walker' && project.detailImages.length >= 2 ? (
                  <>
                    {/* First two drawings side by side with caption */}
                    {project.detailImages.length >= 2 && (
                      <div className="mt-8">
                        <ImageStack 
                          images={project.detailImages.slice(0, 2).map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          imagesByRow={[[project.detailImages[0], project.detailImages[1]]]}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={450}
                          captions={['Final SolidWorks assembly drawings']}
                        />
                      </div>
                    )}
                    
                    {/* GIF with caption */}
                    {project.detailImages.length >= 3 && (
                      <div className="mt-8">
                        <ImageStack 
                          images={[project.detailImages[2]].map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={450}
                          captions={['Final Build']}
                        />
                      </div>
                    )}
                    
                    {/* Solidworks isometric image with caption */}
                    {project.detailImages.length >= 4 && (
                      <div className="mt-8">
                        <ImageStack 
                          images={[project.detailImages[3]].map(img => ({
                            imageUrl: img.imageUrl,
                            size: 'full',
                            aspectRatio: img.aspectRatio
                          }))}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={450}
                          captions={['Final SolidWorks assembly']}
                        />
                      </div>
                    )}
                    
                    {/* Last two images on same row */}
                    {project.detailImages.length >= 6 && (
                      <div className="mt-8">
                        <ImageStack 
                          images={project.detailImages.slice(4, 6).map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          imagesByRow={[[project.detailImages[4], project.detailImages[5]]]}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={450}
                        />
                      </div>
                    )}
                  </>
                ) : project.title === '3D Printed Footwear' && project.detailImages.length >= 2 ? (
                  <>
                    {/* Website image */}
                    {project.detailImages.length >= 1 && (
                      <div className="mt-8">
                        <ImageStack 
                          images={[project.detailImages[0]].map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={575}
                        />
                      </div>
                    )}
                    
                    {/* GIF */}
                    {project.detailImages.length >= 2 && (
                      <div className="mt-8">
                        <ImageStack 
                          images={[project.detailImages[1]].map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={550}
                        />
                      </div>
                    )}
                    
                    {/* Blender Models subtitle */}
                    {project.detailImages.length >= 3 && (
                      <h3 className="text-2xl text-gray-900 font-semibold leading-relaxed max-w-4xl mt-8">Blender Models</h3>
                    )}
                    
                    {/* Blender images (indices 2-7) */}
                    {project.detailImages.length >= 8 && (
                      <div className="mt-4">
                        <ImageStack 
                          images={project.detailImages.slice(2, 8).map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={550}
                        />
                      </div>
                    )}
                    
                    {/* Prototype Pairs subtitle - before nexus-isometric (index 8) */}
                    {project.detailImages.length >= 8 && (
                      <h3 className="text-2xl text-gray-900 font-semibold leading-relaxed max-w-4xl mt-8">Prototype Pairs</h3>
                    )}
                    
                    {/* Isometric images - nexus-isometric, nexus-profile, nexus-overhead (indices 8-10) */}
                    {project.detailImages.length >= 11 && (
                      <div className="mt-4">
                        <ImageStack 
                          images={project.detailImages.slice(8, 11).map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={550}
                        />
                      </div>
                    )}
                    
                    {/* Slicer Tuning and Optimization subtitle - before cross section (index 11) */}
                    {project.detailImages.length >= 12 && (
                      <h3 className="text-2xl text-gray-900 font-semibold leading-relaxed max-w-4xl mt-8">Slicer Tuning and Optimization</h3>
                    )}
                    
                    {/* Cross section image with caption (index 11) */}
                    {project.detailImages.length >= 12 && (
                      <>
                        <div className="mt-4">
                          <ImageStack 
                            images={[project.detailImages[11]].map(img => ({
                              imageUrl: img.imageUrl,
                              size: img.size,
                              aspectRatio: img.aspectRatio
                            }))}
                            gap={32}
                            rowGap={32}
                            maxRowHeight={550}
                          />
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed mt-2">Targeted infill zones</p>
                      </>
                    )}
                    
                    {/* Slicer images - last two on same row (indices 12-13) */}
                    {project.detailImages.length >= 14 && (() => {
                      const slicerImages = project.detailImages.slice(12, 14).map(img => ({
                        imageUrl: img.imageUrl,
                        size: img.size,
                        aspectRatio: img.aspectRatio
                      }));
                      
                      // Last two images should be on same row
                      if (slicerImages.length >= 2) {
                        const imagesByRow = [
                          [slicerImages[0], slicerImages[1]] // Last two images on same row
                        ];
                        
                        return (
                          <>
                            <div className="mt-8">
                              <ImageStack 
                                images={slicerImages}
                                imagesByRow={imagesByRow}
                                gap={32}
                                rowGap={32}
                                maxRowHeight={550}
                              />
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed mt-2">Reducing travel movements</p>
                          </>
                        );
                      }
                      
                      return (
                        <div className="mt-8">
                          <ImageStack 
                            images={slicerImages}
                            gap={32}
                            rowGap={32}
                            maxRowHeight={550}
                          />
                        </div>
                      );
                    })()}
                  </>
                ) : project.title === 'Running Biomechanics' && project.detailImages.length >= 2 ? (
                  <>
                    {/* First image with caption */}
                    {project.detailImages.length >= 1 && (
                      <div className="mt-8">
                        <ImageStack 
                          images={[project.detailImages[0]].map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={400}
                          captions={['IMU data processing pipeline']}
                        />
                      </div>
                    )}
                    
                    {/* GIF with caption */}
                    {project.detailImages.length >= 3 && (
                      <div className="mt-8">
                        <ImageStack 
                          images={[project.detailImages[2]].map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={400}
                          captions={['Participating as a subject in a critical power study']}
                        />
                      </div>
                    )}
                    
                    {/* Angular velocity graphs */}
                    {project.detailImages.length >= 3 && (
                      <div className="mt-8">
                        <ImageStack 
                          images={[project.detailImages[1], project.detailImages[3]].map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          imagesByRow={[[project.detailImages[1], project.detailImages[3]]]}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={400}
                          captions={['Matching angular velocity with dynamic time warping']}
                        />
                      </div>
                    )}
                    
                    {/* Stride Segmentation subtitle */}
                    {project.detailImages.length >= 5 && (
                      <h3 className="text-2xl text-gray-900 font-semibold leading-relaxed max-w-4xl mt-8">Stride Segmentation from Filtered IMU Data</h3>
                    )}
                    
                    {/* Manual peak correction and index application */}
                    {project.detailImages.length >= 5 && (
                      <div className="mt-4">
                        <ImageStack 
                          images={[project.detailImages[6], project.detailImages[4]].map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          imagesByRow={[[project.detailImages[6], project.detailImages[4]]]}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={400}
                          captions={['Manual index correction for stride irregularities', 'Manual index correction for stride irregularities']}
                        />
                      </div>
                    )}
                    
                    {/* Zoomed index application */}
                    {project.detailImages.length >= 5 && (
                      <div className="mt-8">
                        <ImageStack 
                          images={[project.detailImages[5]].map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={400}
                        />
                      </div>
                    )}
                    
                    {/* Stride Durations subtitle */}
                    {project.detailImages.length >= 9 && (
                      <h3 className="text-2xl text-gray-900 font-semibold leading-relaxed max-w-4xl mt-8">Stride Durations</h3>
                    )}
                    
                    {/* Duration graphs */}
                    {project.detailImages.length >= 9 && (
                      <div className="mt-4">
                        <ImageStack 
                          images={[project.detailImages[9], project.detailImages[13]].map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          imagesByRow={[[project.detailImages[9], project.detailImages[13]].map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))]}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={400}
                          captions={['Durations in grass running trial', 'Durations in woods running trial']}
                        />
                      </div>
                    )}
                    
                    {/* Duration stats */}
                    {project.detailImages.length >= 10 && (
                      <div className="mt-8">
                        <ImageStack 
                          images={[project.detailImages[10]].map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={400}
                          captions={['Stats from grass running trial']}
                        />
                      </div>
                    )}
                    
                    {project.detailImages.length >= 14 && (
                      <div className="mt-8">
                        <ImageStack 
                          images={[project.detailImages[14]].map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={400}
                          captions={['Stats from woods running trial']}
                        />
                      </div>
                    )}
                    
                    {/* Stride Variability subtitle */}
                    {project.detailImages.length >= 11 && (
                      <h3 className="text-2xl text-gray-900 font-semibold leading-relaxed max-w-4xl mt-8">Stride Variability</h3>
                    )}
                    
                    {/* Repeatability graph */}
                    {project.detailImages.length >= 11 && (
                      <div className="mt-4">
                        <ImageStack 
                          images={[project.detailImages[11]].map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={400}
                        />
                      </div>
                    )}
                    
                    {/* Repeatability stats */}
                    {project.detailImages.length >= 12 && (
                      <div className="mt-8">
                        <ImageStack 
                          images={[project.detailImages[12]].map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={400}
                          captions={['Stride duration variability, or repeatability, stats']}
                        />
                      </div>
                    )}
                    
                    {/* Stride Symmetry subtitle */}
                    {project.detailImages.length >= 7 && (
                      <h3 className="text-2xl text-gray-900 font-semibold leading-relaxed max-w-4xl mt-8">Stride Symmetry</h3>
                    )}
                    
                    {/* Symmetry graph */}
                    {project.detailImages.length >= 7 && (
                      <div className="mt-4">
                        <ImageStack 
                          images={[project.detailImages[7]].map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={400}
                          captions={['Symmetry stats derived from left and right difference']}
                        />
                      </div>
                    )}
                    
                    {/* Symmetry stats */}
                    {project.detailImages.length >= 8 && (
                      <div className="mt-8">
                        <ImageStack 
                          images={[project.detailImages[8]].map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={400}
                        />
                      </div>
                    )}
                    
                    {/* Site map */}
                    {project.detailImages.length >= 15 && (
                      <div className="mt-8">
                        <ImageStack 
                          images={[project.detailImages[15]].map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={400}
                          captions={['Woods and grass trial site']}
                        />
                      </div>
                    )}
                    
                    {/* Puma Innovation subtitle */}
                    {project.detailImages.length >= 16 && (
                      <h3 className="text-2xl text-gray-900 font-semibold leading-relaxed max-w-4xl mt-8">Puma Innovation</h3>
                    )}
                    
                    {/* Puma images */}
                    {project.detailImages.length >= 17 && (
                      <div className="mt-4">
                        <ImageStack 
                          images={[project.detailImages[17], project.detailImages[16]].map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          imagesByRow={[[project.detailImages[17], project.detailImages[16]]]}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={400}
                          captions={['I tested an upcoming PUMA stability shoe in the UMILL Lab (derived peak eversion velocity), and visited the innovation center in Somerville, MA.', '']}
                        />
                      </div>
                    )}
                  </>
                ) : project.title === 'Truss Bridge' && project.detailImages.length >= 2 ? (
                  <>
                    {/* First two images on same row */}
                    {project.detailImages.length >= 2 && (
                      <div className="mt-8">
                        <ImageStack 
                          images={project.detailImages.slice(0, 2).map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))}
                          imagesByRow={[project.detailImages.slice(0, 2).map(img => ({
                            imageUrl: img.imageUrl,
                            size: img.size,
                            aspectRatio: img.aspectRatio
                          }))]}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={400}
                          captions={['Initial refined design sketch', 'Chosen SAP2000 variant after testing different heights']}
                        />
                      </div>
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
                          <>
                            {/* GIF caption */}
                            <div className="mt-8">
                              <ImageStack 
                                images={[remainingImages[0]]}
                                imagesByRow={[[remainingImages[0]]]}
                                gap={32}
                                rowGap={32}
                                maxRowHeight={550}
                                captions={['Instron compression testing']}
                              />
                            </div>
                            
                            {/* Version 1 subtitle */}
                            <h3 className="text-2xl text-gray-900 font-semibold leading-relaxed max-w-4xl mt-8">Version 1</h3>
                            
                            {/* V1 images */}
                            <div className="mt-4">
                              <ImageStack 
                                images={[remainingImages[1], remainingImages[2]]}
                                imagesByRow={[[remainingImages[1], remainingImages[2]]]}
                                gap={32}
                                rowGap={32}
                                maxRowHeight={550}
                                captions={['Initial SolidWorks Assembly (V1)', 'Stress and Deflection FEA (V1)']}
                              />
                            </div>
                            
                            {/* Version 2 subtitle */}
                            <h3 className="text-2xl text-gray-900 font-semibold leading-relaxed max-w-4xl mt-8">Version 2</h3>
                            
                            {/* V2 isometric */}
                            <div className="mt-4">
                              <ImageStack 
                                images={[remainingImages[3]]}
                                imagesByRow={[[remainingImages[3]]]}
                                gap={32}
                                rowGap={32}
                                maxRowHeight={550}
                                captions={['Final solidworks assembly, added truss frame, pin and roller supports (V2)']}
                              />
                            </div>
                            
                            {/* V2 FEA images */}
                            <div className="mt-8">
                              <ImageStack 
                                images={[remainingImages[4], remainingImages[5]]}
                                imagesByRow={[[remainingImages[4], remainingImages[5]]]}
                                gap={32}
                                rowGap={32}
                                maxRowHeight={550}
                                captions={['Final FEA (V2)', 'Predicted point of failure from stress concentration']}
                              />
                            </div>
                            
                            {/* V2 buckling */}
                            <div className="mt-8">
                              <ImageStack 
                                images={[remainingImages[6]]}
                                imagesByRow={[[remainingImages[6]]]}
                                gap={32}
                                rowGap={32}
                                maxRowHeight={550}
                                captions={['Buckling test—the bridge would not fail from buckling.']}
                              />
                            </div>
                            
                            {/* Failure image */}
                            <div className="mt-8">
                              <ImageStack 
                                images={[remainingImages[7]]}
                                imagesByRow={[[remainingImages[7]]]}
                                gap={32}
                                rowGap={32}
                                maxRowHeight={550}
                                captions={['Point of failure, as predicted, in the undertruss']}
                              />
                            </div>
                          </>
                        );
                      }
                      
                      return (
                        <div className="mt-8">
                          <ImageStack 
                            images={remainingImages}
                            gap={32}
                            rowGap={32}
                            maxRowHeight={400}
                          />
                        </div>
                      );
                    })()}
                  </>
                ) : (
                  <>
                    {/* Special handling for Desk Lamp - show all images together with custom grouping */}
                    {project.title === 'Desk Lamp' && project.detailImages.length >= 4 ? (() => {
                      const allImages = project.detailImages.map(img => ({
                        imageUrl: img.imageUrl,
                        size: img.size,
                        aspectRatio: img.aspectRatio
                      }));
                      
                      // detailImages: [0]=lamp-isometric-light, [1]=lamp-isometric-dark, [2]=lamp-front-light, [3]=lamp-side-dark
                      // User wants:
                      // Row 1: lamp-isometric-light (allImages[0]) + lamp-front-light (allImages[2])
                      // Row 2: lamp-isometric-dark (allImages[1]) + lamp-side-dark (allImages[3])
                      // Description after row 2
                      // Then rest of images
                      const firstFourImages = allImages.slice(0, 4);
                      // Increase size of first two rows slightly
                      if (firstFourImages[0]) firstFourImages[0].size = 'full';
                      if (firstFourImages[2]) firstFourImages[2].size = 'full';
                      if (firstFourImages[1]) firstFourImages[1].size = 'full';
                      if (firstFourImages[3]) firstFourImages[3].size = 'full';
                      const firstFourImagesByRow = [
                        [firstFourImages[0], firstFourImages[2]], // isometric-light and front-light on same row
                        [firstFourImages[1], firstFourImages[3]], // isometric-dark and side-dark on same row
                      ];
                      
                      const remainingImages = allImages.slice(4);
                      // remainingImages: [0]=lamp-joint-gyroid, [1]=lamp-joint-solid, [2]=lamp-side-gyroid, [3]=lamp-panel, 
                      // [4]=lamp-panel-front, [5]=lamp-panel-isometric, [6]=lamp-panel-acrylic, [7]=lamp-close-corner,
                      // [8]=panel-acrylic-close, [9]=panel-overhead-paper, [10]=panel-overhead-acrylicpaper, 
                      // [11]=panel-overhead-acrylicvinyl, [12]=wood-pattern-cardstock, [13]=wood-pattern-cube
                      
                      // Images that should be shown in order (each on separate row):
                      // lamp-joint-gyroid, lamp-joint-solid, lamp-side-gyroid, lamp-panel, lamp-panel-front, 
                      // lamp-panel-isometric, lamp-panel-acrylic, lamp-close-corner, panel-acrylic-close, panel-overhead-paper
                      // But wait, user wants some of these grouped. Let me re-read:
                      // User wants: "After the project description (each a separate row in order), put wood pattern cardstock and wood pattern cube on the same row"
                      // So images in order first, then groupings. But which images are "in order"?
                      // I think the user means: show images in their natural order, each on own row, UNTIL we get to the groupings
                      // The groupings are:
                      // 1. wood-pattern-cardstock + wood-pattern-cube
                      // 2. panel-overhead-paper + panel-overhead-acrylicpaper + panel-overhead-acrylicvinyl (but user said "acrylic" - maybe they mean acrylicpaper?)
                      // 3. lamp-joint-solid + lamp-joint-gyroid
                      // 4. lamp-panel-front + lamp-panel-isometric
                      // 5. lamp-panel-acrylic + lamp-close-corner
                      // 6. lamp-side-gyroid (own row, last)
                      
                      // So images that should be shown in order (each on own row) are:
                      // lamp-joint-gyroid, lamp-joint-solid, lamp-side-gyroid, lamp-panel, lamp-panel-front, 
                      // lamp-panel-isometric, lamp-panel-acrylic, lamp-close-corner, panel-acrylic-close
                      // Then groupings
                      
                      // Actually, I think the user wants ALL images shown, but with specific groupings.
                      // The order should be: show images in sequence, but group the specified ones.
                      // Let me build it step by step:
                      
                      const jointGyroid = remainingImages[0]; // lamp-joint-gyroid
                      const jointSolid = remainingImages[1]; // lamp-joint-solid
                      const sideGyroid = remainingImages[2]; // lamp-side-gyroid
                      const panel = remainingImages[3]; // lamp-panel
                      const panelFront = remainingImages[4]; // lamp-panel-front
                      const panelAcrylic = remainingImages[6]; // lamp-panel-acrylic
                      const cornerClose = remainingImages[7]; // lamp-close-corner
                      const acrylicClose = remainingImages[8]; // panel-acrylic-close
                      const overheadPaper = remainingImages[9]; // panel-overhead-paper
                      const overheadAcrylicPaper = remainingImages[10]; // panel-overhead-acrylicpaper
                      const overheadAcrylicVinyl = remainingImages[11]; // panel-overhead-acrylicvinyl
                      const woodCardstock = remainingImages[12]; // wood-pattern-cardstock
                      const woodCube = remainingImages[13]; // wood-pattern-cube
                      
                      // Build rows: images in order first, then grouped images
                      // User said "After the project description (each a separate row in order)" - I think this means
                      // show the images that aren't grouped, each on their own row, in order
                      // Then show the grouped ones
                      
                      // Images that should be shown individually in order:
                      // lamp-joint-gyroid, lamp-joint-solid, lamp-side-gyroid, lamp-panel, lamp-panel-front,
                      // lamp-panel-isometric, lamp-panel-acrylic, lamp-close-corner, panel-acrylic-close
                      // But wait, user wants some of these grouped! Let me re-read the groupings:
                      // - wood pattern cardstock + wood pattern cube (these are last two)
                      // - panel overhead paper + acrylicpaper + vinyl (these are 9, 10, 11)
                      // - lamp joint solid + joint gyroid (these are 1, 0)
                      // - lamp panel front + panel isometric (these are 4, 5)
                      // - lamp panel acrylic + corner close (these are 6, 7)
                      // - lamp side gyroid on own row (this is 2, last)
                      
                      // So the order should be:
                      // 1. lamp-panel (index 3) - own row
                      // 2. panel-acrylic-close (index 8) - own row
                      // 3. wood-pattern-cardstock + wood-pattern-cube (indices 12, 13) - same row
                      // 4. panel-overhead-paper + acrylicpaper + vinyl (indices 9, 10, 11) - same row
                      // 5. lamp-joint-solid + joint-gyroid (indices 1, 0) - same row
                      // 6. lamp-panel-front + panel-isometric (indices 4, 5) - same row
                      // 7. lamp-panel-acrylic + corner-close (indices 6, 7) - same row
                      // 8. lamp-side-gyroid (index 2) - own row
                      
                      // Increase size of lamp-panel-front and lamp-panel row
                      if (panelFront) panelFront.size = 'full';
                      if (panel) panel.size = 'full';
                      // Increase size of last row (side-gyroid and corner-close)
                      if (sideGyroid) sideGyroid.size = 'full';
                      if (cornerClose) cornerClose.size = 'full';
                      
                      const remainingImagesByRow = [
                        [woodCardstock, woodCube].filter(img => img !== undefined), // wood pattern cardstock and cube on same row
                        [overheadPaper, overheadAcrylicPaper, overheadAcrylicVinyl].filter(img => img !== undefined), // panel overhead images on same row
                        [jointSolid, jointGyroid].filter(img => img !== undefined), // lamp joint solid and gyroid on same row
                        [panelFront, panel].filter(img => img !== undefined), // lamp panel front and lamp-panel on same row (replaced lamp-panel-isometric with lamp-panel)
                        [panelAcrylic, acrylicClose].filter(img => img !== undefined), // lamp panel acrylic and panel-acrylic-close on same row
                        [sideGyroid, cornerClose].filter(img => img !== undefined), // lamp side gyroid and corner close on same row (last)
                      ].filter(row => row.length > 0);
                      
                      return (
                        <>
                          <ImageStack 
                            images={firstFourImages}
                            imagesByRow={firstFourImagesByRow}
                            gap={32}
                            rowGap={32}
                            maxRowHeight={400}
                          />
                          {/* Remaining images after description with captions */}
                          {remainingImages.length > 0 && (
                            <>
                              {/* Wood Microstructure Concept Iteration subtitle */}
                              <h3 className="text-2xl text-gray-900 font-semibold leading-relaxed max-w-4xl mt-8">Wood Microstructure Concept Iteration</h3>
                              
                              {/* Wood pattern cardstock and cube */}
                              <div className="mt-4">
                                <ImageStack 
                                  images={[woodCardstock, woodCube].filter(img => img !== undefined)}
                                  imagesByRow={[[woodCardstock, woodCube].filter(img => img !== undefined)]}
                                  gap={32}
                                  rowGap={32}
                                  maxRowHeight={400}
                                />
                              </div>
                              
                              {/* Panel and Joint Variants subtitle */}
                              <h3 className="text-2xl text-gray-900 font-semibold leading-relaxed max-w-4xl mt-8">Panel and Joint Variants</h3>
                              
                              {/* Panel overhead images */}
                              <div className="mt-4">
                                <ImageStack 
                                  images={[overheadPaper, overheadAcrylicPaper, overheadAcrylicVinyl].filter(img => img !== undefined)}
                                  imagesByRow={[[overheadPaper, overheadAcrylicPaper, overheadAcrylicVinyl].filter(img => img !== undefined)]}
                                  gap={32}
                                  rowGap={32}
                                  maxRowHeight={400}
                                  captions={[
                                    overheadPaper ? 'Laser-cut paper' : '',
                                    overheadAcrylicPaper ? 'Acrylic and laser-etched cardstock' : '',
                                    overheadAcrylicVinyl ? 'Vinyl and laser-etched acrylic' : ''
                                  ].filter(caption => caption !== '')}
                                />
                              </div>
                              
                              {/* Joint images */}
                              <div className="mt-8">
                                <ImageStack 
                                  images={[jointSolid, jointGyroid].filter(img => img !== undefined)}
                                  imagesByRow={[[jointSolid, jointGyroid].filter(img => img !== undefined)]}
                                  gap={32}
                                  rowGap={32}
                                  maxRowHeight={400}
                                  captions={[
                                    jointSolid ? 'Solid 3D-printed joint' : '',
                                    jointGyroid ? 'Gyroid lattice 3D-printed joint' : ''
                                  ].filter(caption => caption !== '')}
                                />
                              </div>
                              
                              {/* Panel front and panel */}
                              <div className="mt-8">
                                <ImageStack 
                                  images={[panelFront, panel].filter(img => img !== undefined)}
                                  imagesByRow={[[panelFront, panel].filter(img => img !== undefined)]}
                                  gap={32}
                                  rowGap={32}
                                  maxRowHeight={400}
                                  captions={[
                                    panelFront ? 'Wood front panel' : '',
                                    panel ? 'Wood side panel' : ''
                                  ].filter(caption => caption !== '')}
                                />
                              </div>
                              
                              {/* Panel acrylic and acrylic close */}
                              <div className="mt-8">
                                <ImageStack 
                                  images={[panelAcrylic, acrylicClose].filter(img => img !== undefined)}
                                  imagesByRow={[[panelAcrylic, acrylicClose].filter(img => img !== undefined)]}
                                  gap={32}
                                  rowGap={32}
                                  maxRowHeight={400}
                                />
                              </div>
                              
                              {/* Side gyroid and corner close */}
                              <div className="mt-8">
                                <ImageStack 
                                  images={[sideGyroid, cornerClose].filter(img => img !== undefined)}
                                  imagesByRow={[[sideGyroid, cornerClose].filter(img => img !== undefined)]}
                                  gap={32}
                                  rowGap={32}
                                  maxRowHeight={400}
                                />
                              </div>
                            </>
                          )}
                        </>
                      );
                    })() : (
                      <>
                        {/* Special handling for 3D Printed Footwear - show website and GIF after description */}
                        {project.title === '3D Printed Footwear' && project.detailImages.length >= 2 ? (
                          <>
                            {/* All images for 3D Printed Footwear - website first, then GIF, then rest */}
                            {project.detailImages.length > 0 && (() => {
                              const allImages = project.detailImages.map(img => ({
                                imageUrl: img.imageUrl,
                                size: img.size,
                                aspectRatio: img.aspectRatio
                              }));
                              
                              // detailImages: [0]=website, [1]=GIF, [2]=blender-front, [3]=blender-profile, [4]=rear, etc.
                              // Make website image larger
                              if (allImages[0]) {
                                allImages[0].size = 'full';
                              }
                              
                              const imagesByRow = [
                                [allImages[0]], // Website (first, on its own row, full width)
                                [allImages[1]], // GIF (second, full width)
                                [allImages[2], allImages[3]], // blender-front and blender-profile
                                [allImages[4], allImages[5]], // rear and top
                                [allImages[6], allImages[7]], // bottom and profile-medial
                                ...(allImages.length > 8 ? [[allImages[8]]] : []), // isometric
                                ...(allImages.length > 9 ? [[allImages[9]]] : []), // profile
                                ...(allImages.length > 10 ? [[allImages[10]]] : []), // overhead
                                [allImages[11], allImages[12]], // cross-section and slicer
                                [allImages[13], allImages[14]], // opt1 and opt2
                              ].filter(row => row.length > 0 && row.every(img => img !== undefined));
                              
                              return (
                                <>
                                  {/* Website image with larger maxRowHeight */}
                                  <div className="mt-8 mb-8">
                                    <ImageStack 
                                      images={[allImages[0]]}
                                      imagesByRow={[[allImages[0]]]}
                                      gap={32}
                                      rowGap={32}
                                      maxRowHeight={575}
                                    />
                                  </div>
                                  {/* Rest of images */}
                                  <ImageStack 
                                    images={allImages.slice(1)}
                                    imagesByRow={imagesByRow.slice(1)}
                                    gap={32}
                                    rowGap={32}
                                    maxRowHeight={550}
                                  />
                                </>
                              );
                            })()}
                          </>
                        ) : (
                          <>
                            {/* First two images */}
                            {project.detailImages.length >= 2 && (
                              <>
                                {/* Sketchbook Pages subtitle for Design Sketching */}
                                {project.title === 'Design Sketching' && (
                                  <h3 className="text-2xl text-gray-900 font-semibold leading-relaxed max-w-4xl mt-8">Sketchbook Pages</h3>
                                )}
                                {/* Objects subtitle for Drawing */}
                                {project.title === 'Drawing' && (
                                  <h3 className="text-2xl text-gray-900 font-semibold leading-relaxed max-w-4xl mt-8">Objects</h3>
                                )}
                                {project.title === 'AirPods Max Redesign' ? (
                                  <div className="mt-8">
                                    <ImageStack 
                                      images={project.detailImages.slice(0, 2).map(img => ({
                                        imageUrl: img.imageUrl,
                                        size: img.size,
                                        aspectRatio: img.aspectRatio
                                      }))}
                                      imagesByRow={[project.detailImages.slice(0, 2).map(img => ({
                                        imageUrl: img.imageUrl,
                                        size: img.size,
                                        aspectRatio: img.aspectRatio
                                      }))]}
                                      gap={32}
                                      rowGap={32}
                                      maxRowHeight={400}
                                      captions={['Average human head OBJ with headphone cushion profile', 'Cushion geometry generated from 3D path head path']}
                                    />
                                  </div>
                                ) : (
                                  <div className={project.title === 'Design Sketching' ? "mt-4" : "mt-8"}>
                                    <ImageStack 
                                      images={project.detailImages.slice(0, 2).map(img => ({
                                        imageUrl: img.imageUrl,
                                        size: img.size,
                                        aspectRatio: img.aspectRatio
                                      }))}
                                      gap={32}
                                      rowGap={32}
                                      maxRowHeight={project.title === 'Dino Robot Walker' ? 450 : project.title === 'Design Sketching' ? 500 : project.title === 'Sculpture' ? 500 : 400}
                                      captions={project.title === 'Microfluidics Research' ? ['Complex Fluids Lab', 'Droplet maker junction'] : undefined}
                                    />
                                  </div>
                                )}
                                {/* Caption for first image - Other CAD */}
                                {project.title === 'Other CAD' && project.detailImages.length >= 1 && (
                                  <div className="mt-2">
                                    <p className="text-lg text-gray-600 leading-relaxed">SolidWorks part drawings</p>
                                  </div>
                                )}
                              </>
                            )}
                            
                            {/* Remaining images */}
                            {project.detailImages.length > 2 && (() => {
                              const remainingImages = project.detailImages.slice(2).map(img => ({
                                imageUrl: img.imageUrl,
                                size: img.size,
                                aspectRatio: img.aspectRatio
                              }));
                              
                              // Special handling for Drawing - group portrait images into rows
                  if (project.title === 'Drawing' && remainingImages.length >= 13) {
                    // After first two images (drawing-spoon, drapery-draped), organize remaining images
                    // remainingImages: [0]=drapery-flat, [1]=eraser-1, [2]=eraser-2, [3]=paper-crumpled, [4]=stools-negative, [5]=stools-reverse-negative, [6]=lynn-landscape, [7]=quebec-landscape, [8]=statues-gallery, [9]=portrait-pondering, [10]=portrait-overhead, [11]=portrait-eye-cover, [12]=portrait-winking
                    
                    // Make statues-gallery larger
                    if (remainingImages[8]) {
                      remainingImages[8].size = 'full';
                    }
                    
                    // Increase size of drapery-flat and paper-crumpled
                    if (remainingImages[0]) {
                      remainingImages[0].size = 'full';
                    }
                    if (remainingImages[3]) {
                      remainingImages[3].size = 'full';
                    }
                    
                    // Group drapery-flat and paper-crumpled on same row
                    const imagesBeforeStatues = [
                      remainingImages[0], // drapery-flat
                      remainingImages[1], // eraser-1
                      remainingImages[2], // eraser-2
                      remainingImages[3], // paper-crumpled
                      remainingImages[4], // stools-negative
                      remainingImages[5], // stools-reverse-negative
                      remainingImages[6], // lynn-landscape
                      remainingImages[7], // quebec-landscape
                    ];
                    
                    const imagesBeforeStatuesByRow = [
                      [remainingImages[0], remainingImages[3]], // drapery-flat and paper-crumpled (on same row)
                      [remainingImages[1], remainingImages[2]], // eraser-1 and eraser-2 (on same row)
                      [remainingImages[4], remainingImages[5]], // stools-negative and stools-reverse-negative (on same row)
                      [remainingImages[6], remainingImages[7]], // lynn-landscape and quebec-landscape (on same row)
                    ];
                    
                    const statuesImage = remainingImages[8];
                    const portraitImages = remainingImages.slice(9);
                    
                    const portraitImagesByRow = [
                      [portraitImages[0], portraitImages[1]], // portrait-pondering and portrait-overhead (on same row)
                      [portraitImages[2], portraitImages[3]], // portrait-eye-cover and portrait-winking (on same row)
                    ];
                    
                    return (
                      <>
                        <ImageStack 
                          images={imagesBeforeStatues.slice(0, 6)}
                          imagesByRow={imagesBeforeStatuesByRow.slice(0, 3)}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={400}
                        />
                        {/* Landscapes subtitle */}
                        <h3 className="text-2xl text-gray-900 font-semibold leading-relaxed max-w-4xl mt-8">Landscapes</h3>
                        <div className="mt-4">
                          <ImageStack 
                            images={[remainingImages[6], remainingImages[7]]}
                            imagesByRow={[[remainingImages[6], remainingImages[7]]]}
                            gap={32}
                            rowGap={32}
                            maxRowHeight={400}
                          />
                        </div>
                        {/* People subtitle */}
                        <h3 className="text-2xl text-gray-900 font-semibold leading-relaxed max-w-4xl mt-8">People</h3>
                        <div className="mt-4 mb-8">
                          <ImageStack 
                            images={[statuesImage]}
                            gap={32}
                            rowGap={32}
                            maxRowHeight={650}
                          />
                        </div>
                        <ImageStack 
                          images={portraitImages}
                          imagesByRow={portraitImagesByRow}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={400}
                        />
                      </>
                    );
                  }
                  
                  // Special handling for Design Sketching - make all images larger
                  if (project.title === 'Design Sketching' && remainingImages.length > 0) {
                    return (
                      <ImageStack 
                        images={remainingImages}
                        gap={32}
                        rowGap={32}
                        maxRowHeight={500}
                      />
                    );
                  }
                  
                  // Special handling for Other CAD - add captions and subtitles
                  // Note: first two images (geneva-wheel, pivot-arm) are shown above with caption for first image
                  // remainingImages: [0]=spur-gears (detailImages[2]), [1]=bike-spacer (detailImages[3]), [2]=spool-rack (detailImages[4]), [3]=lattice-cubes (detailImages[5])
                  // Arrange in rows: spur-gears on own row, then bike-spacer and spool-rack on same row, then lattice-cubes on own row
                  if (project.title === 'Other CAD' && remainingImages.length >= 4) {
                    return (
                      <>
                        {/* Fusion 360 subtitle */}
                        <h3 className="text-2xl text-gray-900 font-semibold leading-relaxed max-w-4xl mt-8">Fusion 360</h3>
                        
                        {/* Spur gears and Bike spacer - on same row */}
                        <div className="mt-4">
                          <ImageStack 
                            images={[remainingImages[0], remainingImages[1]]}
                            imagesByRow={[[remainingImages[0], remainingImages[1]]]}
                            gap={32}
                            rowGap={32}
                            maxRowHeight={400}
                            captions={['Spur gears', 'Cannondale road bike stem spacer']}
                          />
                        </div>
                        
                        {/* Spool rack and Lattice cubes - on same row */}
                        <div className="mt-8">
                          <ImageStack 
                            images={[remainingImages[2], remainingImages[3]]}
                            imagesByRow={[[remainingImages[2], remainingImages[3]]]}
                            gap={32}
                            rowGap={32}
                            maxRowHeight={400}
                            captions={['Filament spool rack support', 'Test lattice cubes']}
                          />
                        </div>
                      </>
                    );
                  }
                  
                  // Special handling for Microfluidics Research - make poster larger after GIF
                  if (project.title === 'Microfluidics Research' && remainingImages.length >= 2) {
                    // remainingImages: [0]=GIF, [1]=poster, [2]=alginate-overhead, [3]=vpdms-normal, [4]=vpdms-fluorescent, [5]=rheometer
                    // Poster is at index 1 (after GIF at index 0)
                    if (remainingImages[1]) {
                      remainingImages[1].size = 'full'; // Make poster larger
                    }
                    
                    // Restore original auto-wrapping organization - render rows with aligned captions
                    return (
                      <>
                        {/* GIF row */}
                        <div className="mt-8">
                          <ImageStack 
                            images={[remainingImages[0]]}
                            imagesByRow={[[remainingImages[0]]]}
                            gap={32}
                            rowGap={32}
                            maxRowHeight={650}
                            captions={['VPDMS droplet maker in action!']}
                          />
                        </div>
                        
                        {/* Poster row */}
                        {remainingImages[1] && (
                          <div className="mt-8">
                            <ImageStack 
                              images={[remainingImages[1]]}
                              imagesByRow={[[remainingImages[1]]]}
                              gap={32}
                              rowGap={32}
                              maxRowHeight={650}
                            />
          </div>
                        )}
                        
                        {/* Remaining images in original auto-wrapping (typically 2 per row) */}
                        {remainingImages.length > 2 && (
                          <div className="mt-8">
                            <ImageStack 
                              images={remainingImages.slice(2)}
                              gap={32}
                              rowGap={32}
                              maxRowHeight={650}
                              captions={[
                                'Sodium alginate particles',
                                'VPDMS emulsified particles',
                                'VPDMS emulsified with fluorescent dye',
                                'Rheometer used to test modulus of alginate particles'
                              ]}
                            />
            </div>
                        )}
                      </>
                    );
                  }
                  
                  // Special handling for Modular Running Shoe - specific row groupings
                  if (project.title === 'Modular Running Shoe' && remainingImages.length >= 11) {
                    // After first two images (ideation and sketch), organize remaining images
                    // remainingImages: [0]=modular-sw1, [1]=modular-sw2, [2]=techpack1, [3]=techpack2, [4]=techpack3, [5]=techpack4, [6]=cupsole-isometric, [7]=cupsole-overhead, [8]=cupsole-printed, [9]=outsole-isometric, [10]=modular-bottom
                    
                    return (
                      <>
                        {/* Prototype CAD subtitle */}
                        <h3 className="text-2xl text-gray-900 font-semibold leading-relaxed max-w-4xl mt-8">Prototype CAD</h3>
                        
                        {/* Modular SW images */}
                        <div className="mt-4">
                          <ImageStack 
                            images={[remainingImages[0], remainingImages[1]]}
                            imagesByRow={[[remainingImages[0], remainingImages[1]]]}
                            gap={32}
                            rowGap={32}
                            maxRowHeight={400}
                            captions={['Outsole with tapered locking dovetails', 'Slide and lock midsole with flexure points']}
                          />
                        </div>
                        
                        {/* Cupsole images */}
                        <div className="mt-8">
                          <ImageStack 
                            images={[remainingImages[6], remainingImages[7], remainingImages[8]]}
                            imagesByRow={[[remainingImages[6], remainingImages[7], remainingImages[8]]]}
                            gap={32}
                            rowGap={32}
                            maxRowHeight={400}
                            captions={['Final cupsole', '', '']}
                          />
                        </div>
                        
                        {/* Outsole and modular bottom */}
                        <div className="mt-8">
                          <ImageStack 
                            images={[remainingImages[9], remainingImages[10]]}
                            imagesByRow={[[remainingImages[9], remainingImages[10]]]}
                            gap={32}
                            rowGap={32}
                            maxRowHeight={400}
                            captions={['Final outsole', 'Wearable prototype build']}
                          />
                        </div>
                        
                        {/* Tech Pack subtitle */}
                        <h3 className="text-2xl text-gray-900 font-semibold leading-relaxed max-w-4xl mt-8">Tech Pack</h3>
                        
                        {/* Techpack images */}
                        <div className="mt-4">
                          <ImageStack 
                            images={[remainingImages[2], remainingImages[3]]}
                            imagesByRow={[[remainingImages[2], remainingImages[3]]]}
                            gap={32}
                            rowGap={32}
                            maxRowHeight={400}
                          />
                        </div>
                        <div className="mt-8">
                          <ImageStack 
                            images={[remainingImages[4], remainingImages[5]]}
                            imagesByRow={[[remainingImages[4], remainingImages[5]]]}
                            gap={32}
                            rowGap={32}
                            maxRowHeight={400}
                          />
                        </div>
                      </>
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
                      <>
                        {/* Slides 1-3 (full width) */}
                        <div className="mt-8">
                          <ImageStack 
                            images={[remainingImages[0], remainingImages[1], remainingImages[2]]}
                            imagesByRow={[[remainingImages[0]], [remainingImages[1]], [remainingImages[2]]]}
                            gap={32}
                            rowGap={32}
                            maxRowHeight={550}
                          />
                        </div>
                        {/* Last row - assembly-drawing and ear-closeup with captions */}
                        <div className="mt-8">
                          <ImageStack 
                            images={[remainingImages[3], remainingImages[4]]}
                            imagesByRow={[[remainingImages[3], remainingImages[4]]]}
                            gap={32}
                            rowGap={32}
                            maxRowHeight={550}
                            captions={['Final cushion and case assembly drawing', 'Cushion with and without 3 mm magnetic spacers']}
                          />
                        </div>
                      </>
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
                        <div className="mt-8">
                          <ImageStack 
                            images={remainingImages}
                            imagesByRow={imagesByRow}
                            gap={32}
                            rowGap={32}
                            maxRowHeight={450}
                          />
                        </div>
                      );
                    }
                  }
                  
                  return (
                    <div className="mt-8">
                      <ImageStack 
                        images={remainingImages}
                        gap={32}
                        rowGap={32}
                        maxRowHeight={project.title === 'Sculpture' ? 500 : 400}
                      />
                    </div>
                  );
                })()}
                            </>
                          )}
                        </>
                      )}
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