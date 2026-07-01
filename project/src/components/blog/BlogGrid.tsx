import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight } from 'lucide-react';
import { Container, SectionHeading, Card, Badge } from '../ui';
import { blogPosts } from '../../data';
import { staggerContainer, staggerItem } from '../../animations/variants';
import { Link } from 'react-router-dom';

export function BlogGrid() {
  return (
    <section className="py-20 md:py-32 bg-secondary-50 dark:bg-secondary-950">
      <Container>
        <SectionHeading
          badge="Our Blog"
          title="Fitness Tips & Articles"
          subtitle="Stay informed with the latest fitness trends, workout tips, and nutrition advice from our expert team."
          highlight="Tips"
          className="mb-12"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={staggerItem}>
              <Card className="group overflow-hidden h-full" hover>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 dark:bg-card-dark/90">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-muted-dark text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-secondary-500 dark:text-muted-dark mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime} min read
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-muted-dark rounded-lg"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
