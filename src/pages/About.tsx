import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
import { Briefcase, GraduationCap, Award, Wrench } from 'lucide-react';
export function About() {
  return <div className="min-h-screen bg-white font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main>
        <PageHeader title="About Me" subtitle="Mechanical Engineer with a passion for sustainable design and advanced robotics." />

        {/* Bio Section */}
        <section className="max-w-4xl mx-auto px-6 mb-24">
          <div className="prose prose-lg prose-gray mx-auto text-center">
            <p className="text-xl text-gray-600 leading-relaxed">
              I specialize in bridging the gap between theoretical mechanics and
              practical application. With over 5 years of experience in CAD
              design, FEA analysis, and rapid prototyping, I build systems that
              are not only functional but elegant in their efficiency.
            </p>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
              title: 'Design & CAD',
              skills: ['SolidWorks', 'AutoCAD', 'Fusion 360', 'Generative Design']
            }, {
              title: 'Analysis & Simulation',
              skills: ['ANSYS Fluent', 'FEA', 'Thermal Analysis', 'Matlab']
            }, {
              title: 'Prototyping',
              skills: ['3D Printing', 'CNC Machining', 'Laser Cutting', 'PCB Design']
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
        </section>

        {/* Experience Timeline */}
        <section className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
            Experience
          </h2>
          <div className="space-y-12">
            {[{
            role: 'Senior Mechanical Engineer',
            company: 'Tesla',
            period: '2021 - Present',
            description: 'Leading the thermal management systems team for next-gen battery packs. Reduced cooling system weight by 12%.'
          }, {
            role: 'Mechanical Design Engineer',
            company: 'Boston Dynamics',
            period: '2018 - 2021',
            description: 'Designed actuator housings and limb mechanisms for the Spot robot. Collaborated with control teams for dynamic stability.'
          }, {
            role: 'Junior Engineer',
            company: 'SpaceX',
            period: '2016 - 2018',
            description: 'Assisted in the structural analysis of Falcon 9 fairing components. Conducted vibration testing and failure analysis.'
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
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <Briefcase size={20} />
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
        <section className="bg-gray-900 text-white py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <GraduationCap className="w-12 h-12 mx-auto mb-6 text-gray-400" />
            <h2 className="text-3xl font-semibold mb-8">Education</h2>
            <div className="space-y-4">
              <h3 className="text-2xl font-medium">
                M.S. Mechanical Engineering
              </h3>
              <p className="text-gray-400">
                Massachusetts Institute of Technology (MIT) • 2016
              </p>
              <div className="w-12 h-0.5 bg-gray-700 mx-auto my-6" />
              <h3 className="text-2xl font-medium">
                B.S. Mechanical Engineering
              </h3>
              <p className="text-gray-400">Stanford University • 2014</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
}