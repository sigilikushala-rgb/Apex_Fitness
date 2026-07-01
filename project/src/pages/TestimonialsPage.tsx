import React from 'react';
import { motion } from 'framer-motion';
import { Container, SectionHeading, Card } from '../components/ui';
import { testimonials } from '../data';
import { staggerContainer, staggerItem } from '../animations/variants';
import { Star } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export function TestimonialsPage() {
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
              Success Stories
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed">
              Real results from real people. Read how APEX Fitness has transformed lives.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 md:py-32 bg-secondary-50 dark:bg-secondary-950">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={staggerItem}>
                <Card className="p-6 h-full" hover>
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-xl object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-secondary-900 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-primary-500">{testimonial.role}</p>
                      {/* Rating */}
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, idx) => (
                          <Star
                            key={idx}
                            className={`w-3 h-3 ${
                              idx < testimonial.rating
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-secondary-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Review */}
                  <p className="text-secondary-600 dark:text-muted-dark text-sm leading-relaxed">
                    "{testimonial.review}"
                  </p>

                  {/* Date */}
                  <div className="mb-4 pt-4 border-t border-secondary-100 dark:border-secondary-800">
                    <p className="text-xs text-secondary-400">
                      {new Date(testimonial.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </motion.main>
  );
}
