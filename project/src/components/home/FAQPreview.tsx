import React from 'react';
import { motion } from 'framer-motion';
import { Container, SectionHeading, Accordion } from '../ui';
import { faqItems } from '../../data';

export function FAQPreview() {
  const featuredFAQ = faqItems.slice(0, 5);

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-background-dark">
      <Container size="md">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our gym, membership, and programs."
          highlight="Questions"
          className="mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion
            items={featuredFAQ.map((item) => ({
              id: item.id,
              question: item.question,
              answer: item.answer,
            }))}
          />
        </motion.div>
      </Container>
    </section>
  );
}
