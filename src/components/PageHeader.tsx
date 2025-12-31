import React from 'react';
import { motion } from 'framer-motion';
interface PageHeaderProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}
export function PageHeader({
  title,
  subtitle,
  centered = true
}: PageHeaderProps) {
  return <section className={`pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 px-4 sm:px-6 max-w-7xl mx-auto ${centered ? 'text-center' : 'text-left'}`}>
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-4 sm:mb-6">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>
      </motion.div>
    </section>;
}