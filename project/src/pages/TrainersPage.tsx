import React from 'react';
import { motion } from 'framer-motion';
import { Container, SectionHeading, Card, Badge } from '../components/ui';
import { trainers } from '../data';
import { staggerContainer, staggerItem } from '../animations/variants';
import { Star, Instagram, Twitter, Linkedin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export function TrainersPage() {
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
              Meet Our Trainers
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed">
              World-class certified professionals dedicated to helping you achieve your fitness goals.
              Get to know our expert team.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 md:py-32 bg-secondary-50 dark:bg-secondary-950">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {trainers.map((trainer) => (
              <motion.div key={trainer.id} variants={staggerItem}>
                <Card className="overflow-hidden h-full" hover>
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Rating */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold">{trainer.rating}</span>
                    </div>

                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{trainer.name}</h3>
                      <p className="text-primary-400 font-medium">{trainer.role}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-secondary-600 dark:text-muted-dark text-sm mb-4">
                      {trainer.bio}
                    </p>

                    {/* Specialization */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {trainer.specialization.map((spec) => (
                        <Badge key={spec} variant="secondary" size="sm">{spec}</Badge>
                      ))}
                    </div>

                    {/* Experience */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-secondary-900 dark:text-white">{trainer.experience}</span>
                        <span className="text-sm text-secondary-500 ml-1">years exp.</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {trainer.social.instagram && (
                          <a href={trainer.social.instagram} className="text-secondary-400 hover:text-primary-500 transition-colors">
                            <Instagram className="w-5 h-5" />
                          </a>
                        )}
                        {trainer.social.twitter && (
                          <a href={trainer.social.twitter} className="text-secondary-400 hover:text-primary-500 transition-colors">
                            <Twitter className="w-5 h-5" />
                          </a>
                        )}
                        {trainer.social.linkedin && (
                          <a href={trainer.social.linkedin} className="text-secondary-400 hover:text-primary-500 transition-colors">
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Book Session */}
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors"
                      >
                        <Calendar className="w-5 h-5" />
                        Book Session
                      </motion.button>
                    </Link>
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
