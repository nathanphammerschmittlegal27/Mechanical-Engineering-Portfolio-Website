export interface Project {
  id: string;
  title: string;
  category: string | string[];
  description: string;
  imageUrl: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  processImages?: string[];
  specs?: {
    label: string;
    value: string;
  }[];
  detailDescription?: string;
  detailImages?: {
    imageUrl: string;
    size?: 'full' | 'half' | 'two-thirds' | 'one-third';
    aspectRatio?: 'auto' | 'landscape' | 'portrait' | 'square';
  }[];
}
export const ENGINEERING_PROJECTS: Project[] = [{
  id: '1',
  title: 'Dino Robot Walker',
  category: 'Mechanical',
  description: 'An ambulatory robot that converts rotational motion into translational motion using a 4-bar linkage.',
  imageUrl: '/images/projects/Dino Robot Walker/dino-cover.webp',
  overview: 'Designed a next-generation drone frame using advanced generative design algorithms and carbon fiber composite materials. The project focused on maximizing flight time while maintaining structural integrity under various payload conditions.',
  challenge: 'Traditional drone frames struggle with the balance between weight reduction and structural strength, especially when carrying heavy sensor payloads for extended periods.',
  solution: 'Implemented topology optimization in Fusion 360 to create an organic, lightweight structure. Used carbon fiber layup techniques to achieve a 40% weight reduction compared to aluminum alternatives while maintaining equivalent strength.',
  processImages: ['/images/dino-robot-walker-process-1.jpg', '/images/dino-robot-walker-process-2.jpg', '/images/dino-robot-walker-process-3.jpg'],
  specs: [{
    label: 'Weight',
    value: '850g'
  }, {
    label: 'Material',
    value: 'Carbon Fiber'
  }, {
    label: 'Flight Time',
    value: '45 min'
  }, {
    label: 'Payload Capacity',
    value: '2.5 kg'
  }],
  detailDescription: 'Add your detailed project description here. This paragraph will appear underneath the main image on the project detail page.',
  detailImages: [{
    imageUrl: '/images/projects/Dino Robot Walker/dino-drawing1.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Dino Robot Walker/dino-drawing2.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Dino Robot Walker/robot-walker.gif',
    aspectRatio: 'auto',
    size: 'full'
  }, {
    imageUrl: '/images/projects/Dino Robot Walker/dino-solidworks-isometric.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Dino Robot Walker/dino-real-isometric1.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Dino Robot Walker/dino-real-isometric2.webp',
    aspectRatio: 'auto'
  }]
}, {
  id: '2',
  title: '3D Printed Footwear',
  category: ['Mechanical', 'Industrial Design'],
  description: 'Custom-fit and printed footwear made from digital scans.',
  imageUrl: '/images/projects/3D Printed Footwear /nexus-cover.webp',
  overview: 'Developed a precision hydraulic actuator system for industrial robotic arms requiring high force output with minimal position error. The system integrates servo valves with closed-loop feedback for sub-millimeter accuracy.',
  challenge: 'Existing hydraulic systems lacked the precision needed for modern manufacturing tasks, with position errors exceeding 5mm under full load conditions.',
  solution: 'Designed a custom servo valve assembly with integrated position sensors and implemented a PID control algorithm. Achieved position accuracy of ±0.5mm even under maximum load conditions.',
  processImages: ['/images/3d-printed-footwear-process-1.jpg', '/images/3d-printed-footwear-process-2.jpg', '/images/3d-printed-footwear-process-3.jpg'],
  specs: [{
    label: 'Max Force',
    value: '50 kN'
  }, {
    label: 'Accuracy',
    value: '±0.5 mm'
  }, {
    label: 'Response Time',
    value: '50 ms'
  }, {
    label: 'Operating Pressure',
    value: '250 bar'
  }],
  detailDescription: 'Add your detailed project description here. This paragraph will appear underneath the main image on the project detail page.',
  detailImages: [{
    imageUrl: '/images/projects/3D Printed Footwear /nexus-blender-front.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/3D Printed Footwear /nexus-blender-profile.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/3D Printed Footwear /shoe-print.gif',
    aspectRatio: 'auto',
    size: 'full'
  }, {
    imageUrl: '/images/projects/3D Printed Footwear /nexus-blender-rear.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/3D Printed Footwear /nexus-blender-top.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/3D Printed Footwear /nexus-blender-bottom.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/3D Printed Footwear /nexus-blender-profile-medial.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/3D Printed Footwear /nexus-isometric.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/3D Printed Footwear /nexus-profile.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/3D Printed Footwear /nexus-overhead.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/3D Printed Footwear /nexus-cross-section.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/3D Printed Footwear /nexus-slicer.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/3D Printed Footwear /slicer-optimization1.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/3D Printed Footwear /slicer-optimization2.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/3D Printed Footwear /nexus-website.webp',
    aspectRatio: 'auto'
  }]
}, {
  id: '3',
  title: 'Running Biomechanics',
  category: 'Programming',
  description: 'Deriving angular velocity based metrics of running mechanics.',
  imageUrl: '/images/projects/Running Biomechanics /biomechanics-cover.webp',
  overview: 'Engineered an advanced liquid cooling system for electric vehicle battery packs to maintain optimal operating temperatures and extend battery life. The design prioritizes uniform temperature distribution across all cells.',
  challenge: 'High-density battery packs generate significant heat during charging and discharge cycles, leading to thermal gradients that reduce performance and lifespan.',
  solution: 'Created a serpentine cooling channel design with optimized flow rates using CFD analysis. Integrated with smart thermal management software to dynamically adjust cooling based on real-time cell temperatures.',
  processImages: ['/images/running-biomechanics-process-1.jpg', '/images/running-biomechanics-process-2.jpg', '/images/running-biomechanics-process-3.jpg'],
  specs: [{
    label: 'Cooling Capacity',
    value: '5 kW'
  }, {
    label: 'Temp Uniformity',
    value: '±2°C'
  }, {
    label: 'Weight',
    value: '12 kg'
  }, {
    label: 'Efficiency Gain',
    value: '15%'
  }],
  detailDescription: 'Add your detailed project description here. This paragraph will appear underneath the main image on the project detail page.',
  detailImages: [{
    imageUrl: '/images/projects/Running Biomechanics /imu-analysis-timeline.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Running Biomechanics /angular-velocity-matched.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Running Biomechanics /nathan-running.gif',
    aspectRatio: 'auto',
    size: 'full'
  }, {
    imageUrl: '/images/projects/Running Biomechanics /angular-velocity-flipped.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Running Biomechanics /index-application.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Running Biomechanics /zoomed-index-application.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Running Biomechanics /manual-peak-correction.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Running Biomechanics /grass-symmetry-graph.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Running Biomechanics /grass-symmetry-stats.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Running Biomechanics /grass-duration-graph.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Running Biomechanics /grass-duration-stats.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Running Biomechanics /grass-repeatability-graph.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Running Biomechanics /grass-repeatability-stats.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Running Biomechanics /woods-duration-graph.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Running Biomechanics /woods-duration-stats.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Running Biomechanics /trail-pilot-gps-map.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Running Biomechanics /umill-puma-materials.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Running Biomechanics /umill-puma-treadmill.webp',
    aspectRatio: 'auto'
  }]
}, {
  id: '4',
  title: 'AirPods Max Redesign',
  category: ['Mechanical', 'Industrial Design'],
  description: 'Brief description of your project that will appear on the project card.',
  imageUrl: '/images/projects/Airpods Max Redesign/apm-cover.webp',
  overview: 'Provide a detailed overview of your project here. This will appear on the project detail page.',
  challenge: 'Describe the challenge or problem your project addresses.',
  solution: 'Explain your solution and how it addresses the challenge.',
  processImages: ['/images/airpods-max-redesign-process-1.jpg', '/images/airpods-max-redesign-process-2.jpg', '/images/airpods-max-redesign-process-3.jpg'],
  specs: [{
    label: 'Spec 1',
    value: 'Value 1'
  }, {
    label: 'Spec 2',
    value: 'Value 2'
  }, {
    label: 'Spec 3',
    value: 'Value 3'
  }, {
    label: 'Spec 4',
    value: 'Value 4'
  }],
  detailDescription: 'Add your detailed project description here. This paragraph will appear underneath the main image on the project detail page.',
  detailImages: [{
    imageUrl: '/images/projects/Airpods Max Redesign/apm-head-isometric.webp',
    size: 'half',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Airpods Max Redesign/apm-head-profile.webp',
    size: 'half',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Airpods Max Redesign/apm-assembly-drawing.webp',
    size: 'full',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Airpods Max Redesign/apm-ear-closeup.webp',
    size: 'half',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Airpods Max Redesign/apm-slide1.webp',
    size: 'full',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Airpods Max Redesign/apm-slide2.webp',
    size: 'full',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Airpods Max Redesign/apm-slide3.webp',
    size: 'full',
    aspectRatio: 'auto'
  }]
}, {
  id: '5',
  title: 'Truss Bridge',
  category: 'Mechanical',
  description: 'Made in solid mechanics class',
  imageUrl: '/images/projects/Truss Bridge /truss-cover.webp',
  overview: 'Created a collaborative robotic arm with integrated computer vision for adaptive manufacturing tasks. The system can identify parts, adjust grip force, and perform quality inspection in real-time.',
  challenge: 'Traditional industrial robots require extensive programming for each task and cannot adapt to variations in part placement or quality, leading to production delays.',
  solution: 'Integrated a vision system with machine learning-based object recognition and force-sensitive grippers. The arm can autonomously adjust to part variations and detect defects with 99.2% accuracy.',
  processImages: ['/images/truss-bridge-process-1.jpg', '/images/truss-bridge-process-2.jpg', '/images/truss-bridge-process-3.jpg'],
  specs: [{
    label: 'Reach',
    value: '850 mm'
  }, {
    label: 'Payload',
    value: '5 kg'
  }, {
    label: 'Repeatability',
    value: '±0.05 mm'
  }, {
    label: 'Vision Resolution',
    value: '12 MP'
  }],
  detailDescription: 'Add your detailed project description here. This paragraph will appear underneath the main image on the project detail page.',
  detailImages: [{
    imageUrl: '/images/projects/Truss Bridge /truss-sketch.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-v1-dualview-sw.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /bridge-break-gif.gif',
    aspectRatio: 'auto',
    size: 'full'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-v1-dualview-fea.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-v1-buckling.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-v2-isometric-sw.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-v2-isometricdual-sw.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-v2-fea-blue.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-v2-fea-final.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-v2-fea-closeup-final.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-v2-deflection.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-v2-deflection-final.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-v2-buckling.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-v2-buckling-2kn.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-sap2000.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-failure.webp',
    aspectRatio: 'auto'
  }]
}, {
  id: '6',
  title: 'Other CAD',
  category: ['Mechanical', 'Industrial Design'],
  description: 'Brief description of your project that will appear on the project card.',
  imageUrl: '/images/projects/Other CAD/other-cad-cover.webp',
  overview: 'Provide a detailed overview of your project here. This will appear on the project detail page.',
  challenge: 'Describe the challenge or problem your project addresses.',
  solution: 'Explain your solution and how it addresses the challenge.',
  processImages: ['/images/other-cad-process-1.jpg', '/images/other-cad-process-2.jpg', '/images/other-cad-process-3.jpg'],
  specs: [{
    label: 'Spec 1',
    value: 'Value 1'
  }, {
    label: 'Spec 2',
    value: 'Value 2'
  }, {
    label: 'Spec 3',
    value: 'Value 3'
  }, {
    label: 'Spec 4',
    value: 'Value 4'
  }],
  detailDescription: 'Add your detailed project description here. This paragraph will appear underneath the main image on the project detail page.',
  detailImages: [{
    imageUrl: '/images/projects/Other CAD/geneva-wheel-drawing.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Other CAD/pivot-arm-drawing.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Other CAD/spur-gears.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Other CAD/bike-stem-spacer.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Other CAD/spool-rack.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Other CAD/lattice-cubes.webp',
    aspectRatio: 'auto'
  }]
}, {
  id: '7',
  title: 'Microfluidics Research',
  category: 'Mechanical',
  description: 'Brief description of your project that will appear on the project card.',
  imageUrl: '/images/projects/Microfluidics Research /microfluidics-cover.webp',
  overview: 'Provide a detailed overview of your project here. This will appear on the project detail page.',
  challenge: 'Describe the challenge or problem your project addresses.',
  solution: 'Explain your solution and how it addresses the challenge.',
  processImages: ['/images/project-7-process-1.jpg', '/images/project-7-process-2.jpg', '/images/project-7-process-3.jpg'],
  specs: [{
    label: 'Spec 1',
    value: 'Value 1'
  }, {
    label: 'Spec 2',
    value: 'Value 2'
  }, {
    label: 'Spec 3',
    value: 'Value 3'
  }, {
    label: 'Spec 4',
    value: 'Value 4'
  }],
  detailDescription: 'Add your detailed project description here. This paragraph will appear underneath the main image on the project detail page.',
  detailImages: [{
    imageUrl: '/images/projects/Microfluidics Research /complex-fluids-logo.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Microfluidics Research /droplet-maker-horizontal.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Microfluidics Research /droplet-maker.gif',
    aspectRatio: 'auto',
    size: 'full'
  }, {
    imageUrl: '/images/projects/Microfluidics Research /alginate-overhead.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Microfluidics Research /vpdms-normal.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Microfluidics Research /vpdms-fluorescent.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Microfluidics Research /rheometer.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Microfluidics Research /northeastern-ysp-poster.webp',
    aspectRatio: 'auto',
    size: 'full'
  }]
}, {
  id: '8',
  title: 'Modular Running Shoe',
  category: 'Mechanical',
  description: 'Brief description of your project that will appear on the project card.',
  imageUrl: '/images/projects/Modular Running Shoe/modular-cover.png',
  overview: 'Provide a detailed overview of your project here. This will appear on the project detail page.',
  challenge: 'Describe the challenge or problem your project addresses.',
  solution: 'Explain your solution and how it addresses the challenge.',
  processImages: ['/images/modular-running-shoe-process-1.jpg', '/images/modular-running-shoe-process-2.jpg', '/images/modular-running-shoe-process-3.jpg'],
  specs: [{
    label: 'Spec 1',
    value: 'Value 1'
  }, {
    label: 'Spec 2',
    value: 'Value 2'
  }, {
    label: 'Spec 3',
    value: 'Value 3'
  }, {
    label: 'Spec 4',
    value: 'Value 4'
  }],
  detailDescription: 'Add your detailed project description here. This paragraph will appear underneath the main image on the project detail page.',
  detailImages: [{
    imageUrl: '/images/projects/Modular Running Shoe/modular-sketch.png',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Modular Running Shoe/modular-ideation.png',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Modular Running Shoe/modular-fea.png',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Modular Running Shoe/modular-techpack1.png',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Modular Running Shoe/modular-techpack2.png',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Modular Running Shoe/modular-techpack3.png',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Modular Running Shoe/modular-techpack-4.png',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Modular Running Shoe/cupsole-isometric.png',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Modular Running Shoe/cupsole-overhead.png',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Modular Running Shoe/cupsole-printed.jpeg',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Modular Running Shoe/outsole-isometric.png',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Modular Running Shoe/modular-bottom.jpeg',
    aspectRatio: 'auto'
  }]
}, {
  id: '9',
  title: 'Desk Lamp',
  category: 'Industrial Design',
  description: 'A configurable lamp made with digital fabrication.',
  imageUrl: '/images/projects/Desk Lamp/lamp-cover.webp',
  overview: 'Redesigned turbine blade geometry for next-generation jet engines using computational fluid dynamics and additive manufacturing techniques. The new design achieves higher efficiency while reducing manufacturing complexity.',
  challenge: 'Conventional turbine blades are limited by traditional manufacturing constraints, preventing optimal aerodynamic profiles that could significantly improve engine efficiency.',
  solution: 'Utilized CFD simulations to optimize blade geometry without manufacturing constraints, then employed selective laser melting to produce complex internal cooling channels. Achieved 3.5% efficiency improvement.',
  processImages: ['/images/modular-desk-lamp-process-1.jpg', '/images/modular-desk-lamp-process-2.jpg', '/images/modular-desk-lamp-process-3.jpg'],
  specs: [{
    label: 'Material',
    value: 'Inconel 718'
  }, {
    label: 'Max Temp',
    value: '1100°C'
  }, {
    label: 'Efficiency Gain',
    value: '3.5%'
  }, {
    label: 'Manufacturing',
    value: 'SLM'
  }],
  detailDescription: 'Add your detailed project description here. This paragraph will appear underneath the main image on the project detail page.',
  detailImages: [{
    imageUrl: '/images/projects/Desk Lamp/lamp-isometric-light.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Desk Lamp/lamp-isometric-dark.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Desk Lamp/lamp-front-light.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Desk Lamp/lamp-side-dark.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Desk Lamp/lamp-joint-gyroid.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Desk Lamp/lamp-joint-solid.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Desk Lamp/lamp-side-gyroid.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Desk Lamp/lamp-panel.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Desk Lamp/lamp-panel-front.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Desk Lamp/lamp-panel-isometric.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Desk Lamp/lamp-panel-acrylic.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Desk Lamp/lamp-close-corner.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Desk Lamp/panel-acrylic-close.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Desk Lamp/panel-overhead-paper.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Desk Lamp/panel-overhead-acrylicpaper.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Desk Lamp/panel-overhead-acrylicvinyl.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Desk Lamp/wood-pattern-cardstock.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Desk Lamp/wood-pattern-cube.webp',
    aspectRatio: 'auto'
  }]
}, {
  id: '10',
  title: 'Design Sketching',
  category: ['Art', 'Industrial Design'],
  description: 'Multi-axis joint mechanism mimicking natural gait patterns with adaptive damping control.',
  imageUrl: '/images/projects/Design Sketching/engs11-cover.webp',
  overview: 'Developed an advanced prosthetic knee joint with microprocessor-controlled damping that adapts to different walking speeds and terrain conditions, providing a more natural gait for amputees.',
  challenge: 'Traditional prosthetic joints use fixed damping, resulting in unnatural movement patterns and increased energy expenditure for users across varying activities.',
  solution: 'Implemented a magnetorheological damper controlled by an embedded microprocessor that analyzes gait phase in real-time and adjusts resistance accordingly. Reduced metabolic cost by 18% compared to passive prosthetics.',
  processImages: ['/images/cad-sketch-gallery-process-1.jpg', '/images/cad-sketch-gallery-process-2.jpg', '/images/cad-sketch-gallery-process-3.jpg'],
  specs: [{
    label: 'Weight',
    value: '1.2 kg'
  }, {
    label: 'Battery Life',
    value: '48 hours'
  }, {
    label: 'Response Time',
    value: '20 ms'
  }, {
    label: 'Max Load',
    value: '120 kg'
  }],
  detailDescription: 'Add your detailed project description here. This paragraph will appear underneath the main image on the project detail page.',
  detailImages: [{
    imageUrl: '/images/projects/Design Sketching/engs11-bike-kinematics.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Design Sketching/engs11-bikegears.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Design Sketching/engs11-gears.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Design Sketching/engs11-lamp.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Design Sketching/engs11-wheelbarrow.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Design Sketching/engs11-canoe.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Design Sketching/engs11-penguin1.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Design Sketching/engs11-penguin2.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Design Sketching/engs11-glucose-sensor.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Design Sketching/engs11-ledyard.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Design Sketching/engs11-ledyard2.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Design Sketching/engs11-roadbike.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Design Sketching/engs11-windup-mechanism.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Design Sketching/engs11-storyboard.webp',
    aspectRatio: 'auto'
  }]
}, {
  id: '11',
  title: 'Drawing',
  category: 'Art',
  description: 'Brief description of your project that will appear on the project card.',
  imageUrl: '/images/projects/Drawing /eye-cover.jpeg',
  overview: 'Provide a detailed overview of your project here. This will appear on the project detail page.',
  challenge: 'Describe the challenge or problem your project addresses.',
  solution: 'Explain your solution and how it addresses the challenge.',
  processImages: ['/images/project-8-process-1.jpg', '/images/project-8-process-2.jpg', '/images/project-8-process-3.jpg'],
  specs: [{
    label: 'Spec 1',
    value: 'Value 1'
  }, {
    label: 'Spec 2',
    value: 'Value 2'
  }, {
    label: 'Spec 3',
    value: 'Value 3'
  }, {
    label: 'Spec 4',
    value: 'Value 4'
  }],
  detailDescription: 'Add your detailed project description here. This paragraph will appear underneath the main image on the project detail page.',
  detailImages: [{
    imageUrl: '/images/projects/Drawing /portrait-pondering.webp',
    aspectRatio: 'portrait'
  }, {
    imageUrl: '/images/projects/Drawing /portrait-profile.webp',
    aspectRatio: 'portrait'
  }, {
    imageUrl: '/images/projects/Drawing /portrait-overhead.webp',
    aspectRatio: 'portrait'
  }, {
    imageUrl: '/images/projects/Drawing /portrait-eye-cover.webp',
    aspectRatio: 'portrait'
  }, {
    imageUrl: '/images/projects/Drawing /portrait-winking.webp',
    aspectRatio: 'portrait'
  }, {
    imageUrl: '/images/projects/Drawing /drawing-spoon.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Drawing /drapery-draped.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Drawing /drapery-flat.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Drawing /eraser-1.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Drawing /eraser-2.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Drawing /paper-crumpled.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Drawing /stools-negative.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Drawing /stools-reverse-negative.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Drawing /lynn-landscape.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Drawing /quebec-landscape.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Drawing /statues-gallery.webp',
    aspectRatio: 'auto'
  }]
}, {
  id: '12',
  title: 'Sculpture',
  category: 'Art',
  description: 'Brief description of your project that will appear on the project card.',
  imageUrl: '/images/projects/Sculpture /sculpture-cover.webp',
  overview: 'Provide a detailed overview of your project here. This will appear on the project detail page.',
  challenge: 'Describe the challenge or problem your project addresses.',
  solution: 'Explain your solution and how it addresses the challenge.',
  processImages: ['/images/project-9-process-1.jpg', '/images/project-9-process-2.jpg', '/images/project-9-process-3.jpg'],
  specs: [{
    label: 'Spec 1',
    value: 'Value 1'
  }, {
    label: 'Spec 2',
    value: 'Value 2'
  }, {
    label: 'Spec 3',
    value: 'Value 3'
  }, {
    label: 'Spec 4',
    value: 'Value 4'
  }],
  detailDescription: 'Add your detailed project description here. This paragraph will appear underneath the main image on the project detail page.',
  detailImages: [{
    imageUrl: '/images/projects/Sculpture /sculpture-1.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Sculpture /sculpture-2.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Sculpture /sculpture-3.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Sculpture /sculpture-4.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Sculpture /sculpture-5.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Sculpture /sculpture-6.webp',
    aspectRatio: 'auto'
  }]
}];
export const CATEGORIES = ['All', 'Mechanical', 'Programming', 'Industrial Design', 'Art'];