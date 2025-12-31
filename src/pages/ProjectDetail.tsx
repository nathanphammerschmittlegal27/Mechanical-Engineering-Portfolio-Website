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
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">
                  {project.detailDescription.split(/(nexusfootwear\.com)/).map((part, index) => {
                    if (part === 'nexusfootwear.com') {
                      return (
                        <a
                          key={index}
                          href="https://nexusfootwear.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-gray-800 hover:text-gray-900"
                        >
                          {part}
                        </a>
                      );
                    }
                    return part;
                  })}
                </p>
              </motion.div>
            )}
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
                      <div className="mt-8">
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
                          <div className="mt-8">
                            <ImageStack 
                              images={remainingImages}
                              imagesByRow={imagesByRow}
                              gap={32}
                              rowGap={32}
                              maxRowHeight={550}
                            />
                          </div>
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
                ) : project.title === 'Running Biomechanics' && project.detailImages.length >= 2 ? (
                  <>
                    {/* First image only */}
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
                        />
                      </div>
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
                        <div className="mt-8">
                          <ImageStack 
                            images={remainingImages}
                            imagesByRow={imagesByRow}
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
                          {/* Remaining images after description */}
                          {remainingImages.length > 0 && (
                            <ImageStack 
                              images={remainingImages}
                              imagesByRow={remainingImagesByRow}
                              gap={32}
                              rowGap={32}
                              maxRowHeight={400}
                            />
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
                              <div className="mt-8">
                                <ImageStack 
                                  images={project.detailImages.slice(0, 2).map(img => ({
                                    imageUrl: img.imageUrl,
                                    size: img.size,
                                    aspectRatio: img.aspectRatio
                                  }))}
                                  gap={32}
                                  rowGap={32}
                                  maxRowHeight={project.title === 'Dino Robot Walker' ? 450 : project.title === 'Design Sketching' ? 500 : project.title === 'Sculpture' ? 500 : 400}
                                />
                              </div>
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
                          images={imagesBeforeStatues}
                          imagesByRow={imagesBeforeStatuesByRow}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={400}
                        />
                        <div className="mt-8 mb-8">
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
                        maxRowHeight={650}
                      />
                    );
                  }
                  
                  // Special handling for Modular Running Shoe - specific row groupings
                  if (project.title === 'Modular Running Shoe' && remainingImages.length >= 11) {
                    // After first two images (ideation and sketch), organize remaining images
                    // remainingImages: [0]=modular-sw1, [1]=modular-sw2, [2]=techpack1, [3]=techpack2, [4]=techpack3, [5]=techpack4, [6]=cupsole-isometric, [7]=cupsole-overhead, [8]=cupsole-printed, [9]=outsole-isometric, [10]=modular-bottom
                    
                    const imagesByRow = [
                      [remainingImages[0], remainingImages[1]], // modular-sw1 and modular-sw2 (on same row)
                      [remainingImages[2], remainingImages[3]], // techpack1 and techpack2 (on same row)
                      [remainingImages[4], remainingImages[5]], // techpack3 and techpack4 (on same row)
                      [remainingImages[6], remainingImages[7], remainingImages[8]], // cupsole-isometric, cupsole-overhead, cupsole-printed (all on same row)
                      [remainingImages[9], remainingImages[10]], // outsole-isometric and modular-bottom (last two, on same row)
                    ];
                    
                    return (
                      <ImageStack 
                        images={remainingImages}
                        imagesByRow={imagesByRow}
                        gap={32}
                        rowGap={32}
                        maxRowHeight={400}
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
                      <div className="mt-8">
                        <ImageStack 
                          images={remainingImages}
                          imagesByRow={imagesByRow}
                          gap={32}
                          rowGap={32}
                          maxRowHeight={550}
                        />
                      </div>
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