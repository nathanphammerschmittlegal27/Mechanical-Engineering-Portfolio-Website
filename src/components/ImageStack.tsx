import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Image {
  src?: string;
  imageUrl?: string; // Support both formats
  alt?: string;
  size?: 'full' | 'half' | 'two-thirds' | 'one-third';
  aspectRatio?: 'auto' | 'landscape' | 'portrait' | 'square';
}

interface ImageStackProps {
  images: Image[];
  imagesByRow?: Image[][]; // Optional explicit row grouping
  gap?: number; // Gap in pixels (default 16px)
  rowGap?: number; // Gap between rows in pixels (default 16px)
  maxRowHeight?: number; // Max height for rows in pixels (default 280px desktop, 200px mobile)
}

export function ImageStack({ 
  images, 
  imagesByRow,
  gap = 16,
  rowGap = 16,
  maxRowHeight = 280
}: ImageStackProps) {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rowHeights, setRowHeights] = useState<{ [rowIndex: number]: number }>({});
  const [rowWidths, setRowWidths] = useState<{ [rowIndex: number]: number }>({});
  const [rows, setRows] = useState<Image[][]>([]);

  // Build rows - either use explicit grouping or auto-wrap
  useEffect(() => {
    if (imagesByRow) {
      setRows(imagesByRow);
    } else {
      // Auto-wrap: group images into rows
      // Full-width images start new rows, otherwise try to fit 2 per row
      const builtRows: Image[][] = [];
      let currentRow: Image[] = [];
      
      images.forEach((img) => {
        const imageSrc = img.src || img.imageUrl || '';
        const isFullWidth = img.size === 'full' || 
                           (imageSrc.toLowerCase().endsWith('.gif'));
        
        // If full-width and we have items in current row, finalize the row first
        if (isFullWidth && currentRow.length > 0) {
          builtRows.push([...currentRow]);
          currentRow = [];
        }
        
        currentRow.push(img);
        
        // Finalize row if it's full-width or has 2 items
        if (isFullWidth || currentRow.length >= 2) {
          builtRows.push([...currentRow]);
          currentRow = [];
        }
      });
      
      // Add any remaining items
      if (currentRow.length > 0) {
        builtRows.push(currentRow);
      }
      
      setRows(builtRows);
    }
  }, [images, imagesByRow]);

  // Match heights within each row and calculate widths to fit
  useEffect(() => {
    const updateHeightsAndWidths = () => {
      const heights: { [rowIndex: number]: number } = {};
      const widths: { [rowIndex: number]: number } = {};
      
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      
      rows.forEach((row, rowIndex) => {
        if (row.length === 0) return;
        
        // Find the index of the first image in this row within the full images array
        let imageIndex = 0;
        for (let i = 0; i < rowIndex; i++) {
          imageIndex += rows[i].length;
        }
        
        const rowImageRefs = row.map((_, idx) => imageRefs.current[imageIndex + idx]);
        const loadedRefs = rowImageRefs.filter(ref => ref && ref.complete && ref.naturalHeight > 0);
        
        if (loadedRefs.length === row.length) {
          // Calculate max height for this row, but cap at maxRowHeight
          const naturalHeights = loadedRefs.map(ref => {
            const aspectRatio = row[loadedRefs.indexOf(ref)].aspectRatio;
            if (aspectRatio === 'auto') {
              return ref!.offsetHeight;
            }
            // For fixed aspect ratios, calculate based on width
            const width = ref!.offsetWidth;
            if (aspectRatio === 'landscape') return width / (16/9);
            if (aspectRatio === 'portrait') return width / (3/4);
            if (aspectRatio === 'square') return width;
            return ref!.offsetHeight;
          });
          
          const maxNaturalHeight = Math.max(...naturalHeights);
          let targetHeight = Math.min(maxNaturalHeight, maxRowHeight);
          
          // Calculate total width needed for all images at target height
          let totalWidth = 0;
          loadedRefs.forEach((ref, idx) => {
            const img = row[idx];
            const aspectRatio = img.aspectRatio || 'auto';
            let imageWidth: number;
            
            if (aspectRatio === 'auto') {
              // Calculate width based on aspect ratio at target height
              const naturalWidth = ref!.naturalWidth;
              const naturalHeight = ref!.naturalHeight;
              imageWidth = (naturalWidth / naturalHeight) * targetHeight;
            } else if (aspectRatio === 'landscape') {
              imageWidth = targetHeight * (16/9);
            } else if (aspectRatio === 'portrait') {
              imageWidth = targetHeight * (3/4);
            } else { // square
              imageWidth = targetHeight;
            }
            totalWidth += imageWidth;
          });
          
          // Add gap widths
          totalWidth += gap * (row.length - 1);
          
          // If images don't fit, calculate scale factor (for both single and multiple images)
          if (totalWidth > containerWidth) {
            if (row.length === 1) {
              // Single image: allow it to be wider (up to 125% of container), but scale if it exceeds that
              const maxAllowedWidth = containerWidth * 1.25;
              if (totalWidth > maxAllowedWidth) {
                const scaleFactor = maxAllowedWidth / totalWidth;
                targetHeight = targetHeight * scaleFactor;
                widths[rowIndex] = scaleFactor;
              } else {
                // Image fits within 125% constraint, allow it to be its natural size
                widths[rowIndex] = 1;
              }
            } else {
              // Multiple images: account for gaps
              const scaleFactor = (containerWidth - (gap * (row.length - 1))) / (totalWidth - (gap * (row.length - 1)));
              widths[rowIndex] = scaleFactor;
            }
          } else {
            widths[rowIndex] = 1;
          }
          
          heights[rowIndex] = targetHeight;
        }
      });
      
      setRowHeights(heights);
      setRowWidths(widths);
    };

    const checkAllLoaded = () => {
      let allLoaded = true;
      imageRefs.current.forEach((img) => {
        if (img && (!img.complete || img.naturalHeight === 0)) {
          allLoaded = false;
        }
      });
      
      if (allLoaded && rows.length > 0) {
        setTimeout(updateHeightsAndWidths, 150);
      } else {
        setTimeout(checkAllLoaded, 100);
      }
    };

    if (rows.length > 0) {
      checkAllLoaded();
    }
    
    window.addEventListener('resize', updateHeightsAndWidths);
    return () => window.removeEventListener('resize', updateHeightsAndWidths);
  }, [rows, maxRowHeight, gap]);

  // Calculate global image index
  const getGlobalImageIndex = (rowIndex: number, imageIndexInRow: number): number => {
    let index = 0;
    for (let i = 0; i < rowIndex; i++) {
      index += rows[i].length;
    }
    return index + imageIndexInRow;
  };

  return (
    <div 
      ref={containerRef}
      className="flex flex-col"
      style={{ 
        gap: `${rowGap}px`,
        overflow: 'visible',
        width: '100%'
      }}
    >
      {rows.map((row, rowIndex) => {
        const rowHeight = rowHeights[rowIndex];
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const effectiveMaxHeight = isMobile ? Math.min(maxRowHeight * 0.7, 200) : maxRowHeight;
        const targetHeight = rowHeight || effectiveMaxHeight;
        
        const rowScale = rowWidths[rowIndex] || 1;
        const needsScaling = rowScale < 1;
        
        return (
          <div
            key={rowIndex}
            className="flex flex-row"
            style={{
              gap: `${gap}px`,
              alignItems: 'flex-start',
              overflow: 'visible',
              width: '100%',
              flexWrap: needsScaling ? 'nowrap' : 'wrap'
            }}
          >
            {row.map((image, imageIndexInRow) => {
              const globalIndex = getGlobalImageIndex(rowIndex, imageIndexInRow);
              const aspectRatio = image.aspectRatio || 'auto';
              const useNaturalAspect = aspectRatio === 'auto';
              const hasFixedHeight = rowHeight !== undefined;
              const scaledHeight = hasFixedHeight ? targetHeight * rowScale : undefined;
              
              // Calculate width based on size property for single images
              const imageSize = image.size;
              let maxWidthStyle: string | undefined = undefined;
              if (row.length === 1 && imageSize && imageSize !== 'full') {
                if (imageSize === 'two-thirds') {
                  maxWidthStyle = '66.666%';
                } else if (imageSize === 'half') {
                  maxWidthStyle = '50%';
                } else if (imageSize === 'one-third') {
                  maxWidthStyle = '33.333%';
                }
              }
              
              return (
                <motion.div
                  key={globalIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: globalIndex * 0.05 }}
                  style={{
                    overflow: 'visible',
                    flexShrink: needsScaling ? 1 : 0,
                    minWidth: 0,
                    width: maxWidthStyle ? maxWidthStyle : 'auto',
                    maxWidth: maxWidthStyle ? maxWidthStyle : undefined
                  }}
                >
                  {useNaturalAspect ? (
                    <div
                      style={hasFixedHeight ? {
                        height: `${scaledHeight || targetHeight}px`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        overflow: 'visible'
                      } : {
                        maxHeight: `${effectiveMaxHeight}px`
                      }}
                    >
                      <img
                        ref={(el) => {
                          imageRefs.current[globalIndex] = el;
                        }}
                        src={image.src || image.imageUrl || ''}
                        alt={image.alt || ''}
                        className="rounded-2xl shadow-[0_20px_30px_-8px_rgba(0,0,0,0.19)]"
                        style={hasFixedHeight ? {
                          height: `${scaledHeight || targetHeight}px`,
                          width: 'auto',
                          maxWidth: maxWidthStyle || '125%',
                          objectFit: 'contain'
                        } : {
                          maxHeight: `${effectiveMaxHeight}px`,
                          maxWidth: maxWidthStyle || '125%',
                          width: 'auto',
                          height: 'auto',
                          objectFit: 'contain'
                        }}
                        onLoad={() => {
                          // Trigger height recalculation
                          setTimeout(() => {
                            const updateHeights = () => {
                              const heights: { [rowIndex: number]: number } = {};
                              
                              rows.forEach((r, ri) => {
                                let imgIdx = 0;
                                for (let i = 0; i < ri; i++) {
                                  imgIdx += rows[i].length;
                                }
                                
                                const rowImageRefs = r.map((_, idx) => imageRefs.current[imgIdx + idx]);
                                const loadedRefs = rowImageRefs.filter(ref => ref && ref.complete && ref.naturalHeight > 0);
                                
                                if (loadedRefs.length === r.length) {
                                  const naturalHeights = loadedRefs.map(ref => {
                                    const aspectRatio = r[loadedRefs.indexOf(ref)].aspectRatio;
                                    if (aspectRatio === 'auto') {
                                      return ref!.offsetHeight;
                                    }
                                    const width = ref!.offsetWidth;
                                    if (aspectRatio === 'landscape') return width / (16/9);
                                    if (aspectRatio === 'portrait') return width / (3/4);
                                    if (aspectRatio === 'square') return width;
                                    return ref!.offsetHeight;
                                  });
                                  
                                  const maxNaturalHeight = Math.max(...naturalHeights);
                                  heights[ri] = Math.min(maxNaturalHeight, effectiveMaxHeight);
                                }
                              });
                              
                              setRowHeights(heights);
                              
                              // Recalculate widths
                              if (containerRef.current) {
                                const containerWidth = containerRef.current.offsetWidth;
                                const widths: { [rowIndex: number]: number } = {};
                                
                                rows.forEach((r, ri) => {
                                  let imgIdx = 0;
                                  for (let i = 0; i < ri; i++) {
                                    imgIdx += rows[i].length;
                                  }
                                  
                                  const rowImageRefs = r.map((_, idx) => imageRefs.current[imgIdx + idx]);
                                  const loadedRefs = rowImageRefs.filter(ref => ref && ref.complete && ref.naturalHeight > 0);
                                  
                                  if (loadedRefs.length === r.length) {
                                    let rowHeight = heights[ri] || effectiveMaxHeight;
                                    let totalWidth = 0;
                                    loadedRefs.forEach((ref, idx) => {
                                      const img = r[idx];
                                      const aspectRatio = img.aspectRatio || 'auto';
                                      let imageWidth: number;
                                      
                                      if (aspectRatio === 'auto') {
                                        const naturalWidth = ref!.naturalWidth;
                                        const naturalHeight = ref!.naturalHeight;
                                        imageWidth = (naturalWidth / naturalHeight) * rowHeight;
                                      } else if (aspectRatio === 'landscape') {
                                        imageWidth = rowHeight * (16/9);
                                      } else if (aspectRatio === 'portrait') {
                                        imageWidth = rowHeight * (3/4);
                                      } else {
                                        imageWidth = rowHeight;
                                      }
                                      totalWidth += imageWidth;
                                    });
                                    
                                    totalWidth += gap * (r.length - 1);
                                    
                                    if (totalWidth > containerWidth) {
                                      if (r.length === 1) {
                                        // Single image: allow it to be wider (up to 125% of container), but scale if it exceeds that
                                        const maxAllowedWidth = containerWidth * 1.25;
                                        if (totalWidth > maxAllowedWidth) {
                                          const scaleFactor = maxAllowedWidth / totalWidth;
                                          rowHeight = rowHeight * scaleFactor;
                                          heights[ri] = rowHeight;
                                          widths[ri] = scaleFactor;
                                        } else {
                                          // Image fits within 125% constraint, allow it to be its natural size
                                          widths[ri] = 1;
                                        }
                                      } else {
                                        // Multiple images: account for gaps
                                        const scaleFactor = (containerWidth - (gap * (r.length - 1))) / (totalWidth - (gap * (r.length - 1)));
                                        widths[ri] = scaleFactor;
                                      }
                                    } else {
                                      widths[ri] = 1;
                                    }
                                  } else {
                                    widths[ri] = 1;
                                  }
                                });
                                
                                setRowWidths(widths);
                              }
                            };
                            updateHeights();
                          }, 100);
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      className={`${aspectRatio === 'landscape' ? 'aspect-[16/9]' : aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'} rounded-2xl overflow-hidden shadow-[0_20px_30px_-8px_rgba(0,0,0,0.19)]`}
                      style={hasFixedHeight ? {
                        height: `${scaledHeight || targetHeight}px`,
                        width: 'auto',
                        maxWidth: maxWidthStyle || (needsScaling ? '125%' : 'none')
                      } : {
                        maxHeight: `${effectiveMaxHeight}px`,
                        maxWidth: maxWidthStyle || '125%',
                        width: 'auto'
                      }}
                    >
                      <img
                        ref={(el) => {
                          imageRefs.current[globalIndex] = el;
                        }}
                        src={image.src || image.imageUrl || ''}
                        alt={image.alt || ''}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

