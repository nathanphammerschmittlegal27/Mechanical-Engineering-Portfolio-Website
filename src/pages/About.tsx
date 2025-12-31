import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
export function About() {
  return <div className="min-h-screen bg-white font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main>
        <PageHeader title="About" subtitle="Mechanical Engineer and Designer" />

        {/* Profile Picture and Bio Section */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Profile Picture */}
            <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6
            }} className="md:col-span-1">
              <img src="/images/about/profile-picture.webp" alt="Nathan" className="w-full rounded-2xl object-cover shadow-[0_20px_30px_-8px_rgba(0,0,0,0.19)]" />
            </motion.div>
            
            {/* Bio Text */}
            <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6
            }} className="md:col-span-2 space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Hi there, 
                I'm Nathan, an Engineering and Studio Art major at Dartmouth College. I was the first student from my high school accepted into an Ivy League College.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm interested in all things hardware and am always building my skills through projects. I want to make something people want—something that works too well.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm actively seeking roles in <strong>mechanical engineering, product design, robotics, and manufacturing</strong>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Additional Text and Photos Section */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Text on Left */}
            <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="md:col-span-1 space-y-4 flex flex-col justify-start">
              <p className="text-lg text-gray-600 leading-relaxed">
                Outside of engineering and art I'm an active athlete and equipment chair for the Dartmouth Triathlon and Cycling Teams.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Endurance sports have allowed me to push myself in new ways and apply engineering principles to training.
              </p>
            </motion.div>
            
            {/* Two Photos on Right */}
            <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="md:col-span-2 grid grid-cols-5 gap-4">
              <div className="col-span-3 h-[400px] overflow-hidden rounded-2xl shadow-[0_20px_30px_-8px_rgba(0,0,0,0.19)]">
                <img src="/images/about/nathan-finish.webp" alt="Triathlon Finish" className="w-full h-full object-cover object-center" />
              </div>
              <div className="col-span-2 h-[400px] overflow-hidden rounded-2xl shadow-[0_20px_30px_-8px_rgba(0,0,0,0.19)]">
                <img src="/images/about/nathan-podium.webp" alt="Triathlon Podium" className="w-full h-full object-cover object-[50%_20%]" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Grid */}
        {/* <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
              title: 'Design & CAD',
              skills: ['SolidWorks (CSWA)', 'Fusion 360', 'Onshape', 'Blender']
            }, {
              title: 'Simulation & Analysis',
              skills: ['Solidworks FEA', 'Python', 'SAP2000', 'Matlab']
            }, {
              title: 'Prototyping',
              skills: ['3D Printing', 'Technical Drawing', 'Laser Cutting', 'Tolerances']
            }].map((category, idx) => <motion.div key={category.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: idx * 0.1
            }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map(skill => <li key={skill} className="flex items-center text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                        {skill}
                      </li>)}
                  </ul>
                </motion.div>)}
            </div>
          </div>
        </section> */}

        {/* Experience Timeline */}
        <section className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
            Experience
          </h2>
          <div className="space-y-12">
            {[{
            role: 'Co-Founder / Mechanical Engineer',
            company: 'NEXUS',
            period: '2025 - Present',
            description: 'Leading all product design, print optimization, and prototype testing.',
            logo: '/images/about/nexus-logo.png'
          }, {
            role: 'Biomechanics Researcher',
            company: 'University of Massachusetts Amherst',
            period: 'June 2025 - August 2025',
            description: 'Analyzed accelerometer data to extract angular velocty-based metrics of running.',
            logo: '/images/about/umass-logo.png'
          }, {
            role: 'Research Assistant',
            company: 'Northeastern University',
            period: 'June 2022 - August 2022',
            description: 'Sodium alginate and VPDMS particle synthesis using micro and macro fluidic devices.',
            logo: '/images/about/northeastern-logo.png'
          }].map((job, idx) => <motion.div key={idx} initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className={`${job.company === 'NEXUS' ? 'w-16 h-16' : 'w-16 h-16'} overflow-hidden rounded-lg flex-shrink-0 flex items-center justify-center`}>
                    <img src={job.logo} alt={job.company} className={`${job.company === 'NEXUS' ? 'w-14 h-14' : 'w-full h-full'} object-contain`} />
                  </div>
                  {idx !== 2 && <div className="w-0.5 flex-1 bg-gray-100 my-2" />}
                </div>
                <div className="pb-12">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {job.role}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {job.company} • {job.period}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </section>

        {/* Education */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
              Education
            </h2>
            <div className="space-y-8">
              <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} className="bg-white py-12 px-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 overflow-hidden rounded-lg flex-shrink-0">
                    <img src="/images/about/dartmouth-logo.png" alt="Dartmouth College" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      B.A. Engineering Sciences, Studio Art
                    </h3>
                    <p className="text-gray-600">
                      Dartmouth College • 2027
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.1
              }} className="bg-white py-12 px-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <img src="/images/about/thayer-logo.png" alt="Thayer School of Engineering" className="w-16 h-auto object-contain rounded-lg flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      B.E. Mechanical Engineering
                    </h3>
                    <p className="text-gray-600">
                      Dartmouth College • Thayer School of Engineering • 2028
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section className="max-w-4xl mx-auto px-6 py-24">
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }}>
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
              Resume
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
              <div className="aspect-[8.5/11] bg-gray-50 rounded-lg overflow-hidden mb-6 shadow-[0_20px_30px_-8px_rgba(0,0,0,0.19)]">
                <img src="/images/about/resume-preview.png" alt="Resume Preview" className="w-full h-full object-contain" />
              </div>
              <div className="text-center">
                <a href="/NathanHLG_Resume.pdf" download="NathanHLG_Resume.pdf" className="inline-block bg-gray-900 text-white font-medium px-8 py-3 rounded-xl hover:bg-black transition-colors">
                  Download
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>;
}