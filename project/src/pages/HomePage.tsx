import React from 'react';
import { motion } from 'framer-motion';
import {
  Hero,
  About,
  ProgramsPreview,
  TrainersPreview,
  MembershipPreview,
  TestimonialsPreview,
  FAQPreview,
  CTASection,
} from '../components/home';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export function HomePage() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Hero />
      <About />
      <ProgramsPreview />
      <TrainersPreview />
      <MembershipPreview />
      <TestimonialsPreview />
      <FAQPreview />
      <CTASection />
    </motion.main>
  );
}
