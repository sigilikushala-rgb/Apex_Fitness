import React from 'react';
import { motion } from 'framer-motion';
import { ProgramsGrid } from '../components/programs/ProgramsGrid';
import { Container } from '../components/ui';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export function ProgramsPage() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="pt-20"
    >
      {/* Header */}
      <section className="py-16 md:py-24 bg-secondary-900 dark:bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10" />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Programs
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed">
              Explore our comprehensive range of fitness programs designed for every goal.
              From strength training to yoga, we have the perfect program for you.
            </p>
          </motion.div>
        </Container>
      </section>

      <ProgramsGrid />
    </motion.main>
  );
}
