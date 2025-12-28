import React from 'react';
import { motion } from 'framer-motion';
export function Hero() {
  return <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6,
      ease: 'easeOut'
    }}>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
          Crafting Digital <br className="hidden md:block" />
          <span className="text-gray-500">Experiences.</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
          A showcase of thoughtful design and engineering. Building products
          that feel natural, intuitive, and human.
        </p>
      </motion.div>
    </section>;
}