import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
import { Mail, MapPin, Phone, CheckCircle, Loader2 } from 'lucide-react';
export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };
  return <div className="min-h-screen bg-white font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main>
        <PageHeader title="Get in Touch" subtitle="Have a project in mind? Let's discuss how we can build something extraordinary together." />

        <div className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.2
          }} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  I'm currently available for freelance projects and consulting.
                  Whether you have a question about my work or want to
                  collaborate, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:hello@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      hello@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 mt-8">
                <div className="flex items-center space-x-3 text-green-600 mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="font-medium text-sm uppercase tracking-wide">
                    Available for work
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Currently accepting new projects for Q4 2023.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.4
          }} className="bg-gray-50 p-8 rounded-3xl">
              {formState === 'success' ? <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                  <button onClick={() => setFormState('idle')} className="mt-8 text-blue-600 font-medium hover:text-blue-700">
                    Send another message
                  </button>
                </div> : <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea id="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white resize-none" placeholder="Tell me about your project..." />
                  </div>
                  <button type="submit" disabled={formState === 'submitting'} className="w-full bg-gray-900 text-white font-medium py-4 rounded-xl hover:bg-black transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center">
                    {formState === 'submitting' ? <>
                        <Loader2 className="animate-spin mr-2" size={20} />
                        Sending...
                      </> : 'Send Message'}
                  </button>
                </form>}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
}