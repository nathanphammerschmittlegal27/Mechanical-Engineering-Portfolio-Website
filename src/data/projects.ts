export interface Project {
  id: string;
  title: string;
  category: string | string[];
  description: string;
  imageUrl: string;
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
  description: 'March - May 2025',
  imageUrl: '/images/projects/Dino Robot Walker/dino-cover.webp',
  detailDescription: 'I designed and built a bipedal "Dino" walking robot for a kinematics and computer-aided design course, focusing on mechanically efficient gait generation using a rotational four-bar linkage. The linkage converts continuous rotational input into a controlled translational foot path, enabling stable forward motion without active leg control.\n\nI modeled and optimized the linkage geometry in GeoGebra to level the coupler foot trajectory relative to the robot body, then translated the design into a full SolidWorks assembly. The final system integrates 3D-printed and laser-cut structural components, servos, fasteners, and a radio receiver.\n\nThis project required a focus on tolerances, alignment, and repeatable assembly to ensure smooth, reliable motion.',
  detailImages: [{
    imageUrl: '/images/projects/Dino Robot Walker/dino-drawing1.webp',
    aspectRatio: 'auto',
    size: 'two-thirds'
  }, {
    imageUrl: '/images/projects/Dino Robot Walker/dino-drawing2.webp',
    aspectRatio: 'auto',
    size: 'two-thirds'
  }, {
    imageUrl: '/images/projects/Dino Robot Walker/robot-walker.gif',
    aspectRatio: 'auto',
    size: 'full'
  }, {
    imageUrl: '/images/projects/Dino Robot Walker/dino-solidworks-isometric.webp',
    aspectRatio: 'auto',
    size: 'two-thirds'
  }, {
    imageUrl: '/images/projects/Dino Robot Walker/dino-real-isometric2.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Dino Robot Walker/dino-real-isometric1.webp',
    aspectRatio: 'auto'
  }]
}, {
  id: '2',
  title: '3D Printed Footwear',
  category: ['Mechanical', 'Industrial Design'],
  description: 'February 2025 - Present',
  imageUrl: '/images/projects/3D Printed Footwear /nexus-cover.webp',
  detailDescription: 'I have been developing 3D-printed footwear as an ongoing engineering and entrepreneurship project, using FDM printing to rethink how everyday shoes are designed and manufactured. Traditional footwear relies on dozens of stitched and glued components, overseas production, large inventory commitments, and a carbon-intensive supply chain. In contrast, additive manufacturing enables on-demand, domestic production with minimal waste and radically simplified assembly.\n\nThis project has scaled into a startup, NEXUS Footwear, which I co-founded with two other Dartmouth students. I lead the mechanical design and manufacturing effort, iterating through 50+ printed prototypes, maintaining a small print farm, and refining geometry and print parameters to improve comfort, durability, and fit for users with foot abnormalities. The goal is to commercialize custom-fit, 3D-printed shoes designed for everyday wear.\n\nCheck it out at nexusfootwear.com.',
  detailImages: [{
    imageUrl: '/images/projects/3D Printed Footwear /nexus-website.webp',
    aspectRatio: 'auto',
    size: 'full'
  }, {
    imageUrl: '/images/projects/3D Printed Footwear /shoe-print.gif',
    aspectRatio: 'auto',
    size: 'full'
  }, {
    imageUrl: '/images/projects/3D Printed Footwear /nexus-blender-front.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/3D Printed Footwear /nexus-blender-profile.webp',
    aspectRatio: 'auto'
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
    aspectRatio: 'auto',
    size: 'two-thirds'
  }]
}, {
  id: '3',
  title: 'Running Biomechanics',
  category: 'Programming',
  description: 'June - August 2024',
  imageUrl: '/images/projects/Running Biomechanics /biomechanics-cover.webp',
  detailDescription: 'I worked as a research assistant in the Integrated Locomotion Laboratory at the University of Massachusetts Amherst (UMILL), where I independently led a project focused on extracting biomechanically meaningful metrics from Inertial Measurement Units (IMUs) during outdoor trail running. Rather than relying on error-prone stride length reconstruction, I developed and validated an IMU processing pipeline centered on angular-velocity–based metrics such as stride symmetry, repeatability, and peak and average joint angular velocities.\n\nThis work involved designing stride segmentation methods using acceleration and jerk signals, implementing Dynamic Time Warping to compare strides across legs and conditions, and building reusable analysis scripts to support future studies on terrain, footwear, and lighting effects in trail running. I also assisted graduate students with data collection, signal processing, and visualization across multiple biomechanics projects in the lab.',
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
  description: 'November 2025',
  imageUrl: '/images/projects/Airpods Max Redesign/apm-cover.webp',
  detailDescription: 'I redesigned the ear cup and cushion system of the AirPods Max to improve long-duration comfort and fit consistency across a wide range of users. Through ergonomic research, I identified limitations in the existing design, including symmetric ear cushions that create uneven pressure distribution and a fixed clamping force that does not accommodate variation in head and ear geometry.\n\nThe redesign introduces a form-fitting, asymmetric cushion geometry matched to a 3D head model to improve pressure distribution while maintaining acoustic sealing. I also developed a modular spacer system that allows users to tune ear clearance and clamping force within a controlled range, improving comfort without altering the headband or hinge. All components were modeled and assembled in Fusion 360, with geometry development informed by Blender-based curve extraction and validated through and free-body analysis.\n\nThis project required a combination of ergonomic research, CAD and surfacing, mechanical design, tolerance analysis, and systems-level thinking to improve comfort while working within strict hardware constraints.',
  detailImages: [{
    imageUrl: '/images/projects/Airpods Max Redesign/apm-head-isometric.webp',
    size: 'half',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Airpods Max Redesign/apm-head-profile.webp',
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
  }, {
    imageUrl: '/images/projects/Airpods Max Redesign/apm-assembly-drawing.webp',
    size: 'half',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Airpods Max Redesign/apm-ear-closeup.webp',
    size: 'half',
    aspectRatio: 'auto'
  }]
}, {
  id: '5',
  title: 'Truss Bridge',
  category: 'Mechanical',
  description: 'March - May 2025',
  imageUrl: '/images/projects/Truss Bridge /truss-cover.webp',
  detailDescription: 'I worked as part of a three-person team in the design and fabrication of a lightweight plywood truss bridge for a solid mechanics course, ENGS 033, with the goal of maximizing strength-to-weight ratio under compressive loading. Using SolidWorks FEA and SAP2000, we iteratively optimized member geometry, truss height, and load paths to shift stresses into the outer truss, reinforce high-stress regions, and remove material from minimally loaded members. The final bridge weighed 0.843 kg and featured a dual upper–lower truss system designed to distribute deck loads efficiently.\n\nDuring Instron testing, the bridge carried 20.8 kN (4,500+ lb), exceeding our 16 kN FEA prediction and achieving a load-to-weight ratio of ~24.7. Post-failure analysis showed that collapse occurred via shear failure of vertical cross-member tenons at the deck interface, rather than global buckling or member fracture. This discrepancy highlighted the importance of joint design, glue reinforcement, and fabrication tolerances, and informed proposed design iterations to improve load transfer and reduce shear concentrations at deck connections.',
  detailImages: [{
    imageUrl: '/images/projects/Truss Bridge /truss-sketch.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-sap2000.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /bridge-break-gif.gif',
    aspectRatio: 'auto',
    size: 'full'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-v1-dualview-sw.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-v1-dualview-fea.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-v2-isometric-sw.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-v2-fea-final.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-v2-fea-closeup-final.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-v2-buckling-2kn.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Truss Bridge /truss-failure.webp',
    aspectRatio: 'auto'
  }]
}, {
  id: '6',
  title: 'Other CAD',
  category: ['Mechanical', 'Industrial Design'],
  description: 'September 2022 - Present',
  imageUrl: '/images/projects/Other CAD/other-cad-cover.webp',
  detailDescription: 'I know how to model in SolidWorks (CSWA), Fusion 360, and Blender. These are some miscellaneous models that don\'t fit in with any particular project.',
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
  description: 'July - August 2022',
  imageUrl: '/images/projects/Microfluidics Research /microfluidics-cover.webp',
  detailDescription: 'I conducted summer research through the Northeastern University Young Scholars Program, working in the Complex Fluids Lab to study the synthesis of micro- and macro-scale particles using microfluidic and bulk fluidic techniques. The goal of the project was to produce microparticles with controllable size and mechanical properties for applications such as drug delivery and modeling particle flow in biological systems.\n\nI synthesized sodium alginate particles using syringe dropwise methods and microfluidic droplet makers, and produced vinyterminated PDMS (vPDMS) microparticles through controlled emulsion and sonication processes. I varied chemical concentrations, crosslinking conditions, and sonication time to study their effects on particle size, polydispersity, and stiffness. Particle characterization was performed using microscopy, Dynamic Light Scattering (DLS), and mechanical testing using a rheometer.\n\nThis project required a combination of experimental lab work, microfluidic device operation, materials processing, data analysis, and scientific communication, and introduced me to research at the intersection of fluid mechanics, materials science, and biomedical engineering.',
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
    imageUrl: '/images/projects/Microfluidics Research /northeastern-ysp-poster.webp',
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
  }]
}, {
  id: '8',
  title: 'Modular Running Shoe',
  category: 'Mechanical',
  description: 'February - September 2025',
  imageUrl: '/images/projects/Modular Running Shoe/modular-cover.png',
  detailDescription: 'As a runner, I experienced firsthand how quickly training shoes wear out and how expensive frequent replacements can be. That observation motivated me to co-lead the design and prototyping of a modular running shoe with interchangeable soles, aimed at improving footwear longevity and affordability without sacrificing performance. The concept separated the shoe into a long-lasting upper and a replaceable sole, allowing runners to swap worn or terrain-specific soles instead of discarding an entire shoe. I focused on mechanical interface design, developing TPU-based locking mechanisms (channel and dovetail geometries) that balanced shear strength, flexibility, and ease of use under real running loads.\n\nWe iterated through CAD, tolerance testing, FEA, Instron shear and insertion tests, and user testing to validate the durability and usability of the locking system. While the final prototype demonstrated a viable mechanical solution, the project also raised questions about manufacturing complexity, and scalability.\n\nThis project was initially pursued in ENGS 021, introduction to engineering, but continued as we decided to attempt commercializing the product. This was the first iteration of what is now NEXUS Footwear Company. However, after consulting with manufacturers, exchanging design briefs, and speaking with more professionals in the industry, we pivoted toward a simpler and more scalable solution: fully custom-fit, 3D-printed shoes.',
  detailImages: [{
    imageUrl: '/images/projects/Modular Running Shoe/modular-ideation.png',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Modular Running Shoe/modular-sketch.png',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Modular Running Shoe/modular-sw1.png',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Modular Running Shoe/modular-sw2.png',
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
  description: 'January - March 2025',
  imageUrl: '/images/projects/Desk Lamp/lamp-cover.webp',
  detailDescription: 'I designed and fabricated a modular desk lamp as part of a digital arts and fabrication course, exploring the intersection of structural design, material behavior, and light diffusion. The initial inspiration for the form came from the microscopic cellular structure of wood, which informed the layered panel geometry.\n\nThe design process began with physical prototyping using cardstock, paper, and acrylic to explore material thickness, panel spacing, and layered construction for the lamp body. I then vector-traced the final pattern in Adobe Illustrator, creating files for laser cutting and providing a scalable foundation for further iteration and fabrication.\n\nI designed the joints, stand, and bulb holder in Fusion 360, focusing on friction-fit tolerances that allowed the entire lamp to be assembled without adhesives. The final lamp uses a two-layer system of laser-cut wood and laser-etched acrylic to control light emission and diffusion. I also experimented with gyroid lattice joints to reduce material usage and alter light behavior (I liked the solid joints better)\n\nThis project required a combination of mechanical design, tolerance and material understanding, digital fabrication, and some creativity to optimize the aesthetic design.',
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
  description: 'March - May 2024',
  imageUrl: '/images/projects/Design Sketching/engs11-cover.webp',
  detailDescription: 'I\'ve sketched my whole life and have always used drawing as a way to understand how things work. I rely on sketching constantly in both my design and engineering work, whether I\'m breaking down a mechanical system, planning a graphic layout, or trying to reason through a complicated codebase. For me, sketching is less about making polished drawings and more about thinking clearly.\n\nI recently took a course called The Way Things Work, ENGS 011, taught by illustrator and author David Macaulay, best known for books like The Way Things Work, Cathedral, and Castle. His work focuses on explaining complex systems through clear, structured drawings, and that approach shaped how the course was taught.\n\nThroughout the class, we worked on improving visual communication skills like sequencing, annotation, and using drawings to explain function rather than appearance. The pages shown here are from my sketchbook during the course and reflect how I use sketching as an everyday tool for understanding, exploration, and design.',
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
  description: 'September - December 2024',
  imageUrl: '/images/projects/Drawing /eye-cover.jpeg',
  detailDescription: 'Drawing is how I built my sense of three-dimensional form and learned to really slow down and observe what\'s in front of me. I\'ll always draw as a way to relax and capture a moment, but it\'s also something I\'ve studied through studio art courses at Dartmouth. I mostly work in graphite, charcoal, and ink, and I\'m drawn to mediums that reward patience and close looking. I\'m inspired by artists like David Macaulay for his clear, explanatory drawings, Giovanni Battista Piranesi for his dramatic architectural spaces, and Stephen Bauman for his sensitivity to form. These are some drawings I\'ve made over the years.',
  detailImages: [{
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
  }, {
    imageUrl: '/images/projects/Drawing /portrait-pondering.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Drawing /portrait-overhead.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Drawing /portrait-eye-cover.webp',
    aspectRatio: 'auto'
  }, {
    imageUrl: '/images/projects/Drawing /portrait-winking.webp',
    aspectRatio: 'auto'
  }]
}, {
  id: '12',
  title: 'Sculpture',
  category: 'Art',
  description: 'July - August 2025',
  imageUrl: '/images/projects/Sculpture /sculpture-cover.webp',
  detailDescription: 'I took a sculpture course at Dartmouth where a big focus was learning what actually adds to a piece and what takes away from it. That way of thinking has carried directly into my product design work, especially when deciding what details are necessary versus what\'s just noise. For my final project, I worked across multiple materials, combining woodworking, plaster casting, and fabric to explore form, texture, and balance. The final result is shown below.',
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