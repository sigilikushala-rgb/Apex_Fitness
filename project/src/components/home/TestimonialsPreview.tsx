import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, SectionHeading } from '../ui';
import { testimonials } from '../../data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { staggerContainer, staggerItem } from '../../animations/variants';

export function TestimonialsPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 bg-secondary-50 dark:bg-secondary-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-50 dark:opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <SectionHeading
          badge="Success Stories"
          title="Real Results, Real People"
          subtitle="Hear from our members who have transformed their lives with APEX Fitness."
          highlight="Real"
          className="mb-16"
        />

        {/* Main Testimonial */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white dark:bg-card-dark rounded-3xl shadow-2xl border border-secondary-100 dark:border-secondary-800 p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-primary-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/30">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Rating */}
                <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-5 h-5 ${
                        idx < testimonials[currentIndex].rating
                          ? 'text-yellow-500 fill-yellow-500'
                          : 'text-secondary-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-secondary-700 dark:text-secondary-300 text-lg mb-6 leading-relaxed italic">
                  "{testimonials[currentIndex].review}"
                </p>

                {/* Author */}
                <div>
                  <h4 className="text-lg font-bold text-secondary-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary-500 font-medium">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prev}
            className="p-3 bg-white dark:bg-card-dark rounded-xl shadow-lg border border-secondary-100 dark:border-secondary-800 hover:bg-primary-500 hover:text-white text-secondary-600 dark:text-secondary-300 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'bg-primary-500 w-6'
                    : 'bg-secondary-300 dark:bg-secondary-700 hover:bg-secondary-400'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={next}
            className="p-3 bg-white dark:bg-card-dark rounded-xl shadow-lg border border-secondary-100 dark:border-secondary-800 hover:bg-primary-500 hover:text-white text-secondary-600 dark:text-secondary-300 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </Container>
    </section>
  );
}
