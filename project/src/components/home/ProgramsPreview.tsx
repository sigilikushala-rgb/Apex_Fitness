import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, Clock, Dumbbell } from 'lucide-react';
import { Container, SectionHeading, Badge } from '../ui';
import { Card } from '../ui/Card';
import { programs } from '../../data';
import { staggerContainer, staggerItem } from '../../animations/variants';

const difficultyColors = {
  Beginner: 'success',
  Intermediate: 'accent',
  Advanced: 'warning',
  Expert: 'primary',
} as const;

export function ProgramsPreview() {
  const featuredPrograms = programs.slice(0, 6);

  return (
    <section className="py-20 md:py-32 bg-secondary-50 dark:bg-secondary-950">
      <Container>
        <SectionHeading
          badge="Our Programs"
          title="Train Like a Champion"
          subtitle="Discover our expertly designed fitness programs, crafted to help you achieve your goals with precision and efficiency."
          highlight="Champion"
          className="mb-16"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {featuredPrograms.map((program, idx) => (
            <motion.div key={program.id} variants={staggerItem}>
              <Link to={`/programs#${program.title.toLowerCase().replace(/\s/g, '-')}`}>
                <Card className="group overflow-hidden" hover>
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Difficulty Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant={difficultyColors[program.difficulty as keyof typeof difficultyColors]}>
                        {program.difficulty}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-muted-dark text-sm mb-4 line-clamp-2">
                      {program.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1.5 text-secondary-500 dark:text-muted-dark">
                        <Clock className="w-4 h-4" />
                        {program.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-secondary-500 dark:text-muted-dark">
                        <Flame className="w-4 h-4 text-accent-500" />
                        {program.caloriesBurned} cal/hr
                      </div>
                      <div className="flex items-center gap-1.5 text-secondary-500 dark:text-muted-dark">
                        <Dumbbell className="w-4 h-4" />
                        {program.sessions} sessions
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
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
          <Link to="/programs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 transition-colors"
            >
              View All Programs
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
