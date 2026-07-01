import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../animations/variants';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  highlight?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  highlight,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  const parts = title.split(highlight || '');

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
      className={`${centered ? 'text-center' : ''} ${className}`}
    >
      {badge && (
        <motion.span
          variants={fadeUp}
          className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary-500 bg-primary-500/10 rounded-full border border-primary-500/20"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-3xl sm:text-4xl md:text-display-md font-bold text-secondary-900 dark:text-white mb-4"
      >
        {highlight ? (
          <>
            {parts[0]}
            <span className="text-primary-500">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="max-w-2xl mx-auto text-lg text-secondary-600 dark:text-muted-dark leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
