export interface Project {
  id: string;
  title: string;
  category: string;
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
}
export const ENGINEERING_PROJECTS: Project[] = [{
  id: '1',
  title: 'Autonomous Drone Frame',
  category: 'Robotics',
  description: 'Lightweight carbon fiber airframe optimized for endurance and payload stability using generative design.',
  imageUrl: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80&w=2500',
  overview: 'Designed a next-generation drone frame using advanced generative design algorithms and carbon fiber composite materials. The project focused on maximizing flight time while maintaining structural integrity under various payload conditions.',
  challenge: 'Traditional drone frames struggle with the balance between weight reduction and structural strength, especially when carrying heavy sensor payloads for extended periods.',
  solution: 'Implemented topology optimization in Fusion 360 to create an organic, lightweight structure. Used carbon fiber layup techniques to achieve a 40% weight reduction compared to aluminum alternatives while maintaining equivalent strength.',
  processImages: ['https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=2500', 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2500', 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2500'],
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
  }]
}, {
  id: '2',
  title: 'Hydraulic Actuator System',
  category: 'Systems',
  description: 'High-precision hydraulic control unit designed for heavy-load industrial automation arms.',
  imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2500',
  overview: 'Developed a precision hydraulic actuator system for industrial robotic arms requiring high force output with minimal position error. The system integrates servo valves with closed-loop feedback for sub-millimeter accuracy.',
  challenge: 'Existing hydraulic systems lacked the precision needed for modern manufacturing tasks, with position errors exceeding 5mm under full load conditions.',
  solution: 'Designed a custom servo valve assembly with integrated position sensors and implemented a PID control algorithm. Achieved position accuracy of ±0.5mm even under maximum load conditions.',
  processImages: ['https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2500', 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2500', 'https://images.unsplash.com/photo-1581092160366-4a7b0c4c3789?auto=format&fit=crop&q=80&w=2500'],
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
  }]
}, {
  id: '3',
  title: 'EV Battery Thermal Management',
  category: 'Automotive',
  description: 'Liquid cooling solution for high-density battery packs, improving thermal efficiency by 15%.',
  imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=2500',
  overview: 'Engineered an advanced liquid cooling system for electric vehicle battery packs to maintain optimal operating temperatures and extend battery life. The design prioritizes uniform temperature distribution across all cells.',
  challenge: 'High-density battery packs generate significant heat during charging and discharge cycles, leading to thermal gradients that reduce performance and lifespan.',
  solution: 'Created a serpentine cooling channel design with optimized flow rates using CFD analysis. Integrated with smart thermal management software to dynamically adjust cooling based on real-time cell temperatures.',
  processImages: ['https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2500', 'https://images.unsplash.com/photo-1581092160366-4a7b0c4c3789?auto=format&fit=crop&q=80&w=2500', 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=2500'],
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
  }]
}, {
  id: '4',
  title: 'Prosthetic Limb Mechanism',
  category: 'Biomedical',
  description: 'Multi-axis joint mechanism mimicking natural gait patterns with adaptive damping control.',
  imageUrl: 'https://images.unsplash.com/photo-1581093458791-9f302e6d8359?auto=format&fit=crop&q=80&w=2500',
  overview: 'Developed an advanced prosthetic knee joint with microprocessor-controlled damping that adapts to different walking speeds and terrain conditions, providing a more natural gait for amputees.',
  challenge: 'Traditional prosthetic joints use fixed damping, resulting in unnatural movement patterns and increased energy expenditure for users across varying activities.',
  solution: 'Implemented a magnetorheological damper controlled by an embedded microprocessor that analyzes gait phase in real-time and adjusts resistance accordingly. Reduced metabolic cost by 18% compared to passive prosthetics.',
  processImages: ['https://images.unsplash.com/photo-1581092160366-4a7b0c4c3789?auto=format&fit=crop&q=80&w=2500', 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2500', 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=2500'],
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
  }]
}, {
  id: '5',
  title: 'Aerospace Turbine Blade',
  category: 'Aerospace',
  description: 'CFD-optimized turbine blade profile reducing drag and increasing fuel efficiency for next-gen engines.',
  imageUrl: 'https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?auto=format&fit=crop&q=80&w=2500',
  overview: 'Redesigned turbine blade geometry for next-generation jet engines using computational fluid dynamics and additive manufacturing techniques. The new design achieves higher efficiency while reducing manufacturing complexity.',
  challenge: 'Conventional turbine blades are limited by traditional manufacturing constraints, preventing optimal aerodynamic profiles that could significantly improve engine efficiency.',
  solution: 'Utilized CFD simulations to optimize blade geometry without manufacturing constraints, then employed selective laser melting to produce complex internal cooling channels. Achieved 3.5% efficiency improvement.',
  processImages: ['https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=2500', 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2500', 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2500'],
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
  }]
}, {
  id: '6',
  title: 'Smart Manufacturing Arm',
  category: 'Robotics',
  description: '6-DOF robotic arm with integrated vision system for precision assembly lines.',
  imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=2500',
  overview: 'Created a collaborative robotic arm with integrated computer vision for adaptive manufacturing tasks. The system can identify parts, adjust grip force, and perform quality inspection in real-time.',
  challenge: 'Traditional industrial robots require extensive programming for each task and cannot adapt to variations in part placement or quality, leading to production delays.',
  solution: 'Integrated a vision system with machine learning-based object recognition and force-sensitive grippers. The arm can autonomously adjust to part variations and detect defects with 99.2% accuracy.',
  processImages: ['https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2500', 'https://images.unsplash.com/photo-1581092160366-4a7b0c4c3789?auto=format&fit=crop&q=80&w=2500', 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=2500'],
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
  }]
}];
export const CATEGORIES = ['All', 'Robotics', 'Systems', 'Automotive', 'Aerospace', 'Biomedical'];