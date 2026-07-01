import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, Clock, Dumbbell, BarChart3 } from 'lucide-react';
import { Container, SectionHeading, Card, Badge, Button } from '../ui';
import { programs } from '../../data';
import { staggerContainer, staggerItem } from '../../animations/variants';
import { Link } from 'react-router-dom';

const difficultyColors = {
  Beginner: 'success',
  Intermediate: 'accent',
  Advanced: 'warning',
  Expert: 'primary',
} as const;

const difficultyOrder = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
  Expert: 4,
};

export function ProgramsGrid() {
  return (
    <section className="py-20 md:py-32 bg-secondary-50 dark:bg-secondary-950">
      <Container>
        <SectionHeading
          badge="Our Programs"
          title="Complete Training Programs"
          subtitle="Discover our comprehensive range of fitness programs designed for every goal, from weight loss to bodybuilding."
          highlight="Training Programs"
          className="mb-12"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {programs.map((program) => (
            <motion.div key={program.id} variants={staggerItem}>
              <Link to={`/programs#${program.title.toLowerCase().replace(/\s/g, '-')}`}>
                <Card className="group overflow-hidden h-full" hover>
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 dark:bg-card-dark/90">
                        {program.category}
                      </Badge>
                    </div>

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

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-secondary-500 dark:text-muted-dark">
                        <Clock className="w-4 h-4 text-primary-500" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-secondary-500 dark:text-muted-dark">
                        <Flame className="w-4 h-4 text-orange-500" />
                        <span>{program.caloriesBurned} cal/hr</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-secondary-500 dark:text-muted-dark">
                        <Dumbbell className="w-4 h-4 text-blue-500" />
                        <span>{program.sessions} sessions</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-secondary-500 dark:text-muted-dark">
                        <BarChart3 className="w-4 h-4 text-green-500" />
                        <span>{difficultyOrder[program.difficulty as keyof typeof difficultyOrder]}/4 Level</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {program.features.slice(0, 2).map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-2 py-1 bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-muted-dark rounded-lg"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                        View Program
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
