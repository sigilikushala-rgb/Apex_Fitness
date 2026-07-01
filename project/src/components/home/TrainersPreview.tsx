import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Container, SectionHeading, Badge } from '../ui';
import { trainers } from '../../data';
import { staggerContainer, staggerItem } from '../../animations/variants';

export function TrainersPreview() {
  const featuredTrainers = trainers.slice(0, 4);

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-background-dark">
      <Container>
        <SectionHeading
          badge="Expert Team"
          title="Meet Our Elite Trainers"
          subtitle="World-class certified professionals dedicated to helping you achieve your fitness goals with personalized guidance and motivation."
          highlight="Elite"
          className="mb-16"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {featuredTrainers.map((trainer, idx) => (
            <motion.div
              key={trainer.id}
              variants={staggerItem}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-card-dark shadow-lg border border-secondary-100 dark:border-secondary-800">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-card-dark/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold text-secondary-900 dark:text-white">{trainer.rating}</span>
                  </div>

                  {/* Social Links */}
                  <div className="absolute bottom-20 left-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {trainer.social.instagram && (
                      <motion.a
                        href={trainer.social.instagram}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-primary-500 transition-colors"
                      >
                        <Instagram className="w-4 h-4 text-white" />
                      </motion.a>
                    )}
                    {trainer.social.twitter && (
                      <motion.a
                        href={trainer.social.twitter}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-primary-500 transition-colors"
                      >
                        <Twitter className="w-4 h-4 text-white" />
                      </motion.a>
                    )}
                    {trainer.social.linkedin && (
                      <motion.a
                        href={trainer.social.linkedin}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-primary-500 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </motion.a>
                    )}
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white mb-1">{trainer.name}</h3>
                    <p className="text-secondary-300 text-sm">{trainer.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialization.slice(0, 2).map((spec) => (
                      <Badge key={spec} variant="secondary" size="sm">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/trainers">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-900 dark:bg-white dark:text-secondary-900 hover:bg-secondary-800 dark:hover:bg-secondary-100 text-white font-semibold rounded-xl shadow-lg transition-colors"
            >
              View All Trainers
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
