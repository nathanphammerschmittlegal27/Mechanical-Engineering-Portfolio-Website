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
  return <section className={`pt-32 pb-16 px-6 max-w-7xl mx-auto ${centered ? 'text-center' : 'text-left'}`}>
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
          {title}
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>
      </motion.div>
    </section>;
}